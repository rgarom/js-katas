import fizzBuzz from "./fizzBuzz";

describe("FizzBuzz spec", () => {
  it("should return the String value if the number is not multiple of 3 or 5", () => {
    const result = fizzBuzz(1);

    expect(result).to.equal("1");
  });

  it("should return Fizz if the value is multiple of 3", () => {
    const result = fizzBuzz(3);

    expect(result).to.equal("Fizz");
  });

  it("should return Buzz if the value is multiple of 5", () => {
    const result = fizzBuzz(5);

    expect(result).to.equal("Buzz");
  });

  it("should return FizzBuzz if the value is multiple of 3 and 5", () => {
    const result = fizzBuzz(15);

    expect(result).to.equal("FizzBuzz");
  });

  it("should return Fizz if the value has a 3 in it", () => {
    const result = fizzBuzz(13);

    expect(result).to.equal("Fizz");
  });

  it("should return Buzz if the value has a 5 in it", () => {
    const result = fizzBuzz(52);

    expect(result).to.equal("Buzz");
  });

  it("should return FizzBuzz if the value has a 3 and a 5 in it", () => {
    const result = fizzBuzz(53);

    expect(result).to.equal("FizzBuzz");
  });
});