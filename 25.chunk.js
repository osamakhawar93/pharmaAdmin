webpackJsonpac__name_([25],{

/***/ "./src/app/AddSlot/AddSlot.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var GetLaugisticService_1 = __webpack_require__("./src/app/services/GetLaugisticService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddSlotService_1 = __webpack_require__("./src/app/services/AddSlotService.ts");
var AddSlotComponent = (function () {
    function AddSlotComponent(_AddSlotService, router) {
        this._AddSlotService = _AddSlotService;
        this.GetLaugisticModelArray = [];
        this.GetLaugisticModeldata = [];
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this.router = router;
            this.username = undefined;
            this.password = undefined;
        }
    }
    AddSlotComponent.prototype.GetLaugisticId = function (LougisticId) {
        this.Lougistic_Id = LougisticId;
    };
    AddSlotComponent.prototype.AddSlot = function () {
        var _this = this;
        this._AddSlotService.addUnitValues(this.StartTime, this.EndingTime).subscribe(function (response) {
            //  this.GetLaugisticModeldata = response.data;
            console.log(response);
            jQuery("#snackbar").html("Add Slot Successfully");
            _this.myFunction();
            _this.StartTime = undefined;
            _this.EndingTime = undefined;
            _this.fullName = undefined;
        });
        console.log(this.GetLaugisticModeldata);
    };
    AddSlotComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    AddSlotComponent = __decorate([
        core_1.Component({
            selector: 'AddSlot',
            styles: [__webpack_require__("./src/app/AddSlot/AddSlot.style.scss")],
            template: __webpack_require__("./src/app/AddSlot/AddSlot.template.html"),
            providers: [AddSlotService_1.AddSlotService, GetLaugisticService_1.GetLaugisticService],
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'login-page app'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AddSlotService_1.AddSlotService !== 'undefined' && AddSlotService_1.AddSlotService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], AddSlotComponent);
    return AddSlotComponent;
    var _a, _b;
}());
exports.AddSlotComponent = AddSlotComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/AddSlot/AddSlot.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddSlot_component_1 = __webpack_require__("./src/app/AddSlot/AddSlot.component.ts");
/* import "jquery-locationpicker/src/locationpicker.jquery"; */
exports.routes = [
    { path: '', component: AddSlot_component_1.AddSlotComponent, pathMatch: 'full' }
];
var AddSlotModule = (function () {
    function AddSlotModule() {
    }
    AddSlotModule.routes = exports.routes;
    AddSlotModule = __decorate([
        core_1.NgModule({
            declarations: [
                AddSlot_component_1.AddSlotComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AddSlotModule);
    return AddSlotModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddSlotModule;


/***/ },

/***/ "./src/app/AddSlot/AddSlot.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#PharmacyName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.btn {\n  width: 100% !important; }\n\n#us7-lat {\n  width: 237px; }\n\n#us7-lon {\n  width: 237px; }\n\n#us7-radius {\n  width: 260px; }\n\n#us7-address {\n  width: 260px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  width: 291px !important;\n  color: white !important;\n  position: relative;\n  float: left;\n  right: -2px;\n  font-weight: bold;\n  text-align: center;\n  background-color: #1ec26b !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\nagm-map {\n  height: 300px; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/AddSlot/AddSlot.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n        \r\n        <h5 class=\"widget-login-logo animated fadeInUp\">\r\n      \r\n        </h5>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;\">Add Time Slot</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n              \r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"StartTime\" name=\"StartTime\" id=\"exampleInputEmail\" placeholder=\"Enter Start Time\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"EndingTime\" name=\"EndingTime\" type=\"text\" placeholder=\"Enter Ending Time\">\r\n              </div>\r\n            \r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                  <a class=\"addbtn btn-inverse btn-sm\"  (click)=\"AddSlot()\">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-1\">\r\n                <div class=\"col-md-6 push-md-6\">\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"abc-checkbox widget-login-info pull-xs-right\">\r\n                      <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\r\n                      <label for=\"checkbox1\">Keep me signed in </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                \r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      \r\n      </div>\r\n  \r\n      </div>\r\n  </main>\r\n \r\n</div>\r\n"

/***/ },

/***/ "./src/app/services/AddSlotService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var AddSlotService = (function () {
    function AddSlotService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    AddSlotService.prototype.addUnitValues = function (unitId, dosagevalue) {
        var body = JSON.stringify({ StartingTime: unitId, EndingTime: dosagevalue });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Admin/addSlot", body, options)
            .map(function (res) { return res.json(); });
    };
    AddSlotService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AddSlotService);
    return AddSlotService;
    var _a;
}());
exports.AddSlotService = AddSlotService;


/***/ },

/***/ "./src/app/services/GetLaugisticService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var GetLaugisticService = (function () {
    function GetLaugisticService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    GetLaugisticService.prototype.GetLaugisticName = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Logistics/getAllLogistics", options)
            .map(function (res) { return res.json(); });
    };
    GetLaugisticService.prototype.AddLaugisticData = function (Lougistic_Id, username, password, fullName) {
        var body = JSON.stringify({ LogisticsId: Lougistic_Id, UserName: username, Password: password, FullName: fullName });
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Logistics/addLogisticUser", body, options)
            .map(function (res) { return res.json(); });
    };
    GetLaugisticService.prototype.GetAllCitiesService = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "City/getAllCities", options)
            .map(function (res) { return res.json(); });
    };
    GetLaugisticService.prototype.getDataByCities = function (cityId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getChemistsListByCity?CityId=" + cityId, options)
            .map(function (res) { return res.json(); });
    };
    GetLaugisticService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], GetLaugisticService);
    return GetLaugisticService;
    var _a;
}());
exports.GetLaugisticService = GetLaugisticService;


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
//# sourceMappingURL=25.map