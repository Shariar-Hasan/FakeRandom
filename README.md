# @ethico/fakerandom

[![npm version](https://img.shields.io/npm/v/@ethico/fakerandom)](https://www.npmjs.com/package/@ethico/fakerandom)
[![License](https://img.shields.io/github/license/Shariar-Hasan/FakeRandom)](https://github.com/Shariar-Hasan/FakeRandom/LICENSE)

This is a random data generator package for generating different types of data.

## Installation

You can install the package via npm:

```
npm install @ethico/fakerandom
```

**_Make sure you have Node.js installed._**

## Usage

Import the functions you need from the package using ES6 module syntax:

```javascript
import {
  frFloat,
  frInt,
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
} from "@ethico/fakerandom";
console.log(frColor()) // Output : Green
```
or You can use it in this way :
```javascript
import fake from "@ethico/fakerandom";
console.log(fake.frColor()) // Output : red
```

### **frInt(options)**

Generates a random integer within the specified range.

- options: An optional object with the following properties:
  - `min` (number, default: 0): The minimum value (including itself).
  - `max` (number, default: 10): The maximum value (including itself).
- example :
    ```javascript
    import { frInt } from "@ethico/fakerandom";
    console.log(frInt()); // Output: 7
    console.log(frInt({ min: 22 })); // Output: 26
    console.log(frInt({ max: 16 })); // Output: 13
    console.log(frInt({ min: 3, max: 9 })); // Output: 5
    ```

### **frFloat(options)**

Generates a random floating-point number within the specified range.

- options: An optional object with the following properties:
  - `min` (number, default: 0): The minimum value (including itself).
  - `max` (number, default: 10.0): The maximum value (including itself).
  - `precision` (number, default: 4): The number of decimal places.
- example :
    ```javascript
    import { frFloat } from "@ethico/fakerandom";
    console.log(frFloat()); // Output: 7.3433
    console.log(frFloat({ min: 3, max: 9 })); // Output: 5.3343
    ```

### **frPhone(options)**

Generates a random phone number.

- options: An optional object with the following properties:
  - `digit` (number, default: 10): The number of digits in the phone number without country code.
  - `countryCode` (string, default: "+880"): The country code for the phone number.
- example :
    ```javascript
    import { frPhone } from "@ethico/fakerandom";
    console.log(frPhone()); // Output: +8802312345467
    console.log(frPhone({digit : 4})); // Output: +8802645
    console.log(frPhone({digit : 4, countryCode : +99})); // Output: +991423
    ```

### **frColor(code)**

Generates a random color.

- `code` (string, default: **"color"**): The color code format to generate. Possible values are **"color"** (name), **"rgb"**, and **"hex"**.
- example :
    ```javascript
    import { frColor } from "@ethico/fakerandom";
    console.log(frColor()); // Output: red
    console.log(frColor("color")); // Output: red
    console.log(frColor("rgb")); // Output: rgb(0, 0, 255)
    console.log(frColor("hex")); // Output: #66FF00
    ```

### **frEmail(options)**

Generates a random email address.

- options: An optional object with the following properties:
  - `name` (string, default: Random full name): The name to be used in the email address.
  - `domain` (string, default: Random domain from a predefined list): The email domain.
- example :
    ```javascript
    import { frEmail } from "@ethico/fakerandom";
    console.log(frEmail()); // Output: AlexBrown@gmail.com
    console.log(frEmail({name : "Alice Bob"})); // Output: Alice.bob.123@hotmail.com
    console.log(frEmail({name : "Alice Bob", domain : "@abc.org"})); // Output: Alice.bob.453@abc.org
    ```

### **frIpAddress()**

Generates a random IP address.

- example :
    ```javascript
    import { frIpAddress } from "@ethico/fakerandom";
    console.log(frIpAddress()); // Output: 234.54.6.231
    ```

### **frUserName(name)**

Generates a random username.

- `name` (string, default: Random full name): The name to be used in the username.
- example :
    ```javascript
    import { frUserName } from "@ethico/fakerandom";
    console.log(frUserName()); // Output: Alexbrown231
    console.log(frUserName({ name: "Alice Bob" })); // Output: alice.bob.123
    ```

### **frFullName(gender)**

Generates a random full name.

- `gender` (string, default: "male"): The gender of the person. Possible values are **"male"** and **"female"**.
- example :
    ```javascript
    import { frFullName } from "@ethico/fakerandom";
    console.log(frFullName()); // Output: Alex brown
    console.log(frFullName("male")); // Output: Alen Brulord
    console.log(frFullName("female")); // Output: Alice Benian
    ```

### **frFirstName(gender)**

Generates a random first name.

- `gender` (string, default: "male"): The gender of the person. Possible values are **"male"** and **"female"**.
- example :
    ```javascript
    import { frFirstName } from "@ethico/fakerandom";
    console.log(frFirstName()); // Output: Alex
    console.log(frFirstName("female")); // Output: Alice
    ```

### **frLastName(gender)**

Generates a random last name.

- `gender` (string, default: "male"): The gender of the person. Possible values are **"male"** and **"female"**.
- example :
    ```javascript
    import { frLastName } from "@ethico/fakerandom";
    console.log(frLastName()); // Output: Brown
    console.log(frLastName("female")); // Output: Brunian
    ```

### **frCountry(firstLetter)**

Generates a random country name.

- `firstLetter` (string, default: ""): The first letter of the country name. If provided, the generated country name will start with this letter.
- example :
    ```javascript
    import { frCountry } from "@ethico/fakerandom";
    console.log(frCountry()); // Output: Bangladesh
    console.log(frCountry("Ne")); // Output: Nepal
    ```

### **frAddress()**

Generates a random address with block, street, city.

- example :
    ```javascript
    import { frAddress } from "@ethico/fakerandom";
    console.log(frAddress()); // Output: 27/B,Madison Ave.,Shenzhen
    ```

### **frDate(options)**

Generates a random date within next 10 years or previus 10 years.

- options: An optional object with the following properties:
  - `type` (string, default: "future"): The type of date to generate. Possible values are **"future"**, **"past"**, and **"any"**.
  - `separator` (string, default: "/"): The separator character to use between day, month, and year.
- example :
    ```javascript
    import { frDate } from "@ethico/fakerandom";
    console.log(frDate()); // Output: 24/08/2023
    console.log(frDate({type : "past"})); // Output: 24/08/2000
    console.log(frDate({type : "future", seperator : "-"})); // Output: 24-08-2025
    ```

### **frCreditCard(options)**

Generates a random credit card number.

- options: An optional object with the following properties:
  - `cardType` (string, default: "Visa"): The type of credit card to generate. Possible values are **"Visa"**, **"Mastercard"**, **"American Express"**, and **"Discover"**.
- example :
    ```javascript
    import { frCreditCard } from "@ethico/fakerandom";
    console.log(frCreditCard()); // Output: 4200472352850769|01|2024|937
    console.log(frCreditCard({cardType: "American Express"})); // Output: 3779592616065|10|2024|722
    ```

### **frElement(array)**

Selects a random element from the provided array.

- `array` (Array, default: [0]): The array from which to select a random element.
- example :
    ```javascript
    import { frElement } from "@ethico/fakerandom";
    console.log(frInt()); // Output: 0
    console.log(frInt([1,2,3,4,5,6])); // Output: 4
    ```

### **frBoolean()**

Generates a random boolean value (true or false).

- example :
    ```javascript
    import { frBoolean } from "@ethico/fakerandom";
    console.log(frBoolean()); // Output: true
    console.log(frBoolean()); // Output: false
    ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Contact the author for contribution

## Acknowledgements

This package is built upon the excellent work of other open-source libraries and contributors. We would like to acknowledge and thank them for their contributions.

`fakeuuid` - Used for generating fake UUIDs.

## Contact

For any inquiries or feedback, please reach out to Shariar Hasan at shahriar.hasan.1523@gmail.com.
