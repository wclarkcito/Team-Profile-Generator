describe("Manager", () => {
    describe("initialization", () => {
        it("should return an object containing Name Id and Email properties imported from employee as well as office number", () => {
            const obj = new Manager();

            expect(" Name Id Email office number" in obj).toEqual(true);
        }
    })

})