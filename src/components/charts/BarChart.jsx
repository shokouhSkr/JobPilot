import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";

const BarChartComponent = ({ data }) => {
  const { isDarkMode } = useSelector((store) => store.user);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50, left: -40 }}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="date" stroke={isDarkMode ? "#c2b2b1" : "#4d3757b8"} />
        <YAxis allowDecimals={false} stroke={isDarkMode ? "#c2b2b1" : "#4d3757b8"} />
        <Tooltip />
        <Bar dataKey="count" fill={isDarkMode ? "#F5B661" : "#5932b6"} barSize={70} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
