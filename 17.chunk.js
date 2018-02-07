webpackJsonpac__name_([17],{

/***/ "./src/app/GetChemistByArea/GetChemistByArea.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddAreaService_1 = __webpack_require__("./src/app/services/AddAreaService.ts");
var GetChemistDataService_1 = __webpack_require__("./src/app/services/GetChemistDataService.ts");
var AddChemistService_1 = __webpack_require__("./src/app/services/AddChemistService.ts");
var GetChemistByAreaComponent = (function () {
    function GetChemistByAreaComponent(_AddAreaNameService, _addChemistServiceService, _getChemistDataService, router) {
        var _this = this;
        this._AddAreaNameService = _AddAreaNameService;
        this._addChemistServiceService = _addChemistServiceService;
        this._getChemistDataService = _getChemistDataService;
        this.SingleChemistDataModel = [];
        this.GetAllCitiesModelArray = [];
        this.AllChemistDataModel = [];
        this.GetAreaNameModelArray = [];
        this.UserType = localStorage.getItem("UserType");
        if (this.UserType == null) {
            this.router.navigate(["/app/login"]);
        }
        else {
            this.router = router;
            this.GetChemistId = localStorage.getItem("GetChemistId");
            this.ProductType = 100;
            this._getChemistDataService.GetChemistService().subscribe(function (response) {
                _this.SingleChemistDataModel = response.data;
                _this.getAllCities();
            });
        }
    }
    GetChemistByAreaComponent.prototype.getAllCities = function () {
        var _this = this;
        this._getChemistDataService.GetAllCitiesService().subscribe(function (response) {
            _this.GetAllCitiesModelArray = response.data;
            /*    console.log(this.GetAllCitiesModelArray);
               jQuery("#snackbar1").html(response.message);
               this.myFunction(); */
        });
    };
    GetChemistByAreaComponent.prototype.getAreaId = function (AreaId) {
        var _this = this;
        this.getArea_Id = AreaId;
        this._getChemistDataService.GetRegisteredChemistService().subscribe(function (response) {
            _this.AllChemistDataModel = [];
            for (var i = 0; i < response.data.length; i++)
                if (response.data[i].Chemist.AreaId == _this.getArea_Id) {
                    _this.AllChemistDataModel = [];
                    _this.AllChemistDataModel.push(response.data[i]);
                }
        });
    };
    GetChemistByAreaComponent.prototype.getCityName = function (cityId) {
        var _this = this;
        this.AllChemistDataModel = [];
        this.GetAreaNameModelArray = [];
        this.CityId = cityId;
        this._AddAreaNameService.getAreaName(this.CityId).subscribe(function (response) {
            _this.GetAreaNameModelArray = response.data;
        });
    };
    GetChemistByAreaComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            jQuery('#somecomponent').locationpicker({
                location: {
                    latitude: 30.3753,
                    longitude: 69.3451
                },
                radius: 300,
                inputBinding: {
                    latitudeInput: jQuery('#us7-lat'),
                    longitudeInput: jQuery('#us7-lon'),
                    radiusInput: jQuery('#us7-radius'),
                    locationNameInput: jQuery('#us7-address'),
                },
                enableAutocomplete: true
            });
        }, 3000);
    };
    /*   addChemist() {
    
        this.Longitude = jQuery("#us7-lon").val();
        this.Latitude = jQuery("#us7-lat").val();
        console.log(this.Longitude);
    
        if (!this.ChemistEmail || !this.ChemistName || !this.ChemistPassword || !this.Longitude || !this.Latitude) {
          //alert("empty");
    
          jQuery("#snackbar1").html("Please enter Empty field");
          this.myFunction();
    
        }
        else {
    
          this.RegularExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (this.RegularExpression.test(this.ChemistEmail)) {
            this.Longitude = jQuery("#us7-lon").val();
            this.Latitude = jQuery("#us7-lat").val();
            this.ChemistId = localStorage.getItem("GetChemistId")
            console.log(this.ChemistId);
            this._addChemistServiceService.AddChemist(this.getArea_Id, this.ChemistEmail, this.CityId, this.ChemistName, this.ChemistPassword, this.Longitude, this.Latitude, this.PharmacyId).subscribe(
              response => {
                console.log(response.data);
                jQuery("#snackbar1").html("Add Chemist Successfully");
                this.myFunction();
    
              });
          }
          else {
            jQuery("#snackbar1").html("Email is not Valid");
            this.myFunction();
    
          }
        }
      } */
    GetChemistByAreaComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar1");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    GetChemistByAreaComponent = __decorate([
        core_1.Component({
            selector: 'GetChemistByArea',
            providers: [AddChemistService_1.AddchemistService, GetChemistDataService_1.GetChemistDataService, AddAreaService_1.AddAreaService],
            styles: [__webpack_require__("./src/app/GetChemistByArea/GetChemistByArea.style.scss")],
            template: __webpack_require__("./src/app/GetChemistByArea/GetChemistByArea.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'chemist-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AddAreaService_1.AddAreaService !== 'undefined' && AddAreaService_1.AddAreaService) === 'function' && _a) || Object, (typeof (_b = typeof AddChemistService_1.AddchemistService !== 'undefined' && AddChemistService_1.AddchemistService) === 'function' && _b) || Object, (typeof (_c = typeof GetChemistDataService_1.GetChemistDataService !== 'undefined' && GetChemistDataService_1.GetChemistDataService) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object])
    ], GetChemistByAreaComponent);
    return GetChemistByAreaComponent;
    var _a, _b, _c, _d;
}());
exports.GetChemistByAreaComponent = GetChemistByAreaComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/GetChemistByArea/GetChemistByArea.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var GetChemistByArea_component_1 = __webpack_require__("./src/app/GetChemistByArea/GetChemistByArea.component.ts");
__webpack_require__("./src/assets/jquery-locationpicker-plugin-master/src/locationpicker.jquery.js");
exports.routes = [
    { path: '', component: GetChemistByArea_component_1.GetChemistByAreaComponent, pathMatch: 'full' }
];
var GetChemistByAreaModule = (function () {
    function GetChemistByAreaModule() {
    }
    GetChemistByAreaModule.routes = exports.routes;
    GetChemistByAreaModule = __decorate([
        core_1.NgModule({
            declarations: [
                GetChemistByArea_component_1.GetChemistByAreaComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GetChemistByAreaModule);
    return GetChemistByAreaModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetChemistByAreaModule;


/***/ },

/***/ "./src/app/GetChemistByArea/GetChemistByArea.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n.iconimage {\n  text-align: center; }\n\n.iconimage img {\n  height: 100px; }\n\n#PharmacyName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n#us7-lat {\n  width: 237px; }\n\n#us7-lon {\n  width: 237px; }\n\n#us7-radius {\n  width: 260px; }\n\n#us7-address {\n  width: 260px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\nagm-map {\n  height: 300px; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 100%; }\n\n#CityName {\n  width: 40%;\n  height: 30px;\n  color: #898989;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n#AreaName {\n  width: 40%;\n  color: #898989;\n  height: 30px;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/GetChemistByArea/GetChemistByArea.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar1\"></div>\r\n<div class=\"row\">\r\n\r\n\r\n\r\n\r\n\r\n  <section class=\"widget widget-login  AddSize animated fadeInUp\">\r\n\r\n\r\n    <h1 class=\"transactions\">Chemists by Area</h1>\r\n\r\n\r\n    <select id=\"CityName\" (change)=\"getCityName($event.target.value)\">\r\n      <option disabled selected value> -- select an option -- </option>\r\n\r\n      <option *ngFor=\"let CityName of GetAllCitiesModelArray\" value=\"{{CityName.Id}}\">{{CityName.Name}}</option>\r\n    </select>\r\n    <select id=\"AreaName\" (change)=\"getAreaId($event.target.value)\">\r\n      <option disabled selected value> -- select an option -- </option>\r\n\r\n      <option *ngFor=\"let AreaName of GetAreaNameModelArray\" value=\"{{AreaName.Id}}\">{{AreaName.Name}}</option>\r\n    </select>\r\n\r\n    <div class=\"clearfix\">\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n        <tr>\r\n          <th>Pharmacy Name</th>\r\n          <th>Address</th>\r\n          <th>City</th>\r\n          <th>Latitude</th>\r\n          <th>Longitude</th>\r\n          <th>Mobile Number</th>\r\n        </tr>\r\n      </thead>\r\n\r\n        <tr *ngFor=\" let row1 of AllChemistDataModel\">\r\n\r\n          <td>{{row1.Chemist.PharmacyName}}</td>\r\n          <td>{{row1.Chemist.Address}}</td>\r\n          <td>{{row1.Chemist.City.Name}}</td>\r\n          <td>{{row1.Chemist.Latitude}}</td>\r\n          <td>{{row1.Chemist.Longitude}}</td>\r\n          <td>{{row1.MobileNumber}}</td>\r\n\r\n\r\n        </tr>\r\n\r\n\r\n\r\n\r\n      </table>\r\n\r\n    </div>\r\n  </section>\r\n\r\n\r\n\r\n\r\n</div>"

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

/***/ "./src/app/services/AddChemistService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var AddchemistService = (function () {
    function AddchemistService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    AddchemistService.prototype.AddChemist = function (getArea_Id, ChemistEmail, PharmaCommission, CityId, ChemistName, ChemistPassword, Longitude, latitide, ChemistId) {
        var body = JSON.stringify({ PharmaCommission: PharmaCommission, AreaId: getArea_Id, Email: ChemistEmail, CityId: CityId, Password: ChemistPassword, UserName: ChemistName, Longitude: Longitude, Latitude: latitide, ChemistId: ChemistId });
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "User/addChemistDetail", body, options)
            .map(function (res) { return res.json(); });
    };
    AddchemistService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AddchemistService);
    return AddchemistService;
    var _a;
}());
exports.AddchemistService = AddchemistService;


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


/***/ },

/***/ "./src/assets/jquery-locationpicker-plugin-master/src/locationpicker.jquery.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ( $ ) {

    /**
     * Holds google map object and related utility entities.
     * @constructor
     */
    function GMapContext(domElement, options) {
        var _map = new google.maps.Map(domElement, options);
        var _marker = new google.maps.Marker({
            position: new google.maps.LatLng(54.19335, -3.92695),
            map: _map,
            title: "Drag Me",
            visible: options.markerVisible,
            draggable: options.markerDraggable,
            icon: (options.markerIcon !== undefined) ? options.markerIcon : undefined
        });
        return {
            map: _map,
            marker: _marker,
            circle: null,
            location: _marker.position,
            radius: options.radius,
            locationName: options.locationName,
            addressComponents: {
                formatted_address: null,
                addressLine1: null,
                addressLine2: null,
                streetName: null,
                streetNumber: null,
                city: null,
                district: null,
                state: null,
                stateOrProvince: null
            },
            settings: options.settings,
            domContainer: domElement,
            geodecoder: new google.maps.Geocoder()
        }
    }

    // Utility functions for Google Map Manipulations
    var GmUtility = {
        /**
         * Draw a circle over the the map. Returns circle object.
         * Also writes new circle object in gmapContext.
         *
         * @param center - LatLng of the center of the circle
         * @param radius - radius in meters
         * @param gmapContext - context
         * @param options
         */
        drawCircle: function(gmapContext, center, radius, options) {
            if (gmapContext.circle != null) {
                gmapContext.circle.setMap(null);
            }
            if (radius > 0) {
                radius *= 1;
                options = $.extend({
                    strokeColor: "#0000FF",
                    strokeOpacity: 0.35,
                    strokeWeight: 2,
                    fillColor: "#0000FF",
                    fillOpacity: 0.20
                }, options);
                options.map = gmapContext.map;
                options.radius = radius;
                options.center = center;
                gmapContext.circle = new google.maps.Circle(options);
                return gmapContext.circle;
            }
            return null;
        },
        /**
         *
         * @param gMapContext
         * @param location
         * @param callback
         */
        setPosition: function(gMapContext, location, callback) {
            gMapContext.location = location;
            gMapContext.marker.setPosition(location);
            gMapContext.map.panTo(location);
            this.drawCircle(gMapContext, location, gMapContext.radius, {});
            if (gMapContext.settings.enableReverseGeocode) {
                this.updateLocationName(gMapContext, callback);
            } else {
                if (callback) {
                    callback.call(this, gMapContext);
                }
            }

        },
        locationFromLatLng: function(lnlg) {
            return {latitude: lnlg.lat(), longitude: lnlg.lng()}
        },
        addressByFormat: function (addresses, format) {
            var result = null;
            for(var i = addresses.length - 1; i >= 0; i--){
                if(addresses[i].types.indexOf(format) >= 0){
                    result = addresses[i];
                }
            }
            return result || addresses[0];
        },
        updateLocationName: function(gmapContext, callback) {
            gmapContext.geodecoder.geocode({
                latLng: gmapContext.marker.position
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                    var address = GmUtility.addressByFormat(results, gmapContext.settings.addressFormat);
                    gmapContext.locationName = address.formatted_address;
                    gmapContext.addressComponents = GmUtility.address_component_from_google_geocode(address.address_components);
                }else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                    return setTimeout(function () {
                        GmUtility.updateLocationName(gmapContext, callback);
                    }, 1000);
                }
                if (callback) {
                    callback.call(this, gmapContext);
                }
            });
        },
        address_component_from_google_geocode: function(address_components) {
            var result = {};
            for (var i = address_components.length-1; i>=0; i--) {
                var component = address_components[i];
                // Postal code
                if (component.types.indexOf('postal_code') >= 0) {
                    result.postalCode = component.short_name;
                }
                // Street number
                else if (component.types.indexOf('street_number') >= 0) {
                    result.streetNumber = component.short_name;
                }
                // Street name
                else if (component.types.indexOf('route') >= 0) {
                    result.streetName = component.short_name;
                }
                // City
                else if (component.types.indexOf('locality') >= 0) {
                    result.city = component.short_name;
                }
                // District
                else if (component.types.indexOf('sublocality') >= 0) {
                    result.district = component.short_name;
                }
                // State \ Province
                else if (component.types.indexOf('administrative_area_level_1') >= 0) {
                    result.stateOrProvince = component.short_name;
                }
                // State \ Province
                else if (component.types.indexOf('country') >= 0) {
                    result.country = component.short_name;
                }
            }
            result.addressLine1 = [result.streetNumber, result.streetName].join(' ').trim();
            result.addressLine2 = '';
            return result;
        }
    };

    function isPluginApplied(domObj) {
        return getContextForElement(domObj) != undefined;
    }

    function getContextForElement(domObj) {
        return $(domObj).data("locationpicker");
    }

    function updateInputValues(inputBinding, gmapContext){
        if (!inputBinding) return;
        var currentLocation = GmUtility.locationFromLatLng(gmapContext.marker.position);
        if (inputBinding.latitudeInput) {
            inputBinding.latitudeInput.val(currentLocation.latitude).change();
        }
        if (inputBinding.longitudeInput) {
            inputBinding.longitudeInput.val(currentLocation.longitude).change();
        }
        if (inputBinding.radiusInput) {
            inputBinding.radiusInput.val(gmapContext.radius).change();
        }
        if (inputBinding.locationNameInput) {
            inputBinding.locationNameInput.val(gmapContext.locationName).change();
        }
    }

    function setupInputListenersInput(inputBinding, gmapContext) {
        if (inputBinding) {
            if (inputBinding.radiusInput){
                inputBinding.radiusInput.on("change", function(e) {
                    var radiusInputValue = $(this).val();
                    if (!e.originalEvent || isNaN(radiusInputValue)) { return }
                    gmapContext.radius = radiusInputValue;
                    GmUtility.setPosition(gmapContext, gmapContext.location, function(context){
                        context.settings.onchanged.apply(gmapContext.domContainer,
                            [GmUtility.locationFromLatLng(context.location), context.radius, false]);
                    });
                });
            }
            if (inputBinding.locationNameInput && gmapContext.settings.enableAutocomplete) {
                var blur = false;
                gmapContext.autocomplete = new google.maps.places.Autocomplete(inputBinding.locationNameInput.get(0), gmapContext.settings.autocompleteOptions);
                google.maps.event.addListener(gmapContext.autocomplete, 'place_changed', function() {
                    blur = false;
                    var place = gmapContext.autocomplete.getPlace();
                    if (!place.geometry) {
                        gmapContext.settings.onlocationnotfound(place.name);
                        return;
                    }
                    GmUtility.setPosition(gmapContext, place.geometry.location, function(context) {
                        updateInputValues(inputBinding, context);
                        context.settings.onchanged.apply(gmapContext.domContainer,
                            [GmUtility.locationFromLatLng(context.location), context.radius, false]);
                    });
                });
                if(gmapContext.settings.enableAutocompleteBlur) {
                  inputBinding.locationNameInput.on("change", function(e) {
                    if (!e.originalEvent) { return }
                    blur = true;
                  });
                  inputBinding.locationNameInput.on("blur", function(e) {
                    if (!e.originalEvent) { return }
                    setTimeout(function() {
                        var address = $(inputBinding.locationNameInput).val();
                        if (address.length > 5 && blur) {
                            blur = false;
                            gmapContext.geodecoder.geocode({'address': address}, function(results, status) {
                                if(status == google.maps.GeocoderStatus.OK  && results && results.length) {
                                    GmUtility.setPosition(gmapContext, results[0].geometry.location, function(context) {
                                        updateInputValues(inputBinding, context);
                                        context.settings.onchanged.apply(gmapContext.domContainer,
                                            [GmUtility.locationFromLatLng(context.location), context.radius, false]);
                                    });
                                }
                            });
                        }
                    }, 1000);
                  });
                }
            }
            if (inputBinding.latitudeInput) {
                inputBinding.latitudeInput.on("change", function(e) {
                    var latitudeInputValue = $(this).val();
                    if (!e.originalEvent || isNaN(latitudeInputValue) ) { return }
                        GmUtility.setPosition(gmapContext, new google.maps.LatLng(latitudeInputValue, gmapContext.location.lng()), function(context){    context.settings.onchanged.apply(gmapContext.domContainer,
                            [GmUtility.locationFromLatLng(context.location), context.radius, false]);
                        updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                    });
                });
            }
            if (inputBinding.longitudeInput) {
                inputBinding.longitudeInput.on("change", function(e) {
                    var longitudeInputValue = $(this).val();
                    if (!e.originalEvent || isNaN(longitudeInputValue) ) { return }
                    GmUtility.setPosition(gmapContext, new google.maps.LatLng(gmapContext.location.lat(), longitudeInputValue), function(context){
                        context.settings.onchanged.apply(gmapContext.domContainer,
                            [GmUtility.locationFromLatLng(context.location), context.radius, false]);
                        updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                    });
                });
            }
        }
    }

    function autosize(gmapContext) {
        google.maps.event.trigger(gmapContext.map, 'resize');
        setTimeout(function() {
            gmapContext.map.setCenter(gmapContext.marker.position);
        }, 300);
    }

    function updateMap(gmapContext, $target, options) {
        var settings = $.extend({}, $.fn.locationpicker.defaults, options ),
            latNew = settings.location.latitude,
            lngNew = settings.location.longitude,
            radiusNew = settings.radius,
            latOld = gmapContext.settings.location.latitude,
            lngOld = gmapContext.settings.location.longitude,
            radiusOld = gmapContext.settings.radius;

        if (latNew == latOld && lngNew == lngOld && radiusNew == radiusOld)
        return;

        gmapContext.settings.location.latitude = latNew;
        gmapContext.settings.location.longitude = lngNew;
        gmapContext.radius = radiusNew;

        GmUtility.setPosition(gmapContext, new google.maps.LatLng(gmapContext.settings.location.latitude, gmapContext.settings.location.longitude), function(context){
            setupInputListenersInput(gmapContext.settings.inputBinding, gmapContext);
            context.settings.oninitialized($target);
        });
    }
    /**
     * Initializeialization:
     *  $("#myMap").locationpicker(options);
     * @param options
     * @param params
     * @returns {*}
     */
    $.fn.locationpicker = function( options, params ) {
        if (typeof options == 'string') { // Command provided
            var _targetDomElement = this.get(0);
            // Plug-in is not applied - nothing to do.
            if (!isPluginApplied(_targetDomElement)) return;
            var gmapContext = getContextForElement(_targetDomElement);
            switch (options) {
                case "location":
                    if (params == undefined) { // Getter
                        var location = GmUtility.locationFromLatLng(gmapContext.location);
                        location.radius = gmapContext.radius;
                        location.name = gmapContext.locationName;
                        return location;
                    } else { // Setter
                        if (params.radius) {
                            gmapContext.radius = params.radius;
                        }
                        GmUtility.setPosition(gmapContext, new google.maps.LatLng(params.latitude, params.longitude), function(gmapContext) {
                            updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                        });
                    }
                    break;
                case "subscribe":
                    /**
                     * Provides interface for subscribing for GoogleMap events.
                     * See Google API documentation for details.
                     * Parameters:
                     * - event: string, name of the event
                     * - callback: function, callback function to be invoked
                     */
                    if (params == undefined) { // Getter is not available
                        return null;
                    } else {
                        var event = params.event;
                        var callback = params.callback;
                        if (!event || ! callback) {
                            console.error("LocationPicker: Invalid arguments for method \"subscribe\"")
                            return null;
                        }
                        google.maps.event.addListener(gmapContext.map, event, callback);
                    }
                    break;
                case "map":
                    /**
                     * Returns object which allows access actual google widget and marker paced on it.
                     * Structure: {
                     *  map: Instance of the google map widget
                     *  marker: marker placed on map
                     * }
                     */
                    if (params == undefined) { // Getter
                        var locationObj = GmUtility.locationFromLatLng(gmapContext.location);
                        locationObj.formattedAddress = gmapContext.locationName;
                        locationObj.addressComponents = gmapContext.addressComponents;
                        return {
                            map: gmapContext.map,
                            marker: gmapContext.marker,
                            location: locationObj
                        }
                    } else { // Setter is not available
                        return null;
                    }
                case "autosize":
                    autosize(gmapContext);
                    return this;
            }
            return null;
        }
        return this.each(function() {
            var $target = $(this);
            // If plug-in hasn't been applied before - initialize, otherwise - skip
            if (isPluginApplied(this)){
              updateMap(getContextForElement(this), $(this), options);
              return;
            }
            // Plug-in initialization is required
            // Defaults
            var settings = $.extend({}, $.fn.locationpicker.defaults, options );
            // Initialize
            var gmapContext = new GMapContext(this, $.extend({}, {
                zoom: settings.zoom,
                center: new google.maps.LatLng(settings.location.latitude, settings.location.longitude),
                mapTypeId: settings.mapTypeId,
                mapTypeControl: false,
                styles: settings.styles,
                disableDoubleClickZoom: false,
                scrollwheel: settings.scrollwheel,
                streetViewControl: false,
                radius: settings.radius,
                locationName: settings.locationName,
                settings: settings,
                autocompleteOptions : settings.autocompleteOptions,
                addressFormat: settings.addressFormat,
                draggable: settings.draggable,
                markerIcon: settings.markerIcon,
                markerDraggable: settings.markerDraggable,
                markerVisible: settings.markerVisible
            },  settings.mapOptions));
            $target.data("locationpicker", gmapContext);
            // Subscribe GMap events
            function displayMarkerWithSelectedArea() {
                GmUtility.setPosition(gmapContext, gmapContext.marker.position, function (context) {
                    var currentLocation = GmUtility.locationFromLatLng(gmapContext.location);
                    updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                    context.settings.onchanged.apply(gmapContext.domContainer, [currentLocation, context.radius, true]);
                });
            }
            if (settings.markerInCenter) {
                gmapContext.map.addListener("bounds_changed", function () {
                    if (!gmapContext.marker.dragging) {
                        gmapContext.marker.setPosition(gmapContext.map.center);
                        updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                    }
                });
                gmapContext.map.addListener("idle", function () {
                    if (!gmapContext.marker.dragging) {
                        displayMarkerWithSelectedArea();
                    }
                });
            }
            google.maps.event.addListener(gmapContext.marker, "drag", function(event) {
                updateInputValues(gmapContext.settings.inputBinding, gmapContext);
            });
            google.maps.event.addListener(gmapContext.marker, "dragend", function(event) {
                displayMarkerWithSelectedArea();
            });
            GmUtility.setPosition(gmapContext, new google.maps.LatLng(settings.location.latitude, settings.location.longitude), function(context){
                updateInputValues(settings.inputBinding, gmapContext);
                // Set  input bindings if needed
                setupInputListenersInput(settings.inputBinding, gmapContext);
                context.settings.oninitialized($target);
            });
        });
    };
    $.fn.locationpicker.defaults = {
        location: {latitude: 40.7324319, longitude: -73.82480777777776},
        locationName: "",
        radius: 500,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [],
        mapOptions: {},
        scrollwheel: true,
        inputBinding: {
            latitudeInput: null,
            longitudeInput: null,
            radiusInput: null,
            locationNameInput: null
        },
        enableAutocomplete: false,
        enableAutocompleteBlur: false,
        autocompleteOptions: null,
        addressFormat: 'postal_code',
        enableReverseGeocode: true,
        draggable: true,
        onchanged: function(currentLocation, radius, isMarkerDropped) {},
        onlocationnotfound: function(locationName) {},
        oninitialized: function (component) {},
        // must be undefined to use the default gMaps marker
        markerIcon: undefined,
        markerDraggable: true,
        markerVisible : true
    }
}( jQuery ));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }

});
//# sourceMappingURL=17.map