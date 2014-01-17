/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['Arial']='<style> @font-face { font-family: Arial; src: url(\'arial.ttf\'); } </style>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'footer',
            type:'image',
            rect:['0px','560px','978px','65px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"footer.png",'0px','0px']
         },
         {
            id:'background',
            type:'image',
            rect:['0','0','978px','560px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"background.jpg",'0px','0px']
         },
         {
            id:'course',
            type:'text',
            rect:['28px','14px','788px','39px','auto','auto'],
            text:"5-Step Risk Management Process",
            userClass:"textspacing1",
            font:['Arial',26,"rgba(255,255,255,1.00)","700","none",""],
            textShadow:["rgba(10,16,126,0.80)",1,1,4]
         },
         {
            id:'PrevButton',
            type:'group',
            rect:['597px','574px','168','40','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'buttonCopy2',
               type:'image',
               rect:['0px','0px','168px','33px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"button.png",'0px','0px']
            },
            {
               id:'Text2Copy3',
               type:'text',
               rect:['17px','7px','135px','33px','auto','auto'],
               cursor:['pointer'],
               text:"Previous",
               align:"center",
               userClass:"textspacing1",
               font:['Arial',18,"rgba(255,255,255,1)","400","none","normal"],
               textShadow:["rgba(0,0,0,0.65)",2,0,3]
            }]
         },
         {
            id:'ReplayButton',
            type:'group',
            rect:['407px','574px','168','40','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'button',
               type:'image',
               rect:['0px','0px','168px','33px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"button.png",'0px','0px']
            },
            {
               id:'Text2Copy',
               type:'text',
               rect:['17px','7px','135px','33px','auto','auto'],
               cursor:['pointer'],
               text:"Replay",
               align:"center",
               userClass:"textspacing1",
               font:['Arial',18,"rgba(255,255,255,1)","400","none","normal"],
               textShadow:["rgba(0,0,0,0.65)",2,0,3]
            }]
         },
         {
            id:'HomeButton',
            type:'group',
            rect:['217px','574px','168','40','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'buttonCopy3',
               type:'image',
               rect:['0px','0px','168px','33px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"button.png",'0px','0px']
            },
            {
               id:'Text2Copy4',
               type:'text',
               rect:['17px','7px','135px','33px','auto','auto'],
               cursor:['pointer'],
               text:"Home",
               align:"center",
               userClass:"textspacing1",
               font:['Arial',18,"rgba(255,255,255,1)","400","none","normal"],
               textShadow:["rgba(0,0,0,0.65)",2,0,3]
            }]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['17px','107px','951px','447px','auto','auto'],
            borderRadius:["30px 30px","30px 30px","30px 30px","30px 30px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RoundRectCopy',
            type:'rect',
            rect:['7px','97px','951px','447px','auto','auto'],
            borderRadius:["30px 30px","30px 30px","30px 30px","30px 30px"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'title',
            type:'image',
            rect:['28px','100px','350px','44px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"title.png",'0px','0px']
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['37px','148px','699px','30px','auto','auto'],
            text:"'Moderate' is the minimum risk level category for hazards that are:",
            align:"left",
            font:['Arial',16,"rgba(0,0,0,1.00)","400","none","normal"]
         },
         {
            id:'Text',
            type:'text',
            rect:['37px','172px','518px','30px','auto','auto'],
            text:"● Catastrophic (even though unlikely to occur), or",
            align:"left",
            userClass:"list",
            font:['Arial',16,"rgba(0,0,0,1.00)","400","none","normal"]
         },
         {
            id:'TextCopy2',
            type:'text',
            rect:['37px','196px','518px','30px','auto','auto'],
            text:"● Frequently encountered (even though negligible in severity).",
            align:"left",
            userClass:"list",
            font:['Arial',16,"rgba(0,0,0,1.00)","400","none","normal"]
         },
         {
            id:'image',
            type:'image',
            rect:['37px','228px','817px','270px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image.png",'0px','0px']
         },
         {
            id:'btn_next0001',
            type:'image',
            rect:['817px','498px','112px','40px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"btn_next0001.png",'0px','0px']
         },
         {
            id:'toc_circle',
            type:'ellipse',
            rect:['766px','68px','20px','20px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'toc_text',
            type:'text',
            rect:['792px','71px','190px','20px','auto','auto'],
            cursor:['pointer'],
            text:"Click here to view menu",
            align:"left",
            font:['Arial',14,"rgba(255,255,255,1.00)","700","none","normal"]
         },
         {
            id:'toc',
            type:'image',
            tag:'img',
            rect:['4px','1000px','970px','555px','auto','auto'],
            fill:["rgba(0,0,0,0)",'toc/toc.png','0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '107.32px'],
            ["style", "border-bottom-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text2Copy}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '17.3px'],
            ["style", "font-size", '18px'],
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer'],
            ["style", "font-family", 'Arial'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["subproperty", "textShadow.offsetV", '0px']
         ],
         "${_toc}": [
            ["style", "left", '4px'],
            ["style", "top", '1000px']
         ],
         "${_Text2Copy3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '17.3px'],
            ["style", "font-size", '18px'],
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer'],
            ["style", "font-family", 'Arial'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["subproperty", "textShadow.offsetV", '0px']
         ],
         "${_buttonCopy2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_TextCopy2}": [
            ["style", "top", '196px'],
            ["style", "width", '517.54998779297px'],
            ["style", "height", '30px'],
            ["style", "font-weight", 'normal'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Arial'],
            ["style", "left", '37.45px'],
            ["style", "font-size", '16px']
         ],
         "${_buttonCopy3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_toc_text}": [
            ["style", "top", '71px'],
            ["style", "width", '190px'],
            ["style", "text-align", 'left'],
            ["style", "cursor", 'pointer'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '792px'],
            ["style", "font-size", '14px']
         ],
         "${_ReplayButton}": [
            ["style", "top", '574px'],
            ["style", "left", '407px'],
            ["style", "cursor", 'pointer']
         ],
         "${_title}": [
            ["style", "height", '43.75px'],
            ["style", "top", '100px'],
            ["style", "left", '28px'],
            ["style", "width", '350px']
         ],
         "${_image}": [
            ["style", "left", '37px'],
            ["style", "top", '227.67px']
         ],
         "${_HomeButton}": [
            ["style", "top", '574px'],
            ["style", "left", '217px'],
            ["style", "cursor", 'pointer']
         ],
         "${_footer}": [
            ["style", "top", '560px'],
            ["style", "left", '0px']
         ],
         "${_button}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy4}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '17.3px'],
            ["style", "font-size", '18px'],
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["subproperty", "textShadow.offsetV", '0px'],
            ["style", "font-family", 'Arial'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '97px'],
            ["style", "border-bottom-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '7px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_course}": [
            ["subproperty", "textShadow.blur", '4px'],
            ["subproperty", "textShadow.offsetH", '1px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "font-size", '26px'],
            ["style", "top", '14px'],
            ["style", "height", '38.666625976562px'],
            ["subproperty", "textShadow.color", 'rgba(10,16,126,0.796875)'],
            ["style", "font-family", 'Arial'],
            ["style", "font-weight", 'bold']
         ],
         "${_Text}": [
            ["style", "top", '172px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Arial'],
            ["style", "height", '30px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '37.45px'],
            ["style", "width", '517.54998779297px']
         ],
         "${_btn_next0001}": [
            ["style", "top", '498px'],
            ["style", "height", '40px'],
            ["style", "left", '816.8px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '112.20779220779px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '625px'],
            ["style", "width", '978px']
         ],
         "${_toc_circle}": [
            ["style", "top", '68px'],
            ["style", "height", '20px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '766px'],
            ["style", "width", '20px']
         ],
         "${_TextCopy}": [
            ["style", "top", '148px'],
            ["style", "width", '698.88348388672px'],
            ["style", "height", '30px'],
            ["style", "font-weight", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Arial'],
            ["style", "left", '37.45px'],
            ["style", "font-size", '16px']
         ],
         "${_PrevButton}": [
            ["style", "top", '574px'],
            ["style", "left", '597px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-319788500");
