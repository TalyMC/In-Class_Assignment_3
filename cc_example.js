//Task 5 Finding an Object in an Array
let orders = [
    {id:101, customer:"Alice", total: 300},
    {id:102, custoemr: "Bob", total: 450},
    {id:103, customer:"Charlie", total:200}
];

function findOrder(orders, orderID) {
    return orders.find(order => order.id === orderID);
};

some_order= findOrder(orders, 101)
console.log(`${some_order.customer} has an order Id: ${some_order.id}, with a total of ${some_order.total}`)