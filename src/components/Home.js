import React from 'react'

const Home=()=>{

    alert(process.env.REACT_APP_NAME)

    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                 <h1>This is home page component</h1>
            </div>
        </div>
    )
}

export default Home