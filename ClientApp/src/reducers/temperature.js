import { GET_TEMPERATURE } from '../constants/index';

export const temperature = (state = {}, action) => {
    switch (action.type) {
        case GET_TEMPERATURE: {
            return {...state,temperatureActual:action.payload.current.temp+action.payload.current.unit}
        }
        default:{
            return state;
        }
    }
}