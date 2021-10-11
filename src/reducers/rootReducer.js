

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
        {name: 'Engineered',
          uv: 0,
        },
        {name: 'Natural',
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
        {name: 'Recovered',
          uv: 0,
        },
        {name: 'Flat',
          uv: 0,
        },
        {name: 'Worn',
        uv: 0,
        },
        {name: 'Bare',
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
        {name: '<1G',
        uv: 0,
        },
        {name: '1-3G',
         uv: 0,
        },
        {name: '1-2TB',
        uv: 0,
        },
        {name: '>2TB',
          uv: 0,
        },
        {name: 'TruckLoad',
        uv: 0,
        }],

    disturbedArea:[
        {name: '1-5',
          uv: 0,
        },
        {name: '5-10',
        uv: 0,
        },
        {name: '10-25',
          uv: 0,
        },
        {name: '25-50',
          uv: 0,
        },
        {name: '+50',
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
    gMapArr:[],
    currentSite:0
}

let tallyTemplate = {
  contained:[
    {name: 'No', 
      uv: 0,
    },
    {name: 'Engineered',
      uv: 0,
    },
    {name: 'Natural',
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
    {name: 'Recovered',
      uv: 0,
    },
    {name: 'Flat',
      uv: 0,
    },
    {name: 'Worn',
    uv: 0,
    },
    {name: 'Bare',
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
    {name: '<1G',
    uv: 0,
    },
    {name: '1-3G',
      uv: 0,
    },
    {name: '1-2TB',
    uv: 0,
    },
    {name: '>2TB',
      uv: 0,
    },
    {name: 'TruckLoad',
    uv: 0,
    }],
disturbedArea:[
    {name: '1-5',
      uv: 0,
    },
    {name: '5-10',
    uv: 0,
    },
    {name: '10-25',
      uv: 0,
    },
    {name: '25-50',
      uv: 0,
    },
    {name: '+50',
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
      {name: 'Engineered',
        uv: 0,
      },
      {name: 'Natural',
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
      {name: 'Recovered',
        uv: 0,
      },
      {name: 'Flat',
        uv: 0,
      },
      {name: 'Worn',
      uv: 0,
      },
      {name: 'Bare',
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
      {name: '<1G',
      uv: 0,
      },
      {name: '1-3G',
        uv: 0,
      },
      {name: '1-2TB',
      uv: 0,
      },
      {name: '>2TB',
        uv: 0,
      },
      {name: 'TruckLoad',
      uv: 0,
      }],
  
  disturbedArea:[
      {name: '1-5',
        uv: 0,
      },
      {name: '5-10',
      uv: 0,
      },
      {name: '10-25',
        uv: 0,
      },
      {name: '25-50',
        uv: 0,
      },
      {name: '+50',
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
  responseForms.map(
    res => {
      if (res.contained === "No"){
        tempstate.contained[0].uv +=1
        tallyTemplate = { ...tallyTemplate , contained: tempstate.contained}
      }else if (res.contained === "Engineered"){
        tempstate.contained[1].uv +=1
        tallyTemplate = { ...tallyTemplate , contained: tempstate.contained}
      }else if (res.contained === "Natural"){
        tempstate.contained[2].uv +=1
        tallyTemplate = { ...tallyTemplate , contained: tempstate.contained}
      }  
      if (res.ground_disturbance === "Recovered"){
        tempstate.groundDisturbance[0].uv +=1
        tallyTemplate = { ...tallyTemplate , groundDisturbance: tempstate.groundDisturbance}
      }else if (res.ground_disturbance === "Flat"){
        tempstate.groundDisturbance[1].uv +=1
        tallyTemplate = { ...tallyTemplate , groundDisturbance: tempstate.groundDisturbance}
      }else if (res.ground_disturbance === "Worn"){
        tempstate.groundDisturbance[2].uv +=1
        tallyTemplate = { ...tallyTemplate , groundDisturbance: tempstate.groundDisturbance}
      }else if (res.ground_disturbance === "Bare"){
        tempstate.groundDisturbance[3].uv +=1
        tallyTemplate = { ...tallyTemplate , groundDisturbance: tempstate.groundDisturbance}
      }    
      if (res.disturbed_area === "1-5"){
        tempstate.disturbedArea[0].uv +=1
        tallyTemplate = { ...tallyTemplate , disturbedArea: tempstate.disturbedArea}
      }else if (res.disturbed_area === "5-10"){
        tempstate.disturbedArea[1].uv +=1
        tallyTemplate = { ...tallyTemplate , disturbedArea: tempstate.disturbedArea}
      }else if (res.disturbed_area === "10-25"){
        tempstate.disturbedArea[2].uv +=1
        tallyTemplate = { ...tallyTemplate , disturbedArea: tempstate.disturbedArea}
      }else if (res.disturbed_area === "25-50"){
        tempstate.disturbedArea[3].uv +=1
        tallyTemplate = { ...tallyTemplate , disturbedArea: tempstate.disturbedArea}  
      }else if (res.disturbed_area === "+50"){
        tempstate.disturbedArea[4].uv +=1
        tallyTemplate = { ...tallyTemplate , disturbedArea: tempstate.disturbedArea}
      }
      if (res.fire_rings === "0"){
        tempstate.fireRings[0].uv +=1
        tallyTemplate = { ...tallyTemplate , fireRings: tempstate.fireRings}
      }else if (res.fire_rings === "1"){
        tempstate.fireRings[1].uv +=1
        tallyTemplate = { ...tallyTemplate , fireRings: tempstate.fireRings}
      }else if (res.fire_rings === "2"){
        tempstate.fireRings[2].uv +=1
        tallyTemplate = { ...tallyTemplate , fireRings: tempstate.fireRings}
      }else if (res.fire_rings === "3"){
        tempstate.fireRings[3].uv +=1
        tallyTemplate = { ...tallyTemplate , fireRings: tempstate.fireRings}  
      }else if (res.fire_rings === "4+"){
        tempstate.fireRings[4].uv +=1
        tallyTemplate = { ...tallyTemplate , fireRings: tempstate.fireRings}
      }
      if (res.trash === "No"){
        tempstate.trash[0].uv +=1
        tallyTemplate = { ...tallyTemplate , trash: tempstate.trash}
      }else if (res.trash === "<1G"){
        tempstate.trash[1].uv +=1
        tallyTemplate = { ...tallyTemplate , trash: tempstate.trash}
      }else if (res.trash === "1-3G"){
        tempstate.trash[2].uv +=1
        tallyTemplate = { ...tallyTemplate , trash: tempstate.trash}
      }else if (res.trash === "1-2TB"){
        tempstate.trash[3].uv +=1
        tallyTemplate = { ...tallyTemplate , trash: tempstate.trash}  
      }else if (res.trash === ">2TB"){
        tempstate.trash[4].uv +=1
        tallyTemplate = { ...tallyTemplate , trash: tempstate.trash}
      }else if (res.trash === "TruckLoad"){
        tempstate.trash[5].uv +=1
        tallyTemplate = { ...tallyTemplate , trash: tempstate.trash}
      }
      if (res.human_waste === "No"){
        tempstate.humanWaste[0].uv +=1
        tallyTemplate = { ...tallyTemplate , humanWaste: tempstate.humanWaste}
      }else if (res.human_waste === "1"){
        tempstate.humanWaste[1].uv +=1
        tallyTemplate = { ...tallyTemplate , humanWaste: tempstate.humanWaste}
      }else if (res.human_waste === "2-5"){
        tempstate.humanWaste[2].uv +=1
        tallyTemplate = { ...tallyTemplate , humanWaste: tempstate.humanWaste}
      }else if (res.human_waste === "5+"){
        tempstate.humanWaste[3].uv +=1
        tallyTemplate = { ...tallyTemplate , humanWaste: tempstate.humanWaste}
      } 
      if (res.treesDamaged === "0"){
        tempstate.trees_damaged[0].uv +=1
        tallyTemplate = { ...tallyTemplate , treesDamaged: tempstate.treesDamaged}
      }else if (res.trees_damaged === "1-2"){
        tempstate.treesDamaged[1].uv +=1
        tallyTemplate = { ...tallyTemplate , treesDamaged: tempstate.treesDamaged}
      }else if (res.trees_damaged === "3-5"){
        tempstate.treesDamaged[2].uv +=1
        tallyTemplate = { ...tallyTemplate , treesDamaged: tempstate.treesDamaged}
      }else if (res.trees_damaged === "5-10"){
        tempstate.treesDamaged[3].uv +=1
        tallyTemplate = { ...tallyTemplate , treesDamaged: tempstate.treesDamaged}  
      }else if (res.trees_damaged === "+10"){
        tempstate.treesDamaged[4].uv +=1
        tallyTemplate = { ...tallyTemplate , treesDamaged: tempstate.treesDamaged}
      }
      if (res.social_trail === "0-10"){
        tempstate.socialTrail[0].uv +=1
        tallyTemplate = { ...tallyTemplate , socialTrail: tempstate.socialTrail}
      }else if (res.social_trail === "10-25"){
        tempstate.socialTrail[1].uv +=1
        tallyTemplate = { ...tallyTemplate , socialTrail: tempstate.socialTrail}
      }else if (res.social_trail === "25-100"){
        tempstate.socialTrail[2].uv +=1
        tallyTemplate = { ...tallyTemplate , socialTrail: tempstate.socialTrail}
      }else if (res.social_trail === "100+"){
        tempstate.socialTrail[3].uv +=1
        tallyTemplate = { ...tallyTemplate , socialTrail: tempstate.socialTrail}
      } 
      if (res.social_road === "0-10"){
        tempstate.socialRoad[0].uv +=1
        tallyTemplate = { ...tallyTemplate , socialRoad: tempstate.socialRoad}
      }else if (res.social_road === "10-25"){
        tempstate.socialRoad[1].uv +=1
        tallyTemplate = { ...tallyTemplate , socialRoad: tempstate.socialRoad}
      }else if (res.social_road === "25-100"){
        tempstate.socialRoad[2].uv +=1
        tallyTemplate = { ...tallyTemplate , socialRoad: tempstate.socialRoad}
      }else if (res.social_road === "100+"){
        tempstate.socialRoad[3].uv +=1
        tallyTemplate = { ...tallyTemplate , socialRoad: tempstate.socialRoad}
      } 
      if (res.residential === "Yes"){
        tempstate.residential[0].uv +=1
        tallyTemplate = { ...tallyTemplate , residential: tempstate.residential}
      }else if (res.residential === "No"){
        tempstate.residential[1].uv +=1
        tallyTemplate = { ...tallyTemplate , residential: tempstate.residential}
      } 
      if (res.near_trail === "Yes"){
        tempstate.nearTrail[0].uv +=1
        tallyTemplate = { ...tallyTemplate , nearTrail: tempstate.nearTrail}
      }else if (res.near_trail === "No"){
        tempstate.nearTrail[1].uv +=1
        tallyTemplate = { ...tallyTemplate , nearTrail: tempstate.nearTrail}
      } 
      if (res.near_water === "Yes"){
        tempstate.nearWater[0].uv +=1
        tallyTemplate = { ...tallyTemplate , nearWater: tempstate.nearWater}
      }else if (res.near_water === "No"){
        tempstate.nearWater[1].uv +=1
        tallyTemplate = { ...tallyTemplate , nearWater: tempstate.nearWater}
      } 
      if (res.improvements === "Yes"){
        tempstate.improvements[0].uv +=1
        tallyTemplate = { ...tallyTemplate , improvements: tempstate.improvements}
      }else if (res.improvements === "No"){
        tempstate.improvements[1].uv +=1
        tallyTemplate = { ...tallyTemplate , improvements: tempstate.improvements}
      } 
      if (res.erosion === "Yes"){
        tempstate.erosion[0].uv +=1
        tallyTemplate = { ...tallyTemplate , erosion: tempstate.erosion}
      }else if (res.erosion === "No"){
        tempstate.erosion[1].uv +=1
        tallyTemplate = { ...tallyTemplate , erosion: tempstate.erosion}
      } 
      if (res.need_containment_repair === 'true'){
        tempstate.needContainmentRepair[0].uv +=1
        tallyTemplate = { ...tallyTemplate , needContainmentRepair: tempstate.needContainmentRepair}
      }else if (res.need_containment_repair === "false"){
        tempstate.needContainmentRepair[1].uv +=1
        tallyTemplate = { ...tallyTemplate , needContainmentRepair: tempstate.needContainmentRepair}
      } 
      if (res.done_containment_repair === 'true'){
        tempstate.doneContainmentRepair[0].uv +=1
        tallyTemplate = { ...tallyTemplate , doneContainmentRepair: tempstate.doneContainmentRepair}
      }else if (res.done_containment_repair === "false"){
        tempstate.doneContainmentRepair[1].uv +=1
        tallyTemplate = { ...tallyTemplate , doneContainmentRepair: tempstate.doneContainmentRepair}
      } 
      if (res.need_fire_ring_removal === 'true'){
        tempstate.needFireRingRemoval[0].uv +=1
        tallyTemplate = { ...tallyTemplate , needFireRingRemoval: tempstate.needFireRingRemoval}
      }else if (res.need_fire_ring_removal === "false"){
        tempstate.needFireRingRemoval[1].uv +=1
        tallyTemplate = { ...tallyTemplate , needFireRingRemoval: tempstate.needFireRingRemoval}
      } 
      if (res.done_fire_ring_removal === 'true'){
        tempstate.doneFireRingRemoval[0].uv +=1
        tallyTemplate = { ...tallyTemplate , doneFireRingRemoval: tempstate.doneFireRingRemoval}
      }else if (res.done_fire_ring_removal === "false"){
        tempstate.doneFireRingRemoval[1].uv +=1
        tallyTemplate = { ...tallyTemplate , doneFireRingRemoval: tempstate.doneFireRingRemoval}
      } 
      if (res.need_signage_fix === 'true'){
        tempstate.needSignageFix[0].uv +=1
        tallyTemplate = { ...tallyTemplate , needSignageFix: tempstate.needSignageFix}
      }else if (res.need_signage_fix === "false"){
        tempstate.needSignageFix[1].uv +=1
        tallyTemplate = { ...tallyTemplate , needSignageFix: tempstate.needSignageFix}
      } 
      if (res.done_signage_fix === 'true'){
        tempstate.doneSignageFix[0].uv +=1
        tallyTemplate = { ...tallyTemplate , doneSignageFix: tempstate.doneSignageFix}
      }else if (res.done_signage_fix === "false"){
        tempstate.doneSignageFix[1].uv +=1
        tallyTemplate = { ...tallyTemplate , doneSignageFix: tempstate.doneSignageFix}
      } 
      if (res.need_trash_pickup === 'true'){
        tempstate.needTrashPickup[0].uv +=1
        tallyTemplate = { ...tallyTemplate , needTrashPickup: tempstate.needTrashPickup}
      }else if (res.need_trash_pickup === "false"){
        tempstate.needTrashPickup[1].uv +=1
        tallyTemplate = { ...tallyTemplate , needTrashPickup: tempstate.needTrashPickup}
      } 
      if (res.done_trash_pickup === 'true'){
        tempstate.doneTrashPickup[0].uv +=1
        tallyTemplate = { ...tallyTemplate , doneTrashPickup: tempstate.doneTrashPickup}
      }else if (res.done_trash_pickup === "false"){
        tempstate.doneTrashPickup[1].uv +=1
        tallyTemplate = { ...tallyTemplate , doneTrashPickup: tempstate.doneTrashPickup}
      } 
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
            const tempArr = [...new Set(locationArr)]
            const gMapArr = []
            savedData.map(item => {
              if(tempArr.includes(item.location)){
                gMapArr.push(item)

                var i = tempArr.indexOf(item.location)
                delete tempArr[i]
              } 
            })

            return{
                ...state,
                err:'',
                isFetching:false,
                siteArr:siteArr,
                gMapArr:gMapArr
            };   

        case FETCH_SITE_FAIL:
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
          const gMap = state.gMapArr
          state = initialState
          return{
              state,
              gMapArr:gMap,
              siteArr: action.payload,
              err:'',
              isFetching:false
          };

        case FETCH_FORMS_SUCCESS:
            const responseForms = action.payload.data
            

            const afterPopTote = populateTotal (responseForms)


            return{
                ...state,
                contained:afterPopTote.contained,
                groundDisturbance:afterPopTote.groundDisturbance,
                disturbedArea:afterPopTote.disturbedArea,
                treesDamaged:afterPopTote.treesDamaged,
                nearWater:afterPopTote.nearWater,
                nearTrail:afterPopTote.nearTrail,        
                erosion:afterPopTote.erosion,
                fireRings:afterPopTote.fireRings,
                improvements:afterPopTote.improvements,        
                residential:afterPopTote.residential,
                trash:afterPopTote.trash,
                humanWaste:afterPopTote.humanWaste,
                socialTrail:afterPopTote.socialTrail,
                socialRoad:afterPopTote.socialRoad,
                needTrashPickup:afterPopTote.needTrashPickup,
                needSignageFix:afterPopTote.needSignageFix,
                needContainmentRepair:afterPopTote.needContainmentRepair,
                needFireRingRemoval:afterPopTote.needFireRingRemoval,
                doneTrashPickup:afterPopTote.doneTrashPickup,
                doneSignageFix:afterPopTote.doneSignageFix,
                doneContainmentRepair:afterPopTote.doneContainmentRepair,
                doneFireRingRemoval:afterPopTote.doneFireRingRemoval,
                err:'',
                isFetching:false
            };        
        
        case FETCH_FORMS_FAIL:

            return{
                ...state,
                err:'',
                isFetching:false
            };   
        default:

    }
    
    return state
}
