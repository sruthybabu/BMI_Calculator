
import './App.css';
import React,{useState} from 'react';

function App() {
const [weight,setWeight] = useState('');
const [height,setHeight] = useState('');
const [bmi,setBmi] = useState('');
const [message,setMessage] = useState('');

//logic

let calBmi = (e) => {
  e.preventDefault();

  if(weight===0 || height===0)
    {
     alert('Please enter valid weight and height');
  }
  else{
    let bmi=([weight/height/height]*10000)
    setBmi(bmi.toFixed(1))

    //

    if(bmi<18.5){
      setMessage('You Are Underweight')
    }
    else if(bmi>=18.5 && bmi<25){
      setMessage('You Are Healthy Weight')
    }
    else{
      setMessage('You Are Overweight')
    }
  }  

}
let reload = () => {
  window.location.reload()
}


  return (
    <div className="App">
      <div className='container'>
        <h2 className='txt-head'>BMI CALCULATOR</h2>
        <form onSubmit={calBmi}>
          <div>
            <label className='text'>Weight (kg)</label>
            <input type='number' placeholder='Enter your weight' 
            value={weight} onChange={(e)=> setWeight(e.target.value)} />
          </div>
          <div>
            <label  className='text'>Height (cm)</label>
            <input type='number' placeholder='Enter your height' 
            value={height} onChange={(e)=> setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3 className='txt-end'> Your BMI Is :{bmi}</h3>
            <p className='txt-result'>{message}</p>

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
