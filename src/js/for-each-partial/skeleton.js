export function createSkeleton() {
  return `
        <div class="col-sm-6 col-md-3">
    <div class="movie--isloading">
      <div class="loading-image"></div>
      <div class="loading-content">
        <div class="loading-text-container">
          <div class="loading-main-text"></div>
          <div class="loading-sub-text"></div>
        </div>
      </div>
    </div>
  </div>
        `;
}

export function createImmediateSkeleton() {
  return `
        <ul class="skeleton">
          ${Array.from({ length: 15 }, () => createSkeleton()).join('')}
        </ul>
    `;
}
