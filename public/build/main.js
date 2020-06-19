webpackJsonp([1],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardsPage = /** @class */ (function () {
    function CardsPage(navCtrl, navParams, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.card = {};
    }
    CardsPage.prototype.ionViewDidLoad = function () {
    };
    CardsPage.prototype.saveCard = function () {
        var _this = this;
        this.authProvider.addCard(this.card).subscribe(function (response) {
            _this.authProvider.updateUser(response);
            _this.navCtrl.pop();
        });
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/cards/cards.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button navPop icon-only>\n          <ion-icon name="ios-arrow-back" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title text-center>Credit or Debit Card</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="cont">\n    <h3>Card</h3>\n      <ion-item>\n          <ion-label floating>Card Number</ion-label>\n          <ion-input [(ngModel)]="card.number" type="text"></ion-input>\n        </ion-item>\n\n        <ion-row>\n          <ion-col col-6>\n              <ion-item>\n                  <ion-label floating>Exp. Date</ion-label>\n                  <ion-input [(ngModel)]="card.expiration" placeholder="MM/YY" type="text"></ion-input>\n              </ion-item>\n          </ion-col>\n          <ion-col col-6>\n              <ion-item>\n                  <ion-label floating>CVV</ion-label>\n                  <ion-input [(ngModel)]="card.cvv2" type="text"></ion-input>\n              </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-item>\n            <ion-label floating>First Name </ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Last Name </ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines class="save">\n            <ion-label class="toggle-txt">Remember this card fof future orders</ion-label>\n            <ion-toggle mode="ios" color="blue" checked="true"></ion-toggle>\n      </ion-item>\n      <br>\n      <h3>Billing Address</h3>\n      <ion-item>\n      <ion-label floating>Country or Region </ion-label>\n      <ion-select type="text">\n        <ion-option></ion-option>\n      </ion-select>\n      <ion-icon name="ios-arrow-forward"  item-end></ion-icon>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Street Address </ion-label>\n        <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Street Address 2</ion-label>\n        <ion-input type="text"></ion-input>\n    </ion-item>\n        <ion-item>\n            <ion-label floating>City </ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>State</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Zip Code</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Phone Number</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n  </div>\n</ion-content>\n\n<ion-footer padding>\n  <button class="footer-btn" ion-button (click)="saveCard()">Done</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/cards/cards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the PaymentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PaymentProvider = /** @class */ (function () {
    function PaymentProvider(http) {
        this.http = http;
    }
    PaymentProvider.prototype.checkout = function (order, token) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].API_URL + 'payment/checkout', order, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    PaymentProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error));
        }
        // return an observable with a user-facing error message
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw('Something bad happened; please try again later.');
    };
    ;
    PaymentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PaymentProvider);
    return PaymentProvider;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ThankyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThankyouPage = /** @class */ (function () {
    function ThankyouPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ThankyouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankyouPage');
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/thankyou/thankyou.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button navPop icon-only class="arrow-back">\n          <ion-icon name="close" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n  \n\n<ion-content padding>\n  <div class="vert-align">\n    <div class="img-circle">\n      <img src="assets/icon/check.png" alt="">\n    </div>\n    <p>Thank You, for your Purchase</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/thankyou/thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__price_curve_price_curve__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_bottom_drawer__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_icon_cart_icon__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__price_curve_price_curve__["a" /* PriceCurveComponent */],
                __WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_5__cart_icon_cart_icon__["a" /* CartIconComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ion_bottom_drawer__["a" /* IonBottomDrawerModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__price_curve_price_curve__["a" /* PriceCurveComponent */],
                __WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_5__cart_icon_cart_icon__["a" /* CartIconComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instasearch_instasearch__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_search__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, app, searchProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.searchProvider = searchProvider;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // if instaSearch param
        if (this.navParams.get('search')) {
            this.keyword = this.navParams.get('search');
            this.search();
        }
        this.products = [];
        this.searching = false;
        this.searchProvider.getProducts().subscribe(function (response) {
            _this.products = response;
        });
    };
    SearchPage.prototype.gotoInstasearchPage = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__instasearch_instasearch__["a" /* InstasearchPage */]);
    };
    SearchPage.prototype.search = function () {
        var _this = this;
        if (this.keyword !== '') {
            this.searching = true;
            this.searchProvider.search(this.keyword).subscribe(function (results) {
                if (results)
                    _this.products = results;
                _this.searching = false;
            });
        }
    };
    SearchPage.prototype.gotoProductsPage = function (product) {
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-search",template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="searchbar-cont">\n      <input type="text" placeholder="Search" [(ngModel)]="keyword" (keypress)="search()" />\n      <button ion-button clear icon-only (click)="gotoInstasearchPage()">\n        <ion-icon name="customcamera" class="img-camera"></ion-icon>\n      </button>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="products" *ngIf="products && !searching">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 *ngFor="let product of products">\n          <button ion-item class="product-box" (click)="gotoProductsPage(product)">\n            <p class="muted">{{ product.price | currency:\'USD\':\'symbol\':\'2.2\' }}</p>\n            <img [src]="product.images[0].url"  alt="">\n            <h4 class="product-title">{{ product.name.split(\' \').slice(0, 2).join(\' \') }}</h4>\n          </button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class="d-flex spinning" *ngIf="searching">\n    <!-- Crescent -->\n    <ion-spinner name="crescent"></ion-spinner>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__providers_search_search__["a" /* SearchProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PypPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PypPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PypPage = /** @class */ (function () {
    function PypPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.amount = 450;
    }
    PypPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PypPage');
    };
    PypPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pyp',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/pyp/pyp.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button navPop icon-only class="arrow-back">\n          <ion-icon name="close" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n  \n\n<ion-content>\n  <div class="vert-align" padding>\n    <h3 text-center>You pick your price</h3>\n   \n    <div  class="cont">\n      <div class="d-flex">\n        <div class="inputs">\n            <sup class="sup">$</sup>\n            <input type="number"  [(ngModel)]="amount">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="calculator">\n    <ion-row>\n      <ion-col col-4 class="border-right">\n        <button class="cal-btn" ion-button clear>\n          <div>\n            <h1>1</h1>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col col-4 class="border-right">\n          <button class="cal-btn" ion-button clear>\n              <div>\n                <h1>2</h1>\n              </div>\n          </button>\n      </ion-col>\n      <ion-col col-4>\n          <button class="cal-btn" ion-button clear>\n              <div>\n                <h1>3</h1>\n              </div>\n          </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-4 class="border-right">\n          <button class="cal-btn" ion-button clear>\n            <div>\n              <h1>4</h1>\n            </div>\n          </button>\n        </ion-col>\n        <ion-col col-4 class="border-right">\n            <button class="cal-btn" ion-button clear>\n                <div>\n                  <h1>5</h1>\n                </div>\n            </button>\n        </ion-col>\n        <ion-col col-4>\n            <button class="cal-btn" ion-button clear>\n                <div>\n                  <h1>6</h1>\n                </div>\n            </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-4 class="border-right">\n            <button class="cal-btn" ion-button clear>\n              <div>\n                <h1>7</h1>\n              </div>\n            </button>\n          </ion-col>\n          <ion-col col-4 class="border-right">\n              <button class="cal-btn" ion-button clear>\n                  <div>\n                    <h1>8</h1>\n                  </div>\n              </button>\n          </ion-col>\n          <ion-col col-4>\n              <button class="cal-btn" ion-button clear>\n                  <div>\n                    <h1>9</h1>\n                  </div>\n              </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-4 class="border-right">\n              <button class="cal-btn" ion-button clear>\n                <div>\n                  <p class="dot"></p>\n                </div>\n              </button>\n            </ion-col>\n            <ion-col col-4 class="border-right">\n                <button class="cal-btn" ion-button clear>\n                    <div>\n                      <h1>0</h1>\n                    </div>\n                </button>\n            </ion-col>\n            <ion-col col-4>\n                <button class="cal-btn" ion-button clear>\n                    <div>\n                      <img src="assets/icon/del.png" alt="">\n                    </div>\n                </button>\n            </ion-col>\n          </ion-row>\n  </div>\n</ion-content>\n\n<ion-footer padding>\n    <p class="footer-p">By confirming, you agree to pay the price above</p>\n    <button ion-button block class="footer-btn">\n        <span class="d-flex">\n            <img src="assets/icon/pay.png" alt="">\n            Confirm Price\n          </span>\n    </button>\n  </ion-footer>'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/pyp/pyp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PypPage);
    return PypPage;
}());

//# sourceMappingURL=pyp.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/address/address.module": [
		222
	],
	"../pages/camera/camera.module": [
		319
	],
	"../pages/cards/cards.module": [
		323
	],
	"../pages/checkout/checkout.module": [
		324
	],
	"../pages/comingsoon/comingsoon.module": [
		326
	],
	"../pages/delphi/delphi.module": [
		327
	],
	"../pages/general/general.module": [
		331
	],
	"../pages/instasearch/instasearch.module": [
		333
	],
	"../pages/login/login.module": [
		339
	],
	"../pages/nebulapay/nebulapay.module": [
		337
	],
	"../pages/orders/orders.module": [
		341
	],
	"../pages/productdetail/productdetail.module": [
		344
	],
	"../pages/pyp/pyp.module": [
		347
	],
	"../pages/regularcheckout/regularcheckout.module": [
		348
	],
	"../pages/search/search.module": [
		351
	],
	"../pages/settings/settings.module": [
		349
	],
	"../pages/signup/signup.module": [
		733,
		0
	],
	"../pages/size/size.module": [
		352
	],
	"../pages/thankyou/thankyou.module": [
		353
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddressPageModule = /** @class */ (function () {
    function AddressPageModule() {
    }
    AddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */]),
            ],
        })
    ], AddressPageModule);
    return AddressPageModule;
}());

//# sourceMappingURL=address.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_bottom_drawer__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CameraPageModule = /** @class */ (function () {
    function CameraPageModule() {
    }
    CameraPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__camera__["a" /* CameraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ion_bottom_drawer__["a" /* IonBottomDrawerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__camera__["a" /* CameraPage */]),
            ],
        })
    ], CameraPageModule);
    return CameraPageModule;
}());

//# sourceMappingURL=camera.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_plazma_plazma__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawerState;
(function (DrawerState) {
    DrawerState[DrawerState["Bottom"] = 0] = "Bottom";
    DrawerState[DrawerState["Docked"] = 1] = "Docked";
    DrawerState[DrawerState["Top"] = 2] = "Top";
})(DrawerState || (DrawerState = {}));
var CameraPage = /** @class */ (function () {
    function CameraPage(navCtrl, navParams, cameraPreview, actionSheet, plazmaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraPreview = cameraPreview;
        this.actionSheet = actionSheet;
        this.plazmaProvider = plazmaProvider;
        this.plazma = {};
        this.sole = false;
        this.auth = false;
        this.shouldBounce = false;
        this.drawerState = DrawerState.Docked;
        this.minimumHeight = 80;
        this.drawer = false;
        this.cameraPreviewOpts = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: "rear",
            tapPhoto: true,
            previewDrag: false,
            toBack: true,
            alpha: 1
        };
        this.showBottomSoleLoader = false;
        this.showSideSoleLoader = false;
        this.showSideSoleCorrectResult = false;
        this.showSideSoleIncorrectResult = true;
        this.showBottomSoleCorrectResult = false;
        this.showBottomSoleIncorrectResult = false;
    }
    CameraPage.prototype.ionViewDidLoad = function () {
        this.cameraPreview.startCamera(this.cameraPreviewOpts).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    CameraPage.prototype.ionViewWillLeave = function () {
        this.cameraPreview.stopCamera();
    };
    CameraPage.prototype.openController = function () {
        var _this = this;
        this.actionSheet
            .create({
            title: "Options",
            buttons: [
                {
                    text: "Authentication",
                    handler: function () {
                        _this.auth = true;
                        _this.toggleDrawer();
                    }
                },
                {
                    text: "Sole Check",
                    handler: function () {
                        _this.sole = true;
                        _this.toggleDrawer();
                    }
                }
            ]
        })
            .present();
    };
    CameraPage.prototype.takePicture = function () {
        var _this = this;
        // take a picture
        this.cameraPreview.takePicture(this.cameraPreviewOpts).then(function (imageData) {
            _this.picture = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
            // this.picture = 'assets/img/test.jpg';
        });
        if (this.auth)
            this.authenticate(this.picture);
        if (this.sole)
            this.checkSole(this.picture);
    };
    CameraPage.prototype.authenticate = function (image) {
        var _this = this;
        this.showSideSoleLoader = true;
        // check if the image is a shoe
        this.plazmaProvider.shoeCheck(image)
            .subscribe(function (response) {
            if (response.toLowerCase() !== 'not shoe') {
                _this.plazma.real = true;
                // check if image is a real shoe or fake shoe
                _this.plazmaProvider.shoeNameCheck(image)
                    .subscribe(function (response) {
                    _this.plazma.name = response;
                });
                _this.plazmaProvider.shoeAuthticityCheck(image)
                    .subscribe(function (response) {
                    _this.plazma.authenticity = response;
                });
                _this.showSideSoleLoader = false;
                _this.showSideSoleCorrectResult = true;
            }
            else {
                _this.plazma.not_shoe = true;
                _this.showSideSoleLoader = false;
                _this.showSideSoleIncorrectResult = true;
            }
        });
    };
    CameraPage.prototype.checkSole = function (image) {
        var _this = this;
        this.showBottomSoleLoader = true;
        this.plazmaProvider.shoeCheck(image)
            .subscribe(function (response) {
            if (response.toLowerCase() !== 'not shoe') {
                _this.plazma.real = true;
                _this.plazmaProvider.shoeNameCheck(image)
                    .subscribe(function (response) {
                    _this.plazma.name = response;
                });
                _this.plazmaProvider.shoeSoleCheck(image)
                    .subscribe(function (response) {
                    _this.plazma.sole = response.toLowerCase();
                });
                _this.showBottomSoleLoader = false;
                _this.showBottomSoleCorrectResult = true;
            }
            else {
                _this.plazma.not_shoe = true;
                _this.showBottomSoleLoader = false;
                _this.showBottomSoleIncorrectResult = true;
            }
        });
    };
    CameraPage.prototype.toggleDrawer = function () {
        this.drawer = !this.drawer;
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-camera",template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/camera/camera.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title text-center>Plazma</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon\n          name="ios-arrow-back"\n          color="primary"\n          class="arrow-back"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="item-place" *ngIf="showHero">\n    <img src="assets/icon/scan.png" alt="" />\n    <h2>Place the item in the screen</h2>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col col-3>\n      <button\n        ion-button\n        color="blue"\n        class="btn-circle"\n        (click)="openController()"\n      >\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-6>\n      <button class="btn-tap" (click)="takePicture()" ion-button clear>\n        <div class="circle-tap"></div>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n\n<ion-bottom-drawer\n  *ngIf="drawer"\n  class="drawer"\n  [shouldBounce]="shouldBounce"\n  [(state)]="drawerState"\n  dockedHeight="500"\n>\n  <div class="drawer-content" padding>\n    <!-- Side sole loader -->\n    <div class="auth" *ngIf="showSideSoleLoader">\n      <img src="assets/imgs/side.gif" alt="" class="loader" />\n      <p text-center class="auth-p">Authenticating ... Please Wait</p>\n    </div>\n\n    <!-- Bottom sole loader-->\n    <div class="auth" *ngIf="showBottomSoleLoader">\n      <img src="assets/imgs/bottom.gif" alt="" class="loader" />\n      <p text-center class="auth-p">Authenticating ... Please Wait</p>\n    </div>\n\n    <!-- Side sole Result-->\n    <div\n      class="results"\n      *ngIf="showSideSoleCorrectResult || showSideSoleIncorrectResult"\n    >\n      <h4 text-center>Results</h4>\n      <div class="correctResult" *ngIf="showSideSoleCorrectResult">\n        <p>Your {{ plazma.name }} have been determined to be {{ plazma.authenticity }}</p>\n        <button class="tryagain-btn">\n          Try Again\n        </button>\n\n        <br />\n        <ion-row class="rating">\n          <ion-col col-2></ion-col>\n          <ion-col col-4>\n            <p>Rate this result:</p>\n          </ion-col>\n          <ion-col col-2>\n            <img src="assets/icon/smile.png"  alt="" />\n          </ion-col>\n          <ion-col col-2>\n            <img src="assets/icon/sad.png" class="rate-icon" alt="" />\n          </ion-col>\n          <ion-col col-2></ion-col>\n        </ion-row>\n      </div>\n\n      <div class="incorrectResult" *ngIf="showSideSoleIncorrectResult">\n        <p>\n          Sorry the item you have sent isn\'t currently authenticated by our\n          model. More items will be added in the upcoming weeks.\n        </p>\n        <button class="tryagain-btn">\n          Try Again\n        </button>\n      </div>\n    </div>\n\n    <!-- Bottom sole Results -->\n    <div\n      class="results"\n      *ngIf="showBottomSoleCorrectResult || showBottomSoleIncorrectResult"\n    >\n      <h4 text-center>Results</h4>\n\n      <div class="correctResult" *ngIf="showBottomSoleCorrectResult">\n        <p *ngIf="plazma.sole === \'new\'">\n          Looks like your {{ plazma.name }} soles are clean, but keeping them that way\n          by using some of the products below\n        </p>\n        <p *ngIf="plazma.sole === \'used\'">\n          Looks like your {{ plazma.name }} soles are dirty, you donʼt have to keep\n          them that way if you purchase one of the items below\n        </p>\n        <button class="tryagain-btn">\n          Try Again\n        </button>\n      </div>\n\n      <div class="incorrectResult" *ngIf="showBottomSoleIncorrectResult">\n        <p>\n          Sorry the item you have sent isn\'t currently authenticated by our\n          model. More items will be added in the upcoming weeks.\n        </p>\n        <button class="tryagain-btn">\n          Try Again\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-bottom-drawer>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/camera/camera.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__["a" /* CameraPreview */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_plazma_plazma__["a" /* PlazmaProvider */]])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlazmaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the PlazmaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PlazmaProvider = /** @class */ (function () {
    function PlazmaProvider(http) {
        this.http = http;
    }
    PlazmaProvider.prototype.shoeCheck = function (image) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].AUTHENTICATION_SHOE_CHECK_URL, image)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["retry"])(2));
    };
    PlazmaProvider.prototype.shoeNameCheck = function (image) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].AUTHENTICATION_SHOE_NAME_CHECK_URL, image)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["retry"])(2));
    };
    PlazmaProvider.prototype.shoeAuthticityCheck = function (image) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].AUTHENTICATION_SHOE_AUTHENTICITY_CHECK_URL, image)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["retry"])(2));
    };
    PlazmaProvider.prototype.shoeSoleCheck = function (image) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].SOLE_CHECK_URL, image)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["retry"])(2));
    };
    PlazmaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PlazmaProvider);
    return PlazmaProvider;
}());

//# sourceMappingURL=plazma.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageModule", function() { return CardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardsPageModule = /** @class */ (function () {
    function CardsPageModule() {
    }
    CardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsPage */]),
            ],
        })
    ], CardsPageModule);
    return CardsPageModule;
}());

//# sourceMappingURL=cards.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_payment_payment__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cards_cards__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_address__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__thankyou_thankyou__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams, cartProvider, authProvider, paymentController, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartProvider = cartProvider;
        this.authProvider = authProvider;
        this.paymentController = paymentController;
        this.http = http;
        this.loading = false;
        this.order = {
            cart: [],
            card: null,
        };
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        this.user = this.authProvider.getUser.user;
        this.cart = this.cartProvider.getNebulaItems;
    };
    Object.defineProperty(CheckoutPage.prototype, "total", {
        get: function () {
            if (this.cart) {
                return this.cart.map(function (item) { return (item.pricedProduct || item.price); }).reduce(function (current, next) { return parseInt(current) + parseInt(next); });
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    CheckoutPage.prototype.makePayment = function () {
        var _this = this;
        this.order.cart = [];
        this.cart.forEach(function (item) {
            var cart = {
                product: item.product.id,
                size: item.size,
                price: item.price,
                nebula: item.nebula || null,
                pricedProduct: item.pricedProduct || null,
            };
            _this.order.cart.push(cart);
        });
        this.paymentController.checkout(this.order, this.user.token).subscribe(function (response) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__thankyou_thankyou__["a" /* ThankyouPage */]);
        });
    };
    CheckoutPage.prototype.setPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cards_cards__["a" /* CardsPage */]);
    };
    CheckoutPage.prototype.setAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__address_address__["a" /* AddressPage */]);
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/checkout/checkout.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button navPop icon-only class="arrow-back">\n          <ion-icon name="ios-arrow-back" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title text-center>Nebula Checkout</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <div class="cont-box" (click)="setAddress()">\n    <ion-row *ngIf="user">\n      <ion-col col-3>\n        <p class="title-p">Ship to:</p>\n      </ion-col>\n      <ion-col col-8 class="detail-p" >\n        <p>{{ user.name }}</p>\n        <p>{{ user.address1 }}</p>\n        <p>{{ user.city }}, {{user.state}}, {{ user.zip_code }}.</p>\n        <p>{{ user.country }}</p>\n        <p>Phone number {{ user.phone }}</p>\n      </ion-col>\n\n      <ion-col col-1>\n        <ion-icon class="chck-icon" name="ios-arrow-forward"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="cont-box" (click)="setPayment()">\n    <ion-row *ngIf="user">\n      <ion-col col-4>\n        <p class="title-p">Pay with:</p>\n      </ion-col>\n      <ion-col col-7 class="detail-p">\n        <p>{{ user.name }}</p>\n        <p>{{ user.address1 }}</p>\n        <p>{{ user.city }}, {{user.state}}, {{ user.zip_code }}.</p>\n        <p>{{ user.country }}</p>\n        <p>Phone number (860) xxxxx {{ user.card ? user.card.last_four : \'\' }}</p>\n      </ion-col>\n\n      <ion-col col-1>\n        <ion-icon class="chck-icon" name="ios-arrow-forward"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="product-box cont-box" *ngIf="cart">\n    <ion-row *ngFor="let item of cart">\n      <ion-col col-3>\n        <img [src]="item.product.images[0].url" alt="" />\n      </ion-col>\n\n      <ion-col col-7>\n        <h3>{{ item.product.name.split(\' \').slice(0, 2).join(\' \') }}</h3>\n        <p>Us Shoe Size(Mens): {{ item.size }}</p>\n        <button ion-button clear>Remove</button>\n      </ion-col>\n\n      <ion-col col-2>\n        <h4>{{ item.price }}</h4>\n      </ion-col>\n    </ion-row>\n  </div>\n  <br />\n\n  <div class="bill est">\n    <ion-row>\n      <ion-col col-6>\n        <p>Delivery</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <p>Est. delivery Date-Date</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <p>Standard Shipping</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <h4>Order Total</h4>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <br />\n\n  <div class="bill" *ngIf="cart">\n    <ion-row>\n      <ion-col col-6>\n        <p>Items({{ cart.length }})</p>\n      </ion-col>\n\n      <ion-col col-6>\n        <p float-right>{{ total | currency:\'USD\':\'symbol\':\'2.2\' }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <p>Shipping</p>\n      </ion-col>\n\n      <ion-col col-6>\n        <p float-right>0</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <p>Tax*</p>\n      </ion-col>\n\n      <ion-col col-6>\n        <p float-right>0</p>\n      </ion-col>\n    </ion-row>\n    <hr />\n    <ion-row>\n      <ion-col col-6>\n        <h4>Order Total</h4>\n      </ion-col>\n\n      <ion-col col-6>\n        <h4 float-right>{{ total | currency:\'USD\':\'symbol\':\'2.2\' }}</h4>\n      </ion-col>\n    </ion-row>\n  </div>\n  <p class="muted">\n    By confirming you agree to the price above and acknowlegde that your order\n    could be canceled due to over bookings.\n  </p>\n</ion-content>\n\n<ion-footer padding>\n    <button ion-button block class="footer-btn">\n        <span class="d-flex">\n            <img src="assets/icon/lock.png" alt="">\n            Confirm and Pay\n          </span>\n    </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_payment_payment__["a" /* PaymentProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingsoonPageModule", function() { return ComingsoonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comingsoon__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComingsoonPageModule = /** @class */ (function () {
    function ComingsoonPageModule() {
    }
    ComingsoonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comingsoon__["a" /* ComingsoonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comingsoon__["a" /* ComingsoonPage */]),
            ],
        })
    ], ComingsoonPageModule);
    return ComingsoonPageModule;
}());

//# sourceMappingURL=comingsoon.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelphiPageModule", function() { return DelphiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delphi__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DelphiPageModule = /** @class */ (function () {
    function DelphiPageModule() {
    }
    DelphiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__delphi__["a" /* DelphiPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__delphi__["a" /* DelphiPage */])]
        })
    ], DelphiPageModule);
    return DelphiPageModule;
}());

//# sourceMappingURL=delphi.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelphiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_delphi_delphi__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DelphiPage = /** @class */ (function () {
    function DelphiPage(navCtrl, navParams, productProvider, delphiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.delphiProvider = delphiProvider;
        this.days = 1;
        this.size = 4;
        this.sell = false;
        this.buy = false;
        this.keep = true;
        this.price = 6725;
    }
    DelphiPage.prototype.ionViewDidLoad = function () {
        this.getProduct();
        if (this.product) {
            this.forecast(this.product.name, this.size, this.days);
        }
    };
    DelphiPage.prototype.getProduct = function () {
        this.product = this.navParams.get('product');
        this.getRelatedProducts(this.product);
    };
    DelphiPage.prototype.getRelatedProducts = function (product) {
        var _this = this;
        this.productProvider.getRelatedProducts(product).subscribe(function (response) {
            _this.relatedProducts = response;
        });
    };
    DelphiPage.prototype.forecast = function (name, size, days) {
        var _this = this;
        this.delphiProvider.forcast(name, size, days)
            .subscribe(function (price) { return _this.pricing.future = price; });
    };
    DelphiPage.prototype.setSize = function ($event) {
        this.size = $event;
        this.forecast(this.product.name, this.size, this.days);
    };
    DelphiPage.prototype.setDay = function ($event) {
        this.days = $event;
        this.forecast(this.product.name, this.size, this.days);
    };
    DelphiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-delphi",template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/delphi/delphi.html"*/'<!--\n  Generated template for the DelphiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon name="ios-arrow-back" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title text-center>Delphi</ion-title>\n\n    <ion-buttons right>\n      <button ion-button navPop icon-only>\n        <ion-icon name="more" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="product">\n    <ion-row>\n      <ion-col col-6></ion-col>\n      <ion-col col-6>\n        <div float-right>\n          <div class="d-flex">\n            <p class="sugt-p">Suggestion:</p>\n            <button color="red" ion-button outline *ngIf="sell">Sell</button>\n            <button color="blue" ion-button outline *ngIf="buy">Buy</button>\n            <button color="green" ion-button outline *ngIf="keep">Keep</button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <div class="price-curve">\n      <price-curve [price]="price"></price-curve>\n    </div>\n\n    <div class="shoe-header">\n      <h4>{{ product.name.split(\' \').slice(0, 2).join(\' \')  }}...</h4>\n      <img [src]="product.images[0].url" class="main-img" alt="" />\n    </div>\n\n    <div class="btns">\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button class="footer-btn">\n            <ion-row>\n              <ion-col class="d-flex">\n                <p class="text">Global<br />Price</p>\n                <p class="line "></p>\n              </ion-col>\n              <ion-col>\n                <p class="price">{{ product.price | currency:\'USD\':\'symbol\':\'2.2\' }}</p>\n              </ion-col>\n            </ion-row>\n          </button>\n        </ion-col>\n\n        <ion-col col-6>\n          <button ion-button class="footer-btn red-border" *ngIf="sell">\n            <ion-row>\n              <ion-col class="d-flex">\n                <p class="text red">\n                  Future <br />\n                  Price\n                </p>\n                <p class="line red-line"></p>\n              </ion-col>\n              <ion-col>\n                <div class="d-flex price-red">\n                  <h4>{{ pricing.future ?  pricing.future  : \'\' }}</h4>\n                  <ion-icon name="arrow-dropdown" mode="md"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </button>\n\n          <button ion-button class="footer-btn green-border" *ngIf="buy">\n            <ion-row>\n              <ion-col class="d-flex">\n                <p class="text green">\n                  Future <br />\n                  Price\n                </p>\n                <p class="line green-line"></p>\n              </ion-col>\n              <ion-col>\n                <div class="d-flex price-green">\n                  <h4>{{ product.price | currency:\'USD\':\'symbol\':\'2.2\' }}</h4>\n                  <ion-icon name="arrow-dropup" mode="md"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </button>\n\n          <button ion-button class="footer-btn grey-border" *ngIf="keep">\n            <ion-row>\n              <ion-col class="d-flex">\n                <p class="text grey">\n                  Future <br />\n                  Price\n                </p>\n                <p class="line grey-line"></p>\n              </ion-col>\n              <ion-col>\n                <div class="d-flex price-grey">\n                  <h4>{{ pricing.future ?  pricing.future  : \'\' }}</h4>\n                  <ion-icon name="remove" mode="md"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div>\n      <ion-item no-lines>\n        <ion-range [min]="4" [max]="15" [step]=".5" (ionChange)="setSize($event)" mode="md">\n          <p range-left class="range-p">Size</p>\n          <p range-right class="range-p">{{ size }}</p>\n        </ion-range>\n      </ion-item>\n\n      <ion-item no-lines>\n        <ion-range [min]="0" [max]="7" (ionChange)="setDay($event)" mode="md">\n          <p range-left class="range-p">Days</p>\n          <p range-right class="range-p">{{ days }}</p>\n        </ion-range>\n      </ion-item>\n    </div>\n  </div>\n\n  <div>\n    <div class="related" *ngIf="relatedProducts">\n      <p class="related-p">Related Products</p>\n      <br />\n\n      <ion-slides [slidesPerView]="2.0" class="slides">\n        <ion-slide *ngFor="let item of relatedProducts">\n          <img [src]="item.images[0].url"  alt="" />\n        </ion-slide>\n\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/delphi/delphi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_delphi_delphi__["a" /* DelphiProvider */]])
    ], DelphiPage);
    return DelphiPage;
}());

//# sourceMappingURL=delphi.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelphiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DelphiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DelphiProvider = /** @class */ (function () {
    function DelphiProvider(http) {
        this.http = http;
        console.log('Hello DelphiProvider Provider');
    }
    DelphiProvider.prototype.forcast = function (name, size, days) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].DELPHI_FORCAST_URL, { name: name, size: size, days: days })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["retry"])(2));
    };
    DelphiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DelphiProvider);
    return DelphiProvider;
}());

//# sourceMappingURL=delphi.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegularcheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_payment_payment__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cards_cards__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_address__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__thankyou_thankyou__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the RegularcheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegularcheckoutPage = /** @class */ (function () {
    function RegularcheckoutPage(http, navCtrl, cartProvider, authProvider, paymentController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.cartProvider = cartProvider;
        this.authProvider = authProvider;
        this.paymentController = paymentController;
        this.loading = false;
        this.order = {
            cart: [],
            card: null,
        };
    }
    RegularcheckoutPage.prototype.ionViewDidLoad = function () {
        this.user = this.authProvider.getUser.user || this.authProvider.getUser;
        this.cart = this.cartProvider.getItems;
    };
    Object.defineProperty(RegularcheckoutPage.prototype, "total", {
        get: function () {
            if (this.cart) {
                return this.cart.map(function (item) { return (item.pricedProduct || item.price); }).reduce(function (current, next) { return parseInt(current) + parseInt(next); });
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    RegularcheckoutPage.prototype.makePayment = function () {
        var _this = this;
        this.order.cart = [];
        this.cart.forEach(function (item) {
            var cart = {
                product: item.product.id,
                size: item.size,
                price: item.price,
                nebula: item.nebula || null,
                pricedProduct: item.pricedProduct || null,
            };
            _this.order.cart.push(cart);
        });
        this.paymentController.checkout(this.order, this.user.token).subscribe(function (response) {
            _this.cartProvider.clearCart();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__thankyou_thankyou__["a" /* ThankyouPage */]);
        });
    };
    RegularcheckoutPage.prototype.setPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cards_cards__["a" /* CardsPage */]);
    };
    RegularcheckoutPage.prototype.setAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__address_address__["a" /* AddressPage */]);
    };
    RegularcheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regularcheckout',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/regularcheckout/regularcheckout.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button navPop icon-only class="arrow-back">\n        <ion-icon name="ios-arrow-back" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>Checkout</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cont-box" (click)="setAddress()">\n    <ion-row *ngIf="user">\n      <ion-col col-3>\n        <p class="title-p">Ship to:</p>\n      </ion-col>\n      <ion-col col-8 class="detail-p" >\n        <p>{{ user.name }}</p>\n        <p>{{ user.address1 }}</p>\n        <p>{{ user.city }}, {{user.state}}, {{ user.zip_code }}.</p>\n        <p>{{ user.country }}</p>\n        <p>Phone number {{ user.phone }}</p>\n      </ion-col>\n\n      <ion-col col-1>\n        <ion-icon class="chck-icon" name="ios-arrow-forward"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="cont-box" (click)="setPayment()">\n    <ion-row *ngIf="user">\n      <ion-col col-4>\n        <p class="title-p">Pay with:</p>\n      </ion-col>\n      <ion-col col-7 class="detail-p">\n        <p>{{ user.name }}</p>\n        <p>{{ user.address1 }}</p>\n        <p>{{ user.city }}, {{user.state}}, {{ user.zip_code }}.</p>\n        <p>{{ user.country }}</p>\n        <p>Phone number (860) xxxxx {{ user.card ? user.card.last_four : \'\' }}</p>\n      </ion-col>\n\n      <ion-col col-1>\n        <ion-icon class="chck-icon" name="ios-arrow-forward"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="product-box cont-box" *ngIf="cart">\n    <ion-row *ngFor="let item of cart">\n      <ion-col col-3>\n        <img [src]="item.product.images[0].url" alt="" />\n      </ion-col>\n\n      <ion-col col-7>\n        <h3>{{ item.product.name.split(\' \').slice(0, 2).join(\' \') }}</h3>\n        <p>Us Shoe Size(Mens): {{ item.size }}</p>\n        <button ion-button clear>Remove</button>\n      </ion-col>\n\n      <ion-col col-2>\n        <h4>{{ item.price }}</h4>\n      </ion-col>\n    </ion-row>\n  </div>\n  <br />\n\n  <div class="bill est">\n    <ion-row>\n      <ion-col col-6>\n        <p>Delivery</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <p>Est. delivery Date-Date</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <p>Standard Shipping</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <h4>Order Total</h4>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <br />\n\n  <div class="bill" *ngIf="cart">\n    <ion-row>\n      <ion-col col-6>\n        <p>Items({{ cart.length }})</p>\n      </ion-col>\n\n      <ion-col col-6>\n        <p float-right>{{ total | currency:\'USD\':\'symbol\':\'2.2\' }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <p>Shipping</p>\n      </ion-col>\n\n      <ion-col col-6>\n        <p float-right>0</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <p>Tax*</p>\n      </ion-col>\n\n      <ion-col col-6>\n        <p float-right>0</p>\n      </ion-col>\n    </ion-row>\n    <hr />\n    <ion-row>\n      <ion-col col-6>\n        <h4>Order Total</h4>\n      </ion-col>\n\n      <ion-col col-6>\n        <h4 float-right>{{ total | currency:\'USD\':\'symbol\':\'2.2\' }}</h4>\n      </ion-col>\n    </ion-row>\n  </div>\n  <p class="muted">\n    By confirming you agree to the price above and acknowlegde that your order\n    could be canceled due to over bookings.\n  </p>\n</ion-content>\n\n<ion-footer padding>\n  <button ion-button block class="footer-btn" (click)="makePayment()">\n    <span class="d-flex">\n      <img src="assets/icon/lock.png" alt="" />\n      Confirm and Pay\n    </span>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/regularcheckout/regularcheckout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* CartProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_payment_payment__["a" /* PaymentProvider */]])
    ], RegularcheckoutPage);
    return RegularcheckoutPage;
}());

//# sourceMappingURL=regularcheckout.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPageModule", function() { return GeneralPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GeneralPageModule = /** @class */ (function () {
    function GeneralPageModule() {
    }
    GeneralPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__general__["a" /* GeneralPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__general__["a" /* GeneralPage */]),
            ],
        })
    ], GeneralPageModule);
    return GeneralPageModule;
}());

//# sourceMappingURL=general.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralPage = /** @class */ (function () {
    function GeneralPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showMembership = false;
        this.showAccount = false;
    }
    GeneralPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeneralPage');
    };
    GeneralPage.prototype.toggleMembership = function () {
        this.showMembership = !this.showMembership;
    };
    GeneralPage.prototype.toggleAccount = function () {
        this.showAccount = !this.showAccount;
    };
    GeneralPage.prototype.changeAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */]);
    };
    GeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-general',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/general/general.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button navPop icon-only>\n          <ion-icon name="ios-arrow-back" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <ion-title text-center>Account</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <br>\n  <h3 text-center>General</h3>\n  <ion-list no-lines>\n    <button ion-item  clear class="btn-line" (click)="toggleAccount()">\n      <ion-avatar item-start>\n        <img src="assets/icon/account.png" alt="">\n      </ion-avatar>\n      <h4>Account</h4>\n      <ion-icon [name]="showAccount ? \'ios-arrow-up\' : \'ios-arrow-down\'" item-end></ion-icon>\n    </button>\n\n    <div class="btn-link"  *ngIf="showAccount">\n      <button (click)="changeAccount()" ion-button clear>Change Information</button>\n    </div>\n\n    <button ion-item  clear class="btn-line" (click)="toggleMembership()">\n        <ion-avatar item-start>\n          <img src="assets/icon/membership.png" alt="">\n        </ion-avatar>\n        <h4>Membership</h4>\n        <ion-icon [name]="showMembership ? \'ios-arrow-up\' : \'ios-arrow-down\'" item-end></ion-icon>\n    </button>\n\n    <div class="btn-link"  *ngIf="showMembership">\n        <button ion-button clear>Review Membership</button>\n    </div>\n\n\n    <div class="btn-link"  *ngIf="showMembership">\n        <button ion-button clear>Cancel Membership</button>\n    </div>\n\n\n    <div class="btn-link"  *ngIf="showMembership">\n        <button ion-button clear>Become Membership</button>\n    </div>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/general/general.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], GeneralPage);
    return GeneralPage;
}());

//# sourceMappingURL=general.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstasearchPageModule", function() { return InstasearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instasearch__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InstasearchPageModule = /** @class */ (function () {
    function InstasearchPageModule() {
    }
    InstasearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__instasearch__["a" /* InstasearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__instasearch__["a" /* InstasearchPage */]),
            ],
        })
    ], InstasearchPageModule);
    return InstasearchPageModule;
}());

//# sourceMappingURL=instasearch.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstasearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_insta_search_insta_search__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InstasearchPage = /** @class */ (function () {
    function InstasearchPage(navCtrl, navParams, cameraPreview, instaSearchProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraPreview = cameraPreview;
        this.instaSearchProvider = instaSearchProvider;
        this.cameraPreviewOpts = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: "rear",
            tapPhoto: true,
            previewDrag: false,
            toBack: true,
            alpha: 1
        };
        this.showHero = true;
    }
    InstasearchPage.prototype.ionViewDidLoad = function () {
        this.cameraPreview.startCamera(this.cameraPreviewOpts).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    InstasearchPage.prototype.ionViewWillLeave = function () {
        this.cameraPreview.stopCamera();
    };
    InstasearchPage.prototype.takePicture = function () {
        var _this = this;
        // take a picture
        this.cameraPreview.takePicture(this.cameraPreviewOpts).then(function (imageData) {
            _this.picture = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
            // this.picture = 'assets/img/test.jpg';
        });
        this.search(this.picture);
    };
    InstasearchPage.prototype.search = function (image) {
        var _this = this;
        this.instaSearchProvider.instaSearch(image)
            .subscribe(function (result) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */], { search: result });
        });
    };
    InstasearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-instasearch",template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/instasearch/instasearch.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title text-center>Insta Search</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon\n          name="ios-arrow-back"\n          color="primary"\n          class="arrow-back"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="item-place" *ngIf="showHero">\n    <img src="assets/icon/scan.png" alt="" />\n    <h2>Place the item in the screen</h2>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col col-3> </ion-col>\n    <ion-col col-6>\n      <button class="btn-tap" ion-button clear>\n        <div class="circle-tap"></div>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/instasearch/instasearch.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__["a" /* CameraPreview */],
            __WEBPACK_IMPORTED_MODULE_3__providers_insta_search_insta_search__["a" /* InstaSearchProvider */]])
    ], InstasearchPage);
    return InstasearchPage;
}());

//# sourceMappingURL=instasearch.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstaSearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the InstaSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InstaSearchProvider = /** @class */ (function () {
    function InstaSearchProvider(http) {
        this.http = http;
        console.log('Hello InstaSearchProvider Provider');
    }
    InstaSearchProvider.prototype.instaSearch = function (image) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].INSTA_SEARCH_URL, image)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["retry"])(2));
    };
    InstaSearchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], InstaSearchProvider);
    return InstaSearchProvider;
}());

//# sourceMappingURL=insta-search.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SearchProvider = /** @class */ (function () {
    function SearchProvider(http) {
        this.http = http;
    }
    SearchProvider.prototype.search = function (query) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* API */].API_URL + ("search/" + query))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    SearchProvider.prototype.getProducts = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* API */].API_URL + 'search-list-products')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    SearchProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('Something bad happened; please try again later.');
    };
    ;
    SearchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SearchProvider);
    return SearchProvider;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NebulapayPageModule", function() { return NebulapayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebulapay__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NebulapayPageModule = /** @class */ (function () {
    function NebulapayPageModule() {
    }
    NebulapayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nebulapay__["a" /* NebulapayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nebulapay__["a" /* NebulapayPage */]),
            ],
        })
    ], NebulapayPageModule);
    return NebulapayPageModule;
}());

//# sourceMappingURL=nebulapay.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NebulapayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NebulapayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NebulapayPage = /** @class */ (function () {
    function NebulapayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timeState = "daily";
        this.occurence = 5;
        this.amount = parseInt(this.navParams.get('price'));
        this.callback = this.navParams.get('callback');
        this.days = 1;
        this.nebula = {};
        this.payment = this.amount;
    }
    Object.defineProperty(NebulapayPage.prototype, "step", {
        get: function () {
            return this.amount / this.occurence;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NebulapayPage.prototype, "amountToPay", {
        get: function () {
            if (this.days > 1) {
                return this.amount / this.days;
            }
            else {
                return this.amount;
            }
        },
        enumerable: true,
        configurable: true
    });
    NebulapayPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad NebulapayPage");
    };
    NebulapayPage.prototype.increaseDays = function () {
        if (this.days < this.occurence) {
            this.days++;
            this.payment = this.payment - this.step;
        }
    };
    NebulapayPage.prototype.decreaseDays = function () {
        if (this.days > 1) {
            this.days--;
            this.payment = this.payment + this.step;
        }
    };
    NebulapayPage.prototype.increasePayment = function () {
        if (this.days > 1 && this.payment < this.amount) {
            this.days--;
            this.payment = this.payment + this.step;
        }
    };
    NebulapayPage.prototype.decreasePayment = function () {
        if (this.days < this.occurence) {
            this.days++;
            this.payment = this.payment - this.step;
        }
    };
    NebulapayPage.prototype.choosePlan = function () {
        var _this = this;
        var plan = {
            days: this.days,
            installments: this.amountToPay
        };
        this.callback(plan).then(function () {
            _this.navCtrl.pop();
        });
    };
    NebulapayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-nebulapay",template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/nebulapay/nebulapay.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon name="close" color="primary" class="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="vert-align">\n    <h3 text-center>Choose the payment span thats best for you</h3>\n\n    <div class="cpd-bg">\n      <h4>Copped by Nov. 23</h4>\n    </div>\n\n    <ion-row>\n      <ion-col col-6>\n        <div class="d-cent-align">\n          <div class="d-flex">\n            <button ion-button clear (click)="decreaseDays()">\n              <img src="assets/icon/addarrow.png" alt="" />\n            </button>\n\n            <div class="inputs">\n              <input type="text" [(ngModel)]="days" />\n              <p class="occurence-text">Days</p>\n              <p></p>\n            </div>\n\n            <button ion-button clear (click)="increaseDays()">\n              <img src="assets/icon/minusarrow.png" alt="" />\n            </button>\n          </div>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <div class="d-flex">\n          <button ion-button clear (click)="decreasePayment()">\n            <img src="assets/icon/addarrow.png" alt="" />\n          </button>\n\n          <div class="inputs">\n            <input\n              type="text"\n              [ngModel]="payment | currency:\'USD\':\'symbol\':\'2.2\'"\n              [ngModelOptions]="{updateOn:\'blur\'}"\n              (ngModelChange)="amount=$event"\n            />\n            <p class="occurence-text">A day</p>\n          </div>\n\n          <button ion-button clear (click)="increasePayment()">\n            <img src="assets/icon/minusarrow.png" alt="" />\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-footer padding>\n  <p class="footer-p">\n    By confirming, you agree to pay the price and the time span above\n  </p>\n  <button ion-button block class="footer-btn" (click)="choosePlan()">\n    <span class="d-flex">\n      <img src="assets/icon/pay.png" alt="" />\n      Confirm Plan\n    </span>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/nebulapay/nebulapay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NebulapayPage);
    return NebulapayPage;
}());

//# sourceMappingURL=nebulapay.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authProvider, toastController, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.toastController = toastController;
        this.events = events;
        this.credentials = {
            email: '',
            password: ''
        };
        this.events.subscribe('invalid-credentials', function () { return _this.presentToast(); });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authProvider.authenticate(this.credentials).subscribe(function (response) {
            _this.authProvider.saveCredentials(response);
            _this.navCtrl.pop();
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Invalid username or password',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button navPop icon-only>\n          <ion-icon name="close" color="primary" class="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <img src="assets/imgs/logo.png" class="logo" alt="">\n  <h3>The new way to buy and sell authentic streetwear</h3>\n\n  <div class="form">\n      <ion-item>\n        <ion-label stacked>Email </ion-label>\n        <ion-input type="text" required [(ngModel)]="credentials.email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input required type="password" [(ngModel)]="credentials.password"></ion-input>\n        <ion-icon name="ios-eye" class="icon-blue" item-right></ion-icon>\n      </ion-item>\n\n      <button ion-button class="btn" block (click)="login()">Login</button>\n  </div>\n</ion-content>\n\n\n<ion-footer padding>\n  <p class="muted"> Don\'t have an Account?</p>\n  <button ion-button clear block class="btn_underlined" (click)="signup()">Sign Up Now</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
            ],
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_order_order__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, orderProvider, authProvider) {
        this.navCtrl = navCtrl;
        this.orderProvider = orderProvider;
        this.authProvider = authProvider;
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.user = this.authProvider.getUser.user;
        this.orderProvider.getOrders(this.user.token).subscribe(function (response) {
            _this.orders = response;
        });
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/orders/orders.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button navPop icon-only>\n          <ion-icon name="ios-arrow-back" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <ion-title text-center>Orders</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n\n<ion-content>\n  <ion-list *ngIf="orders">\n    <button ion-item clear lines *ngFor="let order of orders">\n      <ion-row padding>\n        <ion-col col-4>\n          <img [src]="order.product_variation.product.images[0].url" alt="">\n        </ion-col>\n        <ion-col col-8>\n          <p class="strong">Shipped: Date Shipped</p>\n          <p>{{ order.product_variation.product.name.split(\' \').slice(0, 2).join(\' \') }}</p>\n          <p>{{ order.amount | currency:\'USD\':\'symbol\':\'2.2\'  }}</p>\n          <ion-row>\n            <ion-col col-4>\n              <button ion-button [color]="order.type === \'nebula\' ? \'purple\' : \'blue\'" class="btn-sm">Buy it again</button>\n            </ion-col>\n            <ion-col col-8>\n              <div class="muted" float-right>\n                <p>Date Purchased</p>\n                <p>Item #: {{ order.code.substr(0, 6) }}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_order_order__["a" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OrderProvider = /** @class */ (function () {
    function OrderProvider(http) {
        this.http = http;
    }
    OrderProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error));
        }
        // return an observable with a user-facing error message
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('Something bad happened; please try again later.');
    };
    ;
    OrderProvider.prototype.getOrders = function (token) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* API */].API_URL + 'account/orders', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    OrderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], OrderProvider);
    return OrderProvider;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPageModule", function() { return ProductdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productdetail__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_bottom_drawer__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductdetailPageModule = /** @class */ (function () {
    function ProductdetailPageModule() {
    }
    ProductdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productdetail__["a" /* ProductdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ion_bottom_drawer__["a" /* IonBottomDrawerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productdetail__["a" /* ProductdetailPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], ProductdetailPageModule);
    return ProductdetailPageModule;
}());

//# sourceMappingURL=productdetail.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebulapay_nebulapay__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_product__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__size_size__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_es6_promise__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_es6_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cart_cart__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkout_checkout__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pyp_pyp__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__delphi_delphi__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = __WEBPACK_IMPORTED_MODULE_5_es6_promise__["Promise"]))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// @ts-ignore





var DrawerState;
(function (DrawerState) {
    DrawerState[DrawerState["Bottom"] = 0] = "Bottom";
    DrawerState[DrawerState["Docked"] = 1] = "Docked";
    DrawerState[DrawerState["Top"] = 2] = "Top";
})(DrawerState || (DrawerState = {}));
var ProductdetailPage = /** @class */ (function () {
    function ProductdetailPage(navCtrl, navParams, platform, productProvider, cartProvider, toastController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.productProvider = productProvider;
        this.cartProvider = cartProvider;
        this.toastController = toastController;
        this.closeDrawer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.cart = false;
        this.shouldBounce = false;
        this.drawerState = DrawerState.Docked;
        this.minimumHeight = 0;
        this.drawer = false;
        this.showDefault = true;
        this.variation = {};
        this.cartItem = {};
        this.sizeCallback = function (_variation) {
            return new __WEBPACK_IMPORTED_MODULE_5_es6_promise__["Promise"](function (resolve, reject) {
                _this.variation = _variation;
                _this.showDefault = false;
                // this.addToCart();
                resolve();
            });
        };
        this.pypCallback = function (price) {
            return new __WEBPACK_IMPORTED_MODULE_5_es6_promise__["Promise"](function (resolve, reject) {
                _this.cartItem.price = price;
                resolve();
            });
        };
        this.nebulaPayCallback = function (nebula) {
            return new __WEBPACK_IMPORTED_MODULE_5_es6_promise__["Promise"](function (resolve, reject) {
                _this.cartItem.nebula = nebula;
                _this.addToCart();
                resolve();
                _this.navCtrl.pop().then(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__checkout_checkout__["a" /* CheckoutPage */], { cart: _this.cartItem });
                });
            });
        };
    }
    ProductdetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.drawerState);
        this.getProduct();
        this.platform.registerBackButtonAction(function () {
            if (_this.drawer)
                return (_this.drawer = false);
            // if (this.cartDrawer) return (this.cartDrawer = false);
            return _this.navCtrl.pop();
        });
        this.checkDrawerState();
    };
    ProductdetailPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.checkInterval);
    };
    ProductdetailPage.prototype.toggleDrawer = function () {
        this.drawer = !this.drawer;
        if (this.drawer === true)
            this.checkDrawerState();
    };
    ProductdetailPage.prototype.openPayDrawer = function () {
        this.drawer = true;
    };
    ProductdetailPage.prototype.openPayPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pyp_pyp__["a" /* PypPage */], { price: this.variation.price, callback: this.pypCallback });
    };
    ProductdetailPage.prototype.checkDrawerState = function () {
        var _this = this;
        this.checkInterval = setInterval(function () {
            if (_this.drawer) {
                if (_this.drawerState == DrawerState.Bottom) {
                    clearInterval(_this.checkInterval);
                    if (_this.drawer)
                        return (_this.drawer = false);
                    // if (this.cartDrawer) return (this.cartDrawer = false);
                }
            }
        }, 500);
    };
    ProductdetailPage.prototype.getProduct = function () {
        this.product = this.navParams.get('product');
        this.getRelatedProducts(this.product);
    };
    ProductdetailPage.prototype.getRelatedProducts = function (product) {
        var _this = this;
        this.productProvider.getRelatedProducts(product).subscribe(function (response) {
            _this.relatedProducts = response;
        });
    };
    ProductdetailPage.prototype.chooseSize = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__size_size__["a" /* SizePage */], { variations: this.product.variations, callback: this.sizeCallback });
    };
    ProductdetailPage.prototype.validate = function () {
        return this.cartItem.size !== null && this.cartItem.price !== null;
    };
    ProductdetailPage.prototype.toggleCart = function () {
        this.cart = !this.cart;
    };
    ProductdetailPage.prototype.addToCart = function () {
        this.cartItem.uid = Math.floor(Math.random() * 10000);
        this.cartItem.size = this.variation.name;
        this.cartItem.price = this.variation.price;
        this.cartItem.product = this.product;
        this.cartProvider.addToCart(this.cartItem);
        this.presentToast();
    };
    ProductdetailPage.prototype.buyNow = function () {
        if (this.validate()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__checkout_checkout__["a" /* CheckoutPage */]);
        }
        else
            this.chooseSize();
    };
    ProductdetailPage.prototype.openNebulaPage = function () {
        var _this = this;
        if (this.validate()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nebulapay_nebulapay__["a" /* NebulapayPage */], { price: this.variation.price, callback: this.nebulaPayCallback }).then(function () {
                _this.toggleDrawer();
            });
        }
    };
    ProductdetailPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your Item has been added to your cart',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductdetailPage.prototype.goToDelphi = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__delphi_delphi__["a" /* DelphiPage */], { product: this.product });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ProductdetailPage.prototype, "closeDrawer", void 0);
    ProductdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-productdetail",template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/productdetail/productdetail.html"*/'<ion-backdrop\n  *ngIf="drawer || cart"\n  disable-activated\n  role="presentation"\n  tappable\n  style="opacity: 0.5;"\n></ion-backdrop>\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button navPop icon-only class="arrow-back">\n        <ion-icon name="ios-arrow-back" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>Product Details</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only clear class="cart-btn" (click)="toggleCart()">\n        <img src="assets/icon/cart-grey.png" alt="" />\n        <ion-badge class="cart-badge" color="blue">2</ion-badge>\n      </button>\n      <button ion-button icon-only clear>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce>\n  <div *ngIf="product">\n    <div class="outer-icons">\n      <ion-row>\n        <ion-col col-6>\n          <div class="d-flex">\n            <button ion-button clear icon-only>\n              <ion-icon name="customthumbsup"></ion-icon>\n            </button>\n\n            <button ion-button clear icon-only>\n              <ion-icon name="customthumbsdown"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n\n        <ion-col col-6>\n          <button ion-button clear icon-only float-right>\n            <ion-icon name="md-globe" class="globe"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class="d-flex delphi-title" (click)="goToDelphi(product)">\n      <h3 text-center>{{ product.name.split(\' \').slice(0, 2).join(\' \')  }}...</h3>\n      <img src="assets/icon/delphi.png" class="delphi-icon" alt="" />\n    </div>\n\n    <div class="det-div">\n      <ion-row class="detail">\n        <ion-col col-4 class="border-right">\n          <h4>{{ product.brand }}</h4>\n        </ion-col>\n\n        <ion-col col-4 class="border-right">\n          <h4>Condition: New</h4>\n        </ion-col>\n\n        <ion-col col-4>\n          <h4>SKU: {{ product.sku.toUpperCase() }}</h4>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6></ion-col>\n        <ion-col col-6>\n          <button ion-button class="desp-btn">Description...</button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class="main-img">\n      <img [src]="product.images[0].url"  alt="" />\n    </div>\n\n    <div>\n      <div class="related" *ngIf="relatedProducts">\n        <p>Related Products</p>\n        <br />\n\n        <ion-slides [slidesPerView]="2.0" class="slides">\n          <ion-slide *ngFor="let item of relatedProducts">\n            <img [src]="item.images[0].url"  alt="" />\n          </ion-slide>\n\n        </ion-slides>\n      </div>\n    </div>\n\n    <div>\n      <ion-slides [slidesPerView]="2.1">\n        <ion-slide>\n          <button (click)="chooseSize()" *ngIf="showDefault" ion-button class="footer-btn size-btn">\n            <ion-row>\n              <ion-col class="d-flex">\n                <p class="text">Size: N/A</p>\n                <p class="line"></p>\n              </ion-col>\n              <ion-col> </ion-col>\n            </ion-row>\n          </button>\n\n          <button (click)="chooseSize()" *ngIf="!showDefault" ion-button class="footer-btn">\n            <ion-row>\n              <ion-col class="d-flex" *ngIf="variation">\n                <p class="text">{{ variation.name }}</p>\n                <p class="line"></p>\n              </ion-col>\n              <ion-col>\n                <p>${{ variation.price }}</p>\n              </ion-col>\n            </ion-row>\n          </button>\n        </ion-slide>\n\n        <ion-slide>\n          <button ion-button class="pay-btn" (click)="toggleDrawer()">\n          <span class="d-flex">\n            <img src="assets/icon/pay.png" alt="" />\n            Pay\n          </span>\n          </button>\n        </ion-slide>\n\n        <ion-slide> </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>\n\n<ion-bottom-drawer\n  *ngIf="drawer"\n  class="drawer"\n  [ngClass]="{\'drawer-anim\': drawer}"\n  [(state)]="drawerState"\n  dockedHeight="550"\n  disableDrag="true"\n>\n  <div class="drawer-content" padding>\n    <button (click)="toggleDrawer()" class="close-button" ion-button color="light"><ion-icon name="close"></ion-icon></button>\n    <h4 class="sheet-header">Select an Option:</h4>\n    <ion-list no-lines class="img-cont">\n      <button ion-item (click)="openPayPage()">\n        <ion-avatar item-start>\n          <img src="assets/icon/pickyourprice.png" class="pyp" alt="" />\n        </ion-avatar>\n        <h4>Pick Your Price</h4>\n      </button>\n\n      <button ion-item (click)="buyNow()">\n        <ion-avatar item-start>\n          <img src="assets/icon/buyicon.png" class="buy-now" alt="" />\n        </ion-avatar>\n        <h4 class="buy-now-text">Buy Now</h4>\n      </button>\n\n      <button ion-item (click)="addToCart()">\n        <ion-avatar item-start>\n          <img src="assets/icon/addtocart.png" class="add-to-cart" alt="" />\n        </ion-avatar>\n        <h4>Add to Cart</h4>\n      </button>\n\n      <button ion-item (click)="openNebulaPage()">\n        <ion-avatar item-start>\n          <img src="assets/icon/nebulapay.png" class="img-dr" alt="" />\n        </ion-avatar>\n        <h4>Nebula Pay</h4>\n      </button>\n\n      <button ion-item>\n        <ion-avatar item-start>\n          <img src="assets/icon/flex.png" class="img-dr" alt="" />\n        </ion-avatar>\n        <h4>Flex</h4>\n      </button>\n    </ion-list>\n  </div>\n</ion-bottom-drawer>\n<cart [cartDrawer]="cart" (closeCart)="toggleCart()"></cart>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/productdetail/productdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_product_product__["a" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_cart_cart__["a" /* CartProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProductdetailPage);
    return ProductdetailPage;
}());

//# sourceMappingURL=productdetail.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pyp_pyp__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SizePage = /** @class */ (function () {
    function SizePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.variations = [];
    }
    SizePage.prototype.ionViewDidLoad = function () {
        this.variations = this.navParams.get('variations');
        this.callback = this.navParams.get('callback');
    };
    SizePage.prototype.gotoPypPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pyp_pyp__["a" /* PypPage */]);
    };
    SizePage.prototype.selectSize = function (variation) {
        var _this = this;
        this.callback(variation).then(function () {
            _this.navCtrl.pop();
        });
    };
    SizePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-size',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/size/size.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button navPop icon-only class="arrow-back">\n        <ion-icon name="close" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <h3 padding>Sizes (US)</h3>\n\n  <div class="top-border">\n    <ion-row>\n      <ion-col col-6 class="bottom-border right-border" *ngFor="let variation of variations">\n        <button class="size-tile" ion-button clear (click)="selectSize(variation)">\n          <div>\n              <h1>{{ variation.name.toUpperCase() }}</h1>\n              <p class="price">{{ variation.price }}</p>\n          </div>\n        </button>\n      </ion-col>\n\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/size/size.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SizePage);
    return SizePage;
}());

//# sourceMappingURL=size.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PypPageModule", function() { return PypPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pyp__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PypPageModule = /** @class */ (function () {
    function PypPageModule() {
    }
    PypPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pyp__["a" /* PypPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pyp__["a" /* PypPage */]),
            ],
        })
    ], PypPageModule);
    return PypPageModule;
}());

//# sourceMappingURL=pyp.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularcheckoutPageModule", function() { return RegularcheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regularcheckout__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegularcheckoutPageModule = /** @class */ (function () {
    function RegularcheckoutPageModule() {
    }
    RegularcheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__regularcheckout__["a" /* RegularcheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__regularcheckout__["a" /* RegularcheckoutPage */]),
            ],
        })
    ], RegularcheckoutPageModule);
    return RegularcheckoutPageModule;
}());

//# sourceMappingURL=regularcheckout.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_orders__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_general__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.gotoOrdersPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__orders_orders__["a" /* OrdersPage */], null, {
            animation: 'transition-ios',
            animate: true,
            direction: 'forward'
        });
    };
    SettingsPage.prototype.gotoGeneralPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__general_general__["a" /* GeneralPage */], null, {
            animate: true,
            animation: 'transition-ios',
            direction: 'forward'
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button navPop icon-only>\n          <ion-icon name="ios-arrow-back" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <ion-title text-center>Account</ion-title>\n\n      <!-- <ion-buttons right>\n          <button ion-button icon-only>\n            <ion-icon name="more" color="grey" class="more-btn"></ion-icon>\n          </button>\n      </ion-buttons> -->\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <h3 text-center>Settings</h3>\n  <hr>\n  <ion-list no-lines>\n    <button ion-item  clear class="btn-line"(click)="gotoGeneralPage()" >\n      <ion-avatar item-start>\n        <img src="assets/icon/globe.png" alt="">\n      </ion-avatar>\n      <h4>General</h4>\n      <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item  clear class="btn-line" (click)="gotoOrdersPage()">\n        <ion-avatar item-start>\n          <img src="assets/icon/orders.png" alt="">\n        </ion-avatar>\n        <h4>Orders</h4>\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item  clear class="btn-line">\n        <ion-avatar item-start>\n          <img src="assets/icon/legal.png" alt="">\n        </ion-avatar>\n        <h4>Legal</h4>\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item  clear class="btn-line">\n        <ion-avatar item-start>\n          <img src="assets/icon/logout.png" alt="">\n        </ion-avatar>\n        <h4>Log Out</h4>\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizePageModule", function() { return SizePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__size__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SizePageModule = /** @class */ (function () {
    function SizePageModule() {
    }
    SizePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__size__["a" /* SizePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__size__["a" /* SizePage */]),
            ],
        })
    ], SizePageModule);
    return SizePageModule;
}());

//# sourceMappingURL=size.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThankyouPageModule = /** @class */ (function () {
    function ThankyouPageModule() {
    }
    ThankyouPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */]),
            ],
        })
    ], ThankyouPageModule);
    return ThankyouPageModule;
}());

//# sourceMappingURL=thankyou.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camera_camera__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.homeicon = "customhome";
        this.searchicon = "customsearchoffset";
        this.cameraicon = "customcamera";
        this.personicon = "custompersonoffset";
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__camera_camera__["a" /* CameraPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage.prototype.openCameraPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__camera_camera__["a" /* CameraPage */]);
    };
    TabsPage.prototype.homeSelected = function () {
        this.homeicon = "customhome";
        this.personicon = "custompersonoffset";
        this.searchicon = "customsearchoffset";
    };
    TabsPage.prototype.personSelected = function () {
        this.personicon = "customperson";
        this.searchicon = "customsearchoffset";
        this.homeicon = "customhomeoffset";
    };
    TabsPage.prototype.searchSelected = function () {
        this.searchicon = "customsearch";
        this.homeicon = "customhomeoffset";
        this.personicon = "custompersonoffset";
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab\n    [root]="tab1Root"\n    [tabIcon]="homeicon"\n    (ionSelect)="homeSelected()"\n    tabsHideOnSubPages="true"\n  ></ion-tab>\n  <ion-tab\n    [root]="tab2Root"\n    [tabIcon]="searchicon"\n    (ionSelect)="searchSelected()"\n    tabsHideOnSubPages="true"\n  ></ion-tab>\n  <ion-tab\n    (ionSelect)="openCameraPage()"\n    tabIcon="customcamera"\n    class="camera-tab-icon"\n    tabsHideOnSubPages="true"\n  ></ion-tab>\n  <ion-tab\n    [root]="tab4Root"\n    [tabIcon]="personicon"\n    (ionSelect)="personSelected()"\n  ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productdetail_productdetail__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_product_product__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authProvider, productProvider) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.productProvider = productProvider;
        this.products = [];
        this.cart = false;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // Load the data
        this.productProvider.getProducts().subscribe(function (response) {
            _this.products = response.data;
        });
    };
    HomePage.prototype.gotoProductsPage = function (product) {
        if (this.authProvider.authenticated()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__productdetail_productdetail__["a" /* ProductdetailPage */], { product: product });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
    };
    HomePage.prototype.toggleCart = function () {
        this.cart = !this.cart;
        console.log(this.cart);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/home/home.html"*/'\n<ion-backdrop\n  *ngIf="cart"\n  visible="false"\n  disable-activated\n  role="presentation"\n  tappable\n  style="opacity: 0.5;"\n></ion-backdrop>\n<ion-header>\n  <ion-navbar>\n   <img src="assets/imgs/logo.png" class="logo" alt="">\n\n   <ion-buttons end>\n    <button ion-button icon-only clear class="cart-btn" (click)="toggleCart()">\n      <img src="assets/icon/cart.png" alt="">\n      <ion-badge class="cart-badge" color="blue">1</ion-badge>\n    </button>\n   </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Hyped Releases</h3>\n\n  <div class="products">\n    <ion-grid>\n      <ion-row>\n          <ion-col col-6 *ngFor="let product of products">\n            <button ion-item class="product-box" (click)="gotoProductsPage(product)">\n              <p class="muted">{{ product.price | currency:\'USD\':\'symbol\':\'2.2\' }}</p>\n              <img [src]="product.images[0].url"  alt="">\n              <h4 class="product-title">{{ product.name.split(\' \').slice(0, 2).join(\' \') }}</h4>\n            </button>\n          </ion-col>\n\n      </ion-row>\n\n\n    </ion-grid>\n  </div>\n</ion-content>\n\n<cart [cartDrawer]="cart" (closeCart)="toggleCart()"></cart>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_product_product__["a" /* ProductProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(403);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, platform, storage, events) {
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.storage = storage;
        this.events = events;
        this.authState = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](false);
        this.platform.ready().then(function (response) {
            if (response)
                _this.isAuthenticated();
        });
    }
    AuthProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            if (error.status === 401)
                this.events.publish('invalid-credentials');
        }
        // return an observable with a user-facing error message
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw('Something bad happened; please try again later.');
    };
    ;
    AuthProvider.prototype.isAuthenticated = function () {
        var _this = this;
        this.storage.get('HELYOS_USER').then(function (user) {
            if (user) {
                console.log(user);
                _this.authUser = user;
                _this.authState.next(true);
            }
        });
    };
    AuthProvider.prototype.authenticate = function (credentials) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environment_environment__["a" /* API */].API_URL + 'auth/login', credentials)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthProvider.prototype.updateAccount = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environment_environment__["a" /* API */].API_URL + 'auth/update', user)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthProvider.prototype.addCard = function (card) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environment_environment__["a" /* API */].API_URL + 'card/add', card, {
            headers: {
                'Authorization': 'Bearer ' + this.getUser.access_token || this.getUser.token
            }
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["retry"])(2));
    };
    AuthProvider.prototype.saveCredentials = function (response) {
        var _this = this;
        response.user.token = response.access_token;
        this.storage.set('HELYOS_USER', response).then(function (response) {
            _this.authState.next(true);
        });
        return true;
    };
    AuthProvider.prototype.authenticated = function () {
        return this.authState.value;
    };
    AuthProvider.prototype.logout = function () {
        this.storage.set('HELYOS_USER', null);
    };
    Object.defineProperty(AuthProvider.prototype, "getUser", {
        get: function () {
            return this.authUser;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.updateUser = function (user) {
        user.token = this.getUser.access_token || this.getUser.token;
        this.storage.set('HELYOS_USER', user);
    };
    AuthProvider.prototype.saveCard = function (user) {
        user.token = this.getUser.access_token || this.getUser.token;
        this.storage.set('HELYOS_USER', user);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_preview__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search_module__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_productdetail_productdetail_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ion_bottom_drawer__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_nebulapay_nebulapay_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_checkout_checkout_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_size_size_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pyp_pyp_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_comingsoon_comingsoon_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_thankyou_thankyou_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_address_address_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cards_cards_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_orders_orders_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_general_general_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_camera_camera_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_instasearch_instasearch_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_regularcheckout_regularcheckout_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_delphi_delphi_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_product_product__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_components_module__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_cart_cart__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_payment_payment__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_order_order__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_search_search__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_plazma_plazma__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_insta_search_insta_search__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_delphi_delphi__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_35__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_productdetail_productdetail_module__["ProductdetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_nebulapay_nebulapay_module__["NebulapayPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_checkout_checkout_module__["CheckoutPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_size_size_module__["SizePageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_comingsoon_comingsoon_module__["ComingsoonPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_thankyou_thankyou_module__["ThankyouPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_address_address_module__["AddressPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_pyp_pyp_module__["PypPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_cards_cards_module__["CardsPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings_module__["SettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_general_general_module__["GeneralPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_camera_camera_module__["CameraPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_orders_orders_module__["OrdersPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_instasearch_instasearch_module__["InstasearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_regularcheckout_regularcheckout_module__["RegularcheckoutPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_delphi_delphi_module__["DelphiPageModule"],
                __WEBPACK_IMPORTED_MODULE_15_ion_bottom_drawer__["a" /* IonBottomDrawerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comingsoon/comingsoon.module#ComingsoonPageModule', name: 'ComingsoonPage', segment: 'comingsoon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/delphi/delphi.module#DelphiPageModule', name: 'DelphiPage', segment: 'delphi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/general/general.module#GeneralPageModule', name: 'GeneralPage', segment: 'general', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instasearch/instasearch.module#InstasearchPageModule', name: 'InstasearchPage', segment: 'instasearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nebulapay/nebulapay.module#NebulapayPageModule', name: 'NebulapayPage', segment: 'nebulapay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productdetail/productdetail.module#ProductdetailPageModule', name: 'ProductdetailPage', segment: 'productdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pyp/pyp.module#PypPageModule', name: 'PypPage', segment: 'pyp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regularcheckout/regularcheckout.module#RegularcheckoutPageModule', name: 'RegularcheckoutPage', segment: 'regularcheckout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/size/size.module#SizePageModule', name: 'SizePage', segment: 'size', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_34__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_preview__["a" /* CameraPreview */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_product_product__["a" /* ProductProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_cart_cart__["a" /* CartProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_payment_payment__["a" /* PaymentProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_order_order__["a" /* OrderProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_search_search__["a" /* SearchProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_plazma_plazma__["a" /* PlazmaProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_insta_search_insta_search__["a" /* InstaSearchProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_delphi_delphi__["a" /* DelphiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
var API = {
    API_URL: 'http://localhost:8000/api/v1/',
    AUTHENTICATION_SHOE_CHECK_URL: '',
    AUTHENTICATION_SHOE_NAME_CHECK_URL: '',
    AUTHENTICATION_SHOE_AUTHENTICITY_CHECK_URL: '',
    SOLE_CHECK_URL: '',
    INSTA_SEARCH_URL: '',
    DELPHI_FORCAST_URL: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CartProvider = /** @class */ (function () {
    function CartProvider(http, storage, platform) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.items = [];
        this.platform.ready().then(function () { return _this.loadCart(); });
    }
    CartProvider.prototype.loadCart = function () {
        var _this = this;
        this.storage.get('CART').then(function (cart) {
            console.log(cart);
            if (cart) {
                _this.items = cart;
            }
        });
    };
    CartProvider.prototype.addToCart = function (item) {
        this.items.push(item);
    };
    CartProvider.prototype.clearCart = function () {
        var _this = this;
        this.storage.set('CART', []).then(function () { return _this.loadCart(); });
    };
    Object.defineProperty(CartProvider.prototype, "getItems", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartProvider.prototype, "getNebulaItems", {
        get: function () {
            return this.items.filter(function (item) { return (item.nebula !== null || true); });
        },
        enumerable: true,
        configurable: true
    });
    CartProvider.prototype.getItem = function (uuid) {
        return this.items.find(function (item) { return item.uuid === uuid; });
    };
    CartProvider.prototype.removeItem = function (uuid) {
        var item = this.getItem(uuid);
        this.items.splice(1, this.items.indexOf(item));
    };
    CartProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], CartProvider);
    return CartProvider;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingsoonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ComingsoonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComingsoonPage = /** @class */ (function () {
    function ComingsoonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComingsoonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComingsoonPage');
    };
    ComingsoonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comingsoon',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/comingsoon/comingsoon.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button navPop icon-only class="arrow-back">\n          <ion-icon name="close" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n  \n\n<ion-content padding>\n  <div class="vert-align">\n    <p>Coming Soon</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/comingsoon/comingsoon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ComingsoonPage);
    return ComingsoonPage;
}());

//# sourceMappingURL=comingsoon.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceCurveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PriceCurveComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PriceCurveComponent = /** @class */ (function () {
    function PriceCurveComponent() {
    }
    PriceCurveComponent.prototype.ngOnInit = function () {
        this.constructKnob();
    };
    PriceCurveComponent.prototype.constructKnob = function () {
        var pos = this.calculatepos(this.price);
        console.log("post", pos);
        var type;
        var path;
        if (this.price >= 0 && this.price <= 100) {
            path = this.redPathInstance.nativeElement;
            type = "red";
        }
        if (this.price >= 101 && this.price <= 200) {
            path = this.orangePathInstance.nativeElement;
            type = "orange";
        }
        if (this.price >= 201 && this.price <= 400) {
            path = this.yellowPathInstance.nativeElement;
            type = "yellow";
        }
        if (this.price >= 401) {
            path = this.greenPathInstance.nativeElement;
            type = "green";
        }
        if (type == "yellow" || type == "green")
            pos = 1 - pos;
        var pathLength = path.getTotalLength();
        var loc = path.getPointAtLength(pos * pathLength);
        console.log(loc);
        var div = document.createElement("div");
        div.setAttribute("class", "knob");
        if (type == "red")
            div.style.border = "5px solid #FF003F";
        if (type == "orange")
            div.style.border = "5px solid #FFC14F";
        if (type == "yellow")
            div.style.border = "5px solid #FFFF2C";
        if (type == "green")
            div.style.border = "5px solid #13F200";
        div.style.left = loc.x + "px";
        div.style.top = loc.y + "px";
        if (type == "red") {
            if (pos >= 0.6 && pos <= 0.9)
                div.style.marginLeft = "21px";
            if (pos <= 0.5 && pos >= 0.3)
                div.style.marginLeft = "20px";
            if (pos < 0.3)
                div.style.marginLeft = "18px";
        }
        if (type == "orange") {
            if (pos <= 0.5) {
                div.style.marginTop = "60px";
                div.style.marginLeft = "15px";
            }
            if (pos >= 0.6) {
                div.style.marginTop = "58px";
                div.style.marginLeft = "15px";
            }
        }
        if (type == "yellow") {
            if (pos >= 0 && pos <= 0.2) {
                div.style.marginTop = "53px";
                div.style.marginLeft = "10px";
            }
            if (pos >= 0.2 && pos <= 0.4) {
                div.style.marginTop = "55px";
                div.style.marginLeft = "10px";
            }
            if (pos >= 0.4) {
                div.style.marginTop = "56px";
                div.style.marginLeft = "10px";
            }
        }
        if (type == "green") {
            if (pos) {
                div.style.marginLeft = "10px";
            }
            if (pos > 0.9) {
                div.style.marginLeft = "18px";
            }
            if (pos <= 0.7 && pos >= 0.5) {
                div.style.marginLeft = "13px";
            }
            if (pos <= 0.5 && pos >= 0.3) {
                div.style.marginLeft = "15px";
            }
            if (pos <= 0.2) {
                div.style.marginLeft = "17px";
            }
        }
        this.cont.nativeElement.appendChild(div);
    };
    PriceCurveComponent.prototype.calculatepos = function (price) {
        if (price > 650)
            return 1;
        var lowerbound, upperbound;
        if (this.price >= 0 && this.price <= 100) {
            lowerbound = 0;
            upperbound = 100;
        }
        if (this.price >= 101 && this.price <= 200) {
            lowerbound = 101;
            upperbound = 200;
        }
        if (this.price >= 201 && this.price <= 400) {
            lowerbound = 201;
            upperbound = 400;
        }
        if (this.price >= 401) {
            lowerbound = 401;
            upperbound = 650;
        }
        var pos = (price - lowerbound) / (upperbound - lowerbound);
        return pos;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cont"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PriceCurveComponent.prototype, "cont", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("redPath"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PriceCurveComponent.prototype, "redPathInstance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("orangePath"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PriceCurveComponent.prototype, "orangePathInstance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("yellowPath"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PriceCurveComponent.prototype, "yellowPathInstance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("greenPath"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PriceCurveComponent.prototype, "greenPathInstance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("price"),
        __metadata("design:type", Object)
    ], PriceCurveComponent.prototype, "price", void 0);
    PriceCurveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "price-curve",template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/components/price-curve/price-curve.html"*/'<div #cont>\n  <svg\n    width="352"\n    height="208"\n    viewBox="0 0 352 208"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      #redPath\n      id="red-path"\n      d="M6.50845 201.805C6.50845 181.707 10.467 161.806 18.158 143.239C25.849 124.671 37.1219 107.8 51.333 93.5886"\n      stroke="#FF003F"\n      stroke-width="11.3039"\n    />\n    <path\n      #greenPath\n      d="M346.202 200.302C346.202 180.204 342.244 160.304 334.553 141.736C326.862 123.168 315.589 106.297 301.378 92.0859"\n      stroke="#13F200"\n      stroke-width="11.3039"\n    />\n    <path\n      #yellowPath\n      d="M293.313 83.5203C279.102 69.3092 262.231 58.0363 243.663 50.3453C225.096 42.6543 205.195 38.6958 185.097 38.6958"\n      stroke="#FFFF2C"\n      stroke-width="11.3039"\n    />\n    <path\n      #orangePath\n      d="M60.1306 83.5204C74.3418 69.3092 91.2128 58.0363 109.781 50.3453C128.348 42.6543 148.249 38.6958 168.347 38.6958"\n      stroke="#FFC14F"\n      stroke-width="11.3039"\n    />\n    <circle cx="292.598" cy="82.7612" r="5.65133" fill="#FFFF00" />\n    <circle cx="303.615" cy="94.279" r="5.65133" fill="#13F200" />\n    <circle cx="302.113" cy="92.7763" r="5.65133" fill="#13F200" />\n    <circle cx="346.182" cy="201.947" r="5.65133" fill="#13F200" />\n    <circle cx="185.431" cy="38.6923" r="5.65133" fill="#FFFF00" />\n    <circle cx="168.404" cy="38.6923" r="5.65133" fill="#FFC14F" />\n    <circle cx="59.7343" cy="83.7622" r="5.65133" fill="#FFC14F" />\n    <circle cx="50.7202" cy="94.279" r="5.65133" fill="#FF003F" />\n    <circle cx="6.65133" cy="201.947" r="5.65133" fill="#FF003F" />\n  </svg>\n</div>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/components/price-curve/price-curve.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PriceCurveComponent);
    return PriceCurveComponent;
}());

//# sourceMappingURL=price-curve.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_cart_cart__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_regularcheckout_regularcheckout__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DrawerState;
(function (DrawerState) {
    DrawerState[DrawerState["Bottom"] = 0] = "Bottom";
    DrawerState[DrawerState["Docked"] = 1] = "Docked";
    DrawerState[DrawerState["Top"] = 2] = "Top";
})(DrawerState || (DrawerState = {}));
var CartComponent = /** @class */ (function () {
    function CartComponent(cartProvider, navCtrl, platform, storage) {
        var _this = this;
        this.cartProvider = cartProvider;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.storage = storage;
        this.cartDrawer = false;
        this.closeCart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.shouldCartBounce = true;
        this.minimumCartHeight = 0;
        this.items = [];
        this.drawerState = DrawerState.Docked;
        platform.ready().then(function () {
            _this.getItems();
        });
    }
    CartComponent.prototype.ngOnInit = function () {
        this.items = this.cartProvider.getItems;
    };
    CartComponent.prototype.ionViewDidLoad = function () {
    };
    CartComponent.prototype.toggleCartDrawer = function () {
        this.closeCart.emit('closeCart');
    };
    CartComponent.prototype.checkDrawerState = function () {
        var _this = this;
        this.checkInterval = setInterval(function () {
            if (_this.cartDrawer) {
                if (_this.drawerState == DrawerState.Bottom) {
                    clearInterval(_this.checkInterval);
                    // if (this.drawer) return (this.drawer = false);
                    if (_this.cartDrawer)
                        return (_this.cartDrawer = false);
                }
            }
        }, 500);
    };
    CartComponent.prototype.removeItem = function (item) {
    };
    CartComponent.prototype.getItems = function () {
        var _this = this;
        this.storage.get('CART').then(function (cart) {
            console.log(cart);
            if (cart) {
                _this.items = cart;
            }
            else
                _this.items = [];
        });
    };
    CartComponent.prototype.checkout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_regularcheckout_regularcheckout__["a" /* RegularcheckoutPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('cartDrawer'),
        __metadata("design:type", Object)
    ], CartComponent.prototype, "cartDrawer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], CartComponent.prototype, "closeCart", void 0);
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cart',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/components/cart/cart.html"*/'<button ion-button icon-only clear class="cart-btn" (click)="toggleCartDrawer()">\n  <img src="assets/icon/cart-grey.png" alt="" />\n  <ion-badge class="cart-badge" color="blue">2</ion-badge>\n</button>\n<ion-bottom-drawer\n  *ngIf="cartDrawer"\n  class="cartDrawer"\n  [ngClass]="{\'drawer-anim\': animateCartdrawer}"\n  [(state)]="drawerState"\n  [shouldBounce]="shouldCartBounce"\n  dockedHeight="750"\n  disableDrag="true"\n>\n  <div class="cart-content">\n    <img src="assets/icon/slider-bar.png" class="slider-bar" alt="" />\n    <div class="d-flex cart-header">\n      <h4 padding class="cart">Cart</h4>\n      <button (click)="toggleCartDrawer()" class="close-button" ion-button color="light"><ion-icon name="close"></ion-icon></button>\n    </div>\n    <ion-list lines>\n      <ion-item-sliding *ngFor="let item of items">\n        <ion-item>\n          <ion-row padding>\n            <ion-col col-5>\n              <img [src]="item.product.images[0].url" alt="" />\n            </ion-col>\n            <ion-col col-7>\n              <p class="p-sm">{{ item.size }}</p>\n              <p class="p-md">{{ item.product.name.split(\' \').slice(0, 2).join(\' \') }}</p>\n              <p class="p-strong">{{ item.price }}</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="danger" (click)="removeItem(item)">\n            Remove\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <p class="muted">\n      The cart does not guarantee reservations and prices may vary, purchase as\n      soon as possible.\n    </p>\n\n    <div class="div-chk-btn">\n      <button ion-button block color="blue" class="chk-btn" (click)="checkout()">\n        Go to Checkout\n      </button>\n    </div>\n\n    <div class="div-more-items">\n      <h4>More Items</h4>\n    </div>\n\n    <div class="div-slides">\n      <ion-slides [slidesPerView]="2.4" class="slides">\n        <ion-slide>\n          <img src="assets/imgs/product1.png" alt="" />\n          <p>Product Name</p>\n        </ion-slide>\n        <ion-slide>\n          <img src="assets/imgs/product2.png" alt="" />\n          <p>Product Name</p>\n        </ion-slide>\n        <ion-slide>\n          <img src="assets/imgs/product3.png" alt="" />\n          <p>Product Name</p>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-bottom-drawer>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/components/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], CartComponent);
    return CartComponent;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CartIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CartIconComponent = /** @class */ (function () {
    function CartIconComponent() {
        this.openCart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log('Hello CartIconComponent Component');
        this.text = 'Hello World';
    }
    CartIconComponent.prototype.toggleCart = function () {
        this.openCart.emit('open-cart');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], CartIconComponent.prototype, "openCart", void 0);
    CartIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cart-icon',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/components/cart-icon/cart-icon.html"*/'<button ion-button icon-only clear class="cart-btn" (click)="toggleCart()">\n  <img src="assets/icon/cart-grey.png" alt="" />\n  <ion-badge class="cart-badge" color="blue">2</ion-badge>\n</button>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/components/cart-icon/cart-icon.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CartIconComponent);
    return CartIconComponent;
}());

//# sourceMappingURL=cart-icon.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.backgroundColorByHexString("#a9a9a9");
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/app/app.html"*/'<ion-nav [root]="rootPage" id="nav" #nav></ion-nav>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_countries_list__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_countries_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_countries_list__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = /** @class */ (function () {
    function AddressPage(navCtrl, navParams, authProvider, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.toastController = toastController;
        this.isLoading = false;
    }
    AddressPage.prototype.ionViewDidLoad = function () {
        this.user = this.authProvider.getUser.user || this.authProvider.getUser;
        console;
        this.userData = this.user;
        if (this.userData) {
            this.userData.first_name = this.userData.name.split(' ')[0];
            this.userData.last_name = this.userData.name.split(' ')[1];
        }
        this.countryList = __WEBPACK_IMPORTED_MODULE_3_countries_list__["countries"];
        this.countryList = Object.entries(__WEBPACK_IMPORTED_MODULE_3_countries_list__["countries"]).map(function (country) { return country[1].name; });
    };
    AddressPage.prototype.updateDetails = function () {
        var _this = this;
        this.isLoading = true;
        this.userData.name = this.userData.first_name + " " + this.userData.last_name;
        this.authProvider.updateAccount(this.userData).subscribe(function (response) {
            _this.authProvider.updateUser(response);
            _this.isLoading = false;
            _this.presentToast();
        });
    };
    AddressPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Account information successfully updated',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/address/address.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button navPop icon-only>\n          <ion-icon name="ios-arrow-back" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title text-center>Add Address</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="cont" *ngIf="userData">\n      <ion-item>\n          <ion-label floating>Country or Region </ion-label>\n          <ion-select type="text" *ngIf="countryList" [(ngModel)]="userData.country">\n            <ion-option *ngFor="let countryName of countryList">{{ countryName }}</ion-option>\n          </ion-select>\n          <ion-icon name="ios-arrow-forward"  item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>First Name </ion-label>\n            <ion-input type="text" [ngModel]="userData.first_name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Last Name </ion-label>\n            <ion-input type="text" [ngModel]="userData.last_name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Street Address </ion-label>\n            <ion-input type="text" [ngModel]="userData.address1"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Street Address 2 </ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>City </ion-label>\n            <ion-input type="text" [ngModel]="userData.city"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>State</ion-label>\n            <ion-input type="text" [ngModel]="userData.state"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Zip Code</ion-label>\n            <ion-input type="text" [ngModel]="userData.zip_code"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Phone Number</ion-label>\n            <ion-input type="text" [ngModel]="userData.phone"></ion-input>\n        </ion-item>\n\n        <ion-item no-lines class="save">\n            <ion-label class="toggle-txt">Save as primary address</ion-label>\n            <ion-toggle mode="ios" color="blue" checked="true"></ion-toggle>\n      </ion-item>\n      <p>\n          This is the address your packages will be sent to, please be sure the information is correct.\n      </p>\n  </div>\n</ion-content>\n\n<ion-footer padding>\n  <button (click)="updateDetails()" class="footer-btn" ion-button>Add</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/shemarlaurent/Dropbox/apps/helyos-app/src/pages/address/address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment_environment__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductProvider = /** @class */ (function () {
    function ProductProvider(http) {
        this.http = http;
        console.log('Hello ProductProvider Provider');
    }
    ProductProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('Something bad happened; please try again later.');
    };
    ;
    // Get students data
    ProductProvider.prototype.getProducts = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environment_environment__["a" /* API */].API_URL + 'store/products/all')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    ProductProvider.prototype.getRelatedProducts = function (product) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environment_environment__["a" /* API */].API_URL + ("store/products/related/" + product.slug))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    ProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductProvider);
    return ProductProvider;
}());

//# sourceMappingURL=product.js.map

/***/ })

},[398]);
//# sourceMappingURL=main.js.map