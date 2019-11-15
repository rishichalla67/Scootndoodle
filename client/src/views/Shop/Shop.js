import React from 'react';
import './Shop.css';
import Navigation from "../../components/Navigation/Navigation";
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Alert } from 'reactstrap';


const CLIENT = {
    sandbox: 'AWimmU_UUXh8faUJWKgLQ47PzwMS1stS7WmkfJpR2iKUl8SY1ax5tK2w1orGoeTGncepFlB3mKhjyqpS',
    production: 'xxxxxxxxx',
};

class Shop extends React.Component {

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

        return (
            <body>
                <Navigation />
                <h1 className={'view'}>Shop View</h1>
                <div className="button">

                    <a className='pay'>
                        <PaypalExpressBtn
                            env={env}
                            client={CLIENT}
                            currency={currency}
                            total={total}
                            onError={onError}
                            onSuccess={onSuccess}
                            onCancel={onCancel}

                        />
                    </a>
                </div>
            </body>
        );
    }
}
export default Shop;
