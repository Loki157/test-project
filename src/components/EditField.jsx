import { Box, TextField, FormControl } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

function EditField() {
  const formikForEdit = useFormik({
    initialValues: {
      name: "",
      id: "",
    },
    onSubmit: (values) => {
      console.log("object", values);
    },
  });
  return (
    <>
      <Box>
        <FormControl>
          <Textfield
            name="id"
            value={formikData}
            onChange={formikForEdit.handleChange}
            label="id"
          />
        </FormControl>
        <FormControl>
          <Textfield
            name="Name"
            label="Name"
            value={formikData}
            onChange={formikForEdit.handleChange}
          />
        </FormControl>
      </Box>
    </>
  );
}

export default EditField;
