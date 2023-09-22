export function arrangeHistoryByDate(response) {
  let mapData = {};
  response.forEach((data) => {
    let time = getDateString(data.timestamp);
    if (!mapData[time]) mapData[time] = [];
    mapData[time].push(data);
  });
  return mapData;
}

export function getDateString(timestamp) {
  let dat = new Date(timestamp);
  return dat.getDate() + " " + dat.toLocaleString("default", { month: "long" }); // e.g 17 August
}

export function formattedAmount(amount) {
  const formattedAmount =
    "$" +
    amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return formattedAmount;
}
