// src/ts/skillsAnimation.ts

interface Skill {
  element: HTMLElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  width: number;
  height: number;
}

export function initSkillsAnimation(): void {
  const skillsBox = document.getElementById(
    'skills-box'
  ) as HTMLDivElement | null;
  if (!skillsBox) {
    return;
  }

  const skillItems = skillsBox.querySelectorAll<HTMLElement>('.skill-item');
  let skills: Skill[] = [];
  let animationFrameId: number | null = null;

  // --- NOWE, KLUCZOWE PARAMETRY FIZYKI ---
  const speedFactor = 0.5;
  const throwMultiplier = 25;
  const maxVelocity = 15;
  const bounce = -0.85; // Tłumienie przy odbiciu od ściany (mniej niż 1.0)
  const friction = 0.99; // Tarcie (spowalnia wszystko z czasem)

  let draggedSkill: Skill | null = null;
  let offsetX = 0;
  let offsetY = 0;
  let lastMouseX = 0;
  let lastMouseY = 0;
  let lastTimestamp = 0;
  let throwVelocityX = 0;
  let throwVelocityY = 0;

  const init = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    const boxRect = skillsBox.getBoundingClientRect();
    skills = [];

    skillItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const radius = Math.max(itemRect.width, itemRect.height) / 2;

      let x = radius + Math.random() * (boxRect.width - 2 * radius);
      let y = radius + Math.random() * (boxRect.height - 2 * radius);

      const skill: Skill = {
        element: item,
        x,
        y,
        radius,
        width: itemRect.width,
        height: itemRect.height,
        vx: (Math.random() - 0.5) * 2 * speedFactor,
        vy: (Math.random() - 0.5) * 2 * speedFactor
      };
      skills.push(skill);

      item.addEventListener('mousedown', (e) => handleDragStart(e, skill));
      item.addEventListener('touchstart', (e) => handleDragStart(e, skill), {
        passive: false
      });
    });
    animate();
  };

  const animate = () => {
    const boxRect = skillsBox.getBoundingClientRect();

    skills.forEach((skill, index) => {
      if (skill === draggedSkill) return;

      // --- ZMIENIONA LOGIKA PĘTLI ANIMACJI ---
      // 1. Zastosuj tarcie
      skill.vx *= friction;
      skill.vy *= friction;

      // 2. Zaktualizuj pozycję
      skill.x += skill.vx;
      skill.y += skill.vy;

      // 3. Sprawdź kolizje ze ścianami PO aktualizacji pozycji
      const left = skill.x - skill.width / 2;
      const right = skill.x + skill.width / 2;
      const top = skill.y - skill.height / 2;
      const bottom = skill.y + skill.height / 2;

      if (left < 0) {
        skill.x = skill.width / 2;
        skill.vx *= bounce;
      } else if (right > boxRect.width) {
        skill.x = boxRect.width - skill.width / 2;
        skill.vx *= bounce;
      }

      if (top < 0) {
        skill.y = skill.height / 2;
        skill.vy *= bounce;
      } else if (bottom > boxRect.height) {
        skill.y = boxRect.height - skill.height / 2;
        skill.vy *= bounce;
      }

      // 4. Sprawdź kolizje z innymi elementami
      for (let j = index + 1; j < skills.length; j++) {
        const otherSkill = skills[j];
        if (otherSkill === draggedSkill) continue;

        const dx = otherSkill.x - skill.x;
        const dy = otherSkill.y - skill.y;
        const distance = Math.hypot(dx, dy);
        const minDistance = skill.radius + otherSkill.radius;

        if (distance < minDistance) {
          const angle = Math.atan2(dy, dx);
          const overlap = minDistance - distance;
          skill.x -= (overlap / 2) * Math.cos(angle);
          skill.y -= (overlap / 2) * Math.sin(angle);
          otherSkill.x += (overlap / 2) * Math.cos(angle);
          otherSkill.y += (overlap / 2) * Math.sin(angle);

          const tempVx = skill.vx;
          const tempVy = skill.vy;
          skill.vx = otherSkill.vx;
          skill.vy = otherSkill.vy;
          otherSkill.vx = tempVx;
          otherSkill.vy = tempVy;
        }
      }
    });

    // 5. Renderuj wszystko na końcu
    skills.forEach((skill) => {
      let transform = `translate(${skill.x - skill.width / 2}px, ${
        skill.y - skill.height / 2
      }px)`;
      if (skill === draggedSkill) {
        transform += ' scale(1.15)';
      }
      skill.element.style.transform = transform;
    });

    animationFrameId = requestAnimationFrame(animate);
  };

  const getPointerPosition = (e: MouseEvent | TouchEvent) => {
    return 'touches' in e ? e.touches[0] : e;
  };

  const handleDragStart = (e: MouseEvent | TouchEvent, skill: Skill) => {
    e.preventDefault();
    draggedSkill = skill;
    draggedSkill.element.classList.add('is-dragging');

    const pointer = getPointerPosition(e);
    const boxRect = skillsBox.getBoundingClientRect();

    offsetX = pointer.clientX - boxRect.left - draggedSkill.x;
    offsetY = pointer.clientY - boxRect.top - draggedSkill.y;

    draggedSkill.vx = 0;
    draggedSkill.vy = 0;

    lastMouseX = pointer.clientX;
    lastMouseY = pointer.clientY;
    lastTimestamp = e.timeStamp;
    throwVelocityX = 0;
    throwVelocityY = 0;

    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('touchmove', handleDragMove, { passive: false });
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!draggedSkill) return;
    e.preventDefault();

    const pointer = getPointerPosition(e);
    const boxRect = skillsBox.getBoundingClientRect();

    let newX = pointer.clientX - boxRect.left - offsetX;
    let newY = pointer.clientY - boxRect.top - offsetY;

    draggedSkill.x = Math.max(
      draggedSkill.width / 2,
      Math.min(boxRect.width - draggedSkill.width / 2, newX)
    );
    draggedSkill.y = Math.max(
      draggedSkill.height / 2,
      Math.min(boxRect.height - draggedSkill.height / 2, newY)
    );

    const now = e.timeStamp;
    const dt = now - lastTimestamp;
    if (dt > 0) {
      const dx = pointer.clientX - lastMouseX;
      const dy = pointer.clientY - lastMouseY;
      throwVelocityX = dx / dt;
      throwVelocityY = dy / dt;
    }
    lastMouseX = pointer.clientX;
    lastMouseY = pointer.clientY;
    lastTimestamp = now;
  };

  const handleDragEnd = () => {
    if (!draggedSkill) return;

    draggedSkill.element.classList.remove('is-dragging');
    const releasedSkill = draggedSkill;

    for (const otherSkill of skills) {
      if (otherSkill === releasedSkill) continue;

      const dx = otherSkill.x - releasedSkill.x;
      const dy = otherSkill.y - releasedSkill.y;
      const distance = Math.hypot(dx, dy);
      const minDistance = releasedSkill.radius + otherSkill.radius;

      if (distance < minDistance) {
        const angle = Math.atan2(dy, dx);
        const overlap = minDistance - distance;
        releasedSkill.x -= overlap * Math.cos(angle);
        releasedSkill.y -= overlap * Math.sin(angle);
      }
    }

    releasedSkill.vx = Math.max(
      -maxVelocity,
      Math.min(maxVelocity, throwVelocityX * throwMultiplier)
    );
    releasedSkill.vy = Math.max(
      -maxVelocity,
      Math.min(maxVelocity, throwVelocityY * throwMultiplier)
    );

    draggedSkill = null;

    window.removeEventListener('mousemove', handleDragMove);
    window.removeEventListener('touchmove', handleDragMove);
    window.removeEventListener('mouseup', handleDragEnd);
    window.removeEventListener('touchend', handleDragEnd);
  };

  init();

  let resizeTimeout: number;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (animationFrameId) {
        init();
      }
    }, 250);
  });
}
