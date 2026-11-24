
/* GLOBAL LEARNING HUB - UNIVERSAL 3D DESIGN V2 */

(function () {
  "use strict";

  if (window.__GLH_DESIGN_LOADED__) return;
  window.__GLH_DESIGN_LOADED__ = true;

  const css = `
  :root {
    --glh-text: #172554;
    --glh-shadow: 0 12px 28px rgba(30,41,59,.14);
  }

  * { box-sizing: border-box; }

  body {
    color: var(--glh-text);
    background:
      radial-gradient(circle at 5% 5%,#dbeafe,transparent 35%),
      radial-gradient(circle at 95% 15%,#fce7f3,transparent 35%),
      radial-gradient(circle at 50% 100%,#ede9fe,transparent 40%),
      #f8fafc;
  }

  h1,h2,h3,h4,h5,h6 {
    color: #172554;
    font-weight: 800;
  }

  h1 {
    background: linear-gradient(100deg,#1d4ed8,#7c3aed,#db2777);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  p,li,label,td,th { color: #334155; }

  a { transition: .25s ease; }

  /* Common panel and card designs */

  .card,.panel,.box,.course-card,
  .dashboard-card,.feature-card,.service-card,
  .info-card,.stat-card,.notice-card,
  .material-card,.portal-card,.content-card,
  .login-card,.form-card,.announcement-card,
  [data-glh-3d="true"] {
    position: relative;
    isolation: isolate;
    background: linear-gradient(135deg,#ffffff,#eff6ff,#f5f3ff);
    color: #172554;
    border: 1px solid rgba(99,102,241,.25);
    border-radius: 18px;
    box-shadow: var(--glh-shadow);
    transform-style: preserve-3d;
    backface-visibility: visible;
    animation: glhFloat 5s ease-in-out infinite;
    transition: box-shadow .35s ease, filter .35s ease;
    will-change: transform;
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

  @keyframes glhFloat {
    0%,100% {
      transform: perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg);
    }
    25% {
      transform: perspective(1000px) translateY(-4px) rotateX(1deg) rotateY(-1deg);
    }
    50% {
      transform: perspective(1000px) translateY(-7px) rotateX(0deg) rotateY(1deg);
    }
    75% {
      transform: perspective(1000px) translateY(-3px) rotateX(-1deg) rotateY(0deg);
    }
  }

  /* Flip when hovered; completes a full turn so text remains readable */

  .card:hover,.panel:hover,.box:hover,
  .course-card:hover,.dashboard-card:hover,
  .feature-card:hover,.service-card:hover,
  .info-card:hover,.stat-card:hover,
  .notice-card:hover,.material-card:hover,
  .portal-card:hover,.content-card:hover,
  .login-card:hover,.form-card:hover,
  .announcement-card:hover,
  [data-glh-3d="true"]:hover {
    animation: glhFlip .85s ease-in-out;
    box-shadow: 0 22px 42px rgba(30,41,59,.24);
    filter: saturate(1.12);
  }

  @keyframes glhFlip {
    0% {
      transform: perspective(1000px) rotateY(0deg) scale(1);
    }
    45% {
      transform: perspective(1000px) rotateY(180deg) scale(.96);
    }
    100% {
      transform: perspective(1000px) rotateY(360deg) scale(1);
    }
  }

  /* Buttons */

  button,.btn,input[type="submit"],
  input[type="button"] {
    border: 0;
    border-radius: 12px;
    padding: 11px 20px;
    font-weight: 700;
    cursor: pointer;
    color: white;
    background: linear-gradient(135deg,#2563eb,#7c3aed,#9333ea);
    box-shadow: 0 7px 16px rgba(79,70,229,.25);
    transition: transform .25s ease,box-shadow .25s ease;
  }

  button:hover,.btn:hover,
  input[type="submit"]:hover,
  input[type="button"]:hover {
    transform: translateY(-3px) scale(.97);
    box-shadow: 0 12px 22px rgba(79,70,229,.32);
  }

  /* Forms */

  input,textarea,select {
    max-width: 100%;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 11px 13px;
    background: linear-gradient(135deg,#fff,#f1f5f9);
    color: #172554;
  }

  input:focus,textarea:focus,select:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99,102,241,.13);
  }

  /* Tables */

  table {
    max-width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 12px;
    overflow: hidden;
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

  tr:nth-child(even) { background: #f8fafc; }

  /* Small labels */

  .badge,.tag,.status {
    display: inline-block;
    border-radius: 20px;
    padding: 5px 11px;
    background: linear-gradient(135deg,#dbeafe,#ede9fe);
    color: #3730a3;
    font-weight: 700;
  }

  img { max-width: 100%; height: auto; }

  @media(max-width:768px) {
    .card,.panel,.box,.course-card,
    .dashboard-card,.feature-card,
    .service-card,.info-card,.stat-card {
      border-radius: 14px;
      animation-duration: 7s;
    }

    table { display: block; overflow-x: auto; }
  }

  @media(hover:none) {
    .card:hover,.panel:hover,.box:hover,
    .course-card:hover,.dashboard-card:hover,
    .feature-card:hover,.service-card:hover,
    .info-card:hover,.stat-card:hover,
    .notice-card:hover,.material-card:hover,
    .portal-card:hover,.content-card:hover,
    .login-card:hover,.form-card:hover,
    .announcement-card:hover {
      animation: none;
    }
  }

  @media(prefers-reduced-motion:reduce) {
    *,*::before,*::after {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }
  `;

  const style = document.createElement("style");
  style.id = "glh-universal-design";
  style.textContent = css;
  document.head.appendChild(style);

  console.info("GLH Universal 3D Design V2 loaded");
})();
