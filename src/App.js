import Calculator from "./components/Calculator";
import { useEffect, useState } from "react";
import logo from "./images/logo.svg";
import { useCallback } from "react";

function App() {
  // states
  const [count, setCount] = useState(0);
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipPP, setTipPP] = useState(0);
  const [totalPP, setTotalPP] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [error, setError] = useState("");
  const [isCustomInput, setIsCustomInput] = useState(false);
  const [isBillFocus, setIsBillFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(true);
  const [isTrue, setIsTrue] = useState(false);
  const [isCountFocus, setIsCountFocus] = useState(false);

  // When user focuses on bill input

  const billFocus = () => {
    setIsBillFocus(true);
    setIsBlur(false);
  };
  // when an input is out of focus/ onblur

  const onBlur = () => {
    setIsBillFocus(false);
    setIsCountFocus(false);
    setIsBlur(true);
    if (isBlur) setError("");
  };

  // When user focuses on total person count input

  const countFocus = () => {
    if (count <= 0) setError("Can't be zero");
    else setError("");
    setIsCountFocus(true);
  };

  // reset
  const onReset = useCallback(() => {
    setCount(0);
    setBill(0);
    setTip(0);
    setTipPP(0);
    setTotalPP(0);
    setIsTrue(false);
    setCustomTip(0);
  }, []);

  // bill input
  const billOnChange = (e) => {
    const tipInput = e.target.value;
    setBill(Number(tipInput));
  };

  // custom tip input
  const onCustomTip = (e) => {
    const manualTipInput = Number(e.target.value);
    if (manualTipInput < 0 || manualTipInput > 100) return;
    setCustomTip(manualTipInput);
    setTip(manualTipInput);
    setIsCustomInput(true);
    document.querySelectorAll(".bill__btn").forEach((btn) => {
      btn.classList.remove("active");
    });
  };

  // function to get tip person
  const getTotalTipPerPerson = useCallback((bill, tip, count) => {
    const tipAmount = (bill * tip) / count;
    setTipPP(tipAmount.toFixed(2));
  }, []);

  // function to pick tip %

  const onChangeTip = useCallback(
    (e) => {
      const tipPercentage = e.target.dataset.tip;
      setTip(tipPercentage);

      document.querySelectorAll(".bill__btn").forEach((btn) => {
        btn.classList.remove("active");
      });
      const target = e.target;
      target.classList.add("active");

      if (e.target.classList.contains("active") && count !== 0 && bill !== "")
        setIsTrue(true);
    },
    [bill, count]
  );

  // function for total people

  const onCount = (e) => {
    const countInput = e.target.value;
    setCount(Number(countInput));
  };

  // function to get total bill for each person including tip

  const getPerPersonTotal = useCallback((bill, count, tipPP) => {
    const t = Number(tipPP);
    const billAfterTip = bill / count + t;
    console.log(billAfterTip);
    setTotalPP(billAfterTip.toFixed(2));
  }, []);

  // useEffect to render and update states

  useEffect(() => {
    if (isCustomInput && count !== 0 && bill !== "") {
      setIsTrue(false);
      getTotalTipPerPerson(bill, tip / 100, count);
      getPerPersonTotal(bill, count, tipPP);
    }
    if (isTrue) {
      setIsCustomInput(false);
      getTotalTipPerPerson(bill, tip, count);
      getPerPersonTotal(bill, count, tipPP);
    }
  }, [
    bill,
    getPerPersonTotal,
    tipPP,
    getTotalTipPerPerson,
    count,
    tip,
    isTrue,
    isCustomInput,
    customTip,
  ]);

  return (
    <main className='main'>
      <div className='main__logo'>
        <img src={logo} alt='logo' />
      </div>
      <Calculator
        bill={bill}
        billOnChange={billOnChange}
        onChangeTip={onChangeTip}
        customTip={customTip}
        onCustomTip={onCustomTip}
        count={count}
        onCount={onCount}
        tipPP={tipPP}
        totalPP={totalPP}
        onReset={onReset}
        error={error}
        billFocus={billFocus}
        isBillFocus={isBillFocus}
        onBlur={onBlur}
        countFocus={countFocus}
        isCountFocus={isCountFocus}
      />
    </main>
  );
}

export default App;
