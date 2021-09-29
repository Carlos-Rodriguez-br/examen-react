import React from "react";
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import PropTypes from "prop-types";

const GraphPie = ({title,values}) => {

    const chartOptions = {
        title: {
            text: title
        },
        series: [{
            data: values
        }],
        chart: {
            type: 'pie'
        }
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    )
}

GraphPie.propTypes={
    title:PropTypes.string,
    values:PropTypes.array
}

export default GraphPie;