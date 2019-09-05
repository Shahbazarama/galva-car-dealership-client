import React, { useEffect, useState } from 'react'
import {Row, Col} from 'reactstrap'

export default function Car({ match }){

  const [carListData, setCarListData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/cars/${match.params.car_id}`)
      .then(res => res.json())
      .then( response => {
        setCarListData(response)
        console.log( response )
        })
      .catch(error => {
        console.log(error)
      })
    }, [match.params.car_id])

  return (
    <div>
      <Row>
        <Col md={4}>
          <img src={carListData.photo_url} width="100%"/>
        </Col>
        <Col md={8}>
          <Row className="text-center">
            <Col xs={4}>
              <small className="text-muted"><i>Year</i>:</small> <h3>{carListData.year}</h3>
            </Col>
            <Col xs={4}>
              <small className="text-muted"><i>Make</i>:</small> <h3>{carListData.make}</h3>
            </Col>
            <Col xs={4}>
              <small className="text-muted"><i>Model</i>:</small> <h3>{carListData.model}</h3>
            </Col>
          </Row>
          <Row className="text-center">
            <Col xs={4}>
              <small className="text-muted"><i>Miles</i>:</small> <h3>{carListData.miles}</h3>
            </Col>
            <Col xs={4}>
              <small className="text-muted"><i>Price</i>:</small> <h3>${carListData.price}</h3>
            </Col>
          </Row>
          <hr></hr>
          <Row className="text-center">
            <Col xs={4}>
              <small className="text-muted"><i>VIN</i>:</small> <h3>{carListData.vin}</h3>
            </Col>
            <Col xs={4}>
              <small className="text-muted"><i>Dealership Location ID</i>:</small> <h3>{carListData.location_id}</h3>
            </Col>
          </Row>
        </Col>
      </Row>

    </div>
  )
}
