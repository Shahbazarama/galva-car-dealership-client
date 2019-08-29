import React from 'react'

import { Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default function CarAdd(){

  return (
    <>
      add a new car
    <hr></hr>
    <Form>
      <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="carYear">Year</Label>
              <Input type="number" name="carYear" id="carYear" placeholder="Enter the car's year"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="carMake">Make</Label>
              <Input type="text" name="carMake" id="carMake" placeholder="Enter the car's make"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="carModel">Model</Label>
              <Input type="text" name="carModel" id="carModel" placeholder="Enter the car's model"/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="carVin">VIN</Label>
                <Input type="text" name="carVin" id="carVin" placeholder="Enter the car's VIN"/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="carMiles">Miles</Label>
                <Input type="number" name="carMiles" id="carMiles" placeholder="Enter the car's miles"/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="carPrice">Price</Label>
                <Input type="number" name="carPrice" id="carPrice" placeholder="Enter the car's price"/>
              </FormGroup>
            </Col>
          </Row>
      <FormGroup>
        <Label for="carPhotoURL">Photo URL</Label>
        <Input type="text" name="carPhotoURL" id="carPhotoURL" placeholder="Enter the photo URL of the car" />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
    </>
  )
}
