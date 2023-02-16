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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.api */ "./src/app/Service/base.api.ts");




let ApiService = class ApiService extends _base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"] {
    GetJsonLabel() {
        var version = new Date().toLocaleString();
        var jsonPath = '../../../assets//data/schema-contents.json?' + version;
        return this._get(jsonPath);
    }
    GetJsonProducts() {
        var version = new Date().toLocaleString();
        var jsonPath = '../../../assets//data/schema_products.json?' + version;
        return this._get(jsonPath);
    }
    GetSample(id) {
        return this._post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].UrlAPI + 'controller/api', {
            "id": id
        });
    }
    PostSample(obj) {
        return this._post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].UrlAPI + 'controller/api', obj);
    }
};
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");




let BaseApi = class BaseApi {
    constructor(http) {
        this.http = http;
    }
    createHeader(onlyCORS = false) {
        var headersPar;
        headersPar = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        });
        const options = { headers: headersPar };
        return options;
    }
    _get(url, auth = true) {
        var obj;
        if (auth)
            obj = this.http.get(url, this.createHeader());
        else
            obj = this.http.get(url, this.createHeader(true));
        return obj;
    }
    _post(url, data) {
        var obj = this.http.post(url, data, this.createHeader());
        return obj;
    }
};
BaseApi.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BaseApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BaseApi);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let Service = class Service {
    constructor() {
        this.language = "";
        this.version = "";
    }
    GetTextInJson(json, key) {
        if (json[key][this.language] == undefined)
            return "** " + key + " **";
        return json[key][this.language];
    }
    GetTextInArray(json, label) {
        if (json[this.language] == undefined)
            return "** " + label + " **";
        return json[this.language];
    }
    GetTextInJsonStatic(json, key) {
        var values = Object.values(json);
        if (values[0][key][this.language] == undefined)
            return "** " + key + " **";
        return values[0][key][this.language];
    }
    GetTextInArrayStatic(json, label) {
        if (json[this.language] == undefined)
            return "** " + label + " **";
        return json[this.language];
    }
};
Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Service);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Service_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Service/api */ "./src/app/Service/api.ts");
/* harmony import */ var _Service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Service/service */ "./src/app/Service/service.ts");




let AppComponent = class AppComponent {
    constructor(serv, api) {
        this.serv = serv;
        this.api = api;
        this.title = 'LoroPiana-Capsule2023Feb23-TestEmpty';
        this.products = undefined;
        this.groups = undefined;
        this.cnt_Title = "";
        this.cnt_SubTitle = "";
        this.cnt_VideoUrl = "";
    }
    ngOnInit() {
        //var myLang = $("meta[name=kl-lang]").attr("value");
        //if (myLang == null || myLang == '') myLang = "en";
        var myLang = "en";
        this.serv.language = myLang;
        this.api.GetJsonLabel().subscribe(data => {
            //Populate Labels
            this.cnt_Title = this.serv.GetTextInJson(data, "title1");
            this.cnt_SubTitle = this.serv.GetTextInJson(data, "title2");
            this.cnt_VideoUrl = this.serv.GetTextInJson(data, "videoUrl");
        });
        this.api.GetJsonProducts().subscribe(data => {
            //Populate Data
            this.products = data;
            this.groups = this.products.groups;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _Service_service__WEBPACK_IMPORTED_MODULE_3__["Service"] },
    { type: _Service_api__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_service__WEBPACK_IMPORTED_MODULE_3__["Service"], _Service_api__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Service/service */ "./src/app/Service/service.ts");
/* harmony import */ var _Service_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Service/api */ "./src/app/Service/api.ts");







let AppModule = class AppModule {
};
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map