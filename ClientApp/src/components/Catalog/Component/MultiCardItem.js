import React from 'react';
import PropTypes from 'prop-types';
import Row from 'reactstrap/lib/Row';
import { CardItem } from './CardItem';
import { Button, Col } from 'reactstrap';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export const MultiCardItem = ({ handleOpenDetail, listItems, handleOpenAdd }) => {
    return (
        <Row>
            {/* <Col sm="12" className="form-group text-right">
                <Button color="primary" onClick={handleOpenAdd}><ControlPointIcon /> Agregar</Button>
            </Col> */}
            {
                listItems && listItems.length > 0 &&
                listItems.map((item, index) => (<CardItem key={index} handleOpenDetail={handleOpenDetail} item={item} />))
            }
            {
                listItems && listItems.length === 0 &&
                <p>No existen registros</p>
            }
        </Row>
    )
}

MultiCardItem.propTypes = {
    listItems: PropTypes.array,
    handleOpenDetail: PropTypes.func,
    handleOpenAdd: PropTypes.func,
}

