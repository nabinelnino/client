// Columns.js
import React from "react";

const Columns = (handleSort) => {
  return [
    {
      Header: (
        <div onClick={() => handleSort("name")}>
          Name <span>&uarr;&darr;</span>
        </div>
      ),
      Header: "Name",
      accessor: "name",
      sortable: true,
      show: true,
      displayValue: "First Name",
    },
    {
      Header: "DOI",
      accessor: "doi",
      sortable: false,
      show: true,
      displayValue: "Status",
    },
    {
      Header: "New DOI",
      accessor: "doi",
      sortable: false,
      show: true,
      displayValue: "Status",
      Cell: ({ value }) => (
        <a
          href={`https://doi.org/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`https://doi.org/${value}`}
        </a>
      ),
    },
  ];
};

export default Columns;
