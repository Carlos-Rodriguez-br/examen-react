import React from 'react';
import {
    Map, TileLayer,
    LayerGroup, Marker, Popup
} from 'react-leaflet';
import PropTypes from 'prop-types';

const MapNew = ({ heightMap, zoom, center, listMarkets }) => {
    return (
        <Map
            style={{
                height: `${heightMap}vh`,
                flexGrow: "1",
                cursor: `10`
            }}
            editable={true}
            zoom={zoom}
            maxZoom={45}
            center={center}
        // whenCreated={setMap}
        >
            <LayerGroup>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <TileLayer url="http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png" />
                {listMarkets &&
                    listMarkets.map(market => (
                        <Marker position={market.coordinates}>
                            {market.accion &&
                                <Popup>{market.accion}</Popup>
                            }

                        </Marker>
                    ))
                }
            </LayerGroup>
        </Map>
        // <div>
        //     Hola
        // </div>
    )
}

MapNew.propTypes = {
    zoom: PropTypes.number,
    center: PropTypes.array,
    heightMap: PropTypes.number,
    listMarkets: PropTypes.array,
}

export default MapNew;