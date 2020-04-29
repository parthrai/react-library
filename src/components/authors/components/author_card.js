import React from 'react'
import {Link} from 'react-router-dom'

const AuthorCard = props =>{

    console.log("I am here")
    console.log(props.authors)

    if(props.authors.length === 0){
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

            {props.authors.map( author =>{
                return (
                    <div className="col-lg-3" key={author._id}>

                        <div className="card">
                            <img className="author-img" alt={author.name} src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg" />
                            <h3>{author.name}</h3>
                            <p className="author"><strong>{author.email}</strong></p>
                            <p>{author.phone}</p>
                            <p>

                                <Link to={`/author/${author._id}/show`}>
                                    <button>Profile</button>
                                </Link>


                            </p>
                        </div>
                    </div>
                )
            })}





        </div>
    )
}

export default AuthorCard