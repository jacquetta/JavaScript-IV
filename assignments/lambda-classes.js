// CODE here for your Lambda Classes
class Person {
    constructor(base){
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;
        this.gender = base.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instruct){
        super(instruct);
        this.specialty = instruct.specialty;
        this.favLanguage = instruct.favLanguage;
        this.catchPhrase = instruct.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}


class Student extends Person {
    constructor(learner){
        super(learner);
        this.previousBackground = learner.previousBackground;
        this.className = learner.className;
        this.favSubjects = learner.favSubjects;
    }
    listSubjects(){
        let arr = [];
        this.favSubjects.forEach(function(subjects){
            arr.push(subjects);
        });
        console.log(arr);
    }
    PRAssignment(subject1){
        console.log(`${this.name} has submitted a PR for ${subject1}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}


class ProjectManager extends Instructor{
    constructor(pmanager){
        super(pmanager);
        this.gradClassName = pmanager.gradClassName;
        this.favInstructor = pmanager.favInstructor;
    }
    standup(slack){
        console.log(`${this.name} announces to ${slack}, @channel study times.`);
    }
    debugsCode(studentOnj, student){
        console.log(`${this.name} debugs ${studentOnj}'s code on ${student} `);
    }
}



