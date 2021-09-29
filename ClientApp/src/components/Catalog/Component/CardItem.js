import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Utilities from './../../../utillities/Utilities';
import PropTypes from 'prop-types';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { zone } from './../../../constants/index';


export const CardItem = ({ item, handleOpenDetail }) => {
    return (
        <Col sm="12">
            <Card body>
                <CardTitle tag="h5">{item.description}</CardTitle>
                <CardText>
                    <b>Zona: {zone[item.zone]}</b>
                </CardText>
                <CardText>
                    <b>Coordenadas: </b>{item.latitude}, {item.longitude}
                </CardText>
                <Row >
                    <Col sm="6">
                        <CardText>
                            <b>Venta: </b>{Utilities.formatterCurrency.format(item.valueSale)}
                        </CardText>
                    </Col>
                    <Col sm="6" className="text-right">
                        <Button onClick={() => handleOpenDetail(item)} size="sm"><VisibilityIcon /> Ver detalle</Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
}

CardItem.propTypes = {
    // description:PropTypes.string,
    // latitude:PropTypes.string,
    // longitude:PropTypes.string,
    // valueSale:PropTypes.number,
    item: PropTypes.object,
    handleOpenDetail: PropTypes.func
}
