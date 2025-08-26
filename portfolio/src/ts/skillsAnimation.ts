// src/ts/skillsAnimation.ts

interface Skill {
  element: HTMLElement;
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  width: number; height: number;
}

export function initSkillsAnimation(): void {
  const skillsBox = document.getElementById('skills-box') as HTMLDivElement | null;
  if (!skillsBox) {
    return;
  }

  const skillItems = skillsBox.querySelectorAll<HTMLElement>('.skill-item');
  let skills: Skill[] = [];
  let animationFrameId: number | null = null;
  const speedFactor = 0.5;
  const PHYSICS_ITERATIONS = 4;

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

      skills.push({
        element: item, x, y, radius, width: itemRect.width, height: itemRect.height,
        vx: (Math.random() - 0.5) * 2 * speedFactor,
        vy: (Math.random() - 0.5) * 2 * speedFactor,
      });
    });
    animate();
  };

  const animate = () => {
    const boxRect = skillsBox.getBoundingClientRect();

    // Physics calculations
    skills.forEach((skill, index) => {
        // Wall collision
        if (skill.x - skill.radius < 0 || skill.x + skill.radius > boxRect.width) skill.vx *= -1;
        if (skill.y - skill.radius < 0 || skill.y + skill.radius > boxRect.height) skill.vy *= -1;
        
        // Update position
        skill.x += skill.vx;
        skill.y += skill.vy;

        // Ball collision
        for (let j = index + 1; j < skills.length; j++) {
            const otherSkill = skills[j];
            const dx = otherSkill.x - skill.x;
            const dy = otherSkill.y - skill.y;
            const distance = Math.hypot(dx, dy);
            const minDistance = skill.radius + otherSkill.radius;

            if (distance < minDistance) {
                // Resolve overlap and bounce (simplified for clarity)
                const angle = Math.atan2(dy, dx);
                const overlap = minDistance - distance;
                skill.x -= (overlap / 2) * Math.cos(angle);
                skill.y -= (overlap / 2) * Math.sin(angle);
                otherSkill.x += (overlap / 2) * Math.cos(angle);
                otherSkill.y += (overlap / 2) * Math.sin(angle);

                // Basic bounce
                const tempVx = skill.vx;
                const tempVy = skill.vy;
                skill.vx = otherSkill.vx;
                skill.vy = otherSkill.vy;
                otherSkill.vx = tempVx;
                otherSkill.vy = tempVy;
            }
        }
    });

    // Render
    skills.forEach((skill) => {
      skill.element.style.transform = `translate(${skill.x - skill.width / 2}px, ${skill.y - skill.height / 2}px)`;
    });

    animationFrameId = requestAnimationFrame(animate);
  };

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!animationFrameId) {
            init();
          }
        } else {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        }
      });
    }, { threshold: 0.1 }
  );

  skillsObserver.observe(skillsBox);

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