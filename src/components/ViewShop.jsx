import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewShop = () => {
    const [data, changedata] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:8080/view",data).then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
            }
        ).finally()

    }
    useEffect(() => { fetchData()}, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card" >
                                            <img src={value.image} class="card-img-top" alt="..." height={200}></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.productid}</h5>
                                                <p class="card-text">{value.productname}</p>
                                                <p class="card-text">{value.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewShop