/**
  nhung phuong thuc hoat dong bất đồng bộ:
  {setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame}
 */



// setTimeout(function () {
//     console.log(1)
// }, 1000);
// console.log(2)


//PROMISE

// var promise = new Promise(
//     //Executor function
//     function (resolve, reject) {
//         //logic
//         //thanh cong: resolve()
//         //that bai: reject()
//         // resolve({
//         //     id: 1,
//         //     name: "JS"
//         // });
//         resolve()
//     }
// );
// promise
//     .then(function () {
//         console.log(1);
//     })
//     .then(function () {
//         console.log(2);
//     })
//     .then(function () {
//         console.log(3);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function () {
//         console.log("Xong!");
//     })
// function Sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms);
//     });
// }
// Sleep(1000)
//     .then(function () {
//         console.log(1);
//         return Sleep(1000);
//     })
//     .then(function () {
//         console.log(2)
//         return Sleep(1000)
//     })
//     .then(function () {
//         console.log(3)
//     })
//     .finally(function () {
//         console.log("xong")
//     })


//1.Promise.resolve
//2.Promise.reject
//3.Promise.all

var promise1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([1, 2]);
    }, 2000);
});
var promise2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([3, 4]);
    }, 3000);
});
Promise.all([promise1, promise2])
    .then(function ([result1, result2]) {
        console.log(result1.concat(result2))
    })

