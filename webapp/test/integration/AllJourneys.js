/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 NotifDataSet in the list

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
		"git/MygitDemo/test/integration/MasterJourney",
		"git/MygitDemo/test/integration/NavigationJourney",
		"git/MygitDemo/test/integration/NotFoundJourney",
		"git/MygitDemo/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});