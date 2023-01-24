//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UseInfo from './UseInfo';

function App() {
  //const [fullName, setFirstName] = useState('');
  const [showData, setShowData] =useState(false);
  const [userData, setUserData] = useState({});
  console.log('userData', userData);

  const handleSubmit = () => {
    setShowData(true);
  };
  const handleUserData = (name, val) => {
    console.log(name, val);
    setUserData(data => {
      console.log('prev data', data);
      return {
        ...data,
        [name]: val
      }
    });
  };
  return (
    <div className="App">
        <div>
        <h1>Student Registration form</h1>
        <div className="form">
          <div className="form-control">
             Name
            <input type="text" placeholder="Enter your name" onChange={(event) => handleUserData('fullName', event.target.value)} />
          </div>
          <div className="form-control">
            Email
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-control">
            Age
            <input type="text" placeholder="Enter your age" />
          </div>
          <div className="form-control">
            Languages and Frameworks known
            <small>(Check all that apply)</small>
            <select>
              <option>Java</option>
              <option>Python</option>
              <option>Java Script</option>
            </select>
          </div>
          <div className="form-control">
            Any comments or suggestions
            <textarea placeholder="Enter your comment here"></textarea>
          </div>
          <button onClick={handleSubmit}>Submit</button>
          {
            showData && <UseInfo userData={userData}/>
          }
        </div>
        </div>
     </div>
  );
}

export default App;
