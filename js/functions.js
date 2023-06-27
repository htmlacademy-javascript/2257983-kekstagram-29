const checkDay = (timeStart, timeEnd, meetingTimeStart, meetingDuration) => {
  function toMin (time) {
    const parts = time.split(':').map(Number);
    const [hours, minutes] = parts;
    const minutesPerHours = 60;

    return hours * minutesPerHours + minutes;
  };

  return toMin(timeEnd) >= toMin(meetingTimeStart) + meetingDuration && toMin(timeStart) <= toMin(meetingTimeStart) ? true : false;
};

// console.log('Тест 1 -' + checkDay('08:00', '17:30', '14:00', 90));
// console.log('Тест 2 -' + checkDay('8:0', '10:0', '8:0', 120));
// console.log('Тест 3 -' + checkDay('08:00', '14:30', '14:00', 90));
// console.log('Тест 4 -' + checkDay('14:00', '17:30', '08:0', 90));
// console.log('Тест 5 -' + checkDay('8:00', '17:30', '08:00', 900));
