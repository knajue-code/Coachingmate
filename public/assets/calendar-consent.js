(() => {
  const enable = document.getElementById('cm-calendar-enable');
  const disable = document.getElementById('cm-calendar-disable');
  const notice = document.getElementById('cm-calendar-consent');
  const slot = document.getElementById('cm-calendar-slot');
  if (!enable || !disable || !notice || !slot) return;
  enable.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.className = 'cm-calendar';
    iframe.title = 'Kostenloses Kennenlerngespräch mit Jürgen Knappich buchen';
    iframe.src = 'https://calendly.com/knajue/30min';
    slot.replaceChildren(iframe);
    notice.hidden = true;
    disable.hidden = false;
    disable.focus({preventScroll: true});
  });
  disable.addEventListener('click', () => {
    slot.replaceChildren();
    notice.hidden = false;
    disable.hidden = true;
    enable.focus({preventScroll: true});
  });
})();
