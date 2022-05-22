/* eslint-disable jsx-a11y/anchor-is-valid */

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import product from '../../_assets/images/shop/1.jpg'


const Sidebar = ({ cats, tags, setProducts }) => {

    // Search state
    const [search, setSearch] = useState()

    // Prpducts search
    useEffect(() => {
        if (search !== '') {
        axios.get(`http://localhost:5050/products?q=${search}`).then(res => {
        setProducts(res.data.reverse())
        })}
    }, [search])
   

  // Products search by categories
  const haldlecats = (id) => {
      axios.get(`http://localhost:5050/categories/${id}/products`).then(res => {
          setProducts(res.data.reverse())
      })
  }

  // Products search by tags
  const haldletags = (e, id) => {
      e.preventDefault()
      axios.get(`http://localhost:5050/tags/${id}/products`).then(res => {
          setProducts(res.data.reverse())
      })
  }


  return (
    <div class="sidebar">
        <div class="widget">
        <h6 class="upper">Search Shop</h6>
        <form>
            <input value={ search } onChange={ e => setSearch(e.target.value) } type="text" placeholder="Search.." class="form-control" />
        </form>
        </div>
        <div class="widget">
        <h6 class="upper">Categories</h6>
        <ul class="nav d-block">
            
            {
                cats.map(data => 
                    <li><a href="htttps://" onClick={ () => haldlecats(data.id)} >{ data.name }</a></li>
                )
            }
            
        </ul>
        </div>

        <div class="widget">
        <h6 class="upper">Popular Tags</h6>
        <div class="tags clearfix">
            {
                tags.map(data => 
                    <a href="" onClick={ e => haldletags(e, data.id)}>{ data.name }</a>
                )
            }             
        </div>
        </div>

        <div class="widget">
        <h6 class="upper">Trending Products</h6>
        <ul class="nav product-list">
            <li>
            <div class="product-thumbnail">
                <img src={ product } alt="" />
            </div>
            <div class="product-summary"><a href="https://">Premium Suit Blazer</a><span>$199.99</span>
            </div>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar