import { v4 as uniqueID } from "uuid";

const Reducer = (employees, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [
        ...employees,
        {
          id: uniqueID(),
          name: action.employee.name,
          email: action.employee.email,
          address: action.employee.address,
          phone: action.employee.phone,
        },
      ];

    case "REMOVE_EMPLOYEE":
      return employees.filter((employee) => employee.id !== action.id);

    case "UPDATE_EMPLOYEE":
      return employees.map((employee) =>
        employee.id === action.id ? action.updatedEmployee : employee
      );

    default:
      return employees;
  }
};

export default Reducer;
