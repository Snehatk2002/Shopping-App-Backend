import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Addshop = () => {
    const [data, setdata] = useState(
        {
            "productid":"",
            "productname":"",
            "image":"",
            "price":""
        }
    )
    const inputHandler=(event)=>{
        setdata({ ...data,[event.target.name]: event.target.value})
      }
      const readValue=()=>{
          console.log(data)
          axios.post("http://localhost:8080/add",data).then(
              (response)=>{
                  console.log(response.data)
                  if (response.data.status=="success")
                   {
                      alert("SUCCESSFULLY ADDED")
                  } else {
                      alert("ERROR")
                  }
              }
          ).catch()
      }
  return (
    <div>
        <Navbar/>
        <div className="conatiner">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-lable">PRODUCT ID</label>
                            <input type="text" className="form-control" name='productid' value={data.productid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-lable">PRODUCT NAME</label>
                            <input type="text" className="form-control" name='productname' value={data.productname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-lable">IMAGE</label>
                            <input type="text" className="form-control" name='image' value={data.image} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-lable">PRICE</label>
                            <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler} />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-success"onClick={readValue}>SUBMIT</button>
                        </div>
                            </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addshop