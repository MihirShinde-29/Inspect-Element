import React, { useEffect, useState } from 'react'
import { ApiCalls } from './ApiCalls'
const Payment = () => {

  const [values, setValues] = useState({
    amount: 0,
    orderId: '',
    error: '',
    sucess: false
  })

  useEffect(() => {
    createOrder()
  }, [])

  const createOrder = () => {
    ApiCalls().then(res => {
      if (res.error) {
        setValues({ ...values, error: res.error, success: false })
      }
      else {
        setValues({ ...values, error: "", success: true, amount: res.amount, orderId: res.id })

      }
    })
  }

  useEffect(() => {
    if (values.amount && values.orderId) {
      showForm();
    }
  }, [values.amount]);

  const showForm = () => {
    const form = document.createElement('form')
    form.setAttribute('action', "http://localhost:3500/payment/callback");
    form.setAttribute('method', "POST");
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.setAttribute("data-key", "rzp_test_7Nblv9LSdJE0uu");
    script.setAttribute("data-amount", values.amount);
    script.setAttribute("data-name", "HACKERRR");
    script.setAttribute("data-prefill.contact", "420");
    script.setAttribute("data-prefill.email", "b@gmail.com");
    script.setAttribute("data-order_id", values.orderId);
    script.setAttribute("data-prefill.name", "BHUMIKA ");
    script.setAttribute("data-image", `"https://localhost:3500/payment/logo`);
    script.setAttribute("data-buttontext", "Buy NOW!!!");
    document.body.appendChild(form);
    form.appendChild(script);
    const input = document.createElement("input");
    input.type = "hidden";
    input.custom = "Hidden Element";
    input.name = "hidden";
    form.appendChild(input);
  }
  return (
    <div>Payment</div>
  )
}

export default Payment