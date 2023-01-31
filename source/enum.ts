enum position {
    tester,
    devloper,
    DBA,
    Manager,
    Sr_Developer
}

if (position.tester) {
    console.log("Start Testing")
}

if (position.devloper) {
    console.log("Start Developing Application")
}

if (position.Manager) {
    console.log("Start Managing Work")
}

// String enum

enum weekDays {
    day1 = "Monaday",
    day2 = "Tuesday",
    day3 = "Wednesday"
}
console.log(weekDays.day2)
console.log(weekDays.day1)
console.log(weekDays.day3)

//enum Number

enum weekDays1 {
    day1 = 1,
    day2 = 2,
    day3 = 3
}
console.log(weekDays.day2)
console.log(weekDays.day1)
console.log(weekDays.day3)


let person: { firstName: string, lastName: string } = {
    firstName: "Manisha",
    lastName: "Kamble"
}
console.log(person.firstName)
console.log(person.lastName)