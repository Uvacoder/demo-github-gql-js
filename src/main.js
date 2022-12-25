import { graphql } from "@octokit/graphql";

const GH_TOKEN = process.env.GH_TOKEN || ''

const REPO_QUERY = `
  {
    repository(owner: "octokit", name: "graphql.js") {
      issues(last: 3) {
        nodes {
          title
        }
      }
    }
  }
`

function setupAuth() {
  if (!GH_TOKEN) {
    throw new Error('GH_TOKEN must be defined')
  }
  
  return graphql.defaults({
    headers: {
      authorization: `token ${GH_TOKEN}`,
    },
  });
}

const gql = setupAuth()

const { repository } = await gql(REPO_QUERY);
console.log(JSON.stringify(repository, null, 4))
