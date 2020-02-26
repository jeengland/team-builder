import React from 'react';
import styled from '@emotion/styled';

const ListCard = styled.div`
    width: 20%;
    height: 20%;
    border: 1px solid;
    border-color: ${props => props.edited ? 'red' : 'black'};
    color: ${props => props.edited ? 'red' : 'black'};
    margin: 2% 0;
    padding: 4% 5%;
    border-radius: 10px;
    h2 {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: -13%;
        font-size: 1.4rem;
    }
    p {
        margin-top: 0;
        margin-bottom: 5%;
    }
    i {
        font-size: 1rem;
        margin-right: 5px;
        color: grey;
        &:hover {
            color: red;
        }
    }
    a {
        color: inherit;
    }
`

const ListItem = (props) => {
    if (props.edited) {
        return (
            <ListCard edited className='card' key={props.index}>
                <h2><i className="fas fa-user-edit" onClick={() => {props.setEdit(props.index)}}></i>{props.member.name}</h2>
                <p>{props.member.role}</p>
                <a target='_blank' rel="noopener noreferrer" href={`mailto:${props.member.email}`}>{props.member.email}</a>
            </ListCard>
        )
    } else {
        return (
            <ListCard className='card' key={props.index}>
                <h2><i className="fas fa-user-edit" onClick={() => {props.setEdit(props.index)}}></i>{props.member.name}</h2>
                <p>{props.member.role}</p>
                <a target='_blank' rel="noopener noreferrer" href={`mailto:${props.member.email}`}>{props.member.email}</a>
            </ListCard>
        )
    }
}

export default ListItem;