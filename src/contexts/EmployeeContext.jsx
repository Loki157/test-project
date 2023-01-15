import { useFormik } from "formik";
import React, { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();
const EmployeeContextProvider = (props) => {
  const [formikData, setFormikData] = React.useState([]);
  const formik = useFormik({
    initialValues: { id: "", Name: "" },
    onSubmit: (values) => {
      console.log("values", values);
      addEmployeeData(values);
    },
  });

  const addEmployeeData = (comingData) => {
    setFormikData([...formikData, { ids: Date.now(), comingData }]);
  };

  const deleteEmployeeData = (id) => {
    setFormikData(formikData.filter((item) => item.id === id));
  };
  return (
    <EmployeeContext.Provider
      value={{
        formik,
        addEmployeeData,
        deleteEmployeeData,
        formikData,
        setFormikData,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
