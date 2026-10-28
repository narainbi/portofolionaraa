/**
 * ==========================================================================
 * PORTOFOLIO PERSONAL - PUTRI NASYWA APRILIA
 * Peminatan: Psikologi Industri & Organisasi (IO Psychology)
 * Tema: Modern, Warm, & User-Friendly
 * File: script.js
 * ==========================================================================
 * 
 * CATATAN PENGEMBANGAN:
 * Seluruh data konten utama diatur melalui objek `PORTFOLIO_DATA` di bawah ini.
 * Jika ingin memperbarui data, cukup edit properti pada objek ini.
 */

/* ==========================================================================
   1. OBJEK DATA KONTEN (SINGLE SOURCE OF TRUTH)
   ========================================================================== */
const PORTFOLIO_DATA = {
  profile: {
    name: "Putri Nasywa Aprilia",
    initials: "PNA",
    headline: "IO Psychology",
    taglineLabel: "PORTFOLIO",
    typingRoles: [
      "IO Psychology Graduate",
      "Talent Monitoring Specialist",
      "Learning Support Specialist",
      "HR Enthusiast"
    ],
    bioBrief: "Fresh graduate Jurusan Psikologi dari Binus University dengan fokus Psikologi Industri & Organisasi (IPK 3.50/4.00). Bersemangat dalam menjembatani potensi talenta manusia dengan tujuan strategis organisasi.",
    location: "Bekasi, Jawa Barat, Indonesia",
    phone: "0821-1413-8870",
    whatsappUrl: "https://wa.me/6282114138870",
    email: "nasywaaprilia16@gmail.com",
    emailPrimary: "nasywaaprilia16@gmail.com",
    profileLink: "https://bit.ly/4gvJFAU",
    photoUrl: "assets/putri.jpg",
    photoFallback: "assets/avatar-putri.svg",
    photoAlt: "Foto Profil Putri Nasywa Aprilia"
  },

  about: {
    badges: [
      { text: "BINUS UNIVERSITY", icon: "school" },
      { text: "S1 Psychology • IPK 3.50", icon: "academic" },
      { text: "Fresh Graduate", icon: "user-check" },
      { text: "Fokus: Industrial & Organizational Psychology", icon: "target" }
    ],
    paragraph: "Fresh graduate Jurusan Psikologi dari Binus University dengan peminatan Psikologi Industri dan Organisasi (IPK 3.50/4.00). Selama masa studi, saya aktif mendalami topik seperti Assessment Center, Leadership, Human Performance Technology, Training Development, dan Talent Management, serta mengasah kemampuan tersebut melalui pengalaman kerja di bidang monitoring talent dan learning support. Kini saya mencari kesempatan untuk berkembang dan berkontribusi secara nyata di bidang Psikologi Industri dan Organisasi atau Human Resources.",
    interests: [
      "Assessment Center",
      "Leadership",
      "Human Performance Technology",
      "Training Development",
      "Talent Management"
    ]
  },

  experiences: [
    {
      id: "binus-learning-support",
      role: "Learning Support Psychology",
      company: "Binus University",
      period: "Sept 2025 - Jan 2026",
      isDefaultExpanded: true,
      points: [
        "Terlibat aktif dalam pengembangan dan pelaksanaan proyek-proyek jurusan",
        "Merancang dan menyusun materi serta konten video pembelajaran yang interaktif dan informatif",
        "Melaksanakan observasi langsung di kelas untuk mendukung evaluasi proses belajar-mengajar",
        "Menulis artikel ilmiah maupun populer sesuai kebutuhan jurusan",
        "Membantu kelancaran kegiatan administrasi jurusan secara menyeluruh"
      ]
    },
    {
      id: "akti-toyota",
      role: "Post Graduated Program (PGP) & Tim Penulis Buku",
      company: "Akademi Komunitas Toyota Indonesia (AKTI)",
      period: "Feb 2025 - Juli 2025",
      isDefaultExpanded: false,
      subTracks: [
        {
          title: "PGP (Post Graduated Program)",
          points: [
            "Monitoring performa alumni AKTI",
            "Membuat report hasil feedback dari para pimpinan selama Genba",
            "Prepare PDI dan Activity Report Book",
            "Report hasil Genba Talent Monitoring"
          ]
        },
        {
          title: "Tim Penulis Buku 1 Dekade AKTI",
          points: [
            "Berkoordinasi dengan rekan penulis dan editor untuk menyamakan gaya penulisan dan tone narasi",
            "Memonitor progres penulisan setiap bab, serta mendukung proses finalisasi dan publikasi"
          ]
        }
      ]
    },
    {
      id: "scholar-indo",
      role: "Volunteer Mentor Bahasa Korea",
      company: "Scholar.Indo",
      period: "Juni 2021 - Des 2021",
      isDefaultExpanded: false,
      points: [
        "Mengajar secara online untuk kursus bahasa korea",
        "Memberikan assignment sebagai bentuk tugas untuk mencapai target kenaikan tingkat level bahasa korea",
        "Menjadi mentor untuk mengajar bahasa korea di tingkat 1A"
      ]
    }
  ],

  education: [
    {
      institution: "Binus University",
      degree: "S1 Psychology",
      score: "IPK: 3.50 / 4.00",
      period: "2022 - 2026",
      notes: "Peminatan Psikologi Industri dan Organisasi (IO Psychology)"
    },
    {
      institution: "MAN 1 Bekasi",
      degree: "IPA (Ilmu Pengetahuan Alam)",
      score: "Nilai Akhir: 86,02",
      period: "2019 - 2022",
      notes: "Fokus Ilmu Alam & Aktif dalam Organisasi Siswa (MPK)"
    }
  ],

  skills: {
    softSkills: [
      "Problem Solving",
      "Time Management",
      "Communication Skills",
      "Teamwork and Collaboration",
      "Adaptability",
      "Self-Motivation and Discipline"
    ],
    hardSkills: [
      "Microsoft Word (advanced formatting & editing)",
      "Microsoft Excel",
      "Canva/PowerPoint (layout visual & presentasi)",
      "Google Workspace (Docs, Drive, Sheet)"
    ]
  },

  activities: {
    organizational: [
      {
        organization: "MPK MAN 1 Bekasi",
        division: "Komisi 4 | Kedisiplinan & PHBN",
        period: "2019 - 2020",
        points: [
          "Merumuskan kebijakan untuk pengembangan program dalam bidang komisi 4",
          "Mengkoordinasikan kegiatan dan pengembangan departemen kedisiplinan dan PHBN di bidang kepengurusan",
          "Bertanggung jawab kepada seluruh keputusan musyawarah dan melaksanakan pengamatan proker OSIS dengan sebaik dan semampu mungkin bersama seluruh jajaran pengurus OSIS yang dinaungi"
        ]
      }
    ],
    communityService: [
      {
        year: "2026",
        title: "Community Service Activity",
        description: "Pemetaan Psikologis Anak Binaan LPKA melalui Assessment Observasi dan Interview"
      },
      {
        year: "2025",
        title: "Binus Festival Social Activity",
        description: "Volunteer Pengecatan Alat Bermain TK Aisyiyah Bustanul Athfal Suhada"
      },
      {
        year: "2024",
        title: "SocialEvent",
        description: "Konservasi Bantaran Sungai Cisadane area Bekasi"
      },
      {
        year: "2023",
        title: "Community Service Activity - First Year Program B2026",
        description: "Volunteer One Action, One Hope for our Environment"
      },
      {
        year: "2022",
        title: "Aktivitas Sosial dalam Rangka Pengembangan Karakter Semester Ganjil 2022",
        description: "Volunteer Kampanye tentang Out of Place"
      },
      {
        year: "2022",
        title: "Project Character Building Course Genap 2022/2023",
        description: "Volunteer Kampanye tentang Global Warming di Cahaya Anak Negeri"
      }
    ]
  }
};

/* ==========================================================================
   2. INISIALISASI UTAMA KETIKA DOM SIAP
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderAllSections(PORTFOLIO_DATA);
  initTypewriter(PORTFOLIO_DATA.profile.typingRoles);
  init3DPhotoTilt();
  initTimelineAccordion();
  initSkillsFilter();
  initContactForm();
  initScrollNavSpy();
  initMobileMenu();
  initScrollReveal();
  initBackToTop();
});

/* ==========================================================================
   3. FUNGSI RENDER SEKSI KE HTML
   ========================================================================== */
function renderAllSections(data) {
  renderHero(data.profile);
  renderAbout(data.about, data.profile);
  renderExperience(data.experiences);
  renderEducation(data.education);
  renderSkills(data.skills);
  renderActivities(data.activities);
  renderContact(data.profile);
}

// Render Hero Section
function renderHero(profile) {
  const heroNameEl = document.getElementById("hero-name");
  if (heroNameEl) heroNameEl.textContent = profile.name;
  
  const heroBriefEl = document.getElementById("hero-brief");
  if (heroBriefEl) heroBriefEl.textContent = profile.bioBrief;

  const emailIconBtn = document.getElementById("hero-email-btn");
  if (emailIconBtn) {
    emailIconBtn.href = `mailto:${profile.email}`;
    emailIconBtn.setAttribute("title", `Kirim email ke ${profile.email}`);
  }

  const phoneIconBtn = document.getElementById("hero-phone-btn");
  if (phoneIconBtn) {
    phoneIconBtn.href = profile.whatsappUrl;
    phoneIconBtn.setAttribute("title", `Chat WhatsApp ke ${profile.phone}`);
  }

  const profileIconBtn = document.getElementById("hero-profile-btn");
  if (profileIconBtn) {
    profileIconBtn.href = profile.profileLink;
    profileIconBtn.setAttribute("title", "Kunjungi Profil Profesional");
  }
}

// Render About Section
function renderAbout(about, profile) {
  const photoEl = document.getElementById("about-photo");
  if (photoEl) {
    photoEl.src = profile.photoUrl;
    photoEl.alt = profile.photoAlt;
    photoEl.onerror = () => {
      photoEl.src = profile.photoFallback;
    };
  }

  // Render Badges
  const badgesContainer = document.getElementById("about-badges-container");
  if (badgesContainer) {
    badgesContainer.innerHTML = about.badges.map(badge => `
      <div class="photo-badge-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${escapeHtml(badge.text)}</span>
      </div>
    `).join("");
  }

  // Render Bio Paragraph
  const bioEl = document.getElementById("about-paragraph");
  if (bioEl) {
    bioEl.textContent = about.paragraph;
  }

  // Render Interest Chips
  const interestsContainer = document.getElementById("about-interests-container");
  if (interestsContainer) {
    interestsContainer.innerHTML = about.interests.map(interest => `
      <span class="chip-friendly">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span>${escapeHtml(interest)}</span>
      </span>
    `).join("");
  }
}

// Render Experience Timeline
function renderExperience(experiences) {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  container.innerHTML = experiences.map((exp) => {
    let bodyContent = "";

    if (exp.points && exp.points.length > 0) {
      bodyContent += `
        <ul class="timeline-bullets">
          ${exp.points.map(pt => `<li>${escapeHtml(pt)}</li>`).join("")}
        </ul>
      `;
    }

    if (exp.subTracks && exp.subTracks.length > 0) {
      bodyContent += exp.subTracks.map(sub => `
        <div class="timeline-subtrack">
          <h4 class="timeline-subtrack-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span>${escapeHtml(sub.title)}</span>
          </h4>
          <ul class="timeline-bullets">
            ${sub.points.map(pt => `<li>${escapeHtml(pt)}</li>`).join("")}
          </ul>
        </div>
      `).join("");
    }

    const isExpanded = exp.isDefaultExpanded ? "expanded" : "";

    return `
      <div class="timeline-card ${isExpanded} reveal" data-item-id="${exp.id}" tabindex="0" role="button" aria-expanded="${exp.isDefaultExpanded}" aria-label="Toggle detail ${escapeHtml(exp.role)} di ${escapeHtml(exp.company)}">
        <div class="timeline-header">
          <div class="timeline-title-group">
            <div class="timeline-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div>
              <h3 class="timeline-role">${escapeHtml(exp.role)}</h3>
              <div class="timeline-company">${escapeHtml(exp.company)}</div>
            </div>
          </div>
          <div class="timeline-meta">
            <span class="timeline-period-pill">${escapeHtml(exp.period)}</span>
            <span class="timeline-expand-btn">
              <span>Detail Tugas</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
        </div>
        <div class="timeline-body">
          ${bodyContent}
        </div>
      </div>
    `;
  }).join("");
}

// Render Education Cards
function renderEducation(educationList) {
  const container = document.getElementById("education-cards");
  if (!container) return;

  container.innerHTML = educationList.map(edu => `
    <div class="education-card reveal">
      <div>
        <div class="edu-header">
          <div class="edu-icon-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div>
            <h3 class="edu-institution">${escapeHtml(edu.institution)}</h3>
            <div class="edu-degree">${escapeHtml(edu.degree)}</div>
          </div>
        </div>
        <div class="edu-score-badge">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>${escapeHtml(edu.score)}</span>
        </div>
        <p class="edu-notes">${escapeHtml(edu.notes)}</p>
      </div>
      <div class="edu-footer">
        <span>Periode Studi</span>
        <span>${escapeHtml(edu.period)}</span>
      </div>
    </div>
  `).join("");
}

// Render Skills Section
function renderSkills(skills) {
  const softContainer = document.getElementById("soft-skills-container");
  const hardContainer = document.getElementById("hard-skills-container");

  if (softContainer) {
    softContainer.innerHTML = skills.softSkills.map(skill => `
      <span class="skill-tag" data-category="soft">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${escapeHtml(skill)}</span>
      </span>
    `).join("");
  }

  if (hardContainer) {
    hardContainer.innerHTML = skills.hardSkills.map(skill => `
      <span class="skill-tag" data-category="hard">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span>${escapeHtml(skill)}</span>
      </span>
    `).join("");
  }
}

// Render Activities Section
function renderActivities(activities) {
  const orgContainer = document.getElementById("org-experience-container");
  if (orgContainer) {
    orgContainer.innerHTML = activities.organizational.map(org => `
      <div class="org-card reveal">
        <div class="org-header">
          <div>
            <h3 class="org-name">${escapeHtml(org.organization)}</h3>
            <div class="org-division">${escapeHtml(org.division)}</div>
          </div>
          <span class="org-period">${escapeHtml(org.period)}</span>
        </div>
        <ul class="timeline-bullets" style="margin-top: 1.25rem;">
          ${org.points.map(pt => `<li>${escapeHtml(pt)}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  const communityContainer = document.getElementById("community-experience-container");
  if (communityContainer) {
    communityContainer.innerHTML = activities.communityService.map(item => `
      <div class="community-card reveal">
        <div>
          <span class="community-year">📅 ${escapeHtml(item.year)}</span>
          <h4 class="community-title">${escapeHtml(item.title)}</h4>
          <p class="community-desc">${escapeHtml(item.description)}</p>
        </div>
      </div>
    `).join("");
  }
}

// Render Contact Cards
function renderContact(profile) {
  const emailVal = document.getElementById("contact-email-val");
  if (emailVal) emailVal.textContent = profile.email;

  const emailVal1 = document.getElementById("contact-email-1-val");
  if (emailVal1) emailVal1.textContent = profile.email;

  const emailVal2 = document.getElementById("contact-email-2-val");
  if (emailVal2) emailVal2.textContent = profile.email;

  const phoneVal = document.getElementById("contact-phone-val");
  if (phoneVal) phoneVal.textContent = profile.phone;

  const phoneLink = document.getElementById("contact-phone-link");
  if (phoneLink) phoneLink.href = profile.whatsappUrl;

  const profileLinkEl = document.getElementById("contact-profile-link");
  if (profileLinkEl) profileLinkEl.href = profile.profileLink;

  const locationVal = document.getElementById("contact-location-val");
  if (locationVal) locationVal.textContent = profile.location;
}

/* ==========================================================================
   4. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter(words) {
  const el = document.getElementById("typewriter-text");
  if (!el || !words || words.length === 0) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseAfterTyping = 1800;
  const pauseAfterDeleting = 500;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      el.textContent = currentWord.substring(0, charIndex);
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseAfterTyping;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = pauseAfterDeleting;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   5. 3D TILT EFFECT PADA KARTU FOTO
   ========================================================================== */
function init3DPhotoTilt() {
  const card = document.getElementById("about-photo-card");
  if (!card) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
}

/* ==========================================================================
   6. INTERAKSI TIMELINE ACCORDION
   ========================================================================== */
function initTimelineAccordion() {
  const timelineContainer = document.getElementById("experience-timeline");
  if (!timelineContainer) return;

  timelineContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".timeline-card");
    if (!card) return;

    const isExpanded = card.classList.contains("expanded");
    card.classList.toggle("expanded");
    card.setAttribute("aria-expanded", !isExpanded);
  });

  timelineContainer.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".timeline-card");
      if (card) {
        e.preventDefault();
        const isExpanded = card.classList.contains("expanded");
        card.classList.toggle("expanded");
        card.setAttribute("aria-expanded", !isExpanded);
      }
    }
  });
}

/* ==========================================================================
   7. SKILLS FILTER TABS
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll(".skills-filter-btn");
  const softBox = document.getElementById("soft-skills-box");
  const hardBox = document.getElementById("hard-skills-box");

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      if (filter === "all") {
        if (softBox) softBox.style.display = "block";
        if (hardBox) hardBox.style.display = "block";
      } else if (filter === "soft") {
        if (softBox) softBox.style.display = "block";
        if (hardBox) hardBox.style.display = "none";
      } else if (filter === "hard") {
        if (softBox) softBox.style.display = "none";
        if (hardBox) hardBox.style.display = "block";
      }
    });
  });
}

/* ==========================================================================
   8. FORMULIR KONTAK & SALIN EMAIL
   ========================================================================== */
function initContactForm() {
  window.copyToClipboard = function(text, btnElement) {
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
      showToast(`Email ${text} berhasil disalin!`);
      if (btnElement) {
        const originalText = btnElement.textContent;
        btnElement.textContent = "Tersalin! ✓";
        setTimeout(() => {
          btnElement.textContent = originalText;
        }, 2000);
      }
    }).catch(() => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showToast(`Email ${text} berhasil disalin!`);
    });
  };

  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const categoryInput = document.getElementById("contact-category");
    const messageInput = document.getElementById("contact-message");

    let isValid = true;

    document.querySelectorAll(".form-group").forEach(fg => fg.classList.remove("has-error"));

    if (!nameInput.value.trim()) {
      showFieldError("contact-name-group", "Mohon isi nama lengkap Anda");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showFieldError("contact-email-group", "Mohon masukkan alamat email yang valid");
      isValid = false;
    }

    if (!categoryInput.value) {
      showFieldError("contact-category-group", "Pilih salah satu kategori keperluan");
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showFieldError("contact-message-group", "Pesan minimal berisi 10 karakter");
      isValid = false;
    }

    if (!isValid) return;

    const recipient = PORTFOLIO_DATA.profile.email || PORTFOLIO_DATA.profile.emailPrimary;
    const subject = encodeURIComponent(`[Portofolio PNA] ${categoryInput.value} - ${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `Halo Putri,\n\nNama: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\nKategori: ${categoryInput.value}\n\nPesan:\n${messageInput.value.trim()}\n\n---\nDikirim melalui Formulir Portofolio Putri Nasywa Aprilia`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    showToast("Pesan siap dikirim! Membuka aplikasi email Anda...");

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);

    form.reset();
  });
}

function showFieldError(groupId, message) {
  const group = document.getElementById(groupId);
  if (group) {
    group.classList.add("has-error");
    const errorEl = group.querySelector(".form-error-msg");
    if (errorEl) errorEl.textContent = message;
  }
}

// Toast Notifikasi
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3500);
}

/* ==========================================================================
   9. TEMA WARNA (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("pna-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const activeTheme = savedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", activeTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const target = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", target);
      localStorage.setItem("pna-theme", target);
      showToast(`Mode dialihkan ke ${target === "light" ? "Mode Terang (Clean)" : "Mode Gelap (Slate)"}`);
    });
  }
}

/* ==========================================================================
   10. SCROLL REVEAL & NAVIGATION SPY
   ========================================================================== */
function initScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1
  });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function initScrollNavSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   11. MENU MOBILE (HAMBURGER DRAWER)
   ========================================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (!hamburgerBtn || !mobileNav) return;

  hamburgerBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("open");
    mobileNav.classList.toggle("open");
    hamburgerBtn.setAttribute("aria-expanded", !isOpen);
  });

  mobileNav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================================
   12. TOMBOL KEMBALI KE ATAS (BACK TO TOP)
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================================================
   13. HELPER KEAMANAN STRING (XSS PREVENTION)
   ========================================================================== */
function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
