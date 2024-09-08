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
                <h1>RESUME</h1>
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
        <table>
            <tr>
                <th><a href="#DynamicResumeForm" id='button'>Edit</a></th>
                <th><button id="download-resume">Download Resume</button></th>
                <th><button id="share-resume">Share Resume</button></th>
            </tr>
        </table>
    `;

    buildResume.innerHTML = resume;

    location.href = '#personalInfo';

    // Add event listeners for buttons
    const downloadButton = document.getElementById("download-resume") as HTMLButtonElement;
    downloadButton.addEventListener("click", () => {
        window.print();
    });

    const shareButton = document.getElementById("share-resume") as HTMLButtonElement;
    shareButton.addEventListener("click", () => {
        const shareUrl = "https://hackathon-resume-builder-equ3.vercel.app/";

        if (navigator.share) {
            navigator.share({
                title: 'My Resume',
                url: shareUrl,
            }).catch(console.error);
        } else {
            window.prompt("Copy this link to share:", shareUrl);
        }
    });
});
