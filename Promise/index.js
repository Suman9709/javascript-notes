const cart = ["shoe", "shirt", "pant", "bulb"];

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWallet()
        });
    });
})




const promise = createOrder(cart);
promise.then(function (orderId) {
    proceedToPayment(orderId)
}); //this is more efficient than above as we attach this callback function with the promise object when the promise is filled with data it automatically calls the callback function


// const GITHUB_API ="https://api.github.com/users/Suman9709" 
// const user = fetch(GITHUB_API);
// console.log(user);


//Promise chaining comes to picture

// we can also write the above example by this way

createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })
    .then(function () {
        return updateWallet()
    })