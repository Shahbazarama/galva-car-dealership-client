import React, { useState } from 'react'
import useForm from 'react-hook-form'
import { Redirect} from 'react-router-dom'
import { Row, Col, Form, FormGroup, Label } from 'reactstrap';

export default function CarAdd(){
  const { register, handleSubmit } = useForm()
  const [submittedForm, setSubmittedForm] = useState(false)
  const onSubmit = data => {
    fetch(`http://localhost:8080/cars`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => setSubmittedForm(true))

  }

  return (
    <>
      add a new car
    <hr></hr>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="year">Year</Label>
              <input className="form-control" type="number" name="year" id="year" placeholder="Enter the car's year" ref={register({ required: true })} autofocus />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="make">Make</Label>
              <input className="form-control" type="text" name="make" id="make" placeholder="Enter the car's make" ref={register({ required: true })} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="model">Model</Label>
              <input className="form-control" type="text" name="model" id="model" placeholder="Enter the car's model" ref={register({ required: true })} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="vin">VIN</Label>
                <input className="form-control" type="text" name="vin" id="vin" placeholder="Enter the car's VIN" ref={register({ required: true })} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="miles">Miles</Label>
                <input className="form-control" type="number" name="miles" id="miles" placeholder="Enter the car's miles" ref={register({ required: true })} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="price">Price</Label>
                <input className="form-control" type="number" name="price" id="price" placeholder="Enter the car's price" ref={register({ required: true })} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <Label for="photo_url">Photo URL</Label>
                <input className="form-control" type="text" name="photo_url" id="photo_url" placeholder="Enter the photo URL of the car" ref={register({ required: true })} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="location_id">Dealership ID</Label>
                <input className="form-control" type="text" name="location_id" id="location_id" placeholder="Enter the dealership location ID" ref={register({ required: true })} />
              </FormGroup>
            </Col>
          </Row>

          <input className="form-control" type="submit"/>
        </Form>
        {submittedForm ? <Redirect to='/cars' /> : null}
    </>
  )
}
