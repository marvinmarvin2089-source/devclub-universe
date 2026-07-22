import {
  verticalLine,
  horizontalLine,
  diagonalLine,
} from "./builders/shapeBuilder";

const D = [
  ...verticalLine(20, 35, 55),

  ...horizontalLine(20, 26, 35),

  ...horizontalLine(20, 26, 55),

  { x: 28, y: 37 },
  { x: 30, y: 41 },
  { x: 30, y: 49 },
  { x: 28, y: 53 },
];

const E = [
  { x: 36, y: 35 },
  { x: 36, y: 40 },
  { x: 36, y: 45 },
  { x: 36, y: 50 },
  { x: 36, y: 55 },
  { x: 40, y: 35 },
  { x: 44, y: 35 },
  { x: 40, y: 45 },
  { x: 44, y: 45 },
  { x: 40, y: 55 },
  { x: 44, y: 55 },
];

const V = [
  ...diagonalLine(50, 35, 58, 55),

  ...diagonalLine(66, 35, 58, 55),
];

const C = [
  { x: 74, y: 38 },
  { x: 72, y: 42 },
  { x: 71, y: 46 },
  { x: 72, y: 50 },
  { x: 74, y: 54 },
  { x: 78, y: 35 },
  { x: 82, y: 35 },
  { x: 78, y: 55 },
  { x: 82, y: 55 },
];

const L = [
  ...verticalLine(90, 35, 55),

  ...horizontalLine(90, 98, 55),
];



const U = [
  ...verticalLine(104, 35, 51),

  ...verticalLine(116, 35, 51),

  { x: 106, y: 53 },
  { x: 108, y: 55 },
  { x: 112, y: 55 },
  { x: 114, y: 53 },
];

const B = [
  ...verticalLine(124, 35, 55),

  ...horizontalLine(124, 132, 35),

  ...horizontalLine(124, 132, 45),

  ...horizontalLine(124, 132, 55),

  { x: 134, y: 38 },
  { x: 136, y: 41 },

  { x: 134, y: 48 },
  { x: 136, y: 52 },
];

export const logoPoints = [
  ...D,
  ...E,
  ...V,
  ...C,
  ...L,
  ...U,
  ...B,
];