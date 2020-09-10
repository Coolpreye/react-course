import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './sharedFolder/dishes';

function App() {
  return (
    <React.Fragment>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES} />
    </React.Fragment>
  );
}

export default App;
