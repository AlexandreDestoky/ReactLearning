import { useRef, useState } from "react";


const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(enteredName);
    console.log("-----------");
    console.log(inputName.current.value);
  }

  const inputName = useRef();


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={(e)=> setEnteredName(e.target.value)} ref={inputName} />
      </div>
      <p>NAme: {enteredName}</p>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
