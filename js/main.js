'use strict';

{
  const targets = document.querySelectorAll('img');

  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });

  // モーダル
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });


  // ハンバーガー
  const hopen = document.getElementById('hopen');
  const overlay = document.querySelector('.overlay');
  const hclose = document.getElementById('hclose');

  hopen.addEventListener('click', () => {
    overlay.classList.add('show');
    hopen.classList.add('hide');
  });

  hclose.addEventListener('click', () => {
    overlay.classList.remove('show');
    hopen.classList.remove('hide');
  });

  // アコーディオンUI */
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });

}
