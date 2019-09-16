(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/index.js!./src/app/access-wallet/access-wallet-model.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/access-wallet/access-wallet-model.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-header\">\n    Access by Mnemonic Phrase\n</div>\n<!-- <h1 mat-dialog-title>Access by Mnemonic Phrase</h1> -->\n<form (ngSubmit)=\"submitMnemonic(f)\" #f=\"ngForm\">\n    <div mat-dialog-content>\n        <p class=\"mt-2\">Please type in your mnemonic phrase.</p>\n        <div class=\"row\">\n            <div class=\"col-4\" *ngFor=\"let l of arrayTwelve(12); let i = index;\">\n                <div class=\"form-group\">\n                    <div class=\"wallet-data\">\n                        <Label>{{i+1}}.</Label>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput name=\"mne_key_{{i}}\" [ngModel]=\"test\">\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row pb-1\">\n            <div class=\"col-md-3\">\n                <button class=\"mywall-btn4\" type=\"submit\" cdkFocusInitial>Verify</button>\n            </div>\n            <div class=\"col-md-3\">\n                <button class=\"mywall-btn-cancel2\" type=\"button\" (click)=\"onNoClick()\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/access-wallet/access-wallet.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/access-wallet/access-wallet.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <app-header></app-header>\n  <!-- breadcrumb-area start -->\n  <!-- <div class=\"breadcrumb-area section-ptb\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h2 class=\"breadcrumb-title\">About</h2>\n                <ul class=\"breadcrumb-list\">\n                    <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n                    <li class=\"breadcrumb-item active\">About</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div> -->\n  <!-- breadcrumb-area end -->\n  <!-- Accress Page -->\n  <div class=\"about-us-area section-ptb\" style=\"background-image: url('../../assets/images/access_bg.png')\">\n    <div class=\"container\">\n      <app-alert></app-alert>\n      <div #alrtDiv id=\"alrtDiv\"></div>\n      <div class=\"col-md-8 offset-md-2\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-6 col-md-6\" (click)=\"accessWalletData()\">\n            <!-- single-latest-blog Start -->\n            <div class=\"single-latest-blog mb--30\">\n              <div class=\"latest-blog-cont bg-light text-dark\">\n                <div class=\"row m-0\">\n                  <div class=\"col-12 text-center\">\n                    <i class=\"material-icons\" style=\"font-size: 120px;color:#ffab00\">\n                      confirmation_number\n                    </i>\n                  </div>\n                  <div class=\"col-12\">\n                    <h3 class=\"text-dark text-center\"><a>Mnemonic Phrase</a></h3>\n                    <!-- <p class=\"w-address\">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-6\" (click)=\"privateKeyData()\">\n            <div class=\"single-latest-blog mb--30\">\n              <div class=\"latest-blog-cont bg-light text-dark\">\n                <div class=\"row m-0\">\n                  <div class=\"col-12 text-center\">\n                    <i class=\"material-icons\" style=\"font-size: 120px;color:#ffab00\">\n                      vpn_key\n                    </i>\n                  </div>\n                  <div class=\"col-12\">\n                    <h3 class=\"text-dark text-center\"><a>Private Key</a></h3>\n                    <!-- <p class=\"w-address\">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- / -->\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/access-wallet/private-key-model.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/access-wallet/private-key-model.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-header\">\n    Access by Private Key\n</div>\n<form (ngSubmit)=\"submitWif(f)\" #f=\"ngForm\">\n    <div mat-dialog-content class=\"mt-2\">\n        <!-- <p>Choose Network Type</p> -->\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label for=\"\">Enter private key</label>\n                <input type=\"text\" class=\"form-control\" name=\"wif_key\" [ngModel]=\"\" placeholder=\"Enter private key\">\n            </div>\n        </div>\n    </div>\n    <hr />\n    <div mat-dialog-actions>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"\">\n                        <button class=\"btn btn-info mywall-btn\" type=\"submit\">Access Wallet</button>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <button [mat-dialog-close]=\"\" class=\"mywall-btn-cancel\" type=\"button\" cdkFocusInitial>Cancel</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n  <!-- <app-spinner></app-spinner> -->\n</router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-wallet/create-wallet.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-wallet/create-wallet.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n    <div style=\"margin-left: 20px\">\n        <app-header></app-header>\n    </div>\n    <!-- breadcrumb-area start -->\n    <div class=\"breadcrumb-area section-ptb\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <h2 class=\"breadcrumb-title\">About</h2>\n                    <ul class=\"breadcrumb-list\">\n                        <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                        <li class=\"breadcrumb-item active\">About</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- breadcrumb-area end -->\n    <div class=\"about-us-area \">\n        <div class=\"container\">\n            <!-- <div #alrtDiv id=\"alrtDiv\"></div>\n            <app-alert></app-alert> -->\n            <div class=\"row align-items-center\">\n                <div class=\"col-md-5\">\n                    <div class=\"about-us-image  wow fadeInBottom\" data-wow-duration=\"1s\">\n                        <img src=\"assets/images/about/about-02.png\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"col-md-6 offset-md-1 bg-white\">\n                    <div class=\"about-us-wrap\">\n                        <div class=\"section-title text-left\">\n                            <div class=\"col-md-121\">\n                                <div #alrtDiv id=\"alrtDiv\"></div>\n                                <app-alert></app-alert>\n                            </div>\n                            <h3>Get a New <span>Wallet</span></h3>\n                            <p>Already have a wallet? <a class=\"text-warning\" routerLink=\"/access-wallet\">Access My\n                                    Wallet</a></p>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-md-12\">\n                                <div class=\"about-us-content\">\n                                    <mat-tab-group mat-stretch-tabs>\n                                        <mat-tab label=\"By Random Keypair\">\n                                            <mat-card>\n                                                <div class=\"text-center p-5\">\n                                                    <button class=\"btn btn-info mywall-btn\" (click)=\"openDilog()\">Generate\n                                                Random Keypair</button>\n                                                </div>\n                                            </mat-card>\n                                        </mat-tab>\n                                        <mat-tab label=\"By Mnemonic Phrase\">\n                                            <mat-card>\n                                                <div class=\"text-center \">\n                                                    <h4 class=\"pwd-txt\">Your Mnemonic Phrase</h4>\n                                                </div>\n                                                <div class=\"c-wallet\">\n\n                                                    <form class=\"example-form\">\n                                                        <div class=\"row clearfix\">\n                                                            <div class=\"col-md-4\" *ngFor=\"let word of apiServices.mnemonic; let i = index\">\n                                                                <div class=\"wallet-data\">\n                                                                    {{i+1}}. {{word}}\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"row\">\n                                                            <div class=\"col-md-12 text-center\">\n                                                                <button class=\"btn btn-info mywall-mnem\" (click)=\"openWalletData()\">I Wrote Down My Mneminic\n                                                            Phrase </button>\n                                                            </div>\n                                                        </div>\n                                                    </form>\n                                                </div>\n                                                <hr />\n                                                <p><span class=\"text-danger\">DO NOT FORGET</span> to save your Phrase. You will need this to access your wallet.</p>\n                                            </mat-card>\n                                        </mat-tab>\n                                        <!-- <mat-tab label=\"Third\"> Content 3 </mat-tab> -->\n                                    </mat-tab-group>\n\n                                    <p class=\"p-2\">Want to learn more about Blockchain or Myprivatewallet? Please go to FAQs</p>\n                                </div>\n                            </div>\n                        </div>\n                        <!--// About us content End -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-wallet/key-pair-dialog.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-wallet/key-pair-dialog.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-header\">\n    Wallet Details\n</div>\n<div mat-dialog-content>\n    <!-- Display success Message -->\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"cm_img\">\n            <img src=\"../../assets/images/success_arrow.svg\" class=\"img-fluid center\" width=\"120px\"  alt=\"\">\n        </div>\n      </div>\n    </div>\n    <span><b>Your address is :</b></span>\n    <p>{{address}}</p>\n    <span style=\"color: green\"> Please access your wallet</span>\n    <!-- <mat-form-field> -->\n    <!-- <a href=\"Javascript:void(0)\" class=\"btn btn-success\" routerLink=\"/access-wallet\">Access Wallet</a> -->\n    <!-- </mat-form-field> -->\n</div>\n<hr />\n<div mat-dialog-actions>\n    <button mat-button (click)=\"accessWallet()\" class=\"btn wall_cbtn\">Access Wallet</button>\n    <button mat-button type=\"button\" class=\"btn wall_cancel\" (click)=\"onNoClick()\">Cancel</button>\n    <!-- <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-wallet/wallet-data-popup.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-wallet/wallet-data-popup.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-header\">\n    Verification\n</div>\n<form (ngSubmit)=\"verifyMnemonic(f)\" #f=\"ngForm\">\n    <div mat-dialog-content>\n        <p>Please enter and fill out the empty boxes below to verify your mnemonic phrase key.</p>\n        <div class=\"row\">\n            <div class=\"col-md-4\" *ngFor=\"let word of display_mnemonic_local; let i = index\">\n                <div class=\"form-group\">\n                    <div class=\"wallet-data\">\n                        <!-- {{i+1}}. <span>{{word}}</span> -->\n                        <div class=\"mlabel\">{{i+1}}.</div>\n                        <div class=\"mtest_fm\">\n                            <input class=\"form-control\" type=\"text\" name=\"mn_key_{{i}}\"\n                                [ngModel]=\"display_mnemonic_local[i]\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"col-md-10 offset-md-1\">\n                <div class=\"form-group\">\n                    <button class=\"wall_cbtn\" type=\"submit\">Verify</button>\n                </div>\n            </div> -->\n        </div>\n    </div>\n    <hr />\n    <div mat-dialog-actions>\n        <button mat-button class=\"btn wall_cbtn\" type=\"submit\" cdkFocusInitial>Verify</button>\n        <button mat-button type=\"button\" (click)=\"onNoClick()\">Cancel</button>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/includes/footer/footer.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/includes/footer/footer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer Area Start -->\n<footer class=\"footer-area footer-bg\">\n    <!-- Footer-top Start -->\n    <div class=\"footer-top pt--50 pb--50\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-6\">\n                    <!-- Footer-info Start -->\n                    <div class=\"footer-info mt--60\">\n                        <div class=\"footer-title\">\n                            <h3>About Wallet</h3>\n                        </div>\n                        <p>MyPrivateWallet is open-source and free to the community. Your donations go a long way\n                            towards making that possible.</p>\n                        <ul class=\"social\">\n                            <li><a href=\"#\"><i class=\"bi bi-facebook\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"bi bi-twitter-bird\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"bi bi-twitter\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"bi bi-youtube\"></i></a></li>\n                        </ul>\n                    </div>\n                    <!--// Footer-info End -->\n                </div>\n                <div class=\"col-lg-2 col-md-6\">\n                    <!-- Footer-info Start -->\n                    <div class=\"footer-info  mt--60\">\n                        <div class=\"footer-title\">\n                            <h3>SERVICES</h3>\n                        </div>\n                        <ul class=\"footer-list\">\n                            <li><a href=\"#\">About Us</a></li>\n                            <li><a href=\"#\">Team</a></li>\n                            <li><a href=\"#\">FAQs</a></li>\n\n                        </ul>\n                    </div>\n                    <!--// Footer-info End -->\n                </div>\n                <div class=\"col-lg-3  col-md-6\">\n                    <!-- Footer-info Start -->\n                    <div class=\"footer-info  mt--60\">\n                        <div class=\"footer-title\">\n                            <h3>&nbsp;</h3>\n                        </div>\n                        <ul class=\"footer-list\">\n                            <!-- <li><a href=\"#\">Vintage</a></li> -->\n                            <li>Customer support </li>\n                            <li><a href=\"#\">Help center</a></li>\n\n                        </ul>\n                    </div>\n                    <!--// Footer-info End -->\n                </div>\n                <div class=\"col-lg-3  col-md-6\">\n                    <!-- Footer-info Start -->\n                    <div class=\"footer-info  mt--60\">\n                        <div class=\"footer-title\">\n                            <h3>DONATIONS</h3>\n                        </div>\n                        <ul class=\"footer-list\">\n                            <li>\n                                <a href=\"#\"><img src=\"assets/images/coins/btc-coin.png\" alt=\"\" width=\"28px\"> BitCoin\n                                    Donation</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><img src=\"assets/images/coins/eth-coin.png\" alt=\"\" width=\"28px\"> Ethereum\n                                    Donation</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <!--// Footer-info End -->\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--// Footer-top End -->\n\n    <!-- footer-bottom Start -->\n    <div class=\"footer-bottom\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"footer-bottom-inner text-center\">\n                        <p>Copyright &copy; Myprivatewallet 2019 All Right Reserved</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--// footer-bottom End -->\n</footer>\n<!-- Footer Area End -->\n<script>\n    window.onbeforeunload = function () {\n        sessionStorage.clear();\n    }\n</script>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/includes/header/header.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/includes/header/header.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header-area start -->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a href=\"#\"><img src=\"../../../assets/images/logo/logo_new.svg\" alt=\"\" width=\"200px;\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"!is_auth\">\n                <a class=\"nav-link\" href=\"#\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!is_auth\">\n                <a class=\"nav-link\" href=\"#\">About</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"is_auth\">\n                <a class=\"nav-link\" href=\"#\">Transaction History</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"is_auth\">\n                <a class=\"nav-link\" href=\"#\">FAQS</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Language</a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"#\">English</a>\n                    <a class=\"dropdown-item\" href=\"#\">Japan</a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown mr-4\" *ngIf=\"is_auth\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Account</a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"#\">Settings</a>\n                    <a class=\"dropdown-item\" href=\"#\" (click)=\"apiServices.onLogout()\">Log out</a>\n                </div>\n            </li>\n\n            <!-- Access  -->\n            <li class=\"nav-item dropdown mr-4 d-block d-sm-none\" *ngIf=\"!is_auth\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Wallet</a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" routerLink=\"/create-wallet\">NEW WALLET</a>\n                    <a class=\"dropdown-item\" href=\"#\" routerLink=\"/access-wallet\">ACCESS</a>\n                </div>\n            </li>\n        </ul>\n        <div class=\"navbar-nav d-none d-sm-block\" *ngIf=\"!is_auth\">\n            <a class=\"nav-item nav-link btn sly-btn-out-line mr-1\" href=\"#\" routerLink=\"/create-wallet\">NEW\n              WALLET</a>\n        </div>\n        <div class=\"navbar-nav d-none d-sm-block\" *ngIf=\"!is_auth\">\n            <a class=\"nav-item nav-link btn sly-btn\" href=\"#\" routerLink=\"/access-wallet\">ACCESS</a>\n        </div>\n    </div>\n</nav>\n\n<!-- Header-area end -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/includes/left-menu/left-menu.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/includes/left-menu/left-menu.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-sidebar-wrap\">\n    <div class=\"blog-sidebar\">\n        <h4 class=\"title\">MENU</h4>\n        <hr/>\n        <h4>\n            <a routerLink=\"/dashboard\">\n                <i class=\"material-icons\" style=\"font-size:14px\">\n                        dashboard</i> My Dashboard </a>\n        </h4>\n\n    </div>\n</div>\n<div class=\"blog-sidebar-wrap mt-2\">\n    <div class=\"blog-sidebar\">\n        <h4>\n            <a routerLink=\"/swap\">\n                <i class=\"material-icons\" style=\"font-size:18px;\">swap_horiz</i> Swap</a>\n        </h4>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/includes/slider/slider.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/includes/slider/slider.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-slider hero-slider-1\">\n  <div class=\"single-slide\" style=\"background-image: url(assets/images/slider/slide-bg-1.png)\">\n    <div class=\"home-decor\">\n      <div class=\"home-overlay-img-1\">\n        <img src=\"./assets/images/slider/seomar02.png\" alt=\"\">\n      </div>\n    </div>\n    <!-- Hero Content One Start -->\n    <div class=\"hero-content-one container\">\n      <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-7 col-md-7 order-md-1 order-2\">\n          <!-- slider-text-info Start -->\n          <div class=\"slider-text-info\">\n            <h4>Myprivatewallet</h4>\n            <h1><span class=\"color-two\">My</span>  privatewallet</h1>\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when\n              looking at its layout.\n              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>\n            <div class=\"slider-button\">\n              <a href=\"about.html\" class=\"slider-btn\">ABOUT MORE</a>\n            </div>\n          </div>\n          <!--// slider-text-info End -->\n        </div>\n        <div class=\"col-xl-6 col-lg-5 col-md-5 order-md-2 order-1\">\n          <!-- slider-inner-image Start -->\n          <div class=\"slider-inner-image\">\n            <img src=\"./assets/images/slider/slide-inner-1.png\" alt=\"\">\n          </div>\n          <!--// slider-inner-image End -->\n        </div>\n      </div>\n    </div>\n    <!-- Hero Content One End -->\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/includes/wallet-balance/change-network-popup.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/includes/wallet-balance/change-network-popup.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Change Network</h1>\n<!-- <button mat-button [mat-dialog-close]=\"true\">Yes</button> --\n<hr />\n<div mat-dialog-content>\n    <div class=\"row\">\n        <div class=\"col-md-5\">\n            <h3>Advance</h3>\n        </div>\n        <div class=\"col-md-7\">\n            <section class=\"example-section text-right\">\n                <mat-checkbox class=\"example-margin\" [ngModel]=\"checked\">Add Custom Network/Node</mat-checkbox>\n            </section>\n        </div>\n    </div>\n    <hr />\n    <div class=\"coin_bg_n\">\n        <div class=\"row\">\n            <div class=\"col-md-5\">\n                <h4><img src=\"../../../assets/images/icon/BTCBTC.png\" alt=\"\" class=\"img-fluid\" width=\"32px\"> REP\n                </h4>\n            </div>\n            <div class=\"col-md-7\">\n                <h3 class=\"text-right\">0</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-4 pl-0\">\n                <div class=\"web-txt\">\n                    myprivatewallet.com\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                etherem.io\n            </div>\n            <div class=\"col-md-3\">\n                infura.io\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-4\">\n                <div class=\"\">\n                    infrus.com\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                myprivatewallet.com-ws\n            </div>\n            <div class=\"col-md-3\">\n                &nbsp;\n            </div>\n        </div>\n    </div>\n\n    <div class=\"coin_bg_n pt-1\">\n        <div class=\"row\">\n            <div class=\"col-md-5\">\n                <h4><img src=\"../../../assets/images/icon/XRP.png\" alt=\"\" class=\"img-fluid\" width=\"32px\"> XRP\n                </h4>\n            </div>\n            <div class=\"col-md-7\">\n                <h3 class=\"text-right\">0</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-4\">\n                <div class=\"\">\n                    infrus.com\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                myprivatewallet.com-ws\n            </div>\n            <div class=\"col-md-3\">\n                &nbsp;\n            </div>\n        </div>\n    </div>\n\n</div>\n<hr />\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n    <!-- <button mat-button [mat-dialog-close]=\"data.animal\" class=\"btn btn-info\" cdkFocusInitial>Close</button> --\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/includes/wallet-balance/check-wallet-balance.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/includes/wallet-balance/check-wallet-balance.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Balance</h1>\n<!-- <button mat-button [mat-dialog-close]=\"true\">Yes</button> -->\n<hr />\n<div mat-dialog-content>\n    <div class=\"row clearfix coin_bg2\">\n        <div class=\"col-md-6\">\n            <h3>Total Balance</h3>\n        </div>\n        <div class=\"col-md-6\">\n            <h3 class=\"text-right\">0 ETH</h3>\n        </div>\n    </div>\n\n    <div class=\"row clearfix\">\n        <div class=\"col-md-12 pt-2 pb-1\">\n            <h4>Equivalent Values</h4>\n        </div>\n        <div class=\"coin_bg\">\n            <div class=\"row\">\n                <div class=\"col-md-5\">\n                    <h3><img src=\"../../../assets/images/icon/BTCBTC.png\" alt=\"\" class=\"img-fluid\" width=\"32px\"> REP\n                    </h3>\n                </div>\n                <div class=\"col-md-7\">\n                    <h3 class=\"text-right\">0</h3>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row clearfix\">\n        <div class=\"coin_bg\">\n            <div class=\"row\">\n                <div class=\"col-md-5\">\n                    <h3><img src=\"../../../assets/images/icon/XRP.png\" alt=\"\" class=\"img-fluid\" width=\"32px\"> XRP\n                    </h3>\n                </div>\n                <div class=\"col-md-7\">\n                    <h3 class=\"text-right\">0</h3>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n<hr />\n<div mat-dialog-actions>\n    <button mat-button type=\"button\" (click)=\"onNoClick()\">Cancel</button>\n    <!-- <button mat-button [mat-dialog-close]=\"data.animal\" class=\"btn btn-info\" cdkFocusInitial>Close</button> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/includes/wallet-balance/wallet-balance-popup.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/includes/wallet-balance/wallet-balance-popup.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Address</h1>\n<!-- <button mat-button [mat-dialog-close]=\"true\">Yes</button> -->\n<hr />\n<div mat-dialog-content>\n    <p class=\"h4 text-center text-warning\">QR code</p>\n    <div class=\"row clearfix\">\n        <div class=\"col-md-12\">\n            <div class=\"wallet-data text-center\">\n                <img src=\"https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl={{data.details['address']}}&choe=UTF-8\"\n                    class=\"image-fluid\" alt=\"QR code\">\n            </div>\n            <h4 class=\"p-4 text-center\">{{data.details['address']}}</h4>\n        </div>\n    </div>\n</div>\n<hr />\n<div mat-dialog-actions>\n    <button mat-button type=\"button\" (click)=\"onNoClick()\">Cancel</button>\n    <!-- <button mat-button [mat-dialog-close]=\"data.animal\" class=\"btn btn-info\" cdkFocusInitial>Copy</button> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/includes/wallet-balance/wallet-balance.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/includes/wallet-balance/wallet-balance.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-alert></app-alert>\n<div class=\"row\">\n    <div class=\"col-lg-6 col-md-6\">\n        <!-- single-latest-blog Start -->\n        <div class=\"single-latest-blog mb--30\">\n            <div class=\"latest-blog-cont bg-primary text-white\">\n                <div class=\"row m-0\">\n                    <div class=\"col-md-2 col-2 p-0\">\n                        <img src=\"../../assets/images/coins/btc-coin.png\" alt=\"\" class=\"img-fluid img-responsive\">\n                    </div>\n                    <div class=\"col-md-10 col-10\" style=\"overflow: hidden\">\n                        <h3 class=\"text-white\"><a>Address</a></h3>\n                        <p class=\"w-address\" id=\"wallet_addr\">{{wallet_details.address}}</p>\n                        <!-- <div class=\"btn wal-btn_address\" (click)=\"ToggleButton()\">Show address</div>\n                        <p class=\"w-address\" *ngIf=\"showSelected\">{{wallet_details.wif}}</p> -->\n                    </div>\n                </div>\n                <div class=\"row m-0\">\n                    <div class=\"col-md-12 p-0\">\n                        <div class=\"text-center\">\n                            <input type=button name=type class=\"btn wal-btn_address\" id='bt1' value='Show Private Key' onclick=\"setVisibility('sub3');\">\n                        </div>\n                        <div id=\"sub3\">{{wallet_details.wif}}</div>\n                    </div>\n                    <div class=\"col-md-6 mt-3 offset-md-3\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-3\">\n                                <a matTooltip=\"Address in Qr code\" matTooltipPosition=\"above\"><i class=\"material-icons\"\n                                        (click)=\"openWalletData()\">\n                                        developer_board</i></a>\n                            </div>\n                            <div class=\"col-md-4 col-3\">\n                                <a matTooltip=\"Print data\" matTooltipPosition=\"above\"><i class=\"material-icons\"\n                                        (click)=\"printAddr('sub3')\">local_printshop</i></a>\n                            </div>\n                            <div class=\"col-md-4 col-3\">\n                                <a><i class=\"material-icons\" matTooltip=\"Copy data\"\n                                        matTooltipPosition=\"above\">file_copy</i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--// single-latest-blog End -->\n    </div>\n    <div class=\"col-lg-6 col-md-6\">\n        <!-- single-latest-blog Start -->\n        <div class=\"single-latest-blog mb--30\">\n            <div class=\"latest-blog-cont bg-info text-white\">\n                <div class=\"row m-0\">\n                    <div class=\"col-2 p-0\">\n                        <img src=\"../../assets/images/coins/balance.svg\" alt=\"\" class=\"img-fluid img-responsive\">\n                    </div>\n                    <div class=\"col-7\">\n                        <h3 class=\"text-white\"><a href=\"#\">Balance</a></h3>\n                        <p>Main Balance : <span class=\"w-address\" [ngStyle]=\"{'color':ref_bal === true ? 'red' : '' }\">\n                                {{wallet_details.balance}} BTC</span>\n                            <!-- <span><a matTooltip=\"Refresh Balance\" matTooltipPosition=\"above\"\n                                    (click)=\"refreshBalance()\"><i class=\"material-icons\">loop</i></a></span></p> -->\n                            <!-- <span class=\"w-address\" style=\"color:green\" *ngIf=\"wallet_bal >= 0\">Main Balance : {{wallet_bal}} BTC</span> -->\n                        </p>\n                    </div>\n                    <div class=\"col-3\">\n                        <button type=\"button\" class=\"btn4 d-none d-sm-block\" matTooltip=\"Refresh Balance\" matTooltipPosition=\"above\" (click)=\"refreshBalance()\">\n                            <i class=\"material-icons ref_icons\">loop</i> Refrsh</button>\n                        <button type=\"button\" class=\"btn4 d-block d-sm-none\" matTooltip=\"Refresh Balance\" matTooltipPosition=\"above\" (click)=\"refreshBalance()\">\n                            <i class=\"material-icons ref_iconsd-non\">loop</i></button>\n                    </div>\n                </div>\n                <div class=\"row m-0\">\n                    <div class=\"col-2 p-0\"></div>\n                    <div class=\"col-10\">\n                        <p class=\"w-address\" *ngIf=\"wallet_details.unconfirmedBalance > 0\">unConfirmed : {{wallet_details.unconfirmedBalance}} BTC</p>\n                        <div class=\"w-address\">total Sent : {{wallet_details.totalSent}} BTC</div>\n                        <div class=\"w-address\">total Received : {{wallet_details.totalReceived}} BTC</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--// single-latest-blog End -->\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main-layout/main-layout.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main-layout/main-layout.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <app-header></app-header>\n  <!-- Hero Slider start -->\n  <app-slider></app-slider>\n  <!-- Hero Slider end -->\n\n  <!-- About Us Area Start -->\n  <!-- About Us Area Start -->\n  <div class=\"about-us-area section-ptb\">\n      <div class=\"container\">\n          <div class=\"row align-items-center\">\n              <div class=\"col-lg-5\">\n                  <!-- about-us-image Start -->\n                  <div class=\"about-us-image  wow fadeInBottom\" data-wow-duration=\"1s\">\n                      <img src=\"assets/images/about/about-02.png\" alt=\"\">\n                  </div><!--// about-us-image End -->\n              </div>\n              <div class=\"col-lg-6 offset-lg-1\">\n                  <div class=\"about-us-wrap\">\n                      <!-- section-title Start -->\n                      <div class=\"section-title text-left\">\n                          <h4>ABOUT US</h4>\n                          <h3>My <span>privatewallet</span></h3>\n                      </div>\n                      <!--// section-title End -->\n\n                      <!-- About us content Start -->\n                      <div class=\"about-us-content\">\n                          <p>\n                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,page when looking at its layout.\n                            The point of using\n                          </p>\n                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\n                          <ul>\n                              <li>Content of a page when looking at its layout. </li>\n                              <li>Content of a page when looking at its layout azer duskam. </li>\n                              <li>Content of a page when looking at its layout azer</li>\n                          </ul>  \n                      </div>\n                      <!--// About us content End -->\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- About Us Area End -->\n  <!-- Project-count-inner Start -->\n  <div class=\"project-count-inner overlay-bg\">\n    <section class=\"wrapper-full tab-container effectTab-header\" id=\"style_10\">\n      <div class=\"wrapper tab-item\">\n        <div class=\"custom-row\">\n          <div class=\"wrapper \" align=\"center\">\n            <h1 class=\"ti title\">Create Wallet</h1>\n          </div>\n          <div class=\"column-12 column-xs-12 tab\">\n            <div class=\"custom-row\">\n              <div class=\"column-6 column-xs-12 box-tab\">\n                <div class=\"effect grid-width6 effect-ten home-overlay-img-2\">\n                  <img src=\"../../../assets/images/other/create_wallet.png\" class=\"img-fluid\">\n                  <div class=\"tab-text\">\n                    <h2>Create a New Wallet</h2>\n                    <a href=\"#\" class=\"btn btn-info mt-4\" routerLink=\"/create-wallet\" style=\"z-index: 9999\">Get Started</a>\n                    \n                  </div>\n                </div>\n              </div>\n             \n              <div class=\"column-6 column-xs-12 box-tab\">\n                <div class=\"effect grid-width3 effect-ten home-overlay-img-2\">\n                  <img src=\"../../../assets/images/other/access_wlt.png\" class=\"img-fluid\">\n                  <div class=\"tab-text\">\n                    <h2>Access My Wallet</h2>\n                    <!-- <p>Access Now</p> -->\n                    <a href=\"#\" class=\"btn btn-info mt-4\" routerLink=\"/access-wallet\" style=\"z-index: 9999\">Access Wallet</a>\n                    <!-- <div class=\"icons-block\"> <a href=\"#\" class=\"social-icon-1\"><i class=\"fa fa-facebook-official\"></i></a> <a href=\"#\" class=\"social-icon-2\"><i class=\"fa fa-twitter-square\"></i></a> <a href=\"#\" class=\"social-icon-3\"><i class=\"fa fa-youtube-square\"></i></a> </div> -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <!-- Project-count-inner End -->\n  <!-- About Us Area End -->\n\n  <!-- Service Area Start -->\n  <div class=\"service-area bg-grey section-ptb\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <!-- section-title Start -->\n          <div class=\"section-title\">\n            <h4>SERVICES</h4>\n            <h3>What We <span>Provide</span></h3>\n          </div>\n          <!--// section-title End -->\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6\">\n          <!-- single-service Start -->\n          <div class=\"single-service text-center\">\n            <div class=\"service-icon\">\n              <span class=\"bi bi-screen\"></span>\n            </div>\n            <!--// service-icon -->\n\n            <div class=\"serviace-info\">\n              <h3>Social Marketing</h3>\n              <p> Using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>\n            </div>\n            <!--// serviace-info -->\n          </div>\n          <!-- single-service End -->\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <!-- single-service Start -->\n          <div class=\"single-service  text-center\">\n            <div class=\"service-icon\">\n              <span class=\"bi bi-responsive-device\"></span>\n            </div>\n            <!--// service-icon -->\n\n            <div class=\"serviace-info\">\n              <h3>Web & Mobile Apps</h3>\n              <p> Using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>\n            </div>\n            <!--// serviace-info -->\n          </div>\n          <!-- single-service End -->\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <!-- single-service Start -->\n          <div class=\"single-service  text-center\">\n            <div class=\"service-icon\">\n              <span class=\"bi bi-globe4\"></span>\n            </div>\n            <!--// service-icon -->\n\n            <div class=\"serviace-info\">\n              <h3>SEO Management</h3>\n              <p> Using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>\n            </div>\n            <!--// serviace-info -->\n          </div>\n          <!-- single-service End -->\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <!-- single-service Start -->\n          <div class=\"single-service text-center\">\n            <div class=\"service-icon\">\n              <span class=\"bi bi-bond\"></span>\n            </div>\n            <!--// service-icon -->\n\n            <div class=\"serviace-info\">\n              <h3>SEO Optimization</h3>\n              <p> Using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>\n            </div>\n            <!--// serviace-info -->\n          </div>\n          <!-- single-service End -->\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <!-- single-service Start -->\n          <div class=\"single-service text-center\">\n            <div class=\"service-icon\">\n              <span class=\"bi bi-tools\"></span>\n            </div>\n            <!--// service-icon -->\n\n            <div class=\"serviace-info\">\n              <h3>Security</h3>\n              <p> Using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>\n            </div>\n            <!--// serviace-info -->\n          </div>\n          <!-- single-service End -->\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <!-- single-service Start -->\n          <div class=\"single-service text-center\">\n            <div class=\"service-icon\">\n              <span class=\"bi bi-paper\"></span>\n            </div>\n            <!--// service-icon -->\n\n            <div class=\"serviace-info\">\n              <h3>Email Marketing</h3>\n              <p> Using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>\n            </div>\n            <!--// serviace-info -->\n          </div>\n          <!-- single-service End -->\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Service Area End -->\n  \n  <!-- Video Area Start -->\n  <div class=\"video-area video-bg section-ptb\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-6 col-md-8\">\n          <!-- Video-content-wrap Start -->\n          <div class=\"video-content-wrap\">\n            <h3>Create A <span class=\"color-two\">Wallet</span></h3>\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when\n              looking at its layout. The point of\n              using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>\n          </div>\n          <!--// Video-content-wrap End -->\n        </div>\n        <div class=\"col-lg-6 col-md-4\">\n          <!-- Video-icon-wrap Start -->\n          <div class=\"video-icon-wrap\">\n            <a class=\"popup-youtube\" href=\"https://www.youtube.com/embed/6OTG8E_mtcE?autoplay=0&modestbranding=1&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=mbYTP_video_1559795356533\"><img\n                src=\"./assets/images/icon/video-icon.png\" alt=\"\"></a>\n          </div>\n          <!--// Video-icon-wrap End -->\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Video Area End -->\n  <!-- Latest News Area End -->\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/alerts/_directives/alert.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/alerts/_directives/alert.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n    {{alert.message}}\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/message/message.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/message/message.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">{{ alert.message }}</ngb-alert>\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/swap/swap.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/swap/swap.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n    <app-header></app-header>\n    <!-- breadcrumb-area start -->\n    <!-- <div class=\"breadcrumb-area section-ptb\"></div> -->\n    <!-- breadcrumb-area end -->\n    <!-- <div class=\"blog-details-area bg-grey section-ptb-w\"> -->\n    <div class=\"blog-details-area bg-grey section-ptb-w\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 order-2 order-lg-1\">\n                    <!-- shop-sidebar-wrap start -->\n                    <app-left-menu></app-left-menu>\n                    <!-- shop-sidebar-wrap end -->\n                </div>\n                <div class=\"col-lg-9 order-1 order-lg-1\">\n                    <app-wallet-balance></app-wallet-balance>\n                    <mat-card>\n                        <mat-card-content>\n                            <mat-card-title>Swap</mat-card-title>\n                            <hr />\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <div class=\"form-group\">\n                                                <label for=\"exampleFormControlInput1\" class=\"h6\">From</label>\n                                                <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                          <option>ETH</option>\n                          <option>BTC</option>\n                        </select>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <div class=\"form-group\">\n                                                <!-- <label for=\"exampleFormControlInput1\" class=\"h6\">To Address</label> -->\n                                                <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"1\">\n                                                <small class=\"form-text text-danger\">You dont have a founds</small>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <div class=\"swap-label\">\n                                        <i class=\"material-icons\">swap_horiz</i>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-5\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <div class=\"form-group\">\n                                                <label for=\"exampleFormControlInput1\" class=\"h6\">To</label>\n                                                <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                          <option>ETH</option>\n                          <option>BTC</option>\n                        </select>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <div class=\"form-group\">\n                                                <!-- <label for=\"exampleFormControlInput1\" class=\"h6\">To Address</label> -->\n                                                <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"0.030729\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleFormControlInput1\" class=\"h6\">Enter Address</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Enter Address\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleFormControlInput1\" class=\"text-right h6\">Select Address</label>\n                                        <span class=\"float-right text-warning\"><i class=\"material-icons\" style=\"font-size:14px\">edit</i>\n                      Copy</span>\n                                        <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                      <option>--Select Address--</option>\n                      <option>Ejfhu746hf764747489junjskfhsduffjhfeujkfhu4rueyr7484</option>\n\n                    </select>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4\">\n                                            <p>\n                                                <input type=\"radio\" id=\"test2\" name=\"radio-group\">\n                                                <label for=\"test2\">Changelly</label>\n                                            </p>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <div class=\"w-data-value\">\n                                                1 ETH = 0.030802 BTC</div>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <h5 class=\"w-address\">0.122833810000000000 ETH (From Min.) 37.000000000000000000 ETH (Max.)</h5>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4\">\n                                            <p>\n                                                <input type=\"radio\" id=\"test1\" name=\"radio-group\" checked>\n                                                <label for=\"test1\">BIT</label>\n                                            </p>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <div class=\"w-data-value\">\n                                                1 ETH = 0.030644 BTC</div>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <h5 class=\"w-address\">0.326329 ETH (From Min.) 97.898447 ETH (Max.)</h5>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <hr />\n                            <div class=\"row mt-4\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"my-img text-center\">\n                                        <img src=\"../../assets/images/icon/simplex_g.png\" alt=\"\" class=\"img-fluid text-center\">\n                                    </div>\n                                    <p class=\"coin-txt\">Buy crypto with a credit card!</p>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"my-img text-center\">\n                                        <img src=\"../../assets/images/icon/kybernetwork_g.png\" alt=\"\" class=\"img-fluid text-center\">\n                                    </div>\n                                    <p class=\"coin-txt\">Swap ETH and ERC20 tokens!</p>\n                                </div>\n                            </div>\n                            <hr />\n                            <!-- <div class=\"row mt-4 pb-4\">\n                <div class=\"col-md-8 offset-md-2\">\n                  <div class=\"my-img text-center\">\n                  <img src=\"../../assets/images/icon/kybernetwork_g.png\" alt=\"\" class=\"img-fluid text-center\">\n                  </div>\n                  <p class=\"coin-txt\">Swap ETH and ERC20 tokens!</p>\n                </div>\n              </div> -->\n                            <!-- button -->\n                            <div class=\"row\">\n                                <div class=\"col-md-12 text-center p-4\">\n                                    <button class=\"btn btn-info mywall-mnem\">\n                    Send Transaction</button>\n                                </div>\n                            </div>\n                            <!-- / -->\n                        </mat-card-content>\n                    </mat-card>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wallet-dashboard/wallet-dashboard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wallet-dashboard/wallet-dashboard.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n    <app-header></app-header>\n    <!-- breadcrumb-area start -->\n    <!-- <div class=\"breadcrumb-area section-ptb\"></div> -->\n    <!-- breadcrumb-area end -->\n    <!-- <div class=\"blog-details-area bg-grey section-ptb-w section-ptb\" style=\"margin-top: 120px;\"> -->\n    <div class=\"blog-details-area bg-grey section-ptb-w\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 order-2 order-lg-1\">\n                    <!-- shop-sidebar-wrap start -->\n                    <app-left-menu></app-left-menu>\n                    <!-- shop-sidebar-wrap end -->\n                </div>\n                <div class=\"col-lg-9 order-1 order-lg-1\">\n                    <app-wallet-balance></app-wallet-balance>\n                    <mat-card>\n                        <mat-card-content>\n                            <mat-card-title>Send Transaction\n                                <!-- <button (click)=\"addField()\" class=\"add-user btn btn-success float-right\">Add\n                                    Address</button> -->\n                            </mat-card-title>\n                            <hr />\n                            <form id=\"transfer_form\" (ngSubmit)=\"f.form.valid && transferBTC(f)\" #f=\"ngForm\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"exampleFormControlInput1\" class=\"h6\">To Address</label>\n                                            <!-- <span class=\"float-right text-warning copy-text\" (click)=\"copyInputMessage(userinput)\"><i class=\"material-icons\"\n                                                    style=\"font-size:14px\">file_copy</i> Copy</span> -->\n                                            <input type=\"text\" class=\"form-control\" name=\"address[0]\" ngModel\n                                                #userinput=\"ngModel\" placeholder=\"To Address\">\n                                            <div *ngIf=\"f.submitted && userinput.invalid\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"userinput.errors.required\">Address is required</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <div class=\"form-group\">\n                                            <label for=\"exampleFormControlInput1\" class=\"h6\">Amount</label>\n                                            <a href=\"Javascript:void(0)\" *ngIf=\"wallet_details.balance > 0\"\n                                                class=\"float-right\" (click)=\"loadBal()\"><span\n                                                    class=\"text-warning\">Entire\n                                                    Balance</span></a>\n                                            <input type=\"number\" class=\"form-control\" name=\"amount[0]\"\n                                                [(ngModel)]=\"tot_bal\" placeholder=\"amount\" #amount=\"ngModel\">\n                                            <small class=\"form-text text-danger\" *ngIf=\"wallet_details.balance <= 0\">Not\n                                                enough BTC to send.</small>\n                                            <div *ngIf=\"f.submitted && amount.invalid\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"amount.errors.required\">Amount is required</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        <div class=\"btn_pls\">\n                                            <button class=\"btn circle\" type=\"button\" (click)=\"addField()\">\n                                                <i class=\"material-icons\">add_circle_outline</i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\" *ngFor=\"let add of addresses; let i = index\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"exampleFormControlInput1\" class=\"h6\">To Address</label>\n                                            <!-- <span class=\"float-right text-warning copy-text\" (click)=\"copyInputMessage(userinput)\"><i class=\"material-icons\"\n                                                    style=\"font-size:14px\">file_copy</i> Copy</span> -->\n                                            <input type=\"text\" #userinput class=\"form-control\" name=\"address[{{i+1}}]\"\n                                                ngModel placeholder=\"To Address\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <div class=\"form-group\">\n                                            <label for=\"exampleFormControlInput1\" class=\"h6\">Amount</label>\n                                            <!-- <a href=\"Javascript:void(0)\" *ngIf=\"load_bal\" class=\"float-right\"\n                                                (click)=\"loadBal()\"><span class=\"text-warning\">Entire\n                                                    Balance</span></a> -->\n                                            <input type=\"number\" class=\"form-control\" name=\"amount[{{i+1}}]\"\n                                                [ngModel]=\"tot_bal\" placeholder=\"amount\">\n                                            <small class=\"form-text text-danger\" *ngIf=\"wallet_details.balance <= 0\">Not\n                                                enough BTC to send.</small>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        <div class=\"btn_pls\">\n                                            <button class=\"btn circle\" type=\"button\" (click)=\"addField()\">\n                                                <i class=\"material-icons\">add_circle_outline</i>\n                                            </button>\n                                            <button class=\"btn circle\" type=\"button\" (click)=\"removeField(add)\">\n                                                <i class=\"material-icons\">delete_forever</i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <!-- <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"Fee\" class=\"h6\">Fee</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"fee\" id=\"fee\"\n                                                [ngModel]=\"fee_details['4']\" #fee>\n                                        </div>\n                                    </div> -->\n                                    <!-- <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"exampleFormControlInput1\" class=\"h6\">Fee Details</label>\n                                            <p *ngFor=\"let fee of fee_details | keyvalue:mySortingFunction\">\n                                               <input type=\"radio\" name=\"fee\" id=\"fee\" ngModel value=\"{{fee.value}}\"> --\n                                                <span class=\"\"> {{fee.value}} BTC with in {{fee.key}} Blocks</span>\n                                              <small class=\"form-text text-danger\"></small> -->\n                                    <!-- Blocks: <b>{{fee.key}}</b> and Fee: <strong>{{fee.value}}</strong> --\n                                            </p><br>\n                                        </div>\n                                       <ng5-slider [(value)]=\"value\" [(options)]=\"options\"></ng5-slider> --\n                                    </div> -->\n                                    <div class=\"col-md-12 pb-4\">\n                                        <!-- <label for=\"exampleFormControlInput1\" class=\"h6\">Transaction Fee</label>\n                                        <div class=\"sl_cnd\">\n                                            <input type=\"range\" min=\"0.0003\" max=\"0.005\" value=\"0.0008\" step=\"0.0001\"\n                                                name=\"fee\" [ngModel] #fee /><br />\n                                            <output data-output></output>\n                                        </div> -->\n                                        <div>\n                                            <span>Transaction Fee: </span><b class=\"gridSizeValue\">{{fee.value}}</b>\n                                        </div>\n                                        <mat-slider name=\"fee\" step=\"0.0001\" [(ngModel)]=\"txn_fee\" #fee min=\"0.0001\"\n                                            max=\"0.005\" (slideend)=\"onFeeChange(fee.value)\"></mat-slider>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <small class=\"min pull-left\">Min(0.0001)</small>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <small class=\"max pull-right\">Max(0.005)</small>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <!-- <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"exampleFormControlInput1\" class=\"text-right h6\">&nbsp;</label>\n                                            <span class=\"float-right text-warning\"><i class=\"material-icons\"\n                                                    style=\"font-size:14px\">edit</i> Copy</span>\n                                            <div class=\"form-control\">Cost 0.000861 ETH = $0.22</div>\n                                        </div>\n                                    </div> -->\n                                    <div class=\"col-md-12 pb-4\">\n                                        <h4><b>You can select your fee per transaction</b>.</h4>\n                                        <p>You can select your fee per transaction.The speed of confirmation of the\n                                            transaction in the Bitcoin network depends on amount of fee and current\n                                            network conditions. Transactions with low fee can never receive confirmation\n                                            on the network. The higher the fee the faster the transaction will be\n                                            confirmed.\n                                        </p>\n                                        <p>Minimum fee <b>0.0001</b>, Maximum fee <b>0.005</b>, Recommended fee per tx\n                                            <b>0.0003</b>.</p>\n                                    </div>\n                                    <div class=\"col-md-12 text-center\">\n                                        <button class=\"btn btn-info mywall-mnem\" type=\"submit\" [disabled]=\"!f.valid\">\n                                            Send Transaction</button>\n                                    </div>\n                                </div>\n                            </form>\n\n                        </mat-card-content>\n                    </mat-card>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/access-wallet/access-wallet.component.css":
/*!***********************************************************!*\
  !*** ./src/app/access-wallet/access-wallet.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wallet-data {\n    /* border-bottom: 1px solid #e0e0e0; */\n    color: #999;\n    font-size: 15px;\n    padding: 8px 0;\n}\n\n.pwd-txt {\n    font-size: 18px;\n    font-weight: 500;\n}\n\n.wall-header {\n    width: 100%;\n    background-color: #ffab00;\n    padding: 8px 4px;\n    color: #fff;\n    border-radius: 4px;\n}\n\n/* Custome Switch Box */\n\n.onoffswitch {\n    position: relative;\n    width: 90px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.onoffswitch-checkbox {\n    display: none;\n}\n\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #F5F5F5;\n    border-radius: 20px;\n}\n\n.onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 30px;\n    padding: 0;\n    line-height: 30px;\n    font-size: 14px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n\n.onoffswitch-inner:before {\n    content: \"12\";\n    padding-left: 10px;\n    background-color: #F0BA09;\n    color: #FFFFFF;\n}\n\n.onoffswitch-inner:after {\n    content: \"24\";\n    padding-right: 10px;\n    background-color: #09C3E8;\n    color: #FFFFFF;\n    text-align: right;\n}\n\n.onoffswitch-switch {\n    display: block;\n    width: 22px;\n    margin: 6px;\n    background: #FFFFFF;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 56px;\n    border: 2px solid #F5F5F5;\n    border-radius: 20px;\n    transition: all 0.3s ease-in 0s;\n}\n\n.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n}\n\n.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-switch {\n    right: 0px;\n}\n\n/* radio buttons custom design sky */\n\n/* The container */\n\n.cntr {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 18px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/* Hide the browser's default radio button */\n\n.cntr input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n/* Create a custom radio button */\n\n.checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    border-radius: 50%;\n}\n\n/* On mouse-over, add a grey background color */\n\n.container:hover input~.checkmark {\n    background-color: #ccc;\n}\n\n/* When the radio button is checked, add a blue background */\n\n.cntr input:checked~.checkmark {\n    background-color: #fbbf10;\n}\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n/* Show the indicator (dot/circle) when checked */\n\n.cntr input:checked~.checkmark:after {\n    display: block;\n}\n\n/* Style the indicator (dot/circle) */\n\n.cntr .checkmark:after {\n    top: 9px;\n    left: 9px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: white;\n}\n\n.btn-warning {\n    background-color: #fbbf10;\n    /* color: #fff; */\n}\n\n.mtest_fm {\n    display: inline-block;\n    color: rgb(0, 57, 69);\n    width: calc(100% - 40px);\n    border-width: 0px;\n    border-style: initial;\n    border-color: initial;\n    -o-border-image: initial;\n    border-image: initial;\n    float: left;\n    padding: 10px 2px;\n}\n\n.mlabel {\n    width: 24px;\n    padding: 15px 1px;\n    float: left;\n}\n\n.wall_cbtn {\n    font-size: 12px;\n    background-color: #F0BA09;\n    color: #fff;\n    font-weight: 500;\n    text-transform: uppercase;\n    padding: 2px 10px;\n    cursor: pointer;\n    border-radius: 50px;\n    width: 168px;\n    text-align: center;\n    letter-spacing: 1.5px;\n    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease 0s;\n    cursor: pointer;\n    outline: none;\n    border: none;\n}\n\n.wall_cbtn:hover {\n    background-color: rgb(255, 188, 43);\n    box-shadow: 0px 15px 20px rgba(250, 222, 63, 0.4);\n    color: #fff;\n    -webkit-transform: translateY(-4px);\n            transform: translateY(-4px);\n}\n\n/* model css */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzLXdhbGxldC9hY2Nlc3Mtd2FsbGV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBR0EsdUJBQXVCOztBQUV2QjtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtDQUFrQztBQUN0Qzs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFHQSxvQ0FBb0M7O0FBR3BDLGtCQUFrQjs7QUFFbEI7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBR0EsNENBQTRDOztBQUU1QztJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFHQSxpQ0FBaUM7O0FBRWpDO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUdBLCtDQUErQzs7QUFFL0M7SUFDSSxzQkFBc0I7QUFDMUI7O0FBR0EsNERBQTREOztBQUU1RDtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFHQSxvRUFBb0U7O0FBRXBFO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUdBLGlEQUFpRDs7QUFFakQ7SUFDSSxjQUFjO0FBQ2xCOztBQUdBLHFDQUFxQzs7QUFFckM7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsaURBQWlEO0lBQ2pELFdBQVc7SUFDWCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUdBLGNBQWMiLCJmaWxlIjoic3JjL2FwcC9hY2Nlc3Mtd2FsbGV0L2FjY2Vzcy13YWxsZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YWxsZXQtZGF0YSB7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7ICovXG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xufVxuXG4ucHdkLXR4dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi53YWxsLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWIwMDtcbiAgICBwYWRkaW5nOiA4cHggNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuXG4vKiBDdXN0b21lIFN3aXRjaCBCb3ggKi9cblxuLm9ub2Zmc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm9ub2Zmc3dpdGNoLWNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ub25vZmZzd2l0Y2gtbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGNUY1RjU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm9ub2Zmc3dpdGNoLWlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjAwJTtcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MgZWFzZS1pbiAwcztcbn1cblxuLm9ub2Zmc3dpdGNoLWlubmVyOmJlZm9yZSxcbi5vbm9mZnN3aXRjaC1pbm5lcjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBUcmVidWNoZXQsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5vbm9mZnN3aXRjaC1pbm5lcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiMTJcIjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwQkEwOTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLm9ub2Zmc3dpdGNoLWlubmVyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIjI0XCI7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDlDM0U4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ub25vZmZzd2l0Y2gtc3dpdGNoIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjJweDtcbiAgICBtYXJnaW46IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiA1NnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGNUY1RjU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xufVxuXG4ub25vZmZzd2l0Y2gtY2hlY2tib3g6Y2hlY2tlZCsub25vZmZzd2l0Y2gtbGFiZWwgLm9ub2Zmc3dpdGNoLWlubmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm9ub2Zmc3dpdGNoLWNoZWNrYm94OmNoZWNrZWQrLm9ub2Zmc3dpdGNoLWxhYmVsIC5vbm9mZnN3aXRjaC1zd2l0Y2gge1xuICAgIHJpZ2h0OiAwcHg7XG59XG5cblxuLyogcmFkaW8gYnV0dG9ucyBjdXN0b20gZGVzaWduIHNreSAqL1xuXG5cbi8qIFRoZSBjb250YWluZXIgKi9cblxuLmNudHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cblxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXG5cbi5jbnRyIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLyogQ3JlYXRlIGEgY3VzdG9tIHJhZGlvIGJ1dHRvbiAqL1xuXG4uY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuXG4uY29udGFpbmVyOmhvdmVyIGlucHV0fi5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cblxuLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuXG4uY250ciBpbnB1dDpjaGVja2Vkfi5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmJmMTA7XG59XG5cblxuLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG5cbi5jaGVja21hcms6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cblxuLmNudHIgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4vKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xuXG4uY250ciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICB0b3A6IDlweDtcbiAgICBsZWZ0OiA5cHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5idG4td2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmYxMDtcbiAgICAvKiBjb2xvcjogI2ZmZjsgKi9cbn1cblxuLm10ZXN0X2ZtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6IHJnYigwLCA1NywgNjkpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBib3JkZXItc3R5bGU6IGluaXRpYWw7XG4gICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xuICAgIC1vLWJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweCAycHg7XG59XG5cbi5tbGFiZWwge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ud2FsbF9jYnRuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwQkEwOTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLndhbGxfY2J0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg4LCA0Myk7XG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2JhKDI1MCwgMjIyLCA2MywgMC40KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG59XG5cblxuLyogbW9kZWwgY3NzICovIl19 */"

/***/ }),

/***/ "./src/app/access-wallet/access-wallet.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/access-wallet/access-wallet.component.ts ***!
  \**********************************************************/
/*! exports provided: AccessWalletComponent, AccessWalletModel, PrivateKeyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessWalletComponent", function() { return AccessWalletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessWalletModel", function() { return AccessWalletModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateKeyData", function() { return PrivateKeyData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");





let AccessWalletComponent = class AccessWalletComponent {
    constructor(apiServices, router, dialog) {
        this.apiServices = apiServices;
        this.router = router;
        this.dialog = dialog;
        this.wallet_type = 'btc';
        this.wallet_network = 'mainnet';
    }
    ngOnInit() {
        sessionStorage.setItem('network', this.wallet_network);
        /* if (this.apiServices.checkAuth()) {
          this.router.navigate(['/dashboard']);
        } else {
          this.openNetworkData();
        } */
    }
    accessWalletData() {
        const dialogRef = this.dialog.open(AccessWalletModel, {
            width: '720px',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    // private wallet key pop-up model
    privateKeyData() {
        const dialogRef = this.dialog.open(PrivateKeyData, {
            width: '750px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
AccessWalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: __webpack_require__(/*! raw-loader!./access-wallet.component.html */ "./node_modules/raw-loader/index.js!./src/app/access-wallet/access-wallet.component.html"),
        styles: [__webpack_require__(/*! ./access-wallet.component.css */ "./src/app/access-wallet/access-wallet.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiServices"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], AccessWalletComponent);

/* @Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'choose-network.html',
  styleUrls: ['./access-wallet.component.css']
})
export class ChooseNetwork {

  mnemonic: Array<string>;
  selection: any;
  disableTextbox = true;
  constructor(public apiServices: ApiServices,
    public dialogRef: MatDialogRef<ChooseNetwork>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveNetType(form: NgForm) {
    this.onNoClick();
    var network = form.value.network;
    sessionStorage.setItem('network', network);
  }
} */
let AccessWalletModel = class AccessWalletModel {
    constructor(dialogRef, data, apiServices) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiServices = apiServices;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    arrayTwelve(n) {
        return [...Array(n).keys()];
    }
    submitMnemonic(form) {
        this.onNoClick();
        this.apiServices.importWithMnemonic(form);
    }
    scrollTop() {
        setTimeout(() => {
            this.alrtDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alrtDiv', { read: true, static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AccessWalletModel.prototype, "alrtDiv", void 0);
AccessWalletModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: __webpack_require__(/*! raw-loader!./access-wallet-model.html */ "./node_modules/raw-loader/index.js!./src/app/access-wallet/access-wallet-model.html"),
        styles: [__webpack_require__(/*! ./access-wallet.component.css */ "./src/app/access-wallet/access-wallet.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiServices"]])
], AccessWalletModel);

// Private key data
let PrivateKeyData = class PrivateKeyData {
    constructor(dialogRef, data, apiServices) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiServices = apiServices;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submitWif(form) {
        this.onNoClick();
        this.apiServices.importWithWif(form);
    }
    scrollTop() {
        setTimeout(() => {
            this.alrtDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alrtDiv', { read: true, static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], PrivateKeyData.prototype, "alrtDiv", void 0);
PrivateKeyData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: __webpack_require__(/*! raw-loader!./private-key-model.html */ "./node_modules/raw-loader/index.js!./src/app/access-wallet/private-key-model.html"),
        styles: [__webpack_require__(/*! ./access-wallet.component.css */ "./src/app/access-wallet/access-wallet.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiServices"]])
], PrivateKeyData);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main-layout/main-layout.component */ "./src/app/main/main-layout/main-layout.component.ts");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var _wallet_dashboard_wallet_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-dashboard/wallet-dashboard.component */ "./src/app/wallet-dashboard/wallet-dashboard.component.ts");
/* harmony import */ var _access_wallet_access_wallet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./access-wallet/access-wallet.component */ "./src/app/access-wallet/access-wallet.component.ts");
/* harmony import */ var _swap_swap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./swap/swap.component */ "./src/app/swap/swap.component.ts");








const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"] },
    { path: 'create-wallet', component: _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_4__["CreateWalletComponent"] },
    { path: 'access-wallet', component: _access_wallet_access_wallet_component__WEBPACK_IMPORTED_MODULE_6__["AccessWalletComponent"] },
    { path: 'dashboard', component: _wallet_dashboard_wallet_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["WalletDashboardComponent"] },
    { path: 'swap', component: _swap_swap_component__WEBPACK_IMPORTED_MODULE_7__["SwapComponent"] },
    { path: '**', component: _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MyPrivateWallet';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./includes/header/header.component */ "./src/app/includes/header/header.component.ts");
/* harmony import */ var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./includes/footer/footer.component */ "./src/app/includes/footer/footer.component.ts");
/* harmony import */ var _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main-layout/main-layout.component */ "./src/app/main/main-layout/main-layout.component.ts");
/* harmony import */ var _includes_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./includes/slider/slider.component */ "./src/app/includes/slider/slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _wallet_dashboard_wallet_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./wallet-dashboard/wallet-dashboard.component */ "./src/app/wallet-dashboard/wallet-dashboard.component.ts");
/* harmony import */ var _access_wallet_access_wallet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./access-wallet/access-wallet.component */ "./src/app/access-wallet/access-wallet.component.ts");
/* harmony import */ var _swap_swap_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./swap/swap.component */ "./src/app/swap/swap.component.ts");
/* harmony import */ var _includes_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./includes/left-menu/left-menu.component */ "./src/app/includes/left-menu/left-menu.component.ts");
/* harmony import */ var _includes_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./includes/wallet-balance/wallet-balance.component */ "./src/app/includes/wallet-balance/wallet-balance.component.ts");
/* harmony import */ var _shared_message_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/message/message.component */ "./src/app/shared/message/message.component.ts");
/* harmony import */ var _shared_alerts_directives_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/alerts/_directives/index */ "./src/app/shared/alerts/_directives/index.ts");
/* harmony import */ var _shared_alerts_services_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/alerts/_services/index */ "./src/app/shared/alerts/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





























const routes = [];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _includes_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__["MainLayoutComponent"],
            _includes_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"],
            _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_15__["CreateWalletComponent"],
            _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_15__["DialogForWalletData"],
            _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_15__["DialogOverviewNetworkDialog"],
            _wallet_dashboard_wallet_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["WalletDashboardComponent"],
            _access_wallet_access_wallet_component__WEBPACK_IMPORTED_MODULE_20__["AccessWalletComponent"],
            _swap_swap_component__WEBPACK_IMPORTED_MODULE_21__["SwapComponent"],
            _includes_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_22__["LeftMenuComponent"],
            _includes_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["WalletBalanceComponent"],
            _includes_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["DialogForWalletBal"],
            _includes_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["CheckBalance"],
            _includes_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["Changenetwork"],
            _access_wallet_access_wallet_component__WEBPACK_IMPORTED_MODULE_20__["AccessWalletModel"],
            _access_wallet_access_wallet_component__WEBPACK_IMPORTED_MODULE_20__["PrivateKeyData"],
            _shared_message_message_component__WEBPACK_IMPORTED_MODULE_24__["MessageComponent"],
            _shared_alerts_directives_index__WEBPACK_IMPORTED_MODULE_25__["AlertComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_17__["MyMaterialModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["MDBBootstrapModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            // Ng5SliderModule
            _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterModule"].forRoot(routes, { useHash: true })
        ],
        entryComponents: [
            _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_15__["CreateWalletComponent"],
            _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_15__["DialogForWalletData"],
            _includes_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["DialogForWalletBal"],
            _includes_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["CheckBalance"],
            _includes_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["Changenetwork"],
            _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_15__["DialogOverviewNetworkDialog"],
            _access_wallet_access_wallet_component__WEBPACK_IMPORTED_MODULE_20__["AccessWalletModel"],
            _access_wallet_access_wallet_component__WEBPACK_IMPORTED_MODULE_20__["PrivateKeyData"],
        ],
        providers: [
            _services_api_service__WEBPACK_IMPORTED_MODULE_18__["ApiServices"],
            _shared_alerts_services_index__WEBPACK_IMPORTED_MODULE_26__["AlertService"],
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["PathLocationStrategy"]
            },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["HashLocationStrategy"]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
    })
], AppModule);

// platformBrowserDynamic().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
class AppConstants {
    static get serverURL() { return 'http://159.65.157.241:3000/'; }
    ;
    static get localURL() { return 'http://8e9dfa21.ngrok.io/'; }
    ;
}


/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.css":
/*!***********************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wallet-data {\n    /* border-bottom: 1px solid #e0e0e0; */\n    color: #999;\n    font-size: 15px;\n    padding: 8px 0;\n}\n\n.pwd-txt {\n    font-size: 18px;\n    font-weight: 500;\n}\n\n.wall-header {\n    width: 100%;\n    background-color: #ffab00;\n    padding: 8px 4px;\n    color: #fff;\n    border-radius: 4px;\n}\n\n/* Custome Switch Box */\n\n.onoffswitch {\n    position: relative;\n    width: 90px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.onoffswitch-checkbox {\n    display: none;\n}\n\n.onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border: 2px solid #F5F5F5;\n    border-radius: 20px;\n}\n\n.onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 30px;\n    padding: 0;\n    line-height: 30px;\n    font-size: 14px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n\n.onoffswitch-inner:before {\n    content: \"12\";\n    padding-left: 10px;\n    background-color: #F0BA09;\n    color: #FFFFFF;\n}\n\n.onoffswitch-inner:after {\n    content: \"24\";\n    padding-right: 10px;\n    background-color: #09C3E8;\n    color: #FFFFFF;\n    text-align: right;\n}\n\n.onoffswitch-switch {\n    display: block;\n    width: 22px;\n    margin: 6px;\n    background: #FFFFFF;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 56px;\n    border: 2px solid #F5F5F5;\n    border-radius: 20px;\n    transition: all 0.3s ease-in 0s;\n}\n\n.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n}\n\n.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-switch {\n    right: 0px;\n}\n\n/* radio buttons custom design sky */\n\n/* The container */\n\n.cntr {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 18px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/* Hide the browser's default radio button */\n\n.cntr input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n/* Create a custom radio button */\n\n.checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    border-radius: 50%;\n}\n\n/* On mouse-over, add a grey background color */\n\n.container:hover input~.checkmark {\n    background-color: #ccc;\n}\n\n/* When the radio button is checked, add a blue background */\n\n.cntr input:checked~.checkmark {\n    background-color: #fbbf10;\n}\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n/* Show the indicator (dot/circle) when checked */\n\n.cntr input:checked~.checkmark:after {\n    display: block;\n}\n\n/* Style the indicator (dot/circle) */\n\n.cntr .checkmark:after {\n    top: 9px;\n    left: 9px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: white;\n}\n\n.btn-warning {\n    background-color: #fbbf10;\n    /* color: #fff; */\n}\n\n.mtest_fm {\n    display: inline-block;\n    color: rgb(0, 57, 69);\n    width: calc(100% - 40px);\n    border-width: 0px;\n    border-style: initial;\n    border-color: initial;\n    -o-border-image: initial;\n    border-image: initial;\n    float: left;\n    padding: 10px 2px;\n}\n\n.mlabel {\n    width: 24px;\n    padding: 15px 1px;\n    float: left;\n}\n\n.wall_cbtn {\n    font-size: 12px;\n    background-color: #F0BA09;\n    color: #fff;\n    font-weight: 500;\n    text-transform: uppercase;\n    padding: 2px 10px;\n    margin: 10px 2px;\n    cursor: pointer;\n    border-radius: 50px;\n    width: 168px;\n    text-align: center;\n    letter-spacing: 1.5px;\n    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease 0s;\n    cursor: pointer;\n    outline: none;\n    border: none;\n}\n\n.wall_cbtn:hover {\n    background-color: rgb(255, 188, 43);\n    box-shadow: 0px 15px 20px rgba(250, 222, 63, 0.4);\n    color: #fff;\n    -webkit-transform: translateY(-4px);\n            transform: translateY(-4px);\n}\n\n.wall_cancel {\n  font-size: 12px;\n  background-color: rgb(207, 207, 207);\n  color: rgb(48, 47, 47);\n  font-weight: 500;\n  text-transform: uppercase;\n  padding: 2px 10px;\n  cursor: pointer;\n  border-radius: 50px;\n  width: 168px;\n  margin: 10px 2px;\n  text-align: center;\n  letter-spacing: 1.5px;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\n.wall_cancel:hover {\n  background-color: rgb(180, 180, 180);\n  box-shadow: 0px 15px 20px rgba(250, 222, 63, 0.4);\n  color: #fff;\n  -webkit-transform: translateY(-4px);\n          transform: translateY(-4px);\n}\n\n.cm_img img{\n  text-align: center !important;\n  position: relative;\n  width: 120px;\n  padding: 20px;\n}\n\n.cm_img{\n  text-align: center !important;\n  position: relative;\n  padding: 20px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXdhbGxldC9jcmVhdGUtd2FsbGV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBR0EsdUJBQXVCOztBQUV2QjtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtDQUFrQztBQUN0Qzs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFHQSxvQ0FBb0M7O0FBR3BDLGtCQUFrQjs7QUFFbEI7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBR0EsNENBQTRDOztBQUU1QztJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFHQSxpQ0FBaUM7O0FBRWpDO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUdBLCtDQUErQzs7QUFFL0M7SUFDSSxzQkFBc0I7QUFDMUI7O0FBR0EsNERBQTREOztBQUU1RDtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFHQSxvRUFBb0U7O0FBRXBFO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUdBLGlEQUFpRDs7QUFFakQ7SUFDSSxjQUFjO0FBQ2xCOztBQUdBLHFDQUFxQzs7QUFFckM7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGlEQUFpRDtJQUNqRCxXQUFXO0lBQ1gsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDJDQUEyQztFQUMzQyw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaURBQWlEO0VBQ2pELFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTs7QUFFWiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS13YWxsZXQvY3JlYXRlLXdhbGxldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhbGxldC1kYXRhIHtcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDsgKi9cbiAgICBjb2xvcjogIzk5OTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG59XG5cbi5wd2QtdHh0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLndhbGwtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjAwO1xuICAgIHBhZGRpbmc6IDhweCA0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5cbi8qIEN1c3RvbWUgU3dpdGNoIEJveCAqL1xuXG4ub25vZmZzd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTBweDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ub25vZmZzd2l0Y2gtY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vbm9mZnN3aXRjaC1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0Y1RjVGNTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ub25vZmZzd2l0Y2gtaW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4zcyBlYXNlLWluIDBzO1xufVxuXG4ub25vZmZzd2l0Y2gtaW5uZXI6YmVmb3JlLFxuLm9ub2Zmc3dpdGNoLWlubmVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFRyZWJ1Y2hldCwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm9ub2Zmc3dpdGNoLWlubmVyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIxMlwiO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBCQTA5O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ub25vZmZzd2l0Y2gtaW5uZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiMjRcIjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOUMzRTg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5vbm9mZnN3aXRjaC1zd2l0Y2gge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIG1hcmdpbjogNnB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDU2cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0Y1RjVGNTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7XG59XG5cbi5vbm9mZnN3aXRjaC1jaGVja2JveDpjaGVja2VkKy5vbm9mZnN3aXRjaC1sYWJlbCAub25vZmZzd2l0Y2gtaW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ub25vZmZzd2l0Y2gtY2hlY2tib3g6Y2hlY2tlZCsub25vZmZzd2l0Y2gtbGFiZWwgLm9ub2Zmc3dpdGNoLXN3aXRjaCB7XG4gICAgcmlnaHQ6IDBweDtcbn1cblxuXG4vKiByYWRpbyBidXR0b25zIGN1c3RvbSBkZXNpZ24gc2t5ICovXG5cblxuLyogVGhlIGNvbnRhaW5lciAqL1xuXG4uY250ciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCByYWRpbyBidXR0b24gKi9cblxuLmNudHIgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG5cbi5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG5cbi5jb250YWluZXI6aG92ZXIgaW5wdXR+LmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuXG4vKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG5cbi5jbnRyIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmYxMDtcbn1cblxuXG4vKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cblxuLmNoZWNrbWFyazphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xuXG4uY250ciBpbnB1dDpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8qIFN0eWxlIHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpICovXG5cbi5jbnRyIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIHRvcDogOXB4O1xuICAgIGxlZnQ6IDlweDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmJ0bi13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiZjEwO1xuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xufVxuXG4ubXRlc3RfZm0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogcmdiKDAsIDU3LCA2OSk7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIGJvcmRlci1zdHlsZTogaW5pdGlhbDtcbiAgICBib3JkZXItY29sb3I6IGluaXRpYWw7XG4gICAgLW8tYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4IDJweDtcbn1cblxuLm1sYWJlbCB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgcGFkZGluZzogMTVweCAxcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi53YWxsX2NidG4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBCQTA5O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICBtYXJnaW46IDEwcHggMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHdpZHRoOiAxNjhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi53YWxsX2NidG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4OCwgNDMpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSgyNTAsIDIyMiwgNjMsIDAuNCk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xufVxuLndhbGxfY2FuY2VsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMDcsIDIwNyk7XG4gIGNvbG9yOiByZ2IoNDgsIDQ3LCA0Nyk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAxNjhweDtcbiAgbWFyZ2luOiAxMHB4IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ud2FsbF9jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSgyNTAsIDIyMiwgNjMsIDAuNCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG59XG4uY21faW1nIGltZ3tcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNtX2ltZ3tcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.ts ***!
  \**********************************************************/
/*! exports provided: browserRefresh, CreateWalletComponent, DialogForWalletData, DialogOverviewNetworkDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserRefresh", function() { return browserRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWalletComponent", function() { return CreateWalletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogForWalletData", function() { return DialogForWalletData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewNetworkDialog", function() { return DialogOverviewNetworkDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let browserRefresh = false;
let CreateWalletComponent = class CreateWalletComponent {
    constructor(dialog, apiServices, router) {
        this.dialog = dialog;
        this.apiServices = apiServices;
        this.router = router;
        this.display = 'none';
        this.create_wallet = true;
        this.wallet_type = 'btc';
        this.wallet_network = 'mainnet';
        this.disableTextbox = true;
        this.animal = "Sai";
        this.name = "Bharath";
        this.url1 = '../../assets/images/success_arrow.svg';
    }
    ngOnInit() {
        /* if (this.apiServices.checkAuth()) {
          this.router.navigate(['/dashboard']);
        } else { */
        sessionStorage.setItem('network', this.wallet_network);
        this.apiServices.createWallet().then(data => {
            this.mnemonic = this.apiServices.mnemonic;
            this.display_mnemonic = this.apiServices.display_mnemonic;
        });
        /* } */
    }
    /* openNetworkData(): void {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '500px',
        data: { name: this.name, animal: this.animal }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
  
        this.animal = result;
      });
    } */
    openWalletData() {
        const dialogRef = this.dialog.open(DialogForWalletData, {
            width: '750px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    openDilog() {
        const dialogRef = this.dialog.open(DialogOverviewNetworkDialog, {
            width: '550px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
CreateWalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: __webpack_require__(/*! raw-loader!./create-wallet.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-wallet/create-wallet.component.html"),
        styles: [__webpack_require__(/*! ./create-wallet.component.css */ "./src/app/create-wallet/create-wallet.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], CreateWalletComponent);

/* @Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'create-wallet-dialog.html',
  styleUrls: ['./create-wallet.component.css']
})
export class DialogOverviewExampleDialog {

  mnemonic: Array<string>;
  display_mnemonic: Array<string>;
  selection: any;
  disableTextbox = true;


  constructor(public apiServices: ApiServices,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router) { }


  ngOnInit() {

  }


  onNoClick(): void {
    sessionStorage.clear();
    this.dialogRef.close();
  }

  saveNetType(form: NgForm) {
    this.onNoClick();
    var network = form.value.network;
    sessionStorage.setItem('network', network);
    this.apiServices.createWallet().then(data => {
      this.mnemonic = this.apiServices.mnemonic;
      this.display_mnemonic = this.apiServices.display_mnemonic;
    });
  }
} */
// Wallet Data
let DialogForWalletData = class DialogForWalletData {
    constructor(apiServices, dialogRef, data, router) {
        this.apiServices = apiServices;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
    }
    ngOnInit() {
        this.apiServices.displayMnemonic();
        this.display_mnemonic_local = this.apiServices.display_mnemonic;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    verifyMnemonic(form) {
        this.onNoClick();
        let verify_key = "";
        Object.keys(form.value).forEach(function (key) {
            if (form.value[key] != undefined && form.value[key] != null) {
                verify_key += form.value[key] + " ";
            }
        });
        verify_key = verify_key.trim();
        let ori_key = JSON.parse(sessionStorage.getItem('wallet'))['mnemonic'];
        if (verify_key == ori_key) {
            this.apiServices.clearAlerts();
            this.apiServices.success("Verification Successful, Please access your wallet");
            this.scrollTop();
            // this.router.navigate(['/access-wallet']);
        }
        else {
            this.apiServices.clearAlerts();
            this.apiServices.error("Verification Failed");
        }
    }
    scrollTop() {
        setTimeout(() => {
            this.alrtDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alrtDiv', { read: true, static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DialogForWalletData.prototype, "alrtDiv", void 0);
DialogForWalletData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: __webpack_require__(/*! raw-loader!./wallet-data-popup.html */ "./node_modules/raw-loader/index.js!./src/app/create-wallet/wallet-data-popup.html"),
        styles: [__webpack_require__(/*! ./create-wallet.component.css */ "./src/app/create-wallet/create-wallet.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], DialogForWalletData);

// Network Type Modal
let DialogOverviewNetworkDialog = class DialogOverviewNetworkDialog {
    constructor(dialogRef, data, router, apiServices) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.apiServices = apiServices;
        this.address = '';
    }
    getAddress() {
        let add = JSON.parse(sessionStorage.getItem('wallet'));
        if (add['address']) {
            this.address = add['address'];
        }
    }
    ngOnInit() {
        this.getAddress();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    accessWallet() {
        this.onNoClick();
        this.apiServices.importWifSession();
        // this.router.navigate(['/access-wallet']);
    }
};
DialogOverviewNetworkDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: __webpack_require__(/*! raw-loader!./key-pair-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/create-wallet/key-pair-dialog.html"),
        styles: [__webpack_require__(/*! ./create-wallet.component.css */ "./src/app/create-wallet/create-wallet.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"]])
], DialogOverviewNetworkDialog);



/***/ }),

/***/ "./src/app/includes/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/includes/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/includes/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/includes/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/includes/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/includes/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/includes/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/includes/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-area {\n    background-color: #fff;\n}\n\n.navbar {\n    z-index: 1 !important;\n}\n\n.navbar-nav li{\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jbHVkZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvaW5jbHVkZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1hcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyIHtcbiAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLW5hdiBsaXtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/includes/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/includes/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(apiServices) {
        this.apiServices = apiServices;
        this.is_auth = false;
    }
    ngOnInit() {
        this.is_auth = this.apiServices.checkAuth();
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/includes/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/includes/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiServices"]])
], HeaderComponent);

// @Component({
//   selector: 'app-header-inner',
//   templateUrl: 'header-inner.html',
//   styleUrls: ['./header-inner.component.css']
// })
// export class HeaderInner {
//   constructor(public apiServices: ApiServices) { }
// }


/***/ }),

/***/ "./src/app/includes/left-menu/left-menu.component.css":
/*!************************************************************!*\
  !*** ./src/app/includes/left-menu/left-menu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGVzL2xlZnQtbWVudS9sZWZ0LW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/includes/left-menu/left-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/includes/left-menu/left-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: LeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuComponent", function() { return LeftMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LeftMenuComponent = class LeftMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
LeftMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-left-menu',
        template: __webpack_require__(/*! raw-loader!./left-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/includes/left-menu/left-menu.component.html"),
        styles: [__webpack_require__(/*! ./left-menu.component.css */ "./src/app/includes/left-menu/left-menu.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LeftMenuComponent);



/***/ }),

/***/ "./src/app/includes/slider/slider.component.css":
/*!******************************************************!*\
  !*** ./src/app/includes/slider/slider.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGVzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/includes/slider/slider.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/includes/slider/slider.component.ts ***!
  \*****************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
};
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/includes/slider/slider.component.html"),
        styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/includes/slider/slider.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SliderComponent);



/***/ }),

/***/ "./src/app/includes/wallet-balance/wallet-balance.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/includes/wallet-balance/wallet-balance.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coin_bg {\n    background-color: #f4f4f4;\n    padding: 6px 6px 0px 6px;\n    width: 100%;\n    margin: 4px 14px;\n}\n\n.coin_bg2 {\n    background-color: #f4f4f4;\n    padding: 5px 0px 0px 0px;\n    width: 100%;\n    margin: 0px;\n}\n\n.wal-btn {\n    width: 110px;\n    padding: 5px 8px;\n    border: 1px solid #f5f5f5;\n    color: #fff;\n    border-radius: 4px;\n}\n\n.wal-btn:hover {\n    background-color: #f4f4f4;\n    color: #212121;\n    border: 1px solid #f5f5f5;\n    border-radius: 4px;\n}\n\n.coin_bg_n {\n    width: 100%;\n    background-color: transparent;\n    border-bottom: 1px solid #f3f3f3;\n}\n\n.web-txt {\n    background-color: #f8b704;\n    color: #fff;\n    padding: 0px 8px;\n    border-radius: 8px;\n    text-align: center;\n    margin: 0px;\n}\n\n.wal-btn_address {\n    font-size: 10px;\n    width: 110px;\n    background-color: transparent;\n    /* padding: 2px 2px; */\n    border: 1px solid #f5f5f5;\n    color: #fff;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-top: -29px;\n    margin: 0px;\n    padding: 2px;\n}\n\n.wal-btn_address:hover {\n    background-color: #f4f4f4;\n    color: #212121;\n    border: 1px solid #f5f5f5;\n    border-radius: 4px;\n}\n\n.single-latest-blog .latest-blog-cont {\n    padding: 10px 10px !important;\n}\n\n.w-label {\n    font-size: 16px;\n    color: #fff;\n    font-weight: 500;\n}\n\n#sub3 {\n    position: absolute;\n    background-color: #ffffff;\n    width: 100%;\n    color: black;\n    /* border: #e8e8e8 2px dashed; */\n    display: none;\n    z-index: 9;\n    word-break: break-all;\n    padding: 6px 8px;\n    font-size: 12px;\n    margin: 3px 2px;\n}\n\n.wal-btn_address2 {\n    font-size: 10px;\n    width: 110px;\n    background-color: #f5f5f5;\n    /* padding: 2px 2px; */\n    border: 1px solid #f5f5f5;\n    color: rgb(37, 37, 37);\n    border-radius: 4px;\n    cursor: pointer;\n    margin-top: -29px;\n    margin: 0px;\n    padding: 0px 4px;\n}\n\n.wal-btn_address2:hover {\n    background-color: #e4e4e4;\n    color: #383838;\n    border: 1px solid #e7e7e7;\n    border-radius: 4px;\n}\n\n.btn4 {\n    background: #dcdcdc;\n    color: #ffffff;\n    border-radius: 16px;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 600;\n    font-size: 14px;\n    transition: 0.3s;\n    position: relative;\n    color: #121212;\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    order: 1px solid transparent;\n    padding: .375rem .75rem;\n    line-height: 1.5;\n    border: none;\n}\n\n.btn4:hover {\n    background: #222222;\n    color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jbHVkZXMvd2FsbGV0LWJhbGFuY2Uvd2FsbGV0LWJhbGFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUVmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaW5jbHVkZXMvd2FsbGV0LWJhbGFuY2Uvd2FsbGV0LWJhbGFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2luX2JnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIHBhZGRpbmc6IDZweCA2cHggMHB4IDZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDRweCAxNHB4O1xufVxuXG4uY29pbl9iZzIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ud2FsLWJ0biB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi53YWwtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIGNvbG9yOiAjMjEyMTIxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY29pbl9iZ19uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcbn1cblxuLndlYi10eHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGI3MDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ud2FsLWJ0bl9hZGRyZXNzIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIHBhZGRpbmc6IDJweCAycHg7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi10b3A6IC0yOXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbn1cblxuLndhbC1idG5fYWRkcmVzczpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICBjb2xvcjogIzIxMjEyMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVmNWY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNpbmdsZS1sYXRlc3QtYmxvZyAubGF0ZXN0LWJsb2ctY29udCB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi53LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI3N1YjMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAvKiBib3JkZXI6ICNlOGU4ZTggMnB4IGRhc2hlZDsgKi9cbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHotaW5kZXg6IDk7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIHBhZGRpbmc6IDZweCA4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogM3B4IDJweDtcbn1cblxuLndhbC1idG5fYWRkcmVzczIge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAvKiBwYWRkaW5nOiAycHggMnB4OyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XG4gICAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi10b3A6IC0yOXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweCA0cHg7XG59XG5cbi53YWwtYnRuX2FkZHJlc3MyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICAgIGNvbG9yOiAjMzgzODM4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnRuNCB7XG4gICAgYmFja2dyb3VuZDogI2RjZGNkYztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogIzEyMTIxMjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5idG40OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/includes/wallet-balance/wallet-balance.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/includes/wallet-balance/wallet-balance.component.ts ***!
  \*********************************************************************/
/*! exports provided: WalletBalanceComponent, DialogForWalletBal, CheckBalance, Changenetwork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletBalanceComponent", function() { return WalletBalanceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogForWalletBal", function() { return DialogForWalletBal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBalance", function() { return CheckBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Changenetwork", function() { return Changenetwork; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




let WalletBalanceComponent = class WalletBalanceComponent {
    constructor(dialog, apiServices) {
        this.dialog = dialog;
        this.apiServices = apiServices;
        this.wallet_bal = 0;
        this.ref_bal = false;
    }
    openWalletData() {
        const dialogRef = this.dialog.open(DialogForWalletBal, {
            width: '750px',
            data: { details: this.wallet_details }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    // Check Balance
    checkBalance() {
        const dialogRef = this.dialog.open(CheckBalance, {
            width: '750px',
            data: { details: this.wallet_details }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    // Change Network
    changeNetwork() {
        const dialogRef = this.dialog.open(Changenetwork, {
            width: '750px',
            data: { details: this.wallet_details }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    ngOnInit() {
        this.getWalletDetails();
    }
    getWalletDetails() {
        this.wallet_details = this.apiServices.getSessionStorage('login_data');
    }
    refreshBalance() {
        this.apiServices.getBalance().subscribe(res => {
            if (res['status']) {
                this.ref_bal = true;
                this.wallet_bal = res['data']['balance'];
                this.apiServices.clearAlerts();
                // this.apiServices.success("Balance updated");
            }
            else {
                // set error message
                this.apiServices.clearAlerts();
                // this.apiServices.error("Balance not updated, Try after sometime");
            }
        });
    }
    ToggleButton() {
        this.showSelected = !this.showSelected;
    }
    printAddr(divName) {
        const secret_key = document.getElementById(divName);
        const address = document.getElementById('wallet_addr');
        const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        WindowPrt.document.write("Address:  " + address.innerHTML + "<br>");
        WindowPrt.document.write("Secret Key:  " + secret_key.innerHTML);
        WindowPrt.document.close();
        WindowPrt.focus();
        WindowPrt.print();
        WindowPrt.close();
    }
};
WalletBalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet-balance',
        template: __webpack_require__(/*! raw-loader!./wallet-balance.component.html */ "./node_modules/raw-loader/index.js!./src/app/includes/wallet-balance/wallet-balance.component.html"),
        styles: [__webpack_require__(/*! ./wallet-balance.component.css */ "./src/app/includes/wallet-balance/wallet-balance.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"]])
], WalletBalanceComponent);

// Wallet Data
let DialogForWalletBal = class DialogForWalletBal {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DialogForWalletBal.prototype, "details", void 0);
DialogForWalletBal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // selector: 'dialog-overview-wallet-data',
        template: __webpack_require__(/*! raw-loader!./wallet-balance-popup.html */ "./node_modules/raw-loader/index.js!./src/app/includes/wallet-balance/wallet-balance-popup.html"),
        styles: [__webpack_require__(/*! ./wallet-balance.component.css */ "./src/app/includes/wallet-balance/wallet-balance.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogForWalletBal);

// Check Balance
let CheckBalance = class CheckBalance {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
CheckBalance = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // selector: 'dialog-overview-wallet-data',
        template: __webpack_require__(/*! raw-loader!./check-wallet-balance.html */ "./node_modules/raw-loader/index.js!./src/app/includes/wallet-balance/check-wallet-balance.html"),
        styles: [__webpack_require__(/*! ./wallet-balance.component.css */ "./src/app/includes/wallet-balance/wallet-balance.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], CheckBalance);

// Change Network
let Changenetwork = class Changenetwork {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
Changenetwork = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // selector: 'dialog-overview-wallet-data',
        template: __webpack_require__(/*! raw-loader!./change-network-popup.html */ "./node_modules/raw-loader/index.js!./src/app/includes/wallet-balance/change-network-popup.html"),
        styles: [__webpack_require__(/*! ./wallet-balance.component.css */ "./src/app/includes/wallet-balance/wallet-balance.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], Changenetwork);



/***/ }),

/***/ "./src/app/main/main-layout/main-layout.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/main-layout/main-layout.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/main-layout/main-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/main-layout/main-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MainLayoutComponent = class MainLayoutComponent {
    constructor(apiServices, router) {
        this.apiServices = apiServices;
        this.router = router;
    }
    ngOnInit() {
        if (this.apiServices.checkAuth()) {
            this.router.navigate(['/dashboard']);
        }
    }
};
MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-layout',
        template: __webpack_require__(/*! raw-loader!./main-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main-layout/main-layout.component.html"),
        styles: [__webpack_require__(/*! ./main-layout.component.css */ "./src/app/main/main-layout/main-layout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiServices"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], MainLayoutComponent);



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MyMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMaterialModule", function() { return MyMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MyMaterialModule = class MyMaterialModule {
};
MyMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], MyMaterialModule);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServices", function() { return ApiServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_alerts_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/alerts/_services */ "./src/app/shared/alerts/_services/index.ts");







let ApiServices = class ApiServices {
    constructor(http, router, alertService) {
        this.http = http;
        this.router = router;
        this.alertService = alertService;
        this.display = 'none';
        this.create_wallet = true;
        this.wallet_type = 'btc';
        this.wallet_network = '';
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.base_url = _constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].serverURL;
    }
    ngOnInit() {
    }
    checkAuth() {
        if (sessionStorage.getItem('login_data')) {
            return true;
        }
        else {
            return false;
        }
    }
    createWallet() {
        return new Promise((resolve, reject) => {
            let params = {};
            this.wallet_network = sessionStorage.getItem('network');
            params = {
                "wallet_type": this.wallet_type,
                "network": this.wallet_network
            };
            this.verifyCreateWallet(params).subscribe(data => {
                if (data['status']) {
                    this.setSessionStorage('wallet', data['data']);
                    this.clearAlerts();
                    this.success(data['message']);
                    this.wallet_info = data['data'];
                    this.mnemonic = data['data']['mnemonic'].split(" ");
                    this.displayMnemonic();
                }
                else {
                    this.clearAlerts();
                    this.error(data['message']);
                }
                resolve(this.wallet_info);
            });
        });
    }
    displayMnemonic() {
        // Load Mnemonic Verification Popup
        this.display_mnemonic = this.mnemonic.slice();
        for (var i = 0; i < this.display_mnemonic.length - 6; i++) {
            let val = this.getRandomInt(this.display_mnemonic.length);
            this.display_mnemonic[val] = "";
        }
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    verifyMnemonic() {
        // this.openModalDialog();
    }
    verifyKey(form) {
        // this.closeModalDialog();
        var key = form.value.mnemonic;
        // Get session data
        var data = this.getSessionStorage('wallet');
        if (key == data['mnemonic']) {
            this.clearAlerts();
            this.success("Verification successful");
            // redirect to login
        }
        else {
            // Display error
            this.clearAlerts();
            this.error("Verification Failed");
        }
    }
    importWithMnemonic(form) {
        let mnemonic_key = "";
        Object.keys(form.value).forEach(function (key) {
            if (form.value[key] != undefined && form.value[key] != null) {
                mnemonic_key += form.value[key] + " ";
            }
        });
        mnemonic_key = mnemonic_key.trim();
        var network = (sessionStorage.getItem('network') != "") ? sessionStorage.getItem('network') : "testnet";
        let params = {};
        params = {
            'wallet_type': this.wallet_type,
            'network': network,
        };
        params['mnemonic'] = (mnemonic_key == undefined) ? "" : mnemonic_key;
        this.importWallet(params).subscribe(data => {
            if (data['status']) {
                this.clearAlerts();
                this.success(data['message']);
                this.setSessionStorage('login_data', data['data']);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.clearAlerts();
                this.error(data['message']);
            }
        });
    }
    importWithWif(form) {
        var network = (sessionStorage.getItem('network') != "") ? sessionStorage.getItem('network') : "testnet";
        var wif_key = form.value.wif_key;
        let params = {};
        params = {
            'wallet_type': this.wallet_type,
            'network': network,
            'mnemonicii': ""
        };
        if (wif_key != undefined && wif_key != "") {
            params['wif'] = wif_key;
        }
        this.importWallet(params).subscribe(data => {
            if (data['status']) {
                this.clearAlerts();
                this.success(data['message']);
                this.setSessionStorage('login_data', data['data']);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.clearAlerts();
                this.error(data['message']);
            }
        });
    }
    importWifSession() {
        var network = (sessionStorage.getItem('network') != "") ? sessionStorage.getItem('network') : "testnet";
        var wif_key = JSON.parse(sessionStorage.getItem('wallet'))['wif'];
        let params = {};
        params = {
            'wallet_type': this.wallet_type,
            'network': network,
            'mnemonicii': ""
        };
        if (wif_key != undefined && wif_key != "") {
            params['wif'] = wif_key;
        }
        this.importWallet(params).subscribe(data => {
            if (data['status']) {
                this.clearAlerts();
                this.success(data['data']);
                this.setSessionStorage('login_data', data['data']);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.clearAlerts();
                this.error(data['data']);
            }
        });
    }
    // -----------------------------------------------------------------
    createHeaders() {
        const headerSettings = {};
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headerSettings['Content-Type'] = 'application/json';
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerSettings)
        };
    }
    setSessionStorage(key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    }
    getSessionStorage(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    verifyCreateWallet(params) {
        this.createHeaders();
        return this.http.post(this.base_url + 'api/wallet/btc', params, this.headers);
    }
    importWallet(params) {
        this.createHeaders();
        return this.http.post(this.base_url + 'api/wallet/import', params, this.headers);
    }
    sendTextMessage(message, type) {
        this.subject.next({ message: message, type: type });
    }
    clearMessage() {
        this.subject.next('reset');
    }
    getMessage() {
        return this.subject.asObservable();
    }
    /* setLocalStorage(data: {}) {
        return new Promise((resolve, reject) => {
            localStorage.setItem('login_data', JSON.stringify(data));
            resolve(true);
        });
    }

    getLocalStorage() {
        return JSON.parse(localStorage.getItem('login_data'));
    } */
    getBalance() {
        this.createHeaders();
        let params = {};
        params = {
            'wallet_type': "btc",
            'address': JSON.parse(sessionStorage.getItem('login_data'))['address']
        };
        return this.http.post(this.base_url + 'api/wallet/bal/btc', params, this.headers);
    }
    getFeeDetails() {
        let params = {};
        params = {
            'wallet_type': "btc",
            'network': sessionStorage.getItem('network')
        };
        this.createHeaders();
        return this.http.post(this.base_url + 'api/fee/btc', params, this.headers);
    }
    transferFunds(params) {
        this.createHeaders();
        return this.http.post(this.base_url + 'api/transfer/btc', params, this.headers);
    }
    onLogout() {
        sessionStorage.clear();
        this.router.navigate(['/home']);
    }
    success(message) {
        this.alertService.success(message);
    }
    error(message) {
        this.alertService.error(message);
    }
    info(message) {
        this.alertService.info(message);
    }
    warn(message) {
        this.alertService.warn(message);
    }
    clearAlerts() {
        this.alertService.clear();
    }
};
ApiServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _shared_alerts_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], ApiServices);



/***/ }),

/***/ "./src/app/shared/alerts/_directives/alert.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/alerts/_directives/alert.component.ts ***!
  \**************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/index */ "./src/app/shared/alerts/_models/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/index */ "./src/app/shared/alerts/_services/index.ts");




let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.alertService.getAlert(this.id).subscribe((alert) => {
            if (!alert.message) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            setTimeout(() => this.reset(), 5000);
            // add alert to array
            this.alerts.push(alert);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case _models_index__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success:
                return 'alert alert-success';
            case _models_index__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error:
                return 'alert alert-danger';
            case _models_index__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info:
                return 'alert alert-info';
            case _models_index__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning:
                return 'alert alert-warning';
        }
    }
    reset() {
        this.alertService.clear();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AlertComponent.prototype, "id", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/alerts/_directives/alert.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
], AlertComponent);



/***/ }),

/***/ "./src/app/shared/alerts/_directives/index.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/alerts/_directives/index.ts ***!
  \****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/shared/alerts/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/shared/alerts/_models/alert.ts":
/*!************************************************!*\
  !*** ./src/app/shared/alerts/_models/alert.ts ***!
  \************************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/shared/alerts/_models/index.ts":
/*!************************************************!*\
  !*** ./src/app/shared/alerts/_models/index.ts ***!
  \************************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./src/app/shared/alerts/_models/alert.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"]; });




/***/ }),

/***/ "./src/app/shared/alerts/_services/alert.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/alerts/_services/alert.service.ts ***!
  \**********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/alert */ "./src/app/shared/alerts/_models/alert.ts");






let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = true;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = true;
                }
                else {
                    // clear alert messages
                    setTimeout(() => this.clear(), 10000);
                    // this.clear();
                }
            }
        });
    }
    // subscribe to alerts
    getAlert(alertId) {
        return this.subject.asObservable().filter((x) => x && x.alertId === alertId);
    }
    // convenience methods
    success(message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Success }));
    }
    error(message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Error }));
    }
    info(message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Info }));
    }
    warn(message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Warning }));
    }
    // main alert method    
    alert(alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    }
    // clear alerts
    clear(alertId) {
        this.subject.next(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ alertId }));
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AlertService);



/***/ }),

/***/ "./src/app/shared/alerts/_services/index.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/alerts/_services/index.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/alerts/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });




/***/ }),

/***/ "./src/app/shared/message/message.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/message/message.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/message/message.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/message/message.component.ts ***!
  \*****************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");



/* const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
}, {
    type: 'info',
    message: 'This is an info alert',
}, {
    type: 'warning',
    message: 'This is a warning alert',
}, {
    type: 'danger',
    message: 'This is a danger alert',
}, {
    type: 'primary',
    message: 'This is a primary alert',
}, {
    type: 'secondary',
    message: 'This is a secondary alert',
}, {
    type: 'light',
    message: 'This is a light alert',
}, {
    type: 'dark',
    message: 'This is a dark alert',
}
]; */
const ALERTS = [];
let MessageComponent = class MessageComponent {
    constructor(apiServices) {
        this.apiServices = apiServices;
        this.reset();
        this.subscription = this.apiServices.getMessage().subscribe(message => {
            if (message == 'reset') {
                this.reset();
            }
            else if (message) {
                setTimeout(() => this.reset(), 10000);
                this.alerts.push(message);
            }
        });
    }
    ngOnInit() {
        setTimeout(() => this.reset(), 10000);
    }
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    reset() {
        this.alerts = Array.from(ALERTS);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: __webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/message/message.component.html"),
        styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/shared/message/message.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiServices"]])
], MessageComponent);



/***/ }),

/***/ "./src/app/swap/swap.component.css":
/*!*****************************************!*\
  !*** ./src/app/swap/swap.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[type=\"radio\"]:checked,\n[type=\"radio\"]:not(:checked) {\n    position: absolute;\n    left: -9999px;\n}\n[type=\"radio\"]:checked + label,\n[type=\"radio\"]:not(:checked) + label\n{\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 20px;\n    display: inline-block;\n    color: #666;\n}\n[type=\"radio\"]:checked + label:before,\n[type=\"radio\"]:not(:checked) + label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #ddd;\n    border-radius: 100%;\n    background: #fff;\n}\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"]:not(:checked) + label:after {\n    content: '';\n    width: 12px;\n    height: 12px;\n    background: #F87DA9;\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    border-radius: 100%;\n    transition: all 0.2s ease;\n}\n[type=\"radio\"]:not(:checked) + label:after {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n[type=\"radio\"]:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n.coin-txt{\n    font: 12px;\n    color:#ccc;\n    text-align: center;\n}\n.my-img img{\n    text-align: center;\n}\n.swap-label{\n    text-align: center;\n    vertical-align: middle;\n    padding-top: 68px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dhcC9zd2FwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFFbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3dhcC9zd2FwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQsXG5bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtOTk5OXB4O1xufVxuW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwsXG5bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbFxue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogIzY2Njtcbn1cblt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcblt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyLFxuW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjg3REE5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDRweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uY29pbi10eHR7XG4gICAgZm9udDogMTJweDtcbiAgICBjb2xvcjojY2NjO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5teS1pbWcgaW1ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zd2FwLWxhYmVse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmctdG9wOiA2OHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/swap/swap.component.ts":
/*!****************************************!*\
  !*** ./src/app/swap/swap.component.ts ***!
  \****************************************/
/*! exports provided: SwapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapComponent", function() { return SwapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SwapComponent = class SwapComponent {
    constructor() { }
    ngOnInit() {
    }
};
SwapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-swap',
        template: __webpack_require__(/*! raw-loader!./swap.component.html */ "./node_modules/raw-loader/index.js!./src/app/swap/swap.component.html"),
        styles: [__webpack_require__(/*! ./swap.component.css */ "./src/app/swap/swap.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SwapComponent);



/***/ }),

/***/ "./src/app/wallet-dashboard/wallet-dashboard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/wallet-dashboard/wallet-dashboard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.example-container>* {\n    width: 100%;\n}\n\n.text-warning {\n    color: #b17a00!important;\n    font-size: 16px !important;\n}\n\n.btn_pls {\n    margin-top: 24px;\n    padding: 4px 8px;\n}\n\n/* custom buttons */\n\n.circle {\n    background: #17a2b8;\n    border: none;\n    border-radius: 900px;\n    color: #e4ecfa;\n    cursor: pointer;\n    display: block;\n    width: 32px;\n    height: 32px;\n    /* line-height: 50px; */\n    float: left;\n    position: relative;\n    transition: 0.5s;\n    padding: 2px;\n    margin: 4px;\n}\n\n.circle:hover {\n    background: #c58000;\n}\n\n.material-icons {\n    font-size: 28px;\n    line-height: 1;\n}\n\n/* slider */\n\n.sl_cnd {\n    margin-top: 35px;\n}\n\n.sl_cnd .rangeSlider {\n    margin-bottom: 52px;\n}\n\n.sl_cnd [data-output] {\n    display: block;\n    width: 100%;\n    text-align: center;\n    font-family: sans-serif;\n}\n\nmat-slider {\n    width: 100%;\n}\n\n.mat-slider-thumb {\n    position: absolute;\n    right: -10px;\n    bottom: -10px;\n    box-sizing: border-box;\n    width: 20px;\n    height: 20px;\n    border: 9px solid transparent;\n    border-radius: 50%;\n    -webkit-transform: scale(.7);\n            transform: scale(.7);\n    transition: background-color .4s cubic-bezier(.25, .8, .25, 1), border-color .4s cubic-bezier(.25, .8, .25, 1), -webkit-transform .4s cubic-bezier(.25, .8, .25, 1);\n    transition: transform .4s cubic-bezier(.25, .8, .25, 1), background-color .4s cubic-bezier(.25, .8, .25, 1), border-color .4s cubic-bezier(.25, .8, .25, 1);\n    transition: transform .4s cubic-bezier(.25, .8, .25, 1), background-color .4s cubic-bezier(.25, .8, .25, 1), border-color .4s cubic-bezier(.25, .8, .25, 1), -webkit-transform .4s cubic-bezier(.25, .8, .25, 1);\n}\n\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n    background-color: #f37515 !important;\n}\n\n.min {\n    padding: 0px 0px 0px 5px;\n    color: #ffab00;\n    float: left;\n    font-weight: 500;\n    font-size: 12px;\n}\n\n.max {\n    padding: 0px 5px 0px 5px;\n    color: #ffab00;\n    float: right;\n    font-weight: 500;\n    font-size: 12px;\n}\n\n.mat-accent .mat-slider-thumb {\n  background-color: #ffab00 !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0LWRhc2hib2FyZC93YWxsZXQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFHQSxXQUFXOztBQUVYO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLG1LQUEySjtJQUEzSiwySkFBMko7SUFBM0osZ05BQTJKO0FBQy9KOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC93YWxsZXQtZGFzaGJvYXJkL3dhbGxldC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXI+KiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LXdhcm5pbmcge1xuICAgIGNvbG9yOiAjYjE3YTAwIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLmJ0bl9wbHMge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbn1cblxuXG4vKiBjdXN0b20gYnV0dG9ucyAqL1xuXG4uY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTdhMmI4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA5MDBweDtcbiAgICBjb2xvcjogI2U0ZWNmYTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIC8qIGxpbmUtaGVpZ2h0OiA1MHB4OyAqL1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXJnaW46IDRweDtcbn1cblxuLmNpcmNsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2M1ODAwMDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cblxuLyogc2xpZGVyICovXG5cbi5zbF9jbmQge1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5zbF9jbmQgLnJhbmdlU2xpZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MnB4O1xufVxuXG4uc2xfY25kIFtkYXRhLW91dHB1dF0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxubWF0LXNsaWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiA5cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSksIGJhY2tncm91bmQtY29sb3IgLjRzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpLCBib3JkZXItY29sb3IgLjRzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpO1xufVxuXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM3NTE1ICFpbXBvcnRhbnQ7XG59XG5cbi5taW4ge1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcbiAgICBjb2xvcjogI2ZmYWIwMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1heCB7XG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xuICAgIGNvbG9yOiAjZmZhYjAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWIwMCAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/wallet-dashboard/wallet-dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/wallet-dashboard/wallet-dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: browserRefresh, WalletDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserRefresh", function() { return browserRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDashboardComponent", function() { return WalletDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let browserRefresh = false;
let WalletDashboardComponent = class WalletDashboardComponent {
    constructor(apiServices, router) {
        this.apiServices = apiServices;
        this.router = router;
        this.wallet_type = "btc";
        this.address = "";
        this.addresses = [];
        this.readOnly = true;
        this.tot_bal = 0;
        this.rem_bal = 0;
        this.txn_fee = 0.0003;
        this.value = 0;
        this.options = {
            floor: 0,
            ceil: 0
        };
        /*  getFeeDetails() {
           this.apiServices.getFeeDetails().subscribe(res => {
             if (res['status']) {
               this.fee_details = res['data'];
               this.value = this.fee_details['4'];
               this.options.floor = this.fee_details['15'];
               this.options.ceil = this.fee_details['1'];
             } else {
               // set error message
               this.apiServices.clearAlerts();
               this.apiServices.error("Fee details not found");
             }
           });
         } */
        this.mySortingFunction = (a, b) => {
            return a.key > b.key ? -1 : 1;
        };
    }
    unloadHandler(event) {
        console.log("Processing beforeunload...");
        // Do more processing...
        browserRefresh = true;
        if (browserRefresh == true) {
            this.apiServices.onLogout();
        }
    }
    /* To copy Text from Textbox */
    copyInputMessage(inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
        alert('text copied');
    }
    /* To copy any Text */
    copyText(val) {
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    changeAddress() {
        this.readOnly = !this.readOnly;
    }
    ngOnInit() {
        if (!this.apiServices.checkAuth()) {
            this.apiServices.clearAlerts();
            this.apiServices.error("Login Failed, Try again");
            this.router.navigate(['']);
        }
        else {
            this.getAddress();
            this.getWalletDetails();
            // this.getFeeDetails();
        }
    }
    getAddress() {
        let add = JSON.parse(sessionStorage.getItem('login_data'));
        if (add['address']) {
            this.address = add['address'];
        }
    }
    getWalletDetails() {
        this.wallet_details = this.apiServices.getSessionStorage('login_data');
        this.tot_bal = this.wallet_details['balance'];
        this.apiServices.clearAlerts();
        this.apiServices.success("wallet details");
    }
    addField() {
        var new_field = {};
        this.addresses.push(new_field);
    }
    removeField(field) {
        var index = this.addresses.indexOf(field);
        this.addresses.splice(index, 1);
    }
    transferBTC(form) {
        this.network = sessionStorage.getItem('network');
        let wif = JSON.parse(sessionStorage.getItem('login_data'))['wif'];
        let sender_addr = JSON.parse(sessionStorage.getItem('login_data'))['address'];
        let receiver = [];
        let multi_add_arr = [];
        let multi_amt_arr = [];
        Object.keys(form.value).forEach(function (key) {
            if (key.includes("address") || key.includes("amount")) {
                if (key.includes("address")) {
                    if (form.value[key] != null && form.value[key] != undefined && form.value[key] != "") {
                        multi_add_arr.push(form.value[key]);
                    }
                }
                if (key.includes("amount")) {
                    if (form.value[key] != null && form.value[key] != undefined && form.value[key] > 0) {
                        multi_amt_arr.push(form.value[key]);
                    }
                }
            }
        });
        for (var i = 0; i < multi_add_arr.length; i = i + 1) {
            let multi_add_obj = {};
            multi_add_obj = {
                'address': multi_add_arr[i],
                'value': multi_amt_arr[i]
            };
            receiver.push(multi_add_obj);
        }
        let params = {};
        params = {
            "wallet_type": this.wallet_type,
            "network": this.network,
            "wif": wif,
            "sender": sender_addr,
            "txnfee": form.value.fee,
            "receiver": receiver,
            "change_address": sender_addr
        };
        console.log(params);
        this.apiServices.transferFunds(params).subscribe(res => {
            if (res['status']) {
                // show success msg popup
                this.apiServices.clearAlerts();
                this.apiServices.success("Transfer initiated  " + res['data']['txnHash']);
            }
            else {
                // show faailure msg popup
                this.apiServices.clearAlerts();
                this.apiServices.error("Transfer Failed");
            }
        });
    }
    onFeeChange(fee) {
        this.txn_fee = fee;
        (this.tot_bal - this.txn_fee > 0) ? this.tot_bal - this.txn_fee : 0;
    }
    loadBal() {
        this.tot_bal = this.wallet_details['balance'] - this.txn_fee;
        /* this.tot_bal = 10 - this.fee_details['4'];
        this.rem_bal = this.wallet_details['balance'] - this.tot_bal; */
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:beforeunload", ["$event"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], WalletDashboardComponent.prototype, "unloadHandler", null);
WalletDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet-dashboard',
        template: __webpack_require__(/*! raw-loader!./wallet-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/wallet-dashboard/wallet-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./wallet-dashboard.component.css */ "./src/app/wallet-dashboard/wallet-dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiServices"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], WalletDashboardComponent);



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
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/saibharath/Office/Projects/myprivatewallet/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map