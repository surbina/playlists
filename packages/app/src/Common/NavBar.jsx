import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

function NavBar() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Playlist</NavbarBrand>
    </Navbar>
  );
}

export default NavBar;
