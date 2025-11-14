//bai 1
//function 1:
function multiply(a, b) {
    return a * b;
}
const multiply = (a, b) => a * b;
//funciton 2:
function isPositive(number) {
    return number >= 0;
}
const isPositive = (number) => number >= 0;
//funciton 3:
function getRandomNumber() {
    return Math.random();
}
const getRandomNumber = () => Math.random();
//funciton 4:
document.addEventListener("click", function () {
    console.log("Clicked!");
});
document.addEventListener("click", () => {
    console.log("Clicked!");
});
//bai 2
function createUser(name = "Anonymous", age = 18, isAdmin = false) {
    return {
        name: name,
        age: age,
        isAdmin: isAdmin,
    };
}
//bai 3
function mergeArrays(...arrays) {
    return [].concat(...arrays);
}
console.log(mergeArrays([1, 2], [3, 4], [5]));
// Hàm sumAll tính tổng tất cả tham số truyền vào
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4));
// Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định
function createProduct({ name = "Laptop", price = 1500, quantity = 1 } = {}) {
    return { name, price, quantity };
}
console.log(createProduct({ name: "Laptop", price: 1500 }));
console.log(createProduct());
//bai 4
function shoppingCart(customerName, ...products) {
    return {
        customer: customerName,
        items: products,
        totalItems: products.length
    };
}
const order = shoppingCart(
    "Nguyễn Quốc Trung",
    "Chuot",
    "ban phim",
    "man hinh"
);
console.log(order);