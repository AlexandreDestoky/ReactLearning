import { useRef, useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false)

  const formSubmissionHandler = e => {
    e.preventDefault();
    setIsTouched(true)
    if (enteredName.trim() === "") {
      setIsNameValid(false);
      return;
    }
    setIsNameValid(true);

    console.log(enteredName);
  };

  // const inputName = useRef();
  const changeInputName = (e) => {
    setEnteredName(e.target.value)
    if (enteredName.trim() !== "") {
      setIsNameValid(true);
    }
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${!isNameValid && isTouched? "invalid" : ""}`}>
        <label htmlFor="testing">Your Name</label>
        <input type="text" id="testing" onChange={changeInputName} onBlur={() => setIsTouched(true)}/>
        {!isNameValid && isTouched && <p className="error-text">Le nom n'est pas valide</p>}
      </div>

      <p>isNameValid : {JSON.stringify(isNameValid)}, isTouched : {JSON.stringify(isTouched)}</p>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
