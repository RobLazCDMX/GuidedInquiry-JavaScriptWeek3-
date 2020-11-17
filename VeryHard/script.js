'use strict';


//1. Create a Person constructor that has three properties: name, job, and age.

class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    
    // Under the ES6 syntax the methods are added to the .prototype property at long as they're written inside the class person. It doesn't have to be added manually (e.g. Person.prototype. exerces = function()).   
    exercise() {
        console.log("Running is fun! - said no one ever");
    }

    fetchJob(){
        console.log(`${this.name} is a ${this.job}`);
    }
}; 






// Extend Person constructor with Programmer constructor
class Programmer extends Person {
    constructor(name,job,age,languages){
        super(name,job,age);
        this.languages = languages;
        this.busy = false; 
    }

    completeTask(){
        return this.busy = false;
    }
        
    acceptNewTask(){
        return this.busy = true;
    }

    offerNewTask (){
        if(this.busy){
            console.log(`${this.name}  would love to take on a new responsibility.`);
            
            
        } else {
            console.log(`${this.name} can't accept any new tasks right now.`);
            
        }
    }

    learnLanguage(language){
        this.languages.push(language);
    }

    listLanguages(){
        console.log(...this.languages);
    }
};
    


const programmer1 = new Programmer("Roberto","Fellow", 25, ["CSS"]);
programmer1.completeTask();
programmer1.fetchJob();
programmer1.exercise();
programmer1.offerNewTask();
programmer1.acceptNewTask();
programmer1.learnLanguage('Python');
programmer1.listLanguages();


const programmer2 = new Programmer("Reggie","Junior Developer", 40, ["java"]);
programmer2.completeTask();
programmer2.fetchJob();
programmer2.exercise();
programmer2.acceptNewTask();
programmer2.offerNewTask();
programmer2.learnLanguage('Html');
programmer2.listLanguages();




console.log(programmer1);
console.log(programmer2);








