// Дані про групи
const groups = {
    "КН": ["КН-11", "КН-12", "КН-13", "КН-21", "КН-22", "КН-23", "КН-31", "КН-32", "КН-41", "КН-42"],
    "ІПЗ": ["ІПЗ-11", "ІПЗ-12", "ІПЗ-21", "ІПЗ-22"],
    "ІСТ": ["ІСТ-11", "ІСТ-12", "ІСТ-21"],
    "ПР": ["ПР-31", "ПР-32", "ПР-33", "ПР-34", "ПР-35"]
};

// Дані про предмети з підгрупами для "Автоматично обраних предметів"
const subjectsData = {
    "фізична культура": { displayName: "Фізична культура", credits: null, assessment: null, semester: "1,2,3,4", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "українська мова за професійним спрямуванням": { displayName: "Українська мова за професійним спрямуванням", credits: 3, assessment: "Залік", semester: "1", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "історія україни": { displayName: "Історія України", credits: 3, assessment: "Залік", semester: "2", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "фізика": { displayName: "Фізика", credits: 6, assessment: "Екзамен", semester: "2", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "історія української культури": { displayName: "Історія української культури", credits: 3, assessment: "Залік", semester: "8", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "філософія": { displayName: "Філософія", credits: 3, assessment: "Залік", semester: "3", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "політологія": { displayName: "Політологія", credits: 3, assessment: "Залік", semester: "7", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "економіка": { displayName: "Економіка", credits: 3, assessment: "Залік", semester: "6" },
    "безпека життєдіяльності та цивільний захист": { displayName: "Безпека життєдіяльності та цивільний захист", credits: 3, assessment: "Залік", semester: "4", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "математичний аналіз": { displayName: "Математичний аналіз", credits: 9, assessment: "Екзамен", semester: "1,2", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "алгебра і геометрія": { displayName: "Алгебра і геометрія", credits: 6, assessment: "Екзамен", semester: "1", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "дискретна математика": { displayName: "Дискретна математика", credits: 3, assessment: "Екзамен", semester: "3", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "теорія ймовірностей та математична статистика": { displayName: "Теорія ймовірностей та математична статистика", credits: 3, assessment: "Залік", semester: "2", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "математична логіка та теорія алгоритмів": { displayName: "Математична логіка та теорія алгоритмів", credits: 6, assessment: "Залік", semester: "1", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "диференціальні рівняння": { displayName: "Диференціальні рівняння", credits: 3, assessment: "Залік", semester: "3", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "іноземна мова": { displayName: "Іноземна мова", credits: 9, assessment: "Залік", semester: "1,2", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "структури даних": { displayName: "Структури даних", credits: 3, assessment: "Залік", semester: "3", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "архітектура обчислювальних систем": { displayName: "Архітектура обчислювальних систем", credits: 3, assessment: "Екзамен", semester: "5", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "комп'ютерні мережі": { displayName: "Комп'ютерні мережі", credits: 3, assessment: "Екзамен", semester: "6", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "вступ у спеціальність": { displayName: "Вступ у спеціальність", credits: 3, assessment: "Залік", semester: "1", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "бази даних": { displayName: "Бази даних", credits: 3, assessment: "Залік", semester: "3", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "програмна реалізація чисельних методів": { displayName: "Програмна реалізація чисельних методів", credits: 3, assessment: "Залік", semester: "4", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "операційні системи": { displayName: "Операційні системи", credits: 3, assessment: "Залік", semester: "6", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "системне програмування": { displayName: "Системне програмування", credits: 6, assessment: "Екзамен", semester: "5", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "програмування c++": { displayName: "Програмування С++", credits: 12, assessment: "Екзамен", semester: "1,2", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "програмування c#": { displayName: "Програмування C#", credits: 6, assessment: "Екзамен", semester: "3", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "програмування java": { displayName: "Програмування Java", credits: 6, assessment: "Екзамен", semester: "4", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "паралельні та розподілені обчислення": { displayName: "Паралельні та розподілені обчислення", credits: 3, assessment: "Екзамен", semester: "7", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "платформи корпоративних інформаційних систем": { displayName: "Платформи корпоративних інформаційних систем", credits: 3, assessment: "Залік", semester: "7", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "програмування та підтримка веб-застосувань": { displayName: "Програмування та підтримка веб-застосувань", credits: 3, assessment: "Екзамен", semester: "7", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "теорія програмування": { displayName: "Теорія програмування", credits: 3, assessment: "Екзамен", semester: "8", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "мікропрограмування": { displayName: "Мікропрограмування", credits: 3, assessment: "Залік", semester: "3", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "мікропроцесорні системи": { displayName: "Мікропроцесорні системи", credits: 3, assessment: "Екзамен", semester: "4", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "теорія інформації та кодування": { displayName: "Теорія інформації та кодування", credits: 6, assessment: "Екзамен", semester: "4", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "перетворення форми інформації та цифрова обробка інформації": { displayName: "Перетворення форми інформації та цифрова обробка інформації", credits: 3, assessment: "Залік", semester: "5", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "аналіз даних": { displayName: "Аналіз даних", credits: 3, assessment: "Екзамен", semester: "6", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "безпека інфотехнологій": { displayName: "Безпека інфотехнологій", credits: 3, assessment: "Залік", semester: "4", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "курсова робота": { displayName: "Курсова робота 2", credits: 3, assessment: "Курсова робота", semester: "5", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "кваліфікаційна робота": { displayName: "Кваліфікаційна робота", credits: 3, assessment: "Екзамен", semester: "8", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "обчислювальна практика": { displayName: "Обчислювальна практика", credits: 3, assessment: "Залік", semester: "4", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "виробнича практика": { displayName: "Виробнича практика", credits: 9, assessment: "Залік", semester: "8", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "практикум з програмування": { displayName: "Практикум з програмування", credits: 3, assessment: "Екзамен", semester: "6" },
    "управління it-проектами": { displayName: "Управління IT-проектами", credits: 3, assessment: "Залік", semester: "4", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "іноземна мова професійного спрямування": { displayName: "Іноземна мова професійного спрямування", credits: 6, assessment: "Залік", semester: "5", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "основи проджект менеджменту": { displayName: "Основи проджект менеджменту", credits: 3, assessment: "Залік", semester: "4", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "практикум технічного перекладу": { displayName: "Практикум технічного перекладу", credits: 6, assessment: "Залік", semester: "5", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "алгоритми обробки зображень": { displayName: "Алгоритми обробки зображень", credits: 3, assessment: "Залік", semester: "5", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "основи розробки комп'ютерних ігор": { displayName: "Основи розробки комп'ютерних ігор", credits: 6, assessment: "Залік", semester: "5", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "технології проектування комп'ютерних ігор (unity)": { displayName: "Технології проектування комп'ютерних ігор (Unity)", credits: 6, assessment: "Залік", semester: "6", subgroups: ["2.19 (Лекція)", "2.20", "2.21"] },
    "web-програмування (javascript)": { displayName: "WEB – програмування (JavaScript)", credits: 6, assessment: "Залік", semester: "6", subgroups: ["2.23 (Лекція)", "2.24", "2.25", "2.26"] },
    "алгоритми на графах": { displayName: "Алгоритми на графах", credits: 3, assessment: "Залік", semester: "6", subgroups: ["2.28 (Лекція)", "2.28"] },
    "доповнена реальність, симулятори та людино-машинні інтерфейси": { displayName: "Доповнена реальність, симулятори та людино-машинні інтерфейси", credits: 6, assessment: "Залік", semester: "7", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "веб-програмування (php)": { displayName: "Веб-програмування (PHP)", credits: 6, assessment: "Залік", semester: "7", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "серверне програмування": { displayName: "Серверне програмування", credits: 6, assessment: "Залік", semester: "7", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "розробка web-додатків (typescript)": { displayName: "Розробка WEB-додатків (TypeScript)", credits: 3, assessment: "Залік", semester: "8", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "проектування систем глибинного навчання": { displayName: "Проектування систем глибинного навчання", credits: 6, assessment: "Залік", semester: "8", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "шаблони проектування пз": { displayName: "Шаблони проектування ПЗ", credits: 3, assessment: "Залік", semester: "5", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "програмування мобільних додатків (android)": { displayName: "Програмування мобільних додатків (Android)", credits: 6, assessment: "Залік", semester: "5", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "технології розробки мобільних додатків": { displayName: "Технології розробки мобільних додатків", credits: 6, assessment: "Залік", semester: "6", subgroups: ["2.22(Лекція)", "2.22"] },
    "програмування ios": { displayName: "Програмування iOS", credits: 6, assessment: "Залік", semester: "6" },
    "крос-платформне програмування (python)": { displayName: "Крос-платформне програмування (Python)", credits: 3, assessment: "Залік", semester: "6", subgroups: ["2.29 (Лекція)", "2.30", "2.31", "2.32"] },
    "python для data science": { displayName: "Python для Data Science", credits: 6, assessment: "Залік", semester: "7", subgroups: ["2.29 (Лекція)", "2.30", "2.31", "2.32"] },
    "машинне навчання": { displayName: "Машинне навчання", credits: 6, assessment: "Залік", semester: "7", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "крос-платформні бібліотеки для розробки графічного інтерфейсу (qt/juce c++)": { displayName: "Крос-платформні бібліотеки для розробки графічного інтерфейсу (QT/Juce C++)", credits: 6, assessment: "Залік", semester: "7", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "тестування та забезпечення якості іт проектів": { displayName: "Тестування та забезпечення якості ІТ проектів", credits: 3, assessment: "Залік", semester: "8", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "програмування mac ios": { displayName: "Програмування Mac iOS", credits: 6, assessment: "Залік", semester: "8", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
    "атестація": { displayName: "Атестація", credits: 3, assessment: "Екзамен", semester: "8", subgroups: ["Підгрупа 1", "Підгрупа 2"] },
};

// Стан профілю
window.currentState = {
    faculty: null,
    group: null,
    semester: null,
    selectedSubjects: {}, // { "предмет": ["підгрупа1", "підгрупа2", ...] }
    dateFrom: '',
    dateTo: '',
    teacherSearch: ''
};

// Функція нормалізації назв
const normalizeSubgroup = (subgroup) => {
    if (!subgroup) return '';
    let normalized = subgroup
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase()
        .replace(/\(\л\)/i, '(лекція)')
        .replace(/\(\лаб\)/i, '(лабораторна)');
    const numberMatch = normalized.match(/^\d+\.\d+/);
    if (numberMatch) return numberMatch[0];
    return normalized;
};

// Функція для нормалізації типу заняття
function normalizeType(type) {
    if (!type) return '';
    
    // Видаляємо всі зайві символи та пробіли
    type = type
        .toLowerCase()
        .replace(/[\(\)\[\]\{\}]/g, '')  // видаляємо всі види дужок
        .replace(/\s+/g, '')             // видаляємо всі пробіли
        .replace(/[-_]/g, '')            // видаляємо дефіси та підкреслення
        .trim();
    
    // Розширений список всіх можливих варіантів
    const typeMap = {
        'л': 'Лекція',
        'лек': 'Лекція',
        'лекція': 'Лекція',
        'лаб': 'Лабораторна',
        'лабораторна': 'Лабораторна',
        'прс': 'Семінар',
        'практика': 'Семінар',
        'сем': 'Семінар',
        'семінар': 'Семінар',
        'кср': 'КСР',
        'кек': 'Контрольний екзамен',
        'екз': 'Екзамен',
        'консультація': 'Консультація',
        'екзамен': 'Екзамен',
        'держат': 'Держ. атестація'
    };
    
    // Перевіряємо точні співпадіння
    if (typeMap[type]) {
        return typeMap[type];
    }
    
    // Перевіряємо часткові співпадіння
    for (const [key, value] of Object.entries(typeMap)) {
        if (type.includes(key)) {
            return value;
        }
    }
    
    return type.charAt(0).toUpperCase() + type.slice(1);
}

// Функція завантаження даних з localStorage
function loadState() {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
        try {
            window.currentState = JSON.parse(savedState);
        } catch (error) {
            console.error('[PROFILE] Помилка парсингу збереженого стану:', error);
            localStorage.removeItem('appState');
            showStep('step-faculty');
            return;
        }
        // Якщо є всі дані, показуємо профіль
        if (window.currentState.faculty && window.currentState.group && window.currentState.semester && window.currentState.selectedSubjects) {
            showProfileSummary();
        } else {
            // Якщо даних немає, показуємо вибір факультету
            showStep('step-faculty');
        }
    } else {
        showStep('step-faculty');
    }
}

// Функція збереження даних в localStorage
function saveState() {
    console.log('[PROFILE] Зберігаю стан:', window.currentState);
    localStorage.setItem('appState', JSON.stringify(window.currentState));
}

// Функція очищення стану профілю
function clearProfileState() {
    // Зберігаємо поточну тему перед очищенням
    const currentTheme = localStorage.getItem('theme');
    
    // Оновлюємо стан без очищення всього localStorage
    window.currentState = {
        faculty: null,
        group: null,
        semester: null,
        selectedSubjects: {},
        dateFrom: '',
        dateTo: '',
        teacherSearch: ''
    };
    saveState();
    
    // Відзначаємо, що користувач мав обрані предмети, які були очищені
    localStorage.setItem('hadSelectedSubjects', 'true');
    
    // Видаляємо лише дані профілю, але зберігаємо тему та збережені дані
    const keysToKeep = ['theme', 'schedulesData', 'hadSelectedSubjects', 'savedSchedules', 'savedRatings'];
    Object.keys(localStorage).forEach(key => {
        if (!keysToKeep.includes(key)) {
            localStorage.removeItem(key);
        }
    });
    
    // Відновлюємо збережену тему
    if (currentTheme) {
        localStorage.setItem('theme', currentTheme);
    }
    
    console.log('[PROFILE] Профіль очищено');
    
    // Перезавантажуємо сторінку
    location.reload();
}

// Ініціалізація сторінки
document.addEventListener('DOMContentLoaded', () => {
    console.log('[PROFILE] Ініціалізація сторінки');
    
    if (typeof schedulesData === 'undefined') {
        console.error('[PROFILE] Помилка: schedulesData не завантажено');
        alert('Помилка завантаження даних розкладу. Будь ласка, оновіть сторінку.');
        return;
    }

    // Обробник вибору факультету
    document.querySelectorAll('.faculty-card').forEach(card => {
        card.addEventListener('click', () => {
            // Знімаємо виділення з усіх карток
            document.querySelectorAll('.faculty-card').forEach(c => c.classList.remove('selected'));
            // Додаємо виділення до обраної картки
            card.classList.add('selected');
            
            const selectedFaculty = card.dataset.faculty;
            console.log('[PROFILE] Обрано факультет:', selectedFaculty);
            
            window.currentState.faculty = selectedFaculty;
            window.currentState.group = null;
            window.currentState.semester = null;
            window.currentState.selectedSubjects = {};
            
            console.log('[PROFILE] Поточний стан:', window.currentState);
            
            if (!groups || !groups[selectedFaculty]) {
                console.error('[PROFILE] Помилка: немає груп для факультету', selectedFaculty);
                alert('Помилка: немає доступних груп для цієї спеціальності');
                return;
            }
            
            showGroups(selectedFaculty);
            nextStep('step-faculty', 'step-group');
            saveState();
        });
    });

    // Обробник вибору семестру
    document.querySelectorAll('.semester-card').forEach(card => {
        card.addEventListener('click', () => {
            // Знімаємо виділення з усіх карток
            document.querySelectorAll('.semester-card').forEach(c => c.classList.remove('selected'));
            // Додаємо виділення до обраної картки
            card.classList.add('selected');
            
            const selectedSemester = card.dataset.semester;
            console.log('[PROFILE] Обрано семестр:', selectedSemester);
            
            window.currentState.semester = selectedSemester;
            window.currentState.selectedSubjects = {};
            
            console.log('[PROFILE] Показую предмети для семестру:', selectedSemester);
            showSubjects(selectedSemester, window.currentState.group);
            nextStep('step-semester', 'step-subjects');
            saveState();
        });
    });

    // Ініціалізація мобільного меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    }

    // Оновлюємо навігаційні кнопки для переходу на розклад
    const scheduleLink = document.querySelector('nav a[href="schedule_new.html"]');
    if (scheduleLink) {
        scheduleLink.setAttribute('href', 'javascript:void(0)');
        scheduleLink.addEventListener('click', function(e) {
            e.preventDefault();
            checkProfileBeforeSchedule();
        });
    }

    loadState();
});

// Функція для визначення курсу за групою
function getCourseFromGroup(group) {
    if (!group) return null;
    const match = group.match(/(\d+)/);
    return match ? parseInt(match[0].charAt(0)) : 1;
}

// Функція для отримання унікальних підгруп для предмета з розкладу
function getUniqueSubgroupsForSubject(subjectName) {
    const uniqueSubgroups = new Set();
    console.log('[PROFILE] Шукаю підгрупи для предмета:', subjectName);
    
    if (typeof schedulesData === 'undefined') {
        console.error('[PROFILE] schedulesData не визначено');
        return [];
    }

    const currentGroup = window.currentState.group;
    if (!currentGroup || !schedulesData[currentGroup]) {
        console.error('[PROFILE] Група не вибрана або не знайдена');
        return [];
    }

    const currentFaculty = schedulesData[currentGroup].faculty;
    const currentCourse = getCourseFromGroup(currentGroup);

    // Збираємо розклад з усіх груп того ж факультету і курсу
    let allLessons = [];
    for (const [groupName, data] of Object.entries(schedulesData)) {
        if (data.faculty === currentFaculty && getCourseFromGroup(groupName) === currentCourse) {
            data.schedule.forEach(day => {
                day.lessons.forEach(lesson => {
                    if (lesson.subject) {
                        allLessons.push(lesson);
                    }
                });
            });
        }
    }

    // Перевіряємо всі заняття цього предмета
    allLessons.forEach(lesson => {
        let lessonSubject = lesson.subject;
            // Для збірних груп та потокових лекцій беремо назву з другого рядка
            if (lesson.subject.includes('Збірна група') || lesson.subject.includes('Потік')) {
                const lines = lesson.subject.split('\n');
                if (lines.length > 1) {
                    lessonSubject = lines[1];
                }
            }

            const normalizedLessonSubject = normalizeSubject(extractCoreSubject(lessonSubject));
            const normalizedSearchSubject = normalizeSubject(subjectName);

            if (normalizedLessonSubject.includes(normalizedSearchSubject) || 
                normalizedSearchSubject.includes(normalizedLessonSubject)) {
                
                console.log('[PROFILE] Знайдено співпадіння для предмета:', lesson.subject);

                // Для потокових лекцій
                if (lesson.subject.includes('Потік')) {
                    uniqueSubgroups.add('Лекція');
                }
                // Для збірних груп (універсальний regex)
                else if (lesson.subject.includes('Збірна група')) {
                    const zbMatch = lesson.subject.match(/Збірна група\s+(\S+)/);
                    const typeMatch = lesson.subject.match(/\((Л|Лек|Лекція|Лаб|ПрС|Сем|Семінар|КСР|КЕк|Екз|Консультація|Практика|Держ\.Ат\.)\)$/i);
                    if (zbMatch && typeMatch) {
                        const groupId = zbMatch[1];
                        const type = normalizeType(typeMatch[1]);
                        uniqueSubgroups.add(`${groupId}(${type})`);
                    }
                }
                // Для підгруп
                else if (lesson.subject.match(/^\(підгр\. \d+\)/)) {
                    const subgroupMatch = lesson.subject.match(/^\(підгр\. (\d+)\)/);
                    if (subgroupMatch) {
                        uniqueSubgroups.add(`Підгрупа ${subgroupMatch[1]}`);
                    }
                }
                // Для звичайних занять
                else {
                    const typeMatch = lesson.subject.match(/\((Л|Лек|Лекція|Лаб|ПрС|Сем|Семінар|КСР|КЕк|Екз|Консультація|Практика|Держ\.Ат\.)\)$/i);
                    if (typeMatch) {
                        uniqueSubgroups.add(normalizeType(typeMatch[1]));
                    }
                }
        }
    });

    const result = Array.from(uniqueSubgroups);
    console.log('[PROFILE] Знайдені підгрупи:', result);
    return result;
}

// Функція для нормалізації назви предмета
function normalizeSubject(subject) {
    if (!subject) return '';
    return subject
        .toLowerCase()
        .replace(/[^a-zа-яіїєґ0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

// Функція для витягнення основної назви предмета
function extractCoreSubject(subject) {
    if (!subject) return '';
    return subject
        .replace(/^\(підгр\. \d+\)\s*/, '')
        .replace(/^Збірна група\s+\S+\s+/, '')  // Універсальний: "Збірна група XXX "
        .replace(/^Потік\s+[\wА-Яа-яіїєґІЇЄҐ'`'\-,\s]+?\s+(?=[А-ЯІЇЄҐA-Z])/, '')  // "Потік КН-41, КН-42 "
        .replace(/^[А-ЯІЇЄҐA-Z]{1,4}-\d{1,2}\s+/, '')  // "КН-41 " — префікс групи
        .replace(/\.\.\.[^(]*/, '')  // "... Держ.Ат. Консультації"
        .replace(/\s*\((Л|Лек|Лекція|Лаб|ПрС|Сем|Семінар|КСР|КЕк|Екз|Консультація|Практика|Держ\.Ат\.)\)$/i, '')
        .replace(/\n/g, ' ')
        .trim();
}

// Показати групи для факультету
function showGroups(faculty) {
    console.log('[PROFILE] Показую групи для факультету:', faculty);
    
    const groupsContainer = document.querySelector('.groups-container');
    if (!groupsContainer) {
        console.error('[PROFILE] Не знайдено контейнер для груп');
        return;
    }
    
    groupsContainer.innerHTML = '';
    
    if (!groups[faculty]) {
        console.error('[PROFILE] Немає груп для факультету:', faculty);
        return;
    }
    
    groups[faculty].forEach(group => {
        console.log('[PROFILE] Додаю групу:', group);
        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';
        groupCard.dataset.group = group;
        groupCard.innerHTML = `
            <h3>${group}</h3>
            <p>Курс ${getCourseFromGroup(group)}</p>
        `;
        
        groupCard.addEventListener('click', () => {
            // Знімаємо виділення з усіх карток
            document.querySelectorAll('.group-card').forEach(c => c.classList.remove('selected'));
            // Додаємо виділення до обраної картки
            groupCard.classList.add('selected');
            
            window.currentState.group = group;
            window.currentState.semester = null;
            window.currentState.selectedSubjects = {};
            nextStep('step-group', 'step-semester');
            saveState();
        });
        
        groupsContainer.appendChild(groupCard);
    });
    
    // Оновлюємо прогрес-бар
    updateProgressBar(2);
}

// Функція показу предметів
function showSubjects(semester, group) {
    const container = document.querySelector('.subjects-container');
    if (!container) {
        console.error('[PROFILE] Елемент .subjects-container не знайдено');
        return;
    }
    container.innerHTML = '';

    // Перевірка вхідних даних
    if (!semester || isNaN(parseInt(semester))) {
        console.error('[PROFILE] Недійсний семестр:', semester);
        container.innerHTML = '<p>Будь ласка, оберіть семестр.</p>';
        return;
    }
    if (!group) {
        console.error('[PROFILE] Група не вибрана');
        container.innerHTML = '<p>Будь ласка, оберіть групу.</p>';
        return;
    }

    const course = getCourseFromGroup(group);
    const calculatedSemester = (course - 1) * 2 + parseInt(semester);
    console.log('[PROFILE] Розраховано семестр:', calculatedSemester, 'для курсу:', course, 'і семестру:', semester);

    const autoSelectedSubjects = [];
    const otherSubjects = [];

    // Розділяємо предмети на автоматично обрані та інші
    for (const [subject, info] of Object.entries(subjectsData)) {
        const semesters = String(info.semester).split(',').map(s => s.trim());
        const isInSemester = semesters.some(s => parseInt(s) === calculatedSemester);
        if (isInSemester) {
            autoSelectedSubjects.push({ name: subject, ...info });
        } else {
            otherSubjects.push({ name: subject, ...info });
        }
    }

    console.log('[PROFILE] Автоматично обрані предмети:', autoSelectedSubjects.map(s => s.displayName));
    console.log('[PROFILE] Інші предмети:', otherSubjects.map(s => s.displayName));

    // Функція створення блоку для предмета
    function createSubjectDiv(subjectData, isAutoSelected) {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'subject-item';

        const isChecked = window.currentState.selectedSubjects.hasOwnProperty(subjectData.name);
        let selectedSubgroups = window.currentState.selectedSubjects[subjectData.name] || [];

        const subjectInfo = document.createElement('div');
        subjectInfo.className = 'subject-info';
        subjectInfo.innerHTML = `
            <h4>
                <input type="checkbox" data-subject="${subjectData.name}" ${isChecked ? 'checked' : ''}>
                ${subjectData.displayName}
            </h4>
            <small>
                <i class="fas fa-graduation-cap"></i> ${subjectData.credits || '0'} кредитів
                <i class="fas fa-clipboard-check"></i> ${subjectData.assessment || '-'}
            </small>
        `;
        subjectDiv.appendChild(subjectInfo);

        const availableSubgroups = getUniqueSubgroupsForSubject(subjectData.displayName);
        if (availableSubgroups.length > 0) {
            const subgroupsDiv = document.createElement('div');
            subgroupsDiv.className = 'subgroups';
            subgroupsDiv.style.display = isChecked ? 'block' : 'none';

            availableSubgroups.forEach(subgroup => {
                const label = document.createElement('label');
                    label.innerHTML = `
                        <input type="checkbox" data-subject="${subjectData.name}" data-subgroup="${subgroup}" 
                               ${selectedSubgroups.includes(subgroup) ? 'checked' : ''}>
                        ${subgroup}
                    `;
                    subgroupsDiv.appendChild(label);
                });
                subjectDiv.appendChild(subgroupsDiv);
        }

        const checkbox = subjectDiv.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', (event) => {
            const subject = event.target.dataset.subject;
            const subgroupsDiv = subjectDiv.querySelector('.subgroups');
            const subgroupCheckboxes = subjectDiv.querySelectorAll('.subgroups input[type="checkbox"]');
            
            if (event.target.checked) {
                window.currentState.selectedSubjects[subject] = [];
                if (subgroupsDiv) subgroupsDiv.style.display = 'block';
                
                // Автоматично вибираємо всі підгрупи
                subgroupCheckboxes.forEach(cb => {
                    cb.checked = true;
                    window.currentState.selectedSubjects[subject].push(cb.dataset.subgroup);
                });
            } else {
                if (subgroupsDiv) subgroupsDiv.style.display = 'none';
                // Знімаємо виділення з усіх підгруп
                subgroupCheckboxes.forEach(cb => {
                    cb.checked = false;
                });
                delete window.currentState.selectedSubjects[subject];
            }
            saveState();
        });
        const subgroupCheckboxes = subjectDiv.querySelectorAll('.subgroups input[type="checkbox"]');
        subgroupCheckboxes.forEach(subgroupCheckbox => {
            subgroupCheckbox.addEventListener('change', (event) => {
                const subjectNameDataset = event.target.dataset.subject;
                const subgroup = event.target.dataset.subgroup;
                if (event.target.checked) {
                    if (!window.currentState.selectedSubjects[subjectNameDataset]) {
                        window.currentState.selectedSubjects[subjectNameDataset] = [];
                    }
                    if (!window.currentState.selectedSubjects[subjectNameDataset].includes(subgroup)) {
                        window.currentState.selectedSubjects[subjectNameDataset].push(subgroup);
                    }
                    // Якщо вибрали підгрупу, ставимо галочку і на головному предметі
                    const mainCb = subjectDiv.querySelector('input[type="checkbox"]:not([data-subgroup])');
                    if (mainCb && !mainCb.checked) mainCb.checked = true;
                } else {
                    window.currentState.selectedSubjects[subjectNameDataset] = 
                        window.currentState.selectedSubjects[subjectNameDataset].filter(s => s !== subgroup);
                    if (window.currentState.selectedSubjects[subjectNameDataset].length === 0) {
                        delete window.currentState.selectedSubjects[subjectNameDataset];
                        // Знімаємо галочку з предмета, якщо всі підгрупи вимкнуті
                        const mainCb = subjectDiv.querySelector('input[type="checkbox"]:not([data-subgroup])');
                        if (mainCb) mainCb.checked = false;
                        const subgroupsDiv = subjectDiv.querySelector('.subgroups');
                        if (subgroupsDiv) subgroupsDiv.style.display = 'none';
                    }
                }
                saveState();
            });
        });

        return subjectDiv;
    }

    // Додаємо автоматично обрані предмети
    if (autoSelectedSubjects.length > 0) {
        const autoSelectedDiv = document.createElement('div');
        autoSelectedDiv.className = 'subject-category-group';
        autoSelectedDiv.innerHTML = '<h3>Автоматично обрані предмети:</h3>';
        const subjectsList = document.createElement('div');
        subjectsList.className = 'subjects-list';
        autoSelectedDiv.appendChild(subjectsList);
        autoSelectedSubjects.forEach(subjectData => {
            subjectsList.appendChild(createSubjectDiv(subjectData, true));
        });
        container.appendChild(autoSelectedDiv);
    } else {
        container.innerHTML += '<p>Немає автоматично обраних предметів для цього семестру.</p>';
    }

    // Додаємо інші предмети
    if (otherSubjects.length > 0) {
        const otherSubjectsDiv = document.createElement('div');
        otherSubjectsDiv.className = 'subject-category-group';
        const title = document.createElement('h3');
        title.innerHTML = 'Інші предмети (виберіть за бажанням): <span class="toggle-arrow">▶</span>';
        title.style.cursor = 'pointer';
        otherSubjectsDiv.appendChild(title);
        const subjectsList = document.createElement('div');
        subjectsList.className = 'subjects-list';
        subjectsList.style.display = 'none';
        otherSubjectsDiv.appendChild(subjectsList);
        otherSubjects.forEach(subjectData => {
            subjectsList.appendChild(createSubjectDiv(subjectData, false));
        });
        container.appendChild(otherSubjectsDiv);

        const updateArrow = () => {
            const arrow = title.querySelector('.toggle-arrow');
            arrow.textContent = subjectsList.style.display === 'none' ? '▶' : '▼';
        };

        title.addEventListener('click', () => {
            subjectsList.style.display = subjectsList.style.display === 'none' ? 'block' : 'none';
            updateArrow();
        });
    }

    updateProgressBar(4);
}

// Функція показу підсумку профілю
function showProfileSummary() {
    console.log('[PROFILE] Відображаю профіль, selectedSubjects:', window.currentState.selectedSubjects);
    
    // Приховуємо всі кроки
    document.querySelectorAll('.profile-step').forEach(step => {
        step.classList.remove('active-step');
    });
    
    // Показуємо підсумок профілю
    const profileSummary = document.getElementById('profile-summary');
    if (profileSummary) {
        profileSummary.classList.add('active-step');
        
        const summaryContent = profileSummary.querySelector('.profile-summary-content');
        if (summaryContent) {
            summaryContent.innerHTML = `
                <h3><i class="fas fa-university"></i> Інформація про навчання</h3>
                <p><strong>Факультет:</strong> ${window.currentState.faculty}</p>
                <p><strong>Група:</strong> ${window.currentState.group}</p>
                <p><strong>Курс:</strong> ${getCourseFromGroup(window.currentState.group)}</p>
                <p><strong>Семестр:</strong> ${window.currentState.semester}</p>
                
                <h3><i class="fas fa-book"></i> Обрані предмети</h3>
                <ul>
                    ${Object.entries(window.currentState.selectedSubjects).map(([subject, subgroups]) => {
                        const info = subjectsData[subject];
                        const subgroupsText = subgroups.length > 0 ? `<br><small><i class="fas fa-users"></i> ${subgroups.join(', ')}</small>` : '';
                        return `<li><strong>${info.displayName}</strong> (${info.credits || '0'} кредитів, ${info.assessment || '-'}) ${subgroupsText}</li>`;
                    }).join('')}
                </ul>
            `;
            
            // Ховаємо кроки на сторінці за допомогою додавання класу до body
            document.body.classList.add('profile-completed');
        }
    }
    
    saveState();
}

// Функція редагування предметів
function editSubjects() {
    // Відновлюємо відображення кроків
    document.body.classList.remove('profile-completed');
    
    showStep('step-subjects');
    showSubjects(window.currentState.semester, window.currentState.group);
}

// Функція для перевірки стану профілю перед переходом на сторінку розкладу
function checkProfileBeforeSchedule() {
    console.log('[PROFILE] === Перевірка стану профілю перед переходом на розклад ===');
    
    // Перевіряємо, чи обрані предмети в профілі
    const hasSelectedSubjects = window.currentState.selectedSubjects && 
                               Object.keys(window.currentState.selectedSubjects).length > 0;
    
    console.log('[PROFILE] Стан профілю:');
    console.log('[PROFILE] - Обрані предмети:', hasSelectedSubjects);
    console.log('[PROFILE] - Кількість обраних предметів:', Object.keys(window.currentState.selectedSubjects || {}).length);
    
    // Якщо користувач очистив предмети
    if (!hasSelectedSubjects) {
        // Підготовка до показу повідомлення на сторінці розкладу
        // Відзначаємо, що користувач мав обрані предмети
        localStorage.setItem('hadSelectedSubjects', 'true');
        
        console.log('[PROFILE] Підготовлено показ повідомлення на сторінці розкладу');
    }
    
    window.location.href = 'schedule_new.html';
}

// Управління кроками
function showStep(stepId) {
    console.log('[PROFILE] Показую крок:', stepId);
    
    // Приховуємо всі кроки
    document.querySelectorAll('.profile-step').forEach(step => {
        step.classList.remove('active-step');
    });
    
    // Показуємо потрібний крок
    const currentStep = document.getElementById(stepId);
    if (!currentStep) {
        console.error('[PROFILE] Не знайдено крок з id:', stepId);
        return;
    }
    
    currentStep.classList.add('active-step');
    console.log('[PROFILE] Крок успішно показано:', stepId);
    
    // Оновлюємо активний крок у прогрес-барі
    const stepNumber = {
        'step-faculty': 1,
        'step-group': 2,
        'step-semester': 3,
        'step-subjects': 4
    };
    
    if (stepNumber[stepId]) {
        updateProgressBar(stepNumber[stepId]);
    }
}

// Функція для переходу до наступного кроку
function nextStep(currentStepId, nextStepId) {
    showStep(nextStepId);
}

// Функція для повернення до попереднього кроку
function previousStep(currentStepId) {
    // Масив кроків у потрібному порядку
    const steps = ["step-faculty", "step-group", "step-semester", "step-subjects"];
    const currentIndex = steps.indexOf(currentStepId);
    if (currentIndex > 0) {
        const previousStepId = steps[currentIndex - 1];
        showStep(previousStepId);
    }
}

// Функція для оновлення прогрес-бару
function updateProgressBar(step) {
    // Оновлюємо активний крок
    document.querySelectorAll('.progress-step').forEach((stepEl, index) => {
        if (index + 1 <= step) {
            stepEl.classList.add('active');
        } else {
            stepEl.classList.remove('active');
        }
    });
    
    // Оновлюємо заповнення прогрес-бару
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = `${(step / 4) * 100}%`;
    }
}

// Функція для збереження профілю
function saveProfile() {
    console.log('[PROFILE] Зберігаю профіль');
    showProfileSummary();
}
