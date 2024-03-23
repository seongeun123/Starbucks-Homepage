const searchEl=document.querySelector('.search');
const searchInputEl=searchEl.querySelector('input');

searchEl.addEventListener('Click', function () {
    /*클릭했을 때 로직*/
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색'); 
});

searchInputEl.addEventListener('blur', function() { /*클래스를 지우는 함수*/
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', ''); 
});
