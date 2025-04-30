// app/leader/page.tsx
import Image from 'next/image';
import React from 'react';
import style from './leaderimage.module.css';
import Leaderdes from './components/leaderdes/page';

const Leader: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className={`flex flex-col gap-6 w-full ${style.container}`}>
        <Image
          src="/img/leadermain.jpeg"
          alt="Our Leader"
          layout="fill"
          quality={100}
          className={style.logoimage}
        />
      </div>
      <Leaderdes />
    </div>
  );
};

export default Leader;
