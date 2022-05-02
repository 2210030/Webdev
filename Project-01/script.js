var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["mobile"] = document.getElementById("mobile").value;
    formData["color"] = document.getElementById("color").value;
    formData["storage"] = document.getElementById("storage").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("mobileList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.mobile;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.color;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.storage;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("mobile").value = "";
    document.getElementById("color").value = "";
    document.getElementById("storage").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("mobile").value = selectedRow.cells[0].innerHTML;
    document.getElementById("color").value = selectedRow.cells[1].innerHTML;
    document.getElementById("storage").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.mobile;
    selectedRow.cells[1].innerHTML = formData.color;
    selectedRow.cells[2].innerHTML = formData.storage;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("mobileList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("mobile").value == "") {
        isValid = false;
        document.getElementById("mobileValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("mobileValidationError").classList.contains("hide"))
            document.getElementById("mobileValidationError").classList.add("hide");
    }
    return isValid;
}