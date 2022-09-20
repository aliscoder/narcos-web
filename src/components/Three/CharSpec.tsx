import React, { useState } from 'react'
import specData from '../../data/spec';
import { FLASH } from '../../utils/icons';


export default function CharSpec() {
    const [active, setActive] = useState(5);
    const [height, setHeight] = useState(0)

    const changeActive = (ind: any) => {
        setActive(ind);
      };
      
  return (
    <div className="spec">
    <div className="spec__left">
      <div className="spec__items">
        {specData.map(({ title, icon, key }, ind) => (
          <div
            onClick={() => {
              changeActive(ind);
            }}
            key={key}
            className={`spec__items-item ${key} ${
              active === ind ? "active" : ""
            }`}
          >
            <div>
              {icon && icon}
              <span>{title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="spec__center"></div>
    <div className="spec__right">
      <div className='spec__info'>
        <div className='spec__info-part'>
          <div 
          className='spec__info-part__circle'
          style={{bottom : `${height * -1}px`}} ></div>
          <FLASH height={height}/>
          <div className='spec__info-box'></div>
        </div>
      </div>
    </div>
  </div>
  )
}
