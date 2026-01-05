

/*
array
*/

// เรียกใช้ฟังก์ชัน calculation_grade เพื่อหาค่าเกรดจากคะแนนที่กำหนด
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('Score1:'+ score1 + 'Grade:'+ grade1)
console.log('Score2:'+ score2 + 'Grade:'+ grade2)

/*
array
*/

let scores = [90, 80, 70, 60, 50,];
let newScores = []

for (let i = 0; i < scores.length; i++) {
    console.log(score[i]);

    // if (score[i] >= 60) {
//     newScores.push(score[i]);
// }
}

let newScores = scores.filter(function(score) {
    if (score >= 60) {
        return true;
    } else {
        return false;
    }
});

newScores.forEach((ns) => {
    console.log('new score: ' + ns);
})


score = score1.map((s) => {
    return s - 10;
})

scores.forEach((s) => {
    // console.log('score:', s);
    console.log(`score: ${s}`);

})

// map, filter

/*
object function
*/
let student = [
    {name: "John", age: 20, grade: "A"},
    {name: "Jane", age: 22, grade: "B"},
    {name: "Jim", age: 21, grade: "C"}
];
console.log('Student', student[0]);

let student = student.find((s) => {
    if (s.name === "Jim") {
        return true;
    }

/*
array
*/

let score1 = 10
let score2 = 80

function calculation_grade(parameter) {
if (score1 >= 80)
})

let dubblescoreStudent = student.map((s) => {
    s.age = s.age * 2;
    return s;
});
let highGradeStudent = student.filter((s) => {
    return s.grade === "A";
});

console.log('Students', student);
console.log('Dubble Score Students', dubblescoreStudent);

console.log('Found Student' , student);