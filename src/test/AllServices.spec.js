"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const AllServices_1 = require("../controller/AllServices");
(0, globals_1.describe)("getCarValue", () => {
    (0, globals_1.it)("getCarValue", () => {
        const expected = {
            carValue: 6614,
        };
        const actual = (0, AllServices_1.carValue)("Civic", 2014);
        (0, globals_1.expect)(actual).toEqual(expected);
    });
    (0, globals_1.it)("modelCheckIfConvertable", () => {
        const expected = {
            Error: "Model can contain numbers but with letters",
        };
        const actual = (0, AllServices_1.carValue)("922", 2014);
        (0, globals_1.expect)(actual).toEqual(expected);
    });
    (0, globals_1.it)("checkModelEmpty", () => {
        const expected = {
            Error: "Model should not be empty",
        };
        const actual = (0, AllServices_1.carValue)("", 2014);
        (0, globals_1.expect)(actual).toEqual(expected);
    });
    (0, globals_1.it)("checkYearLength", () => {
        const expected = {
            Error: "Year must be 4 digits",
        };
        const actual = (0, AllServices_1.carValue)("Civic", 201);
        (0, globals_1.expect)(actual).toEqual(expected);
    });
    (0, globals_1.it)("checkEmptyYear", () => {
        const expected = {
            Error: "Year should not be empty",
        };
        const actual = (0, AllServices_1.carValue)("Civic", 0);
        (0, globals_1.expect)(actual).toEqual(expected);
    });
});
