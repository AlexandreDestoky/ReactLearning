import { useRef, useState } from "react";


const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if(enteredName.trim() === "") return;
    console.log(enteredName);
    console.log("-----------");
    console.log(inputName.current.value);
  }

  const inputName = useRef();


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='testing'>Your Name</label>
        <input type='text' id='testing' onChange={(e)=> setEnteredName(e.target.value)} ref={inputName} />
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
