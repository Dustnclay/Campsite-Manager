import React, {useState, useEffect} from 'react'
import {Form, Button} from 'reactstrap'
import * as yup from 'yup'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import MapContainer from './GoogleMap'

function Survey() {

    let history = useHistory()

    // const validate = (event) => {
    //     yup.reach(formSchema,event.target.name)
    //     .validate(event.target.type === 'checkbox' ? event.target.checked: event.target.value)
    //     .then(valid => {
    //         setErrors({
    //             ...errors, 
    //             [event.target.name]:''
    //         })
    //     })
    //     .catch( error => {
    //         console.log('error', error.errors)
    //         setErrors({...errors,
    //             [event.target.name]:error.errors[0]
    //         })
    //     })
    // }

    // useEffect(()=>{
    //     formSchema.isValid(answers).then(valid=>{
    //         setButtonDisabled(!valid);
    //     })
    // })

    // const [buttonDisabled,setButtonDisabled] = useState(false)

    const [errors,setErrors] =useState({
        location:'',
        collector:'',
        survey:'',
        groundDisturbance:'',
        disturbedArea:'',
        treesDamaged:'',
        nearWater:'',
        nearTrail:'',        
        erosion:'',
        fireRings:'',
        improvements:'',        
        contained:'',
        residential:'',
        trash:'',
        humanWaste:'',
        socialTrail:'',
        socialRoad:'',
        siteDescription:'',
        date:''
    })

    const [answers,setAnswers] =useState({
        location:'',
        collector:'',
        survey:'NewSurvey',
        groundDisturbance:'',
        disturbedArea:'',
        treesDamaged:'',
        nearWater:'',
        nearTrail:'',        
        erosion:'',
        fireRings:'',
        improvements:'',        
        contained:'',
        residential:'',
        trash:'',
        humanWaste:'',
        socialTrail:'',
        socialRoad:'',
        siteDescription:'',
        needTrashPickup:false,
        needSignageFix:false,
        needContainmentRepair:false,
        needFireRingRemoval:false,
        doneTrashPickup:false,
        doneSignageFix:false,
        doneContainmentRepair:false,
        doneFireRingRemoval:false,
        date:'',
        hours:'',
        notes:'',
        image:'',
        latlng:0
    })

    const formSchema = yup.object().shape({
        location:yup.string().required("location required"),
        // collector:yup.string().required("name required"),
        // groundDisturbance:yup.mixed().oneOf(["Recovered","Flat","Worn","Bare"], 'disturbance question required'),
        // disturbedArea:yup.mixed().oneOf(["1-5","5-10","10-25","25-50","+50"], "disturbed area question required"),
        // treesDamaged:yup.mixed().oneOf(["0","1-2","3-5","5-10","10+"],'input required'),
        // nearWater:yup.mixed().oneOf(["Yes","No"],"You must choose to proceed"),
        // nearTrail:yup.mixed().oneOf(["Yes","No"],"You must choose to proceed"),        
        // erosion:yup.mixed().oneOf(["Yes","No"],"You must choose to proceed"),
        // fireRings:yup.mixed().oneOf(["0","1","2","3","+4"]),
        // improvements:yup.mixed().oneOf(["Yes","No"],"You must choose to proceed"),        
        // contained:yup.mixed().oneOf(["No","Natural","Engineered"],"You must choose to proceed"),
        // residential:yup.mixed().oneOf(["Yes","No"],"You must choose to proceed"),
        // trash:yup.mixed().oneOf(["No","<1G","1-3G","1-2TB",">2TB","TruckLoad"],"You must choose to proceed"),
        // humanWaste:yup.mixed().oneOf(["No","1","2-5","5+"],'input required'),
        // socialTrail:yup.mixed().oneOf(["0-10","10-25","25-100","100+"],'input required'),
        // socialRoad:yup.mixed().oneOf(["0-10","10-25","25-100","100+"],'input required'),
        // date:yup.date().required('date required')
    })

    const submitButton = (event)=>{
        console.log("clicked submit", event)
        event.preventDefault()
        axios.post( process.env.DB_URL || "https://campsite-manager.herokuapp.com/form",answers)
        .then( response => console.log(response),history.push("/"))
        .catch( err => console.log(err))
    }

    const eventHandler = (event) => {
        event.persist()
        setAnswers({
            ...answers, 
            [event.target.name]:event.target.type === "checkbox"? event.target.checked: event.target.value
        })
    }

    return(
        <Form onSubmit={submitButton} >
            <div class='survey'>
            <div class='innerSurvey'>
            <h3>General Info</h3><br/>

            <div class="flex"> 
                <div class="form-group grouped p-3">     
                    <label>Location Name</label><br/>
                    <input class='ml-2' type='text' name='location' value={answers.location} onChange={eventHandler}></input><br/>
                </div>
                
                <div class="form-group grouped p-3">
                    <label>Collector Name</label><br/>
                    <input type='text' class='ml-2' name='collector' value={answers.collector} onChange={eventHandler}></input><br/>
                </div>   
            </div>

            <h3>Impact Rating</h3><br/>
            <div class="form-group p-3">

                <label>Ground Disturbance Rating</label><br/>
                <select name="groundDisturbance" onChange={eventHandler} class="select ml-2" >
                    <option value="choose">---select---</option>
                    <option value="Recovered">Site has Recovered</option>
                    <option value="Flat">vegetation is flattened but not permanently damaged</option>
                    <option value="Worn">vegetation is worn away around fire place or center of activity</option>
                    <option value="Bare">bare soil is exposed on most of site</option>
                </select><br/>
            </div>

            <div class="form-group p-3">
                <label>Disturbed Area Rating in square footage</label><br/>
                <select  name="disturbedArea" onChange={eventHandler} class="select ml-2" >
                    <option value="choose">---select---</option>
                    <option value="1-5">1-5 sqft</option>
                    <option value="5-10">5-10 sqft</option>
                    <option value="10-25">10-25 sqft</option>
                    <option value="25-50">25-50 sqft</option>
                    <option value="+50">more than 50 sqft</option>
                </select><br/>
            </div>

            <div class="form-group p-3">
                <label >Trees Damaged; count only trees that: Were live trees larger than 4 inches that have 
                    been cut down, have scarring over more than a square foot on the tree and /or
                    have more that 3 sqft of roots exposed and/or have more than 5 branches broken.
                    Also count any Krumholtz trees of any size with visible damage to live trees/ limbs.</label>
                <select  name="treesDamaged" class="select ml-2"  onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="0">0</option>
                    <option value="1-2">1-2</option>
                    <option value="3-5">3-5</option>
                    <option value="5-10">5-10</option>
                    <option value="+10">+10</option>
                </select><br/>
            </div>

            <h3>Resource Impacts</h3><br/>
            <div class="form-group p-3">

                <label>Is the site located within 100 feet of water?</label><br/>
                <select name="nearWater" class="select ml-2" onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select><br/>
            </div>

            <div class="form-group p-3">
                <label>Is the site located within 100 feet of a trail?</label><br/>
                <select  name="nearTrail" class="select ml-2" onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select><br/>  
            </div>

            <div class="form-group p-3">
                <label>Erosion: Has dirt been washed from the trails in any way? Are there gullies rills or has dirt washed from site?</label><br/>
                <select  name="erosion" class="select ml-2" onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select><br/>
            </div>

            <h3>Structures</h3><br/>
            <div class="form-group p-3">

                <label>How many fire rings are there?</label><br/>
                <select  name="fireRings" class="select ml-2" onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="+4">+4</option>
                </select><br/>
            </div>

            <div class="form-group p-3">
                <label>Improvements</label><br/>
                <select  name="improvements" class="select ml-2" onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select><br/>
            </div>

            <div class="form-group p-3">
                <label>Is the site contained in any way?</label><br/>
                <select  name="contained" class="select ml-2" onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="No">No</option>
                    <option value="Engineered">Engineered fencing/boulders</option>
                    <option value="Natural">Naturally contained by rocks/trees etc.</option>
                </select><br/>
            </div>

            <div class="form-group p-3">
                <label>Is there possible residential use?</label><br/>
                <select  name="residential" class="select ml-2" onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select><br/>
            </div>

            <h3>Impacts</h3><br/>
            <div class="form-group p-3">

                <label  >Is trash present?(if yes, how much?)</label><br/>
                <select  name="trash" class="select ml-2" onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="No">No</option>
                    <option value="<1G"> less than 1 Gallon</option>
                    <option value="1-3G">1 to 3 Gallons</option>
                    <option value="1-2TB">1-2 Large Trash Bags</option>
                    <option value=">2TB">more than 2 Trash Bags</option>
                    <option value="TruckLoad">truck load</option>
                </select><br/>
            </div>

            <div class="form-group p-3">
                <label>Is human waste or TP present within 100 yards?(if yes how much?)</label><br/>
                <select  name="humanWaste" class="select ml-2" onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="No">No</option>
                    <option value="1">1</option>
                    <option value="2-5">2-5</option>
                    <option value="5+">5+</option>
                </select><br/>
            </div>

            <div class="form-group p-3">
                <label>Are non-system social trails, less than 3 foot wide, present?(if yes, feet in length)</label><br/>
                <select  name="socialTrail" class="select ml-2" onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="0-10">0-10</option>
                    <option value="10-25">10-25</option>
                    <option value="25-100">25-100</option>
                    <option value="100+">100+</option>
                </select><br/>
            </div>

            <div class="form-group p-3">
                <label>Are non system social roads/ ATV/Motorcycle, more than 3 foot wide, present? (if yes, feet in length)</label><br/>
                <select  name="socialRoad" class="select ml-2"  onChange={eventHandler}>
                    <option value="choose">---select---</option>
                    <option value="0-10">0-10</option>
                    <option value="10-25">10-25</option>
                    <option value="25-100">25-100</option>
                    <option value="100+">100+</option>
                </select><br/>
            </div>


            <h3>Campsite Adopter Data</h3><br/>

            <div class="form-group p-3 d-flex flex-column">
                <label>Site Description</label><br/>
               
                <textarea name='siteDescription' class=' m-1 textBox' rows= '3' value={answers.siteDescription} onChange={eventHandler}></textarea><br/>

            </div>

            <div class='flex'>
                <div class="form-group grouped">
                    <h4>Are there issues requiring action?</h4><br/>
                        <label class='pl-2 pr-2'>Trash pickup</label>
                        <input type='checkbox' name="needTrashPickup" onChange={eventHandler}></input><br/>
                        <label class='pl-2 pr-2'>Signage fix</label>
                        <input type='checkbox' name="needSignageFix"onChange={eventHandler}></input><br/>
                        <label class='pl-2 pr-2'>Containment repair</label>
                        <input type='checkbox' name="needContainment repair"onChange={eventHandler}></input><br/>
                        <label class='pl-2 pr-2'>Fire ring removal</label>
                        <input type='checkbox' name="needFireRingRemoval"onChange={eventHandler}></input><br/><br/>
                </div>

                    
                    <div class="form-group grouped">
                        <h4>Actions taken</h4><br/>    
                            <label class='pl-2 pr-2'>Trash pickup</label>
                            <input type='checkbox' name="doneTrashPickup"  onChange={eventHandler}></input><br/>
                            <label class='pl-2 pr-2'>Signage fix</label>
                            <input type='checkbox' name="doneSignageFix"onChange={eventHandler}></input><br/>
                            <label class='pl-2 pr-2' >Containment repair</label>
                            <input type='checkbox' name="doneContainmentRepair"onChange={eventHandler}></input><br/>
                            <label class='pl-2 pr-2'>Fire ring removal</label>
                            <input type='checkbox' name="doneFireRingRemoval"onChange={eventHandler}></input><br/>
                    </div>
            </div>

            <div class='flex'>
                <div class="form-group grouped">
                    <label>Todays Date</label><br/>
                    <input name='date' class='m-2' type='date' onChange={eventHandler}></input><br/>

                    <label style={{'paddingTop':'4%'}}>Hours spent</label><br/>
                    <input name='hours' class='m-2' type='number' placeholder='Hours spent'onChange={eventHandler}></input><br/>
            </div>
                <div class="form-group grouped">
                    <label >Notes</label><br/>
                    <textarea name='notes' class='m-2' placeholder='notes' rows='4' onChange={eventHandler}></textarea><br/>
                </div>
            </div >
            <h4 className='centerText'>Drag the pin to the campsite location</h4>
            <MapContainer setAnswers={setAnswers} answers={answers}/> 
            <div id='mapInsert'>
               
            </div>
            

            <div class='centerText'>
                <button onClick={console.log('clicked')}disabled={false} className='button'color='primary'><span class='btnText'>Submit</span></button>
            </div> 
            </div>
            </div>
        </Form> 
    )
}

export default Survey
