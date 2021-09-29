import {URL_API_BACK} from './../constants/index';

const urlController=`${URL_API_BACK}GeographicalData`;

const getAllGraphicData=()=>{
    return fetch(`${urlController}`).then(response=>response.json());
}

const getSumGraphicDataByZone=()=>{
    return fetch(`${urlController}/getSumZones`).then(response=>response.json());
}

const createGraphicData=(data)=>{
    return fetch(`${urlController}`,{
        method:'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(response=>response.json());
}

export const GeograficData={
    getAllGraphicData:getAllGraphicData,
    getSumGraphicDataByZone:getSumGraphicDataByZone,
    createGraphicData:createGraphicData,
}