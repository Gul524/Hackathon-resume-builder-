var _a;
var buildResume = document.getElementById('buildresume');
var resumeName = document.getElementById('name');
var resumeEmail = document.getElementById('email');
var resumePhone = document.getElementById('phone');
var resumeAddress = document.getElementById('address');
var resumeObjective = document.getElementById('objective');
var resumeEducation = document.getElementById('education');
var resumeExperience = document.getElementById('experience');
var resumeSkills = document.getElementById('skills');
(_a = document.getElementById('DynamicResumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = resumeName.value;
    var email = resumeEmail.value;
    var phone = resumePhone.value;
    var address = resumeAddress.value;
    var objective = resumeObjective.value;
    var education = resumeEducation.value;
    var experience = resumeExperience.value;
    var skills = resumeSkills.value;
    // Build resume HTML
    var resume = "\n    \n      <div id=\"a4sizepaper\">\n        <div id=\"personalInfo\">\n          <h1>Personal Information</h1>\n          <h2>".concat(name, "</h2>\n          <p>").concat(address, "</p>\n          <p>").concat(phone, "</p>\n          <p>").concat(email, "</p>\n        </div>\n        <div id=\"objective\">\n          <h3>Objective</h3>\n          <p>").concat(objective, "</p>\n        </div>\n        <div id=\"education\">\n          <h3>Education</h3>\n          <p>").concat(education, "</p>\n        </div>\n        <div id=\"skills\">\n          <h3>Skills</h3>\n          <p>").concat(skills, "</p>\n        </div>\n        <div id=\"experience\">\n          <h3>Experience</h3>\n          <p>").concat(experience, "</p>\n        </div>  \n      </div><br>\n      <a href=\"#DynamicResumeForm\" id='button'>Edit</a>\n  ");
    buildResume.innerHTML = resume;
});
