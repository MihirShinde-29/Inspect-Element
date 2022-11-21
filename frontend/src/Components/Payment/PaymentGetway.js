import React from 'react'
import axios from "axios"
const PaymentGetway = () => {

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://localhost:3500/payment/getkey", {

        })
        const { data: { order } } = await axios.post("http://localhost:3500/payment", {
            amount
        })

        const options = {
            "key": key, // Enter the Key ID generated from the Dashboard
            "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "BHUMIKA",
            "description": "Test Transaction",
            "image": "http://localhost:3500/payment/logo",
            "order_id": order.id ,//This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:3500/payment/verify",
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#121212"
            }
        };

        const razor = new window.Razorpay(options);
        razor.open();
    }


    return (
        <div>BUY NOW
            <button onClick={() => checkoutHandler(Number(1000))}>
                lelo !!
            </button>
        </div>
    )
}

export default PaymentGetway