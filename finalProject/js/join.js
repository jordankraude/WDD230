const formId = "FPjoin"; // ID of the form
const url = location.href; //  href for the page
const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const saveButton = document.querySelector("#save"); // select save button
const alertBox = document.querySelector(".alert"); // select alert display div
let form = document.querySelector(`#${formId}`); // select form
let formElements = form.elements; // get the elements in the form

const getFormData = () => {
    let data = { [formIdentifier]: {} }; // create an empty object with the formIdentifier as the key and an empty object as its value
    for (const element of formElements) {
      if (element.name.length > 0) {
        data[formIdentifier][element.name] = element.value;
      }
    }
    return data;
  };
  saveButton.onclick = event => {
    event.preventDefault();
    data = getFormData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
    const message = "Form draft has been saved!";
    document.location.href = "../finalProject/joinMembership.html";

  }


function createMembershipCode(){
    // If this was real I could check to make sure the calculated code does not already exist. If it does recur to get a new number.
    var number1 = Math.floor(Math.random() * 10)
    var number2 = Math.floor(Math.random() * 10)
    var number3 = Math.floor(Math.random() * 10)
    var number4 = Math.floor(Math.random() * 10)
    var number5 = Math.floor(Math.random() * 10)
    var number6 = Math.floor(Math.random() * 10)
    var number7 = Math.floor(Math.random() * 10)
    var number8 = Math.floor(Math.random() * 10)
    var number9 = Math.floor(Math.random() * 10)

    var membershipCode = number1.toLocaleString + number2.toLocaleString + number3.toLocaleString + number4.toLocaleString + number5.toLocaleString + number6.toLocaleString + number7.toLocaleString + number8.toLocaleString + number9.toLocaleString
    document.getElementById('memberCode').setAttribute.value = membershipCode
}