// Data for Watazawadoo Academy - Courses and Instructors
const ACADEMY_DATA = {
    instructors: [
        {
            id: "sarah-ahmed",
            name: { ar: "أ/ سارة أحمد", en: "Ms. Sarah Ahmed" },
            specialization: { ar: "القرآن الكريم والتجويد", en: "Holy Quran & Tajweed" },
            experience: { ar: "7 سنوات", en: "7 Years" },
            bio: {
                ar: "معلمة قرآن وتجويد معتمدة، متخصصة في تحفيظ الأطفال والمبتدئين بأحدث الأساليب التفاعلية والتربوية.",
                en: "Certified Quran and Tajweed teacher, specialized in teaching children and beginners using the latest interactive and educational methods."
            },
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: "fatima-mahmoud",
            name: { ar: "أ/ فاطمة محمود", en: "Ms. Fatima Mahmoud" },
            specialization: { ar: "تأسيس اللغة العربية ونور البيان", en: "Arabic Foundation & Nour Al-Bayan" },
            experience: { ar: "6 سنوات", en: "6 Years" },
            bio: {
                ar: "خبيرة في تأسيس الأطفال في القراءة والكتابة والنحو العربي، وتأهيل الطلاب للمراحل التعليمية المختلفة.",
                en: "Expert in founding children in Arabic reading, writing, and grammar, preparing students for various educational stages."
            },
            image: "https://images.unsplash.com/photo-1580894732444-8fecef2271ff?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: "heba-ali",
            name: { ar: "أ/ هبة علي", en: "Ms. Heba Ali" },
            specialization: { ar: "اللغة الإنجليزية وتأسيس الفونكس", en: "English Language & Phonics" },
            experience: { ar: "5 سنوات", en: "5 Years" },
            bio: {
                ar: "معلمة لغة إنجليزية متميزة، تركز على مهارات التحدث والنطق الصحيح وتأسيس الفونكس للمبتدئين.",
                en: "Distinguished English teacher, focusing on speaking skills, correct pronunciation, and phonics foundation for beginners."
            },
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: "rania-mohamed",
            name: { ar: "أ/ رانيا محمد", en: "Ms. Rania Mohamed" },
            specialization: { ar: "شرح المناهج والمواد الدراسية", en: "School Subjects & Curricula" },
            experience: { ar: "8 سنوات", en: "8 Years" },
            bio: {
                ar: "معلمة قديرة متخصصة في تبسيط المواد الدراسية الأساسية (العلوم، الرياضيات، والدراسات) للمرحلتين الابتدائية والإعدادية.",
                en: "Competent teacher specializing in simplifying core school subjects (Science, Math, and Social Studies) for primary and preparatory stages."
            },
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
        }
    ],
    courses: [
        {
            id: "quran-memorization",
            category: "quran",
            title: { ar: "حفظ وتلاوة القرآن الكريم", en: "Holy Quran Memorization & Recitation" },
            description: {
                ar: "دورة متكاملة لحفظ وتصحيح تلاوة القرآن الكريم مع التجويد العملي للأطفال والبالغين.",
                en: "An integrated course for memorizing and correcting the recitation of the Holy Quran with practical Tajweed rules for children and adults."
            },
            fullDescription: {
                ar: "تهدف هذه الدورة إلى مساعدة الطلاب على حفظ كتاب الله تبارك وتعالى بطريقة صحيحة مع مراعاة أحكام التجويد مخارج الحروف. نستخدم مناهج تحفيزية ممتازة وحصصاً فردية تفاعلية تضمن تركيز الطالب ومتابعته بشكل مستمر.",
                en: "This course aims to help students memorize the Holy Book of Allah correctly, adhering to Tajweed rules and proper letter articulation. We use excellent motivational methods and interactive one-on-one sessions that guarantee the student's continuous focus and follow-up."
            },
            outcomes: {
                ar: [
                    "حفظ أجزاء من القرآن الكريم بطريقة متقنة.",
                    "إتقان مخارج الحروف العربية والصفات.",
                    "تطبيق أحكام التجويد الأساسية أثناء التلاوة.",
                    "تحسين الصوت وتلاوة القرآن بطمأنينة."
                ],
                en: [
                    "Memorize parts of the Holy Quran with high proficiency.",
                    "Master Arabic letter exit points (Makharij) and characteristics.",
                    "Apply basic Tajweed rules during recitation.",
                    "Improve voice and recite the Quran with tranquility."
                ]
            },
            curriculum: {
                ar: [
                    "المرحلة الأولى: تصحيح التلاوة وتلقين السور القصيرة.",
                    "المرحلة الثانية: دراسة مخارج الحروف وأحكام النون الساكنة والتنوين.",
                    "المرحلة الثالثة: البدء في الحفظ المنهجي وتطبيق أحكام المدود.",
                    "المرحلة الرابعة: المراجعة الدورية وتثبيت المحفوظ."
                ],
                en: [
                    "Phase 1: Recitation correction and memorization of short Surahs.",
                    "Phase 2: Studying letter articulation and basic Tajweed rules.",
                    "Phase 3: Beginning systematic memorization and applying extension (Madd) rules.",
                    "Phase 4: Periodic review and consolidation of memorized parts."
                ]
            },
            duration: { ar: "3 أشهر (قابل للتجديد)", en: "3 Months (Renewable)" },
            level: { ar: "جميع المستويات", en: "All Levels" },
            instructorId: "sarah-ahmed",
            featured: true
        },
        {
            id: "tajweed-rules",
            category: "quran",
            title: { ar: "شرح أحكام التجويد المبسطة", en: "Simplified Tajweed Rules Course" },
            description: {
                ar: "دراسة نظرية وتطبيقية شاملة لأحكام التجويد برواية حفص عن عاصم لتلاوة صحيحة وخالية من اللحن.",
                en: "A comprehensive theoretical and practical study of Tajweed rules (Hafs from Asim) for a correct and error-free recitation."
            },
            fullDescription: {
                ar: "دورة مخصصة لمن يرغب في إتقان الجانب النظري والتطبيقي لعلم التجويد. نركز فيها على القواعد الأساسية التي تصون اللسان عن الخطأ في كتاب الله تعالى، مع تطبيق عملي مكثف على آيات الذكر الحكيم.",
                en: "A course dedicated to those who wish to master the theoretical and practical aspects of Tajweed. We focus on basic rules that prevent errors while reciting the Quran, with intensive practical training on verses."
            },
            outcomes: {
                ar: [
                    "معرفة أحكام التجويد النظرية بشكل مفصل.",
                    "القدرة على استخراج الأحكام وتطبيقها ذاتياً.",
                    "تجنب اللحن الجلي والخفي في التلاوة.",
                    "إجازة في التلاوة بعد اجتياز الاختبار النهائي."
                ],
                en: [
                    "Understand theoretical Tajweed rules in detail.",
                    "Ability to extract and apply rules independently.",
                    "Avoid obvious and hidden mistakes during recitation.",
                    "Recitation certificate upon passing the final assessment."
                ]
            },
            curriculum: {
                ar: [
                    "الدرس الأول: مقدمة في علم التجويد والاستعاذة والبسملة.",
                    "الدرس الثاني: أحكام النون الساكنة والتنوين والميم الساكنة.",
                    "الدرس الثالث: أحكام المدود وأنواعها بالتفصيل.",
                    "الدرس الرابع: مخارج الحروف وصفاتها والوقف والابتداء."
                ],
                en: [
                    "Lesson 1: Introduction to Tajweed, Seeking Refuge & Basmalah.",
                    "Lesson 2: Rules of Noon Sakinah, Tanween, and Meem Sakinah.",
                    "Lesson 3: Rules of Madd (Extensions) and their types in detail.",
                    "Lesson 4: Articulation points, characteristics, and stopping & starting rules."
                ]
            },
            duration: { ar: "شهران", en: "2 Months" },
            level: { ar: "متوسط", en: "Intermediate" },
            instructorId: "sarah-ahmed",
            featured: false
        },
        {
            id: "arabic-foundation",
            category: "arabic",
            title: { ar: "تأسيس اللغة العربية للأطفال", en: "Arabic Foundation for Kids" },
            description: {
                ar: "تعليم الحروف العربية، النطق الصحيح، والتهجي باستخدام منهج نور البيان الشهير.",
                en: "Teaching Arabic letters, correct pronunciation, and spelling using the famous Nour Al-Bayan curriculum."
            },
            fullDescription: {
                ar: "تعد هذه الدورة حجر الأساس لتمكين الطفل من القراءة والكتابة باللغة العربية بطلاقة وسهولة. نعتمد على منهجية نور البيان التفاعلية التي تتدرج مع الطفل من معرفة الحروف الفردية إلى قراءة الجمل الكاملة والقرآن الكريم.",
                en: "This course is the foundation for enabling children to read and write fluent Arabic. We rely on the interactive Nour Al-Bayan methodology which progresses with the child from individual letters to reading full sentences."
            },
            outcomes: {
                ar: [
                    "التعرف على الحروف العربية بأشكالها وحركاتها المختلفة.",
                    "إتقان تهجي الكلمات الثلاثية والرباعية.",
                    "بدء قراءة جمل قصيرة وقصص للأطفال بشكل مستقل.",
                    "تحسين خط اليد والتهجي الصحيح للإملاء."
                ],
                en: [
                    "Recognize Arabic letters in their various shapes and diacritics.",
                    "Master spelling of 3-letter and 4-letter words.",
                    "Begin reading short sentences and children stories independently.",
                    "Improve handwriting and correct spelling for dictation."
                ]
            },
            curriculum: {
                ar: [
                    "الأسبوع 1-3: الحروف الهجائية بالترتيب والنطق السليم.",
                    "الأسبوع 4-6: الحركات القصيرة (الفتحة، الضمة، الكسرة).",
                    "الأسبوع 7-9: المدود الثلاثة (الألف، الواو، الياء).",
                    "الأسبوع 10-12: السكون، التنوين، والشدة وقراءة الكلمات الكاملة."
                ],
                en: [
                    "Weeks 1-3: Alphabet letters in order and proper pronunciation.",
                    "Weeks 4-6: Short vowels (Fatha, Damma, Kasra).",
                    "Weeks 7-9: The three long vowels (Alif, Waw, Yaa).",
                    "Weeks 10-12: Sukoon, Tanween, Shaddah, and reading full words."
                ]
            },
            duration: { ar: "3 أشهر", en: "3 Months" },
            level: { ar: "مبتدئ", en: "Beginner" },
            instructorId: "fatima-mahmoud",
            featured: true
        },
        {
            id: "arabic-grammar",
            category: "arabic",
            title: { ar: "قواعد النحو العربي المبسطة", en: "Simplified Arabic Grammar (Nahw)" },
            description: {
                ar: "شرح مبسط لقواعد النحو والإعراب للطلاب لمساعدتهم على التفوق الدراسي وصحة النطق والكتابة.",
                en: "Simplified explanation of Arabic grammar (Nahw) and I'rab to help students excel academically and write/speak correctly."
            },
            fullDescription: {
                ar: "دورة ممتازة مصممة خصيصاً للطلاب وأولياء الأمور لتسهيل مادة النحو العربي. نتناول القواعد الأساسية من البداية وبشكل تدرجي مبسط مع تدريبات إعرابية مكثفة تضمن الفهم الكامل وتزيل صعوبة المادة.",
                en: "An excellent course designed for students and parents to simplify Arabic grammar. We cover basic rules step-by-step from scratch, with intensive analysis (I'rab) exercises that guarantee full comprehension."
            },
            outcomes: {
                ar: [
                    "التمييز الدقيق بين الاسم والفعل والحرف.",
                    "إتقان إعراب الجملة الاسمية والفعليّة.",
                    "فهم علامات الإعراب الأصلية والفرعية.",
                    "القدرة على ضبط أواخر الكلمات بشكل صحيح."
                ],
                en: [
                    "Distinguish between nouns, verbs, and particles.",
                    "Master the grammatical analysis of nominal and verbal sentences.",
                    "Understand original and branch grammatical signs.",
                    "Ability to apply correct grammatical diacritics to word endings."
                ]
            },
            curriculum: {
                ar: [
                    "المرحلة 1: أقسام الكلمة، الجملة الاسمية وركناها (المبتدأ والخبر).",
                    "المرحلة 2: الجملة الفعلية (الفعل، الفاعل، المفعول به).",
                    "المرحلة 3: النواسخ (كان وأخواتها، إن وأخواتها).",
                    "المرحلة 4: المجرورات والمنصوبات وتطبيقات إعرابية شاملة."
                ],
                en: [
                    "Phase 1: Word types, nominal sentence and its elements (Subject & Predicate).",
                    "Phase 2: Verbal sentence (Verb, Subject, Object).",
                    "Phase 3: Cancellers (Kana & its sisters, Inna & its sisters).",
                    "Phase 4: Genitive, Accusative cases, and comprehensive I'rab drills."
                ]
            },
            duration: { ar: "شهران", en: "2 Months" },
            level: { ar: "متوسط", en: "Intermediate" },
            instructorId: "fatima-mahmoud",
            featured: false
        },
        {
            id: "english-foundation",
            category: "english",
            title: { ar: "تأسيس الإنجليزية والفونكس للمبتدئين", en: "English & Phonics Foundation" },
            description: {
                ar: "تأسيس قوي في الحروف الإنجليزية، القراءة والكتابة وتعديل النطق بأسلوب الفونكس التفاعلي.",
                en: "Strong foundation in English letters, reading, writing, and pronunciation via interactive phonics methods."
            },
            fullDescription: {
                ar: "نساعد الطالب على التحدث والقراءة باللغة الإنجليزية بثقة تامة عبر منهج الفونكس الحديث. نركز على أصوات الحروف وكيفية دمج الأصوات لقراءة الكلمات بسلاسة والتعبير بطلاقة خالية من الخوف.",
                en: "We help students speak and read English confidently through modern phonics. We focus on letter sounds and how to blend sounds to read words smoothly and express themselves fluently."
            },
            outcomes: {
                ar: [
                    "نطق جميع الأصوات الإنجليزية بطريقة صحيحة (Phonics).",
                    "دمج الأصوات وقراءة الكلمات البسيطة ذاتياً.",
                    "بناء حصيلة لغوية ممتازة من الكلمات الشائعة.",
                    "كتابة الحروف والكلمات بخط منظم وقواعد صحيحة."
                ],
                en: [
                    "Pronounce all English letter sounds correctly (Phonics).",
                    "Blend sounds and read basic words independently.",
                    "Build an excellent vocabulary of common English words.",
                    "Write letters and words with neat handwriting and correct grammar."
                ]
            },
            curriculum: {
                ar: [
                    "المستوى 1: أصوات الحروف الفردية (Short Vowels).",
                    "المستوى 2: دمج الأصوات الثنائية والثلاثية (CVC Words).",
                    "المستوى 3: الأصوات الطويلة والمتحركة (Long Vowels & Digraphs).",
                    "المستوى 4: جمل بسيطة ومحادثات تعبيرية يومية."
                ],
                en: [
                    "Level 1: Individual letter sounds (Short Vowels).",
                    "Level 2: Blending two- and three-letter sounds (CVC Words).",
                    "Level 3: Long vowels and vowel combinations (Long Vowels & Digraphs).",
                    "Level 4: Simple sentences and daily conversational English."
                ]
            },
            duration: { ar: "3 أشهر", en: "3 Months" },
            level: { ar: "مبتدئ", en: "Beginner" },
            instructorId: "heba-ali",
            featured: true
        },
        {
            id: "english-conversation",
            category: "english",
            title: { ar: "محادثة باللغة الإنجليزية للطلاب", en: "English Conversation for Students" },
            description: {
                ar: "دورة تفاعلية لتطوير مهارات التحدث والاستماع، وبناء الثقة بالنفس للتواصل باللغة الإنجليزية.",
                en: "An interactive course to develop speaking and listening skills, building self-confidence to communicate in English."
            },
            fullDescription: {
                ar: "نهيئ الطالب لمواقف الحياة اليومية عبر فصول افتراضية تفاعلية تعتمد على المحاكاة والألعاب التعليمية والمحادثات المباشرة باللغة الإنجليزية لتجاوز الخجل تماماً وإتقان التعبير التلقائي.",
                en: "We prepare students for daily life situations through interactive virtual classes based on simulations, educational games, and direct conversations in English to completely overcome shyness and master spontaneous expression."
            },
            outcomes: {
                ar: [
                    "التحدث بطلاقة في مواضيع الحياة اليومية المختلفة.",
                    "تحسين مهارة الاستماع وفهم اللهجات الشائعة.",
                    "التخلص من الخوف والتردد عند الحديث بالإنجليزية.",
                    "استخدام تعبيرات ومصطلحات لغوية متقدمة."
                ],
                en: [
                    "Speak fluently on various daily life topics.",
                    "Improve listening skills and understand common accents.",
                    "Eliminate fear and hesitation when speaking English.",
                    "Use advanced language expressions and idioms."
                ]
            },
            curriculum: {
                ar: [
                    "المحور الأول: التعريف بالنفس والعائلة والحديث عن الاهتمامات.",
                    "المحور الثاني: إدارة الحوارات في المدرسة والمنزل والأماكن العامة.",
                    "المحور الثالث: مهارات العرض والإلقاء ووصف الصور والأحداث.",
                    "المحور الرابع: مناقشة مواضيع اجتماعية والتعبير عن الرأي بحرية."
                ],
                en: [
                    "Unit 1: Self-introduction, family, and talking about interests.",
                    "Unit 2: Managing dialogues at school, home, and public places.",
                    "Unit 3: Presentation skills, describing images, and events.",
                    "Unit 4: Discussing social topics and expressing opinions freely."
                ]
            },
            duration: { ar: "شهران", en: "2 Months" },
            level: { ar: "متوسط إلى متقدم", en: "Intermediate to Advanced" },
            instructorId: "heba-ali",
            featured: false
        },
        {
            id: "primary-school-subjects",
            category: "subjects",
            title: { ar: "شرح مناهج المرحلة الابتدائية", en: "Primary Stage Subjects Program" },
            description: {
                ar: "متابعة دراسية شاملة وتدريبات مستمرة لجميع المواد الأساسية لصفوف المرحلة الابتدائية.",
                en: "Comprehensive academic follow-up and continuous drills for all core subjects of primary school stages."
            },
            fullDescription: {
                ar: "دورة مصممة لمساندة الطلاب في المناهج المدرسية (الرياضيات، العلوم، اللغة العربية، والإنجليزية والتربية الدينية) خطوة بخطوة مع توفير مراجعات دورية واختبارات قياس مستوى مستمرة تضمن أعلى الدرجات وتزيل عبء المذاكرة عن كاهل الأسرة.",
                en: "A program designed to support students in school curricula (Math, Science, Arabic, English, and Religious Education) step-by-step, providing periodic reviews and progress tests that guarantee top marks."
            },
            outcomes: {
                ar: [
                    "الفهم العميق لجميع الوحدات الدراسية المقررة.",
                    "حل الواجبات والتمارين بكفاءة وسرعة.",
                    "الاستعداد الكامل لاختبارات الشهر ونهاية العام.",
                    "تأسيس ذهني سليم يسهل استيعاب السنوات المقبلة."
                ],
                en: [
                    "Deep understanding of all school units.",
                    "Solving homework and exercises efficiently and quickly.",
                    "Full readiness for monthly and end-of-year exams.",
                    "Sound mental foundation that simplifies upcoming school years."
                ]
            },
            curriculum: {
                ar: [
                    "الربع الأول: شرح الوحدات الأولى وحل تدريبات الكتاب المدرسي.",
                    "الربع الثاني: مراجعات نصف العام وحل اختبارات سابقة.",
                    "الربع الثالث: إتمام باقي المناهج وتكثيف التطبيقات العملية.",
                    "الربع الرابع: المراجعات النهائية الشاملة ونماذج امتحانات تفاعلية."
                ],
                en: [
                    "Q1: Explanation of initial units and solving textbook exercises.",
                    "Q2: Mid-term reviews and solving previous exams.",
                    "Q3: Completing the remaining curriculum and intensifying practical drills.",
                    "Q4: Comprehensive final reviews and interactive mock exams."
                ]
            },
            duration: { ar: "فصل دراسي كامل", en: "Full Academic Semester" },
            level: { ar: "الصف 1 - 6 ابتدائي", en: "Grades 1 - 6 Primary" },
            instructorId: "rania-mohamed",
            featured: true
        },
        {
            id: "preparatory-school-subjects",
            category: "subjects",
            title: { ar: "شرح مناهج المرحلة الإعدادية", en: "Preparatory Stage Subjects Program" },
            description: {
                ar: "شرح مبسط ومراجعات مكثفة لمواد المرحلة الإعدادية مع حل نماذج الامتحانات الرسمية.",
                en: "Simplified explanation and intensive reviews of preparatory stage subjects with official exam solutions."
            },
            fullDescription: {
                ar: "نقدم دعماً أكاديمياً متميزاً لطلاب الصفوف الأول والثاني والثالث الإعدادي، مع تركيز خاص على شرح المواد العلمية واللغوية المعقدة وتهيئة الطلاب للامتحانات العامة بأساليب متطورة تنمي التفكير والتحليل.",
                en: "We provide outstanding academic support for 1st, 2nd, and 3rd preparatory stage students, focusing on explaining scientific and language subjects, preparing students for exams using analytical techniques."
            },
            outcomes: {
                ar: [
                    "استيعاب القوانين الرياضية والنظريات العلمية تماماً.",
                    "إتقان أساليب كتابة التعبير وتحليل النصوص الأدبية.",
                    "القدرة على التعامل مع الأوراق الامتحانية بذكاء وثقة.",
                    "الحصول على نتائج متميزة تؤهل للمرحلة الثانوية."
                ],
                en: [
                    "Fully comprehend mathematical formulas and scientific theories.",
                    "Master essay writing and analysis of literary texts.",
                    "Ability to tackle exam papers smartly and confidently.",
                    "Obtaining excellent grades that qualify for secondary education."
                ]
            },
            curriculum: {
                ar: [
                    "الربع الأول: شرح تفصيلي للدروس مع تطبيقات عملية.",
                    "الربع الثاني: مراجعات نصف العام وحل أسئلة الإدارات التعليمية.",
                    "الربع الثالث: شرح مناهج الترم الثاني ومتابعة الواجبات.",
                    "الربع الرابع: معسكرات المراجعة النهائية المكثفة وحل بنك الأسئلة."
                ],
                en: [
                    "Q1: Detailed explanation of lessons with practical applications.",
                    "Q2: Mid-term reviews and solving education directorate exams.",
                    "Q3: Explaining second-term curriculum and homework follow-up.",
                    "Q4: Intensive final review camps and solving question banks."
                ]
            },
            duration: { ar: "فصل دراسي كامل", en: "Full Academic Semester" },
            level: { ar: "الصف 1 - 3 إعدادي", en: "Grades 1 - 3 Preparatory" },
            instructorId: "rania-mohamed",
            featured: false
        }
    ]
};
