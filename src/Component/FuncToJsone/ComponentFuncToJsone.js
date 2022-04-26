import { funcToJson, jsonToFunc } from "./compServiceFuncToJsone";

import "./ComponentFuncToJsone.css";
import { useState } from "react";

function ComponentFuncToJsone() {
  const [massage, setMassage] = useState("");
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");

  const handelChange = (e) => {
    const value = e.target.value;
    setTextarea(value);
    if (value.includes('"onChangeHandler":')) {
      setText(jsonToFunc(value));
    } else if (value !== "") {
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
      <h3 className="title">Конвертер для onChangeHandler </h3>
      <h4 className="title-text">
        Для конвертации JS функций в onChangeHandler текст втавьте
        <span> 'function onChangeHandler...'</span>
      </h4>

      <div className="title-text">
        Для конвертации onChangeHandler в js func вставьте
        <span> ' "onChangeHandler": "function... '</span>
        <span className="title-tooltip">
          Важно наличие <span>одного</span> пробела между "onChangeHandler": и
          "function `
        </span>
      </div>

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
        Один клик копирует текст в буфер обмена
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
