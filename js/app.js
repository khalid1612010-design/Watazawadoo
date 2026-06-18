/**
 * Shared logic for Watazawadoo Academy Website.
 * Handles language/theme toggling, sticky navbar, mobile drawer menu,
 * and page-specific dynamic rendering (Home, Courses, Course Details, Instructors, Booking).
 */

document.addEventListener('DOMContentLoaded', () => {
    // ---- DOM Elements ----
    const htmlEl = document.documentElement;
    const themeBtn = document.getElementById('theme-btn');
    const langBtn = document.getElementById('lang-btn');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.getElementById('navbar');
    
    // ---- Theme Toggle ----
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        htmlEl.setAttribute('data-theme', 'dark');
    } else {
        htmlEl.setAttribute('data-theme', 'light');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // ---- Language Toggle ----
    const savedLang = localStorage.getItem('lang') || 'ar'; // Default to Arabic
    setLanguage(savedLang);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const currentLang = htmlEl.getAttribute('lang');
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            setLanguage(newLang);
            // Re-render components that have language-dependent display
            initPageSpecifics();
        });
    }

    function setLanguage(lang) {
        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        localStorage.setItem('lang', lang);
    }

    // ---- Mobile Drawer Menu ----
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // ---- Sticky Navbar ----
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    // ---- Set Copyright Year ----
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ---- Page Specific Implementations ----
    initPageSpecifics();

    function initPageSpecifics() {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf('/') + 1);

        if (page === '' || page === 'index.html') {
            initHomePage();
        } else if (page === 'courses.html') {
            initCoursesPage();
        } else if (page === 'course-details.html') {
            initCourseDetailsPage();
        } else if (page === 'instructors.html') {
            initInstructorsPage();
        } else if (page === 'booking.html') {
            initBookingPage();
        }

        // Initialize accordion triggers if any exist
        initFAQs();
        // Setup simple Scroll Reveal Observer
        initScrollReveal();
    }

    // ----------------------------------------------------
    // HOME PAGE
    // ----------------------------------------------------
    function initHomePage() {
        const featuredGrid = document.getElementById('featured-courses-grid');
        if (!featuredGrid) return;
        
        // Find featured courses from data
        const featuredCourses = ACADEMY_DATA.courses.filter(c => c.featured);
        
        featuredGrid.innerHTML = '';
        featuredCourses.forEach(course => {
            const currentLang = htmlEl.getAttribute('lang') || 'ar';
            const title = course.title[currentLang];
            const desc = course.description[currentLang];
            const duration = course.duration[currentLang];
            const level = course.level[currentLang];
            const instructor = ACADEMY_DATA.instructors.find(i => i.id === course.instructorId);
            const instName = instructor ? instructor.name[currentLang] : '';
            
            const card = document.createElement('div');
            card.className = 'course-card fade-in';
            card.innerHTML = `
                <div class="course-image-placeholder">
                    <span class="course-badge">${currentLang === 'ar' ? 'مميز' : 'Featured'}</span>
                    <span style="font-size: 3rem;">📚</span>
                </div>
                <div class="course-body">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                    <div class="course-meta" style="margin-bottom: 1.5rem;">
                        <div class="course-meta-item">⏱ ${duration}</div>
                        <div class="course-meta-item">📊 ${level}</div>
                    </div>
                    <div class="course-actions">
                        <a href="booking.html?course=${course.id}" class="btn btn-primary">
                            <span class="ar">سجل الآن</span>
                            <span class="en">Enroll Now</span>
                        </a>
                        <a href="course-details.html?id=${course.id}" class="btn btn-secondary">
                            <span class="ar">تفاصيل الدورة</span>
                            <span class="en">View Details</span>
                        </a>
                    </div>
                </div>
            `;
            featuredGrid.appendChild(card);
        });
    }

    // ----------------------------------------------------
    // COURSES PAGE
    // ----------------------------------------------------
    function initCoursesPage() {
        const coursesGrid = document.getElementById('all-courses-grid');
        const searchInput = document.getElementById('course-search');
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        if (!coursesGrid) return;

        let activeCategory = 'all';
        let searchQuery = '';

        const renderCourses = () => {
            const currentLang = htmlEl.getAttribute('lang') || 'ar';
            coursesGrid.innerHTML = '';

            const filtered = ACADEMY_DATA.courses.filter(course => {
                const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
                const matchesSearch = course.title[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                                      course.description[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            });

            if (filtered.length === 0) {
                coursesGrid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0;">
                        <span style="font-size: 3rem;">🔍</span>
                        <h3 style="margin-top: 1rem;">
                            <span class="ar">لم نجد أي دورات مطابقة</span>
                            <span class="en">No courses found matching your criteria</span>
                        </h3>
                    </div>
                `;
                return;
            }

            filtered.forEach(course => {
                const title = course.title[currentLang];
                const desc = course.description[currentLang];
                const duration = course.duration[currentLang];
                const level = course.level[currentLang];
                const instructor = ACADEMY_DATA.instructors.find(i => i.id === course.instructorId);
                const instName = instructor ? instructor.name[currentLang] : '';
                
                const card = document.createElement('div');
                card.className = 'course-card fade-in visible';
                card.innerHTML = `
                    <div class="course-image-placeholder">
                        ${course.featured ? `<span class="course-badge">${currentLang === 'ar' ? 'مميز' : 'Featured'}</span>` : ''}
                        <span style="font-size: 3rem;">📚</span>
                    </div>
                    <div class="course-body">
                        <h3>${title}</h3>
                        <p>${desc}</p>
                        <div class="course-meta" style="margin-bottom: 1.5rem;">
                            <div class="course-meta-item">⏱ ${duration}</div>
                            <div class="course-meta-item">📊 ${level}</div>
                        </div>
                        <div class="course-actions">
                            <a href="booking.html?course=${course.id}" class="btn btn-primary">
                                <span class="ar">سجل الآن</span>
                                <span class="en">Enroll Now</span>
                            </a>
                            <a href="course-details.html?id=${course.id}" class="btn btn-secondary">
                                <span class="ar">تفاصيل الدورة</span>
                                <span class="en">View Details</span>
                            </a>
                        </div>
                    </div>
                `;
                coursesGrid.appendChild(card);
            });
        };

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                renderCourses();
            });
        }

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeCategory = btn.getAttribute('data-category');
                renderCourses();
            });
        });

        // Initial render
        renderCourses();
    }

    // ----------------------------------------------------
    // COURSE DETAILS PAGE
    // ----------------------------------------------------
    function initCourseDetailsPage() {
        const detailsContainer = document.getElementById('course-details-container');
        if (!detailsContainer) return;

        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('id');
        const course = ACADEMY_DATA.courses.find(c => c.id === courseId);

        if (!course) {
            detailsContainer.innerHTML = `
                <div style="text-align: center; padding: 6rem 0;">
                    <span style="font-size: 4rem;">⚠️</span>
                    <h2 style="margin-top: 1rem;">
                        <span class="ar">الدورة غير موجودة</span>
                        <span class="en">Course Not Found</span>
                    </h2>
                    <p>
                        <span class="ar">يرجى التحقق من الرابط أو العودة لصفحة الدورات.</span>
                        <span class="en">Please check the link or return to the courses catalogue.</span>
                    </p>
                    <a href="courses.html" class="btn btn-primary" style="margin-top:1.5rem;">
                        <span class="ar">تصفح الدورات</span>
                        <span class="en">Browse Courses</span>
                    </a>
                </div>
            `;
            return;
        }

        const currentLang = htmlEl.getAttribute('lang') || 'ar';
        const title = course.title[currentLang];
        const fullDesc = course.fullDescription[currentLang];
        const duration = course.duration[currentLang];
        const level = course.level[currentLang];
        const instructor = ACADEMY_DATA.instructors.find(i => i.id === course.instructorId);
        const instName = instructor ? instructor.name[currentLang] : '';
        const instBio = instructor ? instructor.bio[currentLang] : '';
        const instSpec = instructor ? instructor.specialization[currentLang] : '';
        const instAvatar = instructor ? instructor.image : '';

        // Outcomes
        const outcomesList = course.outcomes[currentLang].map(item => `<li>${item}</li>`).join('');
        // Curriculum
        const curriculumList = course.curriculum[currentLang].map((item, index) => `
            <li>
                <span class="step-num">${currentLang === 'ar' ? 'الخطوة' : 'Step'} ${index + 1}</span>
                ${item}
            </li>
        `).join('');

        detailsContainer.innerHTML = `
            <div class="details-main">
                <h1>${title}</h1>
                <p style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 2rem;">${fullDesc}</p>
                
                <h2>
                    <span class="ar">ماذا ستتعلم في هذه الدورة؟</span>
                    <span class="en">What Will You Learn?</span>
                </h2>
                <ul class="outcomes-list">
                    ${outcomesList}
                </ul>

                <h2>
                    <span class="ar">الخطة الدراسية (المنهج)</span>
                    <span class="en">Curriculum Outline</span>
                </h2>
                <ul class="curriculum-list">
                    ${curriculumList}
                </ul>            </div>

            <div class="details-sidebar">
                <h3 style="margin-bottom:1.5rem; text-align:center; border-bottom:1px solid var(--border); padding-bottom:1rem;">
                    <span class="ar">تفاصيل الانضمام</span>
                    <span class="en">Enrollment Info</span>
                </h3>
                
                <div class="sidebar-info-item">
                    <strong><span class="ar">مدة الدورة</span><span class="en">Duration</span></strong>
                    <span>${duration}</span>
                </div>
                <div class="sidebar-info-item">
                    <strong><span class="ar">المستوى</span><span class="en">Level</span></strong>
                    <span>${level}</span>
                </div>

                <div class="sidebar-info-item">
                    <strong><span class="ar">طريقة الحضور</span><span class="en">Method</span></strong>
                    <span><span class="ar">أونلاين (تفاعلي)</span><span class="en">Online (Interactive)</span></span>
                </div>

                <div style="margin-top:2rem; display:flex; flex-direction:column; gap:1rem;">
                    <a href="booking.html?course=${course.id}" class="btn btn-primary" style="width:100%;">
                        <span class="ar">سجل الآن في الدورة</span>
                        <span class="en">Enroll in this Course</span>
                    </a>
                    <a href="https://wa.me/201121379481?text=Hello%20Watazawadoo%20Academy,%20I'm%20interested%20in%20${encodeURIComponent(course.title.en)}" 
                       class="btn btn-secondary" style="width:100%; display:flex; gap:0.5rem; justify-content:center; align-items:center;" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18" fill="currentColor">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-23.1-115-65.1-157zM223.9 416.3c-33 0-65.4-8.9-94-25.7l-6.7-4-69.8 18.3L72 336l-4.4-7c-18.5-29.3-28.2-63.5-28.2-98.1 0-101.9 83-184.9 184.9-184.9 49.4 0 95.8 19.2 130.7 54.2 34.9 34.9 54.2 81.3 54.2 130.8 0 102-83 185.3-185.3 185.3zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        <span class="ar">استفسار عبر الواتساب</span>
                        <span class="en">Inquire on WhatsApp</span>
                    </a>
                </div>
            </div>
        `;
    }

    // ----------------------------------------------------
    // INSTRUCTORS PAGE
    // ----------------------------------------------------
    function initInstructorsPage() {
        const grid = document.getElementById('all-instructors-grid');
        if (!grid) return;

        const currentLang = htmlEl.getAttribute('lang') || 'ar';
        grid.innerHTML = '';

        ACADEMY_DATA.instructors.forEach(inst => {
            const name = inst.name[currentLang];
            const spec = inst.specialization[currentLang];
            const bio = inst.bio[currentLang];
            const exp = inst.experience[currentLang];
            
            const card = document.createElement('div');
            card.className = 'instructor-card fade-in visible';
            card.innerHTML = `
                <img src="${inst.image}" alt="${name}" class="instructor-avatar">
                <h3>${name}</h3>
                <div class="instructor-role">${spec}</div>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;"><strong>${currentLang === 'ar' ? 'الخبرة:' : 'Experience:'}</strong> ${exp}</p>
                <p>${bio}</p>
            `;
            grid.appendChild(card);
        });
    }

    // ----------------------------------------------------
    // BOOKING PAGE & FORM
    // ----------------------------------------------------
    function initBookingPage() {
        const bookingForm = document.getElementById('booking-system-form');
        const selectCourseGroup = document.getElementById('course-select-group');
        const courseSelect = document.getElementById('booking-course');
        const tabEnroll = document.getElementById('tab-enroll');
        const tabConsult = document.getElementById('tab-consult');
        
        if (!bookingForm) return;

        const currentLang = htmlEl.getAttribute('lang') || 'ar';
        let bookingType = 'enroll'; // Default booking type

        // Populate course selection dropdown
        courseSelect.innerHTML = `<option value="" disabled selected>${currentLang === 'ar' ? 'اختر الدورة المناسبة...' : 'Select a course...'}</option>`;
        ACADEMY_DATA.courses.forEach(course => {
            const opt = document.createElement('option');
            opt.value = course.title.en; // Send the English name as standard representation
            opt.textContent = course.title[currentLang];
            courseSelect.appendChild(opt);
        });

        // Parse query parameter to pre-select course
        const urlParams = new URLSearchParams(window.location.search);
        const preselectCourseId = urlParams.get('course');
        if (preselectCourseId) {
            const foundCourse = ACADEMY_DATA.courses.find(c => c.id === preselectCourseId);
            if (foundCourse) {
                courseSelect.value = foundCourse.title.en;
            }
        }

        // Handle Booking Tab Toggles
        const setBookingType = (type) => {
            bookingType = type;
            if (type === 'enroll') {
                tabEnroll.classList.add('active');
                tabConsult.classList.remove('active');
                selectCourseGroup.style.display = 'block';
                courseSelect.required = true;
            } else {
                tabConsult.classList.add('active');
                tabEnroll.classList.remove('active');
                selectCourseGroup.style.display = 'none';
                courseSelect.required = false;
                courseSelect.value = '';
            }
        };

        if (tabEnroll && tabConsult) {
            tabEnroll.addEventListener('click', () => setBookingType('enroll'));
            tabConsult.addEventListener('click', () => setBookingType('consult'));
        }

        // Handle Booking Form Submission
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('booking-name').value.trim();
            const phone = document.getElementById('booking-phone').value.trim();
            const age = document.getElementById('booking-age').value.trim();
            const time = document.getElementById('booking-time').value;
            const notes = document.getElementById('booking-notes').value.trim() || 'None';
            
            let courseName = 'N/A (Consultation)';
            if (bookingType === 'enroll') {
                const selectedOpt = courseSelect.options[courseSelect.selectedIndex];
                courseName = selectedOpt ? selectedOpt.text : '';
            }

            // WhatsApp Message Formatting
            const message = `Hello,

I would like to ${bookingType === 'enroll' ? 'enroll' : 'request a consultation'}.

Name: ${name}
Phone: ${phone}
Age: ${age}
Course: ${courseName}
Preferred Time: ${time}
Notes: ${notes}

Please contact me.`;

            // Open WhatsApp with deep linking
            const encodedMsg = encodeURIComponent(message);
            const waLink = `https://wa.me/201121379481?text=${encodedMsg}`;
            
            window.open(waLink, '_blank');
        });
    }

    // ----------------------------------------------------
    // ACCORDION FAQS CONTROLLER
    // ----------------------------------------------------
    function initFAQs() {
        const questions = document.querySelectorAll('.faq-question');
        questions.forEach(q => {
            q.addEventListener('click', () => {
                const item = q.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all other FAQs
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                
                // Toggle current FAQ
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    // ----------------------------------------------------
    // SCROLL REVEAL ANIMATIONS (Intersection Observer)
    // ----------------------------------------------------
    function initScrollReveal() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }
});
