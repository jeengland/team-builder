import React, { useState } from 'react';
import styled from '@emotion/styled';

import Form from './components/Form';
import ListItem from './components/ListItem'

const List = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  justify-content: space-evenly;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

function App() {
  const [listMembers, setListMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(undefined);
  const setEdit = (index) => (setMemberToEdit(index));
  const saveEdit = (newInfo) => {
    let newArr = [...listMembers];
    newArr[memberToEdit] = newInfo;
    setListMembers(newArr);
    setMemberToEdit(undefined);
  };
  const deleteCard = (index) => {
    let confirmation = window.confirm("Are you sure you want to delete this card? This cannot be undone");
    if (confirmation) {
      let newArr = [...listMembers];
      newArr.splice(memberToEdit, 1);
      setListMembers(newArr);
      setMemberToEdit(undefined);
    }
  }
  return (
    <div className="App">
      <Form listFunction={setListMembers} list={listMembers} memberToEdit={memberToEdit} saveEdit={saveEdit} deleteFunction={deleteCard}/>
      <List>
        {listMembers.map((member, index) => {
          return (
            <ListItem member={member} index={index} setEdit={setEdit} edited={memberToEdit === index ? true : false}/>
          )
        })}
      </List>
    </div>
  );
}

export default App;
