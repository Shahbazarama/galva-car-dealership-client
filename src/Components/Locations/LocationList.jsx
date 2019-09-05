import React, { useEffect, useState } from 'react'
import { Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { GoTrashcan, GoPencil, GoNote } from "react-icons/go";


export default function LocationList() {

  const [locationData, setLocationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataFailed, setDataFailed] = useState(false);
  console.log(isLoading)
  useEffect(() => {
    fetch(`http://localhost:8080/locations`)
    .then(res => res.json())
    .then( response => {
      setLocationData(response)
      setIsLoading(false)
      console.log( response )
    })
    .catch(error => {
      setDataFailed(true)
      console.log(error)
    })
  }, [isLoading])

  const linkStyle = {color: 'white'}

  return (

    <div className="container">
      <Link style={linkStyle} className="btn btn-primary float-right" to='/locations/new'>
        Add Dealership
      </Link>

    <Table hover>
      <thead>
        <tr>
          <th className="col-6">Name</th>
          <th className="col-2 text-center">View</th>
          <th className="col-2 text-center">Edit</th>
          <th className="col-2 text-center">Delete</th>
        </tr>
      </thead>
      {dataFailed && <p>failed to load</p>}
      <tbody>
        {locationData.map( location => (
          <>
          <LocationRow loadingState={setIsLoading} location_id={location.id} name={location.name} />
        </>
      ))}
    </tbody>
  </Table>
</div>
)
}

function LocationRow({ location_id, name, loadingState }){

  const handleDelete = id => {
    console.log(id)
    fetch(`http://localhost:8080/locations/${id}`, {
      method: 'DELETE'
    })
    .then(() => loadingState(true))
    .catch(error => console.error('Error:', error));
  }

  const linkStyle = {color: 'white'}

  return (
    <>
    <tr>
      <td scope="row">{name}</td>
      <td className="text-center">
        <Link style={linkStyle} className="btn btn-primary" to={`/locations/${location_id}`}>
          <GoNote />
      </Link>
    </td>
    <td className="text-center">
      <Link style={linkStyle} className="btn btn-secondary" to={`/locations/${location_id}/edit`}>
      <GoPencil />
    </Link>

  </td>
  <td className="text-center">
    <Button style={linkStyle} className="btn btn-danger" onClick={() => handleDelete(location_id)}>
      <GoTrashcan />
    </Button>
  </td>
</tr>
</>
)
}
