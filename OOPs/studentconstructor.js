class student{
    constructor(name,course,degree){            // constructor - to initialise instance variable
        this.name=name
        this.course=course
        this.degree=degree
    }

    printStudent(){
        console.log(this.name,this.course,this.degree);
    }
}

var obj1=new student("Ashik","java","bca")
obj1.printStudent()