import React, { useEffect, useState } from 'react'
import {Row, Col} from 'reactstrap'

export default function Location({ match }){

  const [locationData, setLocationData] = useState({});

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

  return (
    <div>
      <Row>
        <Col xs={6}>
          <small className="text-muted"><i>Name</i>:</small> <h3>{locationData.name}</h3>
        </Col>
        <Col xs={6}>
          <small className="text-muted"><i>Address</i>:</small> <h3>{locationData.address}</h3>
        </Col>
      </Row>
    </div>
  )
}
