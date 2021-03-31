import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Manager () {

    const [campsites,useCampsites] = useState(null)
    const campArr = []
    const finalList = []
    let unique =[]
    
    const dbURL = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form"
    
   axios.get(dbURL)
        .then(res => {campArr.push(res.data)})
        .catch(err => console.log(err))

    async function getCamps() {
        campArr[0].map(item => {
        finalList.push(item.location)
         })        
        unique = [...new Set(finalList)]
          console.log('uniquie',unique)
    }



    return(

        <>
        <h1>Manager Page</h1>
        <div>
        {unique.map(siteNo => {
            <p>{siteNo}</p>
        })}
        </div>

        <button onClick={getCamps} >get campsites</button>
        </>
    )
}

export default Manager