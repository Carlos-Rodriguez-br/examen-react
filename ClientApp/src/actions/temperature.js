import { createAction } from 'redux-actions'
import { GET_TEMPERATURE } from '../constants/index';
import { Temperature } from './../services/Temperature';

export const getTemperature = createAction(GET_TEMPERATURE, async () => {
    return await Temperature.getTemperature();
});