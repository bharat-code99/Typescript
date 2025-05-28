"use strict";
const person1 = {
    name: "Bharat",
    age: 23,
    isStudent: true,
};
function displayInfo(person) {
    var _a;
    console.log(`${person.name} lives at ${(_a = person.address) === null || _a === void 0 ? void 0 : _a.street}`);
}
displayInfo(person1);
