import { useEffect, useState } from "react";

import "./../../../styles/Input.css";
import './../../../styles/IconDefine.css'


function Input({ label, type, icon, isRegexChecking = true, regex, errorMessage, setData }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [eye, setEye] = useState("close");
  const [internalType, setInternalType] = useState("");
  const [internalErrorMessage, setInternalErrorMessage] = useState("");

  useEffect(() => {
    setInternalErrorMessage(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    setInternalType(type);
  }, [type]);

  useEffect(() => {
    setData(inputValue);
  }, [inputValue]);

  const handleBlur = () => {
    if (isRegexChecking) {
      if (!inputValue.match(regex)) {
        setError(true);
      } else {
        setError(false);
      }
    } else {
      if (inputValue !== regex) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  const handleFocus = () => {
    setError("");
  };

  const handleClickEye = () => {
    if (eye === "close") {
      setEye("open");
      setInternalType("text");
    } else if (eye === "open") {
      setEye("close");
      setInternalType("password");
    }
  };

  return (
    <div className="main-container-1">
      <div className={`input-container ${error}`}>
        <div className={`${icon} icon-1`}>
        </div>
        <input
          type={internalType}
          id={`input-${label}`}
          value={inputValue}
          className={`${icon && 'isIcon'} is${type}`}
          placeholder={label}
          onChange={(event) => setInputValue(event.target.value)}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {type === "password" && (
          <div className={`eye-icon ${eye}`} onClick={handleClickEye}></div>
        )}
      </div>
      {error && <p className="error-message">{internalErrorMessage}</p>}
    </div>
  );
}

export default Input;
