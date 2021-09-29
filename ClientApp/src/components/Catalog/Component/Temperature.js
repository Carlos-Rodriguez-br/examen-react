import React from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardBody,
    CardTitle,Row,Col
  } from 'reactstrap';

const Temperature = ({temperature}) => {
    return (
        <Row>
            <Col sm="12" className="text-right form-group">
                <strong>Temperatura en la Ciudad de México: {temperature}</strong>
            </Col>
        </Row>
    );
}
Temperature.propTypes = {
    temperature: PropTypes.string
}

export default Temperature;