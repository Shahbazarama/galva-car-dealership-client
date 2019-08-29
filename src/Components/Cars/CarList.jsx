import React from 'react'
import { Table, Button } from 'reactstrap'
import { BrowserRouter as Switch, Router, Route, Link } from 'react-router-dom'
import Car from './Car.jsx'

export default function CarList() {
  return (

    <div>
      <Button>
        <Link to='/cars/new'>
          Add Car
        </Link>
      </Button>

      <Table striped>
        <thead>
          <tr>
            <th>Year</th>
            <th>Make</th>
            <th>Model</th>
            <th>Dealership</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>

          </tr>
        </thead>

        <tbody>

          <CarRow carID="1" />
          <CarRow carID="2" />
          <CarRow carID="3" />
          <CarRow carID="4" />
          <CarRow carID="5" />
          <CarRow carID="6" />
        </tbody>
      </Table>
    </div>
  )
}

function CarRow({ carID }){
  return (
    <>
    <tr>
      <th scope="row">2001</th>
      <td>Ford</td>
      <td>Mustang</td>
      <td>Berge Ford</td>
      <td>
        <Button>
          <Link to={`/cars/${carID}`}>
            View Full Details
          </Link>
        </Button>
      </td>
      <td>
        <Button>
          <Link to={`/cars/${carID}/edit`}>
            Edit Car
          </Link>
        </Button>
      </td>
      <td>
        <Button>
          Remove Car
        </Button>
      </td>
    </tr>
    </>
  )
}
