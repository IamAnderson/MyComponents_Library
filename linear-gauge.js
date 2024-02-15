document.addEventListener("DOMContentLoaded", function () {
  const chartContainer = document.getElementById("chart");
  const marker = document.querySelector(".marker");
  const scale = document.querySelector(".scale");

  if (chartContainer) {
    const chart = Highcharts.chart(chartContainer, {
      chart: {
        type: "lineargauge",
        inverted: true,
        height: 100,
      },
      title: {
        text: "Anderson's Chart",
      },
      xAxis: {
        lineColor: "#C0C0C0",
        labels: {
          enabled: false,
        },
        tickLength: 0,
      },
      yAxis: {
        min: 0,
        max: 100,
        title: null,
        labels: {
          format: "{value}%",
        },
        plotBands: [
          {
            from: 0,
            to: 40,
            color: "#FF0000",
          },
          {
            from: 40,
            to: 80,
            color: "#FFA500",
          },
          {
            from: 80,
            to: 100,
            color: "#00FF00",
          },
        ],
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          data: [75],
          color: "#000000",
          dataLabels: {
            enabled: true,
            align: "top",
            format: "{point.y}%",
          },
        },
        {
          data: [50],
          color: "#FF0000", // Change color if needed
          dataLabels: {
            enabled: true,
            align: "top",
            format: "{point.y}%",
          },
        },
        {
          data: [30],
          color: "#00FFFF", // Change color if needed
          dataLabels: {
            enabled: true,
            align: "top",
            format: "{point.y}%",
          },
        },
      ],
    });

    // Custom marker position adjustment
    marker.style.top = chartContainer.offsetTop + 3 + "px";
    marker.style.right = chartContainer.offsetLeft + 3 + "px";

    // Custom scale position adjustment
    scale.style.top = chartContainer.offsetTop + 16 + "px";
  }
});
