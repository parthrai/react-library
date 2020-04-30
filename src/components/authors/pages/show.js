import React,{useState,useEffect} from 'react'
import {Link, useParams, Redirect, useHistory} from 'react-router-dom'
import axios from 'axios'
import AuthorCard from "./list";

const Show=(props)=>{

    let {id} = useParams()
    let history = useHistory()

    const [authorState, editAuthor] = useState()
    const[isFetched, editIsFetched ] = useState(false);



    useEffect(()=>{

        const fetchData=async ()=>{


            try{
                const response = await axios.get(`http://localhost:5000/api/authors/${id}`)
                editAuthor(response.data)
                console.log(response.data)
                editIsFetched(true)


            }catch (e) {

                console.log("ERROR - "+e)
            }


        }

        fetchData()

    },[])



    const deleteAuthor=async (author_id)=>{

        try{
            const response = await axios.delete(`http://localhost:5000/api/authors/${author_id}`)

            console.log(response.data)

            history.push("/authors")


        }catch (e) {
            console.log("ERROR- " +e)
        }

    }


    const LoadComponent =()=>{

        if(isFetched){

            return (
                <div className="col-lg-6" >

                    <div className="card">
                        <img className="author-img"  src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg" />
                        <h3>{authorState.author.name}</h3>
                        <p className="author"><strong>{authorState.author.email}</strong></p>
                        <p>{authorState.author.phone}</p>
                        <p>Total Books : {authorState.author.books.length}</p>
                        <p>

                            <Link to="/">
                                <button>Profile</button>
                            </Link>


                        </p>

                        <p>

                                <button className="btn btn-danger" onClick={() => deleteAuthor(id)}>Delete</button>


                        </p>

                        <p>
                            <Link to={`/author/update/${id}`}>
                                <button>Edit</button>
                            </Link>
                        </p>

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



    return (
        <div className="row">
            <div className="col-lg-12 text-center">

                <LoadComponent/>

            </div>
        </div>
    )
}

export default Show