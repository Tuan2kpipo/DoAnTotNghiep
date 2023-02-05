import generateCode from "./generateCode";
const prices = [
  {
    min: 0,
    max: 1,
    value: "Dưới 1 triệu",
  },
  {
    min: 1,
    max: 2,
    value: "Từ 1 - 2 triệu",
  },
  {
    min: 2,
    max: 3,
    value: "Từ 2 - 3 triệu",
  },
  {
    min: 3,
    max: 5,
    value: "Từ 3 - 5 triệu",
  },
  {
    min: 5,
    max: 7,
    value: "Từ 5 - 7 triệu",
  },
  {
    min: 7,
    max: 10,
    value: "Từ 7 - 10 triệu",
  },
  {
    min: 10,
    max: 15,
    value: "Từ 10 - 15 triệu",
  },
  {
    min: 15,
    max: 999999,
    value: "Trên 15 triệu",
  },
];

const areas = [
  {
    min: 0,
    max: 20,
    value: "Dưới 20n",
  },
  {
    min: 20,
    max: 30,
    value: "Từ 20n - 30n",
  },
  {
    min: 30,
    max: 50,
    value: "Từ 30n - 50n",
  },
  {
    min: 50,
    max: 70,
    value: "Từ 50n - 70n",
  },
  {
    min: 70,
    max: 90,
    value: "Từ 70n - 90n",
  },
  {
    min: 90,
    max: 9999999,
    value: "Trên 90n",
  },
];

export const dataPrice = prices.map((item) => ({
  ...item,
  code: generateCode(item.value),
}));
export const dataArea = areas.map((item) => ({
  ...item,
  code: generateCode(item.value),
}));
