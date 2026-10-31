/**
 * GeoPulse — Educational Geology Platform
 * Prepared for: Advanced Structural Geology (ESR-312), King Abdulaziz University
 * Student: Munthir Alsulami (KAU ID: 2541706)
 * Contact: malsulami0868@stu.kau.edu.sa
 */

// --- BILINGUAL DICTIONARY ---
const copy = {
  ar: {
    skip: 'انتقل إلى المحتوى',
    navLabel: 'التنقل الرئيسي',
    menuLabel: 'فتح القائمة',
    navStructural: 'الجيولوجيا البنائية',
    navShield: 'الدرع العربي',
    navResources: 'الكتب والمقالات',
    navAttribution: 'بيان المشروع والتواصل',

    heroEyebrow: 'فضولك هو نقطة البداية',
    heroTitle1: 'اقرأ الصخور.',
    heroTitle2: 'افهم القصة.',
    heroDescription: 'من أول مفهوم في الجيولوجيا البنائية إلى حكاية الدرع العربي. مساحة معرفية للطلاب، تبدأ بالأساسيات وتتّسع مع فضولك.',
    exploreButton: 'استكشف الأقسام',
    heroNote: 'نبني هذه المساحة كمرجع شامل لطلاب الجيولوجيا',
    artLabel: 'رسم فني لطبقات صخرية ملتوية وتراكيب بنائية',
    artCaption: 'لكل طبقة حكاية.',
    exploreLabel: 'أبواب المعرفة',
    exploreHint: 'اختر أين تبدأ',

    structuralEyebrow: 'افهم كيف تتشوّه الصخور',
    structuralTitle: 'الجيولوجيا البنائية',
    structuralIntro: 'ثلاثة محاور أساسية مترابطة؛ من المفاهيم الأولى إلى تراكيب تحكي قصة التشوّه وتحليل القوى في باطن الأرض.',
    availableNow: 'شرح ومخطط متكامل',
    introTitle: 'مدخل إلى الجيولوجيا البنائية',
    introDesc: 'البداية من هنا، مع مفاهيم الإجهاد والانفعال ومناهج التحليل الوصفي والحركي والديناميكي.',
    ductileTitle: 'التشوّه اللدن',
    ductileDesc: 'فهم الطيات، أجزاء الطية (المحور، المستوى المحوري)، التورّق، والتخطّط في الأعماق.',
    brittleTitle: 'التشوّه الهش',
    brittleDesc: 'الفواصل، الكسور، وأنواع الفوالق (العادية، المعكوسة، المضربية) مع تحليل حركية التصدع.',
    structuralNote: 'اضغط على أي محور لعرض الشرح المفاهيمي المتكامل مع المخطط التوضيحي.',

    shieldEyebrow: 'جيولوجيا من أرضنا',
    shieldTitle: 'الدرع العربي',
    shieldIntro: 'رحلة للتعرّف على نشأة الدرع العربي وتكوينه التكتوني عبر التحام الأقواس الجزرية، وتصنيف وحداته الصخرية المعقدة بنظام ASLLC المعتمد.',
    shieldNote: 'شروحات ومصادر علمية موثقة وفق هيئة المساحة الجيولوجية السعودية',
    formationTitle: 'التكوين والنشأة التكتونية',
    asllcTitle: 'تصنيف الصخور ونظام ASLLC',

    resourcesEyebrow: 'أكمل رحلة التعلّم',
    resourcesTitle: 'الكتب والمقالات الموصى بها',
    resourcesIntro: 'مكتبة مراجع علمية مختارة بعناية تدعم الطالب والباحث، مع توفير روابط مباشرة للشراء أو القراءة من مواقع النشر الأصلية دون استضافة أي ملفات محليًا.',
    addResourceBtn: 'إضافة كتاب أو مرجع',
    searchPlaceholder: 'ابحث بعنوان الكتاب، المؤلف، أو الكلمات المفتاحية...',
    filterAll: 'جميع المراجع',
    filterStructural: 'الجيولوجيا البنائية',
    filterShield: 'الدرع العربي',
    filterGeneral: 'مراجع عامة',
    officialPublisherLink: 'رابط الناشر الأصلي',
    userAddedBadge: 'إضافة جديدة',
    noResultsTitle: 'لم يتم العثور على مراجع مطابقة',
    noResultsDesc: 'جرب البحث بكلمات أخرى أو اختر تصفية مختلفة.',
    storagePersistenceNote: 'المراجع المضافة تحفظ محليًا في متصفحك وتبقى عند تحديث الصفحة.',
    resetResources: 'استعادة المراجع الافتراضية',
    confirmReset: 'هل أنت متأكد من استعادة قائمة المراجع الافتراضية؟ سيتم مسح أي كتب أضفتها محليًا.',

    addResourceEyebrow: 'إثراء المكتبة',
    addResourceTitle: 'إضافة كتاب أو مقال للمكتبة',
    labelCover: 'صورة الغلاف (مطلوبة)',
    uploadPrompt: 'اضغط هنا لرفع صورة الغلاف',
    uploadTypes: 'PNG, JPG, WebP أو GIF',
    removeImage: 'تغيير الصورة',
    imageRequiredError: 'يرجى اختيار صورة لغلاف المرجع أولاً للمتابعة.',
    labelTitle: 'عنوان الكتاب أو المقال',
    titlePlaceholder: 'مثال: Structural Geology',
    labelAuthor: 'المؤلف / الجهة الناشرة',
    authorPlaceholder: 'مثال: Haakon Fossen',
    labelCategory: 'التصنيف الموضوعي',
    catStructural: 'الجيولوجيا البنائية (Structural Geology)',
    catShield: 'الدرع العربي (Arabian Shield)',
    catGeneral: 'مرجع عام (General Reference)',
    labelYear: 'سنة النشر (اختياري)',
    yearPlaceholder: 'مثال: 2020',
    labelUrl: 'رابط الشراء أو القراءة من الناشر الأصلي (Official Link)',
    urlPlaceholder: 'https://www.cambridge.org/...',
    urlHelper: 'ضع الرابط المباشر للموقع الرسمي للناشر أو صفحة DOI الرسمية. لا تضع روابط ملفات PDF مقرصنة.',
    labelDesc: 'وصف موجز للمرجع',
    descPlaceholder: 'ما الذي يغطيه هذا المرجع وما مدى فائدته للطلاب...',
    submitResourceBtn: 'حفظ وإضافة للمكتبة',
    cancelBtn: 'إلغاء',
    resourceAddedSuccess: 'تمت إضافة المرجع بنجاح إلى المكتبة!',

    attrBadgeKau: 'جامعة الملك عبدالعزيز — كلية علوم الأرض',
    attrBadgeCourse: 'الجيولوجيا البنائية المتقدمة (ESR-312)',
    attributionHeading: 'بيان المشروع الأكاديمي وحقوق النشر',
    studentCardTitle: 'عمل طلابي مستمر',
    studentCardSubtitle: 'بإشراف قسم الجيولوجيا البنائية وعلم الطبقات',
    studentCardText: 'هذا الموقع مشروع تعليمي شخصي من إعداد الطالب منذر السلمي (الرقم الجامعي: 2541706)، يهدف لتبسيط مفاهيم الجيولوجيا البنائية وتوثيق جيولوجيا المملكة والدرع العربي كمرجع للطلاب.',
    contactTitle: 'لأي استفسار، ملاحظة علمية، أو اقتراح تعديل:',
    copyEmailBtn: 'نسخ',
    emailCopied: 'تم النسخ!',
    policyCardTitle: 'سياسة عدم استضافة ملفات PDF',
    policyCardSubtitle: 'احترام حقوق الملكية الفكرية والنشر العلمي',
    policyCardText: 'التزامًا بالأمانة العلمية وقوانين حماية حقوق المؤلف العالمية والوطنية: لن يتم رفع أو توفير أي ملف PDF لأي كتاب أو مقال أو ورقة علمية على خوادم هذا الموقع إطلاقًا.',
    policyHighlightText: 'تقتصر منصة GeoPulse على تقديم ملخصات علمية موجزة وتوجيه الزائر عبر روابط مباشرة للمواقع الرسمية للناشرين الأصليين (مثل Cambridge, Wiley, SGS, Springer) للشراء أو الاطلاع النظامي.',

    about: 'GeoPulse مشروع تعليمي طلابي لمادة الجيولوجيا البنائية المتقدمة ESR-312، يجمع المعرفة الجيولوجية في مساحة واضحة ومنظّمة ومتاحة للجميع عبر GitHub.',
    backTop: 'للأعلى',
    footer: 'معرفة تبدأ بالفضول.',
    dialogEyebrow: 'شرح تفصيلي ومخطط علمي',
    closeLabel: 'إغلاق',
    dialogNote: 'محتوى علمي مراجع من مراجع الجيولوجيا البنائية والدرع العربي المعتمدة.',
    dialogDone: 'إغلاق والمتابعة',
    keyConceptsTitle: 'المفاهيم والعناصر الأساسية:'
  },
  en: {
    skip: 'Skip to content',
    navLabel: 'Main navigation',
    menuLabel: 'Open menu',
    navStructural: 'Structural Geology',
    navShield: 'Arabian Shield',
    navResources: 'Books & Articles',
    navAttribution: 'Project Notice & Contact',

    heroEyebrow: 'FOLLOW YOUR CURIOSITY',
    heroTitle1: 'Read the rocks.',
    heroTitle2: 'Discover the story.',
    heroDescription: 'From fundamental structural geology principles to the tectonic story of the Arabian Shield. A curated knowledge hub built for geology students.',
    exploreButton: 'Explore Sections',
    heroNote: 'Developing this platform as a reference for geology students',
    artLabel: 'Artistic cross-section of folded strata and geological structures',
    artCaption: 'Every layer tells a story.',
    exploreLabel: 'PATHS TO KNOWLEDGE',
    exploreHint: 'Choose where to start',

    structuralEyebrow: 'UNDERSTAND HOW ROCKS DEFORM',
    structuralTitle: 'Structural Geology',
    structuralIntro: 'Three connected core pillars: from fundamental principles to structures that reveal the history of crustal deformation.',
    availableNow: 'Full lesson & diagram',
    introTitle: 'Introduction to Structural Geology',
    introDesc: 'Foundations of stress and strain, plus descriptive, kinematic, and dynamic approaches.',
    ductileTitle: 'Ductile Deformation',
    ductileDesc: 'Folds, fold anatomy (hinge, axial surface), foliation, and lineation in deep crustal regimes.',
    brittleTitle: 'Brittle Deformation',
    brittleDesc: 'Fractures, joints, and fault kinematics (normal, reverse/thrust, and strike-slip faults).',
    structuralNote: 'Click any topic to explore comprehensive conceptual notes and scientific diagrams.',

    shieldEyebrow: 'GEOLOGY OF OUR REGION',
    shieldTitle: 'Arabian Shield',
    shieldIntro: 'Explore the origin and tectonic evolution of the Arabian Shield through intra-oceanic island arc accretion, and its lithodemic classification under the ASLLC code.',
    shieldNote: 'Documented references aligned with the Saudi Geological Survey',
    formationTitle: 'Formation & Tectonic Evolution',
    asllcTitle: 'Rock Classification & ASLLC Code',

    resourcesEyebrow: 'TAKE YOUR LEARNING FURTHER',
    resourcesTitle: 'Recommended Books & Articles',
    resourcesIntro: 'Curated references supporting students and researchers, linking directly to official publisher websites without hosting local unauthorized PDFs.',
    addResourceBtn: 'Add Book or Resource',
    searchPlaceholder: 'Search by book title, author, or keywords...',
    filterAll: 'All Resources',
    filterStructural: 'Structural Geology',
    filterShield: 'Arabian Shield',
    filterGeneral: 'General References',
    officialPublisherLink: 'Official Publisher Link',
    userAddedBadge: 'New Entry',
    noResultsTitle: 'No matching resources found',
    noResultsDesc: 'Try searching with different keywords or select another filter tag.',
    storagePersistenceNote: 'Added resources are saved locally in your browser and persist across reloads.',
    resetResources: 'Restore Default References',
    confirmReset: 'Are you sure you want to restore the default library? Custom added books will be cleared.',

    addResourceEyebrow: 'LIBRARY EXPANSION',
    addResourceTitle: 'Add Book or Article to Library',
    labelCover: 'Cover Image (Required)',
    uploadPrompt: 'Click here or drop book cover image',
    uploadTypes: 'PNG, JPG, WebP or GIF',
    removeImage: 'Change Image',
    imageRequiredError: 'Please upload a book cover image to continue.',
    labelTitle: 'Book or Article Title',
    titlePlaceholder: 'e.g. Structural Geology',
    labelAuthor: 'Author / Publishing Organization',
    authorPlaceholder: 'e.g. Haakon Fossen',
    labelCategory: 'Subject Category',
    catStructural: 'Structural Geology',
    catShield: 'Arabian Shield',
    catGeneral: 'General Reference',
    labelYear: 'Publication Year (Optional)',
    yearPlaceholder: 'e.g. 2020',
    labelUrl: 'Official Publisher / Store Link',
    urlPlaceholder: 'https://www.cambridge.org/...',
    urlHelper: 'Provide direct link to official publisher or DOI landing page. Do not link to pirated PDF files.',
    labelDesc: 'Brief Summary / Scope',
    descPlaceholder: 'What this book covers and why it is valuable for geology students...',
    submitResourceBtn: 'Save & Add to Library',
    cancelBtn: 'Cancel',
    resourceAddedSuccess: 'Resource successfully added to the library!',

    attrBadgeKau: 'King Abdulaziz University — Faculty of Earth Sciences',
    attrBadgeCourse: 'Advanced Structural Geology (ESR-312)',
    attributionHeading: 'Academic Project Notice & Fair-Use Policy',
    studentCardTitle: 'Student Coursework Project',
    studentCardSubtitle: 'Department of Structural Geology & Stratigraphy',
    studentCardText: 'This website is an independent educational initiative created by student Munthir Alsulami (KAU Student ID: 2541706), designed to clarify structural geology concepts and document the geology of the Kingdom and the Arabian Shield.',
    contactTitle: 'For questions, scientific notes, or suggested revisions:',
    copyEmailBtn: 'Copy',
    emailCopied: 'Copied!',
    policyCardTitle: 'Strict Zero-PDF Copyright Policy',
    policyCardSubtitle: 'Respecting Intellectual Property & Scholarly Publishing',
    policyCardText: 'In strict adherence to academic integrity and copyright laws: NO PDF files of any book, journal article, or paper will ever be uploaded or hosted on this site.',
    policyHighlightText: 'GeoPulse solely provides concise conceptual summaries and directs visitors through outbound links to the official publisher websites (such as Cambridge, Wiley, SGS, Springer) for authorized reading or purchase.',

    about: 'GeoPulse is a student educational project for Advanced Structural Geology (ESR-312), organizing geological knowledge into an accessible space hosted on GitHub.',
    backTop: 'Back to top',
    footer: 'Knowledge begins with curiosity.',
    dialogEyebrow: 'DETAILED LESSON & SCIENTIFIC DIAGRAM',
    closeLabel: 'Close',
    dialogNote: 'Academic content compiled from standard structural geology and Arabian Shield literature.',
    dialogDone: 'Close & Return',
    keyConceptsTitle: 'Key Concepts & Principles:'
  }
};

// --- DEFAULT CURATED TEXTBOOKS & ARTICLES ---
const defaultResources = [
  {
    id: 'fossen-structural',
    title: {
      ar: 'Structural Geology (الجيولوجيا البنائية)',
      en: 'Structural Geology (2nd Edition)'
    },
    author: 'Haakon Fossen',
    year: '2016',
    category: 'structural',
    desc: {
      ar: 'المرجع الأبرز عالميًا لطلاب الجيولوجيا البنائية؛ يتميز برسوماته ثلاثية الأبعاد الدقيقة وشرحه المعمّق لمفاهيم الإجهاد والانفعال والفوالق والطيّات وتحليل التشوّه المجهري.',
      en: 'The premier modern textbook in structural geology, world-renowned for its vivid 3D diagrams, stress-strain tensor analysis, and balanced coverage of brittle and ductile regimes.'
    },
    url: 'https://www.cambridge.org/highereducation/books/structural-geology/8807F1B1FFB74D1429B8EF7D65A48F7B',
    publisher: 'Cambridge University Press',
    coverSvg: `<svg viewBox="0 0 300 200" width="100%" height="100%"><rect width="300" height="200" fill="#1b3f34"/><path d="M0 120 Q 80 40 150 110 T 300 90 L 300 200 L 0 200 Z" fill="#305d4d"/><path d="M0 145 Q 80 75 150 135 T 300 120 L 300 200 L 0 200 Z" fill="#9e6244"/><text x="24" y="60" fill="#f5f4ed" font-size="20" font-family="DM Sans, sans-serif" font-weight="bold">Structural</text><text x="24" y="86" fill="#e8c7a1" font-size="20" font-family="DM Sans, sans-serif" font-weight="bold">Geology</text><text x="24" y="110" fill="#cbd4c8" font-size="12" font-family="DM Sans, sans-serif">Haakon Fossen • Cambridge</text></svg>`
  },
  {
    id: 'davis-reynolds',
    title: {
      ar: 'Structural Geology of Rocks and Regions',
      en: 'Structural Geology of Rocks and Regions (3rd Edition)'
    },
    author: 'George H. Davis, Stephen J. Reynolds, Charles F. Kluth',
    year: '2011',
    category: 'structural',
    desc: {
      ar: 'مرجع حقلي ومفاهيمي كلاسيكي يركز على الربط بين المشاهدات الميدانية في الصخور والنماذج الميكانيكية والهندسية لحركة الصفائح وتشوّه القشرة الأرضية.',
      en: 'A classic field-oriented reference bridging outcrop observations with tectonic modeling and regional structural synthesis.'
    },
    url: 'https://www.wiley.com/en-us/Structural+Geology+of+Rocks+and+Regions%2C+3rd+Edition-p-9780471152644',
    publisher: 'John Wiley & Sons',
    coverSvg: `<svg viewBox="0 0 300 200" width="100%" height="100%"><rect width="300" height="200" fill="#2d3d4b"/><path d="M20 180 L 140 40 L 260 180 Z" fill="none" stroke="#d99b70" stroke-width="4"/><path d="M60 180 L 140 80 L 220 180 Z" fill="none" stroke="#a3b899" stroke-width="3"/><text x="25" y="45" fill="#ffffff" font-size="18" font-family="DM Sans, sans-serif" font-weight="bold">Rocks & Regions</text><text x="25" y="70" fill="#c3cdd4" font-size="12" font-family="DM Sans, sans-serif">Davis, Reynolds & Kluth</text></svg>`
  },
  {
    id: 'twiss-moores',
    title: {
      ar: 'Structural Geology',
      en: 'Structural Geology (2nd Edition)'
    },
    author: 'Robert J. Twiss, Eldridge M. Moores',
    year: '2007',
    category: 'structural',
    desc: {
      ar: 'مرجع تأسيسي عريق يجمع بين الجيولوجيا البنائية والتكتونيات الإقليمية، ويغطي مساقط الإسقاط الستريوجرافي والتشوه الدقيق وعلم الزلازل البنائية.',
      en: 'Comprehensive and rigorous textbook integrating classical structural geology with plate tectonics, stereographic projection, and microstructures.'
    },
    url: 'https://www.macmillanlearning.com/',
    publisher: 'W. H. Freeman',
    coverSvg: `<svg viewBox="0 0 300 200" width="100%" height="100%"><rect width="300" height="200" fill="#3b322a"/><circle cx="150" cy="115" r="60" fill="none" stroke="#e8c29b" stroke-width="2"/><ellipse cx="150" cy="115" rx="60" ry="25" fill="none" stroke="#8fa89b" stroke-width="2"/><text x="25" y="45" fill="#f4ebd0" font-size="18" font-family="DM Sans, sans-serif" font-weight="bold">Twiss & Moores</text><text x="25" y="68" fill="#c4b5a2" font-size="12" font-family="DM Sans, sans-serif">Structural Geology</text></svg>`
  },
  {
    id: 'johnson-kattan-shield',
    title: {
      ar: 'The Arabian Shield: Review of Geological Evolution',
      en: 'The Arabian Shield: A Review of its Geological Evolution'
    },
    author: 'P. R. Johnson, F. H. Kattan, et al.',
    year: '2016',
    category: 'shield',
    desc: {
      ar: 'الورقة المرجعية الأساسية حول التطور الجيولوجي للدرع العربي، وتوثيق مراحل تفكك قارة رودينيا، وتشكّل أحزمة الأفيوليت، والتحام القطع التكتونية (Terranes).',
      en: 'Essential synthesized monograph detailing the Neoproterozoic evolution, island arc amalgamation, and terrane boundary sutures across the Arabian Shield.'
    },
    url: 'https://sgs.gov.sa/',
    publisher: 'Saudi Geological Survey (SGS)',
    coverSvg: `<svg viewBox="0 0 300 200" width="100%" height="100%"><rect width="300" height="200" fill="#443226"/><polygon points="30,170 120,50 200,120 270,70 280,180" fill="#a45e3e" opacity="0.8"/><text x="24" y="40" fill="#f2ede4" font-size="17" font-family="DM Sans, sans-serif" font-weight="bold">The Arabian Shield</text><text x="24" y="62" fill="#d2b8a3" font-size="12" font-family="DM Sans, sans-serif">Johnson & Kattan • SGS</text></svg>`
  },
  {
    id: 'asllc-code-report',
    title: {
      ar: 'دليل تصنيف صخور الدرع العربي (ASLLC Code)',
      en: 'Arabian Shield Lithostratigraphic & Lithodemic Code (ASLLC)'
    },
    author: 'M. A. Kashgari / هيئة المساحة الجيولوجية السعودية',
    year: '2024',
    category: 'shield',
    desc: {
      ar: 'الدليل الرسمي المعتمد لتسمية وتصنيف الصخور النارية والمتحولة المعقدة في الدرع العربي كـ (Lithodemes) بدلاً من الطبقية التقليدية، وفق أحدث المعايير الجيولوجية.',
      en: 'The official nomenclature and classification framework standardizing non-layered plutonic and metamorphic suites across the Arabian Shield.'
    },
    url: 'https://sgs.gov.sa/',
    publisher: 'Saudi Geological Survey',
    coverSvg: `<svg viewBox="0 0 300 200" width="100%" height="100%"><rect width="300" height="200" fill="#1e332d"/><rect x="30" y="80" width="70" height="85" fill="#365e51" rx="4"/><rect x="115" y="60" width="70" height="105" fill="#9e6744" rx="4"/><rect x="200" y="95" width="70" height="70" fill="#587469" rx="4"/><text x="25" y="40" fill="#ffffff" font-size="17" font-family="DM Sans, sans-serif" font-weight="bold">ASLLC Classification</text><text x="25" y="60" fill="#9dbba9" font-size="12" font-family="DM Sans, sans-serif">Lithodemic Code • SGS</text></svg>`
  }
];

// --- EDUCATIONAL TOPICS DATABASE WITH RICH CONTENT & SVG DIAGRAMS ---
const topics = {
  intro: {
    title: 'introTitle',
    desc: 'introDesc',
    diagram: `
      <svg viewBox="0 0 420 180" width="100%" height="160" style="max-width:380px;">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#a45e3e"/>
          </marker>
        </defs>
        <!-- Stress Ellipse -->
        <ellipse cx="210" cy="90" rx="95" ry="48" fill="#edf3eb" stroke="#173f35" stroke-width="2.5"/>
        <line x1="210" y1="20" x2="210" y2="40" stroke="#a45e3e" stroke-width="3" marker-end="url(#arrow)"/>
        <line x1="210" y1="160" x2="210" y2="140" stroke="#a45e3e" stroke-width="3" marker-end="url(#arrow)"/>
        <line x1="90" y1="90" x2="113" y2="90" stroke="#a45e3e" stroke-width="3" marker-end="url(#arrow)"/>
        <line x1="330" y1="90" x2="307" y2="90" stroke="#a45e3e" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="218" y="32" fill="#a45e3e" font-size="13" font-weight="bold">σ₁ (Max Stress)</text>
        <text x="218" y="165" fill="#a45e3e" font-size="13" font-weight="bold">σ₁</text>
        <text x="50" y="94" fill="#a45e3e" font-size="13" font-weight="bold">σ₃</text>
        <text x="338" y="94" fill="#a45e3e" font-size="13" font-weight="bold">σ₃ (Min Stress)</text>
        <text x="175" y="94" fill="#173f35" font-size="12" font-weight="600">Strain Ellipsoid</text>
      </svg>
    `,
    ar: [
      'الجيولوجيا البنائية (Structural Geology): دراسة هندسة وتوزيع وتشوّه الصخور ثلاثي الأبعاد تحت تأثير القوى التكتونية.',
      'الإجهاد (Stress - σ): القوة المؤثرة على وحدة المساحة (F/A). وينقسم إلى إجهاد عمودي (Normal Stress) وإجهاد قصّي (Shear Stress).',
      'محاور الإجهاد الرئيسية الثلاثة: الإجهاد الأكبر (σ₁)، والإجهاد المتوسط (σ₂)، والإجهاد الأصغر (σ₃)، وهي متعامدة دائمًا.',
      'الانفعال (Strain - ε): التغير في شكل أو حجم أو موضع الصخر الناتج عن الإجهاد، ويُمثّل بمجسم إهليلجي (Strain Ellipsoid).',
      'مناهج التحليل: التحليل الوصفي (Descriptive - الهندسة والأبعاد)، الحركي (Kinematic - مسار الإزاحة والتشوه)، والديناميكي (Dynamic - القوى والإجهادات المسببة).'
    ],
    en: [
      'Structural Geology: The study of the 3D geometry, distribution, and deformation of rock bodies under tectonic forces.',
      'Stress (σ): Force per unit area (F/A). Resolved into normal stress (perpendicular to surface) and shear stress (parallel to surface).',
      'Three Principal Stresses: Maximum compressive stress (σ₁), intermediate stress (σ₂), and minimum stress (σ₃), mutually orthogonal.',
      'Strain (ε): The resulting deformation, change in shape, volume, or orientation of rocks, mathematically represented by the strain ellipsoid.',
      'Core Analytical Approaches: Descriptive (geometric architecture), Kinematic (paths of displacement and rotation), and Dynamic (forces and stress states).'
    ]
  },
  ductile: {
    title: 'ductileTitle',
    desc: 'ductileDesc',
    diagram: `
      <svg viewBox="0 0 420 180" width="100%" height="160" style="max-width:380px;">
        <!-- Fold strata (Anticline and Syncline) -->
        <path d="M 30 140 Q 130 30 220 120 T 390 120" fill="none" stroke="#173f35" stroke-width="4"/>
        <path d="M 30 160 Q 130 50 220 140 T 390 140" fill="none" stroke="#8c4728" stroke-width="3"/>
        <path d="M 30 175 Q 130 65 220 155 T 390 155" fill="none" stroke="#527863" stroke-width="3"/>
        <!-- Axial Plane dashed line -->
        <line x1="125" y1="15" x2="125" y2="175" stroke="#a45e3e" stroke-width="2" stroke-dasharray="4,4"/>
        <circle cx="125" cy="40" r="4" fill="#a45e3e"/>
        <text x="135" y="30" fill="#a45e3e" font-size="12" font-weight="bold">Axial Surface</text>
        <text x="90" y="85" fill="#173f35" font-size="12" font-weight="bold">Anticline (محدبة)</text>
        <text x="260" y="145" fill="#173f35" font-size="12" font-weight="bold">Syncline (مقعرة)</text>
        <text x="60" y="115" fill="#647065" font-size="10">Limb (جناح)</text>
        <text x="165" y="95" fill="#647065" font-size="10">Limb</text>
      </svg>
    `,
    ar: [
      'التشوّه اللدن (Ductile Deformation): يحدث في أعماق القشرة الأرضية عند درجات حرارة وضغوط مرتفعة ومعدلات انفعال بطيئة، حيث تتشوه الصخور بالانثناء دون أن تفقد تماسكها وتتكسر.',
      'الطيات (Folds): التواء في الطبقات الصخرية نتيجة إجهادات ضغطية. أهم أنواعها: الطية المحدبة (Anticline - أقدم الصخور في المركز) والطية المقعرة (Syncline - أحدث الصخور في المركز).',
      'أجزاء الطية الهندسية: المفصلة (Hinge line)، المستوى المحوري (Axial Surface)، الجناحان (Limbs)، وزاوية الانفراج بين الجناحين (Interlimb angle).',
      'التورّق (Foliation): انتظام موازٍ للمعادن الصفيحية (كالميكا) ناتج عن إعادة التبلور أثناء الانضغاط (Cleavage & Schistosity).',
      'التخطّط (Lineation): تراكيب خطية متوازية على أسطح الصخور المتحولة تعكس اتجاه الامتداد أو حركة القص.'
    ],
    en: [
      'Ductile Deformation: Occurs at greater crustal depths under high temperature, confining pressure, and slow strain rates, allowing rocks to bend permanently without fracturing.',
      'Folds: Undulations in rock strata formed predominantly by compressive tectonic stresses. Anticlines feature older strata in the core; synclines contain younger strata in the core.',
      'Anatomy of a Fold: Hinge zone, axial plane/surface, limbs, and interlimb tightness classification (gentle, open, tight, isoclinal).',
      'Foliation: Planar fabric developed in deformed rocks through preferred mineral alignment and recrystallization parallel to the axial surface.',
      'Lineation: Linear fabric elements indicating direction of maximum stretch or shear movement during ductile flow.'
    ]
  },
  brittle: {
    title: 'brittleTitle',
    desc: 'brittleDesc',
    diagram: `
      <svg viewBox="0 0 420 180" width="100%" height="160" style="max-width:380px;">
        <defs>
          <marker id="slip-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#173f35"/>
          </marker>
        </defs>
        <!-- Fault Plane -->
        <line x1="90" y1="30" x2="290" y2="155" stroke="#a45e3e" stroke-width="3"/>
        <!-- Footwall Block -->
        <polygon points="50,155 190,155 130,80 50,80" fill="#edece5" stroke="#173f35" stroke-width="1.8"/>
        <!-- Hanging wall Block -->
        <polygon points="210,120 340,120 340,45 270,45" fill="#dfdcd2" stroke="#173f35" stroke-width="1.8"/>
        <!-- Slip arrow -->
        <line x1="280" y1="65" x2="230" y2="95" stroke="#173f35" stroke-width="2.5" marker-end="url(#slip-arrow)"/>
        <text x="65" y="125" fill="#173f35" font-size="12" font-weight="bold">Footwall (كتلة القاع)</text>
        <text x="245" y="80" fill="#173f35" font-size="12" font-weight="bold">Hanging Wall (الكتلة المعلقة)</text>
        <text x="140" y="45" fill="#a45e3e" font-size="11" font-weight="600">Fault Plane (مستوى الصدع)</text>
      </svg>
    `,
    ar: [
      'التشوّه الهش (Brittle Deformation): يحدث في الأجزاء العليا والباردة من القشرة الأرضية عندما يتجاوز الإجهاد حد مرونة الصخر (Yield Strength)، مما يؤدي إلى حدوث كسور سريعة وفقدان التماسك.',
      'الفواصل (Joints): كسور صخرية ناتجة عن إجهاد الشد (Mode I) دون حدوث أي إزاحة ملموسة موازية لسطح الكسر.',
      'الفوالق (Faults): كسور تصاحبها إزاحة نسبية موازية لسطح الصدع. وتنقسم وفق تصنيف أندرسون (Andersonian Mechanics) إلى:',
      '1. الفوالق العادية (Normal Faults): ناتجة عن قوى شد تكتونية (σ₁ رأسي)، حيث تنزلق الكتلة المعلقة (Hanging Wall) إلى الأسفل بالنسبة لكتلة القاع (Footwall).',
      '2. الفوالق المعكوسة والدسرية (Reverse & Thrust Faults): ناتجة عن قوى ضغط (σ₃ رأسي)، حيث تصعد الكتلة المعلقة إلى الأعلى فوق كتلة القاع.',
      '3. فوالق الانزلاق المضربي (Strike-Slip Faults): ناتجة عن قوى قص أفقية (σ₂ رأسي)، وتكون الحركة جانبية إما يمينية (Dextral) أو يسارية (Sinistral).'
    ],
    en: [
      'Brittle Deformation: Dominates shallow crustal conditions (low T and P). Stresses exceed rock strength, triggering rapid fracturing and frictional loss of cohesion.',
      'Joints: Extension fractures (Mode I) formed without perceptible shear displacement across the fracture plane.',
      'Faults: Fractures exhibiting significant shear displacement parallel to the fracture surface. Classified by Andersonian theory:',
      '1. Normal Faults: Formed in extensional regimes where σ₁ is vertical; hanging wall moves downward relative to footwall.',
      '2. Reverse / Thrust Faults: Formed in compressional regimes where σ₃ is vertical; hanging wall moves upward over footwall.',
      '3. Strike-Slip Faults: Formed in shear regimes where σ₂ is vertical; displacement is horizontal (sinistral or dextral).'
    ]
  },
  formation: {
    title: 'formationTitle',
    desc: 'shieldIntro',
    diagram: `
      <svg viewBox="0 0 420 180" width="100%" height="160" style="max-width:380px;">
        <!-- Oceanic crust and Island Arc accretion -->
        <rect width="420" height="180" fill="#f4f6f3"/>
        <path d="M 20 130 L 150 130 L 210 160 L 380 160" fill="none" stroke="#255142" stroke-width="3"/>
        <!-- Arc Volcanic block -->
        <path d="M 120 130 L 145 90 L 170 130 Z" fill="#a45e3e"/>
        <path d="M 230 160 L 265 105 L 300 160 Z" fill="#718466"/>
        <!-- Suture zone indication -->
        <line x1="190" y1="85" x2="190" y2="155" stroke="#9e3a24" stroke-width="2.5" stroke-dasharray="3,3"/>
        <text x="145" y="75" fill="#9e3a24" font-size="11" font-weight="bold">Suture Zone (نطاق التحام)</text>
        <text x="90" y="150" fill="#173f35" font-size="11">Hijaz Arc</text>
        <text x="245" y="175" fill="#173f35" font-size="11">Asir Terrane</text>
        <text x="50" y="40" fill="#173f35" font-size="13" font-weight="bold">Neoproterozoic Arc Accretion (التحام الأقواس)</text>
      </svg>
    `,
    ar: [
      'الدرع العربي (Arabian Shield): جزء رئيسي من الصفيحة العربية يمثل قشرة قارية عتيقة تشكلت خلال دهر البروتيروزويك المتأخر (Neoproterozoic: ~900 - 550 مليون سنة).',
      'تفكك قارة رودينيا (Rodinia Breakup): بدأت نشأة الدرع مع انفتاح محيط موزمبيق (Mozambique Ocean) وبدء دورة ويلسون التكتونية قبل نحو 870 مليون سنة.',
      'أقواس الجزر البركانية (Island Arcs): تشكلت أقواس جزرية بحرية داخل المحيط (مثل أراضي عسير، الحجاز، مدين، عفيف)، وتطورت فوق نطاقات اندساس أفيوليتية.',
      'الالتحام والتصادم (Terrane Accretion): تلاحمت هذه الكتل البركانية على مراحل متعددة، تاركة وراءها أحزمة أفيوليت مميزة تسمى نطاقات الالتحام (Suture Zones) مثل نطاق بئر عمق ونطاق ينبع.',
      'صدوع نجد المضربية (Najd Fault System): في المراحل الختامية (~540 مليون سنة)، تأثر الدرع العربي بنظام قص مضربي يساري ضخم يمتد لمئات الكيلومترات باتجاه شمال غرب - جنوب شرق.'
    ],
    en: [
      'The Arabian Shield: A prominent exposure of Precambrian continental crust formed during the Neoproterozoic Pan-African orogenic cycle (~900–550 Ma).',
      'Rodinia Breakup: Origin initiated with the rifting of the supercontinent Rodinia and opening of the Mozambique Ocean (~870 Ma).',
      'Intra-oceanic Island Arcs: Multiple oceanic volcanic arcs formed over subduction zones (e.g., Asir, Hijaz, Midyan, and Afif terranes).',
      'Terrane Accretion & Sutures: Continental growth occurred through progressive collision and amalgamation of these microplates, marked by ophiolitic suture zones (such as Bir Umq and Yanbu sutures).',
      'Najd Strike-Slip Fault System: Final cratonization culminated in a vast transcurrent NW-trending left-lateral shear network (~540 Ma).'
    ]
  },
  asllc: {
    title: 'asllcTitle',
    desc: 'shieldNote',
    diagram: `
      <svg viewBox="0 0 420 180" width="100%" height="160" style="max-width:380px;">
        <rect width="420" height="180" fill="#f7f6f0"/>
        <!-- Hierarchy Box -->
        <rect x="40" y="30" width="150" height="120" rx="6" fill="#edf3eb" stroke="#173f35" stroke-width="1.5"/>
        <text x="55" y="55" fill="#173f35" font-size="12" font-weight="bold">الطبقية التقليدية</text>
        <text x="55" y="80" fill="#647065" font-size="11">• مجموعة عليا (Supergroup)</text>
        <text x="55" y="105" fill="#647065" font-size="11">• مجموعة (Group)</text>
        <text x="55" y="130" fill="#647065" font-size="11">• تكوين صخري (Formation)</text>

        <rect x="230" y="30" width="150" height="120" rx="6" fill="#faeee7" stroke="#a45e3e" stroke-width="1.5"/>
        <text x="245" y="55" fill="#a45e3e" font-size="12" font-weight="bold">نظام ASLLC الليثوديمي</text>
        <text x="245" y="80" fill="#647065" font-size="11">• معقد / حشد (Complex)</text>
        <text x="245" y="105" fill="#647065" font-size="11">• متتالية نارية (Suite)</text>
        <text x="245" y="130" fill="#647065" font-size="11">• وحدة صخرية (Lithodeme)</text>
      </svg>
    `,
    ar: [
      'نظام ASLLC (Arabian Shield Lithostratigraphic and Lithodemic Classification): الدليل الجيولوجي المعتمد في المملكة لتصنيف صخور الدرع العربي وفق معايير هيئة المساحة الجيولوجية السعودية.',
      'لماذا وُضع هذا النظام؟ لأن الصخور النارية المتداخلة والصخور المتحولة شديدة التشوه لا تتبع قانون تعاقب الطبقات (Law of Superposition)، مما يستوجب تصنيفها كوحدات مستقلة هندسيًا وتركيبًا.',
      'الوحدة الليثوديمية (Lithodeme): الوحدة الأساسية للصخور غير الطبقية (كتل بلوتونية محددة أو أجسام متحولة متميزة بنوع الصخر).',
      'المتتالية (Suite): تجمع لعدد من الوحدات الليثوديمية المرتبطة جينيًا والمتشابهة في الخصائص البترولوجية والتكوينية.',
      'المعقد (Complex): خليط معقد تركيبيًا وصخريًا يحتوي على صخور نارية ومتحولة متعددة الأعمار ومتداخلة لا يمكن فصلها بمقياس الخرائط الإقليمية.'
    ],
    en: [
      'ASLLC Code (Arabian Shield Lithostratigraphic and Lithodemic Classification): The standardized framework adopted by the Saudi Geological Survey for mapping and naming rock bodies across the Shield.',
      'The Need for Lithodemic Units: Plutonic intrusions and high-grade metamorphic complexes do not obey the stratigraphic Law of Superposition, requiring lithodemic categorization.',
      'Lithodeme: The fundamental rock unit for non-layered igneous and metamorphic rocks, defined by lithic homogeneity.',
      'Suite: An association of genetically and petrologically related lithodemes sharing a common tectonic and geochemical affinity.',
      'Complex: A structurally intricate terrane comprising diverse, sheared, or poly-metamorphic rock types indistinguishable at regional map scale.'
    ]
  }
};

// --- APP STATE ---
let lang = 'ar';
try {
  const saved = localStorage.getItem('geopulse-language');
  if (saved === 'en' || saved === 'ar') lang = saved;
} catch (e) {}

const STORAGE_KEY = 'geopulse-custom-resources-v1';
let customResources = [];
let activeCategory = 'all';
let searchQuery = '';
let activeTopicKey = null;

// Load custom user resources from localStorage
function loadCustomResources() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      customResources = JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading localStorage resources:', err);
    customResources = [];
  }
}

function saveCustomResources() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customResources));
  } catch (err) {
    console.error('Error saving to localStorage:', err);
  }
}

// Combine default + custom resources
function getAllResources() {
  return [...customResources, ...defaultResources];
}

// --- RENDERING RESOURCES ---
function renderResources() {
  const grid = document.getElementById('resources-grid');
  const empty = document.getElementById('resources-empty');
  if (!grid) return;

  const all = getAllResources();
  const q = searchQuery.trim().toLowerCase();

  const filtered = all.filter(item => {
    // Category match
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    // Search query match
    if (q) {
      const title = typeof item.title === 'string' ? item.title : (item.title[lang] || item.title.en || '');
      const author = item.author || '';
      const desc = typeof item.desc === 'string' ? item.desc : (item.desc[lang] || item.desc.en || '');
      const haystack = `${title} ${author} ${desc}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  filtered.forEach(item => {
    const card = document.createElement('article');
    card.className = 'resource-card';

    const titleText = typeof item.title === 'string' ? item.title : (item.title[lang] || item.title.en);
    const descText = typeof item.desc === 'string' ? item.desc : (item.desc[lang] || item.desc.en);
    const catLabel = item.category === 'structural'
      ? copy[lang].filterStructural
      : item.category === 'shield'
      ? copy[lang].filterShield
      : copy[lang].filterGeneral;

    let coverHtml = '';
    if (item.customImage) {
      coverHtml = `<img src="${item.customImage}" alt="${titleText}" loading="lazy">`;
    } else if (item.coverSvg) {
      coverHtml = item.coverSvg;
    } else {
      coverHtml = `<div style="background:#173f35;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;padding:12px;text-align:center;">${titleText}</div>`;
    }

    const isUser = !!item.isUserCreated;

    card.innerHTML = `
      <div class="card-cover-wrap">
        ${coverHtml}
      </div>
      <div class="card-tags">
        <span class="category-tag">${catLabel}</span>
        ${isUser ? `<span class="user-badge">${copy[lang].userAddedBadge}</span>` : ''}
        ${item.year ? `<span class="year-tag">${item.year}</span>` : ''}
      </div>
      <h3>${titleText}</h3>
      <div class="resource-author">${item.author || ''}</div>
      <p class="resource-description">${descText}</p>
      <div class="resource-footer-row">
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="official-link-btn" aria-label="${copy[lang].officialPublisherLink}: ${titleText}">
          <span>${copy[lang].officialPublisherLink}</span>
          <span class="link-ext-icon" aria-hidden="true">↗</span>
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// --- TOPIC MODAL HANDLERS ---
const topicDialog = document.getElementById('topic-dialog');

function renderActiveTopic() {
  const topic = topics[activeTopicKey];
  if (!topic || !topicDialog) return;

  const titleEl = document.getElementById('dialog-title');
  const descEl = document.getElementById('dialog-description');
  const listEl = document.getElementById('dialog-list');
  const diagramEl = document.getElementById('dialog-diagram');

  titleEl.textContent = copy[lang][topic.title] || topic.title;
  descEl.textContent = copy[lang][topic.desc] || '';

  if (topic.diagram) {
    diagramEl.innerHTML = topic.diagram;
    diagramEl.hidden = false;
  } else {
    diagramEl.innerHTML = '';
    diagramEl.hidden = true;
  }

  const items = topic[lang] || topic.en || [];
  listEl.innerHTML = '';
  items.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    listEl.appendChild(li);
  });
}

function openTopic(key) {
  activeTopicKey = key;
  renderActiveTopic();
  topicDialog.showModal();
  document.body.style.overflow = 'hidden';
}

// --- LANGUAGE SWITCHING ---
function setLanguage(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Translate all [data-i18n] text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (copy[lang] && copy[lang][key]) {
      el.textContent = copy[lang][key];
    }
  });

  // Translate all [data-placeholder]
  document.querySelectorAll('[data-placeholder]').forEach(el => {
    const key = el.dataset.placeholder;
    if (copy[lang] && copy[lang][key]) {
      el.placeholder = copy[lang][key];
    }
  });

  // Translate aria-labels
  document.querySelectorAll('[data-label]').forEach(el => {
    const key = el.dataset.label;
    if (copy[lang] && copy[lang][key]) {
      el.setAttribute('aria-label', copy[lang][key]);
    }
  });

  // Toggle button state
  const langText = document.getElementById('language-text');
  const langBtn = document.getElementById('language');
  if (langText) langText.textContent = lang === 'ar' ? 'English' : 'العربية';
  if (langBtn) {
    langBtn.lang = lang === 'ar' ? 'en' : 'ar';
    langBtn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  }

  // Document metadata
  document.title = lang === 'ar'
    ? 'GeoPulse | نبض المعرفة الجيولوجية — الجيولوجيا البنائية والدرع العربي'
    : 'GeoPulse | Geology, Connected — Structural Geology & Arabian Shield';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = copy[lang].heroDescription;

  try {
    localStorage.setItem('geopulse-language', lang);
  } catch (e) {}

  if (topicDialog && topicDialog.open) {
    renderActiveTopic();
  }

  renderResources();
}

// --- ADD RESOURCE MODAL & FORM ---
const addDialog = document.getElementById('add-resource-dialog');
const openAddBtn = document.getElementById('open-add-resource');
const closeAddBtn = document.getElementById('close-add-resource');
const cancelAddBtn = document.getElementById('cancel-add-resource');
const addForm = document.getElementById('add-resource-form');
const imageInput = document.getElementById('resource-image-input');
const dropzone = document.getElementById('upload-dropzone');
const dropzoneEmpty = document.getElementById('dropzone-empty');
const dropzonePreview = document.getElementById('dropzone-preview');
const coverPreviewImg = document.getElementById('cover-preview-img');
const removeCoverBtn = document.getElementById('remove-cover-btn');
const imageErrorMsg = document.getElementById('image-error-msg');

let currentCoverBase64 = null;

function clearAddForm() {
  if (addForm) addForm.reset();
  currentCoverBase64 = null;
  if (coverPreviewImg) coverPreviewImg.src = '';
  if (dropzoneEmpty) dropzoneEmpty.hidden = false;
  if (dropzonePreview) dropzonePreview.hidden = true;
  if (imageErrorMsg) imageErrorMsg.hidden = true;
}

function handleImageFile(file) {
  if (!file || !file.type.startsWith('image/')) {
    imageErrorMsg.hidden = false;
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    currentCoverBase64 = e.target.result;
    coverPreviewImg.src = currentCoverBase64;
    dropzoneEmpty.hidden = true;
    dropzonePreview.hidden = false;
    imageErrorMsg.hidden = true;
  };
  reader.readAsDataURL(file);
}

// --- EMAIL COPY BUTTON WITH FEEDBACK ---
function setupCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-btn-text');
  const copyIcon = document.getElementById('copy-btn-icon');
  const targetEmail = 'malsulami0868@stu.kau.edu.sa';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(targetEmail);
      } else {
        const temp = document.createElement('textarea');
        temp.value = targetEmail;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      copyBtn.classList.add('copied');
      if (copyText) copyText.textContent = copy[lang].emailCopied;
      if (copyIcon) copyIcon.textContent = '✓';

      setTimeout(() => {
        copyBtn.classList.remove('copied');
        if (copyText) copyText.textContent = copy[lang].copyEmailBtn;
        if (copyIcon) copyIcon.textContent = '📋';
      }, 2000);
    } catch (e) {
      console.warn('Clipboard copy failed:', e);
    }
  });
}

// --- INITIALIZE ALL EVENT LISTENERS ---
function initApp() {
  loadCustomResources();

  // Language button
  const langBtn = document.getElementById('language');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(lang === 'ar' ? 'en' : 'ar');
    });
  }

  // Mobile menu toggle
  const menu = document.getElementById('menu');
  const nav = document.getElementById('navigation');
  if (menu && nav) {
    function closeMenu() {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  }

  // Topic dialog events
  document.querySelectorAll('[data-topic]').forEach(button => {
    button.addEventListener('click', () => {
      openTopic(button.dataset.topic);
    });
  });

  const closeDialogBtn = document.getElementById('close-dialog');
  const dialogDoneBtn = document.getElementById('dialog-done');
  if (closeDialogBtn) closeDialogBtn.addEventListener('click', () => topicDialog.close());
  if (dialogDoneBtn) dialogDoneBtn.addEventListener('click', () => topicDialog.close());

  if (topicDialog) {
    topicDialog.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
    topicDialog.addEventListener('click', event => {
      if (event.target === topicDialog) {
        const r = topicDialog.getBoundingClientRect();
        if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) {
          topicDialog.close();
        }
      }
    });
  }

  // Add Resource Modal events
  if (openAddBtn && addDialog) {
    openAddBtn.addEventListener('click', () => {
      clearAddForm();
      addDialog.showModal();
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeAddBtn && addDialog) {
    closeAddBtn.addEventListener('click', () => addDialog.close());
  }

  if (cancelAddBtn && addDialog) {
    cancelAddBtn.addEventListener('click', () => addDialog.close());
  }

  if (addDialog) {
    addDialog.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
    addDialog.addEventListener('click', event => {
      if (event.target === addDialog) {
        const r = addDialog.getBoundingClientRect();
        if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) {
          addDialog.close();
        }
      }
    });
  }

  // Image upload handling
  if (imageInput) {
    imageInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleImageFile(e.target.files[0]);
      }
    });
  }

  if (removeCoverBtn) {
    removeCoverBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentCoverBase64 = null;
      if (imageInput) imageInput.value = '';
      if (dropzoneEmpty) dropzoneEmpty.hidden = false;
      if (dropzonePreview) dropzonePreview.hidden = true;
    });
  }

  // Drag and drop for cover
  if (dropzone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });
    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });
    dropzone.addEventListener('drop', (e) => {
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleImageFile(e.dataTransfer.files[0]);
      }
    });
  }

  // Submit new resource
  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!currentCoverBase64) {
        imageErrorMsg.hidden = false;
        return;
      }
      imageErrorMsg.hidden = true;

      const title = document.getElementById('resource-title-input').value.trim();
      const author = document.getElementById('resource-author-input').value.trim();
      const category = document.getElementById('resource-category-select').value;
      const year = document.getElementById('resource-year-input').value.trim();
      const url = document.getElementById('resource-url-input').value.trim();
      const desc = document.getElementById('resource-desc-input').value.trim();

      if (!title || !author || !url || !desc) {
        alert(lang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
        return;
      }

      const newResource = {
        id: 'custom-' + Date.now(),
        title: title,
        author: author,
        category: category,
        year: year || new Date().getFullYear().toString(),
        url: url,
        desc: desc,
        customImage: currentCoverBase64,
        isUserCreated: true
      };

      customResources.unshift(newResource);
      saveCustomResources();
      renderResources();
      addDialog.close();

      // Scroll smoothly to resources section
      const resSection = document.getElementById('resources');
      if (resSection) {
        resSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Search input
  const searchInput = document.getElementById('resource-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderResources();
    });
  }

  // Filter pills
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      activeCategory = pill.dataset.filter || 'all';
      renderResources();
    });
  });

  // Reset resources button
  const resetBtn = document.getElementById('reset-resources-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm(copy[lang].confirmReset)) {
        customResources = [];
        localStorage.removeItem(STORAGE_KEY);
        renderResources();
      }
    });
  }

  // Setup email copy button
  setupCopyEmail();

  // Escape key closes modals
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (topicDialog && topicDialog.open) topicDialog.close();
      if (addDialog && addDialog.open) addDialog.close();
    }
  });

  // Update dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Apply initial language & render
  setLanguage(lang);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
