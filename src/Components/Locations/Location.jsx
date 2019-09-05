import React, { useEffect, useState } from 'react'
import {Row, Col} from 'reactstrap'

export default function Location({ match }){

  const [locationData, setLocationData] = useState({})
  const [carData, setCarData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/locations/${match.params.location_id}`)
      .then(res => res.json())
      .then( response => {
        setLocationData(response)
        console.log( response )
        })
      .catch(error => {
        console.log(error)
      })
    }, [match.params.location_id])

  useEffect(() => {
    fetch(`http://localhost:8080/cars/location/${match.params.location_id}`)
    .then(res => res.json())
    .then(response => {
      setCarData(response)
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [match.params.location_id])

  const carTextStyle = {fontSize: '22px'}

  return (
    <div className="container">
      <Row>
        <Col xs={6}>
          <small className="text-muted"><i>Name</i>:</small> <h3>{locationData.name}</h3>
        </Col>
        <Col xs={6}>
          <small className="text-muted"><i>Address</i>:</small> <h3>{locationData.address}</h3>
        </Col>
      </Row>
      <hr></hr>
      <h5><em><u>cars on location</u></em></h5>
      <Row style={carTextStyle}>
        <Col>
          {carData.map( car => (
            <>
            <li>
              {car.year} {car.make} {car.model} <br></br>
            </li>
            </>
          ))}
        </Col>

      </Row>
    </div>
  )
}
