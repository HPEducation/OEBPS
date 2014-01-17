var toc_items = new Array();
var toc_jQuery_object = null;

//--- define original toc image width and height
//--- toc image is saved in ../toc_template/toc.fw.png
//--- toc image is a png image but it can be edited (text, etc.) in Adobe Fireworks

var toc_image_width = 970;
var toc_image_height = 555;

//--- add toc items

function toc_define(origin_x, origin_y, size_width, size_height, url) {
	//--- origin_x, origin_y refers to the top-left point in toc image
	//--- size_width, size_height refers to the width and height of the click-able region
	//--- together, these 4 values determine a region on the toc image that
	//--- once clicked, should load the page defined in the "url" variable
	var obj = new Object();
	obj.x = origin_x;
	obj.y = origin_y;
	obj.width = size_width;
	obj.height = size_height;
	obj.url = url;
	toc_items.push(obj);
}

//--- Close button (X)
toc_define(893, 14, 58, 58, null);

//--- 1 - Learning Objectives
toc_define(168, 70, 203, 122, '../slide03/slide.html');

//--- 2 - What is Risk?
toc_define(378, 140, 203, 122, '../slide04/slide.html');

//--- 3 - 5-Step Risk Management Process
toc_define(592, 78, 210, 122, '../slide07/slide.html');

//--- 4 - Risk Management Plan
toc_define(264, 322, 203, 122, '../slide14/slide.html');

//--- 5 - Army Risk Management Concept
toc_define(480, 380, 218, 122, '../slide24/slide.html');

function toc_hitTest(jQuery_toc_obj, event) {

	//--- jQuery_toc_obj is jQuery object, need to retrieve DOM object:
	var obj = jQuery_toc_obj.get(0);
	
	//--- get the x/y co-ordinates of the click
	var x = event.clientX;
	var y = event.clientY;

	//--- in case obj is a DIV, find the enclosed IMG object
	if (obj.tagName.toLowerCase() == 'div') {
		for (var i=0; i<obj.childNodes.length; i++) {
			if (obj.childNodes[i].tagName) {
				if (obj.childNodes[i].tagName.toLowerCase() == 'img') {
					obj = obj.childNodes[i];
					break;
				}
			}
		}
	}

	//--- test if any toc item (region) has been clicked
	var item = null;
	for (var i=0; i<toc_items.length; i++) {
		item = toc_items[i];
		if (hitTestOnImage(obj, x, y, item.x, item.y, item.width, item.height, toc_image_width, toc_image_height)) {
			if (item.url == null) {
				toc_hide(jQuery_toc_obj);
				return null;
			}
			return item.url;
		}
	}
	
	return null;
}

function toc_set(jQuery_toc_obj) {
	toc_jQuery_object = jQuery_toc_obj;
}

function toc_show(jQuery_toc_obj) {
	stopVideo();
	popup_destroy();
	//jQuery_toc_obj.animate({ top: 5 }, 500);
	var className = jQuery_toc_obj.get(0).className;
	className = className.replace(' toc_hide', '');
	className = className + ' toc_show';
	jQuery_toc_obj.get(0).className = className;
}

function toc_hide(jQuery_toc_obj) {
	//jQuery_toc_obj.animate({ top: 1000 }, 500);
	var className = jQuery_toc_obj.get(0).className;
	className = className.replace(' toc_show', '');
	className = className + ' toc_hide';
	jQuery_toc_obj.get(0).className = className;
	popup_ini();
}

function toc_showNative() {
	//--- called by underlying native Android app to request webpage to display its TOC
	if (toc_jQuery_object == null) return;
	toc_show(toc_jQuery_object);
}