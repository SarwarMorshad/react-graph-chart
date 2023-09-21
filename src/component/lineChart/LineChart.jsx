import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const LineChart = () => {
  const marks = [
    { student: "Alice", math: 85, physics: 78, biology: 92 },
    { student: "Bob", math: 76, physics: 88, biology: 65 },
    { student: "Charlie", math: 92, physics: 80, biology: 74 },
    { student: "David", math: 68, physics: 75, biology: 82 },
    { student: "Eve", math: 78, physics: 90, biology: 70 },
    { student: "Frank", math: 88, physics: 68, biology: 89 },
    { student: "Grace", math: 95, physics: 92, biology: 78 },
    { student: "Hannah", math: 72, physics: 79, biology: 85 },
    { student: "Isaac", math: 84, physics: 88, biology: 71 },
    { student: "Jack", math: 77, physics: 75, biology: 60 },
    { student: "Katie", math: 90, physics: 85, biology: 92 },
    { student: "Liam", math: 81, physics: 79, biology: 67 },
    { student: "Mia", math: 69, physics: 72, biology: 88 },
    { student: "Noah", math: 93, physics: 87, biology: 76 },
    { student: "Olivia", math: 86, physics: 90, biology: 84 },
    { student: "Peter", math: 75, physics: 68, biology: 62 },
    { student: "Quinn", math: 79, physics: 83, biology: 70 },
    { student: "Rachel", math: 88, physics: 92, biology: 95 },
    { student: "Sam", math: 94, physics: 85, biology: 89 },
    { student: "Tom", math: 70, physics: 73, biology: 78 },
  ];

  return (
    <div>
      <LChart width={1000} height={600} data={marks} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="math" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="student" />
        <YAxis dat />
        <Tooltip />
      </LChart>
    </div>
  );
};

export default LineChart;
