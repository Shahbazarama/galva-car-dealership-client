import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CarList from './Components/Cars/CarList.jsx'
import Car from './Components/Cars/Car.jsx'
import CarAdd from './Components/Cars/CarAdd.jsx'
import CarEdit from './Components/Cars/CarEdit.jsx'
import LocationList from './Components/Locations/LocationList.jsx'
import Location from './Components/Locations/Location.jsx'
import LocationAdd from './Components/Locations/LocationAdd.jsx'
import LocationEdit from './Components/Locations/LocationEdit.jsx'


function App() {
  return (
    <Router>
      <div>
        <Header />


        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/cars" component={CarList} />
          <Route path="/cars/new" component={CarAdd} />
          <Route exact path="/cars/:car_id/edit" component={CarEdit} />
          <Route path="/cars/:car_id" component={Car} />

          <Route exact path="/locations" component={LocationList} />
          <Route path="/locations/new" component={LocationAdd} />
          <Route exact path="/locations/:location_id/edit" component={LocationEdit} />
          <Route path="/locations/:location_id" component={Location} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>check out the cars or dealership locations</h2>;
}

function Header() {
  return (
    <Navbar light expand="md">
      <NavbarBrand>
        Galva Car Dealerships
      </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
                <Link to="/cars">Cars</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/locations">Locations</Link>
            </NavLink>
          </NavItem>
        </Nav>

    </Navbar>
  );
}


export default App;
