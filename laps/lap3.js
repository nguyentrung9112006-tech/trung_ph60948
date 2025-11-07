// Bài 1
const multiply = (a, b) => a * b;
const isPositive = (number) => number >= 0;
const getRandomNumber = () => Math.random();

document.addEventListener("click", () => {
    console.log("Clicked!");
});
// Bài 2
const createUser = (name = "trung", age = 18, isFinite = false) => {
    return {
        name,
        age,
        isFinite,
    };
};
console.log(createUser());
