import React, { useEffect, useState } from 'react'
import { Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
// import Car from './Car.jsx'

export default function CarList() {

  const [carListData, setCarListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataFailed, setDataFailed] = useState(false);
  console.log(isLoading)
  useEffect(() => {
    fetch(`http://localhost:8080/cars`)
    .then(res => res.json())
    .then( response => {
      setCarListData(response)
      setIsLoading(false)
      console.log( response )
    })
    .catch(error => {
      setDataFailed(true)
      console.log(error)
    })
  }, [isLoading]) // run when a car is deleted by setting isLoading

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
          {dataFailed && <p>failed to load</p>}
        <tbody>
          {carListData.map( car => (
            <>
              <CarRow loadingState={setIsLoading} car_id={car.id} year={car.year} make={car.make} model={car.model} dealership={car.location_id} />
            </>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

function CarRow({ car_id, year, make, model, dealership, loadingState }){

  const handleDelete = id => {
    console.log(id)
    fetch(`http://localhost:8080/cars/${id}`, {
      method: 'DELETE'
    })
    .then(() => loadingState(true))
    .catch(error => console.error('Error:', error));
  }

  return (
    <>
    <tr>
      <th scope="row">{year}</th>
      <td>{make}</td>
      <td>{model}</td>
      <td>{dealership}</td>
      <td>
        <Button>
          <Link to={`/cars/${car_id}`}>
            View Full Details
          </Link>
        </Button>
      </td>
      <td>
        <Button>
          <Link to={`/cars/${car_id}/edit`}>
            Edit Car
          </Link>
        </Button>
      </td>
      <td>
        <Button onClick={() => handleDelete(car_id)}>
          Remove Car
        </Button>
      </td>
    </tr>
    </>
  )
}
