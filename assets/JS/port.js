function filterSelection(category) {
    let works = document.getElementsByClassName('work');
    if (category === 'all') category = '';
    
    for (let i = 0; i < works.length; i++) {
        works[i].style.display = works[i].className.includes(category) ? 'block' : 'none';
    }
}

// Default to show all works
filterSelection('all');
