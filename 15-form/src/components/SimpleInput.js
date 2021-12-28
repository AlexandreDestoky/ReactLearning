import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isNameValid = enteredName.trim() !== "";
  const error = !isNameValid && isTouched;

  const formSubmissionHandler = e => {
    e.preventDefault();
    setIsTouched(true);
    if (enteredName.trim() === "") return;
  };

  const changeInputName = e => {
    setEnteredName(e.target.value);
  };
  
  const changeIsTouched = () => {
    setIsTouched(true);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${error ? "invalid" : ""}`}>
        <label htmlFor="testing">Your Name</label>
        <input type="text" id="testing" onChange={changeInputName} onBlur={changeIsTouched} />
        {error && <p className="error-text">Le nom n'est pas valide</p>}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
