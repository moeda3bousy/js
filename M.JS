var allImages =Array.from(document.querySelectorAll('img'));
var layerDiv = document.querySelector('.layerdiv');
var layerImg = document.querySelector('.l');
var layer = document.querySelector('.layer');
var rightArrow = document.querySelector('.fa-arrow-right');
var leftArrow = document.querySelector('.fa-arrow-left');
var cClose = document.querySelector('.fa-xmark');
var iIndex;


for( var i=0; i<allImages.length; i++ ){
   
    allImages[i].addEventListener('click',function(e){
    layerDiv.classList.remove('d-none');
    var tTarget = e.target.getAttribute('src');
    iIndex = allImages.indexOf(e.target);
    layerImg.style.backgroundImage=`url('${tTarget}')`;
    })

}


function getNext(){
    iIndex++;
    if(iIndex==allImages.length){
        iIndex=0;
    }
    var nextImg = allImages[iIndex].getAttribute('src');
    layerImg.style.backgroundImage=`url('${nextImg}')`;
}
rightArrow.addEventListener('click',getNext);



function getPrevious(){
    iIndex--;
    if(iIndex==-1){
        iIndex=allImages.length - 1;
    }
    var nextImg = allImages[iIndex].getAttribute('src');
    layerImg.style.backgroundImage=`url('${nextImg}')`;
}
leftArrow.addEventListener('click',getPrevious);


function hideDiv(){
layerDiv.classList.add('d-none')
}
cClose.addEventListener('click',hideDiv)


document.addEventListener('keydown',function(e){
    if(e.code=='ArrowRight'){
        getNext()
    }
    else if(e.code=='ArrowLeft'){
        getPrevious()
    }
    else if(e.code=='Escape'){
        hideDiv()
    }
})


document.addEventListener('contextmenu',function(e){
    e.preventDefault()
    })

layer.addEventListener('click', function(e){
if(e.target==layer){
    layerDiv.classList.add('d-none')
}
})