(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.button_layout {\r\n    position: relative;\r\n    display: inline-block;\r\n    font-size: 90%;\r\n    font-weight: 700;\r\n    color: rgb(209,209,217);\r\n    text-decoration: none;\r\n    margin: 10px;\r\n    text-shadow: 0 -1px 2px rgba(0,0,0,.2);\r\n    padding: .5em 1em;\r\n    outline: none;\r\n    border-radius: 3px;\r\n    background: linear-gradient(rgb(110,112,120), rgb(81,81,86)) rgb(110,112,120);\r\n    box-shadow:\r\n     0 1px rgba(255,255,255,.2) inset,\r\n     0 3px 5px rgba(0,1,6,.5),\r\n     0 0 1px 1px rgba(0,1,6,.2);\r\n    transition: .2s ease-in-out;\r\n  }\r\n  a.button_layout:hover:not(:active) {\r\n    background: linear-gradient(rgb(126,126,134), rgb(70,71,76)) rgb(126,126,134);\r\n  }\r\n  a.button_layout:active {\r\n    top: 1px;\r\n    background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82);\r\n    box-shadow:\r\n     0 0 1px rgba(0,0,0,.5) inset,\r\n     0 2px 3px rgba(0,0,0,.5) inset,\r\n     0 1px 1px rgba(255,255,255,.1);\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n    <script src='https://www.google.com/recaptcha/api.js'></script>\n</head>\n\n<body class=\"background-black\">\n<nav>\n        <a routerLink=\"/registration\" routerLinkActive=\"active\" class=\"button_layout\">Sign Up</a>\n        <a routerLink=\"/auth\" routerLinkActive=\"active\" class=\"button_layout\">Log In</a>\n</nav>\n       \n</body>\n<router-outlet></router-outlet>\n</html>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.text = 'is a random text';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'auth', component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.component.css":
/*!*************************************************************!*\
  !*** ./src/app/authentication/authentication.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nhtml, body\r\n{\r\n    height: 90%;\r\n}\r\n\r\nbody\r\n{\r\n    font: 12px 'Lucida Sans Unicode', 'Trebuchet MS', Arial, Helvetica;    \r\n    margin: 0;\r\n    background: url(data:image/png;base64,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) repeat; \r\n}\r\n\r\n/*--------------------*/\r\n\r\n#login\r\n{\r\n    background-color: #fff;\r\n    background-image: -o-linear-gradient(top, #fff, #eee);\r\n    /* background-image: linear-gradient(top, #fff, #eee);   */\r\n    height: 240px;\r\n    width: 400px;\r\n    margin: -150px 0 0 -230px;\r\n    padding: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 0;\r\n    border-radius: 3px;\r\n    box-shadow:\r\n          0 0 2px rgba(0, 0, 0, 0.2),  \r\n          0 1px 1px rgba(0, 0, 0, .2),\r\n          0 3px 0 #fff,\r\n          0 4px 0 rgba(0, 0, 0, .2),\r\n          0 6px 0 #fff,  \r\n          0 7px 0 rgba(0, 0, 0, .2);\r\n}\r\n\r\n#login:before\r\n{\r\n    content: '';\r\n    position: absolute;\r\n    z-index: -1;\r\n    border: 1px dashed #ccc;\r\n    top: 5px;\r\n    bottom: 5px;\r\n    left: 5px;\r\n    right: 5px;\r\n    box-shadow: 0 0 0 1px #fff;\r\n}\r\n\r\n/*--------------------*/\r\n\r\nh1\r\n{\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, .7), 0px 2px 0 rgba(0, 0, 0, .5);\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: #666;\r\n    margin: 0 0 30px 0;\r\n    letter-spacing: 4px;\r\n    font: normal 26px/1 Verdana, Helvetica;\r\n    position: relative;\r\n}\r\n\r\n/*--------------------*/\r\n\r\nfieldset\r\n{\r\n    border: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n/*--------------------*/\r\n\r\n#inputs input\r\n{\r\n    background: #f1f1f1;\r\n    padding: 15px 15px 15px 30px;\r\n    margin: 0 0 10px 0;\r\n    width: 353px; /* 353 + 2 + 45 = 400 */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 1px #ccc inset, 0 1px 0 #fff;\r\n}\r\n\r\n#username\r\n{\r\n    background-position: 5px -2px !important;\r\n}\r\n\r\n#password\r\n{\r\n    background-position: 5px -52px !important;\r\n}\r\n\r\n#inputs input:focus\r\n{\r\n    background-color: #fff;\r\n    border-color: #e8c291;\r\n    outline: none;\r\n    box-shadow: 0 0 0 1px #e8c291 inset;\r\n}\r\n\r\n/*--------------------*/\r\n\r\n#actions\r\n{\r\n    /* margin: 25px 0 0 0; */\r\n}\r\n\r\n#submit\r\n{\t\t\r\n    background-color: #ffb94b;\r\n    background-image: -o-linear-gradient(top, #fddb6f, #ffb94b);\r\n    /* background-image: linear-gradient(top, #fddb6f, #ffb94b); */\r\n    border-radius: 3px;\r\n    \r\n    text-shadow: 0 1px 0 rgba(255,255,255,0.5);\r\n     box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;    \r\n    \r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n\r\n    float: left;\r\n    height: 35px;\r\n    padding: 0;\r\n    width: 120px;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n\r\n#submit:hover,#submit:focus\r\n{\t\t\r\n    background-color: #fddb6f;\r\n    background-image: -o-linear-gradient(top, #ffb94b, #fddb6f);\r\n    /* background-image: linear-gradient(top, #ffb94b, #fddb6f); */\r\n}\r\n\r\n#submit:active\r\n{\t\t\r\n    outline: none;\r\n     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;\t\t\r\n}\r\n\r\n#submit::-moz-focus-inner\r\n{\r\n  border: none;\r\n}\r\n\r\n#actions a\r\n{\r\n    color: #3151A2;    \r\n    float: right;\r\n    line-height: 35px;\r\n    margin-left: 10px;\r\n}\r\n\r\n/*--------------------*/\r\n\r\n#back\r\n{\r\n    display: block;\r\n    text-align: center;\r\n    position: relative;\r\n    top: 60px;\r\n    color: #999;\r\n}\r\n\r\n/* Стили бара vladmaxi, можно удалить */\r\n\r\n.vladmaxi-top{\r\n\tline-height: 24px;\r\n\tfont-size: 11px;\r\n\tbackground: rgba(0, 0, 0, 0.08);\r\n\ttext-transform: uppercase;\r\n\tz-index: 9999;\r\n\tposition: fixed;\r\n\ttop:0;\r\n\tleft:0;\r\n\twidth:100%;\r\n\tfont-family: calibri;\r\n\tfont-size: 13px;\r\n\tbox-shadow: 1px 0px 2px rgba(0,0,0,0.2);\r\n\t-webkit-animation: slideOut 0.5s ease-in-out 0.3s backwards;\r\n}\r\n\r\n@-webkit-keyframes slideOut{\r\n\t0%{top:-30px; opacity: 0;}\r\n\t100%{top:0px; opacity: 1;}\r\n}\r\n\r\n.vladmaxi-top a{\r\n\tpadding: 0px 10px;\r\n\tletter-spacing: 1px;\r\n\tcolor: #333;\r\n\ttext-shadow: 0px 1px 1px #fff;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n}\r\n\r\n.vladmaxi-top a:hover{\r\n\tbackground: #fff;\r\n}\r\n\r\n.vladmaxi-top span.right{\r\n\tfloat: right;\r\n}\r\n\r\n.vladmaxi-top span.right a{\r\n\tfloat: left;\r\n\tdisplay: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/authentication/authentication.component.html":
/*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n</head>\n\n<body>\n\n<form id=\"login\">\n    <h1>Форма входа</h1>\n    <fieldset id=\"inputs\">\n        <input id=\"username\" type=\"text\" placeholder=\"Логин\" autofocus required>   \n        <input id=\"password\" type=\"password\" placeholder=\"Пароль\" required>\n    </fieldset>\n    <fieldset id=\"actions\">\n            <p>\n                    <label>\n                      <input type=\"checkbox\" />\n                      <span>Red</span>\n                    </label>\n                  </p>  \n        <input type=\"submit\" id=\"submit\" value=\"ВОЙТИ\">       \n        <a href=\"\">Забыли пароль?</a><a routerLink=\"/registration\" routerLinkActive=\"active\">Регистрация</a>\n    </fieldset>\n</form>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.css */ "./src/app/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nhtml, body\r\n{\r\n    height: 90%;\r\n}\r\n\r\nbody\r\n{\r\n    font: 12px 'Lucida Sans Unicode', 'Trebuchet MS', Arial, Helvetica;    \r\n    margin: 0;\r\n    background: url(data:image/png;base64,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) repeat; \r\n}\r\n\r\n/*--------------------*/\r\n\r\n#login\r\n{\r\n    background-color: #fff;\r\n    background-image: -o-linear-gradient(top, #fff, #eee);\r\n    /* background-image: linear-gradient(top, #fff, #eee);   */\r\n    height: 340px;\r\n    width: 400px;\r\n    margin: -150px 0 0 -230px;\r\n    padding: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 0;\r\n    border-radius: 3px;\r\n    box-shadow:\r\n          0 0 2px rgba(0, 0, 0, 0.2),  \r\n          0 1px 1px rgba(0, 0, 0, .2),\r\n          0 3px 0 #fff,\r\n          0 4px 0 rgba(0, 0, 0, .2),\r\n          0 6px 0 #fff,  \r\n          0 7px 0 rgba(0, 0, 0, .2);\r\n}\r\n\r\n#login:before\r\n{\r\n    content: '';\r\n    position: absolute;\r\n    z-index: -1;\r\n    border: 1px dashed #ccc;\r\n    top: 5px;\r\n    bottom: 5px;\r\n    left: 5px;\r\n    right: 5px;\r\n    box-shadow: 0 0 0 1px #fff;\r\n}\r\n\r\n/*--------------------*/\r\n\r\nh1\r\n{\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, .7), 0px 2px 0 rgba(0, 0, 0, .5);\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: #666;\r\n    margin: 0 0 30px 0;\r\n    letter-spacing: 4px;\r\n    font: normal 26px/1 Verdana, Helvetica;\r\n    position: relative;\r\n}\r\n\r\n/*--------------------*/\r\n\r\nfieldset\r\n{\r\n    border: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n/*--------------------*/\r\n\r\n#inputs input\r\n{\r\n    background: #f1f1f1;\r\n    padding: 15px 15px 15px 30px;\r\n    margin: 0 0 10px 0;\r\n    width: 353px; /* 353 + 2 + 45 = 400 */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 1px #ccc inset, 0 1px 0 #fff;\r\n}\r\n\r\n#username\r\n{\r\n    background-position: 5px -2px !important;\r\n}\r\n\r\n#password\r\n{\r\n    background-position: 5px -52px !important;\r\n}\r\n\r\n#inputs input:focus\r\n{\r\n    background-color: #fff;\r\n    border-color: #e8c291;\r\n    outline: none;\r\n    box-shadow: 0 0 0 1px #e8c291 inset;\r\n}\r\n\r\n/*--------------------*/\r\n\r\n#actions\r\n{\r\n    margin: 25px 0 0 0;\r\n}\r\n\r\n#submit\r\n{\t\t\r\n    background-color: #ffb94b;\r\n    background-image: -o-linear-gradient(top, #fddb6f, #ffb94b);\r\n    /* background-image: linear-gradient(top, #fddb6f, #ffb94b); */\r\n    border-radius: 3px;\r\n    \r\n    text-shadow: 0 1px 0 rgba(255,255,255,0.5);\r\n     box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;    \r\n    \r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n\r\n    float: left;\r\n    height: 35px;\r\n    padding: 0;  \r\n    width: 170px;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n\r\n#submit:hover,#submit:focus\r\n{\t\t\r\n    background-color: #fddb6f;\r\n    background-image: -o-linear-gradient(top, #ffb94b, #fddb6f);\r\n    /* background-image: linear-gradient(top, #ffb94b, #fddb6f); */\r\n}\r\n\r\n#submit:active\r\n{\t\t\r\n    outline: none;\r\n     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;\t\t\r\n}\r\n\r\n#submit::-moz-focus-inner\r\n{\r\n  border: none;\r\n}\r\n\r\n#actions a\r\n{\r\n    color: #3151A2;    \r\n    float: right;\r\n    line-height: 35px;\r\n    margin-left: 10px;\r\n}\r\n\r\n/*--------------------*/\r\n\r\n#back\r\n{\r\n    display: block;\r\n    text-align: center;\r\n    position: relative;\r\n    top: 60px;\r\n    color: #999;\r\n}\r\n\r\n/* Стили бара vladmaxi, можно удалить */\r\n\r\n.vladmaxi-top{\r\n\tline-height: 24px;\r\n\tfont-size: 11px;\r\n\tbackground: rgba(0, 0, 0, 0.08);\r\n\ttext-transform: uppercase;\r\n\tz-index: 9999;\r\n\tposition: fixed;\r\n\ttop:0;\r\n\tleft:0;\r\n\twidth:100%;\r\n\tfont-family: calibri;\r\n\tfont-size: 13px;\r\n\tbox-shadow: 1px 0px 2px rgba(0,0,0,0.2);\r\n\t-webkit-animation: slideOut 0.5s ease-in-out 0.3s backwards;\r\n}\r\n\r\n@-webkit-keyframes slideOut{\r\n\t0%{top:-30px; opacity: 0;}\r\n\t100%{top:0px; opacity: 1;}\r\n}\r\n\r\n.vladmaxi-top a{\r\n\tpadding: 0px 10px;\r\n\tletter-spacing: 1px;\r\n\tcolor: #333;\r\n\ttext-shadow: 0px 1px 1px #fff;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n}\r\n\r\n.vladmaxi-top a:hover{\r\n\tbackground: #fff;\r\n}\r\n\r\n.vladmaxi-top span.right{\r\n\tfloat: right;\r\n}\r\n\r\n.vladmaxi-top span.right a{\r\n\tfloat: left;\r\n\tdisplay: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"login\">\n    <h1>Регистрация</h1>\n    <fieldset id=\"inputs\">\n        <input id=\"username\" type=\"text\" placeholder=\"Логин\" autofocus required>\n        <input id=\"email\" type=\"email\" placeholder=\"Почта\" required>   \n        <input id=\"password\" type=\"password\" placeholder=\"Пароль\" required>\n        <input id=\"password_copy\" type=\"password\" placeholder=\"Повторите пароль\" required>\n    </fieldset>\n    <fieldset id=\"actions\">\n        <form action=\"\">\n        <input type=\"submit\" id=\"submit\" value=\"Зарегистрироваться\">\n        <div class=\"g-recaptcha\" data-sitekey=\"6Lf0_CoUAAAAAKibE4lxIMuLsDNnNOwHpnN8MsbK\"></div>\n    </form>\n    </fieldset>\n    <script src='https://www.google.com/recaptcha/api.js'></script>\n</form>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nick\source\repos\ToDoProject\WebUI\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map