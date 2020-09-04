import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <React.Fragment>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default App;
