webpackJsonpac__name_([31],{

/***/ "./src/app/DosageAndSizeValues/DosageAndSizeValues.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var DosageAndSizeValuesService_1 = __webpack_require__("./src/app/services/DosageAndSizeValuesService.ts");
var DosageSizeComponent = (function () {
    function DosageSizeComponent(_addDosageAndSizeValuesService, router) {
        var _this = this;
        this._addDosageAndSizeValuesService = _addDosageAndSizeValuesService;
        this.GetDosageModel = [];
        this.SingleDosageModel = [];
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this.router = router;
            this._addDosageAndSizeValuesService.getDosageValue().subscribe(function (response) {
                console.log(response);
                _this.GetDosageModel = response.data;
                for (var i = 0; i < response.data.length; i++) {
                    var dosageObject = {
                        Id: response.data[i].DosageAndSizes.Id,
                        UnitName: response.data[i].DosageAndSizes.UnitName
                    };
                    _this.SingleDosageModel.push(dosageObject);
                }
            });
        }
    }
    DosageSizeComponent.prototype.getDosageId = function (DosageId) {
        this.DosageId = DosageId;
    };
    DosageSizeComponent.prototype.AddDosagevalue = function () {
        var _this = this;
        this._addDosageAndSizeValuesService.AddDosageValue(this.DosageId, this.DosageValue).subscribe(function (response) {
            console.log(response);
            jQuery("#snackbar1").html(response.message);
            _this.myFunction();
        });
        this.DosageValue = undefined;
    };
    DosageSizeComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar1");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    DosageSizeComponent = __decorate([
        core_1.Component({
            selector: 'DosageSize',
            providers: [DosageAndSizeValuesService_1.DosageAndSizeValuesService],
            styles: [__webpack_require__("./src/app/DosageAndSizeValues/DosageAndSizeValues.style.scss")],
            template: __webpack_require__("./src/app/DosageAndSizeValues/DosageAndSizeValues.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'dosage-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof DosageAndSizeValuesService_1.DosageAndSizeValuesService !== 'undefined' && DosageAndSizeValuesService_1.DosageAndSizeValuesService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], DosageSizeComponent);
    return DosageSizeComponent;
    var _a, _b;
}());
exports.DosageSizeComponent = DosageSizeComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/DosageAndSizeValues/DosageAndSizeValues.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var DosageAndSizeValues_component_1 = __webpack_require__("./src/app/DosageAndSizeValues/DosageAndSizeValues.component.ts");
exports.routes = [
    { path: '', component: DosageAndSizeValues_component_1.DosageSizeComponent, pathMatch: 'full' }
];
var DosageSizeModule = (function () {
    function DosageSizeModule() {
    }
    DosageSizeModule.routes = exports.routes;
    DosageSizeModule = __decorate([
        core_1.NgModule({
            declarations: [
                DosageAndSizeValues_component_1.DosageSizeComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DosageSizeModule);
    return DosageSizeModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DosageSizeModule;


/***/ },

/***/ "./src/app/DosageAndSizeValues/DosageAndSizeValues.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n.iconimage {\n  text-align: center; }\n\n#MedicineCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 29px;\n  margin-bottom: 14px; }\n\n.AddMeasurement {\n  position: relative;\n  color: white;\n  text-align: center;\n  background-color: grey;\n  float: left; }\n\n#AddMeasurement button {\n  background: none;\n  border: 1px solid #ccc;\n  padding: 8px;\n  font-weight: bold;\n  width: auto;\n  display: inline-block;\n  margin-right: 10px;\n  margin-top: 10px; }\n\n#MedicineDosage {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 37px; }\n\n#dosageValue {\n  margin-bottom: 12px; }\n\n#SelectDosageValue {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 2px; }\n\n#MedicineMeasurement {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 2px; }\n\n#MedicineSubCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 167px;\n  margin-left: 25px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn:hover {\n  color: white; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n#SelectMeasurement {\n  display: inline-flex;\n  margin-bottom: 3px; }\n\n#SelectDosage {\n  display: inline-block; }\n\n#SelectCategory {\n  display: inline-flex; }\n\n#SelectSubCategory {\n  display: inline-flex; }\n\n.AddMedicine {\n  max-width: 600px;\n  min-width: 300px;\n  margin: 0 auto; }\n\n.AddDosage {\n  width: 312px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/DosageAndSizeValues/DosageAndSizeValues.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar1\"></div>\r\n<div class=\"row\">\r\n\r\n\r\n<div id=\"snackbar1\"></div>\r\n\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n      <div class=\"iconimage\">\r\n          <img src=\"assets/img/dosage.png\">\r\n          </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-sm-6\">\r\n        <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n         \r\n        </h5>\r\n        <section class=\"widget widget-login  AddSize animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;\">ADD DOSAGE SIZE</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n           \r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n             <select id=\"measurementName\" (change)=\"getDosageId($event.target.value)\"> \r\n                <option disabled selected value> -- select an option -- </option>  \r\n                <option *ngFor=\"let dosage of SingleDosageModel\" value=\"{{dosage.Id}}\">{{dosage.UnitName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"DosageValue\" name=\"DosageValue\" type=\"text\" placeholder=\"Enter Value\">\r\n              </div>\r\n \r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                  <a class=\"btn addbtn btn-inverse btn-sm\" (click)=\"AddDosagevalue()\">Add</a>\r\n                </div>\r\n              </div>\r\n            \r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n <!--  <footer class=\"page-footer\">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n\r\n</div>"

/***/ },

/***/ "./src/app/services/DosageAndSizeValuesService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var DosageAndSizeValuesService = (function () {
    function DosageAndSizeValuesService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    DosageAndSizeValuesService.prototype.AddDosageValue = function (DosageId, DosageValue) {
        var body = JSON.stringify({ DosageAndSizesId: DosageId, Value: DosageValue });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addUnitValue", body, options)
            .map(function (res) { return res.json(); });
    };
    DosageAndSizeValuesService.prototype.getDosageValue = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllUnitValues", options)
            .map(function (res) { return res.json(); });
    };
    DosageAndSizeValuesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], DosageAndSizeValuesService);
    return DosageAndSizeValuesService;
    var _a;
}());
exports.DosageAndSizeValuesService = DosageAndSizeValuesService;


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
//# sourceMappingURL=31.map