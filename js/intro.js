const BOOT_LINES = [
  { text: "NEURAL LINK", suffix: "ESTABLISHING...", cls: "status-info" },
  { text: "KERNEL", suffix: "WHITE_NIGHT_v0.1 LOADED", cls: "status-ok" },
  { text: "MEMORY", suffix: "ALLOCATING SECTORS...", cls: "status-sys" },
  { text: "DECRYPT", suffix: "ARCHIVE BLOCKS [████████░░] 80%", cls: "status-warn" },
  { text: "SYNC", suffix: "NIGHT CYCLE PROTOCOL...", cls: "status-info" },
  { text: "VERIFY", suffix: "SESSION INTEGRITY CHECK", cls: "status-sys" },
  { text: "ROUTE", suffix: "MAPPING WORLD NODES...", cls: "status-dim" },
  { text: "AUTH", suffix: "ACCESS TOKEN GENERATED", cls: "status-ok" },
  { text: "RENDER", suffix: "INTERFACE COMPILE COMPLETE", cls: "status-ok" },
  { text: "STATUS", suffix: "ALL SYSTEMS NOMINAL", cls: "status-ok" },
];

function runIntroSequence(onComplete) {
  const overlay = document.getElementById("intro-overlay");
  const trigger = document.getElementById("intro-trigger");
  const introIdle = document.getElementById("intro-idle");
  const sequence = document.getElementById("intro-sequence");
  const linesEl = document.getElementById("sequence-lines");
  const progressBar = document.getElementById("sequence-progress-bar");
  const main = document.getElementById("main-content");

  if (!overlay || !trigger) return;

  const showMain = () => {
    main?.classList.add("visible");
  };

  const readIntroFlag = () => {
    try {
      return sessionStorage.getItem("wn-intro-done");
    } catch (_) {
      return null;
    }
  };

  const writeIntroFlag = () => {
    try {
      sessionStorage.setItem("wn-intro-done", "1");
    } catch (_) {
      /* ignore storage failures (private mode / blocked storage) */
    }
  };

  const skipIntro = readIntroFlag();
  if (skipIntro) {
    overlay.remove();
    showMain();
    return;
  }

  trigger.addEventListener("click", () => {
    trigger.disabled = true;
    introIdle.classList.add("hidden");
    sequence.classList.remove("hidden");

    let i = 0;
    const total = BOOT_LINES.length;

    const addLine = () => {
      if (i >= total) {
        const done = document.createElement("p");
        done.className = "sequence-done";
        done.textContent = ">> ENTERING ARCHIVE";
        linesEl.appendChild(done);

        setTimeout(() => {
          overlay.classList.add("fade-out");
          showMain();
          writeIntroFlag();

          setTimeout(() => overlay.remove(), 700);
          if (onComplete) onComplete();
        }, 800);
        return;
      }

      const line = BOOT_LINES[i];
      const el = document.createElement("p");
      el.className = "sequence-line";
      el.innerHTML =
        `<span class="word ${line.cls}">${line.text}</span>` +
        `<span class="status-dim"> :: </span>` +
        `<span class="${line.cls}">${line.suffix}</span>`;
      linesEl.appendChild(el);

      progressBar.style.width = `${((i + 1) / total) * 100}%`;
      i++;
      setTimeout(addLine, 280 + Math.random() * 180);
    };

    addLine();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    runIntroSequence();
  } catch (_) {
    const overlay = document.getElementById("intro-overlay");
    const main = document.getElementById("main-content");
    overlay?.remove();
    main?.classList.add("visible");
  }
});
