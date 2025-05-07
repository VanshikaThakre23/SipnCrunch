// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// //placing user order for frontend 
// const placeOrder = async(req,res) => {

//     const frontend_url = "http://localhost:5173"

// try {
//     const newOrder = new orderModel({
//         userId:req.body.userId,
//         items:req.body.items,
//         amount:req.body.amount,
//         address:req.body.address
//     })
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

//     const line_items = req.body.items.map((item)=>({
//         price_data:{
//             currency:"inr",
//             product_data:{
//                 name:item.name
//             },
//             unit_amount:item.price*100*80
//         },
//         quantity:item.quantity
//     }))

//     line_items.push({
//         price_data:{
//             currency:"inr",
//             product_data:{
//                 name:"Delivery Charges"
//             },
//             unit_amount:2*100*80
//         },
//         quantity:1
//     })

//     const session = await stripe.checkout.sessions.create({
//     line_items:line_items,
//     mode:"payment",
//     success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//     cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
//     })

//     res.json({success:true,session_url:session.url})

// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
// }
// }
// export{placeOrder};

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import { client } from "../paypalClient.js";
import paypal from "@paypal/checkout-server-sdk";

const frontend_url = "http://localhost:5173";

const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // Total amount including delivery
    let totalAmount = req.body.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    totalAmount += 2; // delivery charge ₹2

    // Create PayPal Order
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",        // ← change INR to USD
  value: (totalAmount / 83).toFixed(2),  // ← Convert Rs to USD approx (1 USD ≈ ₹83)
          },
        },
      ],
      application_context: {
        return_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
      },
    });

    const response = await client.execute(request);

    // Get approval URL from PayPal response
    const approvalUrl = response.result.links.find((link) => link.rel === "approve").href;

    res.json({ success: true, session_url: approvalUrl });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const verifyOrder = async (req,res) => {
const{orderId,success }= req.body;
try {
    if (success=="true") {
        await orderModel.findByIdAndUpdate(orderId,{payment:true});
        res.json({success:true,message:"Paid"})
    }else{
        await orderModel.findByIdAndUpdate(orderId);
        res.json({success:false,message:"Not Paid"})
        
    }
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
}
}

//user orders for frontend 
const userOrders = async(req,res)=>{
try {
  const orders = await orderModel.find({userId:req.body.userId});
  res.json({success:true,data:orders})
} catch (error) {
  console.log(error);
  req.json({success:false,message:"Error"})
}
}

export { placeOrder,verifyOrder,userOrders };
