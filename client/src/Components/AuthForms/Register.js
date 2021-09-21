import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Register = () => {
    return (
        <div>
           <Form>
      <h2 >Sign up</h2>
      <Form.Group >
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter Name"
        />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Last Name"
        />

        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default Register
