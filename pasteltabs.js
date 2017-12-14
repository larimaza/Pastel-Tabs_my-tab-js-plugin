//////////////////////////////////////////////////////////
// Module's DOM elements
//////////////////////////////////////////////////////////

var tabsOuterDiv = Array.from(document.querySelectorAll("[data-tabs-content]"));
var tabsList = Array.from(document.querySelectorAll("[data-tabs]"));
var tabListItems = Array.from(document.querySelectorAll("[data-tab]"));
var tabContentItems = Array.from(document.querySelectorAll("[data-tab-content]"));

//////////////////////////////////////////////////////////
// Adding classes
//////////////////////////////////////////////////////////

for (var i = 0; i < tabsOuterDiv.length; i++){
    tabsOuterDiv[i].classList.add("pt-outer-div");
}
for (var i = 0; i < tabsList.length; i++){
    tabsList[i].classList.add("pt-tabs-list");
}
for (var i = 0; i < tabListItems.length; i++) {
	tabListItems[i].classList.add("pt-list-item");
}
for (var i = 0; i < tabContentItems.length; i++) {
	tabContentItems[i].classList.add("pt-content-item");
}

//////////////////////////////////////////////////////////
// Content setup
//////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("[data-tab='1']").classList.add("pt-list-item-active");
	for (var i = 0; i < tabContentItems.length; i++) {
		if (tabContentItems[i].getAttribute("data-tab-content") != "1") {
			tabContentItems[i].style.display="none";
		}	
	};
});

//////////////////////////////////////////////////////////
// Event binds
//////////////////////////////////////////////////////////

for (var i = 0; i < tabListItems.length; i++) {
	tabListItems[i].addEventListener("click", function(event) {
		for (var j = 0; j < tabListItems.length; j++) {
			tabListItems[j].classList.remove("pt-list-item-active");
		};
		event.target.classList.add("pt-list-item-active");

		var currentTab = event.target.getAttribute("data-tab");
		for (var k = 0; k < tabContentItems.length; k++) {
			if (tabContentItems[k].getAttribute("data-tab-content") == currentTab) {
				tabContentItems[k].style.display="block";
			} else {
				tabContentItems[k].style.display="none";
			}	
		};
	});
}
