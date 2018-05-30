import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function List({ items }) {
  return (
    <ListGroup>{
      items.map(item =>
        <ListGroupItem
          key={item.id}
        >
          <Link to={item.uri}>
            {item.name}
          </Link>
        </ListGroupItem>)
    }</ListGroup>
  );
}

export default List;
