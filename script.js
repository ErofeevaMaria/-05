// Получаем элементы
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageIndicator = document.getElementById('page-indicator');
let currentPage = 0;

// Функция обновления видимости страниц и кнопок
function updatePages() {
    pages.forEach((page, index) => {
        page.classList.toggle('active', index === currentPage);
    });

    // Обновляем индикатор
    pageIndicator.textContent = `Страница ${currentPage + 1} из ${pages.length}`;

    // Блокируем/разблокируем кнопки
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
}

// Обработчики кнопок
prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
    }
});

// Инициализация
updatePages();

// Логика теста (находится на последней странице, индекс 3)
const submitQuiz = document.getElementById('submit-quiz');
const quizResult = document.getElementById('quiz-result');

submitQuiz.addEventListener('click', () => {
    // Правильные ответы
    const correctAnswers = {
        q1: 'a',
        q2: 'b'
    };

    let score = 0;
    let total = Object.keys(correctAnswers).length;

    // Проверяем каждый вопрос
    for (let question in correctAnswers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }

    // Показываем результат
    quizResult.textContent = `Вы ответили правильно на ${score} из ${total} вопросов.`;
    quizResult.className = score === total ? 'result-success' : 'result-error';
});