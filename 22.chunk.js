webpackJsonpac__name_([22],{

/***/ "./src/app/GetChemist/GetChemist.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var GetChemistDataService_1 = __webpack_require__("./src/app/services/GetChemistDataService.ts");
var GetPopularChemistService_1 = __webpack_require__("./src/app/services/GetPopularChemistService.ts");
var GetChemistComponent = (function () {
    function GetChemistComponent(_getPopularChemistService, _getChemistDataService, router) {
        var _this = this;
        this._getPopularChemistService = _getPopularChemistService;
        this._getChemistDataService = _getChemistDataService;
        this.AllChemistDataModelCity = [];
        this.AllChemistDataModel = [];
        this.SingleChemistModel = [];
        this.GetPopularChemistModelArray = [];
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this.router = router;
            this._getChemistDataService.GetAllCitiesService().subscribe(function (response) {
                _this.AllChemistDataModelCity = response.data;
            });
            this.getPoppularChemists();
        }
    }
    GetChemistComponent.prototype.getPoppularChemists = function () {
        var _this = this;
        this._getPopularChemistService.GetPopularChemist().subscribe(function (response) {
            _this.GetPopularChemistModelArray = response.data;
        });
    };
    GetChemistComponent.prototype.getCityName = function (CityId) {
        var _this = this;
        this.getCityId = CityId;
        var obj = this.AllChemistDataModel.find(function (x) { return x.Chemist.CityId == _this.getCityId; });
        this.ChemistId = obj;
        this._getChemistDataService.GetRegisteredChemistService().subscribe(function (response) {
            _this.AllChemistDataModel = [];
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].Chemist.CityId == _this.getCityId) {
                    _this.AllChemistDataModel.push(response.data[i]);
                }
            }
        });
    };
    GetChemistComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    GetChemistComponent = __decorate([
        core_1.Component({
            selector: 'GetChemist',
            providers: [GetChemistDataService_1.GetChemistDataService, GetPopularChemistService_1.GetPopularChemistService],
            styles: [__webpack_require__("./src/app/GetChemist/GetChemist.style.scss")],
            template: __webpack_require__("./src/app/GetChemist/GetChemist.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'chemist-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof GetPopularChemistService_1.GetPopularChemistService !== 'undefined' && GetPopularChemistService_1.GetPopularChemistService) === 'function' && _a) || Object, (typeof (_b = typeof GetChemistDataService_1.GetChemistDataService !== 'undefined' && GetChemistDataService_1.GetChemistDataService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
    ], GetChemistComponent);
    return GetChemistComponent;
    var _a, _b, _c;
}());
exports.GetChemistComponent = GetChemistComponent;


/***/ },

/***/ "./src/app/GetChemist/GetChemist.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var GetChemist_component_1 = __webpack_require__("./src/app/GetChemist/GetChemist.component.ts");
/* import "jquery-locationpicker/src/locationpicker.jquery"; */
exports.routes = [
    { path: '', component: GetChemist_component_1.GetChemistComponent, pathMatch: 'full' }
];
var GetChemistModule = (function () {
    function GetChemistModule() {
    }
    GetChemistModule.routes = exports.routes;
    GetChemistModule = __decorate([
        core_1.NgModule({
            declarations: [
                GetChemist_component_1.GetChemistComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GetChemistModule);
    return GetChemistModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetChemistModule;


/***/ },

/***/ "./src/app/GetChemist/GetChemist.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.hide {\n  visibility: hidden; }\n\n.iconimage {\n  text-align: center;\n  height: 108px; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#us7-lat {\n  width: 237px; }\n\n.table2 tbody td {\n  text-align: left;\n  font-weight: 500; }\n\n#us7-lon {\n  width: 237px; }\n\n#us7-radius {\n  width: 260px; }\n\n#us7-address {\n  width: 260px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n#CityName {\n  width: 100%;\n  height: 30px;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n.AddMedicine {\n  width: 100%;\n  margin: 0 auto; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 4%; }\n\n#CityName {\n  width: 40%;\n  font-weight: bold;\n  color: #898989;\n  background: transparent;\n  margin-bottom: 20px;\n  text-align: left; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\nagm-map {\n  height: 300px; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/GetChemist/GetChemist.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n\r\n<div class=\"container\">\r\n\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n\r\n\r\n\r\n      <div class=\"col-md-6 col-lg-6 col-sm-6\">\r\n\r\n          <section class=\"AddMedicine animated fadeInUp\">\r\n              \r\n              \r\n              \r\n              \r\n                      <h3 class=\"transactions\"> Nearby Chemist</h3>\r\n              \r\n              \r\n                      <select id=\"CityName\" (change)=\"getCityName($event.target.value)\">\r\n                        <option disabled selected> -- select an option -- </option>\r\n              \r\n                        <option *ngFor=\"let pharmacyName of AllChemistDataModelCity\" value=\"{{pharmacyName.Id}}\">{{pharmacyName.Name}}</option>\r\n                      </select>\r\n              \r\n              \r\n              \r\n              \r\n              \r\n              \r\n                      <div class=\"table-responsive\">\r\n                        <table class=\"table table2\">\r\n              \r\n              \r\n                          <thead>\r\n                            <th>Pharmacy Name</th>\r\n                            <th>Email</th>\r\n                            <th>Username</th>\r\n                            <th>Address</th>\r\n                            <th>City</th>\r\n                            <th>Mobile</th>\r\n                          </thead>\r\n                          <tbody>\r\n              \r\n              \r\n                            <tr *ngFor=\" let row1 of AllChemistDataModel\">\r\n              \r\n                              <td>{{row1.Chemist.PharmacyName}}</td>\r\n                              <td>{{row1.Email}}</td>\r\n                              <td>{{row1.UserName}}</td>\r\n                              <td>{{row1.Chemist.Address}}</td>\r\n                              <td>{{row1.Chemist.City.Name}}</td>\r\n                              <td>{{row1.MobileNumber}}</td>\r\n              \r\n              \r\n                            </tr>\r\n              \r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n              \r\n              \r\n              \r\n              \r\n              \r\n              \r\n                    </section>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-6 col-lg-6 col-sm-6\">\r\n\r\n\r\n          <section class=\"AddMedicine animated fadeInUp\">\r\n              \r\n              \r\n              \r\n              \r\n                      <h3 class=\"transactions\"> Popular Chemist</h3>\r\n              \r\n              \r\n                \r\n              \r\n              \r\n              \r\n              \r\n              \r\n              \r\n                      <div class=\"table-responsive\">\r\n                        <table class=\"table table2\">\r\n              \r\n              \r\n                          <thead>\r\n                            <th>Pharmacy Name</th>\r\n                            <th>City</th>\r\n                            <th>Address</th>\r\n                          </thead>\r\n                          <tbody>\r\n              \r\n              \r\n                            <tr *ngFor=\" let row1 of GetPopularChemistModelArray\">\r\n              \r\n                                <td>{{row1.Chemist.PharmacyName}}</td>\r\n                                <td>{{row1.Chemist.Address}}</td>\r\n                                <td>{{row1.Chemist.City.Name}}</td>\r\n              \r\n              \r\n                            </tr>\r\n              \r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n              \r\n              \r\n              \r\n              \r\n              \r\n              \r\n                    </section>\r\n\r\n        \r\n\r\n          \r\n      </div>\r\n\r\n\r\n    \r\n\r\n    </div>\r\n  </main>\r\n</div>"

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

/***/ "./src/app/services/GetPopularChemistService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var GetPopularChemistService = (function () {
    function GetPopularChemistService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    GetPopularChemistService.prototype.GetPopularChemist = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getPopularChemists", options)
            .map(function (res) { return res.json(); });
    };
    GetPopularChemistService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], GetPopularChemistService);
    return GetPopularChemistService;
    var _a;
}());
exports.GetPopularChemistService = GetPopularChemistService;


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
//# sourceMappingURL=22.map