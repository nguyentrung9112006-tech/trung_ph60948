// bài 1
function getFirstLast(array) {
    const [first, ...rest] = array;
    const last = array.slice(-1);
    return [first, last];
}
const array = [1, 2, 3, 4];
// console.log(getFirstLast(array));
// bai 2
const user = {
    id: 1,
    personalInfo: {
        name: "javascript",
        contact: {
            email: "javascript@email.com",
            phone: "123-456-7890",
        },
    },
};

const {
    personalInfo: { name, email, phone },
} = contact;
console.log(email, phone);

function getUserInfo({ name, email, phone = "Unknown" }) {
    console.log(`name: ${name} email: ${email} sdt: ${phone}`);
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }