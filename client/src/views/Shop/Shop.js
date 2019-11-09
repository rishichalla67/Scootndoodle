import React from 'react';
import  { Redirect } from 'react-router-dom'
import './Shop.css'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Container from "react-bootstrap/Container";

// const express = require('express');
// const router = express.Router();


const CLIENT = {
    sandbox: 'AWimmU_UUXh8faUJWKgLQ47PzwMS1stS7WmkfJpR2iKUl8SY1ax5tK2w1orGoeTGncepFlB3mKhjyqpS',
    production: 'xxxxxxxxx',
};

class Shop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const onSuccess = (payment) => {
            console.log('Successful payment!', payment);
            alert('Transaction completed! Thank you for purchasing our product!');
            //alert(payment.paymentToken);
        //
        //         const {paid, cancelled, payerID, paymentID, paymentToken, returnUrl} = req.body;
        //
        //         payment.paid = paid;
        //         payment.cancelled = cancelled;
        //         payment.payerID = payerID;
        //         payment.paymentID = paymentID;
        //         payment.paymentToken = paymentToken;
        //         payment.returnUrl = returnUrl;
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
            <body>
            <div>
                <a href="http://localhost:3000/Home"><button className="homeButton"><span>Home </span></button></a>
            </div>
            <img className="car" src="data:image/jpeg;base64,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" alt="Italian Trulli"/>

            <div className="button">
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
            </body>


        );
    }
}
export default Shop;
