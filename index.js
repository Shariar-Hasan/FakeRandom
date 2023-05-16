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
