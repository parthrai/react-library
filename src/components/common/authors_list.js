import React from 'react'


const AuthorsList = props =>{


    return (

        <>

        {
            props.authors.map((author)=>{
                return <option key={author._id} value={author._id} >{author.name} </option>
            })

        }

        </>


    )

}


export default AuthorsList