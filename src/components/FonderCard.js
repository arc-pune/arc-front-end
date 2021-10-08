import React from "react";
import "./founderCard.css";
export const FounderCard = () => {
  return (
    <div className='mx-auto my-0 relative'>
      <div className='ourFounderSection'>
        <div className='ourFounderSection__PawsImg'>
          <img src='/Assets/icons/paws.svg' className='' alt='paws' />
        </div>

        <h3 className='ourFounderSection__title'>Our Founder</h3>
      </div>
      <div className='founderCard   '>
        <img
          className='founderCard__img'
          src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='Founder'
        />
        <div className='founderCard__text'>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qua
            repudiandae temporibus aspernatur sed earum obcaecati aliquid
            debitis nam doloremque veniam ut molestias cum ab eligendi
            voluptatibus sint, corrupti exercitationem perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};
