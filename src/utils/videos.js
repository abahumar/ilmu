export function videoThumb(videoId) {
  return `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
}

export const THUMB_FALLBACK_SRC = "/thumb-fallback.svg";
export const THUMB_ONERROR = `this.onerror=null;this.src='${THUMB_FALLBACK_SRC}'`;

export function safeText(value) {
  return String(value ?? "").replace(/[<>]/g, "");
}

export function videoCardHtml(video) {
  return `
    <article class="card">
      <a href="/tonton?v=${encodeURIComponent(video.id)}" aria-label="Tonton ${safeText(video.title)}">
        <img class="thumb" src="${videoThumb(video.id)}" alt="Thumbnail ${safeText(video.title)}" loading="lazy" onerror="${THUMB_ONERROR}" />
      </a>
      <div class="video-card-content">
        <h3 class="video-title"><a href="/tonton?v=${encodeURIComponent(video.id)}">${safeText(video.title)}</a></h3>
        <p class="meta">${safeText(video.channel)} • ${safeText(video.category)}</p>
      </div>
    </article>
  `;
}

export function uniqCategories(videos) {
  return [...new Set(videos.map((video) => video.category))].sort();
}

export function byRecent(videos) {
  return [...videos].reverse();
}
