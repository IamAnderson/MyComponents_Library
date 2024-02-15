"use client";

import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsExporting(Highcharts);
HighchartsMore(Highcharts);

// Define the Highcharts Linear-Gauge series plugin
(function (H) {
    //@ts-expect-error ///
  H.seriesType('lineargauge', 'column', null, {
    setVisible: function () {
        //@ts-expect-error ///
      H.seriesTypes.column.prototype.setVisible.apply(this, arguments);
      if (this.markLine) {
        this.markLine[this.visible ? 'show' : 'hide']();
      }
    },
    drawPoints: function () {
      // Draw the Column like always
      //@ts-expect-error ///
      H.seriesTypes.column.prototype.drawPoints.apply(this, arguments);

      // Add a Marker
      const series = this,
        chart = this.chart,
        inverted = chart.inverted,
        xAxis = this.xAxis,
        yAxis = this.yAxis,
        point = this.points[0]; // we know there is only 1 point
      let markLine = this.markLine;
      const ani = markLine ? 'animate' : 'attr';

      // Hide column
      point.graphic.hide();

      if (!markLine) {
        const path = inverted ? ['M', 0, 0, 'L', -5, -5, 'L', 5, -5, 'L', 0, 0, 'L', 0, 0 + xAxis.len] : ['M', 0, 0, 'L', -5, -5, 'L', -5, 5, 'L', 0, 0, 'L', xAxis.len, 0];
        markLine = this.markLine = chart.renderer.path(path)
          .attr({
            fill: series.color,
            stroke: series.color,
            'stroke-width': 1
          }).add();
      }
      markLine[ani]({
        translateX: inverted ? xAxis.left + yAxis.translate(point.y) : xAxis.left,
        translateY: inverted ? xAxis.top : yAxis.top + yAxis.len - yAxis.translate(point.y)
      });
    }
  });
})(Highcharts);

const LinearGauge: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
        //@ts-expect-error ///
      Highcharts.chart(chartRef.current, {
        chart: {
          type: 'lineargauge',
          inverted: true,
          height: 100
        },
        title: {
          text: "Anderson's Chart"
        },
        xAxis: {
          lineColor: '#C0C0C0',
          labels: {
            enabled: false
          },
          tickLength: 0
        },
        yAxis: {
          min: 0,
          max: 100,
          title: null,
          labels: {
            format: '{value}%'
          },
          plotBands: [{
            from: 0,
            to: 40,
            color: '#FF0000'
          }, {
            from: 40,
            to: 80,
            color: '#FFA500'
          }, {
            from: 80,
            to: 100,
            color: '#00FF00'
          }]
        },
        legend: {
          enabled: false
        },
        series: [{
          data: [75],
          color: '#000000',
          dataLabels: {
            enabled: true,
            align: 'top',
            format: '{point.y}%'
          }
        }, {
          data: [50],
          color: '#FF0000', // Change color if needed
          dataLabels: {
            enabled: true,
            align: 'top',
            format: '{point.y}%'
          }
        },
        {
          data: [30],
          color: '#00FFFF', // Change color if needed
          dataLabels: {
            enabled: true,
            align: 'top',
            format: '{point.y}%'
          }
        }
      ]
      });
    }
  }, []);

  return (
    <div className='relative w-full'>
      <div ref={chartRef}></div>
      <div className='absolute top-3 right-3 bg-white w-6 h-6' />
      <div className='absolute top-16 bg-white w-full h-9' />
    </div>
  )
};

export default LinearGauge;



