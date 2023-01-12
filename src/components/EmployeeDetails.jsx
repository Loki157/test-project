import { Typography, Grid, IconButton } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Outlet, useNavigate } from "react-router-dom";
import { ROUTELIST, employee } from "./TableDatas";
function EmployeeDetails() {
  const data = employee;
  const navigate = useNavigate();
  const locate = useLocation();
  console.log("first");
  return (
    <>
      <Grid container md={12}>
        <IconButton
          onClick={() => {
            navigate(ROUTELIST.Employee);
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h4"> Employee Datas</Typography>
      </Grid>

      <Typography>employee details</Typography>
    </>
  );
}

export default React.memo(EmployeeDetails);
