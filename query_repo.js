#query the named repository for details of the stargazers ("likes")
{
  repository(owner: "zobbolino", name:"graphQLStuff") {
    id
    shortDescriptionHTML
    createdAt
    commitComments(first: 10) {
      edges {
        node {
          id
          body
          bodyText
          bodyHTML
        }
      }
    }
    viewerHasStarred
    stargazers(first:5){
      totalCount
      nodes{
        id
        name
        login
      }
    }
  }
}
