import React, { useEffect } from 'react';

const TextEffect1: React.FC = () => {
  useEffect(() => {
    const setKeyframesRules = (n: number, start = 0): string => {
      let steps = '';
      for (let i = start; i <= n; i++) {
        const percent = (i / n) * 100;
        const random1 = `${Math.random() * 150}px`;
        const random2 = `${Math.random() * 150}px`;
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0); } `);
      }
      return steps;
    };

    const style1 = document.createElement('style');
    const style2 = document.createElement('style');
    const after = document.getElementById('after-te1');
    const before = document.getElementById('before-te1');

    if (after && before) {
      const keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`;
      const keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`;

      style1.innerHTML = keyframes1;
      style2.innerHTML = keyframes2;

      after.appendChild(style1);
      before.appendChild(style2);

      after.style.animation = 'glitch-anim-1 2.5s infinite linear alternate-reverse';
      before.style.animation = 'glitch-anim-2 3s infinite linear alternate-reverse';
    }
  }, []);

  return (
    <div className="h-full flex justify-center items-center">
      <h1 className="text-black text-[1.5rem] md:text-[4rem] font-bold font-headerFont uppercase relative inline-block text-center">
        <span
          id="before-te1"
          className="absolute top-0 left-0.5 w-full h-full bg-transparent"
          style={{ textShadow: '-2px 0 #49FC00', clipPath: 'rect(24px, 550px, 90px, 0)' }}
          aria-hidden="true"
        >
          Bienvenido a mi Porfolio
        </span>
        Bienvenido a mi Porfolio
        <span
          id="after-te1"
          className="absolute top-0 -left-0.5 w-full h-full bg-transparent"
          style={{ textShadow: '-2px 0 spin(#49FC00, 180)', clipPath: 'rect(85px, 550px, 140px, 0)' }}
          aria-hidden="true"
        >
          Bienvenido a mi Porfolio
        </span>
      </h1>
    </div>
  );
};

export default TextEffect1;
