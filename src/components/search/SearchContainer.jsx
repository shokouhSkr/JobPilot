import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BasicSelect } from "../../components";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { clearHandler, valuesHandler } from "../../features/allJobs/allJobsSlice";

const SearchContainer = () => {
  const { isLoading, search, searchType, searchStatus, sort, sortOptions, page } = useSelector(
    (store) => store.allJobs
  );
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // get the current URL location

  useEffect(() => {
    // construct query parameters string
    let queryParams = new URLSearchParams({
      searchType,
      searchStatus,
      sort, // sort: sort(=latest)
      page,
    }).toString();
    if (search.length > 0) queryParams = queryParams + `&search=${search}`;

    // update URL with query parameters
    navigate(`?${queryParams}`);
  }, [search, searchType, searchStatus, sort, page]);

  useEffect(() => {
    // extract query parameters from the URL
    const searchParams = new URLSearchParams(location.search);

    // check if each parameter exists and dispatch it to the store
    if (searchParams.has("search")) {
      dispatch(valuesHandler({ name: "search", value: searchParams.get("search") }));
    }
    if (searchParams.has("searchType")) {
      dispatch(valuesHandler({ name: "searchType", value: searchParams.get("searchType") }));
    }
    if (searchParams.has("searchStatus")) {
      dispatch(valuesHandler({ name: "searchStatus", value: searchParams.get("searchStatus") }));
    }
    if (searchParams.has("sort")) {
      dispatch(valuesHandler({ name: "sort", value: searchParams.get("sort") }));
    }
    if (searchParams.has("page")) {
      dispatch(valuesHandler({ name: "page", value: Number(searchParams.get("page")) }));
    }
  }, [location.search]);

  const searchHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (isLoading) return;

    dispatch(valuesHandler({ name, value }));
  };

  const clearFormHandler = () => dispatch(clearHandler());

  return (
    <section className="mb-12">
      <form className="relative rounded-lg bg-form p-4 pt-8 text-main shadow-md">
        <div className="absolute -top-6 left-0 right-0 z-30 mx-8 rounded-lg bg-main p-6 text-form">
          <h1 className="text-center text-lg">Search</h1>
        </div>

        <div className="mt-10 grid grid-cols-1 grid-rows-4 gap-y-5 md:grid-cols-2 md:grid-rows-2 md:gap-8 md:p-4">
          <TextField
            fullWidth
            id="outlined-search"
            name="search"
            label="Search"
            type="search"
            value={search}
            onChange={searchHandler}
          />
          <BasicSelect
            name="searchStatus"
            value={searchStatus}
            label="Status"
            options={["all", ...statusOptions]}
            onChange={searchHandler}
          />
          <BasicSelect
            name="searchType"
            value={searchType}
            label="Type"
            options={["all", ...jobTypeOptions]}
            onChange={searchHandler}
          />
          <BasicSelect
            name="sort"
            value={sort}
            label="Sort"
            options={sortOptions}
            onChange={searchHandler}
          />
        </div>
        <div className="px-4">
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={clearFormHandler}
            className="mt-6 mb-5 bg-red-200 p-3 text-red-400"
          >
            Clear Filters
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SearchContainer;
