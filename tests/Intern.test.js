describe("Employee", () => {
    describe("initialization", () => {
        it("should return an object containing Name Id and Email properties", () => {
            const obj = new Employee();

            expect(" Name Id School and Email" in obj).toEqual(true);
        }
    })

})