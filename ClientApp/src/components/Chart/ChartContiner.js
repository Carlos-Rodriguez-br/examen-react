import React, { Component } from 'react';
import {getSumGraphicDataByZone} from './../../actions/geographicData';
import GraphPie from './../Shared/GraphPie';
import { connect } from 'react-redux';

class ChartContainer extends Component {
    constructor() {
        super();
    }

    async componentDidMount(){
        await this.props.getSumGraphicDataByZone();
    }

    render() {
        const {resumeSumZone}=this.props;
        return (<div>
            <GraphPie title="Resumen de la suma de ventas por zona" values={resumeSumZone}/>
        </div>)
    }

}

const mapDispatchToProps = (dispatch) => ({
    getSumGraphicDataByZone: () => dispatch(getSumGraphicDataByZone()),
});

const mapStateToProps = (state, props) => ({
    resumeSumZone: state.geographicData.resumeSumZone,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);

