webpackJsonpac__name_([33],{

/***/ "./src/app/AddLogistic/AddLogistic.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var GetLaugisticService_1 = __webpack_require__("./src/app/services/GetLaugisticService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddLogisticComponent = (function () {
    function AddLogisticComponent(_getLaugisticService, router) {
        var _this = this;
        this._getLaugisticService = _getLaugisticService;
        this.GetLaugisticModelArray = [];
        this.GetLaugisticModeldata = [];
        this.router = router;
        this.username = undefined;
        this.password = undefined;
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this._getLaugisticService.GetLaugisticName().subscribe(function (response) {
                _this.GetLaugisticModelArray = response.data;
                jQuery("#snackbar").html(response.message);
                _this.myFunction();
            });
            console.log(this.GetLaugisticModelArray);
        }
    }
    AddLogisticComponent.prototype.GetLaugisticId = function (LougisticId) {
        this.Lougistic_Id = LougisticId;
    };
    AddLogisticComponent.prototype.AddLaugistic = function () {
        var _this = this;
        this._getLaugisticService.AddLaugisticData(this.Lougistic_Id, this.username, this.password, this.fullName).subscribe(function (response) {
            _this.GetLaugisticModeldata = response.data;
            jQuery("#snackbar").html(response.message);
            _this.myFunction();
            _this.username = undefined;
            _this.password = undefined;
            _this.fullName = undefined;
        });
        console.log(this.GetLaugisticModeldata);
    };
    AddLogisticComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    AddLogisticComponent = __decorate([
        core_1.Component({
            selector: 'AddLogistic',
            styles: [__webpack_require__("./src/app/AddLogistic/AddLogistic.style.scss")],
            template: __webpack_require__("./src/app/AddLogistic/AddLogistic.template.html"),
            providers: [GetLaugisticService_1.GetLaugisticService],
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'login-page app'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof GetLaugisticService_1.GetLaugisticService !== 'undefined' && GetLaugisticService_1.GetLaugisticService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], AddLogisticComponent);
    return AddLogisticComponent;
    var _a, _b;
}());
exports.AddLogisticComponent = AddLogisticComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/AddLogistic/AddLogistic.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddLogistic_component_1 = __webpack_require__("./src/app/AddLogistic/AddLogistic.component.ts");
exports.routes = [
    { path: '', component: AddLogistic_component_1.AddLogisticComponent, pathMatch: 'full' }
];
var AddLogisticModule = (function () {
    function AddLogisticModule() {
    }
    AddLogisticModule.routes = exports.routes;
    AddLogisticModule = __decorate([
        core_1.NgModule({
            declarations: [
                AddLogistic_component_1.AddLogisticComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AddLogisticModule);
    return AddLogisticModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddLogisticModule;


/***/ },

/***/ "./src/app/AddLogistic/AddLogistic.style.scss":
/***/ function(module, exports) {

module.exports = "/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#Laugistic {\n  width: 100%;\n  height: 30px;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n#Orders {\n  width: 100%;\n  height: 30px;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n.btn1 {\n  width: 293px !important;\n  color: white !important;\n  position: relative;\n  float: left;\n  right: -2px;\n  font-weight: bold;\n  text-align: center;\n  background-color: #1ec26b !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n"

/***/ },

/***/ "./src/app/AddLogistic/AddLogistic.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n        \r\n        <h5 class=\"widget-login-logo animated fadeInUp\">\r\n         \r\n        </h5>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;\">Add Logistics</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n              <select id=\"Laugistic\" (change)=\"GetLaugisticId($event.target.value)\"> \r\n                    <option disabled selected value> -- select an option -- </option>\r\n                    \r\n                    <option *ngFor=\"let LaugisticName of GetLaugisticModelArray\" value=\"{{LaugisticName.Id}}\">{{LaugisticName.Name}}</option>\r\n                  </select>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" id=\"exampleInputEmail\" placeholder=\"Enter Username\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" placeholder=\"Enter Password\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"fullName\" name=\"fullName\" type=\"text\" placeholder=\"Enter Full Name\">\r\n                </div>\r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                  <a class=\"btn1 btn-inverse btn-sm\"  (click)=\"AddLaugistic()\">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-1\">\r\n                <div class=\"col-md-6 push-md-6\">\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"abc-checkbox widget-login-info pull-xs-right\">\r\n                      <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\r\n                      <label for=\"checkbox1\">Keep me signed in </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                \r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      \r\n      </div>\r\n  \r\n      </div>\r\n  </main>\r\n \r\n</div>\r\n"

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
//# sourceMappingURL=33.map