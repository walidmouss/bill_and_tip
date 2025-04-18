import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState("dissatisfied");
  function handleBill(currbill) {
    setBill(currbill);
  }

  function handleTip1(currTip1) {
    setTip1(currTip1);
  }

  return (
    <div>
      <BillInput onBill={handleBill} bill={bill} />
      <SelectPercentage onTip1={handleTip1} tip={tip1} />
    </div>
  );
}
function BillInput({ onBill, bill }) {
  return (
    <div>
      <h1>
        How much was the bill?
        <input
          type="text"
          placeholder={bill}
          onChange={(e) => onBill(e.target.value)}
        />
      </h1>
    </div>
  );
}
function SelectPercentage({ onTip1, tip }) {
  return (
    <div>
      <h1>
        How did you like the service?
        <select value={tip} onChange={(e) => onTip1(e.target.value)}>
          <option value="dissatisfied">Dissatisfied (0%)</option>
          <option value="notBad">Meehhh(5%)</option>
          <option value="good">It was good(10%)</option>
          <option value="amazing">Amazing(20%)</option>
        </select>
      </h1>
    </div>
  );
}
