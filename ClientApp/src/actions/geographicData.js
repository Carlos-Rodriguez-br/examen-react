import { createAction } from 'redux-actions'
import { CREATE_GRAPHIC_DATA, GET_ALL_GRAPHIC_DATA, GET_SUM_GRAPHIC_DATA_BY_ZONE, VIEW_DETAIL_GRAPHIC_DATA } from '../constants/index';
import { GeograficData } from './../services/GeographicData';

export const createGraphicData = createAction(CREATE_GRAPHIC_DATA, async (data) => {
    return await GeograficData.createGraphicData(data);
});

export const getAllGraphicData = createAction(GET_ALL_GRAPHIC_DATA, async () => {
    return await GeograficData.getAllGraphicData();
});

export const getSumGraphicDataByZone = createAction(GET_SUM_GRAPHIC_DATA_BY_ZONE, async () => {
    return await GeograficData.getSumGraphicDataByZone();
});

export const viewDatailGraphicData = createAction(VIEW_DETAIL_GRAPHIC_DATA, async (item) => {
    return item;
});