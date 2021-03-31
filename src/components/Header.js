import React from 'react'
import {Link} from 'react-router-dom'


function Header () {
    return(
        <>
            <h1>
                Campsite Manager
            </h1>    
            
            <Link to="/survey" style={{marginLeft:'5%'}}>
                Survey
            </Link>   

            <Link to="/manager"style={{marginLeft:'5%'}}>
                Manager
            </Link>

        </>
    )
}

export default Header