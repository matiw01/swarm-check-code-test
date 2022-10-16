
function injectDataToSelect(url, id) {
  let getReq = new XMLHttpRequest();
  getReq.open("GET", url);

  getReq.setRequestHeader("Accept", "application/json");

  getReq.responseType = 'json';

  getReq.onload = () => {

    var options = "";   
    getReq.response.value.forEach(student => {options += "<option value='"+student._id+"'>"+student.surename+"</option>"})

    document.getElementById(id).innerHTML = options
  };
  
  getReq.send();

}



document.addEventListener('DOMContentLoaded', function() {

  injectDataToSelect("http://localhost:4000/student/get-students", "studentSelect")
  injectDataToSelect("http://localhost:4000/coach/get-coaches", "coachSelect")

});

function addStudent(){

  const surename = document.getElementById('studentSurename').value;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:4000/student/add-student");

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onload = () => console.log(xhr.responseText);

  let data = {
    "surename" : surename
  }

  xhr.send(JSON.stringify(data));

}

function addCoach(){

  const surename = document.getElementById('coachSurename').value;
  const capacity = document.getElementById('coachCapacity').value;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:4000/coach/add-coach");

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onload = () => console.log(xhr.responseText);

  let data = {
    "surename" : surename,
    "capacity" : capacity
  }

  xhr.send(JSON.stringify(data));

}

function assignStudent(){

  const studentId = document.getElementById('studentSelect').value;
  const coachId = document.getElementById('coachSelect').value;

  let xhr = new XMLHttpRequest();
  xhr.open("PUT", "http://localhost:4000/coach/add-student");

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onload = () => console.log(xhr.responseText);

  let data = {
    "studentId" : studentId,
    "coachId" : coachId
  }

  xhr.send(JSON.stringify(data));

}