// class Support {
//     name;
//     designation = 'Support Web Dev';
//     addres = 'BD'
//     constructor(name, addres){
//         this.name = name;
//         this.addres = addres;
//     }
//     startSession(){
//         console.log(this.name,  "start a support session");
//     }
// }

// class StudentCare {
//     name;
//     designation = 'Student Care Web Dev';
//     addres = 'BD'
//     constructor(name, addres){
//         this.name = name;
//         this.addres = addres;
//     }
//     buildARoutine(student){
//         console.log(this.name,  "Build a routine for",student);
//     }
// }

// class NeptuneDev {
//     name;
//     designation = 'Student Care Web Dev';
//     addres = 'BD'
//     constructor(name, addres){
//         this.name = name;
//         this.addres = addres;
//     }
//     buildARoutine(version){
//         console.log(this.name,  "Release app version",version);
//     }
// }
// const amir = new Support('Amir Khan', 'Dhaka');
// const salman = new Support("Salman Khan", 'Dubai');


class TeamMember{
    name;
    designation = 'Student Care Web Dev';
    addres = 'BD'
    constructor(name, addres){
        this.name = name;
        this.addres = addres;
    }
}

class Support extends TeamMember{
    groupSupportTime;
    constructor (name,addres, time){
        super(name,addres)
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name,  "start a support session");
    }
}
class StudentCare extends TeamMember {
    buildARoutine(student){
        console.log(this.name,  "Build a routine for",student);
    }
}
class NeptuneDev extends TeamMember{
    codeEditor;
    constructor(name, addres, editor){
        super(name,addres)
        this.codeEditor = editor
    }
    releaseApp(version){
        console.log(this.name,  "Release app version",version);
    }
}
const amir = new Support('Amir Khan', 'Dhaka',12);
const salman = new Support("Salman Khan", 'Dubai',10);
// console.log(amir);
// console.log(salman);

const shahadat = new StudentCare('Shahadat', 'Dhaka')
const dipok = new NeptuneDev('dipok', 'foridpur', 'vs')
dipok.releaseApp('1.1.2')
// console.log(dipok);