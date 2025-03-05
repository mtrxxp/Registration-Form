import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: ''
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = Object.values(inputValues).filter((value) => value.trim() !== '');

    setItems([...items, ...newItems]);
    
    setInputValues({
      input1: '',
      input2: '',
      input3: ''
    });
  };
  const [isVisible, setIsVisible] = useState(false);
  const handleButtonClick = () => {
    setIsVisible(true);
  };
  return (
    <>
      <h1>Welcome to the CV registration form</h1>
      <hr />
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <div className="buttons_general">
            <div className="general_write">
              Write your name here
            </div>
            <input type="text" name="t1" id="input1" onChange={handleInputChange}/>
          </div>
        </li>
        <li>
          <div className="buttons_general">
            <div className="general_write">
              Write your email here
            </div>
            <input type="email" name="t2" id="input2" onChange={handleInputChange}/>
          </div>
        </li>
        <li>
          <div className="buttons_general">
            <div className="general_write">
              Write your phone here
            </div>
            <input type="phone" name="t3" id="input3" onChange={handleInputChange}/>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <button type="reset">Reset</button>
        </li>
        <li>
          <button type="submit" onClick={handleButtonClick}>Submit</button>
        </li>
      </ul>
      </form>
      <hr />
      <form onSubmit={handleSubmit}>
        <h2>Add your education experience</h2>
        <div className="education">
          <div className="textfield">
            <label htmlFor="e1">Write your School name: </label><input type="text" id='input1' onChange={handleInputChange}/>
          </div>
          <div className="textfield">
            <label htmlFor="e2">Write your Title of study: </label><input type="text" id='input2' onChange={handleInputChange}/>
          </div>
          <div className="textfield">
            <label htmlFor="e3">Write your Date of study: </label><input type="date" id='input3' onChange={handleInputChange}/>
          </div>
        </div>
        <ul>
          <li>
            <button type="reset">Reset</button>
          </li>
          <li>
            <button type="submit" onClick={handleButtonClick}>Submit</button>
          </li>
        </ul>
      </form>
      <hr />
      <form onSubmit={handleSubmit}>
        <h2>Add your practical experience</h2>
        <div className="education">
          <div className="textfield">
            <label htmlFor="p1">Write Company Name: </label><input type="text" id='input1' onChange={handleInputChange}/>
          </div>
          <div className="textfield">
            <label htmlFor="p2">Write your Position Title: </label><input type="text" id='input2' onChange={handleInputChange}/>
          </div>
          <div className="textfield">
            <label htmlFor="p4">Write date from and until when you worked for that company: </label>
            <div className='date2'><input type="date" id="input3" onChange={handleInputChange}/><input type="date" id="input4" onChange={handleInputChange}/></div>
          </div>
        </div>
        <ul>
          <li>
            <button type="reset">Reset</button>
          </li>
          <li>
            <button type="submit" onClick={handleButtonClick}>Submit</button>
          </li>
        </ul>
      </form>
      <hr />
      {isVisible && <h1>Your wrote this data:</h1>}
      <ul className="data">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
