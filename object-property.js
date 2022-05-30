const students = [
    {id: 21, name: "Omar sany"},
    {id: 31, name: "Manaaaaaa"},
    {id: 41, name: "Moyouri"},
    {id: 51, name: "Deepjol"}
];

// const output = [];
// for (let i = 0; i < students. length; i++) {
//     const element = students[i].name;
//     output.push(element);
// }
// console.log(output)

const names = students.map(s=>s.name);
const ids = students.map(i=>i.id);
const bigger = students.filter(s=>s.id>40);
const bigger1 =students.find(s=>s.id>40);

console.log(bigger1)