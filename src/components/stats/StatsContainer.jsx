import { useSelector } from "react-redux";
import { StatItem } from "..";
import { CiCircleCheck, CiCircleQuestion, CiCircleRemove } from "react-icons/ci";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);

  const defaultStats = [
    {
      id: "34dvfagogowfrxsxs",
      title: "Interviews Scheduled",
      icon: <CiCircleCheck strokeWidth="0.5" />,
      count: stats.interview || 0,
      color: "bg-red-500",
      bgColor: "bg-screen",
    },
    {
      id: "34dvfagogowfrjbnb",
      title: "Pending Applications",
      icon: <CiCircleQuestion strokeWidth="0.5" />,
      count: stats.pending || 0,
      color: "bg-blue-500",
      bgColor: "bg-screen",
    },
    {
      id: "34dvfagogoploplon",
      title: "Jobs Declined",
      icon: <CiCircleRemove strokeWidth="0.5" />,
      count: stats.declined || 0,
      color: "bg-green-500",
      bgColor: "bg-screen",
    },
  ];

  return (
    <section className="mb-8 grid grid-cols-1 grid-rows-3 gap-4 text-primaryTxt sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 lg:gap-6">
      {defaultStats.map((item) => (
        <StatItem key={item.id} {...item} />
      ))}
    </section>
  );
};

export default StatsContainer;
