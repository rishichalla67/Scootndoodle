import React from 'react'
import Footer from '../../components/Footer/Footer'
import productPhotos from '../../assets/DSC_0056.JPG'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'
import './ShopPreview.css'
import { Link } from 'react-router-dom';

const price = 9.95;

class ShopPreview extends React.Component {
    render() {
        return(
            <Container className = 'container'>

                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/Home">Home</a></li>
                        <li class="breadcrumb-item active"><a href="/ShopPreview">Shop</a></li>


                    </ol>
                </nav>
                <h1 className='color'>
                    DexteDoodle Shop
                </h1>




                <div className="shop-container">
                    <div className="card">
                        <div className="wrapper row">
                            <div className="col-md-6">
                                <img className='resize' src={productPhotos} />
                            </div>
                            <div className="col-md-6">
                                <h3 className="product-title">Hippo</h3>
                                <p className="product-description">Description of Product</p>
                                <b>Current Price: ${price}</b>

                                <div className="action"> Size:
                                    <button className="size" type="button">M</button>
                                    <button className="size" type="button">L</button>
                                </div>


                                <div className="action">Colors:
                                    <button className="blue" > </button>
                                    <button className="green" > </button>
                                </div>

                                <div className="action">
                                    <button className="add-to-cart btn btn-default" type="button">Add to Cart</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shop-container">
                    <div className="card">
                        <div className="wrapper row">
                            <div className="col-md-6">
                                <img className='resize1' src={productPhotos} />
                            </div>
                            <div className="col-md-6">
                                <h3 className="product-title">Car</h3>
                                <p className="product-description">Description of Product</p>
                                <b>Current Price: ${price}</b>

                                <div className="action"> Size:
                                    <button className="size" type="button">M</button>
                                    <button className="size" type="button">L</button>
                                </div>

                                <div className="action">Colors:
                                    <button className='blue' > </button>
                                    <button className='green' > </button>
                                </div>

                                <div className="action">
                                    <button className="add-to-cart btn btn-default" type="button">Add to Cart</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/Cart">
                        <button className='format'>Proceed to Cart</button>
                    </Link>
                </div>



            </Container>
        );
    };
}
export default ShopPreview;
