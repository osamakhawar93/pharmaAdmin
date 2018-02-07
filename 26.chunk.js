webpackJsonpac__name_([26],{

/***/ "./src/app/AddArea/AddArea.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var GetChemistDataService_1 = __webpack_require__("./src/app/services/GetChemistDataService.ts");
var AddAreaService_1 = __webpack_require__("./src/app/services/AddAreaService.ts");
var AddAreaComponent = (function () {
    function AddAreaComponent(_getChemistDataService, _AddCityAreaService, router) {
        var _this = this;
        this._getChemistDataService = _getChemistDataService;
        this._AddCityAreaService = _AddCityAreaService;
        this.AllChemistDataModelCity = [];
        this.AllChemistDataModel = [];
        this.SingleChemistModel = [];
        this.GetAreaModelArray = [];
        this.router = router;
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this._getChemistDataService.GetAllCitiesService().subscribe(function (response) {
                _this.AllChemistDataModelCity = response.data;
            });
            console.log('City Name', this.AllChemistDataModelCity);
        }
    }
    AddAreaComponent.prototype.getCityid = function (CityId) {
        this.getCity_Id = CityId;
        console.log(this.getCity_Id);
    };
    AddAreaComponent.prototype.getAreaResponse = function () {
        var _this = this;
        console.log(this.getCity_Id);
        this._AddCityAreaService.addArea(this.getCity_Id, this.Area).subscribe(function (response) {
            console.log(response.data);
            _this.GetAreaModelArray.push(response.data);
            _this.Area = undefined;
            jQuery("#snackbar").html("Area Inserted Successfully");
            _this.myFunction();
        });
    };
    AddAreaComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    AddAreaComponent = __decorate([
        core_1.Component({
            selector: 'AddArea',
            providers: [GetChemistDataService_1.GetChemistDataService, AddAreaService_1.AddAreaService],
            styles: [__webpack_require__("./src/app/AddArea/AddArea.style.scss")],
            template: __webpack_require__("./src/app/AddArea/AddArea.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'chemist-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof GetChemistDataService_1.GetChemistDataService !== 'undefined' && GetChemistDataService_1.GetChemistDataService) === 'function' && _a) || Object, (typeof (_b = typeof AddAreaService_1.AddAreaService !== 'undefined' && AddAreaService_1.AddAreaService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
    ], AddAreaComponent);
    return AddAreaComponent;
    var _a, _b, _c;
}());
exports.AddAreaComponent = AddAreaComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/AddArea/AddArea.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddArea_component_1 = __webpack_require__("./src/app/AddArea/AddArea.component.ts");
/* import "jquery-locationpicker/src/locationpicker.jquery"; */
exports.routes = [
    { path: '', component: AddArea_component_1.AddAreaComponent, pathMatch: 'full' }
];
var AddAreaModule = (function () {
    function AddAreaModule() {
    }
    AddAreaModule.routes = exports.routes;
    AddAreaModule = __decorate([
        core_1.NgModule({
            declarations: [
                AddArea_component_1.AddAreaComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AddAreaModule);
    return AddAreaModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddAreaModule;


/***/ },

/***/ "./src/app/AddArea/AddArea.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.hide {\n  visibility: hidden; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n.iconimage {\n  text-align: center;\n  margin-bottom: 15px; }\n\n#us7-lat {\n  width: 237px; }\n\n#us7-lon {\n  width: 237px; }\n\n#us7-radius {\n  width: 260px; }\n\n#us7-address {\n  width: 260px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n#CityName {\n  width: 100%;\n  height: 30px;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n.AddMedicine {\n  max-width: 888px;\n  min-width: 300px;\n  margin: 0 auto; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\nagm-map {\n  height: 300px; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/AddArea/AddArea.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"iconimage\">\r\n    <img src=\"assets/img/AddArea.png\">\r\n    </div>\r\n    <div class=\"row\">\r\n  \r\n        <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n      \r\n        </h5>\r\n        <section class=\"widget widget-login AddMedicine animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;\">Add Area</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n           \r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n                <select id=\"CityName\"(change)=\"getCityid($event.target.value)\">\r\n                    <option disabled selected value> -- select an option -- </option>\r\n                \r\n             <option *ngFor=\"let pharmacyName of AllChemistDataModelCity\" value=\"{{pharmacyName.Id}}\">{{pharmacyName.Name}}</option>\r\n               </select>\r\n              \r\n            \r\n            \r\n               <div class=\"form-group\">\r\n                  <input class=\"form-control\" id=\"pswd\"  required [(ngModel)]=\"Area\" name=\"Area\" type=\"text\" placeholder=\"Area\">\r\n                </div>  \r\n               \r\n             \r\n               \r\n             \r\n              <div class=\"clearfix\">\r\n                  <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                  <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                    <a class=\"btn addbtn btn-inverse btn-sm\" (click)=\"getAreaResponse()\">Add</a>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n              \r\n               </form>\r\n              </div>\r\n             </section>\r\n     \r\n        </div>\r\n  </main>\r\n      </div>\r\n    \r\n  \r\n  \r\n\r\n"

/***/ },

/***/ "./src/app/services/AddAreaService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var AddAreaService = (function () {
    function AddAreaService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    AddAreaService.prototype.addArea = function (cityId, AreaName) {
        var body = JSON.stringify({ CityId: cityId, AreaName: AreaName });
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "City/addArea", body, options)
            .map(function (res) { return res.json(); });
    };
    AddAreaService.prototype.getAreaName = function (CityId) {
        var body = JSON.stringify({});
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "City/getAllAreasByCityId?CityId=" + CityId, options)
            .map(function (res) { return res.json(); });
    };
    AddAreaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AddAreaService);
    return AddAreaService;
    var _a;
}());
exports.AddAreaService = AddAreaService;


/***/ },

/***/ "./src/app/services/GetChemistDataService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var GetChemistDataService = (function () {
    function GetChemistDataService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    GetChemistDataService.prototype.GetRegisteredChemistService = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemists?webRequest=1", options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    GetChemistDataService.prototype.getSubCategoryService = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getSubCategoriesByChemistIdByCategoryId?chemistId=1&categoryId=1", options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    GetChemistDataService.prototype.getDataByAreaIdService = function (AreadId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getChemistsListByArea?areaId" + AreadId, options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    GetChemistDataService.prototype.GetChemistService = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getListOfPendingChemists", options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    GetChemistDataService.prototype.GetAllCitiesService = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "City/getAllCities", options)
            .map(function (res) { return res.json(); });
    };
    GetChemistDataService.prototype.getDataByCities = function (cityId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getChemistsListByCity?CityId=" + cityId, options)
            .map(function (res) { return res.json(); });
    };
    GetChemistDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], GetChemistDataService);
    return GetChemistDataService;
    var _a;
}());
exports.GetChemistDataService = GetChemistDataService;


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
//# sourceMappingURL=26.map