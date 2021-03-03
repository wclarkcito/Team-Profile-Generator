const { it, expect, beforeEach } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/employee");
jest.mock('../lib/employee');

beforeEach(() => {
    Employee.mockClear();

})
it('user called the class constructor', () => {
    const employee = new Employee()
    expect(Employee).toHaveBeenCalledTimes(1)
})
it('user can get name of employee', async () => {

    const employee = new Employee('name', 'id', 'email')
    let spy = jest.spyOn(employee, 'getName').mockImplementation(() => 'name')
    expect(employee.getName()).toBe('name')
    spy.mockRestore()

})
it('user can get Id of employee', async () => {

    const employee = new Employee('name', 'id', 'email')
    let spy = jest.spyOn(employee, 'getId').mockImplementation(() => 'id')
    expect(employee.getId()).toBe('id')
    spy.mockRestore()

})
it('user can get email of employee', async () => {

    const employee = new Employee('name', 'id', 'email')
    let spy = jest.spyOn(employee, 'getEmail').mockImplementation(() => 'email')
    expect(employee.getEmail()).toBe('email')
    spy.mockRestore()

})
it('user can get role of employee', async () => {

    const employee = new Employee('name', 'id', 'email')
    let spy = jest.spyOn(employee, 'getRole').mockImplementation(() => 'role')
    expect(employee.getRole()).toBe('role')
    spy.mockRestore()

})