import React, { useRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'chart.js';

const StatsCard = ({
  className, text, value, stats,
}) => {
  const ref = useRef();

  // const ctx = document.getElementById('canvas').getContext('2d');
  // const gradient = ctx.createLinearGradient(20, 0, 220, 0);

  // // Add three color stops
  // gradient.addColorStop(0, 'green');
  // gradient.addColorStop(0.5, 'cyan');
  // gradient.addColorStop(1, 'green');

  // Set the fill style and draw a rectangle
  // ctx.fillStyle = gradient;
  // ctx.fillRect(20, 20, 200, 100);

  const data = useMemo(
    () => ({
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          label: 'total',
          // fill: false,
          borderColor: '#1875F0',
          borderWidth: 1,
          data: stats,
        },
      ],
    }),
    [stats],
  );

  Chart.defaults.global.legend.display = false;

  useEffect(() => {
    const myChartRef = ref.current.getContext('2d');
    const { height: graphHeight } = myChartRef.canvas;

    const gradientLine = myChartRef
      .createLinearGradient(0, 0, 0, graphHeight);
    gradientLine.addColorStop(0, 'rgb(24,117,240, 0.2)');
    gradientLine.addColorStop(0.5, 'rgb(24,117,240, 0)');
    gradientLine.addColorStop(1, 'rgb(24,117,240, 0)');

    const chart = new Chart(myChartRef, {
      data,
      type: 'line',
      options: {
        title: { display: false },
        tooltips: {
          enabled: false,
          intersect: false,
          mode: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: { display: false },
        elements: {
          line: {
            tension: 0,
            // borderColor: gradientLine,
            backgroundColor: gradientLine,
          },
          point: {
            radius: 0,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        barRadius: 4,
        scales: {
          xAxes: [{ display: false, gridLines: false, stacked: true }],
          yAxes: [{
            display: false,
            stacked: true,
            gridLines: false,
            ticks: { display: false },
          }],
        },
        layout: {
          padding: {
            left: 4, right: 4, top: 2, bottom: 2,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);
  return (
    <div className={className}>
      <div className="stat-value">
        <p>{text}</p>
        <h3>{value}</h3>
      </div>
      <div className="stat-chart">
        <canvas ref={ref} />
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  stats: PropTypes.array,
};

export default StatsCard;
