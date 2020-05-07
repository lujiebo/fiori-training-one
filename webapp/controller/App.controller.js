sap.ui.define([
	"com/shunyu/lujb/fiori-training-one/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController,JSONModel) {
	"use strict";

	return BaseController.extend("com.shunyu.lujb.fiori-training-one.controller.App", {
		onInit: function() {
			var oViewModel;
			oViewModel = new JSONModel({
				busy: false,
				delay: 0
			});
			this.setModel(oViewModel, "appView");
		}
	});
});