import React, { useState, useEffect } from 'react'
import useForm from 'react-hook-form'
import { Redirect} from 'react-router-dom'
import { Row, Col, Form, FormGroup, Label } from 'reactstrap';

export default function CarEdit({ match }){
  const { register, handleSubmit } = useForm()
  const [submittedForm, setSubmittedForm] = useState(false)
  const [carListData, setCarListData] = useState({})
  const [locationData, setLocationData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const onSubmit = data => {
    fetch(`http://localhost:8080/cars/${match.params.car_id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => setSubmittedForm(true))
  }

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


  useEffect(() => {
    fetch(`http://localhost:8080/locations`)
    .then(res => res.json())
    .then( response => {
      setLocationData(response)
      setIsLoading(false)
      console.log( response )
    })
    .catch(error => {
      console.log(error)
    })
  }, [isLoading])

  return (
    <div className="container-fluid">
      edit the selected car
      <hr></hr>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="year">Year</Label>
              <input defaultValue={carListData.year} className="form-control" type="number" name="year" id="year" placeholder="Enter the car's year" ref={register({ required: true })} autofocus/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="make">Make</Label>
              <input defaultValue={carListData.make} className="form-control" type="text" name="make" id="make" placeholder="Enter the car's make" ref={register({ required: true })} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="model">Model</Label>
              <input defaultValue={carListData.model} className="form-control" type="text" name="model" id="model" placeholder="Enter the car's model" ref={register({ required: true })} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="vin">VIN</Label>
              <input defaultValue={carListData.vin} className="form-control" type="text" name="vin" id="vin" placeholder="Enter the car's VIN" ref={register({ required: true })} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="miles">Miles</Label>
              <input defaultValue={carListData.miles} className="form-control" type="number" name="miles" id="miles" placeholder="Enter the car's miles" ref={register({ required: true })} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="price">Price</Label>
              <input defaultValue={carListData.price} className="form-control" type="number" name="price" id="price" placeholder="Enter the car's price" ref={register({ required: true })} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={8}>
            <FormGroup>
              <Label for="photo_url">Photo URL</Label>
              <input defaultValue={carListData.photo_url} className="form-control" type="text" name="photo_url" id="photo_url" placeholder="Enter the photo URL of the car" ref={register({ required: true })} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="locationId">Dealership Name</Label>
              <select className="form-control" name="locationId" id="locationId" ref={register({ required: true })}>
                {locationData.map( location => (
                  <>
                  {location.id === carListData.locationId ? <option value={location.id} selected>{location.name}</option> : <option value={location.id}>{location.name}</option>}
                </>
              ))}
            </select>
          </FormGroup>
        </Col>
      </Row>

      <input className="form-control btn-dark" type="submit"/>
    </Form>
    {submittedForm ? <Redirect to='/cars' /> : null}
  </div>
)
}
