webpackJsonpac__name_([14],{

/***/ "./src/app/UpdateOrderStatus/UpdateOrderStatus.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var GetLaugisticService_1 = __webpack_require__("./src/app/services/GetLaugisticService.ts");
var GetOrderService_1 = __webpack_require__("./src/app/services/GetOrderService.ts");
var PendingOrderService_1 = __webpack_require__("./src/app/services/PendingOrderService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var UpdateOrderStatusService_1 = __webpack_require__("./src/app/services/UpdateOrderStatusService.ts");
var UpdateOrderStatusComponent = (function () {
    function UpdateOrderStatusComponent(_UpdateOrderStatusService, _getLaugisticService, _getPendingOrderService, _getOrderService, router) {
        this._UpdateOrderStatusService = _UpdateOrderStatusService;
        this._getLaugisticService = _getLaugisticService;
        this._getPendingOrderService = _getPendingOrderService;
        this._getOrderService = _getOrderService;
        this.GetOrderDetailModelArray = [];
        this.GetAllProductModelArray = [];
        this.GetLaugisticModelArray = [];
        this.GetLaugisticModeldata = [];
        this.PendingOrderServiceArray = [];
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this.router = router;
        }
    }
    UpdateOrderStatusComponent.prototype.getStatusCategory = function (StatusName) {
        var _this = this;
        this.Status_Name = StatusName;
        console.log(StatusName);
        this.PENDING = "pending";
        this.ONTHEWAY = "On The way";
        this.DELIVERED = "Delivered";
        this.CONFIRMED = "Confirmed";
        this.SHIPPED = "Shipped";
        this.NOTSHIPPED = "Not Shipped";
        this.CANCELED = "Canceled";
        this.COMPLETED = "Completed";
        this.RETURNED = "Returned";
        this.TOBEDELIVERED = "To Be Delivered";
        this.username = undefined;
        this.password = undefined;
        this._getOrderService.GetOrderDetailService(this.Status_Name).subscribe(function (response) {
            console.log(response.data);
            _this.GetAllProductModelArray = response.data;
            jQuery("#snackbar").html(response.message);
            _this.myFunction();
            for (var i = 0; i < response.data.length; i++) {
                if (_this.GetAllProductModelArray[i].OrderStatus == 100) {
                    _this.GetAllProductModelArray[i].OrderStatus = _this.PENDING;
                }
                else if (_this.GetAllProductModelArray[i].OrderStatus == 200) {
                    _this.GetAllProductModelArray[i].OrderStatus = _this.ONTHEWAY;
                }
                else if (_this.GetAllProductModelArray[i].OrderStatus == 300) {
                    _this.GetAllProductModelArray[i].OrderStatus = _this.DELIVERED;
                }
                else if (_this.GetAllProductModelArray[i].OrderStatus == 400) {
                    _this.GetAllProductModelArray[i].OrderStatus = _this.CONFIRMED;
                }
                else if (_this.GetAllProductModelArray[i].OrderStatus == 500) {
                    _this.GetAllProductModelArray[i].OrderStatus = _this.SHIPPED;
                }
                else if (_this.GetAllProductModelArray[i].OrderStatus == 600) {
                    _this.GetAllProductModelArray[i].OrderStatus = _this.NOTSHIPPED;
                }
                else if (_this.GetAllProductModelArray[i].OrderStatus == 700) {
                    _this.GetAllProductModelArray[i].OrderStatus = _this.CANCELED;
                }
                else if (_this.GetAllProductModelArray[i].OrderStatus == 800) {
                    _this.GetAllProductModelArray[i].OrderStatus = _this.COMPLETED;
                }
                else if (_this.GetAllProductModelArray[i].OrderStatus == 900) {
                    _this.GetAllProductModelArray[i].OrderStatus = _this.RETURNED;
                }
                else if (_this.GetAllProductModelArray[i].OrderStatus == 10) {
                    _this.GetAllProductModelArray[i].OrderStatus = _this.TOBEDELIVERED;
                }
                else {
                    alert("Not Available");
                }
            }
        });
        console.log(this.GetLaugisticModelArray);
    };
    UpdateOrderStatusComponent.prototype.GetOrderStatusId = function (OrderStatusId) {
        // this.OrderStatus_Id = OrderStatusId;
        //console.log(this.OrderStatus_Id);
    };
    UpdateOrderStatusComponent.prototype.GetOrderId = function (OrderId) {
        //  this.Order_Id = OrderId;
        // console.log(this.Order_Id);
    };
    UpdateOrderStatusComponent.prototype.GetOrderAndStatusfunction = function (orderId, UserStatus) {
        this.OrderStatus_Id = this.Status_Name;
        console.log(this.OrderStatus_Id);
        this.GetOrderId = orderId;
        console.log(this.GetOrderId);
        jQuery("#snackbar").html("Selected Row Successfully");
        this.myFunction();
    };
    UpdateOrderStatusComponent.prototype.pendingOrderFun = function () {
    };
    UpdateOrderStatusComponent.prototype.UpdateOrderStatus = function () {
        var _this = this;
        this._UpdateOrderStatusService.UpdateOrderDetailService(this.OrderStatus_Id, this.GetOrderId).subscribe(function (response) {
            console.log(response);
            var OrderIdchanged = response.data.Id;
            var obj = _this.GetAllProductModelArray.find(function (x) { return x.Id == OrderIdchanged; });
            obj.OrderStatus = response.data.OrderStatus;
            console.log(obj);
            if (obj.OrderStatus == 100) {
                obj.OrderStatus = _this.PENDING;
            }
            else if (obj.OrderStatus == 200) {
                obj.OrderStatus = _this.ONTHEWAY;
            }
            else if (obj.OrderStatus == 300) {
                obj.OrderStatus = _this.DELIVERED;
            }
            else if (obj.OrderStatus == 400) {
                obj.OrderStatus = _this.CONFIRMED;
            }
            else if (obj.OrderStatus == 500) {
                obj.OrderStatus = _this.SHIPPED;
            }
            else if (obj.OrderStatus == 600) {
                obj.OrderStatus = _this.NOTSHIPPED;
            }
            else if (obj.OrderStatus == 700) {
                obj.OrderStatus = _this.CANCELED;
            }
            else if (obj.OrderStatus == 800) {
                obj.OrderStatus = _this.COMPLETED;
            }
            else if (obj.OrderStatus == 900) {
                obj.OrderStatus = _this.RETURNED;
            }
            else if (obj.OrderStatus == 10) {
                obj.OrderStatus = _this.TOBEDELIVERED;
            }
            else {
                alert("Not Available");
            }
        });
    };
    UpdateOrderStatusComponent.prototype.GetLaugisticId = function (LougisticId) {
        this.Lougistic_Id = LougisticId;
    };
    UpdateOrderStatusComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    UpdateOrderStatusComponent = __decorate([
        core_1.Component({
            selector: 'UpdateOrderStatus',
            styles: [__webpack_require__("./src/app/UpdateOrderStatus/UpdateOrderStatus.style.scss")],
            template: __webpack_require__("./src/app/UpdateOrderStatus/UpdateOrderStatus.template.html"),
            providers: [GetLaugisticService_1.GetLaugisticService, PendingOrderService_1.PendingOrderService, GetOrderService_1.GetOrderService, UpdateOrderStatusService_1.UpdateOrderStatusService],
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'login-page app'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof UpdateOrderStatusService_1.UpdateOrderStatusService !== 'undefined' && UpdateOrderStatusService_1.UpdateOrderStatusService) === 'function' && _a) || Object, (typeof (_b = typeof GetLaugisticService_1.GetLaugisticService !== 'undefined' && GetLaugisticService_1.GetLaugisticService) === 'function' && _b) || Object, (typeof (_c = typeof PendingOrderService_1.PendingOrderService !== 'undefined' && PendingOrderService_1.PendingOrderService) === 'function' && _c) || Object, (typeof (_d = typeof GetOrderService_1.GetOrderService !== 'undefined' && GetOrderService_1.GetOrderService) === 'function' && _d) || Object, (typeof (_e = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _e) || Object])
    ], UpdateOrderStatusComponent);
    return UpdateOrderStatusComponent;
    var _a, _b, _c, _d, _e;
}());
exports.UpdateOrderStatusComponent = UpdateOrderStatusComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/UpdateOrderStatus/UpdateOrderStatus.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var UpdateOrderStatus_component_1 = __webpack_require__("./src/app/UpdateOrderStatus/UpdateOrderStatus.component.ts");
exports.routes = [
    { path: '', component: UpdateOrderStatus_component_1.UpdateOrderStatusComponent, pathMatch: 'full' }
];
var UpdateOrderStatusModule = (function () {
    function UpdateOrderStatusModule() {
    }
    UpdateOrderStatusModule.routes = exports.routes;
    UpdateOrderStatusModule = __decorate([
        core_1.NgModule({
            declarations: [
                UpdateOrderStatus_component_1.UpdateOrderStatusComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UpdateOrderStatusModule);
    return UpdateOrderStatusModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UpdateOrderStatusModule;


/***/ },

/***/ "./src/app/UpdateOrderStatus/UpdateOrderStatus.style.scss":
/***/ function(module, exports) {

module.exports = "/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n.btn {\n  color: white !important;\n  display: inline-block;\n  margin-left: 12px; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n.updateStatus {\n  width: 542px; }\n\n.dropbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer; }\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n  height: 50px;\n  margin-bottom: 13px; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown-content a:hover {\n  background-color: #f1f1f1; }\n\n.dropdown:hover .dropdown-content {\n  display: block; }\n\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41; }\n"

/***/ },

/***/ "./src/app/UpdateOrderStatus/UpdateOrderStatus.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n\r\n        <h5 class=\"widget-login-logo animated fadeInUp\">\r\n         \r\n        </h5>\r\n        <section class=\"widget widget-login updateStatus animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;\">Update Order Status</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n\r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n\r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n           \r\n          \r\n              <table class=\"table table-hover\">\r\n\r\n                <tr>\r\n\r\n                  <td style=\"font-weight:600;color:#cccc\">Name</td>\r\n                  <td style=\"font-weight:600;color:#cccc\">Order Status</td>\r\n                  <td style=\"font-weight:600;color:#cccc\">OrderTotal</td>\r\n                </tr>\r\n\r\n                <ng-container *ngFor=\" let row1 of GetAllProductModelArray\">\r\n                  <tr  (click)=GetOrderAndStatusfunction(row1.Id,row1.OrderStatus)> \r\n                    \r\n                    <td >{{row1.User.UserName}}</td>\r\n                    <td>{{row1.OrderStatus}}</td>\r\n                    <td>{{row1.OrderTotal}}</td>\r\n                    \r\n                    <select class=\"dropdown\"(change)=\"getStatusCategory($event.target.value)\" >\r\n                       \r\n                        <option disabled selected value> -- select an option -- </option>\r\n                        <option value=\"100\">PENDING</option>\r\n                        <option value=\"200\">ONTHEWAY</option>\r\n                        <option value=\"300\">DELIVERED</option>\r\n                        <option value=\"400\">CONFIRMED</option>\r\n                        <option value=\"500\">SHIPPED</option>\r\n                        <option value=\"600\">NOT SHIPPED</option>\r\n                        <option value=\"700\">CANCELED</option>\r\n                        <option value=\"800\">COMPLETED</option>    \r\n                        <option value=\"900\">RETURNED</option>\r\n                        <option value=\"10\">TOBEDELIVERED</option>\r\n                                               \r\n                   </select> \r\n                   <td class=\"btn btn-inverse btn-sm\" (click)=\"UpdateOrderStatus()\">Update</td>\r\n</tr>\r\n\r\n                </ng-container>\r\n\r\n              </table>\r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                  <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n             \r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-1\">\r\n                <div class=\"col-md-6 push-md-6\">\r\n                  <div class=\"clearfix\">\r\n                   \r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </main>\r\n\r\n</div>"

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


/***/ },

/***/ "./src/app/services/UpdateOrderStatusService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var UpdateOrderStatusService = (function () {
    function UpdateOrderStatusService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    UpdateOrderStatusService.prototype.UpdateOrderDetailService = function (OrderStatus_Id, GetOrderId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "logistics/updateOrder?orderId=" + GetOrderId + "&orderStatus=" + OrderStatus_Id, options)
            .map(function (res) { return res.json(); });
    };
    UpdateOrderStatusService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], UpdateOrderStatusService);
    return UpdateOrderStatusService;
    var _a;
}());
exports.UpdateOrderStatusService = UpdateOrderStatusService;


/***/ }

});
//# sourceMappingURL=14.map