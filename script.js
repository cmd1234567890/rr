//Kasen  223190609
// Start the program  
console.log("Welcome to the Student Grade Calculation System.");  
console.log("Do you need help with the calculation? (yes/no)");  
  
// Collect user response  
var userResponse = prompt("Do you need help with the calculation? (yes/no)");  
  
if (userResponse.toLowerCase() === "yes" || userResponse.toLowerCase() === "y") {  
    // Collect input for full name  
    var fullName = prompt("Please enter your full name:");  
      
    // Collect input for grades  
    var gradeUnit1 = parseFloat(prompt("Please enter the grade for Unit 1:"));  
    var gradeUnit2 = parseFloat(prompt("Please enter the grade for Unit 2:"));  
    var gradeUnit3 = parseFloat(prompt("Please enter the grade for Unit 3:"));  
    var gradeUnit4 = parseFloat(prompt("Please enter the grade for Unit 4:"));  
      
    // Calculate total and average scores  
    var totalScore = gradeUnit1 + gradeUnit2 + gradeUnit3 + gradeUnit4;  
    var averageScore = totalScore / 4;  
      
    // Display output  
    console.log("Total Score: " + totalScore);  
    console.log("Average Score: " + averageScore);  
      
    console.log("Thank you for using the Student Grade Calculation System.");  
} else {  
    console.log("If you need assistance, please contact us.");  
}