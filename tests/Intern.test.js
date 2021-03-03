const Intern = require("../lib/Intern");
const { it, expect, beforeEach } = require("@jest/globals");
jest.mock('../lib/intern');

beforeEach(() => {
    Intern.mockClear();

})
it('user called the class constructor', () => {
    const intern = new Intern()
    expect(Intern).toHaveBeenCalledTimes(1)
})
it('user can get name of Intern', async () => {

    const intern = new Intern('name', 'id', 'email')
    let spy = jest.spyOn(intern, 'getName').mockImplementation(() => 'name')
    expect(intern.getName()).toBe('name')
    spy.mockRestore()

})
it('user can get Id of Intern', async () => {

    const intern = new Intern('name', 'id', 'email')
    let spy = jest.spyOn(intern, 'getId').mockImplementation(() => 'id')
    expect(intern.getId()).toBe('id')
    spy.mockRestore()

})
it('user can get email of Intern', async () => {

    const intern = new Intern('name', 'id', 'email')
    let spy = jest.spyOn(intern, 'getEmail').mockImplementation(() => 'email')
    expect(intern.getEmail()).toBe('email')
    spy.mockRestore()

})
it('user can get school of Intern', async () => {

    const intern = new Intern('name', 'id', 'email', 'school')
    let spy = jest.spyOn(intern, 'getSchool').mockImplementation(() => 'school')
    expect(intern.getSchool()).toBe('school')
    spy.mockRestore()

})