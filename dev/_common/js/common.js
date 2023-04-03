import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const read = {
	frame1:{},
	frame2: 2.7, 
	frame3: 3.3
}
read.frame1[`NHL`] = 2.3
read.frame1[`PP-Batflip`] = 1.2
read.frame1[`MARCH2`] = 2.2

const {w, h} = bannerSize


function fader(el, time){
	const tl = new TimelineMax()
	tl.from(el, {duration:.3, opacity:0}, "+=.2")
	tl.to(el, {duration:.2, opacity:0}, `+=${time}`)
	return tl
}

function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	
	return tl
}


function sliderSlant(){
	const tl = new TimelineMax()
	tl.add("t1")
	tl.from(".t1a", {duration:.20, x:"-=100", y:"+=30", opacity:0, ease:Power4.easeOut}, "t1")
	tl.from(".t1b", {duration:.20, x:"+=100", y:"-=30", opacity:0, ease:Power4.easeOut}, "t1+=.39")
	return tl
}


function sliderVertical(){
	const tl = new TimelineMax()
	tl.add("t1")
	tl.from(".t1a", {duration:.20,  y:"-=30", opacity:0}, "t1")
	tl.from(".t1b", {duration:.20,  y:"+=30", opacity:0}, "t1+=.2")
	return tl
}

function standard(frame1=sliderSlant){	
	
	const tl = init()	
	tl.from(".proline1", {duration:.2, opacity:0}, "+=.2")
	tl.to(".proline1", {duration:.2, opacity:0}, "+=.8")

	
	tl.add(frame1())

	tl.to([ ".bg", ".t1"], {duration:.2, opacity:0}, `+=${read.frame1[window.universalBanner.name]}`)


	
	if(universalBanner.size==="320x50"){
		// tl.add(fader(".frame2a", read.frame3), "+=.1")
		// tl.add(fader(".frame2b", 1.2), "+=.1")
	}else if(universalBanner.size==="300x250"){
		// tl.add(fader(".frame2a", 2.3), "+=.1")
		// tl.add(fader(".frame2b", read.frame2), "+=.1")
	}else{
		// tl.from(".frame2a", {duration:.3, opacity:0}, "+=.1")
		// tl.from(".frame2b", {duration:.3, opacity:0}, "+=.3")
		// tl.to(".frame2", {duration:.2, opacity:0}, `+=${read.frame2}`)
	}
	

	

	tl.add(fader(".frame3", read.frame3), "+=.3")
	


	tl.from([".frame4", ".footer"], {duration:.2, opacity:0}, "+=.3")
	tl.from(".cta", {duration:.2, opacity:0}, "+=.8")


	tl.add(olg())

	return tl
}

function b_970x250(){
	b_728x90()
}

function b_160x600(){
	standard()
}

function b_300x250(){		
	standard()
}

function b_300x600(){		
	standard()
}

function b_1000x700(){	
	standard()
}

function b_970x70(){

	standard()
}

function b_320x50(){
	standard(sliderVertical)
}

function b_728x90(text1){
	standard(sliderVertical)
	
}

export { init, b_160x600, b_300x250, b_300x600, b_320x50, b_728x90, b_970x250, b_1000x700,b_970x70, origin, standard, read }

