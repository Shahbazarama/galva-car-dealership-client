import React, { useEffect, useState } from 'react'
import { Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
// import Car from './Car.jsx'

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

  return (

    <div>
      <Button>
        <Link to='/locations/new'>
          Add Dealership
        </Link>
      </Button>

      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
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

  return (
    <>
    <tr>
      <th scope="row">{name}</th>
      <td>
        <Button>
          <Link to={`/locations/${location_id}`}>
            View Full Details
          </Link>
        </Button>
      </td>
      <td>
        <Button>
          <Link to={`/locations/${location_id}/edit`}>
            Edit Location
          </Link>
        </Button>
      </td>
      <td>
        <Button onClick={() => handleDelete(location_id)}>
          Remove Location
        </Button>
      </td>
    </tr>
    </>
  )
}
