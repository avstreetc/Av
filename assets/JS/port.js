function filterSelection(category) {
    let works = document.getElementsByClassName('work');
    if (category === 'all') category = '';
    
    for (let i = 0; i < works.length; i++) {
        works[i].style.display = works[i].className.includes(category) ? 'block' : 'none';
    }
}

// Default to show all works
filterSelection('all');

// script.js

function openModal(workId) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    // Очистка текущего контента модального окна
    modalBody.innerHTML = "";

    // Заполнение модального окна контентом в зависимости от выбранной работы
    switch (workId) {
        case "work_nightShooting":
            modalBody.innerHTML = `
                <h2>Ночная съемка Маши</h2>
                <img src="assets/IMG/workcase/nightShooting/a.jpg" alt="Работа 1" style="max-width: 100%; border-radius: 10px;">
                <p>Для таких кадров нам необходимо было пройти к локации и расставить свет</p>
                <img src="assets/IMG/workcase/nightShooting/b.jpg" alt="Работа 2" style="max-width: 100%; border-radius: 10px;">
                <p>Несколько нарядов помогают создать разные образы, а меняя фон кажется, будто фотосессий было несколько!</p>
            `;
            break;
        case "work_dance":
            modalBody.innerHTML = `
                <h2>Танцуем вальс Победы вместе</h2>
                <img src="assets/IMG/workcase/dance/a.jpg" alt="Работа 1" style="max-width: 100%; border-radius: 10px;">
                <p>Такая акция стала отличным способом не только отметить День Победы, но и поддержала патриотическое настроение учащихся и педагогов колледжа. Вместе танцевать вальс Победы – это не только красиво и эмоционально, но и символично.
                Танцевальный флешмоб является красивой традицией нашего колледжа, которая существует уже несколько лет.
                <img src="assets/IMG/workcase/dance/b.jpg" alt="Работа 2" style="max-width: 100%; border-radius: 10px;">
                <p>Такая акция помогает сохранить память о великой Победе и ее героях в наших сердцах.</p>
                <img src="assets/IMG/workcase/dance/c.jpg" alt="Работа 3" style="max-width: 100%; border-radius: 10px;">
            `;
            break;
            case "work_webSearchLearn":
            modalBody.innerHTML = `
                <h2>Проект Search&Learn</h2>
                <img src="assets/IMG/workcase/work_webSearchLearn/a.png" alt="Работа 1" style="max-width: 100%; border-radius: 10px;">
                <img src="assets/IMG/workcase/work_webSearchLearn/b.png" alt="Работа 2" style="max-width: 100%; border-radius: 10px;">
                <img src="assets/IMG/workcase/work_webSearchLearn/c.jpg" alt="Работа 3" style="max-width: 100%; border-radius: 10px;">
            `;
            break;
        // Добавьте другие работы аналогично
    }

    // Показываем модальное окно
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
