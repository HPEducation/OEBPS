/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle2',
            type:'rect',
            rect:['21px','18px','29px','28px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(204,77,100,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '300px'],
            ["style", "width", '300px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '18px'],
            ["style", "height", '25px'],
            ["style", "left", '21px'],
            ["style", "width", '26px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid17", tween: [ "style", "${_Rectangle2}", "left", '213px', { fromValue: '21px'}], position: 0, duration: 2000, easing: "easeOutQuad" },
            { id: "eid22", tween: [ "style", "${_Rectangle2}", "width", '65px', { fromValue: '26px'}], position: 0, duration: 2000, easing: "easeOutQuad" },
            { id: "eid21", tween: [ "style", "${_Rectangle2}", "height", '63px', { fromValue: '25px'}], position: 0, duration: 2000, easing: "easeOutQuad" },
            { id: "eid18", tween: [ "style", "${_Rectangle2}", "top", '216px', { fromValue: '18px'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
//invoke the no conflict mode
jQuery.noConflict();

jQuery(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "edgeAnimation1");