webpackJsonpac__name_([32],{

/***/ "./src/app/GetCategorySubCategory/GetCategorySubCategory.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var GetCategoryAndSubcategoryService_1 = __webpack_require__("./src/app/services/GetCategoryAndSubcategoryService.ts");
var GetCategorySubCategoryComponent = (function () {
    function GetCategorySubCategoryComponent(_getChemistDataService, router) {
        var _this = this;
        this._getChemistDataService = _getChemistDataService;
        this.GetSubCategoryModelArray = [];
        this.AddCategoryServiceArray = [];
        this.GetCategoryByChemistIdModelArray = [];
        this.GetProductSubCategoryModelArray = [];
        this.GetProductCategoryModelArray = [];
        this.GetChemistDataModelArray = [];
        this.GetAllProductCategory = [];
        this.router = router;
        this.chemistId = localStorage.getItem("GetChemistId");
        this.ProductType = 100;
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this._getChemistDataService.GetChemistService().subscribe(function (response) {
                //  console.log(response);
                for (var i = 0; i < response.data.length; i++) {
                    console.log(response.data[i]);
                    _this.GetChemistDataModelArray.push(response.data[i]);
                    jQuery("#snackbar1").html("Show Pharmacacy Name  Successfully");
                    _this.myFunction();
                }
                console.log('Chemist array', _this.GetChemistDataModelArray);
            });
        }
    }
    GetCategorySubCategoryComponent.prototype.getCategory = function (PharmacistId) {
        var _this = this;
        console.log(PharmacistId);
        this.Pharmacist_Id = PharmacistId;
        this.AddCategoryServiceArray = [];
        this._getChemistDataService.getCateogry(PharmacistId).subscribe(function (response) {
            console.log(response.data);
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].ChemistId == PharmacistId)
                    _this.AddCategoryServiceArray.push(response.data[i]);
                console.log(_this.AddCategoryServiceArray);
            }
        });
    };
    GetCategorySubCategoryComponent.prototype.getCategoryId = function (CategoryID) {
        var _this = this;
        this.Category_Id = CategoryID;
        console.log(CategoryID);
        this.GetSubCategoryModelArray = [];
        this._getChemistDataService.GetSubCateogry().subscribe(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].ParentId == _this.Category_Id) {
                    _this.GetSubCategoryModelArray.push(response.data[i]);
                }
            }
            console.log('Sub Category :', _this.GetSubCategoryModelArray);
        });
    };
    GetCategorySubCategoryComponent.prototype.getSubCateogry = function () {
    };
    GetCategorySubCategoryComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar1");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    GetCategorySubCategoryComponent = __decorate([
        core_1.Component({
            selector: 'GetCategorySubCategory',
            providers: [GetCategoryAndSubcategoryService_1.GetCategoryAndSubcategoryService],
            styles: [__webpack_require__("./src/app/GetCategorySubCategory/GetCategorySubCategory.style.scss")],
            template: __webpack_require__("./src/app/GetCategorySubCategory/GetCategorySubCategory.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'chemist-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof GetCategoryAndSubcategoryService_1.GetCategoryAndSubcategoryService !== 'undefined' && GetCategoryAndSubcategoryService_1.GetCategoryAndSubcategoryService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], GetCategorySubCategoryComponent);
    return GetCategorySubCategoryComponent;
    var _a, _b;
}());
exports.GetCategorySubCategoryComponent = GetCategorySubCategoryComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/GetCategorySubCategory/GetCategorySubCategory.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var GetCategorySubCategory_component_1 = __webpack_require__("./src/app/GetCategorySubCategory/GetCategorySubCategory.component.ts");
__webpack_require__("./node_modules/jquery-locationpicker/src/locationpicker.jquery.js");
exports.routes = [
    { path: '', component: GetCategorySubCategory_component_1.GetCategorySubCategoryComponent, pathMatch: 'full' }
];
var GetCategorySubCategoryModule = (function () {
    function GetCategorySubCategoryModule() {
    }
    GetCategorySubCategoryModule.routes = exports.routes;
    GetCategorySubCategoryModule = __decorate([
        core_1.NgModule({
            declarations: [
                GetCategorySubCategory_component_1.GetCategorySubCategoryComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GetCategorySubCategoryModule);
    return GetCategorySubCategoryModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetCategorySubCategoryModule;


/***/ },

/***/ "./src/app/GetCategorySubCategory/GetCategorySubCategory.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.hide {\n  visibility: hidden; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#us7-lat {\n  width: 237px; }\n\n#us7-lon {\n  width: 237px; }\n\n#us7-radius {\n  width: 260px; }\n\n#us7-address {\n  width: 260px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.AddMedicine {\n  max-width: 650px;\n  min-width: 300px;\n  margin: 0 auto; }\n\n#MedicineCategory {\n  width: 50%;\n  height: 30px;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\nagm-map {\n  height: 300px; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/GetCategorySubCategory/GetCategorySubCategory.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar1\"></div>\r\n\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n\r\n      <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n       \r\n      </h5>\r\n      <section class=\"widget widget-login AddMedicine animated fadeInUp\">\r\n        <header>\r\n          <h3 style=\"text-transform:uppercase;\">Category SubCategory Name</h3>\r\n        </header>\r\n        <div class=\"widget-body\">\r\n          <p class=\"widget-login-info\">\r\n\r\n          </p>\r\n          <p class=\"widget-login-info\">\r\n\r\n          </p>\r\n          <form class=\"login-form mt-lg\">\r\n          \r\n            <div class=\"form-group\" id=\"SelectProductCategory\">\r\n\r\n              <label style=\"font-size: 12px;\">Select Pharmacy Name</label>\r\n\r\n              <select id=\"MedicineCategory\" (change)=\"getCategory($event.target.value)\">\r\n                <option disabled selected value> -- select an option -- </option>\r\n\r\n                <option *ngFor=\"let pharmacyName of GetChemistDataModelArray\" value=\"{{pharmacyName.ChemistId}}\">{{pharmacyName.Chemist.PharmacyName}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"container demo\">\r\n                \r\n                    \r\n                    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                \r\n                        <div class=\"panel panel-default\"  *ngFor=\" let row of AddCategoryServiceArray\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a (click)=\"getCategoryId(row.Id)\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{row.Id}}\" aria-expanded=\"true\" >\r\n                                        <i class=\"more-less glyphicon glyphicon-plus\"></i>\r\n                                        {{row.CategoryName}}\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapse{{row.Id}}\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n                                <div class=\"panel-body\" *ngFor=\"let row1 of GetSubCategoryModelArray\">\r\n                                    {{row1.CategoryName}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                \r\n                  \r\n                \r\n                \r\n                    </div><!-- panel-group -->\r\n                    \r\n                    \r\n                </div>\r\n                <!-- container -->\r\n            <div class=\"clearfix\">\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n          </form>\r\n        </div>\r\n      </section>\r\n\r\n    </div>\r\n  </main>\r\n\r\n\r\n\r\n</div>"

/***/ },

/***/ "./src/app/services/GetCategoryAndSubcategoryService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var GetCategoryAndSubcategoryService = (function () {
    function GetCategoryAndSubcategoryService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    GetCategoryAndSubcategoryService.prototype.GetSubCateogry = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllCategoriesAndSubCategories", options)
            .map(function (res) { return res.json(); });
    };
    GetCategoryAndSubcategoryService.prototype.getCateogry = function (chemistId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getCategoriesByChemistId?chemistId=" + chemistId, options)
            .map(function (res) { return res.json(); });
    };
    GetCategoryAndSubcategoryService.prototype.GetChemistService = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemists?webRequest=1", options)
            .map(function (res) { return res.json(); });
    };
    GetCategoryAndSubcategoryService.prototype.GetChemistCategoryService = function (ChemistId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getCategoriesByChemistId?chemistId=" + ChemistId, options)
            .map(function (res) { return res.json(); });
    };
    GetCategoryAndSubcategoryService.prototype.GetProductCategoryService = function (ChemistId, ProductType) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllProductsByChemistId?ChemistId=" + ChemistId + "&ProductType=" + ProductType, options)
            .map(function (res) { return res.json(); });
    };
    GetCategoryAndSubcategoryService.prototype.GetProducSubCategoryService = function (ChemistId, categoryId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getSubCategoriesByChemistIdByCategoryId?chemistId=" + ChemistId + "&categoryId=" + categoryId, options)
            .map(function (res) { return res.json(); });
    };
    GetCategoryAndSubcategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], GetCategoryAndSubcategoryService);
    return GetCategoryAndSubcategoryService;
    var _a;
}());
exports.GetCategoryAndSubcategoryService = GetCategoryAndSubcategoryService;


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