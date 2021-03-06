import React from "react";

const Tip = ({ onReset, tipPP, totalPP }) => {
  return (
    <section className='tip'>
      <div className='tip__amount'>
        <div className='tip__perPerson'>
          <div className='tip__left'>
            <p className='tip__text'>Tip Amount</p>
            <p className='tip__each'>/ person</p>
          </div>
          <h1 className='tip__amountDisplay tipAmount'>{`$${tipPP}`}</h1>
        </div>
        <div className='tip__perPerson'>
          <div className='tip__left'>
            <p className='tip__text'>Total</p>
            <p className='tip__each'>/ person</p>
          </div>
          <h1 className='tip__amountDisplay totalAmount'>{`$${totalPP}`}</h1>
        </div>
      </div>
      <button className='tip__reset' onClick={onReset}>
        Reset
      </button>
    </section>
  );
};

export default Tip;
