let students = [
    { name: "Rahul", age: 20, city: "Mumbai" },
    { name: "Priya", age: 21, city: "Hyderabad" },
    { name: "Arjun", age: 22, city: "Delhi" }
];

console.log("Student Details:");

students.forEach(function(student) {
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("City:", student.city);
    console.log("----------------");
});

// Update age
students[1].age = 23;
console.log("Updated Age of Priya:", students[1].age);