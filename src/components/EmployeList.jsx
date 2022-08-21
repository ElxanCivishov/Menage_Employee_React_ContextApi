import { useContext, useState, useEffect } from "react";
import Employe from "./Employe";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

import { EmployesContext } from "../context/Context";
import { Modal, Button, Alert } from "react-bootstrap";

const EmployeList = () => {
  const { sortedEmployees } = useContext(EmployesContext);

  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    handleClose();
    return () => {
      handleShowAlert();
    };
  }, [sortedEmployees]);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const totalPerPageNum = Math.ceil(sortedEmployees.length / employeesPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              className="btn btn-success"
              data-toggle="modal"
              onClick={handleShow}
            >
              <i className="material-icons">&#xE147;</i>
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <Alert
        show={showAlert}
        variant="info"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        Employee List updated successfully!
      </Alert>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => {
            return (
              <tr key={employee.id}>
                <Employe employee={employee} />
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        setCurrentPage={setCurrentPage}
        pageNumber={totalPerPageNum}
        employees={sortedEmployees}
        currentEmployees={currentEmployees}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeList;
