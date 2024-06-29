class student{
    setStudent(name,course,degree){
        this.name=name
        this.course=course
        this.degree=degree
    }

    printStudent(){
        console.log(this.name,this.course,this.degree);
    }
}

var obj1=new student()

obj1.setStudent("Ashik","python","bca")
obj1.printStudent()