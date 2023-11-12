import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ chartData }) {
  console.log(chartData);
  let pData = chartData.map((data) => data.number);
  const piedata = {
    labels: ["inactive", "active"],
    datasets: [
      {
        label: "no of jobs",
        data: pData,
        backgroundColor: ["#dd5546", "#50AF95"],
        borderColor: ["#dd5546", "#50AF95"],
      },
    ],
  };
  console.log(piedata);

  return (
    <>
      <div className=" text-black text-center text-2xl underline-offset-4 underline">
        Chart Below
      </div>
      <hr className="  bg-green-700"></hr>
      <h2 className=" underline mt-4 text-2xl font-thin text-center   decoration-green-300 mb-4">
        Pie-Chart for Active & Inactive Jobs
      </h2>
      <div className=" h-full mb-8 pb-8">
        <div className="flex mx-auto w-1/3">
          <Pie data={piedata} />
        </div>
      </div>
    </>
  );
}

export default PieChart;
