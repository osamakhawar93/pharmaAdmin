webpackJsonpac__name_([32],{

/***/ "./src/app/Dosage/dosage.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var Adddosageservice_1 = __webpack_require__("./src/app/services/Adddosageservice.ts");
var DosageComponent = (function () {
    function DosageComponent(_addUnitService, router) {
        var _this = this;
        this._addUnitService = _addUnitService;
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this.router = router;
            this._addUnitService.getAllUnitValues().subscribe(function (response) {
                _this.GetDosageModel = response.data;
                console.log(_this.GetDosageModel);
                console.log(localStorage.getItem("UserType"));
            });
        }
    }
    DosageComponent.prototype.getmeasurementId = function (unitId) {
        this.unitId = unitId;
    };
    DosageComponent.prototype.getmeasurementvalue = function (dosagevalue) {
        var _this = this;
        if (this.unitId !== undefined && this.dosagevalue !== undefined) {
            this._addUnitService.addUnitValues(this.unitId, this.dosagevalue).subscribe(function (response) {
                console.log(response);
                jQuery("#snackbar1").html(response.message);
                _this.myFunction();
                _this.unitId = undefined;
                _this.dosagevalue = undefined;
                _this._addUnitService.getAllUnitValues().subscribe(function (response) {
                    _this.GetDosageModel = response.data;
                    console.log(_this.GetDosageModel);
                });
            });
        }
        else {
            jQuery("#snackbar1").html("Invalid Credenntials");
            this.myFunction();
        }
    };
    DosageComponent.prototype.addUnit = function () {
        var _this = this;
        if (this.unitname == " " && this.unitvalue == " ") {
            alert("please fill empty fields");
        }
        else {
            if (this.unitname !== undefined && this.unitvalue !== undefined) {
                this._addUnitService.addunit(this.unitname, this.unitvalue).subscribe(function (response) {
                    console.log(response);
                    jQuery("#snackbar1").html(response.message);
                    _this.myFunction();
                    _this.unitname = undefined;
                    _this.unitvalue = undefined;
                    _this._addUnitService.getAllUnitValues().subscribe(function (response) {
                        _this.GetDosageModel = response.data;
                        console.log(_this.GetDosageModel);
                        console.log(localStorage.getItem("UserType"));
                    });
                });
            }
            else {
                jQuery("#snackbar1").html("Invalid Credenntials");
                this.myFunction();
            }
        }
    };
    DosageComponent.prototype.searchResult = function () {
        this.router.navigate(['/app', 'extra', 'search']);
    };
    DosageComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar1");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    DosageComponent = __decorate([
        core_1.Component({
            selector: 'dosage',
            providers: [Adddosageservice_1.AddDosageService],
            styles: [__webpack_require__("./src/app/Dosage/dosage.style.scss")],
            template: __webpack_require__("./src/app/Dosage/dosage.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'dosage-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof Adddosageservice_1.AddDosageService !== 'undefined' && Adddosageservice_1.AddDosageService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], DosageComponent);
    return DosageComponent;
    var _a, _b;
}());
exports.DosageComponent = DosageComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/Dosage/dosage.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var dosage_component_1 = __webpack_require__("./src/app/Dosage/dosage.component.ts");
exports.routes = [
    { path: '', component: dosage_component_1.DosageComponent, pathMatch: 'full' }
];
var DosageModule = (function () {
    function DosageModule() {
    }
    DosageModule.routes = exports.routes;
    DosageModule = __decorate([
        core_1.NgModule({
            declarations: [
                dosage_component_1.DosageComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DosageModule);
    return DosageModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DosageModule;


/***/ },

/***/ "./src/app/Dosage/dosage.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.iconimage {\n  text-align: center;\n  padding-left: 56px; }\n\n.addbtn {\n  font-weight: bold;\n  font-size: 15px;\n  background-color: #1ec26b !important;\n  width: 241px !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/Dosage/dosage.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar1\"></div>\r\n<div class=\"row\">\r\n<div class=\"col-md-6\">\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"iconimage\">\r\n    <img src=\"assets/img/dosage.png\">\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-8 offset-xs-3\">\r\n        <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n       \r\n        </h5>\r\n        <section class=\"widget widget-login AddDosage animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;color:#1ec26b\">ADD UNIT</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n           \r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"unitname\" name=\"Unitname\" id=\"exampleInputEmail1\" placeholder=\"Enter Name\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"unitvalue\" name=\"unitvalue\" type=\"text\" placeholder=\"Enter Symbol\">\r\n              </div>\r\n \r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                  <a class=\"btn addbtn btn-inverse btn-sm\" (click)=\"addUnit()\">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-1\">\r\n                <div class=\"col-md-6 push-md-6\">\r\n                  <div class=\"clearfix\">\r\n                  \r\n                  </div>\r\n                </div>\r\n\r\n             \r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n <!--  <footer class=\"page-footer\">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n</div>\r\n\r\n<div id=\"snackbar1\"></div>\r\n<div class=\"col-md-6\">\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n      <div class=\"iconimage\">\r\n          <img src=\"assets/img/dosage.png\">\r\n          </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-8 offset-xs-3 \">\r\n        <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n        \r\n        </h5>\r\n        <section class=\"widget widget-login  AddSize animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;color:#1ec26b\">ADD DOSAGE</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n           \r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n             <select id=\"measurementName\" (change)=\"getmeasurementId($event.target.value)\"> \r\n                <option disabled selected value> -- select an option -- </option>  \r\n                <option *ngFor=\"let units of GetDosageModel\" value=\"{{units.Id}}\">{{units.UnitName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"dosagevalue\" name=\"dosagevalue\" type=\"text\" placeholder=\"Enter Value\">\r\n              </div>\r\n \r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                  <a class=\"btn addbtn btn-inverse btn-sm\" (click)=\"getmeasurementvalue()\">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-1\">\r\n                <div class=\"col-md-6 push-md-6\">\r\n                  <div class=\"clearfix\">\r\n                   <!--  <div class=\"abc-checkbox widget-login-info pull-xs-right\">\r\n                      <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\r\n                      <label for=\"checkbox1\">Keep me signed in </label>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n               <!--  <div class=\"col-md-6 pull-md-6\">\r\n                  <a class=\"mr-n-lg\" href=\"#\">Trouble with account?</a>\r\n                </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n <!--  <footer class=\"page-footer\">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n</div>\r\n</div>"

/***/ },

/***/ "./src/app/services/Adddosageservice.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var AddDosageService = (function () {
    function AddDosageService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    AddDosageService.prototype.getDosageValue = function (DosageId) {
        var body = JSON.stringify({ Id: DosageId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllUnitValues", options)
            .map(function (res) { return res.json(); });
    };
    AddDosageService.prototype.addunit = function (unitname, unitvalue) {
        var body = JSON.stringify({ UnitName: unitname, UnitSymbol: unitvalue });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addUnit", body, options)
            .map(function (res) { return res.json(); });
    };
    AddDosageService.prototype.getAllUnitValues = function () {
        var body = JSON.stringify({});
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemistUnits", options)
            .map(function (res) { return res.json(); });
    };
    AddDosageService.prototype.addUnitValues = function (unitId, dosagevalue) {
        var body = JSON.stringify({ DosageAndSizesId: unitId, Value: dosagevalue });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addUnitValue", body, options)
            .map(function (res) { return res.json(); });
    };
    AddDosageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AddDosageService);
    return AddDosageService;
    var _a;
}());
exports.AddDosageService = AddDosageService;


/***/ },

/***/ "./src/app/services/ServiceUrl.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var ServiceUrl = (function () {
    /*    public baseUrl:string = "http://localhost:5000/";*/
    /* public baseUrl: string = "http://104.199.49.55:3000/";*/
    function ServiceUrl() {
        this.baseUrl = "https://pharmaappnew.azurewebsites.net/api/";
    }
    ServiceUrl.prototype.getUrl = function () {
        return this.baseUrl;
    };
    return ServiceUrl;
}());
exports.ServiceUrl = ServiceUrl;


/***/ }

});
//# sourceMappingURL=32.map