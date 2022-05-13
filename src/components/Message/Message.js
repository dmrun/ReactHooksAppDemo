import React, { useState, useEffect } from "react";
import "./Message.css";

const Message = () => {
  const [message, setMessage] = useState("Hi there, how are you?");

  useEffect(() => {
    console.log("trigger use effect hook");

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 2000);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    console.log(e.target[0].value);

    setMessage(e.target[0].value);
    setTimeout(() => {
      setMessage("Ok Goodbye!");
    }, 2000);
  };

  return (
    <div>
      <h3>{message}</h3>
      <div>
        <form onSubmit={onSubmit}>
          <h3 className="blink_me">Write an Answer please:</h3>
          <input id="aws" type="text" placeholder="Answer"></input>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Message;
