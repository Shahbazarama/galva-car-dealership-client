import React from 'react'
import { Table, Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap'

export default function CarList() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
              <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                Toggle
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                    similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                    dignissimos esse fuga! Minus, alias.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
