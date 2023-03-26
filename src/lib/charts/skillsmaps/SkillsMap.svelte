<script lang="ts">
  import { PolarArea } from "svelte-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale,
  } from "chart.js";

  ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);

  export let data;
  export let title: string = "polar chart";
</script>

<PolarArea
  {data}
  options={{
    responsive: true,
    scales: {
      r: {
        pointLabels: {
          display: true,
          centerPointLabels: true,
          backdropColor: "#000000",
          color: "#FFFFFF",
          font: {
            size: 14,
          },
          padding: 0,
        },
        ticks: {
          backdropColor: "#000000",
          color: "#FFFFFF",
          font: {},
        },
        angleLines: {
          display: true,
          color: "#FFFFFF",
        },
        max: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        color: "#FFFFFF",
        font: {
          size: 18,
        },
      },
    },
    animation: {
      duration: 1200,
    },
  }}
/>
