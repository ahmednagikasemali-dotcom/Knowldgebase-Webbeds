let data = {};
let activeText = "";

fetch("data.json")
    .then(res => res.json())
    .then(json => data = json);

function openMainTab(id) {
    document.querySelectorAll('.main-tab').forEach(t => t.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function openSubTab(id) {
    document.querySelectorAll('.sub-tab').forEach(t => t.style.display = 'none');
    const tab = document.getElementById(id);
    tab.style.display = 'block';
    renderResponse(tab);
}

function renderResponse(tab) {
    const key = tab.dataset.id;
    const type = clientType.value;
    const mode = responseMode.value;

    activeText = data[key][type][mode];
    tab.querySelector(".response-text").innerText = activeText;
}

/* Update on change */
function updateVisibility() {
    const openTab = document.querySelector('.sub-tab[style*="block"]');
    if (openTab) renderResponse(openTab);
}

/* Copy button + Ctrl+C */
document.addEventListener("click", e => {
    if (e.target.classList.contains("copy-btn")) {
        copyText();
    }
    if (e.target.classList.contains("email-btn")) {
        sendEmail();
    }
});

document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.key === "c") {
        copyText();
    }
});

function copyText() {
    if (!activeText) return;
    navigator.clipboard.writeText(activeText);
    alert("Response copied");
}

/* Email Template */
function sendEmail() {
    if (!activeText) return;
    const subject = "WebBeds Support Response";
    window.location.href =
        `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(activeText)}`;
}

/* Dark Mode */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
