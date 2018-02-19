import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../../styles/list.css';

const List = ({ items, entityName, linkTo, deleteAction }) => {
    function deleteItem(id) {
        deleteAction(id);
    }

    return (
        <ListGroup>
            {items.map((item) => {
                return (
                    <ListGroupItem key={item.id}>
                        <Link to={`/${linkTo}`} >{item.title}</Link>
                        <div className="buttonGroup">
                            <Link className="btn btn-primary" to={`/${entityName}/view/${item.id}`} >View</Link>
                            <Link className="btn btn-primary" to={`/${entityName}/edit/${item.id}`} >Edit</Link>
                            <Button className="btn-danger" onClick={deleteItem.bind(item.id)} >Delete</Button>
                        </div>
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
};

export default List