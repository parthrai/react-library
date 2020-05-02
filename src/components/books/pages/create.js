import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

import AuthorsList from '../../common/authors_list'

const Create=()=>{


    const {register, handleSubmit, errors}  = useForm()

    const [showMessage, editShowMessage] = useState(false)
    const [authorsList, editAuthors] = useState({authors:[]})

    const Message=()=>{
        if(showMessage){
            return(
                <div className="alert alert-success">
                    <strong>Success!</strong> Book added!
                </div>
            )
        }

        return "";

    }


    useEffect( ()=>{

        const fetchAuthors = async ()=>{

           try{
               const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/authors`)
                console.log(response.data)
               editAuthors(response.data)


           }catch(e){
               console.log("ERROR - " +e)
           }
        }

        fetchAuthors()
    },[])

    const onSubmit=  async (formData,event)=>{

         console.log("Inside this function")
         console.log(formData)


            try{

             const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/books`,formData)

                console.log(response.data)

            }catch (e) {

                console.log("ERROR --- "+ e)
            }

            editShowMessage(true)



        event.target.reset()

        // next step will to make an axios call and send this data to express backend

    }

    return (
        <div className="row">



            <div className="col-lg-12 text-center ">
                <h1>Add a new book to my Library</h1>

                <br/>
                <br/>

                <div className="row text-left">



                    <div className="col-lg-6 mx-auto">

                        <Message/>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label >Title:</label>
                                <input type="text" name="name" className="form-control" placeholder="Enter title" ref={register({required:true, minLength:3})} />

                                {errors.name && <p className="error"><strong>Please enter a value for title</strong></p>}

                            </div>
                            <div className="form-group">
                                <label >Author:</label>
                                {/*<input type="text" name="author" className="form-control" placeholder="Enter author" ref={register({required:true})} />*/}

                                <select className="form-control" name="author_id" ref={register}>

                                    <AuthorsList authors={authorsList.authors}/>

                                </select>



                                {/*{errors.author && <p className="error"><strong>Please enter a value for author</strong></p>}*/}

                            </div>

                            <div className="form-group">
                                <label >Descirption:</label>
                                <textarea className="form-control" name="description" ref={register({required:true})}></textarea>

                                {errors.description && <p className="error"><strong>Please enter a value of description</strong></p>}

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