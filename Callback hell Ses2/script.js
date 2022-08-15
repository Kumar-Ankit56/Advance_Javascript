//1. How settime out works with callback funtion in javascript.
// console.log("Namaste");
// setTimeout(() => {
//     console.log("ankit");
// }, 5000);

// console.log("javascript");
// console.log("season 2");

//2. Another example of callback is it is the example of the ecommerce website where how we maintain the code for the cart. like fitstly we add some prod. in the cart then we processed for the payment then we do ordersummery and then we do the udatewallet here all the operation are depeand on one after another let see how we maintain these

const cart = ["shoes", "kurta", "jeans"];

api.createOrder(cart, function (params) {
  api.proceedtoPayment(function (params) {
    api.showOrdersummery(function (params) {
      api.updatewallet();
    });
  });
});

//3. Inversion of control 2nd problem it is something where you loose the control from the code. 
//we are blindly trust the createorder api as after finishing its job it will call the proceedtopayment api what if it doesn't call it and may createOrder can be in someothere service what is it call twice 
api.createOrder(cart, function (params) {
  api.proceedtoPayment(function (params) {});
});
