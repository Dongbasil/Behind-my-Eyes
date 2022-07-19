/* .js files add interaction to your website */


// fact generator
var factList = [
" Mental health is determined by a complex interplay of individual, social and structural stresses and vulnerabilities.",
  "Mental health has intrinsic and instrumental value and is integral to our well-being.",
  "One in five American adults experienced a mental health issue",
  "One in 6 young people experienced a major depressive episode",
  "One in 20 Americans lived with a serious mental illness, such as schizophrenia, bipolar disorder, or major depression",
  "Suicide is a leading cause of death in the United States. In fact, it was the 2nd leading cause of death for people ages 10-24.",
  "Treatment for mental health problems varies depending on the individual and could include medication, therapy, or both. ",
  "Youth depression rates have risen from 5.9% to 8.2% since 2012. Depression symptoms can impact performance in school and interfere with personal relationships.",
  "Half of all mental health disorders show first signs before a person turns 14 years old, and three-quarters of mental health disorders begin before age 24.",
  "Many factors contribute to the development of a mental health condition, including life experiences (such as trauma or a history of abuse), biological factors, and family history of mental illness.",
  "Members of LGBTQ+ community are almost 3 times more likely to experience a mental health condition such as major depression or generalized anxiety disorder.",
  "Many factors contribute to the development of a mental health condition, including life experiences (such as trauma or a history of abuse), biological factors, and family history of mental illness."
];

var fact = document.getElementById("fact");
var factBut = document.getElementById("factBut");
var count = 0;

if (factBut) {
  factBut.addEventListener("click",displayFact);
  }

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

//take action form
var displayForm = document.getElementById("formReturn");
var formBtn = document.getElementById("formBtn");

if (formBtn) {
  formBtn.addEventListener("click", getForm);
}
/* function to display form */

function getForm() {
  //variables for form//
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var help = document.getElementById("help").value;

  displayForm.innerHTML = "Hello, I am " + name + " and I am currently residing in " + location + " . I am calling to offer my support for The TREVOR project in accordance to helping with mental health issues as I am fully aware of how prominent these issues are. I am willing to help by " + help + ". I will do my best in any way I can to offer support to this cause . By submitting this form I certify that I am 18years or older.";
}

