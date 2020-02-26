import React from 'react';
import styled from '@emotion/styled';

const ListCard = styled.div`
    width: 20%;
    height: 20%;
    border: 1px solid black;
    margin: 2% 0;
    padding: 4% 5%;
    border-radius: 10px;
    h2 {
        margin-top: 0;
        margin-bottom: 2%;
    }
    p {
        margin-top: 0;
        margin-bottom: 5%;
    }
`

const ListItem = (props) => {
    return (
        <ListCard className='card'>
            <h2>{props.member.name}</h2>
            <p>{props.member.role}</p>
            <a target='_blank' rel="noopener noreferrer" href={`mailto:${props.member.email}`}>{props.member.email}</a>
        </ListCard>
    )
}

export default ListItem;