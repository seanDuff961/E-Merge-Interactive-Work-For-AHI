
function Model() {
    var tl          = new TimelineLite();
    var wichClasses = [".modelRF2", ".modelRF3", ".modelRF4", ".modelRF5", ".modelRF6", ".modelRF7", ".modelRF8"];


    tl.from("#modelIntro", 2, { y: -60, scale: 2, })
        .to("#modelIntro", 1, { opacity: 1 }, 0)
    .to(".h2Model", 2, { opacity: 0, width: "80%", })
    .staggerTo(wichClasses, 1, { opacity: 0 }, 0.1, "-=2")
    .to(".modelRF1", 1, { y: -160, x: +120, scale: 2, color: "#cc622d", textShadow: "1px 1px 1px #000", ease: Power2.easeout }, "-=2")
    .to(".modelRF1", 1, { backgroundColor: "#CC622D", color: "#ffffff", textShadow: "none" })
    .to(".superTitle", 1, { opacity: 1 }, "-=1");


    return tl;

}



function playSound(sound) {
    sound      = "https://a6423e80d75493acfc5e-f020161bd9feed788b607fd1c73c6d35.ssl.cf2.rackcdn.com/2019CECourse/" + sound + ".mp3";
    source.src = sound;
    audio.load();
    var promise = audio.play();
    if (promise !== undefined) {
        promise.then(_ => {
            // play started
        }).catch(error => {
            alert("Your browser not set to autoplay audio.");
        });
    }
    return sound;
}

function showList1() {
    tl = new TimelineLite();
    tl.from("#dnn_ctr3299_HtmlModule_lblContent", .5, { opacity: 0 })
     .staggerFrom(".head0", 1, { opacity: 0, y: -10 }, 1)
	.staggerFrom(".main0 li", 1, { opacity: 0, x: -20 }, .25)
	.staggerFrom(".head1", 1, { opacity: 0, y: -10 }, 1)
	.staggerFrom(".main1 li", 1, { opacity: 0, x: -20 }, .25)
	.to(".listSub", 1, { height: 0 })
	.to(".more", 1, { className: "-=open" })
	.to(".sub li", .5, { opacity: 0, x: 200 });

    return tl;
}

function whiteStage() {
    var tl = new TimelineLite();
    tl.set("#img1", { "left": "0px" })
    tl.from("#dnn_ctr3299_HtmlModule_lblContent", .5, { opacity: 0 })
        .to("#img1", 3, { opacity: 1, ease: Power1.easeIn }, "+=2")
   .to("#topHeader", 3, { backgroundPosition: "3000px 0px", }, "-=1.5")
   .to("#modelScoreImg", 2, { x: -80, opacity: 1 }, "-=2.5")
    .to(".modelSlice", 1, { y: -20, opacity: 1 })
    .from(".modelSlice", 1, { scale: .5 }, "-=1")
    .to("#simpleModelFull", 1, { opacity: .6 }, "-=1")
    .to(".modelTotal", 1, { y: -20, opacity: 1 }, "+=4")
    .from(".modelTotal", 1, { scale: .5 }, "-=1");
  //  .to(".modelSlice", 1, { opacity: 0 }, "-=2");

    return tl;
}

var select = function (s) {
    return document.querySelector(s);
},
selectAll = function (s) {
   return document.querySelectorAll(s);
},

animationWindow = select(".rate8"),
animData        = {
     wrapper  : animationWindow,
     animType : 'svg',
     loop     : true,
     prerender: true,
     autoplay : true,
     path     : '/portals/_default/skins/AHICourse/data.json'
 }, anim;

anim = bodymovin.loadAnimation(animData);
anim.addEventListener('DOMLoaded', onDOMLoaded);
anim.setSpeed(1);

function onDOMLoaded(e) {

    TweenLite.set("#content", { visibility: "visible" });
    TweenLite.set("#slideNav", { opacity:1 });
    TweenLite.set(".mainTitle", { x: -50 });
    var master = new TimelineLite();
    master.eventCallback("onStart", playSound, ["RATE-8-REMIX-V4"]);
    master.to({ frame: 0 }, 4, {
        frame: anim.totalFrames - 1, onUpdate: function () {
            anim.goToAndStop(Math.round(this.target.frame), true)
        }, ease: Linear.easeNone, onComplete: playSound, onCompleteParams: ["RF-10000"]
    },"+=.5");
    master.add(Model(), "-=1");
    master.to(".mainTitle", 2, { x: 0, opacity: 1 });
    master.to(".h2Model", .5, { height: 0 });
    master.add(whiteStage(),"-=2");
    
    //master.add(navArrow(),"+=2");

    if (document.cookie.indexOf("visited") == -1) {
        $.cookie('visited', 1, {path: document.location.pathname});
        master.add(navArrow(), "+=1");
    }


    //anim.addEventListener('complete', function(){});

    /*    var tl = new TimelineMax();
    
        tl.to({ frame: 0 }, 3, {
            frame: anim.totalFrames - 1, onUpdate: function () {
                anim.goToAndStop(Math.round(this.target.frame), true)
            }, ease: Linear.easeNone
        })
    */


}
