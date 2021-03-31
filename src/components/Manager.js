import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Manager () {

    const [campsites,useCampsites] = useState(null)
    const campArr = []
    const finalList = []
    
    const dbURL = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form"

    async function getCamps() {
        // console.log("campArr",campArr[0])
        console.log("unique", unique)
        campArr[0].map(item => {
        // console.log(item)
        finalList.push(item.location)
        console.log("finallist",finalList)
    })
    //    await axios.get(dbURL)
    //     .then(res => {campArr.push(res.data)
    //         console.log("axios return",campArr)

    //     })
    //     .catch(err => console.log(err))
    }

   axios.get(dbURL)
        .then(res => {campArr.push(res.data)
            // console.log("axios return",campArr)
        })
        .catch(err => console.log(err))




    const unique = [...new Set(campArr[0])]


    return(

        <>
        <h1>Manager Page</h1>
        {campArr.map(siteNo => {
            <p>{siteNo}</p>
        })}
        <button onClick={getCamps} >get campsites</button>
        </>
    )
}

export default Manager