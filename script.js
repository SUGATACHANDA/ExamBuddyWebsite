document.addEventListener("DOMContentLoaded", async () => {
    const box = document.getElementById("downloadBox");
    const repo = "SUGATACHANDA/ExamBuddy";

    try {
        const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`);
        const data = await res.json();
        const exe = data.assets.find(a => a.name.endsWith(".exe"));

        box.innerHTML = `
      <h3>Latest Version: <strong>${data.tag_name}</strong></h3>
      <p>Release date: ${new Date(data.published_at).toDateString()}</p>
      <br>
      <a href="${exe.browser_download_url}" class="btn-primary">⬇ Download App</a>
    `;
    } catch {
        box.innerHTML = `<p style="color:red;">⚠ Unable to fetch update info.</p>`;
    }
});
