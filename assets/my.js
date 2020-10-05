document.querySelectorAll('a').forEach(el => {
  const index = el.href.indexOf(window.location.origin)
  if (index < 0) {
    el.target = '_blank'
  }
})