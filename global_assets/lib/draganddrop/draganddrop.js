var dragdrop = {};

var dragdrop_obj = null;
var dragdrop_x = 0;
var dragdrop_y = 0;
var quizAnswers = [];
var completedQuiz = 0;
var aesthetics = true;

var answers = [];
var quiz_sym = null;

var curr = null;

$(document).ready (function () {

function quiz_load(sym, params) {
	debugMsg("quiz load: " + sym);

	if (typeof params !== 'undefined') {
		if (typeof params.aesthetics !== 'undefined') {
			aesthetics = params.aesthetics;
		}
	}
	
	quiz_sym = $(sym);
	quiz_sym.find('.response').hide();
	dragdrop_ini(sym);
}
dragdrop.quiz_load = quiz_load;

function quiz_submit(sym) {
	var tt = parseInt($("#"+sym).attr("total"));
	var currArrayId = parseInt($("#"+sym).attr("quizid"));
	var currArray = quizAnswers[currArrayId];
	
	debugMsg(currArray.length + " / " + tt);
	if (currArray.length == tt) {
		completedQuiz++;
		try {
			completed($("#"+sym));
		} catch (err) {
			debugMsg(err.message);
		}
	}
	
	if (completedQuiz == quizAnswers.length) {
		try {
			allComplete();
		} catch (err) {
			debugMsg(err.message);
		}
	}
}

function dragdrop_ini(sym) {
	//--- make images draggable	
	$(sym).find('.dragMe').each(function() {
		$(this).mousedown(function(e) {
			e.stopPropagation(); e.preventDefault();
			//debugMsg("mousedown: " + $(this).html());
			dragdrop_mousedown(e);
			$(this).addClass("dragMeActive");
			curr = $(this);
		});
		$(this).on('touchstart', function(e){
			e.stopPropagation(); e.preventDefault();
			debugMsg("touchstart: " + $(this).html());
			dragdrop_touchstart(e);
			$(this).addClass("dragMeActive");
			curr = $(this);
		});
		
		$(this).attr("dragdrop_group", $(sym).get(0).id);
		$(this).addClass("pointer");
	});
	
	var n = 0;
	$(sym).find('.dropHere').each(function() {
		$(this).attr("dragdrop_group", $(sym).get(0).id);
		//$(this).attr("id", n);
		n++;
	});
	
	$(sym).attr("total", n);
	
	var l = quizAnswers.length;
	$(sym).attr("quizid", l);
	quizAnswers[l] = new Array();
	
}

function dragdrop_mousedown(event) {
	
	//--- find the event object
	var evt = event || window.event;
	if (evt == null) return;
	var obj = evt.target || evt.srcElement;
	if (obj == null) return;
	evt.preventDefault();
	
	var originalPadding = parseFloat($(obj).css("padding-top"));
	var originalBorderWidth = parseFloat($(obj).css("border-top-width"));

	if (isNaN(originalPadding)) {
		originalPadding = 0;
	}
	if (isNaN(originalBorderWidth)) {
		originalBorderWidth = 0;
	}
	
	//--- make a clone of the object
	var top = getTop(obj) - originalPadding;
	var left = getLeft(obj) - originalPadding;
	var width = getWidth(obj) - (originalBorderWidth*2);
	var height = getHeight(obj) - (originalBorderWidth*2);
	//debugMsg(top + " " + left + " " + width + " " + height);
	
	dragdrop_obj = document.createElement('div');
	dragdrop_obj = document.body.appendChild(dragdrop_obj);
	dragdrop_obj.id = 'temp_dragdrop';
	var clone = obj.cloneNode(true); // "deep" clone
	dragdrop_obj.appendChild(clone);
	
	if (aesthetics) $("#temp_dragdrop div").addClass("roundedcorner dragMe outershadow");
	//$("#temp_dragdrop div").css("width", width+'px');
	//$("#temp_dragdrop div").css("height", height+'px');
	$("#temp_dragdrop div").css("margin", 0);
	//$("#temp_dragdrop").css("border", "1px solid blue");
	
	//dragdrop_obj.src = obj.src;
	dragdrop_obj.setAttribute('answer', obj.getAttribute('data-ans'));
	dragdrop_obj.setAttribute('dragdrop_group', obj.getAttribute('dragdrop_group'));
	dragdrop_obj.style.position = 'absolute';
	dragdrop_obj.style.top = top + 'px';
	dragdrop_obj.style.left = left + 'px';
	//dragdrop_obj.style.width = width + 'px';
	//dragdrop_obj.style.height = height + 'px';
	//dragdrop_obj.style.cursor = 'pointer';
	dragdrop_obj.style.zIndex = 2000;
	
	//--- record initial drag-drop location
	dragdrop_obj.setAttribute('iniX', evt.clientX);
	dragdrop_obj.setAttribute('iniY', evt.clientY);
	dragdrop_obj.setAttribute('iniTop', top);
	dragdrop_obj.setAttribute('iniLeft', left);
	
	//--- attach mousemove and mouseup listener to document
	document.addEventListener('mousemove', dragdrop_mousemove, true);
	document.addEventListener('mouseup', dragdrop_mouseup, true);
}

function dragdrop_touchstart(event) {
	//debugMsg("touchstart evt: " + event.type + " " + $(event.target).html());
	//--- find the event object
	var evt = event || window.event;
	if (evt == null) return;
	var obj = evt.target || evt.srcElement;
	if (obj == null) return;
	evt.preventDefault();
	
	//debugMsg("obj: " + obj);
	var originalPadding = parseFloat($(obj).css("padding-top"));
	var originalBorderWidth = parseFloat($(obj).css("border-top-width"));
	
	if (isNaN(originalPadding)) {
		originalPadding = 0;
	}
	if (isNaN(originalBorderWidth)) {
		originalBorderWidth = 0;
	}
	
	//--- make a clone of the object
	var top = getTop(obj) - originalPadding;
	var left = getLeft(obj) - originalPadding;
	var width = getWidth(obj) - (originalBorderWidth*2);
	var height = getHeight(obj) - (originalBorderWidth*2);
	//debugMsg(top + " " + left + " " + width + " " + height);
	
	dragdrop_obj = document.createElement('div');
	dragdrop_obj = document.body.appendChild(dragdrop_obj);
	dragdrop_obj.id = 'temp_dragdrop';
	var clone = obj.cloneNode(true); // "deep" clone
	dragdrop_obj.appendChild(clone);
	
	if (aesthetics) $("#temp_dragdrop div").addClass("roundedcorner dragMe outershadow");
	//$("#temp_dragdrop div").css("width", width+'px');
	//$("#temp_dragdrop div").css("height", height+'px');
	$("#temp_dragdrop div").css("margin", 0);
	//$("#temp_dragdrop").css("border", "1px solid blue");
	
	//dragdrop_obj.src = obj.src;
	dragdrop_obj.setAttribute('answer', obj.getAttribute('data-ans'));
	dragdrop_obj.setAttribute('dragdrop_group', obj.getAttribute('dragdrop_group'));
	dragdrop_obj.style.position = 'absolute';
	dragdrop_obj.style.top = top + 'px';
	dragdrop_obj.style.left = left + 'px';
	//dragdrop_obj.style.width = width + 'px';
	//dragdrop_obj.style.height = height + 'px';
	//dragdrop_obj.style.cursor = 'pointer';
	dragdrop_obj.style.zIndex = 2000;
	
	//--- record initial drag-drop location
	var touch = evt.originalEvent.touches[0] || evt.originalEvent.changedTouches[0];
	//debugMsg("touches: " + evt.originalEvent.touches[0] + ", touch id: " + touch);
	dragdrop_x = touch.pageX;
	dragdrop_y = touch.pageY;
	//debugMsg("x,y: " + dragdrop_x + ", " + dragdrop_y)
	dragdrop_obj.setAttribute('iniX', dragdrop_x);
	dragdrop_obj.setAttribute('iniY', dragdrop_y);
	dragdrop_obj.setAttribute('iniTop', top);
	dragdrop_obj.setAttribute('iniLeft', left);
	
	//--- attach mousemove and mouseup listener to document
	document.addEventListener('touchmove', dragdrop_touchmove, true);
	document.addEventListener('touchend', dragdrop_touchend, true);
	document.addEventListener('touchcancel', dragdrop_touchend, true);
}

function dragdrop_mousemove(event) {
	//debugMsg("dragging: " + $(event.target).html());

	//--- find the event object
	var evt = event || window.event;
	if (evt == null) return;
	evt.preventDefault();
	if (dragdrop_obj == null) return;

	//--- move the object
	var xMoved = evt.clientX - parseInt(dragdrop_obj.getAttribute('iniX'));
	var yMoved = evt.clientY - parseInt(dragdrop_obj.getAttribute('iniY'));
	dragdrop_obj.style.left = (parseInt(dragdrop_obj.getAttribute('iniLeft')) + xMoved) + 'px';
	dragdrop_obj.style.top = (parseInt(dragdrop_obj.getAttribute('iniTop')) + yMoved) + 'px';
}

function dragdrop_touchmove(event) {
	//debugMsg("touch dragging: " + $(event.target).html());

	//--- find the event object
	var evt = event || window.event;
	if (evt == null) return;
	evt.preventDefault();
	if (dragdrop_obj == null) return;

	//--- move the object
	var touch = evt.touches[0];
	dragdrop_x = touch.pageX;
	dragdrop_y = touch.pageY;
	var xMoved = dragdrop_x - parseInt(dragdrop_obj.getAttribute('iniX'));
	var yMoved = dragdrop_y - parseInt(dragdrop_obj.getAttribute('iniY'));
	dragdrop_obj.style.left = (parseInt(dragdrop_obj.getAttribute('iniLeft')) + xMoved) + 'px';
	dragdrop_obj.style.top = (parseInt(dragdrop_obj.getAttribute('iniTop')) + yMoved) + 'px';
}

function dragdrop_mouseup(event) {

	//--- find the event object
	var evt = event || window.event;
	if (evt == null) return;
	if (dragdrop_obj == null) return;
	evt.preventDefault();
	
	//--- remove listeners
	document.removeEventListener('mousemove', dragdrop_mousemove, true);
	document.removeEventListener('mouseup', dragdrop_mouseup, true);

	//--- check if drop target is valid (className contains 'dropHere')
	var x = evt.clientX;
	var y = evt.clientY;
	dragdrop_finished(x, y);
}

function dragdrop_touchend(event) {

	//--- find the event object
	var evt = event || window.event;
	if (evt == null) return;
	if (dragdrop_obj == null) return;
	evt.preventDefault();
	
	//--- remove listeners
	document.removeEventListener('touchmove', dragdrop_touchmove, true);
	document.removeEventListener('touchend', dragdrop_touchend, true);
	document.removeEventListener('touchcancel', dragdrop_touchend, true);

	//--- check if drop target is valid (className contains 'dropHere')
	dragdrop_finished(dragdrop_x, dragdrop_y);
}

function dragdrop_finished(x, y) {
	var top, left, width, height;
	var targets = document.getElementsByTagName('div');
	var target = null;
	var scrollTop = $(window).scrollTop();
	var scrollLeft = $(window).scrollLeft();

	//debugMsg(scrollTop + " " + scrollLeft);
	for (var i=0; i<targets.length; i++) {
		if (targets[i].className.indexOf('dropHere') == -1) continue;

		top = getTop(targets[i]);
		left = getLeft(targets[i]);
		width = getWidth(targets[i]);
		height = getHeight(targets[i]);

		if (!isMobile) {
			top -= scrollTop;
			left -= scrollLeft;
		}

		if (x >= left && x <= (left + width) && y >= top && y <= (top + height)) {
			target = targets[i];
			break;
		}
	}
	//--- if invalid target, move the object back to original position (animated), then destroy it
	if (target == null) {
		var iniLeft = parseInt(dragdrop_obj.getAttribute('iniLeft'));
		var iniTop = parseInt(dragdrop_obj.getAttribute('iniTop'));
		returnBack (iniLeft, iniTop);
		return;
	}
	
	//--- check if there is another drop object in the target container, if so,
	//--- move the object back to original position (animated), then destroy it
	var objs = target.childNodes;
	for (var i=objs.length-1; i>=0; i--) {
		if (objs[i].className) {
			if (objs[i].className == 'dragdrop_dropped') {
				var iniLeft = parseInt(dragdrop_obj.getAttribute('iniLeft'));
				var iniTop = parseInt(dragdrop_obj.getAttribute('iniTop'));
				returnBack (iniLeft, iniTop);
				return;
			}
		}
	}

	//--- mark the answer
	//--- answer of the dragged object is stored in attribute = 'answer'
	//--- correct answer for the drop target container s stored in attribute = 'answer'
	var answer = dragdrop_obj.getAttribute('answer');
	var correctAnswer = target.getAttribute('data-ans');
	//debugMsg("Validate: " + answer + ", Correct: " + correctAnswer);
	
	if (dragdrop_obj.getAttribute('dragdrop_group') != target.getAttribute('dragdrop_group')) {
		var iniLeft = parseInt(dragdrop_obj.getAttribute('iniLeft'));
		var iniTop = parseInt(dragdrop_obj.getAttribute('iniTop'));
		returnBack (iniLeft, iniTop);
		return;
	}
	
	var mygroup = dragdrop_obj.getAttribute('dragdrop_group');
	var currArrayId = parseInt($("#"+mygroup).attr("quizid"));
	var currArray = quizAnswers[currArrayId];
		
	if (answer == correctAnswer || answer == "*" || correctAnswer == "*") {
		//if (quiz_correct.indexOf(answer) == -1) quiz_correct = quiz_correct + answer;
		//if ($.inArray(answer, quiz_correct) == -1) {
			//not found
			currArray.push(answer + ":" + correctAnswer);
			try {
				correct (target);
			} catch (err) {
				debugMsg(err.message);
			}
			
		//}
		//debugMsg("Corrects: " + currArray);
	} else {
		//quiz_correct = quiz_correct.replace(answer, '');
		//var pos = $.inArray(answer, currArray);
		//if (pos > -1) {
			//currArray.splice(pos, 1);
		//}
		var iniLeft = parseInt(dragdrop_obj.getAttribute('iniLeft'));
		var iniTop = parseInt(dragdrop_obj.getAttribute('iniTop'));
		returnBack (iniLeft, iniTop);
		
		try {
			incorrect(target, curr);
		} catch (err) {
			console.log(err.message);
		}
		return;
	}
	
	quizAnswers[currArrayId] = currArray;
	
	//--- add this object to the target container
	dragdrop_obj = target.appendChild(dragdrop_obj);
	top = Math.floor((getHeight(target) - getHeight(dragdrop_obj)) / 2) - parseFloat($(target).css("border-top-width"));
	left = Math.floor((getWidth(target) - getWidth(dragdrop_obj)) / 2) - parseFloat($(target).css("border-left-width"));
	
	//debugMsg($(dragdrop_obj).get(0));
	//debugMsg(getHeight(target) + " " + getHeight(dragdrop_obj) + " " + top);
	//debugMsg("left border width: " + parseFloat($(target).css("border-left-width")));
	//debugMsg(dragdrop_obj);
	$(dragdrop_obj).find(".dragMe").css("margin", 0);
	$(dragdrop_obj).find(".dragMe").css("top", "0px");
	$(dragdrop_obj).find(".dragMe").css("position", "absolute");
	$(dragdrop_obj).removeClass("pointer");
	$(dragdrop_obj).find(".dragMe").removeClass("pointer");
	$(dragdrop_obj).find(".dragMe").removeAttr('data-ans');
	$(dragdrop_obj).find(".dragMe").removeAttr('id');
	//dragdrop_obj.style.cursor = 'default';
	
	dragdrop_obj.style.position = 'absolute';
	dragdrop_obj.style.top = top + 'px';
	dragdrop_obj.style.left = left + 'px';
	dragdrop_obj.id = '';
	//dragdrop_obj.className = 'dragdrop_dropped';
	$(dragdrop_obj).removeClass("dropHere");
	$(dragdrop_obj).addClass("dragdrop_dropped");
	
	answers.push(dragdrop_obj);
	dragdrop_obj = null;
	
	curr.unbind("mousedown");
	curr.unbind("touchstart");
	curr.removeClass("pointer");
	curr = null;
	
	quiz_submit(mygroup);
}

function returnBack (l, t) {
	$("#temp_dragdrop").animate({ left: l, top: t }, 50, function() {
		// animation completed
		dragdrop_obj.parentNode.removeChild(dragdrop_obj);
		dragdrop_obj = null;
		curr.removeClass("dragMeActive");
		curr = null;
	});
}

/*function addObjToDrop (drag, target) {
	var obj = target.appendChild(drag);
	var top = Math.floor((getHeight(target) - getHeight(obj)) / 2) - parseFloat($(target).css("border-top-width"));
	var left = Math.floor((getWidth(target) - getWidth(obj)) / 2) - parseFloat($(target).css("border-left-width"));
	
	//debugMsg($(obj).get(0));
	//debugMsg(getHeight(target) + " " + getHeight(obj) + " " + top);
	//debugMsg("left border width: " + parseFloat($(target).css("border-left-width")));
	//debugMsg(obj);
	$(obj).find(".dragMe").css("margin", 0);
	$(obj).find(".dragMe").css("top", "0px");
	$(obj).find(".dragMe").css("position", "absolute");
	$(obj).removeClass("pointer");
	$(obj).find(".dragMe").removeClass("pointer");
	//obj.style.cursor = 'default';
	
	obj.style.position = 'absolute';
	obj.style.top = top + 'px';
	obj.style.left = left + 'px';
	obj.id = '';
	//obj.className = 'dragdrop_dropped';
	$(obj).removeClass("dropHere");
	$(obj).addClass("dragdrop_dropped");
	
	answers.push(obj);
	obj = null;
}*/

function addObjToDrop2 (drag, drop) {	
	var top = Math.floor(($(drop).outerHeight() - $(drag).outerHeight()) / 2) - parseFloat($(drop).css("border-top-width"));
	var left = Math.floor(($(drop).outerWidth() - $(drag).outerWidth()) / 2) - parseFloat($(drop).css("border-left-width"));

	var clone = $(drag).clone(false);
	clone.removeAttr('id');
	clone.removeAttr('data-ans');

	if ($(drop).children().hasClass('dragdrop_dropped')) {
		$(drop + ' .dragdrop_dropped').remove();
	}
	
	$(drop).append('<div class="dragdrop_dropped"></div>');
	$(drop + ' .dragdrop_dropped').append(clone);

	$(drop + ' .dragMe').css({'position':'absolute', 'margin':'0', 'top':top + 'px', 'left':left + 'px'});
	$(drop + ' .dragMe').removeClass('pointer');
	$(drop + ' .dragMe').removeClass('dragMeActive');
	$(drop).addClass('dragdrop_dropped');
	$(drag).addClass('dragMeActive');
	$(drag).unbind('mousedown');
	$(drag).unbind('touchstart');
	$(drag).css('cursor', 'default');

	//update stats
	var mygroup = $(drag).attr('dragdrop_group');
	var currArrayId = parseInt($("#"+mygroup).attr("quizid"));
	var currArray = quizAnswers[currArrayId];
	//currArray.push($(drag).attr('data-ans') + ":" + $(drop).attr('data-ans'));
	
	//quiz_submit(mygroup);
}

dragdrop.addObjToDrop = addObjToDrop2;

function showAnswer (id) {
	$(id + ' .dropHere').each(function() {
		//console.log('length: ' + $(this).find('.dragdrop_dropped').length);
		if ($(this).find('.dragdrop_dropped').length == 0) {
			var ans = $(this).attr('data-ans');
			var dragId = findMyFriend(id + ' .dragMe', 'data-ans', ans);
			console.log('drag id: ' + dragId);
			if(dragId != '') addObjToDrop2 ('#'+dragId, '#'+$(this).attr('id'));
		}
	});
}
dragdrop.showAnswer = showAnswer;

function findMyFriend (id, attr, value) {
	var dragId = '';
	$(id).each(function() {
		if (!$(this).hasClass('dragMeActive')) {
			//console.log($(this).attr(attr) + ' ' + value);
			if ($(this).attr(attr) == value) {
				dragId = $(this).attr('id');
				console.log($(this));
				return false;
			}
		}
	});
	//must have an 'id' attribute
	return dragId;
}

});