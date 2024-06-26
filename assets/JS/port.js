function filterSelection(category) {
    let works = document.getElementsByClassName('work');
    if (category === 'all') category = '';
    
    for (let i = 0; i < works.length; i++) {
        works[i].style.display = works[i].className.includes(category) ? 'block' : 'none';
    }
}

filterSelection('all');

// Функция для открытия модального окна
window.openModal = function(workId) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    // Очистка текущего контента модального окна
    modalBody.innerHTML = "";

    switch (workId) {
        case "work_chess":
            modalBody.innerHTML = `
                <h2>Шахматы</h2>
                <p>В этой игре я знаю только, что пешка может пошагать на две клетки вперед.</p>
                <spline-viewer loading-anim-type="spinner-small-dark" url="https://prod.spline.design/d2t7hkwYj7zyy0vX/scene.splinecode"></spline-viewer>
                <p>Но это не помешает расставить камеры, смоделировать такую сценку.</p>
                <img src="/assets/IMG/workcase/Chess/a.jpg" alt="Шахматы на рендере" style="max-width: 100%; border-radius: 10px;">
                <p>Больше всего мне нравится расставлять свет и искать заманивающие кадры.</p>
                <img src="/assets/IMG/workcase/Chess/b.jpg" alt="Шахматы на рендере" style="max-width: 100%; border-radius: 10px;">
            `;
            // Создаем 3D сцену
            break;
        case "work_nightShooting":
            modalBody.innerHTML = `
                <h2>Ночная съемка Маши</h2>
                <img src="/assets/IMG/workcase/nightShooting/a.jpg" alt="Обородование фото" style="max-hight: 40%; border-radius: 10px;">
                <p>Для таких кадров нам необходимо было пройти к локации и расставить свет. Это был невероятно увлекательный процесс, который позволил раскрыть всю красоту ночного города.</p>
                <img src="/assets/IMG/workcase/nightShooting/b.jpg" alt="Первый коллаж" style="max-width: 100%; border-radius: 10px;">
                <p>Несколько нарядов помогают создать разные образы, а меняя фон кажется, будто фотосессий было несколько!</p>
                <p>Свет определенно добавляет свой шарм.</p>
                <img src="/assets/IMG/workcase/nightShooting/d.jpg" alt="Второй коллаж" style="max-width: 100%; border-radius: 10px;">
                <p>Это было потрясающе!</p>
            `;
            break;
        case "work_dance":
            modalBody.innerHTML = `
                <h2>Танцуем вальс Победы вместе</h2>
                <img src="/assets/IMG/workcase/dance/a.jpg" alt="Вальс 1" style="max-width: 100%; border-radius: 10px;">
                <p>Важное мероприятие - День Победы, вальс победы. Задача была заснять работу танцоров, попутно учавствуя в проекте.</p>
                <img src="/assets/IMG/workcase/dance/b.jpg" alt="Вальс 2" style="max-width: 100%; border-radius: 10px;">
            `;
            break;
        case "work_webSearchLearn":
            modalBody.innerHTML = `
                <h2>Сайт обучающих курсов</h2>
                <img src="/assets/IMG/workcase/SearchLearn/c.jpg" alt="Демонстраниция сайта" style="max-width: 100%; border-radius: 10px;">
                <p>Создание сайта для обучающих курсов включало в себя разработку UX/UI дизайна, адаптивной верстки и оптимизации под поисковые системы.</p>
                <img src="/assets/IMG/workcase/SearchLearn/b.png" alt="Отображение сайта" style="max-width: 100%; border-radius: 10px;">
                <p>Такой сайт помогает развиваться стартаперам SearchAndLearn.</p>
                <img src="/assets/IMG/workcase/SearchLearn/a.png" alt="Сайт" style="max-width: 100%; border-radius: 10px;">
            `;
            break;
        case "work_limonLogo":
            modalBody.innerHTML = `
                <h2>Логотип Лимон</h2>
                <img src="/assets/IMG/workcase/limonLogo/a.jpg" alt="Логотип" style="max-width: 100%; border-radius: 10px;">
                <p>Разработка логотипа для бренда "Лимон" включала в себя создание уникального фирменного стиля и элементов брендинга.</p>
            `;
            break;
        case "work_handmadeAlbum":
            modalBody.innerHTML = `
                <h2>Альбом ручной работы</h2>
                <img src="/assets/IMG/workcase/handmadeAlbum/a.jpg" alt="Альбом" style="max-width: 100%; border-radius: 10px;">
                <p>Создание альбома ручной работы включало в себя разработку дизайна страниц, подбор материалов и печать.</p>
            `;
            break;
        case "work_psychologistReels":
            modalBody.innerHTML = `
                <h2>Reels для психолога</h2>
                <img src="/assets/IMG/workcase/psychologistReels.png" alt="Reels для психолога" style="max-width: 100%; border-radius: 10px;">
                <p>Создание серии видео Reels для продвижения услуг психолога в социальных сетях.</p>
            `;
            break;
        case "work_mobileStudio":
            modalBody.innerHTML = `
                <h2>Выездная студия</h2>
                <img src="/assets/IMG/workcase/mobileStudio/a.jpg" alt="Выездная студия" style="max-width: 100%; border-radius: 10px;">
                <p>Организация и проведение фотосессий с выездной студией, включая установку света и фона.</p>
                <p>Такую студию можно взять с собой куда угодно, где угодно. Конечно, где можно спокойно проехать на машине. Кадры с таким фоном получаются живыми!</p>
                <img src="/assets/IMG/workcase/mobileStudio/b.jpg" alt="Фото на студии" style="max-width: 100%; border-radius: 10px;">
            `;
            break;
        case "work_photoWall":
            modalBody.innerHTML = `
                <h2>Фото на стенды</h2>
                <img src="/assets/IMG/workcase/photoWall/a.jpg" alt="Фото на стенды" style="max-width: 100%; border-radius: 10px;">
                <p>Съемка и печать фотографий для размещения на стендах в учебных заведениях.</p>
            `;
            break;
        case "work_boavok":
            modalBody.innerHTML = `
                <h2>BoAvok</h2>
                <img src="/assets/IMG/workcase/boavok/a.png" alt="BoAvok" style="max-width: 100%; border-radius: 10px;">
                <p>Разработка UX/UI дизайна для мобильного приложения BoAvok, включая прототипирование и тестирование.</p>
            `;
            break;
        case "work_home3d":
            modalBody.innerHTML = `
                <h2>Домики в лесу на закате</h2>
                <p>Когда я делал это, я думал сделать 3d игру (3D может грузиться долго)</p>
                <spline-viewer loading-anim-type="spinner-small-dark" url="https://prod.spline.design/6CLPuIyi2SCn1wmt/scene.splinecode"></spline-viewer>
                <p>Но это не помешает расставить камеры, смоделировать такую сценку.</p>
                <img src="/assets/IMG/workcase/Chess/a.jpg" alt="Шахматы на рендере" style="max-width: 100%; border-radius: 10px;">
                <p>Больше всего мне нравится расставлять свет и искать заманивающие кадры.</p>
                <img src="/assets/IMG/workcase/Chess/b.jpg" alt="Шахматы на рендере" style="max-width: 100%; border-radius: 10px;">
            `;
            // Создаем 3D сцену
            break;
        default:
            modalBody.innerHTML = "<p>Не удалось загрузить данные. Попробуйте снова.</p>";
            break;
    }

    modal.style.display = "block";
};

// Функция для закрытия модального окна
window.closeModal = function() {
    document.getElementById("modal").style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
