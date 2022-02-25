const student = {
    id: 102,
    name: 'Kibriya',
    major: 'math',
    balance: 70000,
    isRich: false,
    sub: ['eng','Bangla','math101'],
    bestFriend: {
        name: 'kundu',
        major: 'math'
    },
    takeExam: function(){
        console.log(this.name, 'Taking Exam');
    },
    treatDey: function(expense,bukhis){
        this.balance = this.balance - expense - bukhis;
        return this.balance;
    }
}
student.takeExam();
const remaining1 = student.treatDey(10000,500);
const remaining2 = student.treatDey(30000,700);
console.log(remaining1);
console.log(remaining2);