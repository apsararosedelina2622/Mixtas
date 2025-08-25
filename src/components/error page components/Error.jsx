import React, { useContext } from 'react'

import { MyContext } from '../../context/ContextProvider'

const Error = () => {

  const { navigate } = useContext(MyContext)

  return (
    <div className='container'>

      <div className="text-center my-5">

        <p className='display-3'><b>Error 404</b></p>

        <p className='fs-3'>Opps!</p>

        <p>The page you’re looking for isn’t available. Try to search again or <br /> use the go back button below.</p>

        <button onClick={() => navigate('/')} className='btn btn-dark px-3 py-2 my-3'>Back To Home</button>

      </div>

    </div>
  )
}

export default Error