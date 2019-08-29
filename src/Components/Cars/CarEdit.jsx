import React from 'react'

import { Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default function CarEdit({ match }){

  return (
    <>
      editing car {match.params.car_id}
    <hr></hr>
    <Form>
      <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="carYear">Year</Label>
              <Input type="number" name="carYear" id="carYear" placeholder={match.params.car_id}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="carMake">Make</Label>
              <Input type="text" name="carMake" id="carMake" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="carModel">Model</Label>
              <Input type="text" name="carModel" id="carModel" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="carVin">VIN</Label>
                <Input type="text" name="carVin" id="carVin" placeholder="carvin"/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="carMiles">Miles</Label>
                <Input type="number" name="carMiles" id="carMiles" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="carPrice">Price</Label>
                <Input type="number" name="carPrice" id="carPrice" />
              </FormGroup>
            </Col>
          </Row>
      <FormGroup>
        <Label for="carPhotoURL">Photo URL</Label>
        <Input type="text" name="carPhotoURL" id="carPhotoURL" placeholder="enter a direct link to a photo" />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
    </>
  )
}
