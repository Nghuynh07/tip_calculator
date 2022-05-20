import dollar from "./../images/icon-dollar.svg";
import person from "./../images/icon-person.svg";
const Bill = ({
  bill,
  billOnChange,
  onChangeTip,
  customTip,
  onCustomTip,
  count,
  onCount,
  error,
  billFocus,
  isBillFocus,
  onBlur,
  countFocus,
  isCountFocus,
}) => {
  return (
    <section className='bill'>
      <div className='bill__total'>
        <p className='bill__text'>bill</p>
        <div className={`${isBillFocus && "focus"} bill__input`}>
          <div className='bill__imgWrapper'>
            <img src={dollar} alt='Dollar Symbol' className='bill__icon' />
          </div>
          <input
            value={bill}
            type='number'
            onChange={billOnChange}
            placeholder='0'
            onFocus={billFocus}
            onBlur={onBlur}
            step='0.01'
          />
        </div>
      </div>
      <div className='bill__tips'>
        <p className='bill__text'>select tip %</p>
        <div className='bill__tip'>
          <button className='bill__btn' data-tip='0.05' onClick={onChangeTip}>
            5%
          </button>
          <button className='bill__btn' data-tip='0.1' onClick={onChangeTip}>
            10%
          </button>
          <button className='bill__btn' data-tip='0.15' onClick={onChangeTip}>
            15%
          </button>
          <button className='bill__btn' data-tip='0.25' onClick={onChangeTip}>
            25%
          </button>
          <button className='bill__btn' data-tip='0.5' onClick={onChangeTip}>
            50%
          </button>
          <input
            className='bill__customInput'
            type='numeric'
            value={customTip}
            onChange={onCustomTip}
            name='custom'
            placeholder='Custom'
            min='1'
            max='100'
          />
        </div>
      </div>
      <div className='bill__count'>
        <div className='bill__infos'>
          <p className='bill__text'>Number of people</p>
          <p className='bill__error'>{error}</p>
        </div>
        <div className={`${isCountFocus && "countError"} bill__input`}>
          <div className='bill__imgWrapper'>
            <img src={person} alt='Dollar Symbol' className='bill__icon' />
          </div>
          <input
            name='count'
            type='numeric'
            value={count}
            onChange={onCount}
            onFocus={countFocus}
            onBlur={onBlur}
          />
        </div>
      </div>
    </section>
  );
};

export default Bill;
