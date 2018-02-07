webpackJsonpac__name_([15],{

/***/ "./src/app/GetProduct/GetProduct.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddMedicineService_1 = __webpack_require__("./src/app/services/AddMedicineService.ts");
var Adddosageservice_1 = __webpack_require__("./src/app/services/Adddosageservice.ts");
var GetAllProductService_1 = __webpack_require__("./src/app/services/GetAllProductService.ts");
var GetCategoryAndSubcategoryService_1 = __webpack_require__("./src/app/services/GetCategoryAndSubcategoryService.ts");
var GetProductComponent = (function () {
    function GetProductComponent(_getChemistDataService, _GetProductService, router, _addDosageService) {
        var _this = this;
        this._getChemistDataService = _getChemistDataService;
        this._GetProductService = _GetProductService;
        this._addDosageService = _addDosageService;
        this.GetAllProductModelArray = [];
        this.GetAllProductModelArraySingle = [];
        this.GetAllProductModelArrayDosage = [];
        this.GetAllProductDosageValue = [];
        this.GetChemistDataModelArray = [];
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this.router = router;
            this.ProductType = 100;
            this._getChemistDataService.GetChemistService().subscribe(function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    _this.GetChemistDataModelArray.push(response.data[i]);
                }
                jQuery("#snackbar1").html("Show Pharmacacy Name  Successfully");
                _this.myFunction();
                console.log('Chemist array', _this.GetChemistDataModelArray);
            });
        }
    }
    GetProductComponent.prototype.getProductName = function (PharmacyId) {
        var _this = this;
        console.log("Inside");
        this.ChemistId = PharmacyId;
        console.log(this.ChemistId);
        this._GetProductService.GetPharmacyNameService(this.ChemistId, this.ProductType).subscribe(function (response) {
            console.log(response.data);
            _this.GetAllProductModelArraySingle = response.data;
            console.log('chemistName', _this.GetAllProductModelArraySingle);
        });
        this._GetProductService.getAllMedicineName(this.ChemistId, this.ProductType).subscribe(function (response) {
            console.log(_this.GetAllProductModelArrayDosage);
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].Id == PharmacyId) {
                    _this.GetAllProductModelArrayDosage = response.data;
                }
                else {
                }
                _this.GetAllProductModelArrayDosage = [];
            }
        });
    };
    GetProductComponent.prototype.getSubCategoryName = function () {
    };
    GetProductComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar1");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    GetProductComponent = __decorate([
        core_1.Component({
            selector: 'GetProduct',
            providers: [GetCategoryAndSubcategoryService_1.GetCategoryAndSubcategoryService, AddMedicineService_1.AddMedicineService, Adddosageservice_1.AddDosageService, GetAllProductService_1.GetAllProductService],
            styles: [__webpack_require__("./src/app/GetProduct/GetProduct.style.scss")],
            template: __webpack_require__("./src/app/GetProduct/GetProduct.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'dosage-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof GetCategoryAndSubcategoryService_1.GetCategoryAndSubcategoryService !== 'undefined' && GetCategoryAndSubcategoryService_1.GetCategoryAndSubcategoryService) === 'function' && _a) || Object, (typeof (_b = typeof GetAllProductService_1.GetAllProductService !== 'undefined' && GetAllProductService_1.GetAllProductService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof Adddosageservice_1.AddDosageService !== 'undefined' && Adddosageservice_1.AddDosageService) === 'function' && _d) || Object])
    ], GetProductComponent);
    return GetProductComponent;
    var _a, _b, _c, _d;
}());
exports.GetProductComponent = GetProductComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/GetProduct/GetProduct.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var GetProduct_component_1 = __webpack_require__("./src/app/GetProduct/GetProduct.component.ts");
exports.routes = [
    { path: '', component: GetProduct_component_1.GetProductComponent, pathMatch: 'full' }
];
var GetProductModule = (function () {
    function GetProductModule() {
    }
    GetProductModule.routes = exports.routes;
    GetProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                GetProduct_component_1.GetProductComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GetProductModule);
    return GetProductModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetProductModule;


/***/ },

/***/ "./src/app/GetProduct/GetProduct.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n.iconimage {\n  text-align: center;\n  margin-bottom: 15px; }\n\n#MedicineCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 29px;\n  margin-bottom: 14px; }\n\n.AddMeasurement {\n  position: relative;\n  color: white;\n  text-align: center;\n  background-color: grey;\n  float: left; }\n\n#AddMeasurement button {\n  background: none;\n  border: 1px solid #ccc;\n  padding: 8px;\n  font-weight: bold;\n  width: auto;\n  display: inline-block;\n  margin-right: 10px;\n  margin-top: 10px; }\n\n.addbtn:hover {\n  color: white !important; }\n\n#MedicineDosage {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 37px; }\n\n#dosageValue {\n  margin-bottom: 12px;\n  border: 1px solid black;\n  padding-top: 12px;\n  padding-bottom: 12px; }\n\n#SelectDosageValue {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 126px;\n  margin-left: 2px; }\n\n#MedicineMeasurement {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 158px;\n  margin-left: 11px;\n  margin-top: -5px; }\n\n.addbtnMeasurement {\n  background-color: white;\n  width: 124px !important;\n  height: 30px;\n  margin-left: 22px; }\n\n#MedicineSubCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 167px;\n  margin-left: 25px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n#SelectMeasurement {\n  display: inline-flex;\n  margin-bottom: 3px; }\n\n#SelectDosage {\n  display: inline-block; }\n\n#SelectCategory {\n  display: inline-flex; }\n\n#SelectSubCategory {\n  display: inline-flex; }\n\n.AddMedicine {\n  max-width: 600px;\n  min-width: 300px;\n  margin: 0 auto; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n#ProductName {\n  width: 100%;\n  height: 30px;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/GetProduct/GetProduct.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n      <div class=\"iconimage\">\r\n          <img src=\"assets/img/listProduct.png\">\r\n          </div>\r\n    <div class=\"row\">\r\n  \r\n        <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n         \r\n        </h5>\r\n        <section class=\"widget widget-login AddMedicine animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;\">Products</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n           \r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n                <select id=\"ProductName\"(change)=\"getProductName($event.target.value)\">\r\n                    <option disabled selected value> -- select an option -- </option>\r\n                \r\n                    <option *ngFor=\"let MedicineName of GetChemistDataModelArray\" value=\"{{MedicineName.ChemistId}}\">{{MedicineName.Chemist.PharmacyName}}</option>\r\n\r\n                  </select>\r\n        \r\n              <table class=\"table table-hover\">\r\n                  \r\n                      <tr>\r\n                      \r\n                          <td>Dosage</td>\r\n                          <td>Value</td>\r\n                          <td>Measurement Name</td>\r\n                          <td>Quantity</td>\r\n                          <td>Price</td>\r\n                      </tr>\r\n                     \r\n                    <ng-container *ngFor=\" let row1 of GetAllProductModelArraySingle\">\r\n                     \r\n                       <p style=\"border: 1px solid black;font-weight: 600; text-align: center;\">{{row1.Name}}</p>\r\n                        <tr *ngFor=\"let row2 of row1.WebDosageAndValuesDTOList\">\r\n                        <td>{{row2.DosageName}}</td>\r\n                        <td>{{row2.DosageValue}}</td>\r\n                        <td>{{row2.MeasurementName}}</td>\r\n                        <td>{{row2.Quantity}}</td>\r\n                        <td>{{row2.Price}}</td>\r\n                      </tr>\r\n\r\n                    </ng-container>\r\n                  \r\n                     \r\n                  \r\n                  \r\n              </table> \r\n              <div class=\"clearfix\">\r\n                  \r\n                </div>\r\n\r\n\r\n\r\n\r\n              \r\n               </form>\r\n              </div>\r\n             </section>\r\n     \r\n        </div>\r\n  </main>\r\n      </div>\r\n    \r\n  \r\n  \r\n\r\n"

/***/ },

/***/ "./src/app/services/AddMedicineService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var AddMedicineService = (function () {
    function AddMedicineService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    AddMedicineService.prototype.getAllCategoryValues = function (categoryId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getCategoriesByChemistId?chemistId=" + categoryId, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getAllSubCategoryValues = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllCategoriesAndSubCategories", options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getAllDosageValues = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemistUnits", options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getSubcategoryByCategoryID = function (chemistId, categoryId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getSubCategoriesByChemistIdByCategoryId?chemistId=" + chemistId + "&categoryId=" + categoryId, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getAllMeasurementValues = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemistMeasurements", options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.AddMedicineAndDosageService = function (SingleMedicineModel, PricePerQuantityModel) {
        var body = JSON.stringify({ PictureURL: SingleMedicineModel.Url, ChemistId: SingleMedicineModel.ChemistId, ManufacturedBy: SingleMedicineModel.ManufacturedBy, DosageSizeAndValues: SingleMedicineModel.DosageSizeAndValues, Name: SingleMedicineModel.MedicineName, MeasurementIds: SingleMedicineModel.MeasurementModel, SubCategoryId: SingleMedicineModel.SubCategoryId, AddProductDaosageAndSizeMappingDTO: PricePerQuantityModel });
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addProduct", body, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.AddImage = function (file) {
        var formData = new FormData();
        formData.append("file", file, file.name);
        var options = new http_1.RequestOptions({ method: 'post' });
        return this.http.post(this.urlService.baseUrl + "product/uploadProductImage", formData, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AddMedicineService);
    return AddMedicineService;
    var _a;
}());
exports.AddMedicineService = AddMedicineService;


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

/***/ "./src/app/services/GetAllProductService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var GetAllProductService = (function () {
    function GetAllProductService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    GetAllProductService.prototype.getAllMedicineName = function (ChemistId, ProductType) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllProductsByChemistId?ChemistId=" + ChemistId + "&ProductType=" + ProductType, options)
            .map(function (res) { return res.json(); });
    };
    GetAllProductService.prototype.GetPharmacyNameService = function (ChemistId, ProductType) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllProductsByChemistId?ChemistId=" + ChemistId + "&ProductType=" + ProductType, options)
            .map(function (res) { return res.json(); });
    };
    GetAllProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], GetAllProductService);
    return GetAllProductService;
    var _a;
}());
exports.GetAllProductService = GetAllProductService;


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
//# sourceMappingURL=15.map