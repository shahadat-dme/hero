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
    designation = 'Support Web Dev';
    constructor (name, addres, time){
        super(name,addres)
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name,  "start a support session");
    }
}
class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARoutine(student){
        console.log(this.name,  "Build a routine for",student);
    }
}
class NeptuneDev extends TeamMember{
    codeEditor;
    designation = 'Care Web Dev';
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


// dipok.__proto__.__proto__.__proto__    // object 
// dipok.__proto__.__proto__.__proto__.__proto__  //null