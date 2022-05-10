import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row, Table } from 'react-bootstrap';

const Products = () => {

  // Form open state
  const [addForm, setAddForm] = useState(false)

  // Cat state
  const [cat, setCat] = useState([])

  // Tag state
  const [tag, setTag] = useState([])

  // Form data
  const [input, setInput] = useState()

  // Form data
  const [product, setProduct] = useState([])

  // Get Cat
  useEffect(() => {
  axios.get('http://localhost:5050/categories').then(res => {
    setCat(res.data)
  })
  }, [cat])

  // Get Tags
  useEffect(() => {
  axios.get('http://localhost:5050/tags').then(res => {
    setTag(res.data)
  })
  }, [tag])

  // Show category
  const showCat = (id) => {
    axios.get(`http://localhost:5050/categories/${id}`).then((res) => {
      return res.data.name
    })
  }
 
  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5050/products', input).then(() => {
      setAddForm(false)
    })
  }

  // Get all Data
  useEffect(() => {
    axios.get('http://localhost:5050/products').then(res => {
      setProduct(res.data.reverse())
    })
  }, [product])
  
  return (
    <div>
      <h1>All Products</h1>
      <Button onClick={ () => setAddForm(true)}>Add new Product</Button>
      
      {
        addForm && 
        <Form onSubmit={ handleSubmit }>
          <h3>Add new Product</h3>
          <Row>
            <Col md='6'>
              <Form.Group>
                <Form.Label>Product name</Form.Label>
                <Form.Control onChange={ e => setInput({ ...input, name: e.target.value }) } type='text' placeholder='Product full name' />
              </Form.Group>
            </Col>
            <Col md='6'>
              <Form.Group>
                <Form.Label>Product Photo link</Form.Label>
                <Form.Control onChange={ e => setInput({ ...input, proLink: e.target.value }) } type='url' placeholder='Product photo link' />
              </Form.Group>
            </Col>
            <Col md='6'>
              <Form.Label>Choose Category</Form.Label>
              <Form.Select onChange={ e => setInput({ ...input, categoryId: e.target.value }) } defaultValue='Select a Category'>
                {
                  cat.map(data =>
                      <option value={data.id}>{data.name}</option>
                    )
                }
              </Form.Select>
            </Col>
            <Col md='6'>
              <Form.Label>Choose a Tag</Form.Label>
              <Form.Select onChange={ e => setInput({ ...input, tagId: e.target.value })} defaultValue='Select a Tag'>
                {
                  tag.map(data =>
                      <option value={data.id}>{data.name}</option>
                    )
                }
              </Form.Select>
            </Col>
            <Button variant='success' className='my-3' type='sumbit'>Add Product</Button>
          </Row>
        </Form>
      }
      
      <hr />
      <Table striped hover bordered variant='dark'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Photo</th>
            <th>Acton</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((data, index) => 
              <tr>
                <td>{ index + 1 }</td>
                <td>{ data.name }</td>
                <td>{ showCat(data.categoryId) }</td>
                
                <td>Indian jama</td>
                <td><img style={{width: '40px', height: '40px', objectFit: 'cover'}} src={ data.proLink } alt="" /></td>
                <td>
                <Button variant='info' size='sm'>View</Button>
                <Button variant='warning' size='sm'>Edit</Button>
                <Button variant='danger' size='sm'>Delete</Button>
                </td>                                   
              </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Products;