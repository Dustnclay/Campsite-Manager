import React, {useState, useEffect} from 'react'
import {Form, Button} from 'reactstrap'
import * as yup from 'yup'
import axios from 'axios'

function Survey() {

    const validate = (event) => {
        yup.reach(formSchema,event.target.name)
        .validate(event.target.type === 'checkbox' ? event.target.checked: event.target.value)
        .then(valid => {
            setErrors({
                ...errors, 
                [event.target.name]:''
            })
        })
        .catch( error => {
            console.log('error', error.errors)
            setErrors({...errors,
            [event.target.name]:error.errors[0]
        })
        })
    }

    useEffect(()=>{
        formSchema.isValid(answers).then(valid=>{
            setButtonDisabled(!valid);
        })
    })

    const [buttonDisabled,setButtonDisabled] = useState(false)

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
        image:''
    })

    const formSchema = yup.object().shape({
        location:yup.string().required("location required"),
        collector:yup.string().required("name required"),
        // survey:yup.mixed().oneOf(["re-survey","newSurvey"], 'survey question required'),
        // groundDisturbance:yup.mixed().oneOf(["site has recovered","vegetation is flattened but not permanently damaged","vegetation is worn away around fire place or center of activity","bare soil is exposed on most of site",], 'disturbance question required'),
        // disturbedArea:yup.mixed().oneOf(["1-5 sqft","5-10 sqft","10-25 sqft","25-50 sqft","more than 50 sqft"], "disturbed area question required"),
        // treesDamaged:yup.number().required('trees damaged question required'),
        // nearWater:yup.mixed().oneOf(["yes","no"],"You must choose to proceed"),
        // nearTrail:yup.mixed().oneOf(["yes","no"],"You must choose to proceed"),        
        // erosion:yup.mixed().oneOf(["yes","no"],"You must choose to proceed"),
        // fireRings:yup.number().required('fire rings question required'),
        // improvements:yup.mixed().oneOf(["yes","no"],"You must choose to proceed"),        
        // contained:yup.mixed().oneOf(["no","naturally contained by rocks/trees etc.","naturally contained by rocks/trees etc."],"You must choose to proceed"),
        // residential:yup.mixed().oneOf(["yes","no"],"You must choose to proceed"),
        // trash:yup.mixed().oneOf(["no","<1 Gal","1 to 5 Gals","1-2 Large Trash Bags","> 2 Trash Bags","truck load"],"You must choose to proceed"),
        // humanWaste:yup.mixed().oneOf(["no","1","2-5","more than 5"],'input required'),
        // socialTrail:yup.number().required('input required'),
        // socialRoad:yup.number().required('input required'),
        // date:yup.date().required('date required')
    })

    const submitButton = (event)=>{
        axios.post( process.env.DB_URL || "https://campsite-manager.herokuapp.com/form",answers)
        .then( response => console.log(response))
        .catch( err => console.log(err))

    }

    const eventHandler = (event) => {
        event.persist()
        setAnswers({
            ...answers, 
            [event.target.name]:event.target.type === "checkbox"? event.target.checked: event.target.value
        })
    }
console.log('answers:', answers)
    return(
        <Form onSubmit={submitButton} style={{padding:'1%'}}>
            <h3>General Info</h3><br/>
            <label>Location Name</label><br/>
            <input type='text' name='location' value={answers.location} onChange={eventHandler}></input><br/>

            <label>Collector Name</label><br/>
            <input type='text' name='collector' value={answers.collector} onChange={eventHandler}></input><br/>

            <h3>Impact Rating</h3><br/>
            <label>Ground Disturbance Rating</label><br/>
            <select name="groundDisturbance" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="Recovered">Site has Recovered</option>
                <option value="Flat">vegetation is flattened but not permanently damaged</option>
                <option value="Worn">vegetation is worn away around fire place or center of activity</option>
                <option value="Bare">bare soil is exposed on most of site</option>
            </select><br/>

            <label>Disturbed Area Rating in square footage</label><br/>
            <select  name="disturbedArea" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="1-5">1-5 sqft</option>
                <option value="5-10">5-10 sqft</option>
                <option value="10-25">10-25 sqft</option>
                <option value="25-50">25-50 sqft</option>
                <option value="+50">more than 50 sqft</option>
            </select><br/>

            <label>Trees Damaged; count only trees that: Were live trees larger than 4 inches that have been cut down, have scarring over more than a square foot ot the tree and /or
                 have more that 3 sqft of roots exposed and/or have more than 5 branches broken. Also count any Krumholtz trees of any size with visible damage to live trees/ limbs.</label><br/>
            <select  name="treesDamaged" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="0">0</option>
                <option value="1-2">1-2</option>
                <option value="3-5">3-5</option>
                <option value="5-10">5-10</option>
                <option value="+10">+10</option>
            </select><br/>

            <h3>Resource Impacts</h3><br/>
            <label>Is the site located within 100 feet of water?</label><br/>
            <select name="nearWater" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select><br/>

            <label>Is the site located within 100 feet of a trail?</label><br/>
            <select  name="nearTrail" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select><br/>  

            <label>Erosion: Has dirt been washed from the trails in any way? are there gullies rills or has dirt washed from site?</label><br/>
            <select  name="erosion" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select><br/>

            <h3>Structures</h3><br/>
            <label>How many fire rings there?</label><br/>
            <select  name="fireRings" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="+4">+4</option>
            </select><br/>


            <label>Improvements</label><br/>
            <select  name="improvements" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select><br/>

            <label>Is the site contained in any way?</label><br/>
            <select  name="contained" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="No">No</option>
                <option value="Engineered">engineered fencing/boulders</option>
                <option value="Natural">naturally contained by rocks/trees etc.</option>
            </select><br/>

            <label>Is there possible residential use?</label><br/>
            <select  name="residential" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select><br/>

            <h3>Impacts</h3><br/>
            <label>Is trash present?(if yes, how much?)</label><br/>
            <select  name="trash" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="No">No</option>
                <option value="<1G"> less than 1 Gallon</option>
                <option value="1-3G">1 to 3 Gallons</option>
                <option value="1-2TB">1-2 Large Trash Bags</option>
                <option value=">2TB">more than 2 Trash Bags</option>
                <option value="TruckLoad">truck load</option>
            </select><br/>

            <label>Is human waste or TP present within 100 yards?(if yes how much?)</label><br/>
            <select  name="humanWaste" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="No">No</option>
                <option value="1">1</option>
                <option value="2-5">2-5</option>
                <option value="5+">5+</option>
            </select><br/>

            <label>Are non-system social trails, less than 3 foot wide, present?(if yes, feet in length)</label><br/>
            <select  name="socialTrail" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="0-10">0-10</option>
                <option value="10-25">10-25</option>
                <option value="25-100">25-100</option>
                <option value="100+">100+</option>
            </select><br/>

            <label>Are non system social roads/ ATV/Motorcycle, more than 3 foot wide, present? (if yes, feet in length)</label><br/>
            <select  name="socialRoad" onChange={eventHandler}>
                <option value="choose">---select---</option>
                <option value="0-10">0-10</option>
                <option value="10-25">10-25</option>
                <option value="25-100">25-100</option>
                <option value="100+">100+</option>
            </select><br/>

            <h3>Campsite Adopter Data</h3><br/>

            <label>Site Description</label><br/>
            <input type='text' name='siteDescription' value={answers.siteDescription} onChange={eventHandler}></input><br/>

            <h4>Are there issues requiring action?</h4><br/>
                <label>Trash pickup</label>
                <input type='checkbox' name="needTrashPickup" onChange={eventHandler}></input><br/>
                <label>Signage fix</label>
                <input type='checkbox' name="needSignageFix"onChange={eventHandler}></input><br/>
                <label>Containment repair</label>
                <input type='checkbox' name="needContainment repair"onChange={eventHandler}></input><br/>
                <label>Fire ring removal</label>
                <input type='checkbox' name="needFireRingRemoval"onChange={eventHandler}></input><br/><br/>

            <h4>Actions taken</h4><br/>
            <label>Trash pickup</label>
                <input type='checkbox' name="doneTrashPickup" onChange={eventHandler}></input><br/>
                <label>Signage fix</label>
                <input type='checkbox' name="doneSignageFix"onChange={eventHandler}></input><br/>
                <label>Containment repair</label>
                <input type='checkbox' name="doneContainmentRepair"onChange={eventHandler}></input><br/>
                <label>Fire ring removal</label>
                <input type='checkbox' name="doneFireRingRemoval"onChange={eventHandler}></input><br/>

            <label>Todays Date</label><br/>
            <input name='date' type='date' onChange={eventHandler}></input><br/>

            <label>Hours spent</label><br/>
            <input name='hours' type='number' placeholder='Hours spent'onChange={eventHandler}></input><br/>

            <label>Notes</label><br/>
            <input name='notes' placeholder='notes' onChange={eventHandler}></input><br/>

            <Button disabled={buttonDisabled} color='warning'>Submit</Button>

        </Form> 
    )
}

export default Survey
