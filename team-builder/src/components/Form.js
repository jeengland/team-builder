import React, { useState } from 'react';

const Form = (props) => {
    const [formValues, setFormValues] = useState({ name: '', email: '', role: '' });
    const updateInput = (event) => setFormValues({ ...formValues, [event.target.name]: event.target.value });
    const updateList = (event) => {
        event.preventDefault();
        props.listFunction(list => [...list, formValues]);
        setFormValues({ name: '', email: '', role: '' });
    }
    return (
        <form onSubmit={updateList}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' placeholder='Name' onChange={updateInput}/>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' placeholder='Email' onChange={updateInput}/>
            <label htmlFor='role'>Role</label>
            <select id='role' name='role' onChange={updateInput} defaultValue='select'>
                <option value='select' disabled>Select an option</option>
                <option value='Front End'>Front End</option>
                <option value='Back End'>Back End</option>
                <option value='UX Designer'>UX Designer</option>
                <option value='Data Scientist'>Data Scientist</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;