// 상세 페이지 이미지(대표 화면 · ERD) 클릭 시 확대 라이트박스
(function () {
  var box = document.createElement('div');
  box.className = 'lbx';
  box.innerHTML = '<button class="lbx__x" aria-label="닫기">&times;</button><img alt="">';
  document.body.appendChild(box);
  var big = box.querySelector('img');

  function open(src, alt) {
    big.src = src;
    big.alt = alt || '';
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.classList.remove('open');
    big.src = '';
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('.lbx')) { close(); return; }      // 배경/닫기 버튼 클릭 → 닫기
    var img = e.target.closest('.dp-shot img, .dp-erd img');
    if (img) open(img.currentSrc || img.src, img.alt);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
