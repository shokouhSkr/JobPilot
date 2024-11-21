import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const AreaChartComponent = ({ data }) => {
  const { isDarkMode } = useSelector((store) => store.user);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 50, left: -40 }}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="date" stroke={isDarkMode ? "#c2b2b1" : "#4d3757b8"} />
        <YAxis allowDecimals={false} stroke={isDarkMode ? "#c2b2b1" : "#4d3757b8"} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="count"
          stroke={isDarkMode ? "#F5B661" : "#5932b6"}
          fill={isDarkMode ? "#F5B661" : "#5932b6"}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
