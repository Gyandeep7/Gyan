// Filename - Edit.js
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Edit() {

	// Here usestate has been used in order
	// to set and get values from the jsx
	const [pname, setpname] = useState('');
	const [price, setprice] = useState('');
	const [pid, setpid] = useState('');

	// Used for navigation with logic in javascript
	let history = useNavigate()

	// Getting an index of an entry with an id
	var index = array.map(function (e) {
		return e.pid; }).indexOf(pid);

	// Function for handling the edit and
	// pushing changes of editing/updating
	const handelSubmit = (e) => {

		// Preventing from reload
		e.preventDefault();

		// Getting an index of an array
		let a = array[index]

		// Putting the value from the input
		// textfield and replacing it from
		// existing for updation
		a.pname = pname
		a.price = price

		// Redirecting to main page
		history('/')
	}


	// Useeffect take care that page will
	// be rendered only once
	useEffect(() => {
		setpname(localStorage.getItem('pname'))
		setprice(localStorage.getItem('price'))
		setpid(localStorage.getItem('pid'))
	}, [])

	return (
		<div>
			<Form className="d-grid gap-2"
				style={{ margin: '15rem' }}>

				{/* setting a name from the
					input textfiled */}
				<Form.Group className="mb-3"
					controlId="formBasicEmail">
					<Form.Control value={pname}
						onChange={e => setpname(e.target.value)}
						type="text" placeholder="Enter Product Name" />
				</Form.Group>

				{/* setting a age from the input textfiled */}
				<Form.Group className="mb-3"
					controlId="formBasicPassword">
					<Form.Control value={price}
						onChange={e => setprice(e.target.value)}
						type="text" placeholder="price" />
				</Form.Group>

				{/* Hadinling an onclick event
					running an edit logic */}
				<Button
					onClick={e => handelSubmit(e)}
					variant="primary" type="submit" size="lg">
					Update
				</Button>

				{/* Redirecting to main page after editing */}
				<Link className="d-grid gap-2" to='/'>
					<Button variant="warning"
						size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	)
}

export default Edit
