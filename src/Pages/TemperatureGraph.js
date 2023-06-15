import { Line } from "react-chartjs-2";
import "chart.js/auto";

function TemperatureGraph() {
  const chartData = {
    labels: ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    datasets: [
      {
        label: "Temperature",
        data: [22, 23, 25, 24, 26, 27, 25],
        fill: false,
        borderColor: "#3f51b5",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#3f51b5",
        pointBorderColor: "#fff",
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#3f51b5",
        pointHoverBorderColor: "#fff",
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Arial",
            size: 12,
          },
          color: "#555",
        },
      },
      y: {
        grid: {
          color: "#f0f0f0",
        },
        ticks: {
          font: {
            family: "Arial",
            size: 12,
          },
          color: "#555",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#3f51b5",
        titleColor: "#fff",
        bodyColor: "#fff",
        bodyFont: {
          family: "Arial",
          size: 14,
        },
        callbacks: {
          title: () => "",
          label: (context) => `${context.parsed.y}°C`,
        },
      },
    },
  };

  return (
    <>
      <h2>Temperature Graph</h2>
      <div style={{ height: "150px" }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </>
  );
}

export default TemperatureGraph;

// Temperature graph using static and dynamic data
// import React, { useEffect, useRef } from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";

// const TemperatureGraph = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const chartInstance = chartRef.current.chartInstance;
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//     }
//   }, []);

//   const chartData = {
//     labels: ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
//     datasets: [
//       {
//         label: "Temperature",
//         data: [22, 23, 25, 24, 26, 27, 25],
//         fill: false,
//         borderColor: "#3f51b5",
//         borderWidth: 2,
//         pointRadius: 4,
//         pointBackgroundColor: "#3f51b5",
//         pointBorderColor: "#fff",
//         pointHoverRadius: 6,
//         pointHoverBackgroundColor: "#3f51b5",
//         pointHoverBorderColor: "#fff",
//       },
//     ],
//   };

//   const chartOptions = {
//     maintainAspectRatio: false,
//     responsive: true,
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           font: {
//             family: "Arial",
//             size: 12,
//           },
//           color: "#555",
//         },
//       },
//       y: {
//         grid: {
//           color: "#f0f0f0",
//         },
//         ticks: {
//           font: {
//             family: "Arial",
//             size: 12,
//           },
//           color: "#555",
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         backgroundColor: "#3f51b5",
//         titleColor: "#fff",
//         bodyColor: "#fff",
//         bodyFont: {
//           family: "Arial",
//           size: 14,
//         },
//         callbacks: {
//           title: () => "",
//           label: (context) => `${context.parsed.y}°C`,
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <h2>Temperature Graph</h2>
//       <div style={{ height: "150px" }}>
//         <Line ref={chartRef} data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// };
// export default TemperatureGraph;

// import React from "react";
// import { Line } from "react-chartjs-2";

// function TemperatureGraph() {
//   const chartData = {
//     labels: [
//       "12 AM",
//       "1 AM",
//       "2 AM",
//       "3 AM",
//       "4 AM",
//       "5 AM",
//       "6 AM",
//       "7 AM",
//       "8 AM",
//       "9 AM",
//       "10 AM",
//       "11 AM",
//       "12 PM",
//       "1 PM",
//       "2 PM",
//       "3 PM",
//       "4 PM",
//       "5 PM",
//       "6 PM",
//       "7 PM",
//       "8 PM",
//       "9 PM",
//       "10 PM",
//       "11 PM",
//     ],
//     datasets: [
//       {
//         label: "Temperature",
//         data: [
//           20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 33, 32, 30,
//           29, 28, 26, 25, 23, 22, 21,
//         ],
//         backgroundColor: "rgba(54, 162, 235, 0.2)",
//         borderColor: "rgba(54, 162, 235, 1)",
//         borderWidth: 2,
//         pointRadius: 0,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: "Time of Day",
//           color: "#333",
//         },
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: "Temperature (°C)",
//           color: "#333",
//         },
//         suggestedMin: 0,
//         suggestedMax: 40,
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         labels: {
//           color: "#333",
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ maxWidth: "800px", margin: "0 auto" }}>
//       <Line data={chartData} options={chartOptions} />
//     </div>
//   );
// }

// export default TemperatureGraph;

// Fetching data from firebase

// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";

// function TemperatureGraph() {
//   const [temperatureData, setTemperatureData] = useState([]);

// Fetch temperature data from Firebase or any other data source
//   useEffect(() => {
// Example code to fetch temperature data from Firebase
// Replace this with your actual data fetching logic
//     const fetchData = async () => {
// try {
// Fetch temperature data from Firebase and update the state
// setTemperatureData(fetchedData);
//       } catch (error) {
//         console.error("Error fetching temperature data:", error);
//       }
//     };

//     fetchData();
//   }, []);

// Example data for the graph (replace with actual data)
//   const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Temperature",
//         data: temperatureData,
//         backgroundColor: "rgba(54, 162, 235, 0.2)", // Customize the graph's background color
//         borderColor: "rgba(54, 162, 235, 1)", // Customize the graph's line color
//         borderWidth: 2,
//         pointRadius: 0,
//       },
//     ],
//   };

// Customize the options for the graph
//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: "Month",
//           color: "#333", // Customize the label color
//         },
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: "Temperature (°C)",
//           color: "#333", // Customize the label color
//         },
//         suggestedMin: 0,
//         suggestedMax: 40,
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         labels: {
//           color: "#333", // Customize the legend label color
//         },
//       },
//     },
//   };

//   return (
//     <div className="temperature-graph-container">
//       <Line data={chartData} options={chartOptions} />
//     </div>
//   );
// }

// export default TemperatureGraph;
