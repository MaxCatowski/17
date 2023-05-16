import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputname, setinputName] = useState("");
  const [inputamount, setinputAmount] = useState("");
  const [inputdate, setinputDate] = useState("");

  // const [userInput, setUserinput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  const nameChangeHandler = (event) => {
    setinputName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setinputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setinputDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      description: inputname,
      amount: inputamount,
      date: new Date(inputdate),
    };

    props.CostData(costData);
    setinputName("");
    setinputAmount("");
    setinputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputname} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            value={inputamount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            value={inputdate}
            min="2022-01-01"
            step="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
