const output = document.getElementById("output");
const commandInput = document.getElementById("commandInput");
let commandHistory = [];
let historyIndex = -1;

const portfolio = {
  name: "Justine Tesara",
  title:
    "Aspiring IT Support / Junior IT Professional Interested in Cybersecurity and Software Development",
  email: "justine.tesara0907@gmail.com",
  github: "https://github.com/JustineTesara",
  linkedin: "https://www.linkedin.com/in/justine-tesara-a59674318/",
  location: "Polangui, Albay, Philippines",
  skills: {
    development: [
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Node.js/ExpressJS", level: 80 },
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "Git/GitHub", level: 80 },
      { name: "React", level: 50 },
      { name: "SQL/NoSQL", level: 75 },
      { name: "RESTful APIs", level: 80 },
    ],
    networking: [
      { name: "TCP/IP & Networking", level: 85 },
      { name: "DNS & DHCP", level: 80 },
      { name: "Firewalls & Security", level: 60 },
      { name: "Network Troubleshooting", level: 90 },
    ],
    techSupport: [
      { name: "Operating Systems (Windows/Linux)", level: 90 },
      { name: "Software Installation", level: 85 },
      { name: "Hardware Troubleshooting", level: 85 },
      { name: "Active Directory", level: 80 },
      { name: "Remote Support Tools", level: 85 },
    ],
  },
  projects: [
    {
      name: "Backup File Organizer",
      description:
        "A powerful Python automation tool that helps you organize messy folders, create backups, and clean up your files with just a few clicks!",
      tech: "Python, Python Libraries",
      link: "https://github.com/JustineTesara/Backup-File-Organizer",
    },
    {
      name: "Online Book Store",
      description:
        "This is a Java Swing-based Online Book Store application with a Graphical User Interface (GUI). It allows Admins to manage books and view orders, while Users can browse, search, and buy books. The project connects to a MySQL database using JDBC.",
      tech: "Java, Swing, MySQL, JDBC",
      link: "https://github.com/JustineTesara/Online-Book-Store",
    },
    {
      name: "Outdoor Activity Planner",
      description:
        "A web application that helps users plan their outdoor activities by providing accurate weather predictions and forecasts.",
      tech: "Node.js, Express.js, EJS, Chart.js, CSS3, OpenWeatherMap API",
      link: "https://github.com/JustineTesara/Outdoor-Activities-Planner",
    },
  ],
  experience: [
    {
      role: "IT Support Intern",
      company: "Sutherland Global Services",
      period: "February 2025-May 2025",
      description:
        "As an IT Support Intern, I diagnosed and fixed hardware/software issues, monitored network connectivity, set up computers and peripherals, organized accessories, managed cables for efficient workstations, and reimaged systems for deployment.",
    },
  ],
};

function addLine(text, className = "output") {
  const line = document.createElement("div");
  line.className = `line ${className}`;
  line.innerHTML = text;
  output.appendChild(line);
  output.parentElement.scrollTop = output.parentElement.scrollHeight;
}

function generateCV() {
  // Create HTML content for better formatting
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Justine Tesara - CV</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; }
        h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
        h2 { color: #34495e; margin-top: 30px; border-bottom: 2px solid #95a5a6; padding-bottom: 5px; }
        .section { margin-bottom: 25px; }
        .contact { background: #ecf0f1; padding: 15px; border-radius: 5px; }
        .skill-category { margin: 10px 0; }
        .project, .experience { margin: 15px 0; padding: 15px; background: #f8f9fa; border-left: 4px solid #3498db; }
        strong { color: #2c3e50; }
    </style>
</head>
<body>
    <h1>JUSTINE TESARA</h1>
    <p><strong>${portfolio.title}</strong></p>
    
    <div class="contact">
        <h2>Contact Information</h2>
        <p>📧 Email: ${portfolio.email}</p>
        <p>📍 Location: ${portfolio.location}</p>
        <p>💼 LinkedIn: ${portfolio.linkedin}</p>
        <p>🔗 GitHub: ${portfolio.github}</p>
        <p>📞 Phone: +63 9519346722</p>
    </div>

    <div class="section">
        <h2>Education</h2>
        <p><strong>BICOL UNIVERSITY POLANGUI</strong></p>
        <p>Bachelor of Science in Information Technology</p>
        <p>Cum Laude | GWA 1.59 (2021-2025)</p>
    </div>

    <div class="section">
        <h2>About Me</h2>
        <p>I am an aspiring IT professional.
          I am interested in Cybersecurity and Software Development.
          Currently building skills in Linux, networking, and web projects.
        </p>
    </div>

    <div class="section">
        <h2>Technical Skills</h2>
        
        <div class="skill-category">
            <strong>Development:</strong>
            ${portfolio.skills.development
              .map((s) => `${s.name} (${s.level}%)`)
              .join(", ")}
        </div>
        
        <div class="skill-category">
            <strong>Networking:</strong>
            ${portfolio.skills.networking
              .map((s) => `${s.name} (${s.level}%)`)
              .join(", ")}
        </div>
        
        <div class="skill-category">
            <strong>Tech Support:</strong>
            ${portfolio.skills.techSupport
              .map((s) => `${s.name} (${s.level}%)`)
              .join(", ")}
        </div>

        <div class="skill-category">
            <strong>Front-End:</strong> HTML, CSS, JavaScript, Bootstrap, React.js (still learning)
        </div>

        <div class="skill-category">
            <strong>Back-End:</strong> PHP, Node.js/Express.js, MySQL, Python (Flask)
        </div>

        <div class="skill-category">
            <strong>Tools:</strong> Git, GitHub, VSCode, Postman
        </div>

        <div class="skill-category">
            <strong>AI Tools:</strong> Claude, ChatGPT, Gemini, GROK
        </div>

        <div class="skill-category">
            <strong>Soft Skills:</strong> Eager to learn, Adaptability, Teamwork, Problem Solving, Communication
        </div>
    </div>

    <div class="section">
        <h2>Projects</h2>
        ${portfolio.projects
          .map(
            (project) => `
            <div class="project">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p><strong>Tech Stack:</strong> ${project.tech}</p>
                <p><strong>Link:</strong> <a href="${project.link}" target="_blank">${project.link}</a></p>
            </div>
        `
          )
          .join("")}
        
        <div class="project">
            <h3>Portfolio Website</h3>
            <p>Live Site: <a href="https://tesarajustine.netlify.app/" target="_blank">https://tesarajustine.netlify.app/</a></p>
        </div>
    </div>

    <div class="section">
        <h2>Work Experience</h2>
        ${portfolio.experience
          .map(
            (exp) => `
            <div class="experience">
                <h3>${exp.role}</h3>
                <p><strong>${exp.company}</strong> | ${exp.period}</p>
                <p>${exp.description}</p>
            </div>
        `
          )
          .join("")}
    </div>

    <div class="section">
        <h2>Achievements & Certifications</h2>
        <ul>
            <li>Certificate of Recognition in Sutherland</li>
            <li>Python Basic (HackerRank)</li>
            <li>Python Essentials 1 (Cisco Networking Academy)</li>
            <li>Certification of Completion in JAVA NCIII (TESDA)</li>
            <li>AWS Cloud Quest: Cloud Practitioner (Certificate of Completion)</li>
        </ul>
    </div>

    <div class="section">
        <h2>Languages</h2>
        <p>English, Filipino</p>
    </div>
</body>
</html>
  `;

  // Create blob and download as HTML (can be opened in browser and saved as PDF)
  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Justine_Tesara_CV.html";
  a.click();
  URL.revokeObjectURL(url);
}

function showWelcome() {
  addLine(
    '<pre class="ascii-art">' +
      "    ____             __  ____      ___      \n" +
      "   / __ \\____  _____/ /_/ __/___  / (_)___  \n" +
      "  / /_/ / __ \\/ ___/ __/ /_/ __ \\/ / / __ \\ \n" +
      " / ____/ /_/ / /  / /_/ __/ /_/ / / / /_/ / \n" +
      "/_/    \\____/_/   \\__/_/  \\____/_/_/\\____/  \n" +
      "</pre>"
  );
  addLine("");
  addLine(`Welcome to ${portfolio.name}'s Portfolio Terminal`, "success");
  addLine("Last login: " + new Date().toLocaleString(), "info");
  addLine("");
  addLine(
    'Type <span class="help-command" onclick="executeCommand(\'help\')">help</span> or <span class="help-command" onclick="executeCommand(\'ls\')">ls</span> to see available commands',
    "output"
  );
  addLine("");
}

function showStats() {
  const totalSkills = Object.values(portfolio.skills).reduce(
    (sum, cat) => sum + cat.length,
    0
  );
  const avgSkillLevel = Math.round(
    Object.values(portfolio.skills)
      .flat()
      .reduce((sum, skill) => sum + skill.level, 0) / totalSkills
  );

  addLine('<div class="stats-box">', "output");
  addLine('📊 <span class="success">PORTFOLIO STATISTICS</span>', "info");
  addLine("");
  addLine(`Total Skills: ${totalSkills} technologies`);
  addLine(`Average Proficiency: ${avgSkillLevel}%`);
  addLine(`Completed Projects: ${portfolio.projects.length}`);
  addLine(`Work Experience: ${portfolio.experience.length} position(s)`);
  addLine("");

  // Top skills
  const allSkills = Object.values(portfolio.skills).flat();
  const topSkills = allSkills.sort((a, b) => b.level - a.level).slice(0, 5);
  addLine('🏆 <span class="warning">Top 5 Skills:</span>');
  topSkills.forEach((skill, i) => {
    addLine(`   ${i + 1}. ${skill.name} - ${skill.level}%`);
  });
  addLine("</div>");
}

function showTimeline() {
  addLine('📅 <span class="success">CAREER TIMELINE</span>', "info");
  addLine("");

  portfolio.experience.forEach((exp) => {
    addLine('<div class="timeline-item">', "output");
    addLine(`<span class="warning">${exp.period}</span>`, "info");
    addLine(`<span class="success">${exp.role}</span> at ${exp.company}`);
    addLine(`${exp.description}`);
    addLine("</div>");
  });
}

function executeCommand(cmd) {
  const command = cmd.trim();
  const args = command.split(" ");
  const mainCmd = args[0].toLowerCase();

  if (command) {
    commandHistory.unshift(command);
    historyIndex = -1;
  }

  addLine(
    `<span class="prompt"><span class="user">guest</span>@<span class="host">portfolio</span>:<span class="path">~</span>$ </span><span class="command">${command}</span>`
  );

  switch (mainCmd) {
    case "help":
    case "man":
      addLine("Available commands:", "info");
      addLine("");
      addLine(
        '  <span class="success">ls</span>           - List available sections'
      );
      addLine(
        '  <span class="success">cat</span>          - Display file contents (about/skills/projects/experience/contact)'
      );
      addLine(
        '  <span class="success">whoami</span>       - Display information about me'
      );
      addLine(
        '  <span class="success">neofetch</span>     - Show system information'
      );
      addLine(
        '  <span class="success">stats</span>        - Display portfolio statistics'
      );
      addLine(
        '  <span class="success">timeline</span>     - Show career timeline'
      );
      addLine(
        '  <span class="success">download</span>     - Download CV/Resume'
      );
      addLine(
        '  <span class="success">history</span>      - Show command history'
      );
      addLine(
        '  <span class="success">clear</span>        - Clear the terminal'
      );
      addLine(
        '  <span class="success">exit</span>         - Exit the portfolio'
      );
      addLine(
        '  <span class="success">help</span>         - Show this help message'
      );
      break;

    case "ls":
    case "ll":
      addLine("total 7", "info");
      addLine(
        '-rw-r--r-- 1 guest guest  512 Dec 13 12:00 <span class="warning">README.md</span>'
      );
      addLine(
        'drwxr-xr-x 2 guest guest 4096 Dec 13 12:00 <span class="info">about</span>'
      );
      addLine(
        'drwxr-xr-x 2 guest guest 4096 Dec 13 12:00 <span class="info">skills</span>'
      );
      addLine(
        'drwxr-xr-x 2 guest guest 4096 Dec 13 12:00 <span class="info">projects</span>'
      );
      addLine(
        'drwxr-xr-x 2 guest guest 4096 Dec 13 12:00 <span class="info">experience</span>'
      );
      addLine(
        'drwxr-xr-x 2 guest guest 4096 Dec 13 12:00 <span class="info">contact</span>'
      );
      addLine(
        '-rwxr-xr-x 1 guest guest 2048 Dec 13 12:00 <span class="success">download_cv.sh</span>'
      );
      break;

    case "whoami":
      addLine(`${portfolio.name}`, "success");
      addLine(`${portfolio.title}`, "info");
      break;

    case "neofetch":
      addLine(
        '<pre class="ascii-art">' +
          "         _nnnn_\n" +
          "        dGGGGMMb\n" +
          "       @p~qp~~qMb\n" +
          "       M|@||@) M|\n" +
          "       @,----.JM|\n" +
          "      JS^\\__/  qKL\n" +
          "     dZP        qKRb\n" +
          "    dZP          qKKb\n" +
          "   fZP            SMMb\n" +
          "   HZM            MMMM\n" +
          "   FqM            MMMM\n" +
          " </pre>"
      );
      addLine(
        `<span class="user">guest</span>@<span class="host">portfolio</span>`,
        "success"
      );
      addLine("─────────────────────────");
      addLine(`<span class="info">Name:</span> ${portfolio.name}`);
      addLine(`<span class="info">Role:</span> ${portfolio.title}`);
      addLine(`<span class="info">Location:</span> ${portfolio.location}`);
      addLine(`<span class="info">Email:</span> ${portfolio.email}`);
      const totalSkills = Object.values(portfolio.skills).reduce(
        (sum, cat) => sum + cat.length,
        0
      );
      addLine(`<span class="info">Skills:</span> ${totalSkills} technologies`);
      addLine(
        `<span class="info">Projects:</span> ${portfolio.projects.length} completed`
      );
      break;

    case "stats":
    case "statistics":
      showStats();
      break;

    case "timeline":
      showTimeline();
      break;

    case "download":
    case "cv":
    case "resume":
      addLine('📄 <span class="success">Download CV/Resume</span>', "info");
      addLine("");
      addLine("Click the button below to download:");
      addLine(
        '<a href="#" class="download-btn" onclick="generateCV(); return false;">⬇️ Download CV (HTML)</a>'
      );
      addLine("");
      addLine(
        '<span class="info">💡 Tip: After download, open the HTML file and use "Print to PDF" in your browser to save as PDF!</span>'
      );
      setTimeout(() => {
        addLine("✅ Download ready! Check your downloads folder.", "success");
      }, 1000);
      break;

    case "cat":
      if (args.length < 2) {
        addLine("cat: missing file operand", "error");
        addLine("Try 'cat about' or 'cat skills'", "info");
      } else {
        const file = args[1].toLowerCase();
        switch (file) {
          case "readme":
          case "readme.md":
            addLine("# 📁 Portfolio Terminal", "success");
            addLine("");
            addLine("Welcome to my interactive terminal portfolio!");
            addLine("");
            addLine("## 🚀 Quick Start", "info");
            addLine("");
            addLine("Try these commands:");
            addLine(
              '  • <span class="help-command" onclick="executeCommand(\'cat about\')">cat about</span>      - Learn about me'
            );
            addLine(
              '  • <span class="help-command" onclick="executeCommand(\'cat skills\')">cat skills</span>    - View technical skills'
            );
            addLine(
              '  • <span class="help-command" onclick="executeCommand(\'stats\')">stats</span>         - Portfolio statistics'
            );
            addLine(
              '  • <span class="help-command" onclick="executeCommand(\'download\')">download</span>      - Download my CV'
            );
            addLine("");
            addLine("Enjoy exploring! 🎉");
            break;

          case "about":
            addLine("# About Me", "success");
            addLine("");
            addLine(`Name: ${portfolio.name}`);
            addLine(`Title: ${portfolio.title}`);
            addLine(`Location: ${portfolio.location}`);
            addLine("");
            addLine("I am an aspiring IT professional.");
            addLine(
              "I am interested in Cybersecurity and Software Development."
            );
            addLine(
              "Currently building skills in Linux, networking, and web projects."
            );
            break;

          case "skills":
            addLine("# Technical Skills", "success");
            addLine("");
            addLine("skills/");
            addLine("├── development/");
            portfolio.skills.development.forEach((skill, i) => {
              const filled = Math.floor(skill.level / 5);
              const empty = 20 - filled;
              const bar = "█".repeat(filled) + "░".repeat(empty);
              const isLast = i === portfolio.skills.development.length - 1;
              addLine(
                `│   ${isLast ? "└──" : "├──"} ${skill.name.padEnd(
                  30
                )} [${bar}] ${skill.level}%`
              );
            });
            addLine("│");
            addLine("├── networking/");
            portfolio.skills.networking.forEach((skill, i) => {
              const filled = Math.floor(skill.level / 5);
              const empty = 20 - filled;
              const bar = "█".repeat(filled) + "░".repeat(empty);
              const isLast = i === portfolio.skills.networking.length - 1;
              addLine(
                `│   ${isLast ? "└──" : "├──"} ${skill.name.padEnd(
                  30
                )} [${bar}] ${skill.level}%`
              );
            });
            addLine("│");
            addLine("├── tech-support/");
            portfolio.skills.techSupport.forEach((skill, i) => {
              const filled = Math.floor(skill.level / 5);
              const empty = 20 - filled;
              const bar = "█".repeat(filled) + "░".repeat(empty);
              const isLast = i === portfolio.skills.techSupport.length - 1;
              addLine(
                `│   ${isLast ? "└──" : "├──"} ${skill.name.padEnd(
                  30
                )} [${bar}] ${skill.level}%`
              );
            });

            break;

          case "projects":
            addLine("# Projects", "success");
            addLine("");
            portfolio.projects.forEach((project, i) => {
              addLine(`## ${i + 1}. ${project.name}`, "info");
              addLine(`   ${project.description}`);
              addLine(
                `   <span class="warning">Tech Stack:</span> ${project.tech}`
              );
              addLine(
                `   <span class="warning">Link:</span> <a href="${project.link}" target="_blank">${project.link}</a>`
              );
              addLine("");
            });
            break;

          case "experience":
            addLine("# Work Experience", "success");
            addLine("");
            portfolio.experience.forEach((exp, i) => {
              addLine(`## ${exp.role}`, "info");
              addLine(`   Company: ${exp.company}`);
              addLine(`   Period: ${exp.period}`);
              addLine(`   ${exp.description}`);
              addLine("");
            });
            break;

          case "contact":
            addLine("# Contact Information", "success");
            addLine("");
            addLine(
              `Email:    <a href="mailto:${portfolio.email}">${portfolio.email}</a>`
            );
            addLine(
              `GitHub:   <a href="${portfolio.github}" target="_blank">${portfolio.github}</a>`
            );
            addLine(
              `LinkedIn: <a href="${portfolio.linkedin}" target="_blank">${portfolio.linkedin}</a>`
            );
            addLine("");
            addLine(
              '💼 <span class="info">Ready to collaborate? Download my CV with</span> <span class="help-command" onclick="executeCommand(\'download\')">download</span>'
            );
            break;

          default:
            addLine(`cat: ${file}: No such file or directory`, "error");
        }
      }
      break;

    case "history":
      commandHistory
        .slice()
        .reverse()
        .forEach((cmd, i) => {
          addLine(`  ${i + 1}  ${cmd}`);
        });
      break;

    case "clear":
      output.innerHTML = "";
      break;

    case "exit":
    case "quit":
      addLine("Logging out...", "info");
      setTimeout(() => {
        addLine("Thank you for visiting! Goodbye! 👋", "success");
        addLine(
          'Don\'t forget to <span class="help-command" onclick="executeCommand(\'download\')">download my CV</span>! 📄',
          "info"
        );
      }, 500);
      break;

    case "":
      break;

    default:
      addLine(`bash: ${mainCmd}: command not found`, "error");
      addLine(
        'Type <span class="help-command" onclick="executeCommand(\'help\')">help</span> to see available commands',
        "info"
      );
  }

  addLine("");
}

commandInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = commandInput.value;
    executeCommand(cmd);
    commandInput.value = "";
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      commandInput.value = commandHistory[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      commandInput.value = commandHistory[historyIndex];
    } else if (historyIndex === 0) {
      historyIndex = -1;
      commandInput.value = "";
    }
  }
});

// Initialize
showWelcome();
