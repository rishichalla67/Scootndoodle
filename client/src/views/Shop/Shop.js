import React from 'react';
import './Shop.css';
import PaypalExpressBtn from 'react-paypal-express-checkout';


// const express = require('express');
// const router = express.Router();


const CLIENT = {
    sandbox: 'AWimmU_UUXh8faUJWKgLQ47PzwMS1stS7WmkfJpR2iKUl8SY1ax5tK2w1orGoeTGncepFlB3mKhjyqpS',
    production: 'xxxxxxxxx',
};

class Shop extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log('Successful payment!', payment);
            alert('Transaction completed! Thank you for purchasing our product!');
        };
        const onError = (error) =>
            console.log('Erroneous payment OR failed to load script!', error);
        const onCancel = (data) => {
            console.log('Cancelled payment!', data);
            alert('Payment Cancelled')
        };


        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = 9.95; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout

        return (


            <div className="button">
                <a className={'home'} href="http://localhost:3000/Home"><button className="homeButton"><span>Home </span></button></a>
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


        );
    }
}
export default Shop;
