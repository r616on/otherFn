import funcToJson from "./functionToJsone";
import "./ComponentFuncToJsone.css";
import { useState } from "react";

function ComponentFuncToJsone() {
  const [massage, setMassage] = useState("");
  const text = funcToJson();

  const handlerClick = (e) => {
    e.preventDefault();
    setMassage("");
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMassage("Успешно");
      })
      .catch((err) => {
        setMassage("Ошибка");
      });
  };
  return (
    <div className="ComponentFuncToJsone">
      <div onClick={handlerClick} className="Text">
        {text}
      </div>
      <div className="controll">
        <div className="controll-text">{massage}</div>
        <button onClick={handlerClick} className="Bottom">
          Скопировать в буфер
        </button>
      </div>
    </div>
  );
}

export default ComponentFuncToJsone;
