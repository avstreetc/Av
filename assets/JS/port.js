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
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430196/a_gquof8.jpg" alt="Шахматы на рендере" style="max-width: 100%; border-radius: 10px;">
                <p>Больше всего мне нравится расставлять свет и искать заманивающие кадры.</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430196/b_ibk8og.jpg" alt="Шахматы на рендере" style="max-width: 100%; border-radius: 10px;">
            `;
            // Создаем 3D сцену
            break;
        case "work_nightShooting":
            modalBody.innerHTML = `
                <h2>Ночная съемка Маши</h2>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430264/a_utdzbe.jpg" alt="Обородование фото" style="max-hight: 40%; border-radius: 10px;">
                <p>Для таких кадров нам необходимо было пройти к локации и расставить свет. Это был невероятно увлекательный процесс, который позволил раскрыть всю красоту ночного города.</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430264/b_vbgirk.jpg" alt="Первый коллаж" style="max-width: 100%; border-radius: 10px;">
                <p>Несколько нарядов помогают создать разные образы, а меняя фон кажется, будто фотосессий было несколько!</p>
                <p>Свет определенно добавляет свой шарм.</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430264/d_kl6ann.jpg" alt="Второй коллаж" style="max-width: 100%; border-radius: 10px;">
                <p>Это было потрясающе!</p>
            `;
            break;
        case "work_dance":
            modalBody.innerHTML = `
                <h2>Танцуем вальс Победы вместе</h2>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430314/b_oyu86n.jpg" alt="Вальс 1" style="max-width: 100%; border-radius: 10px;">
                <p>Важное мероприятие - День Победы, вальс победы. Задача была заснять работу танцоров, попутно учавствуя в проекте.</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430315/a_s4xgrl.jpg" alt="Вальс 2" style="max-width: 100%; border-radius: 10px;">
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430315/c_uk6grl.jpg" alt="Вальс 2" style="max-width: 100%; border-radius: 10px;">
            `;
            break;
        case "work_webSearchLearn":
            modalBody.innerHTML = `
                <h2>Сайт обучающих курсов</h2>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430374/a_cc9t2f.png" alt="Демонстраниция сайта" style="max-width: 100%; border-radius: 10px;">
                <p>Создание сайта для обучающих курсов включало в себя разработку UX/UI дизайна, адаптивной верстки и оптимизации под поисковые системы.</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430375/c_oabpv8.jpg" alt="Отображение сайта" style="max-width: 100%; border-radius: 10px;">
                <p>Такой сайт помогает развиваться стартаперам SearchAndLearn.</p>

            `;
            break;
        case "work_limon":
            modalBody.innerHTML = `
                <h2>Фотосессия для бренда LenLimon</h2>
                <p>Стильные платья изо льна получаются очень яркие. После фотосессии я заказал себе рубашку изо льна.</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719445856/a_mn6dcm.png" alt="Платья" style="max-width: 95%; border-radius: 10px;">
                <p>В студии фотографировать модель гораздо лучше, когда за окном облочно. Нет сильных лучей света и свет получается мягким</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719446138/IMG_3083_iuybnm.jpg" alt="Костюм" style="max-width: 100%; border-radius: 10px;">
                
            `;
            break;
        case "work_handmadeAlbum":
            modalBody.innerHTML = `
                <h2>Альбом ручной работы</h2>
                <p>Полностью подобрать размер, порезать на равные части такие страницы - и склеить - трудное дело.</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430473/a_shblvl.jpg" alt="Альбом" style="max-width: 100%; border-radius: 10px;">
                <p>Создание альбома ручной работы включало в себя разработку дизайна страниц, подбор материалов и печать.</p>
            `;
            break;
        case "work_psychologistReels":
            modalBody.innerHTML = `
                <h2>Reels для психолога</h2>
                <p>Создание серии видео Reels для продвижения услуг психолога в социальных сетях.</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719451070/d63b8698-d314-4513-bf76-34cf5c9297ec.png" alt="Reels для психолога" style="max-width: 40%;">
                <p>Для просмотра Reels отсканируйте Qr-код с телефона, если вы на ПК. Если вы хотите остаться на ПК, то вот ссылка: </p>
                <div class="contact-button">
                <a href="https://www.instagram.com/reel/C6V9xjRo1VL/?igsh=MTQyMzNwbms5NHd2NQ==">Reels 1</a>
                </div>
            `;
            break;
        case "work_mobileStudio":
            modalBody.innerHTML = `
                <h2>Выездная студия</h2>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430554/a_qycuvq.jpg" alt="Выездная студия" style="max-width: 100%; border-radius: 10px;">
                <p>Организация и проведение фотосессий с выездной студией, включая установку света и фона.</p>
                <p>Такую студию можно взять с собой куда угодно, где угодно. Конечно, где можно спокойно проехать на машине. Кадры с таким фоном получаются живыми!</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430554/b_moa2h2.jpg" alt="Фото на студии" style="max-width: 100%; border-radius: 10px;">
            `;
            break;
        case "work_photoWall":
            modalBody.innerHTML = `
                <h2>Фото на стенды</h2>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430592/a_xrt2r7.jpg" alt="Фото на стенды" style="max-width: 100%; border-radius: 10px;">
                <p>Съемка и печать фотографий для размещения на стендах в учебных заведениях.</p>
            `;
            break;
        case "work_boavok":
            modalBody.innerHTML = `
                <h2>BoAvok</h2>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719430614/a_cpwxgv.png" alt="BoAvok" style="max-width: 100%; border-radius: 10px;">
                <p>Разработка UX/UI дизайна для мобильного приложения BoAvok, включая прототипирование и тестирование.</p>
            `;
            break;
        case "work_home3d":
            modalBody.innerHTML = `
                <h2>Домики в лесу на закате</h2>
                <p>Когда я делал это, я думал сделать 3d игру (3D может грузиться долго)</p>
                <spline-viewer loading-anim-type="spinner-small-dark" url="https://prod.spline.design/6CLPuIyi2SCn1wmt/scene.splinecode"></spline-viewer>
                <p>Но это не помешает расставить камеры, смоделировать такую сценку.</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719449460/4f16293c-7283-4042-ae65-d9ae35dd44e4.png" alt="Дома в закате" style="max-width: 100%; border-radius: 10px;">
                <p>Больше всего мне нравится расставлять свет и искать заманивающие кадры.</p>
                <iframe src="https://giphy.com/embed/7SMwOgXHB9kVX2Kxr0" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            `;
            break;
        case "work_free2024":
            modalBody.innerHTML = `
                <h2>Пропуск Free 2024</h2>
                <p>Это была практика в школе, у нас было много возможностей и ещё больше энтузиазма!</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719434090/IMG_3066_yfiqd6.jpg" alt="Коллаж Валя" style="max-width: 100%; border-radius: 10px;">
                <p>Тогда был праздничный день, в котором нарядную мою подругу я подвозил. Решил сделать этот праздник более официальным. Теперь такой пропуск есть, и используется </p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719434536/Frame_9_ucxlyd.png" alt="Пропуск" style="max-width: 100%; border-radius: 10px;">
                <p>Оставалось только напечатать, продырявить и вручить такой пропуск!</p>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719433361/free2024_obj1fu.png" alt="Пропуск" style="max-width: 100%; border-radius: 10px;">
            `;
            break;
        case "work_34Logo":
            modalBody.innerHTML = `
                <h2>Логотип группы в инстаграме</h2>
                <img src="https://res.cloudinary.com/diwgonclj/image/upload/v1719443847/Free_iPhone_11_Pro_Mockup_3_twaatq.png" alt="Отображение, как выглядит" style="max-width: 50%; border-radius: 10px;">
                <p>Много идей, много предложений. Но выбор был за самым небоычным, дерзким дизайном! Цветовое сочитаение подходит под логотип самого колледжа, оба в цветах сине-голубого</p>
            `;
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
