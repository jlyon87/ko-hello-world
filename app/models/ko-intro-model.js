"use strict";
function AppViewModel() {
	this.firstName = ko.observable('Bert');
	this.lastName = ko.observable('Bertington');

	this.fullName = ko.computed(function() {
		return this.firstName() + " " + this.lastName();
	}, this);

	this.capitalizeLastName = function() {
		var currentVal = this.lastName();
		this.lastName(currentVal.toUpperCase());
	}
}

window.onload = function () {
	ko.applyBindings(new AppViewModel());
}