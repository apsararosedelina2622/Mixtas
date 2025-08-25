import React, { useContext } from 'react'

import { MyContext } from '../../context/ContextProvider'

import { cart_img } from '../../assets/assets'

const NewInStore = () => {

    const { navigate } = useContext(MyContext)

    return (

        <div className='container'>

            <div className='text-center'>
                <h2>New in store</h2>
            </div>

            <div className='row'>

                {cart_img.map((cart) => {

                    return (

                        <div onClick={() => navigate('/product/' + cart.id)} className='col-lg-3 col-md-3 my-3' key={cart.desc}>
                            <img src={cart.img} alt="" className='w-100' />
                            <div className="my-3">
                                <p>{cart.desc}</p>
                                <p className='text-secondary'>{cart.price}</p>
                            </div>
                        </div>

                    )

                })}

            </div>

        </div>

    )
}

export default NewInStore