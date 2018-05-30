import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Tag = (props) => <Link to="/" {...props}>Playlist</Link>;

function NavBar() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Tag}>Playlist</NavbarBrand>
    </Navbar>
  );
}

export default NavBar;
