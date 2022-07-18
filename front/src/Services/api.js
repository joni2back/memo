export const graphQL = (query, method = 'POST') => fetch('http://localhost:80/graphql', {
    method: method,
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({query: query})
  })
  .then(r => r.json())
  .catch(console.error);

export const getMemotests = () => graphQL(`{
    memotests {
        id
        name
        gameSessions {
        id, state
        }
    }
}`);

export const getGameSession = (sessionId) => graphQL(`{
    game_session (id: ${sessionId}) {
        id
        number_of_pairs
        memotest {
            id
            name
            images { 
                id
                url
            }
        }
    }
}`);

export const createGameSession = (memotestId) => graphQL(`mutation {
    createGameSession(
        memotest_id: ${memotestId}
        number_of_pairs: 4
        state: started
    ) { 
        id
        state
        retries
        number_of_pairs
        memotest {
        id name
        }
    }
}`)