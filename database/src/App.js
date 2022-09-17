import './App.css';
import {useState} from 'react';
function App() {
  const [name,setName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [extraInfo,setExtraInfo] = useState("");
  function submitFormToNotion(){
    console.log("we are In"+ name);
    fetch("http://localhost:9000/submitFormToNotion", {
      method:"post",
      headers:{
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
        
      },
      body: JSON.stringify({
        name:name,
        phoneNumber:phoneNumber,
        extraInfo:extraInfo

      })
    })
  }
  return (
   
  <div className='App'>
<div style={{maxWidth:"500px",margin:"0 auto"}}>
<h1>Interested in learning more?</h1>
<p>Name</p>
<input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
<p>Phone Number</p>
<input type="text" id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)}/>
<p>Anything else?</p>
<textarea onChange={(e) => setExtraInfo(e.target.value)} rows={10} cols={25}/>
<div>
  <button onClick={submitFormToNotion}>
Submit To Notion
  </button>
</div>
</div>
  </div>
  );
}

export default App;
