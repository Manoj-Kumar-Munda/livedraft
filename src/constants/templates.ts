export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imgUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "business",
    label: "Business Letter",
    imgUrl: "/business-letter.svg",
    initialContent: `
      <p><strong>Your Company Name</strong></p>
      <p>123 Business Road<br>City, State ZIP Code</p>
      <p><strong>Date:</strong> July 14, 2025</p>
      <p><strong>Recipient Name</strong><br>Job Title<br>Company Name<br>Address</p>
      <p>Dear [Recipient's Name],</p>
      <p>I am writing to [brief reason for the letter].</p>
      <p>[Body of the letter]</p>
      <p>Sincerely,<br><strong>Your Name</strong><br>Job Title</p>
    `,
  },
  {
    id: "cover",
    label: "Cover Letter",
    imgUrl: "/cover-letter.svg",
    initialContent: `
      <p><strong>Your Name</strong><br>Your Address<br>Email | Phone</p>
      <p><strong>Date:</strong> July 14, 2025</p>
      <p><strong>Hiring Manager</strong><br>Company Name<br>Address</p>
      <p>Dear Hiring Manager,</p>
      <p>I am excited to apply for the [Job Title] position at [Company Name]. With my background in [brief background], I believe I am a strong candidate for this role.</p>
      <p>[Explain qualifications and enthusiasm]</p>
      <p>Thank you for considering my application.</p>
      <p>Sincerely,<br><strong>Your Name</strong></p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imgUrl: "/letter.svg",
    initialContent: `
      <p><strong>Your Name</strong><br>Address<br>Date: July 14, 2025</p>
      <p>Dear [Recipient],</p>
      <p>I hope this message finds you well. I'm writing to you regarding [reason for writing].</p>
      <p>[Body content]</p>
      <p>Warm regards,<br><strong>Your Name</strong></p>
    `,
  },
  {
    id: "project",
    label: "Project Proposal",
    imgUrl: "/project-proposal.svg",
    initialContent: `
      <h2>Project Proposal: [Project Title]</h2>
      <p><strong>Prepared by:</strong> Your Name</p>
      <p><strong>Date:</strong> July 14, 2025</p>
      <h3>1. Introduction</h3>
      <p>Brief overview of the problem or opportunity the project addresses.</p>
      <h3>2. Objectives</h3>
      <ul>
        <li>Goal 1</li>
        <li>Goal 2</li>
      </ul>
      <h3>3. Plan and Timeline</h3>
      <p>Steps to be taken and estimated duration.</p>
      <h3>4. Budget</h3>
      <p>Estimated costs and resources needed.</p>
      <h3>5. Conclusion</h3>
      <p>Summary and call to action.</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imgUrl: "/resume.svg",
    initialContent: `
      <h1>Your Full Name</h1>
      <p>Email | Phone | LinkedIn | Portfolio</p>
      <h2>Professional Summary</h2>
      <p>Brief 2-3 line summary about your skills and experience.</p>
      <h2>Experience</h2>
      <p><strong>Job Title</strong> — Company Name<br><em>Start Date – End Date</em></p>
      <ul>
        <li>Responsibility or achievement 1</li>
        <li>Responsibility or achievement 2</li>
      </ul>
      <h2>Education</h2>
      <p><strong>Degree</strong> — University<br><em>Graduation Year</em></p>
      <h2>Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
      </ul>
    `,
  },
  {
    id: "software",
    label: "Software Proposal",
    imgUrl: "/software-proposal.svg",
    initialContent: `
      <h2>Software Proposal: [Project Name]</h2>
      <p><strong>Prepared by:</strong> Your Name</p>
      <p><strong>Date:</strong> July 14, 2025</p>
      <h3>Overview</h3>
      <p>Short introduction about the software, its purpose, and target audience.</p>
      <h3>Features</h3>
      <ul>
        <li>Key Feature 1</li>
        <li>Key Feature 2</li>
      </ul>
      <h3>Technology Stack</h3>
      <p>Technologies and frameworks to be used (e.g., React, Node.js, MongoDB).</p>
      <h3>Development Plan</h3>
      <p>Phases of development with timelines.</p>
      <h3>Budget & Resources</h3>
      <p>Cost estimation and resource requirements.</p>
      <h3>Conclusion</h3>
      <p>Summary and expected impact.</p>
    `,
  },
];
