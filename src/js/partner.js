document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.partner-functional__range-track');
    const thumb = document.querySelector('.partner-functional__track-thumb');
    const fill = document.querySelector('.partner-functional__track-fill');
    const trackWidth = track.offsetWidth;

    const min = 5000;
    const max = 100000;
    const step = 1000;

    thumb.addEventListener('mousedown', startDrag);
    thumb.addEventListener('touchstart', startDrag);
    track.addEventListener('click', jumpTo);

    function startDrag(e) {
        e.preventDefault();
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('touchmove', onDrag);
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    }

    function onDrag(e) {
        e.preventDefault();
        const event = e.touches ? e.touches[0] : e;
        let newLeft = event.clientX - track.getBoundingClientRect().left - thumb.offsetWidth / 2;

        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft > trackWidth - thumb.offsetWidth) {
            newLeft = trackWidth - thumb.offsetWidth;
        }

        const percent = newLeft / (trackWidth - thumb.offsetWidth);
        updatePosition(percent);
    }

    function endDrag() {
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('touchmove', onDrag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchend', endDrag);
    }

    function updatePosition(percent) {
        const newLeft = percent * (trackWidth - thumb.offsetWidth);
        thumb.style.left = newLeft + 'px';
        fill.style.width = (percent * 100) + '%';

        const value = Math.round((percent * (max - min) + min) / step) * step;
        document.querySelector('.partner-functional__wastes span').innerHTML = value.toLocaleString('de-DE') + " ₽"
        document.querySelector('.partner-functional__receiving span').innerHTML = (value*0.15).toLocaleString('de-DE') + " ₽"
    }

    function jumpTo(e) {
        const newLeft = e.clientX - track.getBoundingClientRect().left;
        const percent = newLeft / trackWidth;
        updatePosition(percent);
    }

    const initialPercent = (min - min) / (max - min);
    updatePosition(initialPercent);
});
