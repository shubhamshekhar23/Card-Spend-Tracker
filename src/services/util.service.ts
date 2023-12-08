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
  const dateinNum = dat.getDate(); // e.g 17
  const monthName = dat.toLocaleString("default", { month: "long" }); // e.g August
  const year = dat.getFullYear(); // e/g 2022
  return `${dateinNum} ${monthName}, ${year}`; // e.g 17 August, 2022
}

export function formattedAmount(amount: any) {
  const pos = Math.abs(amount);
  const formattedAmount =
    "$" +
    pos.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  if (amount < 0) return `- ${formattedAmount}`;
  return formattedAmount;
}

/* classArr is e.g [styles.my_class, styles.your_class] */
export function getClass(classArr: string[] = []) {
  return classArr.join(" ");
}

export function generateRandomId() {
  const timestamp = new Date().getTime(); // Get current timestamp
  const randomSuffix = Math.random().toString(36).substr(2, 5); // Generate a random string
  return `${timestamp}${randomSuffix}`;
}

export function getFormatDateFromCurrentDate() {
  const currentDate = new Date();

  // Format date as "YYYY-MM-DD"
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const transactionDate = `${year}-${month}-${day}`;

  return transactionDate;
}

export function getFormatTimeFromCurrentDate() {
  const currentDate = new Date();

  // Format time as "HH:mm"
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const transactionTime = `${hours}:${minutes}`;

  return transactionTime;
}
