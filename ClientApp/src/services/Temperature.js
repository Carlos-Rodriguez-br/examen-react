import {URL_API_BACK} from './../constants/index';

const urlController=`${URL_API_BACK}Temperature`;

const getTemperature=()=>{
    return fetch(`${urlController}`).then(response=>response.json());
}

export const Temperature={
    getTemperature:getTemperature
}