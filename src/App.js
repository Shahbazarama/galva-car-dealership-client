import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CarList from './Components/Cars/CarList.jsx'
import Car from './Components/Cars/Car.jsx'
import CarAdd from './Components/Cars/CarAdd.jsx'
import CarEdit from './Components/Cars/CarEdit.jsx'
import LocationsList from './Components/Locations/LocationsList.jsx'


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
          <Route exact path="/locations" component={LocationsList} />
        </Switch>



      </div>
    </Router>
  );
}

function Home() {
  return <h2>check out the cars or dealership locations</h2>;
}

// function Topic({ match }) {
//   return <h3>Requested Param: {match.params.id}</h3>;
// }
//
// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>
//
//       <Route path={`${match.path}/:id`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

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
