import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DoneIcon from "@mui/icons-material/Done";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Typography,
  Divider,
  IconButton,
  Grid,
  Button,
  Fab,
  TextField,
  FormControl,
  Toolbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ROUTELIST, employee } from "./TableDatas";
import { useFormik } from "formik";

const TextFieldShow = ({ formik, setShowField }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <TextField
            name="id"
            value={formik.values.id}
            onChange={formik.handleChange}
            variant="outlined"
            label="Enter id"
          />
        </FormControl>

        <FormControl>
          <TextField
            name="Name"
            value={formik.values.Name}
            onChange={formik.handleChange}
            variant="outlined"
            label="Enter Name"
          />
        </FormControl>
        {/* <Button type="submit">Submit</Button> */}
        <Fab type="submit" size="small">
          <DoneIcon />
        </Fab>
      </form>
    </>
  );
};
function EmployeeDatas() {
  const [formikData, setFormikData] = React.useState([]);
  const [showField, setShowField] = React.useState(false);
  const data = employee;
  const navigate = useNavigate();
  const showTextField = () => {
    setShowField(true);
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      Name: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      const saveValues = { ...values };
      setFormikData([...formikData, saveValues]);
      formik.handleReset();
      setShowField(false);
    },
  });
  editContent = () => {};
  // const getValuesFromFormik = (items) => {
  //   const saveFromSubmit = [...items];
  //   setFormikData([...formikData, saveFromSubmit]);
  //   console.log("formikData from current State", formikData);
  // };
  function removeTableRow(idValue) {
    const valueF = [...formikData];
    valueF.splice(idValue, 1);
    setFormikData(value);
    // console.log(idValue);
    // const passData = [...formikData];
    // const index1 = formikData.findIndex((item) => {
    //   return item.id === idValue;
    // });
    // console.log("passData", passData, "index1", index1);
    // if (index1 >= 0) {
    //   passData.splice(index1, 1);
    // }
    // setFormikData([...passData]);
  }
  return (
    <>
      <Grid container md={12}>
        <IconButton
          onClick={() => {
            navigate(ROUTELIST.Home);
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h4"> Employee Datas</Typography>
        {showField ? (
          <Fab
            size="small"
            onClick={() => {
              showTextField();
              setShowField(false);
            }}
          >
            <CloseIcon />
          </Fab>
        ) : (
          <Fab size="small" onClick={() => showTextField()}>
            <AddIcon />
          </Fab>
        )}
      </Grid>

      {showField ? (
        <TextFieldShow formik={formik} setShowField={setShowField} />
      ) : (
        false
      )}
      {/* <TextFieldShow /> */}

      <TableContainer sx={{ marginTop: "10px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontFamily: "Poppins-SemiBold" }}>
                Code no
              </TableCell>
              <TableCell sx={{ fontFamily: "Poppins-SemiBold" }}>
                Company Name
              </TableCell>
              <TableCell>{""}s</TableCell>
              <TableCell>{""}s</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ textAlign: "center" }}>
            {formikData.map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontFamily: "Poppins-Regular" }}>
                  {item.id}{" "}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins-Regular" }}>
                  {item.Name}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      setShowField(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => removeTableRow(item.ids)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      navigate(ROUTELIST.employeeDetails);
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
      <Outlet />
    </>
  );
}

export default EmployeeDatas;
