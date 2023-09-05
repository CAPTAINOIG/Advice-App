import axios from 'axios'
import React, { useState } from 'react'
import { BiSolidDice5 } from 'react-icons/bi'


const Api = () => {

    const [detail, setDetail] = useState("")
    let endpoint = 'https://api.adviceslip.com/advice'
    const get = () => {
        axios.get(endpoint)
            .then((response) => {
                console.log(response.data.slip);
                setDetail(response.data.slip)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <section className=''>
                <div id='card' className='bg-white shadow p-4 w-96  mx-auto mt-40 rounded-lg'>
                <h1 className='text-indigo-900 text-center font-semibold dark:text-black'>ADVICE #{detail.id}</h1>
                    <h1 className='text-indigo-900 font-semibold dark:text-black mt-3 text-center'>"{detail.advice}"</h1>
                    
                    <hr className='text-black mt-5' />


                    <div className='text-center mt-4'>
                        <button className='hover:bg-indigo-600 bg-violet-200 dark:hover:bg-black  font-semibold py-2 px-4 rounded text-black dark:hover:text-white' onClick={get}>
                            <BiSolidDice5 />
                        </button>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Api