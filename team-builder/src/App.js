import React, { useState } from 'react';
import styled from '@emotion/styled';

import Form from './components/Form';
import ListItem from './components/ListItem'
import { useEffect } from 'react';

const List = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  justify-content: space-evenly;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

function App() {
  const [listMembers, setListMembers] = useState([{name: "Jacob E England", email: "musictheorizer@gmail.com", role: "Front End"}, {name: "Jacob E England", email: "musictheorizer@gmail.com", role: "Front End"}, {name: "Jacob E England", email: "musictheorizer@gmail.com", role: "Front End"}, {name: "Jacob E England", email: "musictheorizer@gmail.com", role: "Front End"}, {name: "Jacob E England", email: "musictheorizer@gmail.com", role: "Front End"}, {name: "Jacob E England", email: "musictheorizer@gmail.com", role: "Front End"}]);
  const [memberToEdit, setMemberToEdit] = useState(undefined);
  const setEdit = (index) => (setMemberToEdit(index));
  return (
    <div className="App">
      <Form listFunction={setListMembers} list={listMembers} memberToEdit={memberToEdit}/>
      <List>
        {listMembers.map((member, index) => {
          return (
            <ListItem member={member} index={index} editFunction={setEdit}/>
          )
        })}
      </List>
    </div>
  );
}

export default App;
