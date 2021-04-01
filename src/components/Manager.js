import React, {useEffect, useState,Component} from 'react'
import axios from 'axios'
import {Link,Route} from 'react-router-dom'
import SitePage from "./SitePage"


class Manager extends Component {
    constructor(){
        super();
        this.state = {
            siteArr:[]
        };
        this.url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form"
        this.getSites = this.getSites.bind(this);
        this.getNo = this.getNo.bind(this);
    }

    componentDidMount(){
        this.getSites();
    }

    async getSites() {
        const campArr = []

        let data = await axios.get(this.url)
        // original
        .then(res => res.data.map(site => campArr.push(site.location)))
        .catch(err => console.log(err))

        this.state.siteArr = Array.from([...new Set(campArr)])

        console.log("siteArr",this.state.siteArr)
        this.forceUpdate()
        // this.state.siteArr.map(item => console.log(item))
    }

    getNo (e) {
        console.log(e)
    }

    render(){
        const {siteArr} = this.state;
        console.log("sitearr",siteArr)
        return(

            <>
            <h1>Manager Page</h1>
             {siteArr && siteArr.map(item => {
                return(
                   <Link onClick={this.getNo(item)} to={"/manager/" + item}> {item} </Link> 
                )
                })} 
                <Route path={"/manager"}>
                    <SitePage />
                </Route>
            </>
        )        
    }
}

export default Manager



//     const [campsites,useCampsites] = useState(null)
//     const campArr = []
//     const finalList = []
//     let unique =[]
    
    // const dbURL = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form"
    


//     async function getCamps() {
//         campArr[0].map(item => {
//         finalList.push(item.location)
//          })        
//         unique = [...new Set(finalList)]
//           console.log('uniquie',unique)
//     }