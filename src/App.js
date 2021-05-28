import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(0);

  const loadFile = event=>{

    setSelectedFile(event.target.files[0]);
  
  }
  const uploadFile = event=>{

    const data = new FormData()
   data.append('file', selectedFile)
   axios.post("http://localhost:8000/upload", data, { 
      
  }).then(res => { 
    console.log(res.statusText)
 })
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="file" name="file" onChange={loadFile} />
        <button type="button" class="btn btn-success btn-block" onClick={uploadFile}>Upload</button> 
      </header>
      
        
      
    </div>
  );
}



export default App;
