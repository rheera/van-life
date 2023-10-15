import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import type { ChartOptions } from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {},
  scales: {
    y: {
      max: 5000,
      min: 0,
      ticks: {
        stepSize: 1000,
        callback: function (value) {
          return "$" + value.toString().substring(0, 1) + "k";
        },
      },
      border: { dash: [24, 24] },
      grid: {
        lineWidth: 1,
        drawTicks: false, // true is default
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 1,
        callback: function (value) {
          // const newThis = this as any;
          const newLabel: string = this.getLabelForValue(
            value as number
          ).substring(0, 2);
          return newLabel;
        },
      },
    },
  },
};

const labels = [
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dataValues = [4000, 1325, 3012, 2643, 1500, 502];

export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: dataValues,
      backgroundColor: (ctx: { parsed: { x: number } }) => {
        if (ctx.parsed.x >= 4) {
          return "#FF8C38";
        } else {
          return "rgba(255, 234, 208, 1)";
        }
      },
      borderRadius: 6,
    },
  ],
};

const IncomeGraph = () => {
  return (
    <div className="graph">
      <Bar options={options} data={data} />
    </div>
  );
};

export default IncomeGraph;
