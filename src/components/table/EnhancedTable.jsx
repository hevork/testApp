import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { EnhancedTableHead } from "./EnhancedTableHead";
import { getComparator, stableSort } from "./HeadCells";
import styles from "./EnhancedTable.module.css";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { NewCustomerModal } from "../new-customer-modal";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppSelector } from "../../store/hooks/redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#cd387a",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  }
}));
const theme = createTheme({
  palette: {
    primary: {
      main: "#cd387a"
    }
  }
});
export function EnhancedTable() {
  const { dataCustomers } = useAppSelector(s => s.customersDataReducer);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("endDate");
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5;
  const [open, setOpen] = React.useState(false);
  const [itemCustomer, setItemCustomer] = React.useState();
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataCustomers.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={dataCustomers.length}
            />
            <TableBody>
              {stableSort(dataCustomers, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <HtmlTooltip
                      className={styles.tooltip}
                      key={row.startDate}
                      title={
                        <div
                          color="inherit"
                          className={styles.openModal}
                          onClick={() => {
                            setOpen(true);
                            setItemCustomer(row);
                          }}
                        >
                          + Create Insight
                        </div>
                      }
                    >
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell padding="checkbox"></TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.startDate}
                        </TableCell>
                        <TableCell align="right">{row.endDate}</TableCell>
                        <TableCell align="right">{row.customer}</TableCell>
                        <TableCell align="right">{row.impression}</TableCell>
                        <TableCell align="right">{row.conversion}</TableCell>
                        <TableCell align="right">
                          {row.attributeMatches}
                        </TableCell>
                        <TableCell align="right">
                          {row.conversionRate}
                        </TableCell>
                        <TableCell align="right">{row.avgFrequency}</TableCell>
                        <TableCell align="right">
                          {row.timeToConversion}
                        </TableCell>
                        <TableCell align="right">
                          <img
                            src={row.director}
                            alt="img"
                            circle="true"
                            className={styles.image}
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null;
                              currentTarget.src =
                                "https://gravatar.com/avatar/0f273ef4c05c5116cbea7116140dd2b5?s=30&d=robohash&r=x";
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    </HtmlTooltip>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2} className={styles.paginationWrapper}>
          <div>
            Showing {rowsPerPage * (page + 1)} of {dataCustomers.length}
          </div>
          <ThemeProvider theme={theme}>
            <Pagination
              count={2}
              boundaryCount={5}
              defaultPage={0}
              variant="outlined"
              shape="rounded"
              size="small"
              onChange={handleChangePage}
              page={page + 1}
              hidePrevButton
              color="primary"
            />
          </ThemeProvider>
        </Stack>
      </Paper>
      <NewCustomerModal
        itemCustomer={itemCustomer}
        open={open}
        setOpen={setOpen}
      />
    </Box>
  );
}
