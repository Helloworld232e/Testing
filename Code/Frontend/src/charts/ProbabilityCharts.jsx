import { Bar } from "react-chartjs-2";

function ProbabilityChart({ data }) {
  const chartData = {
    labels: ["Malware", "Benign"],
    datasets: [
      {
        label: "Prediction Probability",
        data: data,
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default ProbabilityChart;