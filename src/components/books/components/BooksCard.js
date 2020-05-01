import React from 'react'
import {Link} from 'react-router-dom'

const BookCard = props =>{

    if(props.books.length === 0){
        return (
            <div className="row">
                <div className="col-lg-12">
                    <img alt="" src="https://cdn.dribbble.com/users/1449854/screenshots/4136663/no_data_found.png" />
                </div>
            </div>
        )
    }

    return (
        <div className="row">

            {props.books.map( book =>{
                return (
                    <div className="col-lg-3" key={book._id}>

                        <div className="card">
                            <img className="book-img" alt={book.name} src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg" />
                            <h3>{book.name}</h3>
                            <p>{book.description}</p>
                            <p>

                                <Link to={`/books/${book._id}/show`}>
                                    <button>View Book</button>
                                </Link>


                            </p>
                        </div>
                    </div>
                )
            })}





        </div>
    )
}

export default BookCard