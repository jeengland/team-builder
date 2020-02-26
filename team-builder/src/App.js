import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ListItem from './components/ListItem'

function App() {
  const [listMembers, setListMembers] = useState([]);
  return (
    <div className="App">
      <Form listFunction={setListMembers}/>
      {listMembers.map((member) => {
        return (
          <ListItem member={member}/>
        )
      })}
    </div>
  );
}

export default App;
