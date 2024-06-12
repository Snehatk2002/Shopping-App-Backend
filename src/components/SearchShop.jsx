import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchShop = () => {
    const [data, setdata] = useState(
        {
            "productid": ""
        }
    )

    const [result, setResult] = useState([])

    const deleteCourse = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8080/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("SUCCESSFULLY DELETED")
                } else {
                    alert("ERROR IN DELETION")
                }
            }
        ).catch()
    }
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                console.log(response.data)
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log("error")
            }
        ).finally()
    }

    return (
        <div>
            <Navbar />
            <div className="conatainer">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-lable">PRODUCT ID</label>
                                <input type="text" className="form-control" name='productid' value={data.productid} onChange={inputHandler} />
                            </div>
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button class="btn btn-info" onClick={readValue}>SEARCH</button>
                                </div>
                            </center>
                        </div>
                        <div className="row">
                            <div className="col col-12 col-sm-6 xol-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                {result.map(
                                    (value,index)=>{
                                        return <div class="card" >
                                        <img src={value.image} class="card-img-top" alt="..." height={200}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.productid}</h5>
                                            <p class="card-text">{value.productname}</p>
                                            <p class="card-text">{value.price}</p>
                                            <button class="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>DELETE</button>
                                        </div>
                                    </div>
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchShop