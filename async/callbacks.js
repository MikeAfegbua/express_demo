// callbacks
// promises
// async/await (promises)

console.log('Before');


//

// getUser(1, (user) => {

//     console.log('user', user);

//     getUserRepos(user.gitHubUsername, (repos) => {
//         console.log('repos', repos);
//     });


// });

// the nested structure can be flattened to look synchronous. 


getUser(1, getUserReposCallback);

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
function getUser(id, callback) {

    setTimeout(
        () => {

            console.log('Reading a user from a database...');
            callback({ id: id, gitHubUsername: 'mosh' });

        }, 2000,
    )

}


function getUserRepos(username, callback) {

    setTimeout(
        () => {

            console.log(`Reading ${username} repositories...`);
            callback(['repo1', 'repo 2', 'repo3']);

        }, 2000,
    )

}


function getCommits(repo, callback) {

    setTimeout(
        () => {

            console.log(`Reading commits from ${repo}...`);
            callback(['commit1', 'commit2', 'commit3']);

        }, 2000,
    )

}


