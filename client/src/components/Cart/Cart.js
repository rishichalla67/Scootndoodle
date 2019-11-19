import React from 'react'
import Footer from '../../components/Footer/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import './Cart.css'
import PaypalExpressBtn from "react-paypal-express-checkout";

const CLIENT = {
    sandbox: 'AWimmU_UUXh8faUJWKgLQ47PzwMS1stS7WmkfJpR2iKUl8SY1ax5tK2w1orGoeTGncepFlB3mKhjyqpS',
    production: 'xxxxxxxxx',
};

class Cart extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log('Successful payment!', payment);
            alert('Transaction completed! Thank you for purchasing our product!');
            this.props.history.push('/Shop/Success');
        };
        const onError = (error) =>
            console.log('Erroneous payment OR failed to load script!', error);
        const onCancel = (data) => {
            console.log('Cancelled payment!', data);
            alert('Payment Cancelled')
        };

        let env = 'sandbox';
        let currency = 'USD';
        let total = 9.95;
        return(
            <Container className = 'container'>
                <div>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Home">Home</a></li>
                            <li class="breadcrumb-item "><a href="/ShopPreview">Shop</a></li>
                            <li class="breadcrumb-item active"><a href="#">Cart</a></li>
                        </ol>
                    </nav>
                    <h1 className='color'>
                        Your Cart
                    </h1>
                    <hr/>

                    <table class="table table-sm">

                        <tbody>
                        <tr>

                            <td>Product</td>
                            <td>Color</td>
                            <td>Size</td>
                            <td>Quantity</td>
                            <td>Price</td>
                        </tr>
                        <tr>
                            <th scope="row">Hippo</th>
                            <td>Green</td>
                            <td>Medium</td>
                            <td>1</td>
                            <td>9.95</td>
                        </tr>


                        </tbody>
                    </table>

                    <div>
                            <PaypalExpressBtn
                                env={env}
                                client={CLIENT}
                                currency={currency}
                                total={total}
                                onError={onError}
                                onSuccess={onSuccess}
                                onCancel={onCancel}

                            />
                    </div>
                </div>
            </Container>
        );
    };
}
export default Cart;
