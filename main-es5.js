(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************************************************************!*\
  !*** /Users/stefanomagri/Projects/Kleeks.MultiProjects/node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"col-12\">\n          \n      </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-12\">\n          <h1 [innerHTML]=\"cnt_Title + ' ' + cnt_SubTitle\"></h1>\n      </div>\n\n      <div class=\"col-12\">\n          <h2 [innerHTML]=\"cnt_SubTitle\"></h2>\n      </div>\n\n      <div class=\"col-12\">\n\n          <div *ngFor=\"let group of groups\" class=\"mt-5\">\n              <h4 [innerHTML]=\"serv.GetTextInArray(group.groupLabel, group.groupName)\"></h4>\n\n              <div *ngFor=\"let section of group.sections\" class=\"mt-5\">\n                  <h5 [innerHTML]=\"serv.GetTextInArray(section.title, section.sectionName)\"></h5>\n\n                  <hr>\n\n                  <div class=\"container-fluid\">\n                      <div class=\"row\">\n                          <div *ngFor=\"let product of section.products\"\n                              class=\"carousel__item col-12 col-sm-4 col-md-3 col-lg-2 m-2\"\n                              style=\"border:1px solid gray;\">\n                              <p class=\"text-center\" [innerHTML]=\"product.sku\"></p>\n                            \n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Service/api.ts":
/*!********************************!*\
  !*** ./src/app/Service/api.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.api */ "./src/app/Service/base.api.ts");




var ApiService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ApiService, _super);
    function ApiService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApiService.prototype.GetJsonLabel = function () {
        var version = new Date().toLocaleString();
        var jsonPath = '../../../assets/data/schema-contents.json?' + version;
        return this._get(jsonPath);
    };
    ApiService.prototype.GetJsonProducts = function () {
        var version = new Date().toLocaleString();
        var jsonPath = '../../../assets/data/schema_products.json?' + version;
        return this._get(jsonPath);
    };
    ApiService.prototype.GetSample = function (id) {
        return this._post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].UrlAPI + 'controller/api', {
            "id": id
        });
    };
    ApiService.prototype.PostSample = function (obj) {
        return this._post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].UrlAPI + 'controller/api', obj);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ApiService);
    return ApiService;
}(_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/Service/base.api.ts":
/*!*************************************!*\
  !*** ./src/app/Service/base.api.ts ***!
  \*************************************/
/*! exports provided: BaseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApi", function() { return BaseApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");




var BaseApi = /** @class */ (function () {
    function BaseApi(http) {
        this.http = http;
    }
    BaseApi.prototype.createHeader = function (onlyCORS) {
        if (onlyCORS === void 0) { onlyCORS = false; }
        var headersPar;
        headersPar = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        });
        var options = { headers: headersPar };
        return options;
    };
    BaseApi.prototype._get = function (url, auth) {
        if (auth === void 0) { auth = true; }
        var obj;
        if (auth)
            obj = this.http.get(url, this.createHeader());
        else
            obj = this.http.get(url, this.createHeader(true));
        return obj;
    };
    BaseApi.prototype._post = function (url, data) {
        var obj = this.http.post(url, data, this.createHeader());
        return obj;
    };
    BaseApi.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BaseApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BaseApi);
    return BaseApi;
}());



/***/ }),

/***/ "./src/app/Service/service.ts":
/*!************************************!*\
  !*** ./src/app/Service/service.ts ***!
  \************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var Service = /** @class */ (function () {
    function Service() {
        this.language = "";
        this.version = "";
    }
    Service.prototype.GetTextInJson = function (json, key) {
        if (json[key][this.language] == undefined)
            return "** " + key + " **";
        return json[key][this.language];
    };
    Service.prototype.GetTextInArray = function (json, label) {
        if (json[this.language] == undefined)
            return "** " + label + " **";
        return json[this.language];
    };
    Service.prototype.GetTextInJsonStatic = function (json, key) {
        var values = Object.values(json);
        if (values[0][key][this.language] == undefined)
            return "** " + key + " **";
        return values[0][key][this.language];
    };
    Service.prototype.GetTextInArrayStatic = function (json, label) {
        if (json[this.language] == undefined)
            return "** " + label + " **";
        return json[this.language];
    };
    Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9Mb3JvUGlhbmEtQ2Fwc3VsZTIwMjNGZWIyMy1UZXN0RW1wdHkvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Service/api */ "./src/app/Service/api.ts");
/* harmony import */ var _Service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Service/service */ "./src/app/Service/service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(serv, api) {
        this.serv = serv;
        this.api = api;
        this.title = 'LoroPiana-Capsule2023Feb23-TestEmpty';
        this.products = undefined;
        this.groups = undefined;
        this.cnt_Title = "";
        this.cnt_SubTitle = "";
        this.cnt_VideoUrl = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //var myLang = $("meta[name=kl-lang]").attr("value");
        //if (myLang == null || myLang == '') myLang = "en";
        var myLang = "en";
        this.serv.language = myLang;
        this.api.GetJsonLabel().subscribe(function (data) {
            //Populate Labels
            _this.cnt_Title = _this.serv.GetTextInJson(data, "title1");
            _this.cnt_SubTitle = _this.serv.GetTextInJson(data, "title2");
            _this.cnt_VideoUrl = _this.serv.GetTextInJson(data, "videoUrl");
        });
        this.api.GetJsonProducts().subscribe(function (data) {
            //Populate Data
            _this.products = data;
            _this.groups = _this.products.groups;
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _Service_service__WEBPACK_IMPORTED_MODULE_3__["Service"] },
        { type: _Service_api__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_service__WEBPACK_IMPORTED_MODULE_3__["Service"], _Service_api__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Service/service */ "./src/app/Service/service.ts");
/* harmony import */ var _Service_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Service/api */ "./src/app/Service/api.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_Service_service__WEBPACK_IMPORTED_MODULE_5__["Service"], _Service_api__WEBPACK_IMPORTED_MODULE_6__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    UrlAPI: "http://api.temp"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stefanomagri/Projects/Kleeks.MultiProjects/projects/LoroPiana-Capsule2023Feb23-TestEmpty/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map