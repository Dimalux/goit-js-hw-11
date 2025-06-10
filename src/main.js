




// const list = document.querySelector(".list");  
// const params = new URLSearchParams({
//     _limit: 4,
//     _page: 2
// })


// fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
// .then(res => {console.log("then1", res);
//     if (!res.ok) {
//         throw new Error("ER")
//     }
//     return res.json();
// })
// .then(data => {
//     console.log("then2", data);    
//     list.insertAdjacentHTML("beforeend", createData(data));
// })
// .catch(error => console.log("catch", error));


// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then(res => {console.log("then1", res);
//     if (!res.ok) {
//         throw new Error("ER")
//     }
//     return res.json();
// })
// .then(data => {
//     console.log("then2", data);    
//     // list.insertAdjacentHTML("beforeend", createData(data));
// })
// .catch(error => console.log("catch", error));


// function createData(arr) {
// return  arr.map(({ id, title, completed }) => `<li data-id="${id}" class="list-item">
// <input type="checkbox" ${completed && "checked"}/>
// <p>${title}</p>
// </li>`
// ).join("")
// }


// function foo(url) {
//     return fetch(url)
//     .then(res => {
//         if(!response.ok) {
// throw new Error("No OK");
//     } 
// return res.json()
// })} 

// foo("https://jsonplaceholder.typicode.com/users")


import axios from 'axios';

const API_KEY = "50787945-1edbab8bb6a94afd781f3e3fd";

const params = new URLSearchParams({
key: API_KEY,
q: "yellow+flower",
image_type: "photo",
orientation: "horizontal",
safesearch: true
});

console.log(params.toString());


fetch(`https://pixabay.com/api?${params}`)