import React, { useState, useEffect } from 'react'
import useForm from 'react-hook-form'
import { Redirect} from 'react-router-dom'
import { Row, Col, Form, FormGroup, Label } from 'reactstrap';

export default function LocationEdit({ match }){
  const { register, handleSubmit } = useForm()
  const [submittedForm, setSubmittedForm] = useState(false)
  const [locationData, setLocationData] = useState({})

  const onSubmit = data => {
    fetch(`http://localhost:8080/locations/${match.params.location_id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => setSubmittedForm(true))
  }

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
    <div className="container-fluid">
      edit the selected dealership location
    <hr></hr>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <input defaultValue={locationData.name} className="form-control" type="text" name="name" id="name" placeholder="Enter the dealership's name" ref={register({ required: true })} autofocus/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address">Address</Label>
              <input defaultValue={locationData.address} className="form-control" type="text" name="address" id="address" placeholder="Enter the dealership's address" ref={register({ required: true })} />
            </FormGroup>
          </Col>
      </Row>

      <input className="form-control btn-dark" type="submit"/>
    </Form>
    {submittedForm ? <Redirect to='/locations' /> : null}
  </div>
  )
}
