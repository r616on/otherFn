import funcToJson from "./functionToJsone";
import "./ComponentFuncToJsone.css";
import { useEffect, useState } from "react";

function ComponentFuncToJsone() {
  const [massage, setMassage] = useState("");
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");

  useEffect(() => {
    setText(funcToJson());
  }, []);

  const handelChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setTextarea(value);
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
        setMassage("Успешно");
      })
      .catch((err) => {
        setMassage("Ошибка");
      });
  };
  return (
    <div className="ComponentFuncToJsone">
      <div onDoubleClick={handlerCline} className="textarea-row">
        <textarea
          onChange={handelChange}
          rows="10"
          className="textarea"
          value={textarea}
        ></textarea>
        <button onClick={handlerCline} className="textarea-Bottom">
          Очистить
        </button>
      </div>

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
