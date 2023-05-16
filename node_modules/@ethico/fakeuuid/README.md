# FakeUUID

`FakeUUID` is a lightweight package for generating random UUIDs (Universal Unique Identifiers) with customizable options. Each time it creates totally unique id/ key.

## Installation

To use FakeStore, simply download the code from this repository and include it in your project.
You can install the package using npm:

```
npm install @ethico/fakeuuid
```

Alternatively, you can download the `FakeStore.js` file and include it in your project manually.
or You can use the CDN for it

```html
<script src="https://cdn.jsdelivr.net/gh/Shariar-Hasan/FakeUUID@1.0.0/src/FakeUUID.js"></script>
```

for importing :

```javascript
import FakeUUID from "@ethico/fakeuuid";
```

## Usage

```javascript
const uuid = FakeUUID({
  startsWith: "user_",
  endsWith: "_id",
  length: 12,
  digit: true,
  lowerAlphabets: true,
  upperAlphabets: false,
  specialChars: "",
});
console.log(uuid); // Output: user_hivzjxod_id
```

## Options

| Option           | Description                                                        | Default value |
| ---------------- | ------------------------------------------------------------------ | ------------- |
| `startsWith`     | A string with which the UUID should start.                         | `""`          |
| `endsWith`       | A string with which the UUID should end.                           | `""`          |
| `length`         | The total length of the UUID.                                      | `32`          |
| `digit`          | Whether to include digits in the UUID.                             | `true`        |
| `lowerAlphabets` | Whether to include lowercase letters in the UUID.                  | `true`        |
| `upperAlphabets` | Whether to include uppercase letters in the UUID.                  | `false`       |
| `specialChars`   | A string containing special characters to be included in the UUID. | `""`          |

You can use zero or more of the following options.

```javascript
//          Example 
console.log(FakeUUID());
// ab3egdhs8f88safafssdjnbchfbdnsbb

console.log(FakeUUID({ length: 8, digit: true }));
// ab3e8f88

console.log(FakeUUID({ length: 8, upperAlphabets: true }));
// aB3e8F88

console.log(
  FakeUUID({ length: 8, upperAlphabets: true, lowerAlphabets: false })
);
// AB3E8F88

console.log(
  FakeUUID({
    startsWith: "$uid_",
    endsWith: "",
    length: 12,
    digit: true,
    lowerAlphabets: true,
    upperAlphabets: true,
    specialChars: "-",
  })
);
// $uid_dH3-Udh4
```

## License

This project is licensed under the terms of the MIT license. See LICENSE file for details.
