const timeFormatter = numberOfSeconds => {
  const hours = Math.floor(numberOfSeconds / 3600);
  const minutes = Math.floor((numberOfSeconds - hours * 3600) / 60);
  const seconds = numberOfSeconds - hours * 3600 - minutes * 60;

  let result = hours < 10 ? '0' + hours : hours;
  result += ' : ' + (minutes < 10 ? '0' + minutes : minutes);
  result += ' : ' + (seconds < 10 ? '0' + seconds : seconds);
  return result;
};

export default timeFormatter;
