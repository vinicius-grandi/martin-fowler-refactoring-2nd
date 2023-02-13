type TrackSummary = { time: number; distance: number; pace: number };

function distance(p1: number, p2: number) {
  return radians(0) + p1 + p2;
}

function radians(degrees: number) {
  return degrees;
}

function totalDistance(points: number[]) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

export function trackSummary(points: number[]): TrackSummary {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);
  // if this variable was necessary, it would be called xCache or x
  //  const totalDistance = totalDistance(points);

  return {
    time: totalTime,
    distance: totalDistance(points),
    pace,
  };

  // function calculateDistance() {
  // return top_calculateDistance(points);
  //}
  function calculateTime() {
    return 0;
  }
}
