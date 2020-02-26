import React from 'react';
import styled from '@emotion/styled';

const ListItem = (props) => {
    return (
        <div className='card'>
            <h2>{props.member.name}</h2>
            <p>{props.member.role}</p>
            <p>{props.member.email}</p>
        </div>
    )
}

export default ListItem;