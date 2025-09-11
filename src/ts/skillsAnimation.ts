// src/ts/skillsAnimation.ts

import { show as showTechModal } from './techModal';

interface Skill {
  element: HTMLElement;
  categorySlug: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  width: number;
  height: number;
  isBeingDragged: boolean;
}

export function initSkillsAnimation(): void {
  const skillsBox = document.getElementById(
    'skills-box'
  ) as HTMLDivElement | null;
  const filterButtons = document.querySelectorAll<HTMLElement>('.legend-item');
  if (!skillsBox || filterButtons.length === 0) return;

  const allSkillElements =
    skillsBox.querySelectorAll<HTMLElement>('.skill-item');

  let allSkills: Skill[] = [];
  let visibleSkills: Skill[] = [];
  const activeFilters = new Set<string>();

  let animationFrameId: number | null = null;

  const bounce = -0.4,
    friction = 0.99,
    driftFactor = 0.02;
  const throwMultiplier = 25,
    maxVelocity = 15,
    speedFactor = 0.5;

  let draggedSkill: Skill | null = null;
  let offsetX = 0,
    offsetY = 0,
    lastMouseX = 0,
    lastMouseY = 0,
    lastTimestamp = 0;
  let throwVelocityX = 0,
    throwVelocityY = 0;

  const init = () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    const boxRect = skillsBox.getBoundingClientRect();
    allSkills = [];
    allSkillElements.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const radius = Math.max(itemRect.width, itemRect.height) / 2;
      let x = radius + Math.random() * (boxRect.width - 2 * radius);
      let y = radius + Math.random() * (boxRect.height - 2 * radius);
      const skill: Skill = {
        element: item,
        categorySlug: item.dataset.category || '',
        x,
        y,
        radius,
        width: itemRect.width,
        height: itemRect.height,
        vx: (Math.random() - 0.5) * 2 * speedFactor,
        vy: (Math.random() - 0.5) * 2 * speedFactor,
        isBeingDragged: false
      };
      allSkills.push(skill);
      item.addEventListener('mousedown', (e) => handleDragStart(e, skill));
      item.addEventListener('touchstart', (e) => handleDragStart(e, skill), {
        passive: false
      });
    });

    // --- NOWY KOD ---
    // Nasłuchuj na opuszczenie przez kursor obszaru kontenera
    skillsBox.addEventListener('mouseleave', () => {
      // Jeśli jakiś element jest aktualnie przeciągany, zakończ tę operację
      if (draggedSkill) {
        handleDragEnd();
      }
    });
    // --- KONIEC NOWEGO KODU ---

    applyFilters();
    animate();
  };

  const applyFilters = () => {
    filterButtons.forEach((btn) => {
      const filter = btn.dataset.filter!;
      if (filter === 'all') {
        btn.classList.toggle('is-active', activeFilters.size === 0);
      } else {
        btn.classList.toggle('is-active', activeFilters.has(filter));
      }
    });

    visibleSkills = allSkills.filter((skill) => {
      const isPython = skill.categorySlug.includes('python');

      const isVisible =
        isPython ||
        activeFilters.size === 0 ||
        activeFilters.has(skill.categorySlug);

      skill.element.classList.toggle('is-hidden', !isVisible);
      return isVisible;
    });
  };

  const animate = () => {
    const boxRect = skillsBox.getBoundingClientRect();
    allSkills.forEach((skill) => {
      if (skill === draggedSkill) return;
      skill.vx += (Math.random() - 0.5) * driftFactor;
      skill.vy += (Math.random() - 0.5) * driftFactor;
      skill.vx *= friction;
      skill.vy *= friction;
      skill.x += skill.vx;
      skill.y += skill.vy;
      const left = skill.x - skill.width / 2,
        right = skill.x + skill.width / 2;
      const top = skill.y - skill.height / 2,
        bottom = skill.y + skill.height / 2;
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
    });
    visibleSkills.forEach((skill, index) => {
      if (skill === draggedSkill) return;
      for (let j = index + 1; j < visibleSkills.length; j++) {
        const otherSkill = visibleSkills[j];
        if (otherSkill === draggedSkill) continue;
        const dx = otherSkill.x - skill.x,
          dy = otherSkill.y - skill.y;
        const distance = Math.hypot(dx, dy),
          minDistance = skill.radius + otherSkill.radius;
        if (distance < minDistance) {
          const angle = Math.atan2(dy, dx),
            overlap = minDistance - distance;
          skill.x -= (overlap / 2) * Math.cos(angle);
          skill.y -= (overlap / 2) * Math.sin(angle);
          otherSkill.x += (overlap / 2) * Math.cos(angle);
          otherSkill.y += (overlap / 2) * Math.sin(angle);
          const tempVx = skill.vx,
            tempVy = skill.vy;
          skill.vx = otherSkill.vx;
          skill.vy = otherSkill.vy;
          otherSkill.vx = tempVx;
          otherSkill.vy = tempVy;
        }
      }
    });
    allSkills.forEach((skill) => {
      let transform = `translate(${skill.x - skill.width / 2}px, ${
        skill.y - skill.height / 2
      }px)`;
      if (skill.element.classList.contains('is-hidden'))
        transform += ' scale(0.5)';
      if (skill === draggedSkill) transform += ' scale(1.15)';
      skill.element.style.transform = transform;
    });
    animationFrameId = requestAnimationFrame(animate);
  };

  const getPointerPosition = (e: MouseEvent | TouchEvent) =>
    'touches' in e ? e.touches[0] : e;
  const handleDragStart = (e: MouseEvent | TouchEvent, skill: Skill) => {
    e.preventDefault();
    draggedSkill = skill;
    draggedSkill.isBeingDragged = false;
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
    draggedSkill.isBeingDragged = true;
    draggedSkill.element.classList.add('is-dragging');
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
    const now = e.timeStamp,
      dt = now - lastTimestamp;
    if (dt > 0) {
      const dx = pointer.clientX - lastMouseX,
        dy = pointer.clientY - lastMouseY;
      throwVelocityX = dx / dt;
      throwVelocityY = dy / dt;
    }
    lastMouseX = pointer.clientX;
    lastMouseY = pointer.clientY;
    lastTimestamp = now;
  };
  const handleDragEnd = () => {
    if (!draggedSkill) return;
    const releasedSkill = draggedSkill;
    if (!releasedSkill.isBeingDragged) {
      const skillName =
        releasedSkill.element.textContent?.trim().split('\n')[0].trim() || '';
      showTechModal(skillName);
    } else {
      releasedSkill.element.classList.remove('is-dragging');
      for (const otherSkill of visibleSkills) {
        if (otherSkill === releasedSkill) continue;
        const dx = otherSkill.x - releasedSkill.x,
          dy = otherSkill.y - releasedSkill.y;
        const distance = Math.hypot(dx, dy),
          minDistance = releasedSkill.radius + otherSkill.radius;
        if (distance < minDistance) {
          const angle = Math.atan2(dy, dx),
            overlap = minDistance - distance;
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
    }
    draggedSkill = null;
    window.removeEventListener('mousemove', handleDragMove);
    window.removeEventListener('touchmove', handleDragMove);
    window.removeEventListener('mouseup', handleDragEnd);
    window.removeEventListener('touchend', handleDragEnd);
  };

  init();

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      if (!filter) return;

      if (filter === 'all') {
        activeFilters.clear();
      } else {
        if (activeFilters.has(filter)) {
          activeFilters.delete(filter);
        } else {
          activeFilters.add(filter);
        }
      }
      applyFilters();
    });
  });

  let resizeTimeout: number;
  let lastBoxWidth = 0;
  let lastBoxHeight = 0;

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (!skillsBox) return;
      const boxRect = skillsBox.getBoundingClientRect();
      if (boxRect.width !== lastBoxWidth || boxRect.height !== lastBoxHeight) {
        lastBoxWidth = boxRect.width;
        lastBoxHeight = boxRect.height;
        if (animationFrameId) init();
      }
    }, 250);
  });
  const nudgeForce = 4;
  setInterval(() => {
    if (visibleSkills.length === 0 || draggedSkill) return;
    const randomIndex = Math.floor(Math.random() * visibleSkills.length);
    const randomSkill = visibleSkills[randomIndex];
    randomSkill.vx += (Math.random() - 0.5) * nudgeForce;
    randomSkill.vy += (Math.random() - 0.5) * nudgeForce;
  }, 3000);
}
