export const headData = [
  {
    id: "startDate",
    numeric: false,
    disablePadding: true,
    label: "Start Date"
  },
  {
    id: "endDate",
    numeric: true,
    disablePadding: false,
    label: "End Date"
  },
  {
    id: "customer",
    numeric: true,
    disablePadding: false,
    label: "Customer"
  },
  {
    id: "impression",
    numeric: true,
    disablePadding: false,
    label: "Impression"
  },
  {
    id: "conversion",
    numeric: true,
    disablePadding: false,
    label: "Conversion"
  },
  {
    id: "attributeMatches",
    numeric: true,
    disablePadding: false,
    label: "Attribute Matches"
  },
  {
    id: "conversionRate",
    numeric: true,
    disablePadding: false,
    label: "Conversion Rate"
  },
  {
    id: "avgFrequency",
    numeric: true,
    disablePadding: false,
    label: "Avg.Frequency"
  },
  {
    id: "timeToConversion",
    numeric: true,
    disablePadding: false,
    label: "Avg.Time to Conversion"
  },
  {
    id: "director",
    numeric: true,
    disablePadding: false,
    label: "Director"
  }
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}
