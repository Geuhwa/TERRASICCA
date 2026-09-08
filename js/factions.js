document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("faction-panel");
  if (!panel) return;

  const titleEl = document.getElementById("faction-panel-title");
  const tagEl = document.getElementById("faction-panel-tag");
  const noteEl = document.getElementById("faction-panel-note");
  const summaryEl = document.getElementById("faction-panel-summary");
  const detailEl = document.getElementById("faction-panel-detail");
  const emblemEl = document.getElementById("faction-panel-emblem");
  const orgEl = document.getElementById("faction-panel-org");
  const closeBtn = document.getElementById("faction-panel-close");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const infoCache = {};

  async function loadFactionInfo(id) {
    if (!id) return null;
    if (infoCache[id]) return infoCache[id];
    if (window.FACTION_INFO && window.FACTION_INFO[id]) {
      infoCache[id] = window.FACTION_INFO[id];
      return infoCache[id];
    }
    try {
      const res = await fetch(`../data/factions/${id}.html`);
      if (!res.ok) return null;
      const html = await res.text();
      infoCache[id] = html;
      return html;
    } catch (_) {
      return null;
    }
  }

  async function openPanel(entry) {
    const tag = entry.dataset.tag || "";
    const nameKo = entry.dataset.nameKo || "";
    const nameEn = entry.dataset.nameEn || "";
    const summary = entry.dataset.summary || "";
    const emblem = entry.dataset.emblem || "";
    const org = entry.dataset.org || "";
    const id = entry.dataset.id || "";

    tagEl.textContent = tag;
    titleEl.innerHTML = nameEn
      ? `${nameKo} <small>${nameEn}</small>`
      : nameKo;
    emblemEl.src = emblem;
    emblemEl.alt = `${nameKo} emblem`;
    orgEl.src = org;
    orgEl.alt = `${nameKo} organization chart`;

    detailEl.innerHTML = `<p class="faction-panel-summary">문서를 불러오는 중…</p>`;
    detailEl.hidden = false;
    summaryEl.hidden = true;

    panel.classList.add("active");
    document.body.style.overflow = "hidden";

    const dossier = await loadFactionInfo(id);
    if (dossier) {
      noteEl.textContent = "ARCHIVE // FACTION DOSSIER";
      summaryEl.hidden = true;
      detailEl.hidden = false;
      detailEl.innerHTML = dossier;
    } else {
      noteEl.textContent = "ARCHIVE // FACTION BRIEF // 상세 서술 추후 등록";
      summaryEl.hidden = false;
      summaryEl.textContent = summary || "상세 정보는 추후 등록됩니다.";
      detailEl.hidden = true;
      detailEl.innerHTML = "";
    }
  }

  function closePanel() {
    panel.classList.remove("active");
    document.body.style.overflow = "";
  }

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg || !src) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("active");
  }

  document.querySelectorAll(".faction-entry").forEach((entry) => {
    entry.setAttribute("role", "button");
    entry.setAttribute("tabindex", "0");
    entry.addEventListener("click", (e) => {
      e.preventDefault();
      openPanel(entry);
    });
    entry.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPanel(entry);
      }
    });
  });

  closeBtn.addEventListener("click", closePanel);
  panel.addEventListener("click", (e) => {
    if (e.target === panel) closePanel();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("active")) {
      if (lightbox && lightbox.classList.contains("active")) {
        lightbox.classList.remove("active");
      } else {
        closePanel();
      }
    }
  });

  emblemEl.addEventListener("click", () => openLightbox(emblemEl.src, emblemEl.alt));
  orgEl.addEventListener("click", () => openLightbox(orgEl.src, orgEl.alt));

  if (lightbox) {
    lightbox.addEventListener("click", () => lightbox.classList.remove("active"));
  }
});
