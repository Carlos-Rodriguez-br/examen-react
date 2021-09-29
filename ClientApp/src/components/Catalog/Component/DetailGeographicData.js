import React from 'react';
import { Col, Row, Card, CardTitle, CardText, CardBody } from 'reactstrap';
import Utilities from './../../../utillities/Utilities';
import Map from './../../Shared/Map';
import {zone} from './../../../constants/index';
import PropTypes from 'prop-types';

const DetailGeographicData = ({ item }) => {
    return (
        <Row>
            <Col sm="12">
                {item && item.latitude && item.longitude &&
                    <Map heightMap={50} zoom={16} center={[item.latitude, item.longitude]} listMarkets={[{ coordinates: [item.latitude, item.longitude] }]} />
                }
            </Col>
            <Col sm="12">
                <Card>
                    {/* <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" /> */}
                    {item &&
                        <CardBody>
                            <CardTitle tag="h5">Zona {zone[item.zone]}</CardTitle>
                            <CardText><strong>Coordenadas:</strong> {item.latitude},{item.longitude} </CardText>
                            <CardText><strong>Venta:</strong> {Utilities.formatterCurrency.format(item.valueSale)}</CardText>
                            {/* <Button>Go somewhere</Button> */}
                        </CardBody>
                    }
                </Card>
            </Col>
        </Row>
    );
}

DetailGeographicData.propTypes = {
    item: PropTypes.object
}

export default DetailGeographicData;