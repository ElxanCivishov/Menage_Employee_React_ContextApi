import { useContext, useEffect, useState } from "react";
import { EmployesContext } from "../context/Context";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";

const Employe = ({ employee }) => {
  const { dispatch } = useContext(EmployesContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            className="btn text-warning"
            data-toggle="modal"
            onClick={() => handleShow()}
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            className="btn text-danger "
            data-toggle="modal"
            onClick={() =>
              dispatch({ type: "REMOVE_EMPLOYEE", id: employee.id })
            }
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm employee={employee} />
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

export default Employe;
