
import Axios from 'axios';


export const getModel = ( deviceModel:any, id:any ) => {
  Axios.get(`https://7rheg02jaa.execute-api.ap-southeast-2.amazonaws.com/dev` + deviceModel )
  .then((response) => { 
    localStorage.setItem(`myVar${deviceModel}${id}` , response.data.name ); 
  }).catch((error)=>{
      global.console.log(error);
  });
    const devicemodelname = localStorage.getItem(`myVar${deviceModel}${id}`) ;
    return devicemodelname; 
}



export const putData = ( id:any, name:any, note:any ) => {
  Axios.put(`https://7rheg02jaa.execute-api.ap-southeast-2.amazonaws.com/dev/devices/${id}`, {
    name,
    note
  })
  .then(response => {
     window.location.replace("/");
  })
  .catch(error => {
    global.console.log(error);
  });
}


