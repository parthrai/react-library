import React,{useState, useEffect} from 'react'
import axios from 'axios'

const BooksTable = (props)=>{

    const [booksState, editBooks] = useState()
    const[isFetched, editIsFetched ] = useState(false);


    useEffect(()=>{

        const fetchBooks=async ()=>{

            try{
                const response = await axios.get(`http://localhost:5000/api/books/author/${props.author_id}`)
                console.log(response.data)
                editBooks(response.data)
                editIsFetched(true)

            }catch (e) {

                console.log("ERROR --- "+ e)
            }
        }

        fetchBooks()

    },[])


    const LoadComponent =()=>{

        if(isFetched){

            return (

                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>



                    <tbody>

                    { booksState.books.map(book=>{
                        return (

                            <tr key={book._id}>
                                <td>{book.name}</td>
                                <td>{book.description}</td>
                            </tr>
                        )

                    })

                    }


                    </tbody>
                </table>


            )
        }else  return (

            <>

                <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" height="200"/>

                <h3>Loading data, please wait</h3>


            </>
        )
    }




    return (
        <div>

            <h3>List of Books</h3>
            <br/>
            <br/>
            <br/>

            <LoadComponent/>


        </div>
    )

}

export default BooksTable





