import React from 'react'
import {useParams} from 'react-router-dom'

const Show=()=>{

    let {id} = useParams();

    // using the ID above, make an axios request to fetch info about this book

    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1>This page will show details of {id}</h1>
            </div>
        </div>
    )
}

export default Show