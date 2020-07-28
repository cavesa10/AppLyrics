import React from 'react'

export const Error = ({msj}) => {
  return ( 
    <div>
      <p className="alert alert-danger text-center p-2" >{msj}</p>
    </div>
  )
}
