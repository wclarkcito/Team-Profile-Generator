const Engineer = require("../lib/engineer");
const { it, expect, beforeEach } = require("@jest/globals");
jest.mock('../lib/engineer');

beforeEach(() => {
    Engineer.mockClear();

})
it('user called the class constructor', () => {
    const engineer = new Engineer()
    expect(Engineer).toHaveBeenCalledTimes(1)
})
it('user can get name of Engineer', async () => {

    const engineer = new Engineer('name', 'id', 'email')
    let spy = jest.spyOn(engineer, 'getName').mockImplementation(() => 'name')
    expect(engineer.getName()).toBe('name')
    spy.mockRestore()

})
it('user can get Id of Engineer', async () => {

    const engineer = new Engineer('name', 'id', 'email')
    let spy = jest.spyOn(engineer, 'getId').mockImplementation(() => 'id')
    expect(engineer.getId()).toBe('id')
    spy.mockRestore()

})
it('user can get email of Engineer', async () => {

    const engineer = new Engineer('name', 'id', 'email')
    let spy = jest.spyOn(engineer, 'getEmail').mockImplementation(() => 'email')
    expect(engineer.getEmail()).toBe('email')
    spy.mockRestore()

})
it('user can get GitHub username of Engineer', async () => {

    const engineer = new Engineer('name', 'id', 'email', 'github')
    let spy = jest.spyOn(engineer, 'getGithub').mockImplementation(() => 'github')
    expect(engineer.getGithub()).toBe('github')
    spy.mockRestore()

})