/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "${_ReplayButton}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         stopAudio();
         playAudio('audio/Stream.mp3');

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_PrevButton}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         stopAudio();
         window.open("../slide07/slide.html", "_self");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         playAudio('audio/Stream.mp3');
         popup_ini();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HomeButton}", "click", function(sym, e) {
         stopAudio();
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("../slide01/slide.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_toc}", "click", function(sym, e) {
         var element = sym.$("toc");
         var url = toc_hitTest(element, e);
         if (url) {
         	stopAudio();
         	window.open(url, "_self");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_toc_text}", "click", function(sym, e) {
         var element = sym.$("toc");
         toc_show(element);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_toc_circle}", "click", function(sym, e) {
         var element = sym.$("toc");
         toc_show(element);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_next0001}", "click", function(sym, e) {
         stopAudio();
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("../slide10/slide.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-319788500");