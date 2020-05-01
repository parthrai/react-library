import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useForm} from 'react-hook-form'

import axios from 'axios'


const Update=(props)=>{

    let {id} = useParams()


    const {register, handleSubmit, errors}  = useForm()

    const [authorState,editAuthorState] = useState()
    const [showMessage, editShowMessage] = useState(false)
    const [errorMessage, editErrorMessage] = useState(false)
    const[isFetched, editIsFetched ] = useState(false);

    const fetchData=async ()=>{

        try{
            const response = await axios.get(`http://localhost:5000/api/authors/${id}`)
            editAuthorState(response.data)

            editIsFetched(true)


        }catch (e) {

            console.log("ERROR - "+e)
        }


    }

    useEffect(()=>{


        fetchData()
    },[])


    const LoadComponent =()=>{

        if(isFetched){

            return (
                <div className="col-lg-12 text-center ">
                    <h1>Edit {authorState.author.name}'s Info</h1>

                    <br/>
                    <br/>

                    <div className="row text-left">



                        <div className="col-lg-6 mx-auto">

                            <Message/>
                            <ShowErrorMessage/>


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label >Name:</label>
                                    <input  disabled={true} defaultValue={authorState.author.name} type="text"  name="name" className="form-control" placeholder="Enter name" ref={register({required:true, minLength:3})} />

                                    {errors.name && <p className="error"><strong>Please enter a value for name</strong></p>}

                                </div>
                                <div className="form-group">
                                    <label >Email:</label>
                                    <input defaultValue={authorState.author.email} type="email" name="email" className="form-control" placeholder="Enter email" ref={register({required:true})} />

                                    {errors.email && <p className="error"><strong>Please enter a value for email</strong></p>}

                                </div>



                                <div className="form-group">
                                    <label >Phone:</label>
                                    <input defaultValue={authorState.author.phone} type="text" name="phone" className="form-control" placeholder="Enter phone" ref={register({required:true})} />

                                    {errors.phone && <p className="error"><strong>Please enter a value for phone</strong></p>}

                                </div>



                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>

                    </div>


                </div>

            )
        }else  return (

            <div>

                <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" height="200"/>

                <h3>Loading data, please wait</h3>


            </div>
        )
    }



    const Message=()=>{
        if(showMessage){
            return(
                <div className="alert alert-success">
                    <strong>Success!</strong> Author Updated!
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

            await axios.patch(`http://localhost:5000/api/authors/${id}`,formData)
            editShowMessage(true)
            fetchData()


        }catch (e) {
            editErrorMessage(true)

        }


        event.target.reset()

        // next step will to make an axios call and send this data to express backend

    }


    return (
        <div className="row">
            <LoadComponent/>
        </div>
    )
}

export default Update