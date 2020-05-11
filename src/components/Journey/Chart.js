import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline"; 
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets"
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import diplomaIcon from "../../images/journey/Diploma.png";
import degreeIcon from "../../images/journey/Degree.png";
import jobIcon from "../../images/journey/Job.png";
import promotionIcon from "../../images/journey/Promotion.png";
import securityIcon from "../../images/journey/Security.png"
import universityIcon from "../../images/journey/University.png";
import graduateIcon from "../../images/journey/Graduated.png";
import startIcon from "../../images/journey/Blackboard.png";
am4core.useTheme(am4themes_animated);
am4core.options.autoSetClassName = true;
class Chart extends Component {
     state = { }
     createChart = () => {
               //Creating a chart 
          let chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
               chart.curveContainer.padding(100, 20, 50, 20);
               chart.levelCount = 3;
               chart.yAxisRadius = am4core.percent(15);
               chart.yAxisInnerRadius = am4core.percent(-25);
               chart.maskBullets = false;
               //chart.zoomFactor =1;
               // Creating a colorset
          let colorSet = new am4core.ColorSet();
               colorSet.saturation = 1;
               chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
               chart.dateFormatter.dateFormat = "yyyy";
               chart.data = [{
                    "category": "Part Time",
                    "start": "2019-10-10",
                    "end": "2020-10-10",
                    "text": `I am working as part time Security Officer 
                              at Bidvest Noonan! 
                              Looking for a new job after my masters`,
                    "color": colorSet.getIndex(15),
                    "icon": securityIcon
               },
               {
                    "category": "Study",
                    "start": "2019-10-10",
                    "end": "2019-10-10",
                    "text": ``,
                    "color": colorSet.getIndex(13),
                    "icon": graduateIcon
               },
               {
                    "category": "Study",
                    "start": "2018-09-09",
                    "end": "2019-10-10",
                    "text": `Always a believer of knowledge can never be enough. 
                             Decided on M.Sc in Advanced Software Development.
                             Graduated on OCtober 2019`,
                    "color": colorSet.getIndex(11),
                    "icon": universityIcon
               },
               {
                    "category": "Work",
                    "start": "2016-08-01",
                    "end": "2018-08-30",
                    "text": `Responsibility increased on leadership 
                              60% Management and 40% Coding
                             Team Lead at Jivox`,
                    "color": colorSet.getIndex(9),
                    "icon": promotionIcon
               },
               {
                    "category": "Work",
                    "start": "2014-07-21",
                    "end": "2016-07-30",
                    "text": ` First change! 
                              Wanted to explore more on javascript 
                              Widget Engineer at Jivox Software`,
                    "color": colorSet.getIndex(7),
                    "icon": jobIcon
               },
               {
                    "category": "Work",
                    "start": "2012-08-01",
                    "end": "2014-07-11",
                    "text": `Starting my Career! 
                              Trained on multiple technologies
                              but decided front end would be ideal for me
                              Associate Developer in Exilant Technologies`,
                    "color": colorSet.getIndex(5),
                    "icon": degreeIcon
               },
               {
                    "category": "Study",
                    "start": "2009-08-01",
                    "end": "2012-07-01",
                    "text": `Onto  Next level!
                             Bachelors in 
                             Computer Science`,
                    "color": colorSet.getIndex(3),
                    "icon": diplomaIcon
               },
               {
                    "category": "Study",
                    "start": "2005-07-11",
                    "end": "2009-01-01",
                    "color": colorSet.getIndex(1),
                    "text": `My journey began 
                             with diploma in  
                             Computer Science`,
                    "textDisabled": true,
                    "icon": startIcon
               }];
               chart.fontSize = 12;
               chart.tooltipContainer.fontSize = 12;
               chart.maskBullets = false;

          let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
               categoryAxis.dataFields.category = "category";
               categoryAxis.renderer.grid.template.disabled = true;
               categoryAxis.renderer.labels.template.paddingRight = 25;
               categoryAxis.renderer.minGridDistance = 10;

          let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
               dateAxis.renderer.minGridDistance = 5;
               dateAxis.baseInterval = { count: 0.5, timeUnit: "year" };
               dateAxis.renderer.tooltipLocation = 5;
               dateAxis.renderer.line.strokeDasharray = "1,10";
               dateAxis.renderer.line.strokeOpacity = 0.5;
               dateAxis.tooltip.background.fillOpacity = 0.2;
               dateAxis.tooltip.disabled = true;
               dateAxis.tooltip.background.cornerRadius = 5;
               dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
               dateAxis.tooltip.label.paddingTop = 7;
               dateAxis.endLocation = 0.2;
               dateAxis.startLocation = 0;
          let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
               series.columns.template.height = am4core.percent(20);
               series.dataFields.openDateX = "start";
               series.dataFields.dateX = "end";
               series.columns.template.tooltipText ="[bold]{text}";
               series.tooltip.pointerOrientation = "vertical";
               series.dataFields.categoryY = "category";
               series.baseAxis = categoryAxis;
               series.columns.template.propertyFields.fill = "color"; // get color from data
               series.columns.template.propertyFields.stroke = "color";
               series.columns.template.strokeOpacity = 0;
               series.columns.template.fillOpacity = 0.6;
               
          let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
               imageBullet1.locationX = 1;
               imageBullet1.propertyFields.stroke = "color";
               imageBullet1.background.propertyFields.fill = "color";
               imageBullet1.image = new am4core.Image();
               imageBullet1.image.propertyFields.href = "icon";
               imageBullet1.image.scale = 0.5;
               imageBullet1.circle.radius = am4core.percent(100);
               imageBullet1.dy = -5;


          let textBullet = series.bullets.push(new am4charts.LabelBullet());
               textBullet.label.propertyFields.text = "text";
               textBullet.disabled = true;
               textBullet.propertyFields.disabled = "textDisabled";
               textBullet.label.strokeOpacity = 0;
               textBullet.locationX = 1;
               textBullet.dy = - 100;
               textBullet.label.textAlign = "middle";

          let cursor = new am4plugins_timeline.CurveCursor();
               chart.cursor = cursor;
               cursor.xAxis = dateAxis;
               cursor.yAxis = categoryAxis;
               cursor.lineY.disabled = false;
               cursor.lineX.strokeDasharray = "1,4";
               cursor.lineX.strokeOpacity = 1;
               dateAxis.renderer.tooltipLocation2 = 0;
               categoryAxis.cursorTooltipEnabled = true;
               chart.seriesContainer.draggable = false;
               chart.zoomOutButton.disabled = false;
               chart.seriesContainer.events.disableType("dragged");
               chart.chartContainer.background.events.disableType("dragged");
          //this.chart = chart;
          
     }
     componentDidMount() {
          this.createChart();
     }
     componentWillUnmount() {
          if (this.chart) {
            this.chart.dispose();
          }
     }
     render() { 
          return ( <div id="chartdiv" style={{ width: "100vw", height: "90vh" }}></div>     );
     }
}
 
export default Chart;