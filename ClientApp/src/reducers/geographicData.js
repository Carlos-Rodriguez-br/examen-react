import { GET_ALL_GRAPHIC_DATA, GET_SUM_GRAPHIC_DATA_BY_ZONE, VIEW_DETAIL_GRAPHIC_DATA } from '../constants/index';
import { zone } from './../constants/index';
import Utilities from './../utillities/Utilities';

import React from 'react';

export const geographicData = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_GRAPHIC_DATA: {
            let resumeAllGraphicData=[];
            if (!action.error) {
                resumeAllGraphicData = action.payload.map(item => {
                    return {
                        coordinates: [item.latitude, item.longitude],
                        accion: (
                            <div>
                                <p>
                                    ID: {item.id}<br />
                                    Descripción: {item.description}<br />
                                    Zona: {zone[item.zone]}<br />
                                    Venta: {Utilities.formatterCurrency.format(item.valueSale)}
                                </p>
                            </div>
                        )
                    }
                });
            }

            return { ...state, listGeographicData: action.payload, resumeAllGraphicData: resumeAllGraphicData }
        }
        case VIEW_DETAIL_GRAPHIC_DATA: {
            return { ...state, detailGeographicData: action.payload }
        }
        case GET_SUM_GRAPHIC_DATA_BY_ZONE: {
            let resumeSumZone = action.payload.map(item => { return ([zone[item.zone], item.total]) });
            return { ...state, resumeSumZone: resumeSumZone };
        }
        default:
            return state;
    }
}