import React from 'react';
import useUniqueId from '../../hooks/useUniqueId';

const Liquid = ({ size }) => {
  const gegga = useUniqueId('gegga');
  const gradient = useUniqueId('gradient');
  const linjarGradient = useUniqueId('linjarGradient');

  return (
    <div
      className="floader-liquid"
      style={{
        '--liquid-gegga-url': `url(#${gegga})`,
        '--liquid-gradient-url': `url(#${gradient})`,
        '--liquid-stop1-color': '#f308e7',
        '--liquid-stop2-color': '#1877f2',
        '--liquid-size-px': `${size}px`,
      }}
    >
      <svg className="floader-liquid-snurra" viewBox="0 0 200 200">
        <defs>
          <filter id={gegga}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
              result="inreGegga"
            />
            <feComposite in="SourceGraphic" in2="inreGegga" operator="atop" />
          </filter>
          <linearGradient id={linjarGradient}>
            <stop className="floader-liquid-stop1" offset="0" />
            <stop className="floader-liquid-stop2" offset="1" />
          </linearGradient>
          <linearGradient
            y2="160"
            x2="160"
            y1="40"
            x1="40"
            gradientUnits="userSpaceOnUse"
            id={gradient}
            xlinkHref={`#${linjarGradient}`}
          />
        </defs>
        <path
          className="floader-liquid-halvan"
          d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
        />
        <circle className="floader-liquid-strecken" cx="100" cy="100" r="64" />
      </svg>
    </div>
  );
};

Liquid.defaultProps = {
  size: 200,
};
export default Liquid;
