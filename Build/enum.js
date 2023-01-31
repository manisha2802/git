"use strict";
var position;
(function (position) {
    position[position["tester"] = 0] = "tester";
    position[position["devloper"] = 1] = "devloper";
    position[position["DBA"] = 2] = "DBA";
    position[position["Manager"] = 3] = "Manager";
    position[position["Sr_Developer"] = 4] = "Sr_Developer";
})(position || (position = {}));
if (position.tester) {
    console.log("Start Testing");
}
if (position.devloper) {
    console.log("Start Developing Application");
}
if (position.Manager) {
    console.log("Start Managing Work");
}
// String enum
var weekDays;
(function (weekDays) {
    weekDays["day1"] = "Monaday";
    weekDays["day2"] = "Tuesday";
    weekDays["day3"] = "Wednesday";
})(weekDays || (weekDays = {}));
console.log(weekDays.day2);
console.log(weekDays.day1);
console.log(weekDays.day3);
//enum Number
var weekDays1;
(function (weekDays1) {
    weekDays1[weekDays1["day1"] = 1] = "day1";
    weekDays1[weekDays1["day2"] = 2] = "day2";
    weekDays1[weekDays1["day3"] = 3] = "day3";
})(weekDays1 || (weekDays1 = {}));
console.log(weekDays.day2);
console.log(weekDays.day1);
console.log(weekDays.day3);
let person = {
    firstName: "Manisha",
    lastName: "Kamble"
};
console.log(person.firstName);
console.log(person.lastName);
