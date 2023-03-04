import { useSelector } from "react-redux";
import { StatItem } from "..";
import { BsCalendar2Check } from "react-icons/bs";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);
  const defaultStats = [
    {
      id: "34dvfagogowfrjbnb",
      title: "Pending Applications",
      icon: <BsCalendar2Check />,
      count: stats.pending || 0,
      color: "bg-blue-500",
      bgColor: "#00ff",
    },
    {
      id: "34dvfagogowfrxsxs",
      title: "Interviews Scheduled",
      icon: <BsCalendar2Check />,
      count: stats.interview || 0,
      color: "bg-red-500",
      bgColor: "#aab5",
    },
    {
      id: "34dvfagogoploplon",
      title: "Jobs Declined",
      icon: <BsCalendar2Check />,
      count: stats.declined || 0,
      color: "bg-green-500",
      bgColor: "#d43",
    },
  ];

  return (
    <section className="mb-8 grid grid-cols-1 grid-rows-3 gap-2 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1">
      {defaultStats.map((item) => (
        <StatItem key={item.id} {...item} />
      ))}
    </section>
  );
};

export default StatsContainer;
