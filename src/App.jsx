import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayingTable from "./components/DisplayingTable";
import EmployeeDatas from "./components/EmployeeDatas";
import EmployeeDetails from "./components/EmployeeDetails";
import Header from "./components/Header";
import { companyData } from "./components/TableDatas";
import { ROUTELIST } from "./components/TableDatas";
import EmployeeContextProvider from "./contexts/EmployeeContext";
function App() {
  console.log("first", companyData);
  return (
    <>
      <EmployeeContextProvider>
        <Header />
        <Routes>
          <Route path={ROUTELIST.Home} element={<DisplayingTable />} />
          <Route path={ROUTELIST.Employee} element={<EmployeeDatas />}>
            <Route
              path={ROUTELIST.employeeDetails}
              element={<EmployeeDetails />}
            />
          </Route>
        </Routes>
      </EmployeeContextProvider>
    </>
  );
}

export default App;
