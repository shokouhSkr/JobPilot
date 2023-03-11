import moment from "moment";

export const setPeriod = () => {
  const now = Number(moment().format("HH"));

  if (now >= 6 && now < 12) return "Morning";
  else if (now >= 12 && now < 18) return "Noon";
  else if (now >= 18 && now < 21) return "Evening";
  else return "Night";
};
