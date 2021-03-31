import React, {useEffect,useState} from 'react'
import axios from 'axios'


function Manager () {

    const [campsites,useCampsites] = useState(null)
    const campArr = []
    

    
    const dbURL = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form"

    async function getCamps() {
        await axios.get(dbURL)
        .then(res => {campArr.push(res.data)
            console.log(campArr)

        })
        .catch(err => console.log(err))
    }
    const displayList = campArr.pop()
    
    return(

        <>
        <h1>Manager Page</h1>
        <button onClick={getCamps} >get campsites</button>
        </>
    )
}

export default Manager