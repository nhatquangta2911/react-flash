import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartCongigs = {
   type: 'Pie3D',
   width: '100%',
   height: '100%',
   dataFormat: 'json',
   dataSource: {
      chart: {
         caption: "Remembered-Card Ratio",
         subCaption: "Have you tried hard enough?",
         showValues: 1,
         showPercentInTooltip: 0,
         numberPrefix: "",  
         enableMultiSlicing: 1,
         theme: "fusion"
      },
      data: [
         { label: "Remembered", value: 23 },
         { label: "Not remembered yet", value: 52 }
      ]
   }
};



export default class PieChart extends Component {
   render() {
      return (
         <div>
            <ReactFC {...chartCongigs} />
         </div>
      )
   }
}
