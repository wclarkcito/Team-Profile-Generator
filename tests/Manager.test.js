const Manager = require("../lib/manager");
const { it, expect, beforeEach } = require("@jest/globals");
jest.mock('../lib/manager');

beforeEach(() => {
    Manager.mockClear();

})
it('user called the class constructor', () => {
    const manager = new Manager()
    expect(Manager).toHaveBeenCalledTimes(1)
})
it('user can get name of Manager', async () => {

    const manager = new Manager('name', 'id', 'email')
    let spy = jest.spyOn(manager, 'getName').mockImplementation(() => 'name')
    expect(manager.getName()).toBe('name')
    spy.mockRestore()

})
it('user can get Id of Manager', async () => {

    const manager = new Manager('name', 'id', 'email')
    let spy = jest.spyOn(manager, 'getId').mockImplementation(() => 'id')
    expect(manager.getId()).toBe('id')
    spy.mockRestore()

})
it('user can get email of Manager', async () => {

    const manager = new Manager('name', 'id', 'email')
    let spy = jest.spyOn(manager, 'getEmail').mockImplementation(() => 'email')
    expect(manager.getEmail()).toBe('email')
    spy.mockRestore()

})
it('user can get office number of Manager', async () => {

    const manager = new Manager('name', 'id', 'email', 'office')
    let spy = jest.spyOn(manager, 'getOfficeNumber').mockImplementation(() => 'office')
    expect(manager.getOfficeNumber()).toBe('office')
    spy.mockRestore()

})