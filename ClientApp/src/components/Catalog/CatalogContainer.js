import React, { Component } from 'react';
import { MultiCardItem } from './Component/MultiCardItem';
import ModalGeneric from './../Shared/ModalGeneric';
import { getAllGraphicData, createGraphicData, viewDatailGraphicData } from './../../actions/geographicData';
import { getTemperature } from './../../actions/temperature';
import DetailGeographicData from './Component/DetailGeographicData';
import AddGeographicData from './Component/AddGeographicData';
import Temperature from './Component/Temperature';
import { connect } from 'react-redux';


class CatalogContainer extends Component {

    constructor() {
        super();
        this.state = {
            openModalDetail: false,
            openModalAdd: false,
        }
    }

    componentDidMount = async () => {
        const { getAllGraphicData, getTemperature } = this.props;
        await getAllGraphicData();
        await getTemperature();
    }

    changeStatusDetail = (item = null) => {
        if (item && item.id) {
            this.props.viewDatailGraphicData(item);
            // var mymap = L.map('mapid').setView([51.505, -0.09], 13);
        }
        this.setState({ openModalDetail: !this.state.openModalDetail });
    }

    changeStatusAdd = () => {
        this.setState({ openModalAdd: !this.state.openModalAdd });
    }

    render() {
        const { openModalDetail, openModalAdd } = this.state;
        const { listGeographicData, detailGeographicData, temperature } = this.props;
        return (
            <div>
                <Temperature temperature={temperature} />
                <MultiCardItem listItems={listGeographicData} handleOpenDetail={this.changeStatusDetail} handleOpenAdd={this.changeStatusAdd} />
                <ModalGeneric openModal={openModalDetail} title={detailGeographicData && detailGeographicData.description} closeModal={this.changeStatusDetail} >
                    <DetailGeographicData item={detailGeographicData} />
                </ModalGeneric>
                <ModalGeneric openModal={openModalAdd} title={'Agregar datos geograficos'} closeModal={this.changeStatusAdd} >
                    <AddGeographicData />
                </ModalGeneric>
            </div>
        );
    }

}

CatalogContainer.propTypes = {

}

const mapDispatchToProps = (dispatch) => ({
    getAllGraphicData: () => dispatch(getAllGraphicData()),
    createGraphicData: (data) => dispatch(createGraphicData(data)),
    viewDatailGraphicData: (item) => dispatch(viewDatailGraphicData(item)),
    getTemperature: () => dispatch(getTemperature()),
});

const mapStateToProps = (state, props) => ({
    listGeographicData: state.geographicData.listGeographicData,
    detailGeographicData: state.geographicData.detailGeographicData,
    temperature: state.temperature.temperatureActual,
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);