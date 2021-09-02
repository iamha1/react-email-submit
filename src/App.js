import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import './bootstrap.min.css';

function App() {

  const [email, setEmail] = useState('Hello')
  const [alert, setAlert] = useState({show:false, message:'', type:''})

  const submitBtn = (e) =>{
    e.preventDefault();
    if(!email) {
      showAlert(true, 'danger', 'Please enter email')
    }
    else {
      showAlert(true.valueOf, 'success', 'Enter email successful!')
    }
  }

  const showAlert = (show = false, type='', msg='') =>{
    setAlert({show,type,msg})
  }
  


  return (
    <div className="App">
    <form onSubmit={submitBtn}>
    {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
    <h1>{email}</h1>
    <p>Please enter your email: </p>
    <input type="email" placeholder="name@mail.com" value={email} onChange={(e) => setEmail(e.target.value) } />
    <button>Submit</button>
     </form>
    </div>
  );
}

export default App;

// Modify this component to include a form that allows users to submit an email Address
// on submit the title should be updated to a success message
// add email validations to check if the email address entered is valid or not
// show an in line error msg if the email address fails the validation
