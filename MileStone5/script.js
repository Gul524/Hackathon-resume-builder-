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
    var resume = "\n    \n      <div id=\"a4sizepaper\">\n        <div id=\"personalInfo\">\n          <h1>Personal Information</h1>\n          <h2>".concat(name, "</h2>\n          <p>").concat(address, "</p>\n          <p>").concat(phone, "</p>\n          <p>").concat(email, "</p>\n        </div>\n        <div id=\"objective\">\n          <h3>Objective</h3>\n          <p>").concat(objective, "</p>\n        </div>\n        <div id=\"education\">\n          <h3>Education</h3>\n          <p>").concat(education, "</p>\n        </div>\n        <div id=\"skills\">\n          <h3>Skills</h3>\n          <p>").concat(skills, "</p>\n        </div>\n        <div id=\"experience\">\n          <h3>Experience</h3>\n          <p>").concat(experience, "</p>\n        </div>  \n      </div><br>\n      <a href=\"#DynamicResumeForm\" id='button'>Edit</a>\n      <button id=\"download-resume\">Download Resume</button>\n      <button id=\"share-resume\">Share Resume</button>\n  ");
    buildResume.innerHTML = resume;
});
document.addEventListener("DOMContentLoaded", function () {
    var downloadButton = document.getElementById("download-resume");
    downloadButton.addEventListener("click", function () {
        var link = document.createElement("a");
        link.href = "resume.html"; // The file to download
        link.download = "my_resume.html";
        link.click();
    });
    var shareButton = document.getElementById("share-resume");
    shareButton.addEventListener("click", function () {
        var shareUrl = "https://example.com/my_resume.html"; // Replace with your unique link
        var shareText = "Check out my resume!";
        if (navigator.share) {
            navigator.share({
                title: 'My Resume',
                text: shareText,
                url: shareUrl,
            }).catch(console.error);
        }
        else {
            // Fallback if Web Share API is not supported
            window.prompt("Copy this link to share:", shareUrl);
        }
    });
});
