import React from 'react'
import Container from 'react-bootstrap/Container'
//import { render } from 'react-dom'
import Cards from 'react-credit-cards';
import './Cart.css'
// import PaypalExpressBtn from "react-paypal-express-checkout";
// import CreditCardInput from 'react-credit-card-input';
import 'react-credit-cards/es/styles-compiled.css';

// const CLIENT = {
//     sandbox: 'AWimmU_UUXh8faUJWKgLQ47PzwMS1stS7WmkfJpR2iKUl8SY1ax5tK2w1orGoeTGncepFlB3mKhjyqpS',
//     production: 'xxxxxxxxx',
// };

class Cart extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/Success', {
            method: 'POST',
            body: data,
        });
    }

    render() {
        // const onSuccess = (payment) => {
        //     console.log('Successful payment!', payment);
        //     alert('Transaction completed! Thank you for purchasing our product!');
        //     this.props.history.push('/Success');
        // };
        // const onError = (error) =>
        //     console.log('Erroneous payment OR failed to load script!', error);
        // const onCancel = (data) => {
        //     console.log('Cancelled payment!', data);
        //     alert('Payment Cancelled')
        // };


        return(
            <Container className = 'container'>
                <div>
                    <nav className='navBar'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href={"/Home"}>Home</a></li>
                            <li className="breadcrumb-item "><a href={"/ShopPreview"}>Shop</a></li>
                            <li className="breadcrumb-item active"><a href="#">Cart</a></li>
                        </ol>
                    </nav>
                    <h1 className='color'>
                        Your Cart
                    </h1>
                    <hr/>

                    <table className="table table-sm">

                        <tbody>
                        <tr>

                            <th>Product</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td scope="row">Hippo</td>
                            <td>Green</td>
                            <td>Medium</td>
                            <td>1</td>
                            <td>9.95</td>
                        </tr>


                        </tbody>
                    </table>
                    <div id="PaymentForm">
                        <Cards
                            cvc={this.state.cvc}
                            expiry={this.state.expiry}
                            focused={this.state.focus}
                            name={this.state.name}
                            number={this.state.number}
                        />
                        <form onSubmit={this.handleSubmit}>
                            <input id={'CardNum'}
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                pattern="[\d| ]{16,22}"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <a><br/></a>
                            <input id={'name'}
                                type="tel"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <a><br/></a>
                            <input id={'expiry'}
                                type="teli"
                                name="expiry"
                                pattern="\d\d/\d\d"
                                placeholder="Valid thru"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <input id={'cvc'}
                                type="teli"
                                name="cvc"
                                placeholder="CVC"
                                pattern="\d{3,4}"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <a><br/></a>
                            <button className={'button'}><span>Submit</span></button>
                        </form>
                    </div>

                </div>
            </Container>
        );
    };
}
export default Cart;

