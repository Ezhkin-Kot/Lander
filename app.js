// Функция для отслеживания пересечения блоков с областью видимости
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.3 // Процент пересечения элемента с экраном (30%)
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => observer.observe(section));

// Анимация карточек преподавателей
let cards = document.querySelectorAll('.teachers-slider .card');
let teachersBG = document.querySelectorAll('.teachers-slider .card .teacher-img');
let levitates = document.querySelectorAll('.teachers-slider .card .teacher-img .levitate-img');
let active = 0;

function loadShow(){
    cards[active].style.transform = `none`;
    cards[active].style.zIndex = 1;
    cards[active].style.filter = `none`;
    cards[active].style.opacity = 1;
    levitates[active].classList.add('levitate');
    let stt = 0;
    // Карточки справа от центральной
    for (var i = active + 1; i < cards.length; i++) {
        stt++;
        cards[i].style.transform = `translateX(${10*stt}rem) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-0.5deg)`;
        cards[i].style.zIndex = -stt;
        cards[i].style.filter = `blur(5px)`;
        cards[i].style.opacity = stt > 2 ? 0 : 0.6;
        levitates[i].classList.remove('levitate');
    }
    stt = 0;
    // Карточки слева от центральной
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        cards[i].style.transform = `translateX(${-10*stt}rem) scale(${1 - 0.2*stt}) perspective(16px) rotateY(0.5deg)`;
        cards[i].style.zIndex = -stt;
        cards[i].style.filter = `blur(5px)`;
        cards[i].style.opacity = stt > 2 ? 0 : 0.6;
        levitates[i].classList.remove('levitate');
    }
}
loadShow();

// Обработка кнопок выбора карточек
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
    active = active + 1 < cards.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}
// попап (папоапоаопопопоапо)
const openPopUp = document.querySelectorAll('.open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const sub = document.getElementById('submit');


openPopUp.forEach(link => {
    link.addEventListener('click',function(e){
        e.preventDefault();
        popUp.classList.add('open');});
});

closePopUp.addEventListener('click',function(){
    popUp.classList.remove('open');
})

sub.addEventListener('click',function(e){
    e.preventDefault();
    react.classList.add('open');
    setTimeout(
        () => {
            popUp.classList.remove('open');
        },
        3 * 1000
    );
})
