const animationDuration = 5; // 1 day = 5s
const animationRepeatDelay = animationDuration;
const totalDuration = animationDuration + animationRepeatDelay;

const sunMoonSky = "10vh";
const sunMoonHide = "100vh";

const skyRotationDuration = 0.4;
const skyRotationDelay = 0.4;
var skyTimeline = gsap.timeline();
skyTimeline.to(".sky", {
    rotate: -180,
    duration: skyRotationDuration,
    delay: skyRotationDelay,
    repeat: -1,
    repeatDelay: totalDuration - skyRotationDuration
});
skyTimeline.to(".sky", {
    rotate: -360,
    duration: skyRotationDuration,
    delay: animationDuration,
    repeat: -1,
    repeatDelay: totalDuration - skyRotationDelay
});

const sunDuration = skyRotationDuration;
const sunDelay = skyRotationDelay;
var sunTimeline = gsap.timeline({
    top: sunMoonSky
});
sunTimeline.fromTo(
    ".sun", {
        top: sunMoonSky
    }, {
        top: sunMoonHide,
        duration: sunDuration,
        delay: sunDelay - 0.5,
        repeat: -1,
        repeatDelay: totalDuration - sunDuration
    }
);
sunTimeline.fromTo(
    ".sun", {
        top: "100vh"
    }, {
        top: sunMoonSky,
        duration: sunDuration,
        delay: sunDuration + animationDuration + 0.5,
        repeat: -1,
        repeatDelay: totalDuration - sunDelay,
        ease: "back.inOut"
    }
);

const moonDuration = skyRotationDuration;
const moonDelay = skyRotationDelay;
var moonTimeline = gsap.timeline({
    top: sunMoonHide
});
moonTimeline.fromTo(
    ".moon", {
        top: sunMoonHide
    }, {
        top: sunMoonSky,
        duration: moonDuration,
        delay: moonDelay + 0.5,
        repeat: -1,
        repeatDelay: totalDuration - moonDuration,
        ease: "back.inOut"
    }
);
moonTimeline.fromTo(
    ".moon", {
        top: sunMoonSky
    }, {
        top: sunMoonHide,
        duration: moonDuration,
        delay: animationDuration - moonDuration - 0.5,
        repeat: -1,
        repeatDelay: totalDuration - moonDelay
    }
);

const windowDuration = 0.1;
const windowDelay = skyRotationDelay;
const windowLightsOn = "#f7e55c";
const windowLightsOff = "#d0edf4";
var windowTimeline = gsap.timeline({
    background: windowLightsOff
});
windowTimeline.fromTo(
    ".window", {
        background: windowLightsOff
    }, {
        background: windowLightsOn,
        duration: windowDuration,
        delay: windowDelay + 1,
        repeat: -1,
        repeatDelay: totalDuration - windowDuration
    }
);
windowTimeline.fromTo(
    ".window", {
        background: windowLightsOn
    }, {
        background: windowLightsOff,
        duration: windowDuration,
        delay: animationDuration - windowDuration,
        repeat: -1,
        repeatDelay: totalDuration - windowDelay
    }
);