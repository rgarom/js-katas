import fizzBuzz from "./fizzBuzz";

describe("FizzBuzz spec", () => {
  it("should return the value passed as String if it's not multiple of 3 or 5", () => {
    const result = fizzBuzz(1);

    expect(result).to.equal("1");
  });
});