import {
  TableContainer,
  Table,
  IconButton,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Divider,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate } from "react-router-dom";
import { companyData, ROUTELIST } from "./TableDatas";
function DisplayingTable() {
  const data = companyData;
  const navigate = useNavigate();
  return (
    <>
      <Divider textAlign="left" variant="">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Divider>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontFamily: "Poppins-SemiBold" }}>
                Code no
              </TableCell>
              <TableCell sx={{ fontFamily: "Poppins-SemiBold" }}>
                Company Name
              </TableCell>
              <TableCell> {""}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontFamily: "Poppins-Regular" }}>
                  {item.code}{" "}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins-Regular" }}>
                  {item.company}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      navigate(ROUTELIST.Employee);
                    }}
                  >
                    <OpenInNewIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DisplayingTable;
