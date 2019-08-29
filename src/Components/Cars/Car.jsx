import React from 'react'

export default function Car({ match }){
  return (
    <div>
      <h1>
        vin {match.params.car_id}
      </h1>
      <h1>
        year
      </h1>
      <h1>
        make
      </h1>
      <h1>
        model
      </h1>
      <h1>
        miles
      </h1>
      <h1>
        price
      </h1>
      <h1>
        photo_url
      </h1>
      <h1>
        location_id
      </h1>
    </div>
  )
}
