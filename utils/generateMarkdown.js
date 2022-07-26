// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `# ${data.license}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ` # ${[title]()}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` # ${data.license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table Of Contents

  - [Installation](#installation)

  - [Usage](#usage)

  - [Credits](#credits)

  - [Licensing](#license)

  - [Questions](#questions)

`;
}

module.exports = generateMarkdown;
