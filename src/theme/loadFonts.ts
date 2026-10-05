// index.html preloads this stylesheet; attaching it here instead of as a
// plain <link rel="stylesheet"> keeps it off the render-blocking path without
// the inline onload= trick, which the CSP's script-src would block.
export const FONT_STYLESHEET =
  "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Fraunces:opsz,wght@9..144,600&display=swap";

export function loadFonts() {
  if (document.querySelector(`link[rel="stylesheet"][href="${FONT_STYLESHEET}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = FONT_STYLESHEET;
  document.head.appendChild(link);
}
