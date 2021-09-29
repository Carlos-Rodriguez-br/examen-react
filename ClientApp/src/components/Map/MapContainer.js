import React, { Component } from 'react';
import { getAllGraphicData } from './../../actions/geographicData';
import { connect } from 'react-redux';
import Map from './../Shared/Map';

class MapContainer extends Component {
    constructor() {
        super();
    }

    async componentDidMount() {
        await this.props.getAllGraphicData();
    }

    render() {
        const { resumeAllGraphicData } = this.props;
        return (
            <div>
                <Map heightMap={65} center={resumeAllGraphicData ? (resumeAllGraphicData.length > 0 ? [0,0] : [19.4352,-99.1412]) : [19.4352,-99.1412]} zoom={resumeAllGraphicData ? (resumeAllGraphicData.length > 1 ? 2 : 16) : 16} listMarkets={resumeAllGraphicData ? resumeAllGraphicData : []} />
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    getAllGraphicData: () => dispatch(getAllGraphicData()),
});

const mapStateToProps = (state, props) => ({
    resumeAllGraphicData: state.geographicData.resumeAllGraphicData,
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);