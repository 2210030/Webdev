function addingRowToTable(){

    var Username = document.sample.Username.value;
    var emailaddress = document.sample.emailaddress.value;
    var StudentID = document.sample.StudentID.value;
    var StudentName = document.sample.StudentName.value;
    var Age = document.sample.Age.value;
    var Address = document.sample.Address.value;
    var MobileNumber = document.sample.MobileNumber.value;
    var Gender = document.sample.Gender.value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    var td8 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = Username;
    td1.innerHTML = emailaddress;
    td1.innerHTML = StudentID;
    td1.innerHTML = StudentName;
    td1.innerHTML = Age;
    td1.innerHTML = Address;
    td1.innerHTML = MobileNumber;
    td1.innerHTML = Gender;

    document.getElementById('table').appendChild('tr');


}