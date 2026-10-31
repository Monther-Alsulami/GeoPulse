# دليل ربط ونشر GeoPulse على GitHub Pages
## How to Host and Auto-Deploy on GitHub Pages

تم تجهيز هذا المشروع ليعمل فورًا مع **GitHub Pages**، بحيث يتم تحديث الموقع الحي تلقائيًا عند أي تعديل أو رفع (`git push`) للمستودع.

---

### الخطوة 1: رفع المشروع إلى مستودع جديد على GitHub

إذا لم تكن قد أنشأت المستودع على GitHub بعد:
1. اذهب إلى [GitHub.com](https://github.com) وسجّل الدخول.
2. اضغط على **New Repository** وقم بتسمية المستودع باسم: `GeoPulse` (أو أي اسم تفضله).
3. اختر المستودع **Public**.
4. افتح موجه الأوامر (Terminal / Git Bash) داخل مجلد المشروع `z:\Projects\GeoPulse` ونفذ الأوامر التالية:

```bash
# 1. تهيئة المستودع
git init

# 2. إضافة كافة الملفات
git add .

# 3. حفظ التعديلات
git commit -m "GeoPulse complete educational platform release"

# 4. تسمية الفرع الرئيسي
git branch -M main

# 5. ربط المستودع المحلي بمستودع GitHub (استبدل YOUR-USERNAME باسم حسابك)
git remote add origin https://github.com/YOUR-USERNAME/GeoPulse.git

# 6. رفع الملفات
git push -u origin main
```

---

### الخطوة 2: تفعيل النشر التلقائي في إعدادات GitHub

بمجرد رفع المستودع، اتبع الخطوات التالية في موقع GitHub (تتم لمرة واحدة فقط):

1. في صفحة المستودع على GitHub، اضغط على تبويب **Settings** (الإعدادات).
2. من القائمة الجانبية في اليسار، اضغط على **Pages**.
3. تحت قسم **Build and deployment**:
   - في خيار **Source**، اختر **GitHub Actions** (سيتعرف تلقائيًا على ملف سير العمل `.github/workflows/deploy.yml` المرفق).
   - *(أو يمكنك اختيار **Deploy from a branch** واختيار فرع `main` والمجلد `/ (root)`)*.
4. انتظر دقيقة واحدة، وستظهر لك في أعلى الصفحة رسالة خضراء مع رابط موقعك الحي:
   `https://YOUR-USERNAME.github.io/GeoPulse/`

---

### الخطوة 3: كيف يتحدث الموقع تلقائيًا؟ (Auto Updates)

في أي وقت تقوم فيه بتعديل أي ملف (مثل إضافة كتاب في الكود أو تحديث شرح أو تصميم)، كل ما عليك فعله هو تنفيذ أمرين فقط:

```bash
git add .
git commit -m "Update lesson content and resources"
git push
```

فور الضغط على `git push`، سيتولى GitHub Actions تحديث الموقع الحي خلال ثوانٍ معدودة دون أي تدخل يدوي منك!

