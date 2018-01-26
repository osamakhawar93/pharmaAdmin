webpackJsonpac__name_([28],{

/***/ "./src/app/chemist/chemist.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddCategoryService_1 = __webpack_require__("./src/app/services/AddCategoryService.ts");
var ChemistComponent = (function () {
    function ChemistComponent(_addCategoryService, router) {
        var _this = this;
        this._addCategoryService = _addCategoryService;
        this.catergories = [];
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this.router = router;
            this.chemistId = localStorage.getItem("GetChemistId");
            this._addCategoryService.getCateogry(this.chemistId).subscribe(function (response) {
                _this.catergories = response.data;
            });
        }
    }
    ChemistComponent.prototype.addCategoryValues = function () {
        var _this = this;
        this.chemistId = localStorage.getItem("GetChemistId");
        this.parentId = 0;
        this._addCategoryService.addCategory(this.chemistId, this.categoryName, this.parentId).subscribe(function (response) {
            jQuery("#snackbar1").html(response.message);
            _this.myFunction();
            if (response.message == "SUCCESS") {
                _this._addCategoryService.getCateogry(_this.chemistId).subscribe(function (response) {
                    //  console.log(response);
                    _this.catergories = response.data;
                });
                _this.categoryName = undefined;
            }
            else {
                jQuery("#snackbar1").html("Not A Valid Category");
                _this.myFunction();
            }
        });
    };
    ChemistComponent.prototype.addSubcateogry = function () {
        var _this = this;
        this.chemistId = localStorage.getItem("GetChemistId");
        this.parentId = 1;
        if (this.chemistId != undefined && this.parentId != undefined && this.subCategoryName != undefined) {
            this._addCategoryService.addSubcategory(this.chemistId, this.subCategoryName, this.categoryId).subscribe(function (response) {
                jQuery("#snackbar1").html(response.message);
                _this.myFunction();
            });
            this.subCategoryName = undefined;
        }
        else {
            jQuery("#snackbar1").html("Invalid Credenntials");
            this.myFunction();
        }
    };
    ChemistComponent.prototype.searchResult = function () {
        this.router.navigate(['/app', 'extra', 'search']);
    };
    ChemistComponent.prototype.getCategoryId = function (chemistid) {
        this.chemistId = chemistid;
    };
    ChemistComponent.prototype.getCategory = function (categoryId) {
        this.categoryId = categoryId;
    };
    ChemistComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar1");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    ChemistComponent = __decorate([
        core_1.Component({
            selector: 'chemist',
            providers: [AddCategoryService_1.AddCategoryService],
            styles: [__webpack_require__("./src/app/chemist/chemist.style.scss")],
            template: __webpack_require__("./src/app/chemist/chemist.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'chemist-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AddCategoryService_1.AddCategoryService !== 'undefined' && AddCategoryService_1.AddCategoryService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], ChemistComponent);
    return ChemistComponent;
    var _a, _b;
}());
exports.ChemistComponent = ChemistComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/chemist/chemist.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var chemist_component_1 = __webpack_require__("./src/app/chemist/chemist.component.ts");
exports.routes = [
    { path: '', component: chemist_component_1.ChemistComponent, pathMatch: 'full' }
];
var ChemistModule = (function () {
    function ChemistModule() {
    }
    ChemistModule.routes = exports.routes;
    ChemistModule = __decorate([
        core_1.NgModule({
            declarations: [
                chemist_component_1.ChemistComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ChemistModule);
    return ChemistModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChemistModule;


/***/ },

/***/ "./src/app/chemist/chemist.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.btn-inverse:hover {\n  background-color: #1ec26b; }\n\n.addbtn {\n  border: 0;\n  width: 240px !important;\n  color: white !important;\n  background-color: #1ec26b;\n  font-size: 15px;\n  font-weight: bold; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/chemist/chemist.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar1\"></div>\r\n<div class=\"row\">\r\n<div class=\"col-md-6\">\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n  \r\n      \r\n        <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n        \r\n        </h5>\r\n        <section class=\"widget widget-login AddDosage animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase; color:#1ec26b\">Add Category</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n           \r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"categoryName\" name=\"categoryName\" id=\"exampleInputEmail1\" placeholder=\"Enter Name\">\r\n              </div>\r\n              \r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                  <a class=\"btn addbtn btn-inverse btn-sm\" (click)=\"addCategoryValues()\">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-1\">\r\n                <div class=\"col-md-6 push-md-6\">\r\n                  <div class=\"clearfix\">\r\n                   <!--  <div class=\"abc-checkbox widget-login-info pull-xs-right\">\r\n                      <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\r\n                      <label for=\"checkbox1\">Keep me signed in </label>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n               <!--  <div class=\"col-md-6 pull-md-6\">\r\n                  <a class=\"mr-n-lg\" href=\"#\">Trouble with account?</a>\r\n                </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      \r\n   \r\n  </main>\r\n <!--  <footer class=\"page-footer\">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n</div>\r\n\r\n<div id=\"snackbar1\"></div>\r\n<div class=\"col-md-6\">\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    \r\n      \r\n        <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n        \r\n        </h5>\r\n        <section class=\"widget widget-login  AddSize animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;color:#1ec26b;\">Add Sub Category</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n           \r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n             <select id=\"measurementName\" (change)=\"getCategory($event.target.value)\"> \r\n                <option disabled selected value> -- select an option -- </option>  \r\n                <option *ngFor=\"let category of catergories\" value=\"{{category.Id}}\">{{category.CategoryName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"subCategoryName\" name=\"subCategoryName\" type=\"text\" placeholder=\"Enter Value\">\r\n              </div>\r\n \r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                  <a class=\"btn addbtn btn-inverse btn-sm\" (click)=\"addSubcateogry()\">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-1\">\r\n                <div class=\"col-md-6 push-md-6\">\r\n                  <div class=\"clearfix\">\r\n                   <!--  <div class=\"abc-checkbox widget-login-info pull-xs-right\">\r\n                      <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\r\n                      <label for=\"checkbox1\">Keep me signed in </label>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n               <!--  <div class=\"col-md-6 pull-md-6\">\r\n                  <a class=\"mr-n-lg\" href=\"#\">Trouble with account?</a>\r\n                </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n \r\n  </main>\r\n <!--  <footer class=\"page-footer\">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ },

/***/ "./src/app/services/AddCategoryService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var AddCategoryService = (function () {
    function AddCategoryService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    AddCategoryService.prototype.addCategory = function (chemistId, categoryName, ParentId) {
        var body = JSON.stringify({ ChemistId: chemistId, CategoryName: categoryName, ParentId: ParentId });
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addCategory", body, options)
            .map(function (res) { return res.json(); });
    };
    AddCategoryService.prototype.getAllSubCategoryValues = function (ChemistId, CategoryId) {
        var body = JSON.stringify({ ChemistId: ChemistId, ParentId: CategoryId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllCategoriesAndSubCategories", options)
            .map(function (res) { return res.json(); });
    };
    AddCategoryService.prototype.getCateogry = function (chemistId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getCategoriesByChemistId?chemistId=" + chemistId, options)
            .map(function (res) { return res.json(); });
    };
    AddCategoryService.prototype.addSubcategory = function (chemistId, subCategoryName, parentId) {
        var body = JSON.stringify({ ChemistId: chemistId, SubCategoryName: subCategoryName, ParentId: parentId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addSubCategory", body, options)
            .map(function (res) { return res.json(); });
    };
    AddCategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AddCategoryService);
    return AddCategoryService;
    var _a;
}());
exports.AddCategoryService = AddCategoryService;


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
//# sourceMappingURL=28.map