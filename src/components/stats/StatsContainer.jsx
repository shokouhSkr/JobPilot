import { useSelector } from "react-redux";
import { StatItem } from "..";
import { BsBug } from "react-icons/bs";
import { MdMotionPhotosPaused } from "react-icons/md";
import { BsCalendar2Day } from "react-icons/bs";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);

  const defaultStats = [
    {
      id: "34dvfagogowfrxsxs",
      title: "Interviews Scheduled",
      icon: <BsCalendar2Day />,
      count: stats.interview || 0,
    },
    {
      id: "34dvfagogowfrjbnb",
      title: "Pending Applications",
      icon: <MdMotionPhotosPaused />,
      count: stats.pending || 0,
    },
    {
      id: "34dvfagogoploplon",
      title: "Jobs Declined",
      icon: <BsBug strokeWidth="0.1" />,
      count: stats.declined || 0,
    },
  ];

  return (
    <section className="mb-20 grid grid-cols-1 grid-rows-3 gap-4 text-primaryTxt sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 lg:gap-6">
      {defaultStats.map((item) => (
        <StatItem key={item.id} {...item} />
      ))}
    </section>
  );
};

export default StatsContainer;
