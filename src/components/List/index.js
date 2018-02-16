import React from 'react'
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../../styles/list.css';

const List = ({ items, entityName, linkTo }) => {
    return (
        <ListGroup>
            {items.map((item) => {
                return (
                    <ListGroupItem key={item.id}>
                        <Link to={`/${linkTo}`} >{item.title}</Link>
                        <div className="buttonGroup">
                            <Link className="btn btn-primary" to={`/${entityName}/view/${item.id}`} >View</Link>
                            <Link className="btn btn-primary" to={`/${entityName}/edit/${item.id}`} >Edit</Link>
                            <Link className="btn btn-danger" to={`/${entityName}/delete/${item.id}`} >Delete</Link>
                        </div>
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
};

export default List