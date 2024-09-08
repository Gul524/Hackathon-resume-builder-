const buildResume = document.getElementById('buildresume') as HTMLElement;
const resumeName = document.getElementById('name') as HTMLInputElement; 
const resumeEmail = document.getElementById('email') as HTMLInputElement;
const resumePhone = document.getElementById('phone') as HTMLInputElement;
const resumeAddress = document.getElementById('address') as HTMLInputElement;
const resumeObjective = document.getElementById('objective') as HTMLInputElement;
const resumeEducation = document.getElementById('education') as HTMLInputElement;
const resumeExperience = document.getElementById('experience') as HTMLInputElement;
const resumeSkills = document.getElementById('skills') as HTMLInputElement;

document.getElementById('DynamicResumeForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
 
  
 
  const name = resumeName.value;
  const email = resumeEmail.value;
  const phone = resumePhone.value;
  const address = resumeAddress.value;
  const objective = resumeObjective.value;
  const education = resumeEducation.value;
  const experience = resumeExperience.value;
  const skills = resumeSkills.value;

  // Build resume HTML
  const resume = `
    
      <div id="a4sizepaper">
        <div id="personalInfo">
          <h1>Personal Information</h1>
          <h2>${name}</h2>
          <p>${address}</p>
          <p>${phone}</p>
          <p>${email}</p>
        </div>
        <div id="objective">
          <h3>Objective</h3>
          <p>${objective}</p>
        </div>
        <div id="education">
          <h3>Education</h3>
          <p>${education}</p>
        </div>
        <div id="skills">
          <h3>Skills</h3>
          <p>${skills}</p>
        </div>
        <div id="experience">
          <h3>Experience</h3>
          <p>${experience}</p>
        </div>  
      </div><br>
      <a href="#DynamicResumeForm" id='button'>Edit</a>
  `;

  buildResume.innerHTML = resume;

 
});
