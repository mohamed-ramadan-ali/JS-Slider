
var imgList = document.getElementsByClassName("item-img");
var imgArrey = Array.from(imgList) ; 

var lightboxContainer = document.getElementById("lightbox-container")
var lightboxItem = document.getElementById("lightbox-item")
var curentSlide;
var nextBtn=document.getElementById("next");
var prevtBtn=document.getElementById("prev");
var closeBtn=document.getElementById("close") 

for ( i=0 ;i<imgArrey.length;i++)
{

    imgArrey [i].addEventListener("click" ,function(evenInfo){
curentSlide=imgArrey.indexOf(evenInfo.target)
        lightboxContainer.style.display="flex"
        var imgTarget = (evenInfo.target.src) ;
        lightboxItem.style.backgroundImage= "URL("+imgTarget+")"  
    })
}

function nextSlide()
{
    curentSlide++

    if ( curentSlide == imgArrey.length)
    {
        curentSlide=0
    }

    lightboxItem.style.backgroundImage= "URL("+imgArrey[curentSlide].src+")"

}

nextBtn.addEventListener("click",nextSlide) ; 


function prevSlide()
{
    curentSlide--

    if ( curentSlide < 0)
    {
        curentSlide= imgArrey.length-1
    }

    lightboxItem.style.backgroundImage= "URL("+imgArrey[curentSlide].src+")"

}

prevtBtn.addEventListener("click", prevSlide)

function closeSlide(){

    lightboxContainer.style.display="none"
}

closeBtn.addEventListener("click",closeSlide) 



document.body.addEventListener("keydown",function(evenInfo){

    if(evenInfo.keyCode== 39)
    {
        nextSlide()
    }
else if( evenInfo.keyCode == 37)
{
    prevSlide()
}
else if (evenInfo.keyCode == 27)
{
    closeSlide()
}

})