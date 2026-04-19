// const p1 = Promise.resolve(1);

// const p2 = Promise.reject(Error('new error'));

// // p1.then((resolve) => console.log(resolve));

// // p2.catch((error) => console.log(error));


// Promise.all([p1, p2])
//     .then((values) => console.log(values))
//     .catch((error) => console.log(error));




// Promise.race([p1, p2]) // at least 1
//     .then((values) => console.log(values))
//     .catch((error) => console.log(error));



// ASYNC AWAIT
getItems();


async function getItems() {
    try {
        await getA();
        await getB();
    } catch (err) {

        console.log(err.message);
    }



}

function getA() {

    return new Promise((resolve, reject) => {
        setTimeout(
            () => {

                resolve(console.log('got A'));

            }, 2000,
        )

    })


}


function getB() {
    setTimeout(
        () => {

            console.log('got B')

        }, 2000,
    )

}