import funcToJson from "./compServiceFuncToJsone";
import "./ComponentFuncToJsone.css";
import { useState } from "react";

function ComponentFuncToJsone() {
  const [massage, setMassage] = useState("");
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");

  const handelChange = (e) => {
    const value = e.target.value;
    setTextarea(value);
    if (value !== "") {
      setText(funcToJson(value));
    }
  };
  const handlerCline = (e) => {
    setTextarea("");
  };
  const handlerClick = (e) => {
    e.preventDefault();
    setMassage("");
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMassage("Handler успешно скопированн в буфер обмена");
        setTimeout(() => {
          setMassage("");
        }, 1500);
      })

      .catch((err) => {
        setMassage("Ошибка");
      });
  };
  return (
    <div className="ComponentFuncToJsone">
      <div onDoubleClick={handlerCline} className="textarea-row">
        <div className="textarea-tooltip">Вставьте Js функцию: </div>
        <textarea
          onChange={handelChange}
          rows="10"
          className="textarea"
          value={textarea}
        />
        <button onClick={handlerCline} className="textarea-Bottom">
          Очистить
        </button>
      </div>
      <div className="controll-tooltip">
        Кликни на текст что бы скопировать в буфер обмена
      </div>
      <textarea
        rows="10"
        defaultValue={text}
        onClick={handlerClick}
        className="Text"
        readOnly
      />

      <div className="controll">
        {massage !== "" && <div className="controll-text">{massage}</div>}
        <button onClick={handlerClick} className="Bottom">
          Скопировать в буфер
        </button>
      </div>
    </div>
  );
}

export default ComponentFuncToJsone;
