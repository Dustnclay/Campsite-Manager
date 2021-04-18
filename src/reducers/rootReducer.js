
import React from 'react';

import {
  FETCH_SITE_NUM,
  FETCH_SITE_SUCCESS,
  FETCH_SITE_FAIL,
  SET_CURRENT_SITE,
  FETCH_FORMS,
  FETCH_FORMS_SUCCESS,
  FETCH_FORMS_FAIL,
  CLEAR_SITE_DATA
} from '../actions'; 

const initialState = {
    contained:[
        {name: 'No', 
          uv: 0,
        },
        {name: 'EngineeredFencing/boulders',
          uv: 0,
        },
        {name: 'NaturallyContained',
        uv: 0,
      }],
    residential:[
        {name: 'Yes',
          uv: 0,
        },
        {name: 'No',
          uv: 0,
        }],
    erosion:[
        {name: 'Yes',
          uv: 0,
        },
        {name: 'No',
          uv: 0,
        }],
    groundDisturbance:[
        {name: 'SiteHasRecovered',
          uv: 0,
        },
        {name: 'FlattenedNotPermanent',
          uv: 0,
        },
        {name: 'WornAway',
        uv: 0,
        },
        {name: 'BareSoil',
        uv: 0,
        },],

    humanWaste:[
        {name: 'No',
          uv: 0,
        },
        {name: '1',
          uv: 0,
        },
        {name: '2-5',
        uv: 0,
        },
        {name: '5+',
        uv: 0,
        },],
    improvements:[
        {name: 'Yes',
          uv: 0,
        },
        {name: 'No',
          uv: 0,
        }],
    nearWater:[
        {name: 'Yes',
          uv: 0,
        },
        {name: 'No',
          uv: 0,
        }],
    nearTrail:[
        {name: 'Yes',
          uv: 0,
        },
        {name: 'No',
          uv: 0,
        }],
    trash:[
        {name: 'No',
          uv: 0,
        },
        {name: '<1Gal',
        uv: 0,
        },
        {name: '1-3Gal',
         uv: 0,
        },
        {name: '1-2LTBs',
        uv: 0,
        },
        {name: '>2LTBs',
          uv: 0,
        },
        {name: 'TruckLoad',
        uv: 0,
        }],

    disturbedArea:[
        {name: '1-5sqft',
          uv: 0,
        },
        {name: '5-10sqft',
        uv: 0,
        },
        {name: '10-25sqft',
          uv: 0,
        },
        {name: '1-2LTBs',
        uv: 0,
        },
        {name: '25-50 sqft',
          uv: 0,
        },
        {name: 'MoreThan50sqft',
        uv: 0,
        }],      

    fireRings:[
        {name: '0',
          uv: 0,
        },
        {name: '1',
        uv: 0,
        },
        {name: '2',
          uv: 0,
        },
        {name: '3',
        uv: 0,
        },
        {name: '+4',
          uv: 0,
        }], 
    socialTrail:[
        {name: '0-10',
          uv: 0,
        },
        {name: '10-25',
        uv: 0,
        },
        {name: '25-100',
          uv: 0,
        },
        {name: '100+',
        uv: 0,
        }], 

    socialRoad:[
        {name: '0-10',
          uv: 0,
        },
        {name: '10-25',
        uv: 0,
        },
        {name: '25-100',
          uv: 0,
        },
        {name: '100+',
        uv: 0,
        }], 

    treesDamaged:[
        {name: '0',
          uv: 0,
        },
        {name: '1-2',
        uv: 0,
        },
        {name: '3-5',
          uv: 0,
        },
        {name: '5-10',
        uv: 0,
        },
        {name: '+10',
          uv: 0,
        }],  

    doneContainmentRepair:[
        {name: 'true',
          uv: 0,
        },
        {name: 'false',
          uv: 0,
        }],
    doneFireRingRemoval:[
        {name: 'true',
          uv: 0,
        },
        {name: 'false',
          uv: 0,
        }],
    doneSignageFix:[
        {name: 'true',
          uv: 0,
        },
        {name: 'false',
          uv: 0,
        }],
    doneTrashPickup:[
        {name: 'true',
          uv: 0,
        },
        {name: 'false',
          uv: 0,
        }],
    needContainmentRepair:[
        {name: 'true',
          uv: 0,
        },
        {name: 'false',
          uv: 0,
        }],
    needFireRingRemoval:[
        {name: 'true',
          uv: 0,
        },
        {name: 'false',
          uv: 0,
        }],
    needSignageFix:[
        {name: 'true',
          uv: 0,
        },
        {name: 'false',
          uv: 0,
        }],
    needTrashPickup:[
        {name: 'true',
          uv: 0,
        },
        {name: 'false',
          uv: 0,
        }],
    err:'',
    isFetching:false,
    siteArr :[],
    currentSite:0
}

let tallyTemplate = {
  contained:[
    {name: 'No', 
      uv: 0,
    },
    {name: 'EngineeredFencing/boulders',
      uv: 0,
    },
    {name: 'NaturallyContained',
    uv: 0,
  }],
residential:[
    {name: 'Yes',
      uv: 0,
    },
    {name: 'No',
      uv: 0,
    }],
erosion:[
    {name: 'Yes',
      uv: 0,
    },
    {name: 'No',
      uv: 0,
    }],
groundDisturbance:[
    {name: 'SiteHasRecovered',
      uv: 0,
    },
    {name: 'FlattenedNotPermanent',
      uv: 0,
    },
    {name: 'WornAway',
    uv: 0,
    },
    {name: 'BareSoil',
    uv: 0,
    },],

humanWaste:[
    {name: 'No',
      uv: 0,
    },
    {name: '1',
      uv: 0,
    },
    {name: '2-5',
    uv: 0,
    },
    {name: '5+',
    uv: 0,
    },],
improvements:[
    {name: 'Yes',
      uv: 0,
    },
    {name: 'No',
      uv: 0,
    }],
nearWater:[
    {name: 'Yes',
      uv: 0,
    },
    {name: 'No',
      uv: 0,
    }],
nearTrail:[
    {name: 'Yes',
      uv: 0,
    },
    {name: 'No',
      uv: 0,
    }],
trash:[
    {name: 'No',
      uv: 0,
    },
    {name: '<1Gal',
    uv: 0,
    },
    {name: '1-3Gal',
      uv: 0,
    },
    {name: '1-2LTBs',
    uv: 0,
    },
    {name: '>2LTBs',
      uv: 0,
    },
    {name: 'TruckLoad',
    uv: 0,
    }],

disturbedArea:[
    {name: '1-5sqft',
      uv: 0,
    },
    {name: '5-10sqft',
    uv: 0,
    },
    {name: '10-25sqft',
      uv: 0,
    },
    {name: '1-2LTBs',
    uv: 0,
    },
    {name: '25-50 sqft',
      uv: 0,
    },
    {name: 'MoreThan50sqft',
    uv: 0,
    }],      

fireRings:[
    {name: '0',
      uv: 0,
    },
    {name: '1',
    uv: 0,
    },
    {name: '2',
      uv: 0,
    },
    {name: '3',
    uv: 0,
    },
    {name: '+4',
      uv: 0,
    }], 
socialTrail:[
    {name: '0-10',
      uv: 0,
    },
    {name: '10-25',
    uv: 0,
    },
    {name: '25-100',
      uv: 0,
    },
    {name: '100+',
    uv: 0,
    }], 

socialRoad:[
    {name: '0-10',
      uv: 0,
    },
    {name: '10-25',
    uv: 0,
    },
    {name: '25-100',
      uv: 0,
    },
    {name: '100+',
    uv: 0,
    }], 

treesDamaged:[
    {name: '0',
      uv: 0,
    },
    {name: '1-2',
    uv: 0,
    },
    {name: '3-5',
      uv: 0,
    },
    {name: '5-10',
    uv: 0,
    },
    {name: '+10',
      uv: 0,
    }],  

doneContainmentRepair:[
    {name: 'true',
      uv: 0,
    },
    {name: 'false',
      uv: 0,
    }],
doneFireRingRemoval:[
    {name: 'true',
      uv: 0,
    },
    {name: 'false',
      uv: 0,
    }],
doneSignageFix:[
    {name: 'true',
      uv: 0,
    },
    {name: 'false',
      uv: 0,
    }],
doneTrashPickup:[
    {name: 'true',
      uv: 0,
    },
    {name: 'false',
      uv: 0,
    }],
needContainmentRepair:[
    {name: 'true',
      uv: 0,
    },
    {name: 'false',
      uv: 0,
    }],
needFireRingRemoval:[
    {name: 'true',
      uv: 0,
    },
    {name: 'false',
      uv: 0,
    }],
needSignageFix:[
    {name: 'true',
      uv: 0,
    },
    {name: 'false',
      uv: 0,
    }],
needTrashPickup:[
    {name: 'true',
      uv: 0,
    },
    {name: 'false',
      uv: 0,
    }]
  }  

function populateTotal (responseForms){
  const tempstate = {
    contained:[
      {name: 'No', 
        uv: 0,
      },
      {name: 'EngineeredFencing/boulders',
        uv: 0,
      },
      {name: 'NaturallyContained',
      uv: 0,
    }],
  residential:[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
  erosion:[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
  groundDisturbance:[
      {name: 'SiteHasRecovered',
        uv: 0,
      },
      {name: 'FlattenedNotPermanent',
        uv: 0,
      },
      {name: 'WornAway',
      uv: 0,
      },
      {name: 'BareSoil',
      uv: 0,
      },],
  
  humanWaste:[
      {name: 'No',
        uv: 0,
      },
      {name: '1',
        uv: 0,
      },
      {name: '2-5',
      uv: 0,
      },
      {name: '5+',
      uv: 0,
      },],
  improvements:[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
  nearWater:[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
  nearTrail:[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
  trash:[
      {name: 'No',
        uv: 0,
      },
      {name: '<1Gal',
      uv: 0,
      },
      {name: '1-3Gal',
        uv: 0,
      },
      {name: '1-2LTBs',
      uv: 0,
      },
      {name: '>2LTBs',
        uv: 0,
      },
      {name: 'TruckLoad',
      uv: 0,
      }],
  
  disturbedArea:[
      {name: '1-5sqft',
        uv: 0,
      },
      {name: '5-10sqft',
      uv: 0,
      },
      {name: '10-25sqft',
        uv: 0,
      },
      {name: '1-2LTBs',
      uv: 0,
      },
      {name: '25-50 sqft',
        uv: 0,
      },
      {name: 'MoreThan50sqft',
      uv: 0,
      }],      
  
  fireRings:[
      {name: '0',
        uv: 0,
      },
      {name: '1',
      uv: 0,
      },
      {name: '2',
        uv: 0,
      },
      {name: '3',
      uv: 0,
      },
      {name: '+4',
        uv: 0,
      }], 
  socialTrail:[
      {name: '0-10',
        uv: 0,
      },
      {name: '10-25',
      uv: 0,
      },
      {name: '25-100',
        uv: 0,
      },
      {name: '100+',
      uv: 0,
      }], 
  
  socialRoad:[
      {name: '0-10',
        uv: 0,
      },
      {name: '10-25',
      uv: 0,
      },
      {name: '25-100',
        uv: 0,
      },
      {name: '100+',
      uv: 0,
      }], 
  
  treesDamaged:[
      {name: '0',
        uv: 0,
      },
      {name: '1-2',
      uv: 0,
      },
      {name: '3-5',
        uv: 0,
      },
      {name: '5-10',
      uv: 0,
      },
      {name: '+10',
        uv: 0,
      }],  
  
  doneContainmentRepair:[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
  doneFireRingRemoval:[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
  doneSignageFix:[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
  doneTrashPickup:[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
  needContainmentRepair:[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
  needFireRingRemoval:[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
  needSignageFix:[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
  needTrashPickup:[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }]
    }  
  console.log("tempstate",tempstate)
  responseForms.map(
    res => {
      if (res.contained === "No"){
        tempstate.contained[0].uv +=1
        tallyTemplate = { ...tallyTemplate , contained: tempstate.contained}
      }else if (res.contained === "EngineeredFencing/boulders"){
        tempstate.contained[1].uv +=1
        tallyTemplate = { ...tallyTemplate , contained: tempstate.contained}
      }else if (res.contained === "NaturallyContained"){
        tempstate.contained[2].uv +=1
        tallyTemplate = { ...tallyTemplate , contained: tempstate.contained}}  
  })
  return tallyTemplate
}

export const rootReducer = (state = initialState, action) => {
    
    switch(action.type){
        case FETCH_SITE_NUM:
            return{
                ...state,
                err:'',
                isFetching:true
            };         

        case FETCH_SITE_SUCCESS:
            const savedData = action.payload.data
            const locationArr = []
            savedData.map(item => locationArr.push(item.location))
            const siteArr = [...new Set(locationArr)]
            return{
                ...state,
                err:'',
                isFetching:false,
                siteArr:siteArr
            };   

        case FETCH_SITE_FAIL:
          console.log("FETCH_FORMS_fail")
          console.log(action.payload)
            return{
                ...state,
                err:'fetchSite fail',
                isFetching:false
            };   

        case SET_CURRENT_SITE:
          return{
              ...state,
              err:'',
              isFetching:false,
              currentSite:action.payload
          }; 

        case FETCH_FORMS:
            return{
                ...state,
                
                err:'',
                isFetching:true
            };

        case CLEAR_SITE_DATA:
          state = initialState
          return{
              state,
              
              siteArr: action.payload,
              err:'',
              isFetching:false
          };

        case FETCH_FORMS_SUCCESS:
            console.log("FETCH_FORMS_Success")
            console.log("action payload success",action.payload.data)
            const responseForms = action.payload.data
            

            const afterPopTote = populateTotal (responseForms)
            console.log("afterPopTote",afterPopTote)
            console.log("initialState",initialState)
            console.log("tallyTemplate",tallyTemplate)

            return{
                ...state,
                contained:afterPopTote.contained,
                // groundDisturbance:afterPopTote.groundDisturbance,
                // disturbedArea:afterPopTote.disturbedArea,
                // treesDamaged:afterPopTote.treesDamaged,
                // nearWater:afterPopTote.nearWater,
                // nearTrail:afterPopTote.nearTrail,        
                // erosion:afterPopTote.erosion,
                // fireRings:afterPopTote.fireRings,
                // improvements:afterPopTote.improvements,        
                // residential:afterPopTote.residential,
                // trash:afterPopTote.trash,
                // humanWaste:afterPopTote.humanWaste,
                // socialTrail:afterPopTote.socialTrail,
                // socialRoad:afterPopTote.socialRoad,
                // needTrashPickup:afterPopTote.needTrashPickup,
                // needSignageFix:afterPopTote.needSignageFix,
                // needContainmentRepair:afterPopTote.needContainmentRepair,
                // needFireRingRemoval:afterPopTote.needFireRingRemoval,
                // doneTrashPickup:afterPopTote.doneTrashPickup,
                // doneSignageFix:afterPopTote.doneSignageFix,
                // doneContainmentRepair:afterPopTote.doneContainmentRepair,
                // doneFireRingRemoval:afterPopTote.doneFireRingRemoval,
                err:'',
                isFetching:false
            };        
        
        case FETCH_FORMS_FAIL:
            console.log("FETCH_FORMS_fail")
            console.log(action.payload)

            return{
                ...state,
                err:'',
                isFetching:false
            };              

    }
    
    return state
}