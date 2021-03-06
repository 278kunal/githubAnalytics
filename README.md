# githubAnalytics
A web application with insights into Github data. Gives data of popular repositories on github.

## Setup

- see the `package.json`
- type `npm install`
- type `bower install`
- request a **Personal access token** as described below
- open console type `gulp serve`

### Requesting a personal access token 

- First, go to your GitHub profile settings and define a **Personal access token** (https://github.com/settings/tokens)
- Then, add the token to the environment variables (eg: `export TOKEN_GITHUB_DOT_COM=token_string`)
- Now you can get the token like that: `process.env.TOKEN_GITHUB_DOT_COM`

```javascript
var GitHubClient = require('../libs/GitHubClient.js').GitHubClient;

var githubCliDotCom = new GitHubClient({
  baseUri:"https://api.github.com",
  token: process.env.TOKEN_GITHUB_DOT_COM
});

```

- if you use GitHub.com, `baseUri` has to be set with `https://api.github.com`

### Use the GitHub client

For example, you want to get the information about a user:
(see https://developer.github.com/v3/users/#get-a-single-user)

```javascript
var githubCliDotCom = new GitHubClient({
  baseUri:"https://api.github.com",
  token: process.env.TOKEN_GITHUB_DOT_COM
});

var searchString = "q=stars:>1&s=stars&type=Repositories";
githubCliDotCom.getData({
         path: `/search/repositories?${searchString}`
       })
      .then(response => {
        console.log(response.data);
     });

```

## Recipes (and features)

More samples to come
**Will be implementing oauth2.0 login so as to remove dependency on manually requesting Personal Access Token every time**

## Screenshots

- ![Screenshot-1](https://cloud.githubusercontent.com/assets/8478814/26626327/885ec86c-4614-11e7-8617-ba4c89771850.png)
- ![Screenshot-2](https://cloud.githubusercontent.com/assets/8478814/26626333/8f65603a-4614-11e7-92b3-aefb56ded38c.png)
