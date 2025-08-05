// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 2000);
// console.log("C");

let firstName = "Aptech";
let lastName = "";


const fullName = new Promise((resolve, reject) => {
    setTimeout(() => {
        // lastName = "Pakistan"
        resolve("Pakistan");
    }, 2000)
})
// .then(() => {
//     console.log(firstName + " " + lastName);
// })
// .then(() => {
//     console.log("Promise Fulfilled Successfully");
// })

const displayFullname = async() => {
    let data = await fullName;

    console.log(firstName + " " + data);
}

displayFullname();