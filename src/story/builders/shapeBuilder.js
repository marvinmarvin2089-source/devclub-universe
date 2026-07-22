export function verticalLine(x, startY, endY, step = 2) {
  const points = [];

  for (let y = startY; y <= endY; y += step) {
    points.push({ x, y });
  }

  return points;
}

export function horizontalLine(startX, endX, y, step = 2) {
  const points = [];

  for (let x = startX; x <= endX; x += step) {
    points.push({ x, y });
  }

  return points;
}

export function diagonalLine(
  startX,
  startY,
  endX,
  endY,
  step = 2
) {
  const points = [];

  const totalSteps = Math.max(
    Math.abs(endX - startX),
    Math.abs(endY - startY)
  ) / step;

  for (let i = 0; i <= totalSteps; i++) {
    const progress = i / totalSteps;

    points.push({
      x: startX + (endX - startX) * progress,
      y: startY + (endY - startY) * progress,
    });
  }

  return points;
}