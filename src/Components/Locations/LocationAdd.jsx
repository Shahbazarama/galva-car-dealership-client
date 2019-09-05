import React, { useState } from 'react'
import useForm from 'react-hook-form'
import { Redirect} from 'react-router-dom'
import { Row, Col, Form, FormGroup, Label } from 'reactstrap';

export default function LocationAdd(){
  const { register, handleSubmit } = useForm()
  const [submittedForm, setSubmittedForm] = useState(false)
  const onSubmit = data => {
    fetch(`http://localhost:8080/locations`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => setSubmittedForm(true))

  }

  return (
    <div className="container-fluid">
      add a new dealership location
    <hr></hr>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <input className="form-control" type="text" name="name" id="name" placeholder="Enter the dealership's name" ref={register({ required: true })} autofocus/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address">Address</Label>
              <input className="form-control" type="text" name="address" id="address" placeholder="Enter the dealership's address" ref={register({ required: true })} />
            </FormGroup>
          </Col>
      </Row>
      <input className="form-control" type="submit"/>
    </Form>
      {submittedForm ? <Redirect to='/locations' /> : null}
    </div>
  )
}
