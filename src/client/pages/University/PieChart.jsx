import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; 

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const dataPie = {
      labels: ["Students", "Alumnis", "Others"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
           "#06D001", 
          "#059212", 
          "#F3FF90",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "pie",
      data: dataPie,
      options: {},
    };

    const pieChart = new Chart(chartRef.current, configPie);

    return () => {
      pieChart.destroy();
    };
  }, []);

  return (
    <div className="shadow-lg  rounded-lg overflow-hidden">
     
      <div className="flex  items-center h-full justify-center">
        <canvas 
          className="p-1 "
          ref={chartRef} 
          width="400" // Adjust width
          height="400" // Adjust height
        ></canvas>
      </div>
    </div>
  );
};

export default PieChart;
