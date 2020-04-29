import React from 'react'


const AuthorsList = props =>{


    return (

        <>

        {
            props.authors.map((author)=>{
                return <option key={author.id} value={author.id} >{author.name} </option>
            })

        }

        </>


    )

}


export default AuthorsList