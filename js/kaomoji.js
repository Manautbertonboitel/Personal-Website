function updateEye(eye_id, pupil_id, e) {
    const eye = document.getElementById(eye_id);
    const rect = eye.getBoundingClientRect();
    const rx = rect.x + rect.width / 2;
    const ry = rect.y + rect.height / 2;
    const mx = ((e.clientX - rx) / rect.width) + 0.25;
    const my = ((e.clientY - ry) / rect.height) + 0.25;
    const pupil = document.getElementById(pupil_id);
    pupil.x.baseVal.value = Math.min(0.5, Math.max(0, mx));
    pupil.y.baseVal.value = Math.min(0.5, Math.max(0, my));
}
document.addEventListener('mousemove', (e) => {
    updateEye('right_eye', 'right_pupil', e);
    updateEye('left_eye', 'left_pupil', e);
});