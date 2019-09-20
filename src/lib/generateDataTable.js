const getApiClass = apiNum => {
  // bootstrap class name for different haze conditions
  const apiClass = {
    good: "table-info",
    moderate: "table-success",
    warning: "table-warning",
    danger: "table-danger",
  };

  if (apiNum > 100 && apiNum < 200) {
    return apiClass.moderate;
  } else if (apiNum >= 200 && apiNum < 300) {
    return apiClass.warning;
  } else if (apiNum >= 300) {
    return apiClass.danger;
  }
  // don't style if api <= 100
  else {
    return "";
  }
};

export default tableData => {
  const tableHeader = tableData[0];
  const tableBody = tableData.slice(1);

  const dataTableOptions = {
    data: tableBody,
    columns: tableHeader.map(col => ({ title: col })),
    paging: false,
    scrollY: "60vh",
    scrollX: true,
    scrollCollapse: true,

    fixedColumns: {
      leftColumns: 2,
    },
  };

  return jQuery("#api-data-table").DataTable({
    ...dataTableOptions,

    createdRow: function(row, data, index) {
      const tr = jQuery(row);

      for (let i = 0; i < data.length; i++) {
        const extractNum = /\d+/g.exec(data[i]);

        // data is an api number
        if (extractNum) {
          const apiNum = extractNum[0];
          tr.find(`td:eq(${i})`).addClass(getApiClass(apiNum));
        }
      }
    },
  });
};
