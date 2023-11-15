import { describe, it, expect } from "@jest/globals";
import { carValue } from "../controller/AllServices";
describe("getCarValue", () => {
  it("getCarValue", () => {
    const expected = {
      carValue: 6614,
    };
    const actual = carValue("Civic", 2014);
    expect(actual).toEqual(expected);
  });

  it("modelCheckIfConvertable", () => {
    const expected = {
      Error: "Model can contain numbers but with letters",
    };
    const actual = carValue("922", 2014);
    expect(actual).toEqual(expected);
  });

  it("checkModelEmpty", () => {
    const expected = {
      Error: "Model should not be empty",
    };
    const actual = carValue("", 2014);
    expect(actual).toEqual(expected);
  });

  it("checkYearLength", () => {
    const expected = {
      Error: "Year must be 4 digits",
    };
    const actual = carValue("Civic", 201);
    expect(actual).toEqual(expected);
  });

  it("checkEmptyYear", () => {
    const expected = {
      Error: "Year should not be empty",
    };
    const actual = carValue("Civic", 0);
    expect(actual).toEqual(expected);
  });
});
