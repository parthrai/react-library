import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'


const Create=()=>{




    const {register, handleSubmit, errors}  = useForm()

    const [showMessage, editShowMessage] = useState(false)
    const [errorMessage, editErrorMessage] = useState(false)


    const Message=()=>{
        if(showMessage){
            return(
                <div className="alert alert-success">
                    <strong>Success!</strong> Author added!
                </div>
            )
        }

        return "";

    }

    const ShowErrorMessage=()=>{
        if(errorMessage){
            return(
                <div className="alert alert-danger">
                    <strong>Whoops!</strong> Something went wrong, Please try again later.
                </div>
            )
        }

        return "";

    }
    const onSubmit=  async (formData,event)=>{
        editShowMessage(false)
        editErrorMessage(false)

        try{

            await axios.post('http://localhost:5000/api/authors',formData)
            editShowMessage(true)


        }catch (e) {
            editErrorMessage(true)

        }








        event.target.reset()

        // next step will to make an axios call and send this data to express backend

    }


    return (
        <div className="row">
            <div className="col-lg-12 text-center ">
                <h1>Add a new Author </h1>

                <br/>
                <br/>

                <div className="row text-left">



                    <div className="col-lg-6 mx-auto">

                        <Message/>
                        <ShowErrorMessage/>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label >Name:</label>
                                <input type="text" name="name" className="form-control" placeholder="Enter name" ref={register({required:true, minLength:3})} />

                                {errors.name && <p className="error"><strong>Please enter a value for name</strong></p>}

                            </div>
                            <div className="form-group">
                                <label >Email:</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter email" ref={register({required:true})} />

                                {errors.email && <p className="error"><strong>Please enter a value for email</strong></p>}

                            </div>



                            <div className="form-group">
                                <label >Phone:</label>
                                <input type="text" name="phone" className="form-control" placeholder="Enter phone" ref={register({required:true})} />

                                {errors.phone && <p className="error"><strong>Please enter a value for phone</strong></p>}

                            </div>



                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Create