import node from './bst';

const myNode = node(2);
test('link', () =>{
    expect(myNode.value).toBe(2)
})