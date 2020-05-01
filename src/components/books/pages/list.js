import React,{useState, useEffect} from 'react'
import axios from 'axios'

import BookCard from "../../books/pages/list";
import BooksCard from "../../books/components/BooksCard"
import AuthorCard from '../../authors/components/author_card'

const List=()=>{

    const [booksList, editBooks] = useState([])

    const[isFetched, editIsFetched ] = useState(false);



    useEffect( () => {
        const fetchBooks= async ()=>{

            try{
                const response = await axios.get('http://localhost:5000/api/books')

                console.log("response is "+ response)
                editBooks(response.data)

                editIsFetched(true)

            }catch (e) {
                console.log(e)
            }

        }

        fetchBooks()

    },[]);

    const LoadComponent =()=>{

        if(isFetched){

            return (
                <BooksCard books={booksList.books}/>

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
                <h1>This page will list all the Books</h1>

                <br/><br/>

                <LoadComponent/>

            </div>
        </div>
    )
}

export default List