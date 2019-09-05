import React, { useEffect, useState } from 'react'
import { Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { GoTrashcan, GoPencil, GoNote } from "react-icons/go";

export default function CarList() {

  const [carListData, setCarListData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [dataFailed, setDataFailed] = useState(false)

  const [locationData, setLocationData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/cars`)
    .then(res => res.json())
    .then( response => {
      setCarListData(response)
      setIsLoading(false)
    })
    .catch(error => {
      setDataFailed(true)
      console.log(error)
    })
  }, [isLoading]) // run when a car is deleted by setting isLoading

  useEffect(() => {
    fetch(`http://localhost:8080/locations`)
    .then(res => res.json())
    .then( response => {
      setLocationData(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  function findDealershipName(location_id){
    for(let i = 0; i < locationData.length; i++){
      if(locationData[i].id === location_id){
        return locationData[i].name
      }
    }
  }

  const linkStyle = {color: 'white'}
  const headerStyle = {color: '#475366'}

  return (

    <div className="container">
      <Link style={linkStyle} className="btn btn-primary float-right" to='/cars/new'>
        Add Car
      </Link>

    <Table hover>
      <thead>
        <tr>
          <th style={headerStyle}>Year</th>
          <th style={headerStyle}>Make</th>
          <th style={headerStyle}>Model</th>
          <th style={headerStyle} className="col-6">Dealership</th>
          <th className="col-2 text-center">View</th>
          <th className="col-2 text-center">Edit</th>
          <th className="col-2 text-center">Delete</th>
        </tr>
      </thead>
      {dataFailed && <p>failed to load</p>}
      <tbody>
        {carListData.map( car => (
          <>
          <CarRow loadingState={setIsLoading} car_id={car.id} year={car.year} make={car.make} model={car.model} dealership={findDealershipName(car.locationId)} />
        </>
      ))}
    </tbody>
  </Table>
</div>
)
}

function CarRow({ car_id, year, make, model, dealership, loadingState }){

  const handleDelete = id => {
    fetch(`http://localhost:8080/cars/${id}`, {
      method: 'DELETE'
    })
    .then(() => loadingState(true))
    .catch(error => console.error('Error:', error));
  }

  const linkStyle = {color: 'white'}

  return (
    <>
    <tr>
      <td scope="row">{year}</td>
      <td><em>{make}</em></td>
      <td><strong>{model}</strong></td>
      <td>{dealership}</td>
      <td className="text-center">
        <Link style={linkStyle} className="btn btn-primary" to={`/cars/${car_id}`}>
          <GoNote />
        </Link>

      </td>
      <td className="text-center">
        <Link style={linkStyle} className="btn btn-primary" to={`/cars/${car_id}/edit`}>
          <GoPencil />
        </Link>
      </td>
      <td className="text-center">
        <Button style={linkStyle} className="btn btn-danger" onClick={() => handleDelete(car_id)}>
          <GoTrashcan />
        </Button>
      </td>
    </tr>
  </>
  )
}
