

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
      if (res.groundDisturbance === "Recovered"){
        tempstate.groundDisturbance[0].uv +=1
        tallyTemplate = { ...tallyTemplate , groundDisturbance: tempstate.groundDisturbance}
      }else if (res.groundDisturbance === "Flat"){
        tempstate.groundDisturbance[1].uv +=1
        tallyTemplate = { ...tallyTemplate , groundDisturbance: tempstate.groundDisturbance}
      }else if (res.groundDisturbance === "Worn"){
        tempstate.groundDisturbance[2].uv +=1
        tallyTemplate = { ...tallyTemplate , groundDisturbance: tempstate.groundDisturbance}
      }else if (res.groundDisturbance === "Bare"){
        tempstate.groundDisturbance[3].uv +=1
        tallyTemplate = { ...tallyTemplate , groundDisturbance: tempstate.groundDisturbance}
      }    
      if (res.disturbedArea === "1-5"){
        tempstate.disturbedArea[0].uv +=1
        tallyTemplate = { ...tallyTemplate , disturbedArea: tempstate.disturbedArea}
      }else if (res.disturbedArea === "5-10"){
        tempstate.disturbedArea[1].uv +=1
        tallyTemplate = { ...tallyTemplate , disturbedArea: tempstate.disturbedArea}
      }else if (res.disturbedArea === "10-25"){
        tempstate.disturbedArea[2].uv +=1
        tallyTemplate = { ...tallyTemplate , disturbedArea: tempstate.disturbedArea}
      }else if (res.disturbedArea === "25-50"){
        tempstate.disturbedArea[3].uv +=1
        tallyTemplate = { ...tallyTemplate , disturbedArea: tempstate.disturbedArea}  
      }else if (res.disturbedArea === "+50"){
        tempstate.disturbedArea[4].uv +=1
        tallyTemplate = { ...tallyTemplate , disturbedArea: tempstate.disturbedArea}
      }
      if (res.fireRings === "0"){
        tempstate.fireRings[0].uv +=1
        tallyTemplate = { ...tallyTemplate , fireRings: tempstate.fireRings}
      }else if (res.fireRings === "1"){
        tempstate.fireRings[1].uv +=1
        tallyTemplate = { ...tallyTemplate , fireRings: tempstate.fireRings}
      }else if (res.fireRings === "2"){
        tempstate.fireRings[2].uv +=1
        tallyTemplate = { ...tallyTemplate , fireRings: tempstate.fireRings}
      }else if (res.fireRings === "3"){
        tempstate.fireRings[3].uv +=1
        tallyTemplate = { ...tallyTemplate , fireRings: tempstate.fireRings}  
      }else if (res.fireRings === "4+"){
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
      if (res.humanWaste === "No"){
        tempstate.humanWaste[0].uv +=1
        tallyTemplate = { ...tallyTemplate , humanWaste: tempstate.humanWaste}
      }else if (res.humanWaste === "1"){
        tempstate.humanWaste[1].uv +=1
        tallyTemplate = { ...tallyTemplate , humanWaste: tempstate.humanWaste}
      }else if (res.humanWaste === "2-5"){
        tempstate.humanWaste[2].uv +=1
        tallyTemplate = { ...tallyTemplate , humanWaste: tempstate.humanWaste}
      }else if (res.humanWaste === "5+"){
        tempstate.humanWaste[3].uv +=1
        tallyTemplate = { ...tallyTemplate , humanWaste: tempstate.humanWaste}
      } 
      if (res.treesDamaged === "0"){
        tempstate.treesDamaged[0].uv +=1
        tallyTemplate = { ...tallyTemplate , treesDamaged: tempstate.treesDamaged}
      }else if (res.treesDamaged === "1-2"){
        tempstate.treesDamaged[1].uv +=1
        tallyTemplate = { ...tallyTemplate , treesDamaged: tempstate.treesDamaged}
      }else if (res.treesDamaged === "3-5"){
        tempstate.treesDamaged[2].uv +=1
        tallyTemplate = { ...tallyTemplate , treesDamaged: tempstate.treesDamaged}
      }else if (res.treesDamaged === "5-10"){
        tempstate.treesDamaged[3].uv +=1
        tallyTemplate = { ...tallyTemplate , treesDamaged: tempstate.treesDamaged}  
      }else if (res.treesDamaged === "+10"){
        tempstate.treesDamaged[4].uv +=1
        tallyTemplate = { ...tallyTemplate , treesDamaged: tempstate.treesDamaged}
      }
      if (res.socialTrail === "0-10"){
        tempstate.socialTrail[0].uv +=1
        tallyTemplate = { ...tallyTemplate , socialTrail: tempstate.socialTrail}
      }else if (res.socialTrail === "10-25"){
        tempstate.socialTrail[1].uv +=1
        tallyTemplate = { ...tallyTemplate , socialTrail: tempstate.socialTrail}
      }else if (res.socialTrail === "25-100"){
        tempstate.socialTrail[2].uv +=1
        tallyTemplate = { ...tallyTemplate , socialTrail: tempstate.socialTrail}
      }else if (res.socialTrail === "100+"){
        tempstate.socialTrail[3].uv +=1
        tallyTemplate = { ...tallyTemplate , socialTrail: tempstate.socialTrail}
      } 
      if (res.socialRoad === "0-10"){
        tempstate.socialRoad[0].uv +=1
        tallyTemplate = { ...tallyTemplate , socialRoad: tempstate.socialRoad}
      }else if (res.socialRoad === "10-25"){
        tempstate.socialRoad[1].uv +=1
        tallyTemplate = { ...tallyTemplate , socialRoad: tempstate.socialRoad}
      }else if (res.socialRoad === "25-100"){
        tempstate.socialRoad[2].uv +=1
        tallyTemplate = { ...tallyTemplate , socialRoad: tempstate.socialRoad}
      }else if (res.socialRoad === "100+"){
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
      if (res.nearTrail === "Yes"){
        tempstate.nearTrail[0].uv +=1
        tallyTemplate = { ...tallyTemplate , nearTrail: tempstate.nearTrail}
      }else if (res.nearTrail === "No"){
        tempstate.nearTrail[1].uv +=1
        tallyTemplate = { ...tallyTemplate , nearTrail: tempstate.nearTrail}
      } 
      if (res.nearWater === "Yes"){
        tempstate.nearWater[0].uv +=1
        tallyTemplate = { ...tallyTemplate , nearWater: tempstate.nearWater}
      }else if (res.nearWater === "No"){
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
      if (res.needContainmentRepair === 'true'){
        tempstate.needContainmentRepair[0].uv +=1
        tallyTemplate = { ...tallyTemplate , needContainmentRepair: tempstate.needContainmentRepair}
      }else if (res.needContainmentRepair === "false"){
        tempstate.needContainmentRepair[1].uv +=1
        tallyTemplate = { ...tallyTemplate , needContainmentRepair: tempstate.needContainmentRepair}
      } 
      if (res.doneContainmentRepair === 'true'){
        tempstate.doneContainmentRepair[0].uv +=1
        tallyTemplate = { ...tallyTemplate , doneContainmentRepair: tempstate.doneContainmentRepair}
      }else if (res.doneContainmentRepair === "false"){
        tempstate.doneContainmentRepair[1].uv +=1
        tallyTemplate = { ...tallyTemplate , doneContainmentRepair: tempstate.doneContainmentRepair}
      } 
      if (res.needFireRingRemoval === 'true'){
        tempstate.needFireRingRemoval[0].uv +=1
        tallyTemplate = { ...tallyTemplate , needFireRingRemoval: tempstate.needFireRingRemoval}
      }else if (res.needFireRingRemoval === "false"){
        tempstate.needFireRingRemoval[1].uv +=1
        tallyTemplate = { ...tallyTemplate , needFireRingRemoval: tempstate.needFireRingRemoval}
      } 
      if (res.doneFireRingRemoval === 'true'){
        tempstate.doneFireRingRemoval[0].uv +=1
        tallyTemplate = { ...tallyTemplate , doneFireRingRemoval: tempstate.doneFireRingRemoval}
      }else if (res.doneFireRingRemoval === "false"){
        tempstate.doneFireRingRemoval[1].uv +=1
        tallyTemplate = { ...tallyTemplate , doneFireRingRemoval: tempstate.doneFireRingRemoval}
      } 
      if (res.needSignageFix === 'true'){
        tempstate.needSignageFix[0].uv +=1
        tallyTemplate = { ...tallyTemplate , needSignageFix: tempstate.needSignageFix}
      }else if (res.needSignageFix === "false"){
        tempstate.needSignageFix[1].uv +=1
        tallyTemplate = { ...tallyTemplate , needSignageFix: tempstate.needSignageFix}
      } 
      if (res.doneSignageFix === 'true'){
        tempstate.doneSignageFix[0].uv +=1
        tallyTemplate = { ...tallyTemplate , doneSignageFix: tempstate.doneSignageFix}
      }else if (res.doneSignageFix === "false"){
        tempstate.doneSignageFix[1].uv +=1
        tallyTemplate = { ...tallyTemplate , doneSignageFix: tempstate.doneSignageFix}
      } 
      if (res.needTrashPickup === 'true'){
        tempstate.needTrashPickup[0].uv +=1
        tallyTemplate = { ...tallyTemplate , needTrashPickup: tempstate.needTrashPickup}
      }else if (res.needTrashPickup === "false"){
        tempstate.needTrashPickup[1].uv +=1
        tallyTemplate = { ...tallyTemplate , needTrashPickup: tempstate.needTrashPickup}
      } 
      if (res.doneTrashPickup === 'true'){
        tempstate.doneTrashPickup[0].uv +=1
        tallyTemplate = { ...tallyTemplate , doneTrashPickup: tempstate.doneTrashPickup}
      }else if (res.doneTrashPickup === "false"){
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