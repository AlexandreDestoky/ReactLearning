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

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${!isNameValid && isTouched? "invalid" : ""}`}>
        <label htmlFor="testing">Your Name</label>
        <input type="text" id="testing" onChange={e => setEnteredName(e.target.value)} onFocus={() => setIsTouched(true)}/>
        {!isNameValid && isTouched && <p className="error-text">Le nom n'est pas valide</p>}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
