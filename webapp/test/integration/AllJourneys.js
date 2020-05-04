/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/shunyu/lujb/fiori-training-one/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/shunyu/lujb/fiori-training-one/test/integration/pages/App",
	"com/shunyu/lujb/fiori-training-one/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.shunyu.lujb.fiori-training-one.view.",
		autoWait: true
	});
});