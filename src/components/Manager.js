import React, {Component} from 'react'
import axios from 'axios'
import {Link,Route} from 'react-router-dom'
import SitePage from "./SitePage"
import{connect} from 'react-redux'
import {getSite} from '../actions'



class Manager extends Component {
    constructor(){
        super();
        this.state = {
            siteArr:[],
            currentSite:null
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

        await axios.get(this.url)
        .then(res => res.data.map(site => campArr.push(site.location)))
        .catch(err => console.log(err))

        this.state.siteArr = Array.from([...new Set(campArr)])
        this.forceUpdate()
    }

    getNo(e) {
        this.setState({currentSite: e})
        
    }

    render(){
        const {siteArr} = this.state;
        const {currentSite} = this.state;
        return(
            <>
            <h1>Manager Page</h1>
             {siteArr.map(item => {
                return(
                   <Link onClick={() => this.getNo(`${item}`)} key={item} to={ "/manager/"+ item}> {item} </Link> 
                    )
                })} 
                <Route path={`/manager/${currentSite}`}>
                    <SitePage currentSite={currentSite}/>
                </Route>
            </>
        )        
    }
}

const mapStateToProps = state => ({

    currentSite: state.currentSite
  })
  
  export default connect(
    mapStateToProps,
    {getSite}
    )(Manager);

// export default Manager



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