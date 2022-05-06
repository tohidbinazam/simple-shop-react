import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Form, Table } from 'react-bootstrap';

const Category = () => {

  // Make slug
  const makeSlug = (data) => {
    let array = data.split(' ')
    return array.join('-').toLowerCase()
  }

  // Add form state
  const [addForm, setAddForm] = useState(false)

  // Form data state
  const [input, setInput] = useState([])
  
  // Get data state
  const [cats, setCats] = useState([])

  // Cat edit state
  const [editForm, setEditForm] = useState(false)

  // cat edit data state
  // const [editFormData, setEditFormData] = useState()

  // Handle edit form
  const handleEditForm = (id) => {
    setAddForm(false);
    setEditForm(true);

    axios.get(`http://localhost:5050/categories/${id}`).then(res => {
      setInput(res.data)
    })
  }

  // handle data update form
  const handleUpdateForm = (e) => {
    e.preventDefault()

    axios.patch(`http://localhost:5050/categories/${input.id}`, {
      name: input.name,
      slug: makeSlug(input.name)
    }).then(() => {
      setEditForm(false)
      setInput('')
    })
  }

  // Delete a category
  const handleDeleteData = (id) => {
    axios.delete(`http://localhost:5050/categories/${id}`)
  }

  // Form submit handler
  const handleform = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5050/categories', {
      id: '',
      name: input,
      slug: makeSlug(input)
    }).then(() => {
      setAddForm(false)
      setInput('')
    })
  }

  // Get all data
  useEffect(() => {
    axios.get('http://localhost:5050/categories').then(res => {
      setCats(res.data.reverse())
    })
  }, [cats])
  
  return (
    <div>
      <h1>Category</h1>
      <Button onClick={ () => { setAddForm(true); setEditForm(false); setInput('') }}>Create Category</Button>
      
      {
        addForm && 
        <>
        <h3>Add new Category</h3>
        <Form onSubmit={ handleform }>
          <Form.Group className='my-3'>
            <Form.Control value={ input } onChange={ e => setInput(e.target.value) } type='text' placeholder='Type your Category' />
          </Form.Group>
          <Button type='submit' variant='success' size='sm'>Add new Category</Button>
        </Form>
        </>
      }

      {
        editForm && 
        <>
        <h3>Edit Category</h3>
        <Form onSubmit={ handleUpdateForm }>
          <Form.Group className='my-3'>
            <Form.Control value={ input.name } onChange={ e => setInput({...input, name: e.target.value})} type='text' placeholder='Type your Category' />
          </Form.Group>
          <Button type='submit' variant='success' size='sm'>Edit Category</Button>
        </Form>
        </>
      }

      <hr />
      <Table striped hover bordered variant='dark'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            cats.map((data, index) =>
              <tr>
                <td>{ index + 1 }</td>
                <td>{ data.name }</td>
                <td>{ data.slug }</td>
                <td>
                  <Button onClick={ () => handleEditForm(data.id) } variant='info' size='sm'>Edit</Button>
                  <Button onClick={ () => handleDeleteData(data.id) } variant='danger' size='sm'>Delete</Button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Category