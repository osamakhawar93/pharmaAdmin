webpackJsonpac__name_([21],{

/***/ "./src/app/PendingOrder/PendingOrder.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var GetLaugisticService_1 = __webpack_require__("./src/app/services/GetLaugisticService.ts");
var GetOrderService_1 = __webpack_require__("./src/app/services/GetOrderService.ts");
var PendingOrderService_1 = __webpack_require__("./src/app/services/PendingOrderService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var PendingOrderComponent = (function () {
    function PendingOrderComponent(_getLaugisticService, _getPendingOrderService, _getOrderService, router) {
        var _this = this;
        this._getLaugisticService = _getLaugisticService;
        this._getPendingOrderService = _getPendingOrderService;
        this._getOrderService = _getOrderService;
        this.GetOrderServiceArray = [];
        this.GetLaugisticModelArray = [];
        this.GetLaugisticModeldata = [];
        this.PendingOrderServiceArray = [];
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this.router = router;
            this.username = undefined;
            this.password = undefined;
            this._getLaugisticService.GetLaugisticName().subscribe(function (response) {
                _this.GetLaugisticModelArray = response.data;
                jQuery("#snackbar").html(response.message);
                _this.myFunction();
            });
            this.pendingOrderFun();
            console.log(this.GetLaugisticModelArray);
        }
    }
    PendingOrderComponent.prototype.pendingOrderFun = function () {
        var _this = this;
        this._getOrderService.GetOrderDetailValueService().subscribe(function (response) {
            console.log(response.data);
            _this.GetOrderServiceArray = response.data;
            jQuery("#snackbar").html(response.message);
            _this.myFunction();
        });
    };
    PendingOrderComponent.prototype.GetLaugisticId = function (LougisticId) {
        this.Lougistic_Id = LougisticId;
    };
    PendingOrderComponent.prototype.GetOrderId = function (OrderId) {
        this.Order_Id = OrderId;
        console.log(this.Order_Id);
    };
    PendingOrderComponent.prototype.AssignLogistic = function () {
        var _this = this;
        this._getPendingOrderService.AddLaugisticData(this.Order_Id, this.Lougistic_Id).subscribe(function (response) {
            _this.GetLaugisticModeldata = response.data;
            jQuery("#snackbar").html(response.message);
            _this.myFunction();
        });
        this.GetLaugisticModeldata = [];
        console.log(this.GetLaugisticModeldata);
    };
    PendingOrderComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    PendingOrderComponent = __decorate([
        core_1.Component({
            selector: 'PendingOrder',
            styles: [__webpack_require__("./src/app/PendingOrder/PendingOrder.style.scss")],
            template: __webpack_require__("./src/app/PendingOrder/PendingOrder.template.html"),
            providers: [GetLaugisticService_1.GetLaugisticService, PendingOrderService_1.PendingOrderService, GetOrderService_1.GetOrderService],
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'login-page app'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof GetLaugisticService_1.GetLaugisticService !== 'undefined' && GetLaugisticService_1.GetLaugisticService) === 'function' && _a) || Object, (typeof (_b = typeof PendingOrderService_1.PendingOrderService !== 'undefined' && PendingOrderService_1.PendingOrderService) === 'function' && _b) || Object, (typeof (_c = typeof GetOrderService_1.GetOrderService !== 'undefined' && GetOrderService_1.GetOrderService) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object])
    ], PendingOrderComponent);
    return PendingOrderComponent;
    var _a, _b, _c, _d;
}());
exports.PendingOrderComponent = PendingOrderComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/PendingOrder/PendingOrder.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var PendingOrder_component_1 = __webpack_require__("./src/app/PendingOrder/PendingOrder.component.ts");
exports.routes = [
    { path: '', component: PendingOrder_component_1.PendingOrderComponent, pathMatch: 'full' }
];
var PendingOrderModule = (function () {
    function PendingOrderModule() {
    }
    PendingOrderModule.routes = exports.routes;
    PendingOrderModule = __decorate([
        core_1.NgModule({
            declarations: [
                PendingOrder_component_1.PendingOrderComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PendingOrderModule);
    return PendingOrderModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PendingOrderModule;


/***/ },

/***/ "./src/app/PendingOrder/PendingOrder.style.scss":
/***/ function(module, exports) {

module.exports = "/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#Laugistic {\n  width: 100%;\n  height: 30px;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n#Orders {\n  width: 100%;\n  height: 30px;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n.btn {\n  width: 264px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n"

/***/ },

/***/ "./src/app/PendingOrder/PendingOrder.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n\r\n        <h5 class=\"widget-login-logo animated fadeInUp\">\r\n       \r\n        </h5>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;\">Pending Orders</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <form class=\"login-form mt-lg\">\r\n              <select id=\"Laugistic\" (change)=\"GetLaugisticId($event.target.value)\">\r\n                <option disabled selected value> -- select an option -- </option>\r\n\r\n                <option *ngFor=\"let LaugisticName of GetLaugisticModelArray\" value=\"{{LaugisticName.Id}}\">{{LaugisticName.Name}}</option>\r\n              </select>\r\n              <select id=\"Orders\" (change)=\"GetOrderId($event.target.value)\">\r\n                <option disabled selected value> -- select an option -- </option>\r\n\r\n                <option *ngFor=\"let OrderId of GetOrderServiceArray\" value=\"{{OrderId.Id}}\">{{OrderId.User.FullName}}</option>\r\n              </select>\r\n\r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                  <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                  <a class=\"btn btn-inverse btn-sm\" (click)=\"AssignLogistic()\">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-1\">\r\n                <div class=\"col-md-6 push-md-6\">\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"abc-checkbox widget-login-info pull-xs-right\">\r\n                      <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\r\n                      <label for=\"checkbox1\">Keep me signed in </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </main>\r\n\r\n</div>"

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

/***/ "./src/app/services/PendingOrderService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var PendingOrderService = (function () {
    function PendingOrderService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    PendingOrderService.prototype.GetPendingOrder = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemists?webRequest=1", options)
            .map(function (res) { return res.json(); });
    };
    PendingOrderService.prototype.GetOrderDetailService = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemists?webRequest=1", options)
            .map(function (res) { return res.json(); });
    };
    PendingOrderService.prototype.AddLaugisticData = function (OrderId, LogisticId) {
        var body = JSON.stringify({ OrderId: OrderId, LogisticsId: LogisticId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Admin/assignOrderToLogistics", body, options)
            .map(function (res) { return res.json(); });
    };
    PendingOrderService.prototype.getDataByCities = function (cityId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getChemistsListByCity?CityId=" + cityId, options)
            .map(function (res) { return res.json(); });
    };
    PendingOrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], PendingOrderService);
    return PendingOrderService;
    var _a;
}());
exports.PendingOrderService = PendingOrderService;


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
//# sourceMappingURL=21.map