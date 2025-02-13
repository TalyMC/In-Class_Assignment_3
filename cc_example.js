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

//Task 6 Using Object Method
let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({name, quantity});
    }
};

inventory.addItem("Monitor", 5);
inventory.addItem ("Keyboard", 10);
console.log(inventory.items);

//Task 6 Example 2
let inventories = {
    items: [],
    addItem(name, quantity) {
        this.items.push({name, quantity});
    },
    removeLatestItem() {
        this.items.pop();
    },
    removeFirstItem () {
        this.items.shift();
    }
};
inventories.addItem("Monitor", 5);
inventories.addItem ("Keyboard", 10);
inventories.addItem("Mouse",3);
console.log(inventories.items);//Viewing all items

inventories.removeLatestItem();
console.log(inventories.items);//Viewing the first two items

inventories.removeFirstItem();
console.log (inventories.items);//viewing the middle item

//Note to self to make everything "green"= ctrl + /

//Task 7