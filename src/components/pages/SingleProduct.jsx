import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Rating from '../partials/Rating';

const SingleProduct = () => {
  const { product_slug } = useParams()

  // product state
  const [product, setProduct] = useState([])

  // Related products state
  const [relProducts, setRelProduct] = useState([]);

  // Get product
  useEffect(() => {
    axios.get(`http://localhost:5050/products?slug=${product_slug}&_expand=category&_expand=tag`).then(res => {
    setProduct(res.data[0])
    })
  }, [product, product_slug])
  
  // Related products
  axios.get(`http://localhost:5050/categories/${product.categoryId}/products`).then(res => {
    setRelProduct(res.data.reverse())
  })

  console.log(product);

  return (
    <section>
      <div class="container">
        <div class="single-product-details">
          <div class="row">
            <div class="col-md-6">
              <div data-options="{&quot;animation&quot;: &quot;slide&quot;, &quot;controlNav&quot;: true}" class="flexslider nav-inside control-nav-dark">
                  <img src={ product.proLink } alt="" />
                <ul class="slides">
                  <li>
                    <img src="images/shop/single-1.jpg" alt="" />
                  </li>
                  <li>
                    <img src="images/shop/single-2.jpg" alt="" />
                  </li>
                  <li>
                    <img src="images/shop/single-3.jpg" alt="" />
                  </li>
                  <li>
                    <img src="images/shop/single-4.jpg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-5 col-md-offset-1">
              <div class="title mt-0">
                <h2>{ product.name }<span class="red-dot"></span></h2>
                <p class="m-0">Free Shipping Worldwide</p>
              </div>
              <div class="single-product-price">
                <div class="row">
                  <div class="col-xs-6">
                    {
                      product.sellPrice ? <h3><del>{ product.regularPrice } TK</del><span>{ product.sellPrice } TK</span></h3> : <h3><span>{ product.regularPrice } TK</span></h3>
                    }  
                  </div>
                  <div class="col-xs-6 text-right">
                    <span class="rating-stars">
                      {
                        <Rating rating={ product.rating } />
                      }
                    </span>
                  </div>
                </div>
              </div>
              <div class="single-product-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellat iste natus at impedit quo consequuntur, quam, vel saepe voluptatum minus temporibus excepturi aspernatur labore molestiae fugit tempora veritatis unde.</p>
              </div>
              <div class="single-product-add">
                <form action="https://" class="inline-form">
                  <div class="input-group">
                    <input type="number" placeholder="QTY" value="1" min="1" class="form-control" /><span class="input-group-btn"><button type="button" class="btn btn-color">Add to Cart<i class="ti-bag"></i></button></span>
                  </div>
                </form>
              </div>
              <div class="single-product-list">
                <ul>
                  <li><span>Sizes:</span> S, M, L, XL</li>
                  <li><span>Colors:</span> Blue, Red, Grey</li>
                  <li><span>Category:</span><a href="https://">{  }</a>
                  </li>
                  <li><span>Tags:</span><a href="https://">Outfit</a>-<a href="https://">Jeans</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="product-tabs">
          <ul role="tablist" class="nav nav-tabs">
            <li role="presentation" class="active"><a href="https://first-tab" role="tab" data-toggle="tab">Description</a>
            </li>
            <li role="presentation"><a href="https://second-tab" role="tab" data-toggle="tab">Sizes</a>
            </li>
            <li role="presentation"><a href="https://third-tab" role="tab" data-toggle="tab">Reviews (3)</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="first-tab" role="tabpanel" class="tab-pane active">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum hic doloribus dolore explicabo, a voluptate optio culpa, aut nulla voluptatem sit nam sed molestias adipisci! Eius nulla beatae, quidem quae. Praesentium eveniet ullam quos
                accusamus, ea nemo cupiditate. Nemo harum sit, necessitatibus voluptates, sapiente dolorum minima, placeat explicabo consequuntur at neque deserunt.</p>
              <p>Quidem illum, enim aut, minus nesciunt, distinctio inventore sunt autem numquam eveniet non asperiores unde! Corrupti modi minima doloremque, illum aperiam nemo.</p>
            </div>
            <div id="second-tab" role="tabpanel" class="tab-pane">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th class="upper">Size</th>
                    <th class="upper">Bust (CM)</th>
                    <th class="upper">Waist (CM)</th>
                    <th class="upper">Hips (CM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>XS</td>
                    <td>78</td>
                    <td>60</td>
                    <td>83</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>80</td>
                    <td>62</td>
                    <td>86</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>88</td>
                    <td>65</td>
                    <td>88</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="third-tab" role="tabpanel" class="tab-pane">
              <div id="comments">
                <ul class="comments-list">
                  <li class="rating">
                    <h5 class="upper">Jesse Pinkman - <span class="rating-stars"><i class="ti-star full"></i><i class="ti-star full"></i><i class="ti-star full"></i><i class="ti-star full"></i><i class="ti-star"></i></span></h5><span class="comment-date">Posted on 29 September at 10:41</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatem quo sit. Sint fugit quidem totam similique suscipit animi veniam reiciendis, unde facere quia, optio, at ad possimus perferendis asperiores.</p>
                  </li>
                  <li class="rating">
                    <h5 class="upper">Rust Cohle - <span class="rating-stars"><i class="ti-star full"></i><i class="ti-star full"></i><i class="ti-star full"></i><i class="ti-star full"></i><i class="ti-star"></i></span></h5><span class="comment-date">Posted on 29 September at 10:41</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aspernatur vero dolorum asperiores ratione obcaecati atque quidem aliquid dicta illo, quod, similique suscipit maiores, aperiam expedita cum. Ut fugiat, dolores.</p>
                  </li>
                  <li class="rating">
                    <h5 class="upper">Arya Stark - <span class="rating-stars"><i class="ti-star full"></i><i class="ti-star full"></i><i class="ti-star full"></i><i class="ti-star full"></i><i class="ti-star full"></i></span></h5><span class="comment-date">Posted on 29 September at 10:41</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aspernatur vero dolorum asperiores ratione obcaecati atque quidem aliquid dicta illo, quod, similique suscipit maiores, aperiam expedita cum. Ut fugiat, dolores.</p>
                  </li>
                </ul>
              </div>
              <div id="respond">
                <h5 class="upper">Leave a rating</h5>
                <div class="comment-respond">
                  <form class="comment-form">
                    <div class="form-double">
                      <div class="form-group">
                        <input name="author" type="text" placeholder="Name" class="form-control" />
                      </div>
                      <div class="form-group last">
                        <input name="email" type="text" placeholder="Email" class="form-control" />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-select">
                        <select class="form-control">
                          <option value="" selected="selected">Chose a rating</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <textarea placeholder="Comment" class="form-control"></textarea>
                    </div>
                    <div class="form-submit text-right">
                      <button type="button" class="btn btn-color-out">Post Comment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="related-products">
          <h5 class="upper">Related Products</h5>
          <div class="row">
            {
              relProducts.map(data => 
                product_slug !== data.slug ?
                <div class="col-md-3 col-sm-6">
                  <div class="shop-product">
                    <div class="product-thumb">
                      <a href="https://">
                        <img src={ data.proLink } alt="" />
                      </a>
                    </div>
                    <div class="product-info">
                      <h4 class="upper"><a href="https://">{ data.name }</a></h4><span>{ data.sellPrice } BDT</span>
                      <div class="save-product"><a href="https://"><i class="icon-heart"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                : ''
              )
            }
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct