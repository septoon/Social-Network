import profileReducer, { addPostActionCreator, deletePost } from '../profile-reducer'

let state = {
    postsData: [
        {id: 1, post: 'Hi, how are you?', likesCount: 12, name: 'Tigran Darchinyan'}
    ]
}
it('new post should be added', () => {
    const action = addPostActionCreator('hello')

    const newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(2)
})

it('message of new post should be correct', () => {
    const action = addPostActionCreator('hello')
    
    const newState = profileReducer(state, action)

    expect(newState.postsData[1].post).toBe('hello')
})

it('likes count should be 3', () => {
    const action = addPostActionCreator('hello')
    
    const newState = profileReducer(state, action)

    expect(newState.postsData[1].likesCount).toBe(3)
})

it('post should be deleted', () => {
    const action = deletePost(1)
    
    const newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(0)
})

it(`after deleting, length should't be decrement if id is incorrect`, () => {
    const action = deletePost(7)
    
    const newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(1)
})
