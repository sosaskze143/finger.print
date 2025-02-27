function captureFingerprint(userId) {
    const video = document.getElementById('camera');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    // حفظ البصمة مع ربطها بالمستخدم
    saveFingerprint(imageData, userId);
    alert('تم تسجيل البصمة بنجاح!');
}
