function myFunction(){
    var results = " "
    for(var i = 0; i < allStudents.length; i++){
        results = results + "<option value='"+allStudents[i].id+"'>"+allStudents[i].firstName + " " + allStudents[i].lastName+"</option>"
    }
    document.getElementById("selectStudent").innerHTML = results;

    var results2 = " "
    for(var j =0; j < allSections.length; j++){
        results2 = results2 + "<option value='"+allSections[j].id+"'>"+allSections[j].classSubject+"</option>"
    }
    document.getElementById("selectSection").innerHTML = results2;

    var results3 = " "
    for(var i = 0; i < allStudents.length; i++){
        results3 = results3 + "<option value='"+allStudents[i].id+"'>"+allStudents[i].firstName + " " + allStudents[i].lastName+"</option>"
    }
    document.getElementById("selectStudent2").innerHTML = results3;

    var results4 = " "
    for(var j =0; j < allSections.length; j++){
        results4 = results4 + "<option value='"+allSections[j].id+"'>"+allSections[j].classSubject+"</option>"
    }
    document.getElementById("selectSection2").innerHTML = results4;
}

function addStudent(){
    var fName = document.getElementById("studentsFirstName").value
    var lName = document.getElementById("studentsLastName").value
    var grade = document.getElementById("selectBox").value

    if(document.getElementById("studentsFirstName").value == "" || document.getElementById("studentsLastName").value == ""){
        alert("Make sure that everything is filled out before adding the student")
        return;
    }
    allStudents.push(new Student(fName,lName,parseInt(grade)));

    var results = " "
    for(var i = 0; i < allStudents.length; i++){
        results = results + "<option value='"+allStudents[i].id+"'>"+allStudents[i].firstName + " " + allStudents[i].lastName+"</option>"
    }
    document.getElementById("selectStudent").innerHTML = results;

    var results3 = " "
    for(var i = 0; i < allStudents.length; i++){
        results3 = results3 + "<option value='"+allStudents[i].id+"'>"+allStudents[i].firstName + " " + allStudents[i].lastName+"</option>"
    }
    document.getElementById("selectStudent2").innerHTML = results3;

}

function addTeacher(){
    var fName = document.getElementById("teachersFirstName").value
    var lName = document.getElementById("teachersLastName").value
    var subject = document.getElementById("teachersSubject").value

    if(document.getElementById("teachersFirstName").value == "" || document.getElementById("teachersLastName").value == "" || document.getElementById("teachersSubject").value == ""){
        alert("Make sure that everything is filled out before adding the teacher")
        return;
    }
    allTeachers.push(new Teacher(fName,lName,subject));
}

function addSection(){
    var sectionName = document.getElementById("sectionName").value
    var sectionNumber = document.getElementById("sectionNumber").value

    if(document.getElementById("sectionName").value == "" || document.getElementById("sectionNumber").value == ""){
        alert("Make sure that everything is filled out before adding the section")
        return;
    }
    allSections.push(new Section(sectionName,sectionNumber));

    var results = " "
    for(var i = 0; i < allSections.length; i++){
        results = results + "<option value='"+allSections[i].id+"'>"+allSections[i].classSubject + "</option>"
    }
    document.getElementById("selectSection").innerHTML = results

    var results2 = " "
    for(var j =0; j < allSections.length; j++){
        results2 = results2 + "<option value='"+allSections[j].id+"'>"+allSections[j].classSubject+"</option>"
    }
    document.getElementById("selectSection2").innerHTML = results2;
}

function list(){
    if(document.getElementById("listSomething").value == 1) {
        document.getElementById("listStuff").innerHTML = '';
        for (var i = 0; i < allStudents.length; i++) {
            document.getElementById("listStuff").innerHTML += '<p>' + allStudents[i].firstName + " " + allStudents[i].lastName + " " + allStudents[i].grade + '</p>'
        }
    }

    if(document.getElementById("listSomething").value == 2) {
        document.getElementById("listStuff").innerHTML = '';
        for (var i = 0; i < allTeachers.length; i++) {
            document.getElementById("listStuff").innerHTML += '<p>' + allTeachers[i].firstName + " " + allTeachers[i].lastName + " " + allTeachers[i].classSubject + '</p>'
        }
    }

    if(document.getElementById("listSomething").value == 3) {
        document.getElementById("listStuff").innerHTML = '';
        for (var i = 0; i < allSections.length; i++) {
            document.getElementById("listStuff").innerHTML += '<p><a href="#" onclick="displayStudentsInSection(' + allSections[i].id + ')">' + allSections[i].classSubject + " " + allSections[i].numStudents + '</a></p>'
        }
    }
}

function displayStudentsInSection(x){
    document.getElementById("listStuff2").innerHTML = " "
    var sectionObject = getSectionById(x)
    for(var i = 0; i < sectionObject.studentsInSection.length;i++){
        document.getElementById("listStuff2").innerHTML += '<p>' + sectionObject.studentsInSection[i].firstName + " " + sectionObject.studentsInSection[i].lastName + " " + sectionObject.studentsInSection[i].grade + '</p>'
    }
    //document.getElementById("title6").innerHTML == '<p>'<b> + Students in Section + '</b>'</p>'
}

function hide(){
    document.getElementById("listStuff").innerHTML = " "
}

function addStudentToSection(){
    var sectionId = document.getElementById("selectSection").value;
    var sectionObject = getSectionById(sectionId)
    var studentId = document.getElementById("selectStudent").value;
    var studentObject = getStudentById(studentId)
    console.log(studentObject)
    sectionObject.studentsInSection.push(studentObject)
    console.log(sectionObject)
}

function removeStudentFromSection(){
    var sectionId = document.getElementById("selectSection").value;
    var sectionObject = getSectionById(sectionId)
    var studentId = document.getElementById("selectStudent").value;
    var studentObject = getStudentById(studentId)
    var students = sectionObject.studentsInSection;
    var found = false;

    for(var i = 0; i < students.length; i++){
        if(students[i].id == studentId){
            found = true;
            sectionObject.studentsInSection.splice(i,1);
            break;
        }
    }
    if(found == false){
        alert("Student isn't in the section")
    }

    console.log(sectionObject)
}

function getSectionById(secId){
    //loop through all allSections
    //find the one with the secId we want
    //return section with matching id
    for(var i = 0; i<allSections.length; i++){
        if(allSections[i].id == secId){
            return allSections[i]
        }
    }
}

function getTeacherById(teachId){
    for(var i = 0; i<allTeachers.length; i++){
        if(allTeachers[i].id == teachId){
            return allTeachers[i]
        }
    }
}

function getStudentById(stuId){
    for(var i = 0; i<allStudents.length;i++){
        if(allStudents[i].id == stuId){
            return allStudents[i]
        }
    }
}