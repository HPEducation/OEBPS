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
            id:'Rectangle',
            type:'rect',
            rect:['14px','31px','57px','61px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(77,204,88,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '300px'],
            ["style", "width", '300px']
         ],
         "${_Rectangle}": [
            ["style", "top", '209px'],
            ["style", "height", '61px'],
            ["style", "left", '19px'],
            ["style", "width", '57px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid7", tween: [ "style", "${_Rectangle}", "height", '34px', { fromValue: '61px'}], position: 0, duration: 1000 },
            { id: "eid6", tween: [ "style", "${_Rectangle}", "top", '29px', { fromValue: '209px'}], position: 0, duration: 1000 },
            { id: "eid8", tween: [ "style", "${_Rectangle}", "width", '32px', { fromValue: '57px'}], position: 0, duration: 1000 },
            { id: "eid5", tween: [ "style", "${_Rectangle}", "left", '241px', { fromValue: '19px'}], position: 0, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "edgeAnimation2");