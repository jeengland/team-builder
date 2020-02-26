import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useEffect } from 'react';

const FormContainer = styled.form`
    margin: 3% auto;
    width: 25%;
    display: flex;
    flex-wrap: wrap;
    border: black 1px solid;
    border-radius: 10px;
    padding: 2%;
    label {
        width: 35%;
        text-align: right;
        padding-right: 1%;
    }
    input {
        margin-bottom: 2%;
        max-width: 55%;
    }
    button {
        width: 30%;
        margin-top: 2%;
        margin-left: 35%;
    }
`
const Form = (props) => {
    const [formValues, setFormValues] = useState({ name: '', email: '', role: '' });
    const [member, setMember] = useState({});
    const updateInput = (event) => setFormValues({ ...formValues, [event.target.name]: event.target.value });
    const updateList = (event) => {
        event.preventDefault();
        if (props.memberToEdit !== undefined && formValues.name && formValues.email && formValues.role){
            props.saveEdit(formValues);
        }
        else if (formValues.name && formValues.email && formValues.role) {
            props.listFunction(list => [...list, formValues]);
            setFormValues({ name: '', email: '', role: '' });
            console.log(formValues);
        } else {
            let missing = [];
            Object.keys(formValues).forEach((key => formValues[key] ? undefined : missing.push(key)))
            alert(`You still need to fill out: ${missing.join(", ")}`);
        }     
    }
    useEffect(() => {
        if (props.memberToEdit !== undefined) {
            setMember(props.list[props.memberToEdit]);
            setFormValues({
                name: member.name,
                email: member.email,
                role: member.role
            })
        }
    }, [props.memberToEdit, props.list, member])
    return (
        <FormContainer onSubmit={updateList}>
            <label htmlFor='name' required>Name:</label>
            <input type='text' id='name' name='name' placeholder='Name' onChange={updateInput} value={formValues.name}/>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' placeholder='Email' onChange={updateInput} value={formValues.email}/>
            <label htmlFor='role'>Role:</label>
            <select id='role' name='role' onChange={updateInput} value={formValues.role}>
                <option value='' disabled>Select an option</option>
                <option value='Front End'>Front End</option>
                <option value='Back End'>Back End</option>
                <option value='UX Designer'>UX Designer</option>
                <option value='Data Scientist'>Data Scientist</option>
            </select>
            <button type='submit'>Submit</button>
        </FormContainer>
    )
}

export default Form;