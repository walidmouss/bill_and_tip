import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState("0");
  const [tip2, setTip2] = useState("0");
  function handleBill(currbill) {
    setBill(currbill);
  }

  function handleTip1(currTip1) {
    setTip1(currTip1);
  }

  function handleTip2(currTip2) {
    setTip2(currTip2);
  }
  function handleReset() {
    handleBill(0);
    handleTip1("0");
    handleTip2("0");
  }

  return (
    <div>
      <BillInput onBill={handleBill} bill={bill} />
      <SelectPercentage onTip1={handleTip1} tip={tip1}>
        how do you like the service
      </SelectPercentage>
      <SelectPercentage onTip1={handleTip2} tip={tip2}>
        how do your friend like the service
      </SelectPercentage>
      {bill !== 0 && (
        <div>
          <Output bill={Number(bill)} tip1={Number(tip1)} tip2={Number(tip2)} />
          <Reset onReset={handleReset} />
        </div>
      )}
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
          value={bill}
          onChange={(e) => onBill(e.target.value)}
        />
      </h1>
    </div>
  );
}
function SelectPercentage({ onTip1, tip, children }) {
  return (
    <div>
      <h1>
        {children}
        <select value={tip} onChange={(e) => onTip1(e.target.value)}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">Meehhh(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Amazing(20%)</option>
        </select>
      </h1>
    </div>
  );
}

function Output({ bill, tip1, tip2 }) {
  let tip = ((tip1 + tip2) / 2 / 100) * bill;
  let FinalCheck = bill + tip;
  return (
    <div>
      <h1>
        You pay ${FinalCheck} (${bill} + ${tip} tip )
      </h1>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>reset</button>
    </div>
  );
}
