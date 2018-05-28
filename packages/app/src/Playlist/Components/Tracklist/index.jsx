import React from 'react';
import { Table } from 'reactstrap';

function Tracklist({ items }) {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Artist</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.artist.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tracklist;
