import React, { useRef } from "react";

export default function UserRefExample() {
  const inputRef = useRef(null); 
  const inputRef2 = useRef(null); 
  

  const focusInput = () => {
    inputRef.current.focus(); // Access the DOM element and call focus on it
  };
  const focusInput2 = () => {
    inputRef2.current.focus(); // Access the DOM element and call focus on it
  };

  return (
    <div>
        <br/>
      <label for='firstname'><b>First Name : </b></label>
      <input id='firstname' ref={inputRef} type="text" placeholder="first name" />

      <label for='lastname'><b>Last Name : </b></label>
      <input id='lastname' ref={inputRef2} type="text" placeholder="last name" />
      <br/><br/><br/>

      <button onClick={focusInput}>Focus First Name</button>
      <button onClick={focusInput2}>Focus Last Name</button>
    </div>
  );
}