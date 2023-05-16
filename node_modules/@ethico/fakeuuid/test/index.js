console.log(FakeUUID());
// Example usage
console.log(FakeUUID());
console.log(FakeUUID({ length: 8, digit: true }));
console.log(
  FakeUUID({
    startsWith: "$uid_",
    endsWith: "",
    length: 2,
    digit: true,
    lowerAlphabets: true,
    upperAlphabets: false,
    specialChars: "-",
  })
);
