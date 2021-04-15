
import React from 'react';

import {
FETCH_SITE_NUM,
FETCH_SITE_SUCCESS,
FETCH_SITE_FAIL,
FETCH_FORMS,
FETCH_FORMS_SUCCESS,
FETCH_FORMS_FAIL
} from '../actions'; 

const initialState = {
    contained:[
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
      humanWaste:[
        {name: 'Yes',
          uv: 0,
        },
        {name: 'No',
          uv: 0,
        }],
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
        {name: 'Yes',
          uv: 0,
        },
        {name: 'No',
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
        isFetching:false
}

export const rootReducer = ( state = initialState, action) => {
    
    switch(action.type){
        case FETCH_SITE_NUM:
            console.log("fetchsiteno")
            console.log(action.payload)
            return{
                ...state,
                err:'',
                isFetching:true
            };
        case FETCH_SITE_SUCCESS:
            console.log("fetchsitesuccess")
            console.log(action.payload)

            return{
                ...state,
                err:'',
                isFetching:false
            };   
        case FETCH_SITE_FAIL:
            console.log("fetchsitefail")
            console.log(action.payload)

            return{
                ...state,
                err:'',
                isFetching:false
            };   
        case FETCH_FORMS:
            console.log("FETCH_FORMS")
            console.log(action.payload)

            return{
                ...state,
                err:'',
                isFetching:true
            };
        case FETCH_FORMS_SUCCESS:
            console.log("FETCH_FORMS_Success")
            console.log(action.payload)

            return{
                ...state,
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