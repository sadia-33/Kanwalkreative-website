// Service tabs
document.querySelectorAll('.srv-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.srv-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.srv-detail').forEach(d => d.classList.remove('active'));
    item.classList.add('active');
    document.getElementById(item.dataset.target).classList.add('active');
  });
});

// Draggable vinyl only
document.querySelectorAll('.vinyl').forEach(el => {
  let dragging = false;
  let ox = 0, oy = 0;

  el.addEventListener('mousedown', e => {
    dragging = true;
    ox = e.clientX - el.offsetLeft;
    oy = e.clientY - el.offsetTop;
    el.style.zIndex = 99;
    e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    el.style.left = (e.clientX - ox) + 'px';
    el.style.top  = (e.clientY - oy) + 'px';
  });

  document.addEventListener('mouseup', () => { dragging = false; });
});
