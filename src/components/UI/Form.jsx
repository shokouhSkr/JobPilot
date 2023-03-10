import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BasicSelect } from "../../components";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { clearHandler, valuesHandler } from "../../features/allJobs/allJobsSlice";

const FormContainer = ({ children }) => {
  // const { isLoading, search, searchType, searchStatus, sort, sortOptions, page } = useSelector(
  //   (store) => store.allJobs
  // );
  // const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation(); // get the current URL location

  // // Show query params in the URL
  // useEffect(() => {
  //   // construct query parameters string
  //   const queryParams = new URLSearchParams(location.search); // => {}

  //   // sort: sort(=latest), searchStatus: searchStatus(=all), ...
  //   const paramsToCheck = { searchType, searchStatus, sort, search, page };

  //   Object.entries(paramsToCheck).forEach(([key, value]) => {
  //     if (value === undefined || value === "all" || value === "") queryParams.delete(key);
  //     else queryParams.set(key, value);
  //   });

  //   const url = queryParams ? `${location.pathname}?${queryParams.toString()}` : location.pathname;
  //   navigate(url, { replace: true });
  // }, [searchType, searchStatus, sort, page, search]);

  // // Reading query params from the URL and update data
  // useEffect(() => {
  //   const queryParams = ["search", "searchType", "searchStatus", "sort", "page"];

  //   // extract query parameters from the URL
  //   const searchParams = new URLSearchParams(location.search); // => {}

  //   queryParams.forEach((param) => {
  //     const value = searchParams.get(param);
  //     if (value) {
  //       dispatch(valuesHandler({ name: param, value: param === "page" ? Number(value) : value }));
  //     }
  //   });
  // }, [location.search]);

  // const searchHandler = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   if (isLoading) return;

  //   dispatch(valuesHandler({ name, value }));
  // };

  // const clearFormHandler = () => dispatch(clearHandler());

  return (
    <form className="relative mb-12 rounded-lg bg-screen p-4 text-primaryTxt shadow-md">
      <div className="grid grid-cols-1 grid-rows-4 gap-y-5 sm:grid-cols-2 sm:grid-rows-2 sm:gap-6 sm:p-4 md:mt-5">
        {children}
      </div>
    </form>
  );
};

export default FormContainer;
