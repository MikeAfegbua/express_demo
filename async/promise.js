// const newPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         resolve(1); // Pending => resolve, fulfilled
//         // reject(new Error('message')); // Pending => reject, rejected

//     }, 2000)
// });

// newPromise.then(

//     result => console.log('result', result)
// ).catch(error => console.log('error', error.message))

// newPromise.then(
//     (result) => {
//         console.log('Result:', result);
//     },
//     (error) => {
//         console.log('Error:', error);
//     }
// );




console.log('Before');




getUser(1).then(
    (user) => getUserRepos(user.gitHubUsername)
).then(
    (repos) => getCommits(repos[0])

).then(
    (commits) => console.log(commits)
).catch(error => console.log('error', error.message))



console.log('After');



function getUserReposCallback(user) {
    getUserRepos(user.gitHubUsername, getCommitsCallback);
}



function getCommitsCallback(repos) {
    getCommits(repos[0], displayCommits);
}


function displayCommits(commits) {
    console.log('Commits', commits);
}




//
function getUser(id) {

    return new Promise((resolve, reject) => {
        setTimeout(
            () => {

                console.log('Reading a user from a database...');
                resolve({ id: id, gitHubUsername: 'mosh' });

            }, 2000,
        )

    })


}


function getUserRepos(username) {

    return new Promise((resolve, reject) => {
        setTimeout(
            () => {

                console.log(`Reading ${username} repositories...`);
                resolv(['repo1', 'repo 2', 'repo3']);

            }, 2000,
        )

    })


}


function getCommits(repo) {

    return new Promise((resolve, reject) => {
        setTimeout(
            () => {

                console.log(`Reading commits from ${repo}...`);
                resolve(['commit1', 'commit2', 'commit3']);

            }, 2000,
        )

    })


}



