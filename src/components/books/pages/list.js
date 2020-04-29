import React from 'react'

import BookCard from '../components/book_card'

const  List=  ()=>{




    const BOOKS = [
        {
            id:'b1',
            title:'Learning JS',
            description:'This book will teach you JS',
            author:'a1'
        },
        {
            id:'b2',
            title:'Learning HTML',
            description:'This book will teach you HTML',
            author:'a1'
        },
        {
            id:'b3',
            title:'Learning PHP',
            description:'This book will teach you PHP',
            author:'a2'
        },
        {
            id:'b4',
            title:'Learning MERN',
            description:'This book will teach you MERN',
            author:'a1'
        }
    ]


    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1>This page will list all the books</h1>

                <br/><br/>

                <BookCard books={BOOKS}/>


            </div>
        </div>
    )
}

export default List