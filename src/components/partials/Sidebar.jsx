import React from 'react'
import product from '../../_assets/images/shop/1.jpg'


const Sidebar = () => {
  return (
    <div class="sidebar">
        <div class="widget">
        <h6 class="upper">Search Shop</h6>
        <form>
            <input type="text" placeholder="Search.." class="form-control" />
        </form>
        </div>
        <div class="widget">
        <h6 class="upper">Categories</h6>
        <ul class="nav">
            <li><a href="https://">Beauty</a>
            </li>
            <li><a href="https://">Blazers</a>
            </li>
            <li><a href="https://">Bags</a>
            </li>
            <li><a href="https://">Jeans</a>
            </li>
            <li><a href="https://">Shorts</a>
            </li>
            <li><a href="https://">Dresses</a>
            </li>
        </ul>
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
        <div class="widget">
        <h6 class="upper">Popular Tags</h6>
        <div class="tags clearfix"><a href="https://">Hipster</a><a href="https://">Fashion</a><a href="https://">Shirt</a><a href="https://">Modern</a><a href="https://">Vintage</a>
        </div>
        </div>
    </div>
  )
}

export default Sidebar