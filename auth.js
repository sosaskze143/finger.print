// تسجيل مستخدم جديد مع كلمة مرور
function registerUserWithPassword(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const hashedPassword = hashPassword(password);
    users.push({ username, password: hashedPassword });
    localStorage.setItem('users', JSON.stringify(users));
}

// تسجيل الدخول
function login(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && verifyPassword(password, u.password));

    if (user) {
        alert('تم تسجيل الدخول بنجاح!');
        return true;
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
        return false;
    }
}

// تشفير كلمة المرور (محاكاة باستخدام btoa)
function hashPassword(password) {
    return btoa(password); // تشفير بسيط (يمكن استخدام مكتبة مثل bcrypt في مشاريع حقيقية)
}

// التحقق من كلمة المرور
function verifyPassword(password, hashedPassword) {
    return btoa(password) === hashedPassword;
}
