// /src/ts/tech-physics.ts (WERSJA FINALNA, CZYSTA)

import Matter from 'matter-js';

export function setupTechPhysics() {
  const container = document.getElementById('tech-physics-canvas-container');
  const source = document.getElementById('skills-source');

  if (!container || !source) {
    console.error('Nie znaleziono kontenera fizyki lub źródła ikonek.');
    return;
  }

  const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Mouse,
    MouseConstraint,
    Composite
  } = Matter;
  const isMobile = window.innerWidth < 768;

  const engine = Engine.create();
  const world = engine.world;
  engine.world.gravity.y = 1.2;

  const render = Render.create({
    element: container,
    engine: engine,
    options: {
      width: container.clientWidth,
      height: container.clientHeight,
      wireframes: false, // Wyłączamy szkielety - chcemy widzieć ikonki
      background: 'transparent' // Przezroczyste tło
    }
  });

  const createWalls = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    const thickness = 100;

    Composite.remove(
      world,
      world.bodies.filter((body) => body.isStatic)
    );

    World.add(world, [
      Bodies.rectangle(
        width / 2,
        height + thickness / 2,
        width + thickness * 2,
        thickness,
        { isStatic: true }
      ),
      Bodies.rectangle(
        width / 2,
        -thickness / 2,
        width + thickness * 2,
        thickness,
        { isStatic: true }
      ),
      Bodies.rectangle(-thickness / 2, height / 2, thickness, height, {
        isStatic: true
      }),
      Bodies.rectangle(width + thickness / 2, height / 2, thickness, height, {
        isStatic: true
      })
    ]);
  };
  createWalls();

  const skillItems = Array.from(source.querySelectorAll('.skill-item'));
  const ICON_DIAMETER_DEFAULT = 85;

  const iconBodies = skillItems
    .map((item) => {
      const htmlItem = item as HTMLElement;
      const img = htmlItem.querySelector('img.icon') as HTMLImageElement;
      if (!img) return null;

      const iconDiameter = parseInt(
        htmlItem.dataset.size || String(ICON_DIAMETER_DEFAULT)
      );

      // Dopasuj tę wartość, jeśli tekstury są za małe/duże (np. 0.15 lub 0.2)
      const textureScale = 0.18;

      return Bodies.circle(
        container.clientWidth / 4 + (Math.random() * container.clientWidth) / 2,
        -100 - Math.random() * 300,
        iconDiameter / 2,
        {
          restitution: 0.5,
          friction: 0.3,
          density: 0.001,
          render: {
            sprite: {
              texture: img.src,
              xScale: textureScale,
              yScale: textureScale
            }
          }
        }
      );
    })
    .filter((body) => body !== null);

  if (iconBodies.length > 0) {
    World.add(world, iconBodies);
  } else {
    console.warn('[FIZYKA] Nie znaleziono żadnych ikonek do symulacji.');
  }

  if (!isMobile) {
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });
    World.add(world, mouseConstraint);
    render.mouse = mouse;
  } else {
    window.addEventListener('deviceorientation', (event) => {
      const { beta, gamma } = event;
      if (beta !== null && gamma !== null) {
        const gravity = engine.world.gravity;
        gravity.x = Math.min(Math.max(gamma / 45, -1), 1);
        gravity.y = Math.min(Math.max(beta / 45, -1), 1);
      }
    });
  }

  Render.run(render);
  const runner = Runner.create();
  Runner.run(runner, engine);

  window.addEventListener('resize', () => {
    if (!container || !render.canvas) return;
    render.bounds.max.x = container.clientWidth;
    render.bounds.max.y = container.clientHeight;
    render.options.width = container.clientWidth;
    render.options.height = container.clientHeight;
    render.canvas.width = container.clientWidth;
    render.canvas.height = container.clientHeight;
    createWalls();
  });
}
