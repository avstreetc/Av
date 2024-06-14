import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// Функция для фильтрации работ по категориям
function filterSelection(category) {
    let works = document.getElementsByClassName('work');
    if (category === 'all') category = '';
    
    for (let i = 0; i < works.length; i++) {
        works[i].style.display = works[i].className.includes(category) ? 'block' : 'none';
    }
}

// Default to show all works
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
                <h2>3D Шахматы</h2>
                <div id="3d-container" style="width: 100%; height: 500px;"></div>
            `;
            // Создаем 3D сцену
            initThreeJS();
            break;
        case "work_nightShooting":
            modalBody.innerHTML = `
                <h2>Ночная съемка Маши</h2>
                <img src="assets/IMG/workcase/nightShooting/a.jpg" alt="Работа 1" style="max-width: 100%; border-radius: 10px;">
                <p>Для таких кадров нам необходимо было пройти к локации и расставить свет. Это был невероятно увлекательный процесс, который позволил раскрыть всю красоту ночного города.</p>
                <img src="assets/IMG/workcase/nightShooting/b.jpg" alt="Работа 2" style="max-width: 100%; border-radius: 10px;">
                <p>Несколько нарядов помогают создать разные образы, а меняя фон кажется, будто фотосессий было несколько!</p>
            `;
            break;
        case "work_dance":
            modalBody.innerHTML = `
                <h2>Танцуем вальс Победы вместе</h2>
                <img src="assets/IMG/workcase/dance/a.jpg" alt="Работа 1" style="max-width: 100%; border-radius: 10px;">
                <p>Важное мероприятие - День Победы, вальс победы. Задача была заснять работу танцоров, попутно учавствуя в проекте.</p>
                <img src="assets/IMG/workcase/dance/b.jpg" alt="Работа 2" style="max-width: 100%; border-radius: 10px;">
            `;
            break;
        case "work_webSearchLearn":
            modalBody.innerHTML = `
                <h2>Сайт обучающих курсов</h2>
                <img src="assets/IMG/workcase/webSearchLearn.png" alt="Сайт обучающих курсов" style="max-width: 100%; border-radius: 10px;">
                <p>Создание сайта для обучающих курсов включало в себя разработку UX/UI дизайна, адаптивной верстки и оптимизации под поисковые системы.</p>
            `;
            break;
        case "work_limonLogo":
            modalBody.innerHTML = `
                <h2>Логотип Лимон</h2>
                <img src="assets/IMG/workcase/limonLogo.png" alt="Логотип Лимон" style="max-width: 100%; border-radius: 10px;">
                <p>Разработка логотипа для бренда "Лимон" включала в себя создание уникального фирменного стиля и элементов брендинга.</p>
            `;
            break;
        case "work_handmadeAlbum":
            modalBody.innerHTML = `
                <h2>Альбом ручной работы</h2>
                <img src="assets/IMG/workcase/handmadeAlbum.png" alt="Альбом ручной работы" style="max-width: 100%; border-radius: 10px;">
                <p>Создание альбома ручной работы включало в себя разработку дизайна страниц, подбор материалов и печать.</p>
            `;
            break;
        case "work_psychologistReels":
            modalBody.innerHTML = `
                <h2>Reels для психолога</h2>
                <img src="assets/IMG/workcase/psychologistReels.png" alt="Reels для психолога" style="max-width: 100%; border-radius: 10px;">
                <p>Создание серии видео Reels для продвижения услуг психолога в социальных сетях.</p>
            `;
            break;
        case "work_mobileStudio":
            modalBody.innerHTML = `
                <h2>Выездная студия</h2>
                <img src="assets/IMG/workcase/mobileStudio.png" alt="Выездная студия" style="max-width: 100%; border-radius: 10px;">
                <p>Организация и проведение фотосессий с выездной студией, включая установку света и фона.</p>
            `;
            break;
        case "work_photoWall":
            modalBody.innerHTML = `
                <h2>Фото на стенды</h2>
                <img src="assets/IMG/workcase/photoWall.png" alt="Фото на стенды" style="max-width: 100%; border-radius: 10px;">
                <p>Съемка и печать фотографий для размещения на стендах в учебных заведениях.</p>
            `;
            break;
        case "work_boavok":
            modalBody.innerHTML = `
                <h2>BoAvok</h2>
                <img src="assets/IMG/workcase/boavok.png" alt="BoAvok" style="max-width: 100%; border-radius: 10px;">
                <p>Разработка UX/UI дизайна для мобильного приложения BoAvok, включая прототипирование и тестирование.</p>
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

// Инициализация Three.js для 3D шахмат
function initThreeJS() {
    const container = document.getElementById('3d-container');

    // Создание сцены
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

    // Создание рендера
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Создание источника света
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // Загрузка 3D модели шахмат
    const loader = new GLTFLoader();
    loader.load('assets/3d/Home.glb', function(gltf) {
        scene.add(gltf.scene);
        render();
    }, undefined, function(error) {
        console.error(error);
    });

    camera.position.z = 5;

    // Функция рендера
    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    render();
}
