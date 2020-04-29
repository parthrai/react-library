import React from 'react'
import {useParams} from 'react-router-dom'

const Show=(props)=>{

    let {id} = useParams()

    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1>This page will show details of {id} author</h1>
            </div>
        </div>
    )
}

export default Show