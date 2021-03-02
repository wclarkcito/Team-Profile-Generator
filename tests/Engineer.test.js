describe("Engineer", () => {
    describe("initialization", () => {
        it("should return an object containing Name Id and Email properties", () => {
            const obj = new Engineer();

            expect(" Name Id Email and Github username" in obj).toEqual(true);
        }
    })

})