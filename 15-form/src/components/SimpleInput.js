import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [IsNameTouched, setIsNameTouched] = useState(false);
  const isNameValid = enteredName.trim() !== "";
  const errorName = !isNameValid && IsNameTouched;

  const [enteredMail, setEnteredMail] = useState("");
  const [IsMailTouched, setIsMailTouched] = useState(false);
  const isMailValid = validateEmail(enteredMail);
  const errorMail = !isMailValid && IsMailTouched;

  const isFormValid = isNameValid && isMailValid;

  const formSubmissionHandler = e => {
    e.preventDefault();
    setIsNameTouched(true);
    if (!isFormValid) return;
    console.log(enteredName);
    console.log(enteredMail);
    setEnteredName("");
    setEnteredMail("");
    setIsNameTouched(false);
    setIsMailTouched(false);
  };

  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${errorName ? "invalid" : ""}`}>
        <label htmlFor="testing">Your Name</label>
        <input
          type="text"
          id="testing"
          onChange={e => setEnteredName(e.target.value)}
          value={enteredName}
          onBlur={() => setIsNameTouched(true)}
        />
        <p className={`error-text ${errorName ? "" : "invisible"}`}>Le nom n'est pas valide</p>
      </div>

      <div className={`form-control ${errorMail ? "invalid" : ""}`}>
        <label htmlFor="mail">Your Mail</label>
        <input
          type="email"
          id="mail"
          onChange={e => setEnteredMail(e.target.value)}
          value={enteredMail}
          onBlur={() => setIsMailTouched(true)}
        />
        <p className={`error-text ${errorMail ? "" : "invisible"}`}>
          Le mail n'est pas valide
        </p>
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
