// Table.js
import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../App.css";

const Table = ({ tableName, data, columns, defaultPageSize }) => {
  return (
    <div className="custom-container">
      <h3 style={{ textAlign: "center" }}>{tableName}</h3>

      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={defaultPageSize}
        className="react-table"
      />
    </div>
  );
};

export default Table;
