
const items = document.querySelectorAll('[data-scroll]');

const option = {
    root : null,
    threshold : '0.2',
    rootMargin : '0px 0px -200px 0px'
};

const slidein = new IntersectionObserver( (entries, slidein) => {
    entries.forEach( entry=>{
        if(!entry.isIntersecting)
            return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translate(0,0)';
    } )
},option);

items.forEach( item =>{
    slidein.observe(item);
    item.style.transitionDuration = '.7s';
});



const lazyImages = document.querySelectorAll('[data-src]');

const option2 = {
    root : null,
    threshold : '0.2',
    rootMargin : '0px 0px -200px 0px'
};

const loadImg = new IntersectionObserver( (entries, loadImg) => {
    entries.forEach( entry=>{
        if(!entry.isIntersecting)
            return;
        entry.target.setAttribute('src', entry.target.getAttribute('data-src'))
        console.log('added')
        entry.target.style.transform = 'translate(0,0)';
    } )
},option2);


lazyImages .forEach( image =>{
    loadImg.observe(image);
});

