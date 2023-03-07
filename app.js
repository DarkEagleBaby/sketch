const grid = document.querySelector('.main-grid');
const clearBtn = document.querySelector('.clear');
const slide = document.querySelector('#sqrSelect')
const slideLabel = document.querySelector('.slider>label')
let isdrawing = false;

function changeSize(size){
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    for(let i=1;i<=(size*size);i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mousedown',()=>{
            isdrawing = true;
            box.style.backgroundColor = '#000'
            box.classList.add('colored');
        
        })
        box.addEventListener('mouseup',()=>{
            isdrawing = false;
            box.style.backgroundColor = '#000'
            box.classList.add('colored');
        })
        box.addEventListener('mouseenter',()=>{
            const randcolor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
            if(!isdrawing && !box.classList.contains('colored')){box.style.backgroundColor = randcolor;}
            if (isdrawing){box.style.backgroundColor = '#000'
            box.classList.add('colored');
        }
        })
        box.addEventListener('mouseleave',()=>{
            if(!isdrawing && !box.classList.contains('colored')){
            box.style.backgroundColor = 'rgb(255,255,255)';}
            if(isdrawing){
                box.style.backgroundColor = '#000';
                box.classList.add('colored');
        
            }
        })
        grid.append(box);
        }
}


clearBtn.addEventListener('click',()=>{
    const allBoxes = document.querySelectorAll('.box')
allBoxes.forEach((boxie)=>{boxie.style.backgroundColor='#fff'})})

slide.addEventListener('input',()=>{
slideLabel.innerHTML = `${slide.value}x${slide.value}`;
changeSize(slide.value);
})


changeSize(20);


