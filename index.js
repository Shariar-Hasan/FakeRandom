import { frFloat, frInt } from "./libs/numericals.js";
import {
  frPhone,
  frColor,
  frEmail,
  frIpAddress,
  frUserName,
  frFullName,
  frFirstName,
  frLastName,
  frCountry,
  frAddress,
  frDate,
  frCreditCard,
} from "./libs/identity.js";
import { frElement, frBoolean } from "./libs/others.js";

// numerical data
console.log(frInt({ min: 2, max: 20 }));
console.log(frInt({ min: 22 }));
console.log(frInt({ max: 20 }));

console.log(frFloat({ min: 0, max: 10.0, precition: 4 }));
// identity data
console.log(frFirstName("male"));
console.log(frLastName("female"));
console.log(frFullName("male"));
console.log(frUserName("Alex Bob"));

console.log(frPhone({ digit: 11, countryCode: "+880" }));
console.log(frPhone({ digit: 10 }));
console.log(frPhone());

console.log(frEmail({ name: "Foo Bar", domain: "@jmail.com" }));
console.log(frEmail({ name: "Foo Bar" }));
console.log(frEmail({ domain: "@jmail.com" }));

console.log(frColor("hex"));
console.log(frColor("rgb"));
console.log(frColor("color"));
console.log(frColor());

console.log(frCountry());
console.log(frCountry("ch"));

console.log(frAddress());

console.log(frIpAddress());

// console.log(frCreditCard());
console.log(frCreditCard({ cardType: "American Express" }));

console.log(frDate({ type: "future" }));
console.log(frDate({ type: "past" }));
console.log(frDate({ type: "any" }));
console.log(frDate());

// others data
console.log(frElement([434, 434, 546, 5, 75, 235, 2352, 352, 35]));
console.log(frElement());

console.log(frBoolean());
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    frPhone,
    frColor,
    frEmail,
    frIpAddress,
    frUserName,
    frFullName,
    frFirstName,
    frLastName,
    frCountry,
    frAddress,
    frDate,
    frCreditCard,
    frElement,
    frBoolean,
    frFloat,
    frInt,
  };
}
// Export the class for ES6 environments
export default {
  frPhone,
  frColor,
  frEmail,
  frIpAddress,
  frUserName,
  frFullName,
  frFirstName,
  frLastName,
  frCountry,
  frAddress,
  frDate,
  frCreditCard,
  frElement,
  frBoolean,
  frFloat,
  frInt,
};
