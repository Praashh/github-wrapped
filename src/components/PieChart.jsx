import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import { useRecoilValue } from "recoil";
import { mostUsedLang } from "../atoms/MostUsedLang";

const PieChart = () => {
  const chartContainer = useRef(null);
  const languages = useRecoilValue(mostUsedLang);

  console.log("langs piechart", languages);
  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const data = {
        labels: languages.map(language => language.name),
        datasets: [
          {
            data: languages.map((language, index) => languages.length-index),
            backgroundColor: [
              "#646cffaa",
              "rgb(75, 207, 167)",
              "#FFCE56",
              "#2ECC71",
              "#9B59B6",
              "white",
            ],
          },
        ],
      };

      const chartConfig = {
        type: "pie",
        data: data,
      };

      const myChart = new Chart(chartContainer.current, chartConfig);

      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return <canvas ref={chartContainer} style={{ marginTop: "3rem" }} />;
};

export default PieChart;
