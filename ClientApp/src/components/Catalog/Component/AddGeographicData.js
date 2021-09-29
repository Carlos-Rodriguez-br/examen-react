import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { zone } from './../../../constants/index';
import {PropTypes} from 'prop-types';

const AddGeographicData = () => {
    return (
        <Form>
            <FormGroup>
                <Label for="description">Descripción</Label>
                <Input type="text" name="Descripción" id="description" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Latitud</Label>
                <Input type="number" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="longitud">Longitud</Label>
                <Input type="number" name="longitud" id="longitud" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="venta">Venta</Label>
                <Input type="number" name="venta" id="venta" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="zone">Zona</Label>
                <Input type="select" name="zone" id="zone">
                {[0,1,2,3,4].map(item=>(
                    <option key={zone[item]} value={item}>{zone[item]}</option>
                ))}
                </Input>
            </FormGroup>
        </Form>);
}

AddGeographicData.propTypes={
    description:PropTypes.string,
    
}

export default AddGeographicData;