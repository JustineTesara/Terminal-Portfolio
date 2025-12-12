const output = document.getElementById("output");
const commandInput = document.getElementById("commandInput");
let commandHistory = [];
let historyIndex = -1;

const portfolio = {
  name: "Justine Tesara",
  title: "Aspiring Developer | Tech Enthusiast",
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
    aws: [
      { name: "EC2 & VPC", level: 75 },
      { name: "S3 & Storage", level: 80 },
      { name: "Lambda & Serverless", level: 70 },
      { name: "IAM & Security", level: 75 },
      { name: "CloudWatch & Monitoring", level: 70 },
    ],
  },
  projects: [
    {
      name: "Backup File Organizer",
      description:
        "A powerful Python automation tool that helps you organize messy folders, create backups, and clean up your files with just a few clicks!",
      tech: "Python, Python Libraries",
      link: "Project Link: https://github.com/JustineTesara/Backup-File-Organizer",
    },
    {
      name: "Online Book Store",
      description:
        "This is a Java Swing-based Online Book Store application with a Graphical User Interface (GUI). It allows Admins to manage books and view orders, while Users can browse, search, and buy books. The project connects to a MySQL database using JDBC.",
      tech: "Java, Swing, MySQL, JDBC",
      link: "Project Link: https://github.com/JustineTesara/Online-Book-Store",
    },
    {
      name: "Outdoor Activity Planner",
      description:
        "A web application that helps users plan their outdoor activities by providing accurate weather predictions and forecasts.",
      tech: "Backend: Node.js with Express.js framework,Frontend: EJS (Embedded JavaScript templating), Chart.js, Styling: CSS3, Data Source: OpenWeatherMap API",
      link: "Project Link: https://github.com/JustineTesara/Outdoor-Activities-Planner",
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
        '  <span class="success">cat</span>          - Display file contents (cat about/skills/projects/experience/contact)'
      );
      addLine(
        '  <span class="success">whoami</span>       - Display information about me'
      );
      addLine(
        '  <span class="success">neofetch</span>     - Show system information'
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
      addLine("total 6", "info");
      addLine(
        'drwxr-xr-x 2 guest guest 4096 Dec 11 12:00 <span class="info">about</span>'
      );
      addLine(
        'drwxr-xr-x 2 guest guest 4096 Dec 11 12:00 <span class="info">skills</span>'
      );
      addLine(
        'drwxr-xr-x 2 guest guest 4096 Dec 11 12:00 <span class="info">projects</span>'
      );
      addLine(
        'drwxr-xr-x 2 guest guest 4096 Dec 11 12:00 <span class="info">experience</span>'
      );
      addLine(
        'drwxr-xr-x 2 guest guest 4096 Dec 11 12:00 <span class="info">contact</span>'
      );
      addLine("-rw-r--r-- 1 guest guest  256 Dec 11 12:00 README.md");
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

    case "cat":
      if (args.length < 2) {
        addLine("cat: missing file operand", "error");
        addLine("Try 'cat about' or 'cat skills'", "info");
      } else {
        const file = args[1].toLowerCase();
        switch (file) {
          case "about":
          case "readme.md":
            addLine("# About Me", "success");
            addLine("");
            addLine(`Name: ${portfolio.name}`);
            addLine(`Title: ${portfolio.title}`);
            addLine(`Location: ${portfolio.location}`);
            addLine("");
            addLine(
              "I am a passionate developer who loves creating amazing web experiences."
            );
            addLine(
              "I am aspiring to build a career in software development, focusing on modern web"
            );
            addLine(" technologies and best practices.");
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
                  22
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
                  22
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
                  22
                )} [${bar}] ${skill.level}%`
              );
            });
            addLine("│");
            addLine("└── aws/");
            portfolio.skills.aws.forEach((skill, i) => {
              const filled = Math.floor(skill.level / 5);
              const empty = 20 - filled;
              const bar = "█".repeat(filled) + "░".repeat(empty);
              const isLast = i === portfolio.skills.aws.length - 1;
              addLine(
                `    ${isLast ? "└──" : "├──"} ${skill.name.padEnd(
                  22
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
                project.link
                  ? `   <span class="warning">${project.link}</span>`
                  : ""
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
