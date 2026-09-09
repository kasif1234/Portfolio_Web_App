/* =====================================================================
   CONTENT DATA
   ---------------------------------------------------------------------
   Everything in this DATA object is what shows up on the page for the
   News, Research, Projects, and YouTube sections, plus your contact
   links. To update the site, edit the arrays below and save — you do
   NOT need to touch index.html or style.css.

   Each item is a plain JS object. Add a new one by copying an existing
   object in the same array (including the trailing comma) and editing
   the fields. Order in the array = order shown on the page.
===================================================================== */
const DATA = {

  // ---- contact / social links -----------------------------------
  // Leave a value as "" to hide that link from the profile card.
  LINKS: {
    email:    "mailto:mk2110389@qu.edu.qa",
    linkedin: "",   // e.g. "https://linkedin.com/in/your-handle"
    github:   "",   // e.g. "https://github.com/your-handle"
    scholar:  "",   // e.g. "https://scholar.google.com/citations?user=..."
    youtube:  "",   // e.g. "https://youtube.com/@your-channel"
    cv:       "",   // e.g. "/assets/Mohammad_Kasif_CV.pdf"
  },

  // ---- news (newest first) ----------------------------------------
  // isNew: true shows the small "new" badge on the right.
  NEWS: [
    { date: "Jun 2026", text: "(Paper out soon) Working on materials informatics for organic thermoelectric polymers at QEERI.", isNew: true },
    { date: "Jun 2026", text: "(Paper out soon) Continuing research work on LLM/NL2SQL evaluation and human-centric table question answering.", isNew: true },
    { date: "Jun 2026", text: "(Paper out soon) Got selected for \u201cParameter Space Model Merging for LLMs\u201d project under Dr. AbdelKader Baggag.", isNew: true },
    { date: "May 2026", text: "Preparing research manuscripts and project demos across AI/ML systems.", isNew: false },
    { date: "May 2026", text: "(Paper out soon) Participating in a UREP project at QU's Traffic and Safety Department on turn signal usage and driver behavior analysis.", isNew: true },
    { date: "Mar 2026", text: "Built classroom engagement, attention, and mood detection models for Edgage at QSTP.", isNew: false },
    { date: "Feb 2026", text: "Completed Stanford-affiliated Design Thinking training through QRDI x Iberdrola x Lumi Network.", isNew: false },
    { date: "Jan 2026", text: "Continued research on driver signalling and attention behavior using SCANeR simulation.", isNew: false },
    { date: "Dec 2025", text: "Completed QCRI internship focused on GenAI, NL2SQL, and human-centric table data.", isNew: false },
    { date: "Oct 2025", text: "Worked on surgical instrument detection and segmentation research at HMC.", isNew: false },
    { date: "Sep 2025", text: "Developed AI/ML demos, dashboards, and experiment pipelines for applied research projects.", isNew: false },
    { date: "Aug 2025", text: "Built robotics and PID-based control projects.", isNew: false },
    { date: "Jul 2025", text: "Completed deep learning and PyTorch training projects.", isNew: false },
  ],

  // ---- research experience -----------------------------------------
  // links: leave a value as "" and it renders as a muted, non-clickable tag.
  RESEARCH: [
    {
      org: "QCRI",
      title: "NL2SQL for Human-Centric Tables",
      desc: "LLM-based question answering and semantic evaluation over natural-language-to-SQL systems for human-centric tabular data.",
      tags: ["LLM-based QA", "Semantic Evaluation", "NL2SQL"],
      links: { code: "", paper: "", demo: "" },
    },
    {
      org: "QEERI",
      title: "OTE Materials Informatics",
      desc: "Data-driven discovery methods applied to organic thermoelectric (OTE) polymers, combining materials science with AI-assisted analysis.",
      tags: ["Materials Science", "AI", "Data-Driven Discovery"],
      links: { code: "", paper: "", demo: "" },
    },
    {
      org: "UREP",
      title: "Turn Signal Usage Analysis",
      desc: "Computer vision-based analysis of driver turn-signal usage and behavior for Qatar University's Traffic and Safety Department.",
      tags: ["Computer Vision", "Driver Behavior Analysis", "Transportation Safety"],
      links: { code: "", paper: "", demo: "" },
    },
    {
      org: "QCRI · 2nd Cycle",
      title: "Parameter Space Model Merging for LLMs",
      desc: "Investigating parameter-space interpolation techniques for merging large language models to support continual learning.",
      tags: ["LLM Merging", "Continual Learning", "Parameter Space Interpolation"],
      links: { code: "", paper: "", demo: "" },
    },
    {
      org: "HMC",
      title: "Deep Learning for Surgical Instrument Detection & Segmentation",
      desc: "Worked on a QNRF-funded research project investigating deep learning approaches for surgical instrument detection and semantic segmentation, supporting model development, experimentation, ablation studies, and technical reporting.",
      tags: ["Medical Computer Vision", "Semantic Segmentation", "QNRF-funded Research", "Python", "PyTorch"],
      links: { code: "", paper: "", demo: "" },
    },
  ],

  // ---- projects -----------------------------------------------------
  PROJECTS: [
    {
      title: "Robotics",
      desc: "Mecanum-wheel robotic platform with arm and embedded control.",
      stack: ["Embedded C", "Control Systems"],
      links: { code: "", demo: "" },
    },
    {
      title: "Computer Interface based Defense System with Arduino",
      desc: "MATLAB \u21C6 Arduino turret control with webcam tracking, lidar, and sensor fusion.",
      stack: ["MATLAB", "Arduino", "Sensor Fusion"],
      links: { code: "", demo: "" },
    },
    {
      title: "CMUQ WASH Project",
      desc: "Distributed sensing system using ESP32, LoRa, and a Flutter mobile app.",
      stack: ["ESP32", "LoRa", "Flutter"],
      links: { code: "", demo: "" },
    },
    {
      title: "Senior Design Project",
      desc: "Autonomous drone platform \u2014 senior capstone design.",
      stack: ["Autonomous Systems", "Flight Control"],
      links: { code: "", demo: "" },
    },
    {
      title: "EdGage \u2014 Real-Time Classroom Engagement Detection",
      desc: "Real-time computer vision system for classroom engagement analysis, using facial, posture, and temporal behavioral cues to estimate student attention under realistic classroom conditions.",
      stack: ["Python", "TensorFlow", "OpenCV", "LiveKit"],
      links: { code: "", demo: "" },
    },
  ],

  // ---- youtube --------------------------------------------------------
  // videoId: paste the part after "v=" in a YouTube URL, e.g. "dQw4w9WgXcQ".
  // Leave it "" to show a placeholder tile until you add the real video.
  YOUTUBE: [
    { title: "How I Made $3500 on Fiverr as a Student", videoId: "" },
    { title: "How to Become an Academic Weapon", videoId: "" },
    { title: "We Built a Modular Robotic Car (Servo Control)", videoId: "" },
    { title: "I Made a SMART Defense Turret System", videoId: "" },
  ],
};

/* =====================================================================
   RENDERING
   These functions turn the DATA above into DOM elements. You shouldn't
   need to edit anything below this line to update site content.
===================================================================== */

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function linkTag(label, url) {
  if (url) {
    const a = el("a", "link-tag is-link", `[${label}]`);
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }
  return el("span", "link-tag is-disabled", `[${label}]`);
}

function renderProfileLinks() {
  const wrap = document.getElementById("profileLinks");
  const items = [
    ["Email", DATA.LINKS.email],
    ["LinkedIn", DATA.LINKS.linkedin],
    ["GitHub", DATA.LINKS.github],
    ["Google Scholar", DATA.LINKS.scholar],
    ["YouTube", DATA.LINKS.youtube],
    ["CV", DATA.LINKS.cv],
  ];
  items.forEach(([label, url]) => {
    if (!url) return;
    const a = el("a", "profile-link", label);
    a.href = url;
    if (label !== "Email") { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    wrap.appendChild(a);
  });
}

function renderNews() {
  const list = document.getElementById("newsList");
  DATA.NEWS.forEach((item) => {
    const row = el("div", "news-row");
    row.appendChild(el("span", "news-date", item.date));
    row.appendChild(el("span", "news-text", item.text));
    row.appendChild(item.isNew ? el("span", "news-badge", "new") : el("span"));
    list.appendChild(row);
  });
}

function renderResearch() {
  const list = document.getElementById("researchList");
  DATA.RESEARCH.forEach((item) => {
    const card = el("article", "research-item");
    card.appendChild(el("p", "research-org", item.org));
    card.appendChild(el("h3", "item-title", item.title));
    card.appendChild(el("p", "item-desc", item.desc));

    const tagRow = el("div", "tag-row");
    item.tags.forEach((t) => tagRow.appendChild(el("span", "tag-chip", t)));
    card.appendChild(tagRow);

    const linkRow = el("div", "link-row");
    linkRow.appendChild(linkTag("code", item.links.code));
    linkRow.appendChild(linkTag("paper", item.links.paper));
    linkRow.appendChild(linkTag("demo", item.links.demo));
    card.appendChild(linkRow);

    list.appendChild(card);
  });
}

function renderProjects() {
  const list = document.getElementById("projectList");
  DATA.PROJECTS.forEach((item) => {
    const card = el("article", "project-item");

    const main = el("div", "project-main");
    main.appendChild(el("h3", "item-title", item.title));
    main.appendChild(el("p", "project-desc", item.desc));
    const linkRow = el("div", "link-row");
    linkRow.appendChild(linkTag("code", item.links.code));
    linkRow.appendChild(linkTag("demo", item.links.demo));
    main.appendChild(linkRow);
    card.appendChild(main);

    const side = el("div", "project-side");
    side.appendChild(el("p", "project-side-label", "Stack"));
    const stack = el("div", "project-stack");
    item.stack.forEach((s) => stack.appendChild(el("span", "tag-chip", s)));
    side.appendChild(stack);
    card.appendChild(side);

    list.appendChild(card);
  });
}

function playIconSVG() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6.5L18 12L8 17.5V6.5Z" fill="#ffffff"/>
  </svg>`;
}

function renderYoutube() {
  const grid = document.getElementById("youtubeGrid");
  DATA.YOUTUBE.forEach((item) => {
    const hasVideo = Boolean(item.videoId);
    const card = el("div", "youtube-card");

    const thumbLink = el("a", "youtube-thumb");
    thumbLink.href = hasVideo ? `https://www.youtube.com/watch?v=${item.videoId}` : "#";
    if (hasVideo) {
      thumbLink.target = "_blank";
      thumbLink.rel = "noopener noreferrer";
      thumbLink.style.backgroundImage = `url(https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg)`;
    }
    thumbLink.appendChild(el("span", "play-button", playIconSVG()));
    card.appendChild(thumbLink);

    const body = el("div", "youtube-body");
    body.appendChild(el("p", "youtube-title", item.title));
    const watchLink = el("a", "youtube-watch", "Watch on YouTube \u2197");
    watchLink.href = hasVideo ? `https://www.youtube.com/watch?v=${item.videoId}` : "#";
    if (hasVideo) { watchLink.target = "_blank"; watchLink.rel = "noopener noreferrer"; }
    body.appendChild(watchLink);
    card.appendChild(body);

    grid.appendChild(card);
  });
}

/* =====================================================================
   ACTIVE SECTION TRACKING — highlights the current section in the top nav
===================================================================== */
function setupScrollTracking() {
  const sections = Array.from(document.querySelectorAll(".section[id]"));
  const links = Array.from(document.querySelectorAll(".nav-link"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((l) => l.classList.toggle("active", l.dataset.target === id));
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );
  sections.forEach((s) => observer.observe(s));
}

/* =====================================================================
   INIT
===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderProfileLinks();
  renderNews();
  renderResearch();
  renderProjects();
  renderYoutube();
  setupScrollTracking();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
