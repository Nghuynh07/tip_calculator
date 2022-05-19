import React from "react";
import dollar from "./../images/icon-dollar.svg";
import person from "./../images/icon-person.svg";
const Bill = () => {
  return (
    <section className='bill'>
      <div className='bill__total'>
        <p className='bill__text'>bill</p>
        <div className='bill__input'>
          <div className='bill__imgWrapper'>
            <img src={dollar} alt='Dollar Symbol' className='bill__icon' />
          </div>
          <input name='bill' type='numeric' placeholder='0' />
        </div>
      </div>
      <div className='bill__tips'>
        <p className='bill__text'>select tip %</p>
        <div className='bill__tip'>
          <button className='bill__btn' data-tip='5'>
            5%
          </button>
          <button className='bill__btn' data-tip='10'>
            10%
          </button>
          <button className='bill__btn' data-tip='15'>
            15%
          </button>
          <button className='bill__btn' data-tip='25'>
            25%
          </button>
          <button className='bill__btn' data-tip='50'>
            50%
          </button>
          <input
            className='bill__customInput'
            type='numeric'
            placeholder='custom'
          />
        </div>
      </div>
      <div className='bill__count'>
        <div className='bill__infos'>
          <p className='bill__text'>Number of people</p>
          <p className='bill__error'>Can't be zero</p>
        </div>
        <div className='bill__input'>
          <div className='bill__imgWrapper'>
            <img src={person} alt='Dollar Symbol' className='bill__icon' />
          </div>
          <input name='count' type='numeric' />
        </div>
      </div>
    </section>
  );
};

export default Bill;
