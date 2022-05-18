/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"git/MygitDemo/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"git/MygitDemo/test/integration/pages/App",
	"git/MygitDemo/test/integration/pages/Browser",
	"git/MygitDemo/test/integration/pages/Master",
	"git/MygitDemo/test/integration/pages/Detail",
	"git/MygitDemo/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "git.MygitDemo.view."
	});

	sap.ui.require([
		"git/MygitDemo/test/integration/NavigationJourneyPhone",
		"git/MygitDemo/test/integration/NotFoundJourneyPhone",
		"git/MygitDemo/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});