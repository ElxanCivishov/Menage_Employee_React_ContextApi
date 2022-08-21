import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { EmployesContext } from "./../context/Context";

const AddForm = () => {
  const { dispatch } = useContext(EmployesContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, email, address, phone } = newEmployee;

  const onChangeInput = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_EMPLOYEE",
      employee: {
        name,
        email,
        address,
        phone,
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => onChangeInput(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          required
          className="mt-3"
          name="email"
          value={email}
          onChange={(e) => onChangeInput(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          rows={3}
          className="mt-3"
          name="address"
          value={address}
          onChange={(e) => onChangeInput(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          className="mt-3"
          name="phone"
          value={phone}
          onChange={(e) => onChangeInput(e)}
        />
      </Form.Group>
      <Button variant="success" type="submit" className="form-control mt-3">
        Add new Employee
      </Button>
    </Form>
  );
};

export default AddForm;
