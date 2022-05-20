import Bill from "./Bill";
import Tip from "./Tip";
const Calculator = ({
  bill,
  billOnChange,
  onChangeTip,
  customTip,
  onCustomTip,
  count,
  onCount,
  tipPP,
  totalPP,
  onReset,
  error,
  billFocus,
  isBillFocus,
  onBlur,
  countFocus,
  isCountFocus,
}) => {
  return (
    <div className='calculator'>
      <Bill
        bill={bill}
        billOnChange={billOnChange}
        onChangeTip={onChangeTip}
        customTip={customTip}
        onCustomTip={onCustomTip}
        count={count}
        onCount={onCount}
        error={error}
        billFocus={billFocus}
        isBillFocus={isBillFocus}
        onBlur={onBlur}
        countFocus={countFocus}
        isCountFocus={isCountFocus}
      />
      <Tip onReset={onReset} tipPP={tipPP} totalPP={totalPP} />
    </div>
  );
};

export default Calculator;
