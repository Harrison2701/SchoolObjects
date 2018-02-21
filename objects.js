var id = 0

function Student(firstName,lastName,grade){
    this.firstName = firstName
    this.lastName = lastName
    this.grade = grade
    this.id = id++
}

function Teacher(firstName,lastName,classSubject){
    this.firstName = firstName
    this.lastName = lastName
    this.classSubject = classSubject
    this.id = id++
}

function Section(classSubject,numStudents){
    this.classSubject = classSubject
    this.numStudents = numStudents
    this.id = id++;
    this.studentsInSection = [];
}
