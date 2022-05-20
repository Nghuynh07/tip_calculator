import dollar from "./../images/icon-dollar.svg";
import person from "./../images/icon-person.svg";
import Button from "./Button";
import { data } from "../data/data";

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
            onFocus={billFocus}
            onBlur={onBlur}
            step='0.01'
          />
        </div>
      </div>
      <div className='bill__tips'>
        <p className='bill__text'>select tip %</p>
        <div className='bill__tip'>
          {data.map((d) => (
            <Button
              key={d.dataset}
              className='bill__btn'
              tipPercent={d.tip}
              dataTip={d.dataset}
              onChangeTip={onChangeTip}
            />
          ))}
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
