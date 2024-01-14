/* Your Code Here */
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(arrays) {
  return arrays.map((arr) => createEmployeeRecord(arr));
}

function createTimeInEvent(dateTime) {
  const [date, time] = dateTime.split(" ");
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  const timeIn = {
    type: "TimeIn",
    date: date,
    hour: parseInt(hour + minute, 10),
  };
  this.timeInEvents.push(timeIn);
  return this;
}

function createTimeOutEvent(dateTime) {
  const [date, time] = dateTime.split(" ");
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  const timeOut = {
    type: "TimeOut",
    date: date,
    hour: parseInt(hour + minute, 10),
  };
  this.timeOutEvents.push(timeOut);
  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find((event) => event.date === date);
  const timeOut = this.timeOutEvents.find((event) => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

function findEmployeeByFirstName(employees, firstName) {
  return employees.find((employee) => employee.firstName === firstName);
}

function calculatePayroll(employees) {
  return employees.reduce((total, employee) => {
    return total + allWagesFor.call(employee);
  }, 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
