document.getElementById("ageForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  document.getElementById("result").textContent = ""; // Clear previous result

  var birthDate = document.getElementById("birthDate").value;
  var today = new Date().toISOString().slice(0, 10); // Get current date

  if (birthDate > today) {
    showError("Birth date cannot be in the future");
    return;
  }

  var age = calculateAge(birthDate, today);
  if (age === -1) {
    showError("Invalid date format");
    return;
  }

  document.getElementById("result").textContent = "Your age is: " + age;
});

function calculateAge(birthDate, today) {
  var birthYear = parseInt(birthDate.substring(0, 4));
  var birthMonth = parseInt(birthDate.substring(5, 7));
  var birthDay = parseInt(birthDate.substring(8, 10));

  var todayYear = parseInt(today.substring(0, 4));
  var todayMonth = parseInt(today.substring(5, 7));
  var todayDay = parseInt(today.substring(8, 10));

  if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay) || isNaN(todayYear) || isNaN(todayMonth) || isNaN(todayDay)) {
    return -1;
  }

  var age = todayYear - birthYear;
  if (todayMonth < birthMonth || (todayMonth === birthMonth && todayDay < birthDay)) {
    age--;
  }

  return age;
}

function showError(message) {
  var errorElement = document.createElement("p");
  errorElement.classList.add("error");
  errorElement.textContent = message;
  document.getElementById("result").appendChild(errorElement);
}
