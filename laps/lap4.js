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
    personalInfo: {
        name,
        contact: { email },
    },
} = user;

function getUserInfo(user) {
    const {
        personalInfo: {
            name,
            contact: { email },
        },
    } = user;
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }