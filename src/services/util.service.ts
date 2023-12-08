export function arrangeHistoryByDate(response: any) {
  let mapData: any = {};
  response.forEach((data: any) => {
    let time = getDateString(data.timestamp);
    if (!mapData[time]) mapData[time] = [];
    mapData[time].push(data);
  });
  return mapData;
}

export function getDateString(timestamp: any) {
  let dat = new Date(timestamp);
  return dat.getDate() + " " + dat.toLocaleString("default", { month: "long" }); // e.g 17 August
}

export function formattedAmount(amount: any) {
  const formattedAmount =
    "$" +
    amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return formattedAmount;
}

/* classArr is e.g [styles.my_class, styles.your_class] */
export function getClass(classArr: string[] = []) {
  return classArr.join(" ");
}
