
/* =====================================================
   GLOBAL LEARNING HUB
   UNIVERSAL 3D DESIGN ENGINE
   Version 1.0
   ===================================================== */

(function () {
  "use strict";

  if (window.__GLH_DESIGN_LOADED__) return;
  window.__GLH_DESIGN_LOADED__ = true;

  const style = document.createElement("style");

  style.textContent = `
  :root {
    --glh-text: #172554;
    --glh-muted: #475569;
    --glh-primary: #2563eb;
    --glh-border: rgba(99,102,241,.22);
    --glh-shadow: 0 12px 30px rgba(30,41,59,.12);
    --glh-radius: 18px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: var(--glh-text);
    background:
      radial-gradient(circle at 10% 10%,#dbeafe 0,transparent 35%),
      radial-gradient(circle at 90% 20%,#fce7f3 0,transparent 35%),
      radial-gradient(circle at 50% 90%,#ede9fe 0,transparent 40%),
      #f8fafc;
    font-family: Arial, sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    color: #172554;
    font-weight: 800;
    letter-spacing: -.4px;
  }

  h1 {
    background: linear-gradient(100deg,#1d4ed8,#7c3aed,#db2777);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  p, label, li, td, th {
    color: #334155;
    line-height: 1.65;
  }

  a {
    color: #1d4ed8;
    transition: .3s ease;
  }

  a:hover {
    color: #7c3aed;
  }

  header, nav {
    border-radius: 0 0 18px 18px;
  }

  header {
    box-shadow: 0 7px 22px rgba(30,41,59,.12);
  }

  section, article, main {
    position: relative;
  }

  .card,
  .panel,
  .box,
  .course-card,
  .dashboard-card,
  .feature-card,
  .service-card,
  .info-card,
  .stat-card,
  .notice-card,
  .material-card,
  .portal-card,
  .content-card,
  .login-card,
  .form-card,
  .announcement-card {
    background: linear-gradient(135deg,#ffffff,#eff6ff,#f5f3ff);
    border: 1px solid var(--glh-border);
    border-radius: var(--glh-radius);
    box-shadow: var(--glh-shadow);
    transition: transform .35s ease, box-shadow .35s ease;
    transform-style: preserve-3d;
  }

  .card:nth-child(4n+2),
  .panel:nth-child(4n+2),
  .course-card:nth-child(4n+2),
  .dashboard-card:nth-child(4n+2) {
    background: linear-gradient(135deg,#fff7ed,#fef3c7,#ffedd5);
  }

  .card:nth-child(4n+3),
  .panel:nth-child(4n+3),
  .course-card:nth-child(4n+3),
  .dashboard-card:nth-child(4n+3) {
    background: linear-gradient(135deg,#ecfdf5,#d1fae5,#ccfbf1);
  }

  .card:nth-child(4n+4),
  .panel:nth-child(4n+4),
  .course-card:nth-child(4n+4),
  .dashboard-card:nth-child(4n+4) {
    background: linear-gradient(135deg,#fdf2f8,#fce7f3,#ede9fe);
  }

  .card:hover,
  .panel:hover,
  .course-card:hover,
  .dashboard-card:hover,
  .feature-card:hover,
  .service-card:hover,
  .info-card:hover,
  .stat-card:hover,
  .notice-card:hover,
  .material-card:hover,
  .portal-card:hover,
  .content-card:hover,
  .login-card:hover,
  .form-card:hover,
  .announcement-card:hover {
    transform: perspective(900px) rotateX(3deg) rotateY(-3deg) scale(.98) translateY(-5px);
    box-shadow: 0 22px 38px rgba(30,41,59,.20);
  }

  button, .btn, input[type="submit"],
  input[type="button"] {
    border: none;
    border-radius: 12px;
    padding: 11px 20px;
    font-weight: 700;
    cursor: pointer;
    background: linear-gradient(135deg,#2563eb,#7c3aed,#9333ea);
    color: #ffffff;
    box-shadow: 0 7px 16px rgba(79,70,229,.25);
    transition: transform .25s ease, box-shadow .25s ease;
  }

  button:hover, .btn:hover,
  input[type="submit"]:hover,
  input[type="button"]:hover {
    transform: translateY(-3px) scale(.97);
    box-shadow: 0 12px 22px rgba(79,70,229,.32);
  }

  input, textarea, select {
    max-width: 100%;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 11px 13px;
    background: linear-gradient(135deg,#ffffff,#f1f5f9);
    color: #172554;
    transition: border .25s, box-shadow .25s;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99,102,241,.13);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: var(--glh-shadow);
  }

  th {
    background: linear-gradient(135deg,#dbeafe,#ede9fe);
    color: #172554;
    padding: 13px;
  }

  td {
    padding: 11px;
    border-bottom: 1px solid #e2e8f0;
  }

  tr:nth-child(even) {
    background: #f8fafc;
  }

  .badge, .tag, .status {
    border-radius: 20px;
    padding: 5px 11px;
    background: linear-gradient(135deg,#dbeafe,#ede9fe);
    color: #3730a3;
    font-weight: 700;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    border: 0;
    border-top: 1px solid #cbd5e1;
    margin: 24px 0;
  }

  ::selection {
    background: #c7d2fe;
    color: #172554;
  }

  @media(max-width:768px) {
    body {
      font-size: 15px;
    }

    .card, .panel, .course-card,
    .dashboard-card {
      border-radius: 14px;
    }

    button, .btn {
      max-width: 100%;
    }

    table {
      display: block;
      overflow-x: auto;
    }
  }

  @media(hover:none) {
    .card:hover, .panel:hover,
    .course-card:hover, .dashboard-card:hover {
      transform: none;
    }
  }

  @media(prefers-reduced-motion:reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: .01ms !important;
      transition-duration: .01ms !important;
    }
  }
  `;

  document.head.appendChild(style);

  console.info("Global Learning Hub: Universal 3D Design Loaded");
})();
