import React, { useState } from "react";
import Table from "@mui/material/Table";
import { Dialog } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { OpenInNew } from "@mui/icons-material";

function TableData({ eventName, registrations }) {
  const [src, setSrc] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - registrations.length) : 0;

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div>
      <div className="row">
        <div className="wrapper">
          <h2 className="input">Registrations for {eventName}</h2>
          <input
            type="text"
            className="inputField"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search by Name or Receipt Id"
          />
        </div>
        <TableContainer sx={{ maxWidth: 1500 }} component={Paper}>
          <Table sx={{ maxWidth: 1500 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#166540" }}>
              <TableRow sx={{ minHeight: "100px" }}>
                <TableCell
                  sx={{ fontSize: "18px", color: "white" }}
                  align="center"
                >
                  Sr. No.
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", color: "white" }}
                  align="center"
                >
                  Reg. ID
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", color: "white" }}
                  align="center"
                >
                  Receipt ID
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", color: "white" }}
                  align="center"
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", color: "white" }}
                  align="center"
                >
                  Mobile Number
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", color: "white" }}
                  align="center"
                >
                  College Name
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", color: "white" }}
                  align="center"
                >
                  Department
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", color: "white" }}
                  align="center"
                >
                  Year
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", color: "white" }}
                  align="center"
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{ fontSize: "18px", color: "white" }}
                  align="center"
                >
                  Photo
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading ? (
                search !== "" ? (
                  registrations
                    .filter(
                      (item) =>
                        item?.name.includes(search) ||
                        item?.name.toLowerCase().includes(search) ||
                        item?.receiptId.toString().includes(search)
                    )
                    .map((row, i) => (
                      <TableRow
                        key={row?.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          // backgroundColor: "#2c6b86",
                          color: "white",
                        }}
                      >
                        <TableCell
                          align="center"
                          sx={{ fontSize: "16px" }}
                          component="th"
                          scope="row"
                        >
                          {i + 1}
                        </TableCell>
                        <TableCell sx={{ fontSize: "16px" }} align="center">
                          {row?.id}
                        </TableCell>
                        <TableCell sx={{ fontSize: "16px" }} align="center">
                          {row?.receiptId}
                        </TableCell>
                        <TableCell sx={{ fontSize: "16px" }} align="center">
                          {row?.name}
                        </TableCell>
                        <TableCell sx={{ fontSize: "16px" }} align="center">
                          {row?.phoneNo}
                        </TableCell>
                        <TableCell sx={{ fontSize: "16px" }} align="center">
                          {row?.college}
                        </TableCell>
                        <TableCell sx={{ fontSize: "16px" }} align="center">
                          {row?.dept}
                        </TableCell>
                        <TableCell sx={{ fontSize: "16px" }} align="center">
                          {row?.year}
                        </TableCell>
                        <TableCell sx={{ fontSize: "16px" }} align="center">
                          {row?.amount}
                        </TableCell>
                        <TableCell
                          onClick={() => {
                            setSrc(row.image);
                            setOpen(true);
                          }}
                          sx={{
                            fontSize: "16px",

                            cursor: "pointer",
                          }}
                          align="center"
                        >
                          <OpenInNew />
                        </TableCell>
                      </TableRow>
                    ))
                ) : registrations?.length >= 1 ? (
                  (rowsPerPage > 0
                    ? registrations?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : registrations
                  )?.map((row, i) => (
                    <TableRow
                      key={row?.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        // backgroundColor: "#2c6b86",
                        color: "white",
                      }}
                    >
                      <TableCell
                        align="center"
                        sx={{ fontSize: "16px" }}
                        component="th"
                        scope="row"
                      >
                        {i + 1}
                      </TableCell>
                      <TableCell sx={{ fontSize: "16px" }} align="center">
                        {row?.id}
                      </TableCell>
                      <TableCell sx={{ fontSize: "16px" }} align="center">
                        {row?.receiptId}
                      </TableCell>
                      <TableCell sx={{ fontSize: "16px" }} align="center">
                        {row?.name}
                      </TableCell>
                      <TableCell sx={{ fontSize: "16px" }} align="center">
                        {row?.phoneNo}
                      </TableCell>
                      <TableCell sx={{ fontSize: "16px" }} align="center">
                        {row?.college}
                      </TableCell>
                      <TableCell sx={{ fontSize: "16px" }} align="center">
                        {row?.dept}
                      </TableCell>
                      <TableCell sx={{ fontSize: "16px" }} align="center">
                        {row?.year}
                      </TableCell>
                      <TableCell sx={{ fontSize: "16px" }} align="center">
                        {row?.amount}
                      </TableCell>
                      <TableCell
                        onClick={() => {
                          setSrc(row?.image);
                          setOpen(true);
                        }}
                        sx={{
                          fontSize: "16px",
                          cursor: "pointer",
                        }}
                        align="center"
                      >
                        <OpenInNew />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <p style={{ color: "red", fontSize: "2rem" }}>
                        No registrations found!!
                      </p>
                    </td>
                    <td></td>
                  </tr>
                )
              ) : (
                <RotatingLines
                  strokeColor={"black"}
                  strokeWidth="3"
                  animationDuration="0.75"
                  width="40"
                  visible={true}
                />
              )}
              {/* {emptyRows > 0 && null} */}
            </TableBody>
            <TableFooter sx={{ textAlign: "center", fontSize: "16px" }}>
              <TableRow sx={{ textAlign: "center", fontSize: "16px" }}>
                <TablePagination
                  rowsPerPageOptions={[25, 50, 75, { label: "All", value: -1 }]}
                  colSpan={6}
                  count={registrations?.length}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  sx={{ textAlign: "center", fontSize: "16px" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
      {open && (
        <Dialog open={open} onClose={() => setOpen(!open)} fullWidth>
          <img src={src} alt="payment_ss" />
        </Dialog>
      )}
    </div>
  );
}

export default TableData;
