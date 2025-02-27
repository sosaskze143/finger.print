document.addEventListener('DOMContentLoaded', () => {
    // تهيئة الأحداث
    document.getElementById('login-btn').addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (login(username, password)) {
            const user = getUserByUsername(username);
            if (user.role === 'admin') {
                window.location.href = 'admin.html';
            } else if (user.role === 'staff') {
                window.location.href = 'staff.html';
            } else {
                window.location.href = 'user.html';
            }
        } else {
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('error-message').innerText = 'اسم المستخدم أو كلمة المرور غير صحيحة!';
        }
    });
});
