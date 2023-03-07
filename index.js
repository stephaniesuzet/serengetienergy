// Rating Initialization
function add(ths,sno){


    for (var i=1;i<=5;i++){
    var cur=document.getElementById("star"+i)
    cur.className="fa fa-star"
    }
    
    for (var i=1;i<=sno;i++){
    var cur=document.getElementById("star"+i)
    if(cur.className=="fa fa-star")
    {
    cur.className="fa fa-star checked"
    }
    }
    
    }

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        autoplay:true,   
        smartSpeed: 3000, 
        autoplayTimeout:7000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })