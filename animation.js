gsap.registerPlugin(ScrollTrigger);

var tl =          gsap.timeline();
var tlMaster =    gsap.timeline();

function heroCardAppear () {
    tl = gsap.timeline()
        .fromTo (
            ".card--featured",
            {
                autoAlpha: 0,
                y: "+=150",
            },
            {
                autoAlpha: 1,
                y: "-=150",
                ease: "Power1.easeOut",
                duration: .3,
            },
        )
    return tl
}

function textAppear () {
    tl = gsap.timeline()
        .fromTo (
            "#crop-header h1, #crop-header h2",
            {
                autoAlpha: 0,
                y: "-=50",
            },
            {
                autoAlpha: 1,
                y: "+=50",
                ease: "Quad.easeInOut",
                duration: .3,
            },
        )
    return tl
}

// function staggerAllArticles (){
    let tlx = gsap.timeline()
    .to(
        ".card--all-mentions",
        {
            scrollTrigger: {
                trigger: "#all-articles",
                start: "top center", // when the top of the trigger hits the center of the viewport
            },
            autoAlpha: 1,
            duration: .5,
            ease: "power1.out",
            y: "-=30",
            // stagger: .15 //it's cooler with stagger, but i get a bug sometimes
        }
    )
    // I will not include the above timeline in tlMaster because otherwise it causes a bug: just the first cards render. Don't really know why — maybe a scrollTrigger issue (it was released 2 months ago that will not surprise me so much, altough GSAP makes really good products)? 

    //  return tl;
// }


// GSAP Blocks the CSS animation on hover — let's simulate the elevation with gsap! 
// it can get very fancier, but let's stick to something simple and unintrusive   
function mouseOverCard() {
    // This approach could get quite problematic: everytime a card gets hovered it creates a new timeline. Let's suppose the user hover 1M cards — the CPU will go on fire. 
    // A more clever approach will be to use just one timeline and target different element with "this" on mouse event. 
    var tlCard = gsap.timeline()
    .to(
        this,
        {
            y: "-=4",
            duration: .2
        }
    );
}
function mouseOutCard() {
    var tlCard = gsap.timeline()
    .to(
        this,
        {
            y: "+=4",
            duration: .2
        }
    );
}

document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("load", function () {
        $(".card").hover(mouseOverCard, mouseOutCard);

        tlMaster.add(textAppear())
                .add(heroCardAppear(), "-=.1");
        tlMaster.play();
    })
});