import styles from './buyTickets.css'
import axios from 'axios'
import React from 'react';
import { useEffect } from 'react';



const BuyTickets = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
      },[])

  const [responseId, setResponseId] = React.useState("");
 const [responseState, setResponseState] = React.useState([]);

 const loadScript = (src) => {
   return new Promise((resolve) => {
    const script = document.createElement("script");

    script.src = src;

    script.onload = () => {
      resolve(true);
    }
    script.onerror = () => {
      resolve(false);
    }

    document.body.appendChild(script);
  })
}

const createRazorpayOrder = (amount) => {
  let data = JSON.stringify({
    amount: amount * 100,
    currency: "INR"
  })

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:5000/orders",
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  }

  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data))
    handleRazorpayScreen(response.data.amount)
  })
  .catch((error) => {
    console.log("error at", error)
  })

}

const handleRazorpayScreen = async(amount) => {
  const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js")

  if(!res)
  {
    alert("Some error at razorpay screen loading")
    return;
  }

const options = {
  key: '',
  amount: amount,
  currency: "INR",
  name: "papaya coders",
  description:"payment to papaya coders",
  image:"https://papayacoders.com/demo.png",
  handler: function (response){
    setResponseId(response.razorpay_payment_id)
  },
  prefill: {
    name: "papaya coders",
    email: "papayacoders@gmail.com"
  },
  theme: {
    color: "#F4C430"
  }
}

const paymentObject = new window.Razorpay(options)
paymentObject.open()
}

const paymentFetch = (e) => {
  e.preventDefault();

  const paymentId = e.target.paymentId.value;

  axios.get(`https://localhost:5000/payment/${paymentId}`)
  .then((response) => {
    console.log(response.data);
    setResponseState(response.data)
  })
  .catch((error) => {
    console.log("error occurs", error)
  })
}

  return (
    <>
<div className='buyTickets'>
  <h1>Buy Tickets</h1>
<button onClick={() => createRazorpayOrder(100)}>Payment of 100 Rs.</button>
{responseId && <p>{responseId}</p>}
<h3>This is a payment verification form</h3>
<form onSubmit={paymentFetch}>
  <input type="text" name="paymentId"/>
  <button type="submit">Fetch Pyament</button>
  {responseState.length !==0 && (
    <ul>
      <li>Amount: {responseState.amount / 100} Rs.</li>
      <li>Currency: {responseState.currency}</li>
      <li>Status: {responseState.status}</li>
      <li>Method: {responseState.method}</li>
    </ul>
  )}
</form>
</div>
</>
  );
}
  
  export default BuyTickets;

  
