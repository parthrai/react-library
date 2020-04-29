import React,{useState, useEffect} from 'react'
import axios from 'axios'

import AuthorCard from '../components/author_card'
import BookCard from "../../books/pages/list";


const List=()=>{

    const [authorsList, editAuthors] = useState([])

    const[isFetched, editIsFetched ] = useState(false);



    useEffect( () => {
        const fetchAuthors= async ()=>{

            try{
                const response = await axios.get('http://localhost:5000/api/authors')

                console.log("response is "+ response)
                editAuthors(response.data)

                editIsFetched(true)

            }catch (e) {
                console.log(e)
            }

        }

        fetchAuthors()

    },[]);

    const LoadComponent =()=>{

        if(isFetched){

            return (
                <AuthorCard authors={authorsList.authors}/>

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
                <h1>This page will list all the authors</h1>

                <br/><br/>

                <LoadComponent/>

            </div>
        </div>
    )
}

export default List