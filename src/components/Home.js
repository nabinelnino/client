// App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "semantic-ui-react";

import "./App.css";
import { fetchAsyncPsets } from "../features/recordSlice";
import { getAllRecords } from "../features/recordSlice";

import Columns from "./Table/Columns";
import Table from "./Table/Index";

const App = () => {
  const dispatch = useDispatch();
  const alldata = useSelector(getAllRecords);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(fetchAsyncPsets());
  }, [dispatch]);

  useEffect(() => {
    if (alldata && alldata.api && Array.isArray(alldata.api)) {
      const extractedData = alldata.api.map(({ name, doi }) => ({
        name,
        doi,
      }));
      setData(extractedData);
    }
  }, [alldata]);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    globalSearch();
  }, [searchInput]);

  const globalSearch = () => {
    let filteredData = [];

    if (alldata.api && Array.isArray(alldata.api)) {
      filteredData = alldata.api.filter((value) => {
        if (!value || !value.name) {
          console.log("Skipping undefined value:", value);
          return false;
        }
        return value.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    }

    setData(filteredData);
  };

  return (
    <div className="custom-container">
      <br />
      <input
        className="search-input"
        size="large"
        name="searchInput"
        value={searchInput || ""}
        onChange={handleChange}
        placeholder="Search"
      />

      <br />
      <br />
      <Table
        tableName="Pset Records"
        data={data}
        columns={Columns()}
        defaultPageSize={10}
      />
    </div>
  );
};

export default App;
