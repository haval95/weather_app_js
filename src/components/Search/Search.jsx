import React from 'react'
import * as Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Search(props) {
    return (
        <Bootstrap.Form className="m-2" onSubmit={props.handleSubmit}>
          <Bootstrap.InputGroup className="mb-3">
            <Bootstrap.FormControl
              placeholder="City [Capital]"
              aria-label="Country"
              aria-describedby="basic-addon2"
              onChange={props.handleChange}
              value={props.inputValue}
            />
            <Bootstrap.InputGroup.Append>
              <Bootstrap.Button variant="btn btn-info" type="submit" >Search</Bootstrap.Button>
            </Bootstrap.InputGroup.Append>

          </Bootstrap.InputGroup>
        </Bootstrap.Form>
    )
}
