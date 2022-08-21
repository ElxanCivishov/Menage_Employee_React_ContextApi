import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { EmployesContext } from "../context/Context";

const EditForm = ({ employee }) => {
  const { dispatch } = useContext(EmployesContext);

  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const updatedEmployee = { id, name, email, address, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_EMPLOYEE", id, updatedEmployee });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          className="mt-3"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" className="form-control mt-3">
        Update Employee
      </Button>
    </Form>
  );
};

export default EditForm;
