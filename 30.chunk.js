webpackJsonpac__name_([30],{

/***/ "./src/app/GetOrder/GetOrder.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var GetOrderService_1 = __webpack_require__("./src/app/services/GetOrderService.ts");
var GetOrderComponent = (function () {
    function GetOrderComponent(_addMedicineService, router) {
        this._addMedicineService = _addMedicineService;
        this.GetAllProductModelArray = [];
        this.GetOrderDetailModelArray = [];
        this.GetOrderDetailModelOrderStatus = [];
        this.GetAllProductModelArraySingle = [];
        this.GetAllProductDosageValue = [];
        this.GetChemistDataModelArray = [];
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this.router = router;
        }
    }
    GetOrderComponent.prototype.getStatusValue = function (status) {
        var _this = this;
        this.Status_Value = status;
        this.ProductType = 100;
        this.ChemistId = localStorage.getItem("GetChemistId");
        this.PENDING = "Pending";
        this.ONTHEWAY = "On The way";
        this.DELIVERED = "Delivered";
        this.CONFIRMED = "Confirmed";
        this.SHIPPED = "Shipped";
        this.NOTSHIPPED = "Not Shipped";
        this.CANCELED = "Canceled";
        this.COMPLETED = "Completed";
        this.RETURNED = "Returned";
        this.TOBEDELIVERED = "To Be Delivered";
        this._addMedicineService.GetOrderDetailService(this.Status_Value).subscribe(function (response) {
            console.log(response.data);
            _this.GetOrderDetailModelArray = response.data;
            console.log('Order Status', _this.GetOrderDetailModelArray);
            for (var i = 0; i < response.data.length; i++) {
                if (_this.GetOrderDetailModelArray[i].OrderStatus == 100) {
                    _this.GetOrderDetailModelArray[i].OrderStatus = _this.PENDING;
                }
                else if (_this.GetOrderDetailModelArray[i].OrderStatus == 200) {
                    _this.GetOrderDetailModelArray[i].OrderStatus = _this.ONTHEWAY;
                }
                else if (_this.GetOrderDetailModelArray[i].OrderStatus == 300) {
                    _this.GetOrderDetailModelArray[i].OrderStatus = _this.DELIVERED;
                }
                else if (_this.GetOrderDetailModelArray[i].OrderStatus == 400) {
                    _this.GetOrderDetailModelArray[i].OrderStatus = _this.CONFIRMED;
                }
                else if (_this.GetOrderDetailModelArray[i].OrderStatus == 500) {
                    _this.GetOrderDetailModelArray[i].OrderStatus = _this.SHIPPED;
                }
                else if (_this.GetOrderDetailModelArray[i].OrderStatus == 600) {
                    _this.GetOrderDetailModelArray[i].OrderStatus = _this.NOTSHIPPED;
                }
                else if (_this.GetOrderDetailModelArray[i].OrderStatus == 700) {
                    _this.GetOrderDetailModelArray[i].OrderStatus = _this.CANCELED;
                }
                else if (_this.GetOrderDetailModelArray[i].OrderStatus == 800) {
                    _this.GetOrderDetailModelArray[i].OrderStatus = _this.COMPLETED;
                }
                else if (_this.GetOrderDetailModelArray[i].OrderStatus == 900) {
                    _this.GetOrderDetailModelArray[i].OrderStatus = _this.RETURNED;
                }
                else if (_this.GetOrderDetailModelArray[i].OrderStatus == 10) {
                    _this.GetOrderDetailModelArray[i].OrderStatus = _this.TOBEDELIVERED;
                }
                else {
                    alert("Not Available");
                }
            }
        });
    };
    GetOrderComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar1");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    GetOrderComponent = __decorate([
        core_1.Component({
            selector: 'GetOrder',
            providers: [GetOrderService_1.GetOrderService],
            styles: [__webpack_require__("./src/app/GetOrder/GetOrder.style.scss")],
            template: __webpack_require__("./src/app/GetOrder/GetOrder.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'dosage-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof GetOrderService_1.GetOrderService !== 'undefined' && GetOrderService_1.GetOrderService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], GetOrderComponent);
    return GetOrderComponent;
    var _a, _b;
}());
exports.GetOrderComponent = GetOrderComponent;


/***/ },

/***/ "./src/app/GetOrder/GetOrder.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var GetOrder_component_1 = __webpack_require__("./src/app/GetOrder/GetOrder.component.ts");
exports.routes = [
    { path: '', component: GetOrder_component_1.GetOrderComponent, pathMatch: 'full' }
];
var GetOrderModule = (function () {
    function GetOrderModule() {
    }
    GetOrderModule.routes = exports.routes;
    GetOrderModule = __decorate([
        core_1.NgModule({
            declarations: [
                GetOrder_component_1.GetOrderComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GetOrderModule);
    return GetOrderModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetOrderModule;


/***/ },

/***/ "./src/app/GetOrder/GetOrder.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#StatusName {\n  background-color: #eceeef;\n  color: black;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  width: 273px;\n  height: 53px; }\n\n#MedicineCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 29px;\n  margin-bottom: 14px; }\n\n.AddMeasurement {\n  position: relative;\n  color: white;\n  text-align: center;\n  background-color: grey;\n  float: left; }\n\n#AddMeasurement button {\n  background: none;\n  border: 1px solid #ccc;\n  padding: 8px;\n  font-weight: bold;\n  width: auto;\n  display: inline-block;\n  margin-right: 10px;\n  margin-top: 10px; }\n\n.addbtn:hover {\n  color: white !important; }\n\n#MedicineDosage {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 37px; }\n\n#dosageValue {\n  margin-bottom: 12px;\n  border: 1px solid black;\n  padding-top: 12px;\n  padding-bottom: 12px; }\n\n#SelectDosageValue {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 126px;\n  margin-left: 2px; }\n\n#MedicineMeasurement {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 158px;\n  margin-left: 11px;\n  margin-top: -5px; }\n\n.addbtnMeasurement {\n  background-color: white;\n  width: 124px !important;\n  height: 30px;\n  margin-left: 22px; }\n\n#MedicineSubCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 167px;\n  margin-left: 25px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n#SelectMeasurement {\n  display: inline-flex;\n  margin-bottom: 3px; }\n\n#SelectDosage {\n  display: inline-block; }\n\n#SelectCategory {\n  display: inline-flex; }\n\n#SelectSubCategory {\n  display: inline-flex; }\n\n.AddMedicine {\n  max-width: 600px;\n  min-width: 300px;\n  margin: 0 auto; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/GetOrder/GetOrder.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n\r\n      <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n      \r\n      </h5>\r\n      <section class=\"widget widget-login AddMedicine animated fadeInUp\">\r\n        <header>\r\n          <h3 style=\"text-transform:uppercase;\">Order List</h3>\r\n        </header>\r\n        <div class=\"widget-body\">\r\n          <p class=\"widget-login-info\">\r\n\r\n          </p>\r\n          <p class=\"widget-login-info\">\r\n\r\n          </p>\r\n          <form class=\"login-form mt-lg\">\r\n            <select id=\"StatusName\"(change)=\"getStatusValue($event.target.value)\">\r\n\r\n              <option disabled selected value> -- select an option -- </option>\r\n              <option value=\"100\">Pending </option>\r\n              <option value=\"200\">On The way </option>\r\n              <option value=\"300\">Delivered </option>\r\n              <option value=\"400\">Confirmed </option>\r\n              <option value=\"500\">Shipped </option>\r\n              <option value=\"600\">Not Shipped </option>\r\n              <option value=\"700\">Canceled </option>\r\n              <option value=\"800\">Completed </option>\r\n              <option value=\"900\">Returned </option>\r\n              <option value=\"10\">To Be Delivered </option>\r\n\r\n             \r\n          \r\n      \r\n         </select>\r\n\r\n            <table class=\"table table-hover\">\r\n\r\n              <tr>\r\n\r\n                <td>Name</td>\r\n                <td>Order Status</td>\r\n                <td>OrderTotal</td>\r\n              </tr>\r\n\r\n              <ng-container *ngFor=\" let row1 of GetOrderDetailModelArray\">\r\n                <tr>\r\n                  <td>{{row1.User.UserName}}</td>\r\n                  <td>{{row1.OrderStatus}}</td>\r\n                  <td>{{row1.OrderTotal}}</td>\r\n\r\n\r\n\r\n                </tr>\r\n\r\n                <!-- <td > {{row2.User.UserName}}</td>\r\n                        <td>{{row2.Chemist.City}}</td>\r\n                        <td>{{row22.Chemist.Latitude}}</td> -->\r\n\r\n\r\n              </ng-container>\r\n\r\n\r\n\r\n\r\n            </table>\r\n            <div class=\"clearfix\">\r\n           \r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n          </form>\r\n        </div>\r\n      </section>\r\n\r\n    </div>\r\n  </main>\r\n</div>"

/***/ },

/***/ "./src/app/services/GetOrderService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var GetOrderService = (function () {
    function GetOrderService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    GetOrderService.prototype.GetOrderDetailService = function (Status_Value) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getOrdersByOrderStatus?orderStatus=" + Status_Value, options)
            .map(function (res) { return res.json(); });
    };
    GetOrderService.prototype.GetOrderDetailValueService = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getOrdersByOrderStatus?orderStatus=100", options)
            .map(function (res) { return res.json(); });
    };
    GetOrderService.prototype.GetAllCitiesService = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "City/getAllCities", options)
            .map(function (res) { return res.json(); });
    };
    GetOrderService.prototype.getDataByCities = function (cityId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getChemistsListByCity?CityId=" + cityId, options)
            .map(function (res) { return res.json(); });
    };
    GetOrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], GetOrderService);
    return GetOrderService;
    var _a;
}());
exports.GetOrderService = GetOrderService;


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
//# sourceMappingURL=30.map