export const getDate = (timestamp: number) => {
  const dateFormat = new Date(timestamp * 1000);
  let result = dateFormat.getDate() +
  "/" + (dateFormat.getMonth() + 1) +
  "/" + dateFormat.getFullYear() +
  " " + dateFormat.getHours() +
  ":";
  
  const minutes = dateFormat.getMinutes().toString();

  if(minutes.length === 1) {
    result += "0" + minutes; 
  } else {
    result += minutes;
  }

  return result;
};