import React from 'react'
import {Link} from 'react-router-dom'


function Header () {
    return(
        <div style={{paddingBottom:'5%'}}>
            <h1>
                Campsite Manager
            </h1>    
            
            <Link to="/survey" style={{marginLeft:'5%'}}>
                Survey
            </Link>   

            <Link to="/manager"style={{marginLeft:'5%'}}>
                Manager
            </Link>

        </div>
    )
}

export default Header