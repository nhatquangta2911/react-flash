import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

let chartCongigs = {
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
      data: []
   }
};
export default class PieChart extends Component {

   constructor(props) {
      super(props);
      this.state = {
         totalCards: '',
         totalNotRememberedCards: '',
         chartCongigs: ''
      }
   }

   componentWillMount() {
      this.setState({
         totalCards: this.props.totalCards,
         totalNotRememberedCards: this.props.totalNotRememberedCards
      })
   }

   componentDidMount() {
      this.setState({
         chartCongigs: {
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
                  {label: 'Remembered', value: this.state.totalCards - this.state.totalNotRememberedCards},
                  {label: 'Not remembered yet', value: this.state.totalNotRememberedCards}
               ]
            }
         }
      })
   }

   render() {
      const { totalCards, totalNotRememberedCards, chartCongigs } = this.state;
      return (
         <div>
            <ReactFC
               {
                  ...chartCongigs
               } 
            />
         </div>
      )
   }
}
