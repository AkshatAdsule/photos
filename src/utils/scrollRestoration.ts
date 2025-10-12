let savedScrollPosition = 0;

export function saveScrollPosition() {
  savedScrollPosition = window.scrollY;
}

export function restoreScrollPosition() {
  // Use requestAnimationFrame to ensure the DOM is ready
  requestAnimationFrame(() => {
    window.scrollTo(0, savedScrollPosition);
  });
}

export function scrollToTop() {
  window.scrollTo(0, 0);
}

