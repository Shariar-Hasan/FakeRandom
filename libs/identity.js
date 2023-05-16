import { frElement, frBoolean } from "./others.js";
import { frInt } from "./numericals.js";
import {
  maleFirstNames,
  femaleLastNames,
  maleLastNames,
  femaleFirstNames,
  blockLetters,
  cityNames,
  streetNames,
} from "./../data/identitiyDatas.js";
import {
  countries,
  colors,
  rgbColors,
  hexColors,
  emailDomains,
} from "./../data/otherDatas.js";

// ****************First name Random********* ***************************
export const frFirstName = (gender = "male") => {
  if (gender == "male") {
    return maleFirstNames[frInt({ max: maleFirstNames.length - 1 })];
  } else if (gender == "female") {
    return femaleFirstNames[frInt({ max: femaleFirstNames.length - 1 })];
  } else {
    return "gender not found";
  }
};

// ****************LastName Random********* ***************************
export const frLastName = (gender = "male") => {
  if (gender == "male") {
    return maleLastNames[frInt({ max: maleLastNames.length - 1 })];
  } else if (gender == "female") {
    return femaleLastNames[frInt({ max: femaleLastNames.length - 1 })];
  } else {
    return "gender not found";
  }
};

// ****************Fullname Random********* ***************************
export const frFullName = (gender = "male") => {
  if (gender == "male" || gender == "female") {
    return frFirstName(gender) + " " + frLastName(gender);
  } else {
    return "gender not matched, use male or female as gender";
  }
};

// ****************Username Random********* ***************************
export const frUserName = (name = frFullName("male")) => {
  return (
    String(name)
      .split(" ")
      .join(frBoolean() ? "." : "") +
    (frBoolean() ? "." : "") +
    frInt({ max: 100 })
  );
};

// ****************Phone Random********* ***************************
export const frPhone = ({ digit = 10, countryCode = "+880" } = {}) => {
  const digits = "0123456789";
  let phoneNumber = "" + countryCode;
  for (let i = 0; i < digit; i++) {
    phoneNumber += digits[frInt({ max: 9 })];
  }
  return phoneNumber;
};

// ****************Email Random********* ***************************
export const frEmail = ({
  name = frFullName(),
  domain = frElement(emailDomains),
}) => {
  return `${frUserName(name) + domain}`;
};

// ****************color Random********* ***************************
export const frColor = (code = "color") => {
  if (code === "color") {
    return frElement(colors);
  } else if (code === "rgb") {
    return frElement(rgbColors);
  } else if (code === "hex") {
    return frElement(hexColors);
  } else {
    return "wrong color mode";
  }
};

// ****************Country Random********* ***************************
export const frCountry = (firstLetter = "") => {
  if (firstLetter) {
    const selected = countries.filter((c) =>
      c.name.toLowerCase().startsWith(firstLetter.toLowerCase())
    );
    return selected[frInt({ max: selected.length - 1 })];
  } else return frElement(countries);
};

// ****************IP Address Random********* ***************************
export const frIpAddress = () => {
  let IP = [];
  for (let index = 0; index < 4; index++) {
    IP.push("" + frInt({ max: 255 }));
  }
  return IP.join(".");
};

// ****************Adress Random********* ***************************
export const frAddress = () => {
  return `${frInt({ min: 1, max: 30 })}/${
    blockLetters[frInt(blockLetters.length - 1)]
  },${streetNames[frInt({ max: streetNames.length - 1 })]},${
    cityNames[frInt({ max: cityNames.length - 1 })]
  }`;
};

// ****************Credit Card Random********* ***************************
export const frCreditCard = ({ cardType = "Visa" } = {}) => {
  if (!cardType) {
    return "Card type not found";
  }
  let cardNumber = "";
  if (cardType === "Visa") {
    cardNumber += "4";
    for (let i = 0; i < 15; i++) {
      cardNumber += frInt({ max: 9 });
    }
  } else if (cardType === "Mastercard") {
    const prefixes = ["51", "52", "53", "54", "55"];
    const prefix = prefixes[frInt({ max: prefixes.length - 1 })];
    cardNumber += prefix;
    for (let i = 0; i < 13; i++) {
      cardNumber += frInt({ max: 9 });
    }
  } else if (cardType === "American Express") {
    const prefixes = ["34", "37"];
    const prefix = prefixes[frInt({ max: prefixes.length - 1 })];
    cardNumber += prefix;
    for (let i = 0; i < 11; i++) {
      cardNumber += frInt({ max: 9 });
    }
  } else if (cardType === "Discover") {
    cardNumber += "6011";
    for (let i = 0; i < 11; i++) {
      cardNumber += frInt({ max: 9 });
    }
  }

  const monthYear = frDate({ type: "future" }).split("/");
  return `${cardNumber}|${
    Number(monthYear[1]) < 10 ? "0" + monthYear[1] : monthYear[1]
  }|${monthYear[2]}|${frInt({ min: 100, max: 999 })}`;
};

// ****************Date Random********* ***************************
export const frDate = ({ type = "future", seperator = "/" } = {}) => {
  console.log(type, seperator);
  if (!type) {
    return "date type not found";
  }
  if (!(type === "future" || type === "past" || type === "any")) {
    return "type not matched";
  }
  let today = new Date().getTime();
  let newDate;
  if (type === "future") {
    newDate = new Date(today + frInt({ max: 3650 }) * 24 * 3600000);
  } else if (type === "past") {
    newDate = new Date(today - frInt({ max: 3650 }) * 24 * 3600000);
  } else {
    if (frBoolean()) {
      today += frInt({ max: 3650 }) * 24 * 3600000;
    } else {
      today -= frInt({ max: 3650 }) * 24 * 3600000;
    }
    newDate = new Date(today);
  }

  return (
    newDate.getDate() +
    seperator +
    newDate.getMonth() +
    seperator +
    newDate.getFullYear()
  );
};
////////////////////////////////////////////////////////////
