import { createContext, useReducer } from "react";
import { v4 as uniqueID } from "uuid";
import Reducer from "./Reducer";

export const EmployesContext = createContext();

const EmployesContextProvider = (props) => {
  const defaultEmployees = [
    {
      id: uniqueID(),
      name: "Thomas Hardy",
      email: "thomashardy@mail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "(171) 555-2222",
    },
    {
      id: uniqueID(),
      name: "Dominique Perrier",
      email: "dominiqueperrier@mail.com",
      address: "Obere Str. 57, Berlin, Germany",
      phone: "(313) 555-5735",
    },
    {
      id: uniqueID(),
      name: "Maria Anders",
      email: "mariaanders@mail.com",
      address: "25, rue Lauriston, Paris, France",
      phone: "(503) 555-9931",
    },
    {
      id: uniqueID(),
      name: "Fran Wilson",
      email: "franwilson@mail.com",
      address: "C/ Araquil, 67, Madrid, Spain",
      phone: "(204) 619-5731",
    },
    {
      id: uniqueID(),
      name: "Martin Blank",
      email: "martinblank@mail.com",
      address: "Via Monte Bianco 34, Turin, Italy",
      phone: "(480) 631-2097",
    },
    {
      id: uniqueID(),
      name: "Thom Darvel",
      email: "darvel324@mail.com",
      address: "Portland, USA",
      phone: "(111) 555-2222",
    },
    {
      id: uniqueID(),
      name: "Perrier Ajanda",
      email: "perrierajanda@mail.com",
      address: "Berlin, Germany",
      phone: "(333) 555-5335",
    },
    {
      id: uniqueID(),
      name: "Anders Andres",
      email: "aanders@mail.com",
      address: "Paris, France",
      phone: "(103) 555-9933",
    },
    {
      id: uniqueID(),
      name: "Wilson Adams",
      email: "wilson@mail.com",
      address: "Madrid, Spain",
      phone: "(200) 699-5757",
    },
  ];

  const [employees, dispatch] = useReducer(Reducer, defaultEmployees);

  const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <EmployesContext.Provider value={{ sortedEmployees, dispatch }}>
      {props.children}
    </EmployesContext.Provider>
  );
};

export default EmployesContextProvider;
