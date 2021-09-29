import { combineReducers } from 'redux';
import { geographicData } from './geographicData';
import { temperature } from './temperature';

export default combineReducers({
    geographicData,
    temperature,
});