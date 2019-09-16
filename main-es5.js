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

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        patchMacroTask: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: function () { return noop; },
        isIEOrEdge: function () { return false; },
        getGlobalObjects: function () { return undefined; },
        ObjectDefineProperty: function () { return noop; },
        ObjectGetOwnPropertyDescriptor: function () { return undefined; },
        ObjectCreate: function () { return undefined; },
        ArraySlice: function () { return []; },
        patchClass: function () { return noop; },
        wrapWithCurrentZone: function () { return noop; },
        filterProperties: function () { return []; },
        attachOriginToPatched: function () { return noop; },
        _redefineProperty: function () { return noop; },
        patchCallbacks: function () { return noop; }
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
            get: function () {
                return 'Promise';
            },
            enumerable: true,
            configurable: true
        });
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global[api.symbol('fetch')] = fetch_1;
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var zoneSymbol$1 = Zone.__symbol__;
var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    var ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        var internalWindow = window;
        var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement_1) {
            patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
        }
        var Worker_1 = internalWindow['Worker'];
        if (Worker_1) {
            patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = function () { return ({
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
    }); };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetLegacyPatch(_global, api) {
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    api.patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        api.patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = api.ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = api.ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
function propertyDescriptorLegacyPatch(api, _global) {
    var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
    if (isNode && !isMix) {
        return;
    }
    if (!canPatchViaPropertyDescriptor(api, _global)) {
        var supportsWebSocket = typeof WebSocket !== 'undefined';
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents(api);
        api.patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
        Zone[api.symbol('patchEvents')] = true;
    }
}
function canPatchViaPropertyDescriptor(api, _global) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((isBrowser || isMix) &&
        !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
        // try to use onclick to detect whether we can patch via propertyDescriptor
        // because XMLHttpRequest is not available in service worker
        if (desc) {
            api.ObjectDefineProperty(Element.prototype, 'onclick', {
                enumerable: true,
                configurable: true,
                get: function () {
                    return true;
                }
            });
            var div = document.createElement('div');
            var result = !!div.onclick;
            api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
            return result;
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents(api) {
    var eventNames = api.getGlobalObjects().eventNames;
    var unboundKey = api.symbol('unbound');
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = api.wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (_global) {
    _global['__zone_symbol__legacyPatch'] = function () {
        var Zone = _global['Zone'];
        Zone.__load_patch('registerElement', function (global, Zone, api) {
            registerElementPatch(global, api);
        });
        Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
            eventTargetLegacyPatch(global, api);
            propertyDescriptorLegacyPatch(api, global);
        });
    };
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
    }
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    var EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent$1(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent$1(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
        }
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");





var AccessWalletComponent = /** @class */ (function () {
    function AccessWalletComponent(apiServices, router, dialog) {
        this.apiServices = apiServices;
        this.router = router;
        this.dialog = dialog;
        this.wallet_type = 'btc';
        this.wallet_network = 'mainnet';
    }
    AccessWalletComponent.prototype.ngOnInit = function () {
        sessionStorage.setItem('network', this.wallet_network);
        /* if (this.apiServices.checkAuth()) {
          this.router.navigate(['/dashboard']);
        } else {
          this.openNetworkData();
        } */
    };
    AccessWalletComponent.prototype.accessWalletData = function () {
        var dialogRef = this.dialog.open(AccessWalletModel, {
            width: '720px',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    // private wallet key pop-up model
    AccessWalletComponent.prototype.privateKeyData = function () {
        var dialogRef = this.dialog.open(PrivateKeyData, {
            width: '750px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
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
    return AccessWalletComponent;
}());

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
var AccessWalletModel = /** @class */ (function () {
    function AccessWalletModel(dialogRef, data, apiServices) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiServices = apiServices;
    }
    AccessWalletModel.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AccessWalletModel.prototype.arrayTwelve = function (n) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](Array(n).keys());
    };
    AccessWalletModel.prototype.submitMnemonic = function (form) {
        this.onNoClick();
        this.apiServices.importWithMnemonic(form);
    };
    AccessWalletModel.prototype.scrollTop = function () {
        var _this = this;
        setTimeout(function () {
            _this.alrtDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        });
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
    return AccessWalletModel;
}());

// Private key data
var PrivateKeyData = /** @class */ (function () {
    function PrivateKeyData(dialogRef, data, apiServices) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiServices = apiServices;
    }
    PrivateKeyData.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PrivateKeyData.prototype.submitWif = function (form) {
        this.onNoClick();
        this.apiServices.importWithWif(form);
    };
    PrivateKeyData.prototype.scrollTop = function () {
        var _this = this;
        setTimeout(function () {
            _this.alrtDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        });
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
    return PrivateKeyData;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main-layout/main-layout.component */ "./src/app/main/main-layout/main-layout.component.ts");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var _wallet_dashboard_wallet_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-dashboard/wallet-dashboard.component */ "./src/app/wallet-dashboard/wallet-dashboard.component.ts");
/* harmony import */ var _access_wallet_access_wallet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./access-wallet/access-wallet.component */ "./src/app/access-wallet/access-wallet.component.ts");
/* harmony import */ var _swap_swap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./swap/swap.component */ "./src/app/swap/swap.component.ts");








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"] },
    { path: 'create-wallet', component: _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_4__["CreateWalletComponent"] },
    { path: 'access-wallet', component: _access_wallet_access_wallet_component__WEBPACK_IMPORTED_MODULE_6__["AccessWalletComponent"] },
    { path: 'dashboard', component: _wallet_dashboard_wallet_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["WalletDashboardComponent"] },
    { path: 'swap', component: _swap_swap_component__WEBPACK_IMPORTED_MODULE_7__["SwapComponent"] },
    { path: '**', component: _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyPrivateWallet';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./includes/header/header.component */ "./src/app/includes/header/header.component.ts");
/* harmony import */ var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./includes/footer/footer.component */ "./src/app/includes/footer/footer.component.ts");
/* harmony import */ var _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main-layout/main-layout.component */ "./src/app/main/main-layout/main-layout.component.ts");
/* harmony import */ var _includes_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./includes/slider/slider.component */ "./src/app/includes/slider/slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





























var routes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());

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
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    Object.defineProperty(AppConstants, "serverURL", {
        get: function () { return 'http://159.65.157.241:3000/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppConstants, "localURL", {
        get: function () { return 'http://8e9dfa21.ngrok.io/'; },
        enumerable: true,
        configurable: true
    });
    ;
    return AppConstants;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var browserRefresh = false;
var CreateWalletComponent = /** @class */ (function () {
    function CreateWalletComponent(dialog, apiServices, router) {
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
    CreateWalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* if (this.apiServices.checkAuth()) {
          this.router.navigate(['/dashboard']);
        } else { */
        sessionStorage.setItem('network', this.wallet_network);
        this.apiServices.createWallet().then(function (data) {
            _this.mnemonic = _this.apiServices.mnemonic;
            _this.display_mnemonic = _this.apiServices.display_mnemonic;
        });
        /* } */
    };
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
    CreateWalletComponent.prototype.openWalletData = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogForWalletData, {
            width: '750px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    CreateWalletComponent.prototype.openDilog = function () {
        var dialogRef = this.dialog.open(DialogOverviewNetworkDialog, {
            width: '550px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
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
    return CreateWalletComponent;
}());

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
var DialogForWalletData = /** @class */ (function () {
    function DialogForWalletData(apiServices, dialogRef, data, router) {
        this.apiServices = apiServices;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
    }
    DialogForWalletData.prototype.ngOnInit = function () {
        this.apiServices.displayMnemonic();
        this.display_mnemonic_local = this.apiServices.display_mnemonic;
    };
    DialogForWalletData.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogForWalletData.prototype.verifyMnemonic = function (form) {
        this.onNoClick();
        var verify_key = "";
        Object.keys(form.value).forEach(function (key) {
            if (form.value[key] != undefined && form.value[key] != null) {
                verify_key += form.value[key] + " ";
            }
        });
        verify_key = verify_key.trim();
        var ori_key = JSON.parse(sessionStorage.getItem('wallet'))['mnemonic'];
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
    };
    DialogForWalletData.prototype.scrollTop = function () {
        var _this = this;
        setTimeout(function () {
            _this.alrtDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        });
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
    return DialogForWalletData;
}());

// Network Type Modal
var DialogOverviewNetworkDialog = /** @class */ (function () {
    function DialogOverviewNetworkDialog(dialogRef, data, router, apiServices) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.apiServices = apiServices;
        this.address = '';
    }
    DialogOverviewNetworkDialog.prototype.getAddress = function () {
        var add = JSON.parse(sessionStorage.getItem('wallet'));
        if (add['address']) {
            this.address = add['address'];
        }
    };
    DialogOverviewNetworkDialog.prototype.ngOnInit = function () {
        this.getAddress();
    };
    DialogOverviewNetworkDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewNetworkDialog.prototype.accessWallet = function () {
        this.onNoClick();
        this.apiServices.importWifSession();
        // this.router.navigate(['/access-wallet']);
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
    return DialogOverviewNetworkDialog;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/includes/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/includes/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(apiServices) {
        this.apiServices = apiServices;
        this.is_auth = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.is_auth = this.apiServices.checkAuth();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/includes/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/includes/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiServices"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeftMenuComponent = /** @class */ (function () {
    function LeftMenuComponent() {
    }
    LeftMenuComponent.prototype.ngOnInit = function () {
    };
    LeftMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-left-menu',
            template: __webpack_require__(/*! raw-loader!./left-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/includes/left-menu/left-menu.component.html"),
            styles: [__webpack_require__(/*! ./left-menu.component.css */ "./src/app/includes/left-menu/left-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeftMenuComponent);
    return LeftMenuComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/includes/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/includes/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




var WalletBalanceComponent = /** @class */ (function () {
    function WalletBalanceComponent(dialog, apiServices) {
        this.dialog = dialog;
        this.apiServices = apiServices;
        this.wallet_bal = 0;
        this.ref_bal = false;
    }
    WalletBalanceComponent.prototype.openWalletData = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogForWalletBal, {
            width: '750px',
            data: { details: this.wallet_details }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    // Check Balance
    WalletBalanceComponent.prototype.checkBalance = function () {
        var _this = this;
        var dialogRef = this.dialog.open(CheckBalance, {
            width: '750px',
            data: { details: this.wallet_details }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    // Change Network
    WalletBalanceComponent.prototype.changeNetwork = function () {
        var _this = this;
        var dialogRef = this.dialog.open(Changenetwork, {
            width: '750px',
            data: { details: this.wallet_details }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    WalletBalanceComponent.prototype.ngOnInit = function () {
        this.getWalletDetails();
    };
    WalletBalanceComponent.prototype.getWalletDetails = function () {
        this.wallet_details = this.apiServices.getSessionStorage('login_data');
    };
    WalletBalanceComponent.prototype.refreshBalance = function () {
        var _this = this;
        this.apiServices.getBalance().subscribe(function (res) {
            if (res['status']) {
                _this.ref_bal = true;
                _this.wallet_bal = res['data']['balance'];
                _this.apiServices.clearAlerts();
                // this.apiServices.success("Balance updated");
            }
            else {
                // set error message
                _this.apiServices.clearAlerts();
                // this.apiServices.error("Balance not updated, Try after sometime");
            }
        });
    };
    WalletBalanceComponent.prototype.ToggleButton = function () {
        this.showSelected = !this.showSelected;
    };
    WalletBalanceComponent.prototype.printAddr = function (divName) {
        var secret_key = document.getElementById(divName);
        var address = document.getElementById('wallet_addr');
        var WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        WindowPrt.document.write("Address:  " + address.innerHTML + "<br>");
        WindowPrt.document.write("Secret Key:  " + secret_key.innerHTML);
        WindowPrt.document.close();
        WindowPrt.focus();
        WindowPrt.print();
        WindowPrt.close();
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
    return WalletBalanceComponent;
}());

// Wallet Data
var DialogForWalletBal = /** @class */ (function () {
    function DialogForWalletBal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogForWalletBal.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogForWalletBal.prototype.ngOnInit = function () {
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
    return DialogForWalletBal;
}());

// Check Balance
var CheckBalance = /** @class */ (function () {
    function CheckBalance(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CheckBalance.prototype.onNoClick = function () {
        this.dialogRef.close();
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
    return CheckBalance;
}());

// Change Network
var Changenetwork = /** @class */ (function () {
    function Changenetwork(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Changenetwork.prototype.onNoClick = function () {
        this.dialogRef.close();
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
    return Changenetwork;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(apiServices, router) {
        this.apiServices = apiServices;
        this.router = router;
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
        if (this.apiServices.checkAuth()) {
            this.router.navigate(['/dashboard']);
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
    return MainLayoutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");











































var MyMaterialModule = /** @class */ (function () {
    function MyMaterialModule() {
    }
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
    return MyMaterialModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_alerts_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/alerts/_services */ "./src/app/shared/alerts/_services/index.ts");







var ApiServices = /** @class */ (function () {
    function ApiServices(http, router, alertService) {
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
    ApiServices.prototype.ngOnInit = function () {
    };
    ApiServices.prototype.checkAuth = function () {
        if (sessionStorage.getItem('login_data')) {
            return true;
        }
        else {
            return false;
        }
    };
    ApiServices.prototype.createWallet = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = {};
            _this.wallet_network = sessionStorage.getItem('network');
            params = {
                "wallet_type": _this.wallet_type,
                "network": _this.wallet_network
            };
            _this.verifyCreateWallet(params).subscribe(function (data) {
                if (data['status']) {
                    _this.setSessionStorage('wallet', data['data']);
                    _this.clearAlerts();
                    _this.success(data['message']);
                    _this.wallet_info = data['data'];
                    _this.mnemonic = data['data']['mnemonic'].split(" ");
                    _this.displayMnemonic();
                }
                else {
                    _this.clearAlerts();
                    _this.error(data['message']);
                }
                resolve(_this.wallet_info);
            });
        });
    };
    ApiServices.prototype.displayMnemonic = function () {
        // Load Mnemonic Verification Popup
        this.display_mnemonic = this.mnemonic.slice();
        for (var i = 0; i < this.display_mnemonic.length - 6; i++) {
            var val = this.getRandomInt(this.display_mnemonic.length);
            this.display_mnemonic[val] = "";
        }
    };
    ApiServices.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    ApiServices.prototype.verifyMnemonic = function () {
        // this.openModalDialog();
    };
    ApiServices.prototype.verifyKey = function (form) {
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
    };
    ApiServices.prototype.importWithMnemonic = function (form) {
        var _this = this;
        var mnemonic_key = "";
        Object.keys(form.value).forEach(function (key) {
            if (form.value[key] != undefined && form.value[key] != null) {
                mnemonic_key += form.value[key] + " ";
            }
        });
        mnemonic_key = mnemonic_key.trim();
        var network = (sessionStorage.getItem('network') != "") ? sessionStorage.getItem('network') : "testnet";
        var params = {};
        params = {
            'wallet_type': this.wallet_type,
            'network': network,
        };
        params['mnemonic'] = (mnemonic_key == undefined) ? "" : mnemonic_key;
        this.importWallet(params).subscribe(function (data) {
            if (data['status']) {
                _this.clearAlerts();
                _this.success(data['message']);
                _this.setSessionStorage('login_data', data['data']);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.clearAlerts();
                _this.error(data['message']);
            }
        });
    };
    ApiServices.prototype.importWithWif = function (form) {
        var _this = this;
        var network = (sessionStorage.getItem('network') != "") ? sessionStorage.getItem('network') : "testnet";
        var wif_key = form.value.wif_key;
        var params = {};
        params = {
            'wallet_type': this.wallet_type,
            'network': network,
            'mnemonicii': ""
        };
        if (wif_key != undefined && wif_key != "") {
            params['wif'] = wif_key;
        }
        this.importWallet(params).subscribe(function (data) {
            if (data['status']) {
                _this.clearAlerts();
                _this.success(data['message']);
                _this.setSessionStorage('login_data', data['data']);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.clearAlerts();
                _this.error(data['message']);
            }
        });
    };
    ApiServices.prototype.importWifSession = function () {
        var _this = this;
        var network = (sessionStorage.getItem('network') != "") ? sessionStorage.getItem('network') : "testnet";
        var wif_key = JSON.parse(sessionStorage.getItem('wallet'))['wif'];
        var params = {};
        params = {
            'wallet_type': this.wallet_type,
            'network': network,
            'mnemonicii': ""
        };
        if (wif_key != undefined && wif_key != "") {
            params['wif'] = wif_key;
        }
        this.importWallet(params).subscribe(function (data) {
            if (data['status']) {
                _this.clearAlerts();
                _this.success(data['data']);
                _this.setSessionStorage('login_data', data['data']);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.clearAlerts();
                _this.error(data['data']);
            }
        });
    };
    // -----------------------------------------------------------------
    ApiServices.prototype.createHeaders = function () {
        var headerSettings = {};
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headerSettings['Content-Type'] = 'application/json';
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerSettings)
        };
    };
    ApiServices.prototype.setSessionStorage = function (key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    };
    ApiServices.prototype.getSessionStorage = function (key) {
        return JSON.parse(sessionStorage.getItem(key));
    };
    ApiServices.prototype.verifyCreateWallet = function (params) {
        this.createHeaders();
        return this.http.post(this.base_url + 'api/wallet/btc', params, this.headers);
    };
    ApiServices.prototype.importWallet = function (params) {
        this.createHeaders();
        return this.http.post(this.base_url + 'api/wallet/import', params, this.headers);
    };
    ApiServices.prototype.sendTextMessage = function (message, type) {
        this.subject.next({ message: message, type: type });
    };
    ApiServices.prototype.clearMessage = function () {
        this.subject.next('reset');
    };
    ApiServices.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    /* setLocalStorage(data: {}) {
        return new Promise((resolve, reject) => {
            localStorage.setItem('login_data', JSON.stringify(data));
            resolve(true);
        });
    }

    getLocalStorage() {
        return JSON.parse(localStorage.getItem('login_data'));
    } */
    ApiServices.prototype.getBalance = function () {
        this.createHeaders();
        var params = {};
        params = {
            'wallet_type': "btc",
            'address': JSON.parse(sessionStorage.getItem('login_data'))['address']
        };
        return this.http.post(this.base_url + 'api/wallet/bal/btc', params, this.headers);
    };
    ApiServices.prototype.getFeeDetails = function () {
        var params = {};
        params = {
            'wallet_type': "btc",
            'network': sessionStorage.getItem('network')
        };
        this.createHeaders();
        return this.http.post(this.base_url + 'api/fee/btc', params, this.headers);
    };
    ApiServices.prototype.transferFunds = function (params) {
        this.createHeaders();
        return this.http.post(this.base_url + 'api/transfer/btc', params, this.headers);
    };
    ApiServices.prototype.onLogout = function () {
        sessionStorage.clear();
        this.router.navigate(['/home']);
    };
    ApiServices.prototype.success = function (message) {
        this.alertService.success(message);
    };
    ApiServices.prototype.error = function (message) {
        this.alertService.error(message);
    };
    ApiServices.prototype.info = function (message) {
        this.alertService.info(message);
    };
    ApiServices.prototype.warn = function (message) {
        this.alertService.warn(message);
    };
    ApiServices.prototype.clearAlerts = function () {
        this.alertService.clear();
    };
    ApiServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_alerts_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], ApiServices);
    return ApiServices;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/index */ "./src/app/shared/alerts/_models/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/index */ "./src/app/shared/alerts/_services/index.ts");




var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert(this.id).subscribe(function (alert) {
            if (!alert.message) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            setTimeout(function () { return _this.reset(); }, 5000);
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
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
    };
    AlertComponent.prototype.reset = function () {
        this.alertService.clear();
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
    return AlertComponent;
}());



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
var Alert = /** @class */ (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    return Alert;
}());

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/alert */ "./src/app/shared/alerts/_models/alert.ts");






var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = true;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = true;
                }
                else {
                    // clear alert messages
                    setTimeout(function () { return _this.clear(); }, 10000);
                    // this.clear();
                }
            }
        });
    }
    // subscribe to alerts
    AlertService.prototype.getAlert = function (alertId) {
        return this.subject.asObservable().filter(function (x) { return x && x.alertId === alertId; });
    };
    // convenience methods
    AlertService.prototype.success = function (message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message: message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Success }));
    };
    AlertService.prototype.error = function (message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message: message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Error }));
    };
    AlertService.prototype.info = function (message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message: message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Info }));
    };
    AlertService.prototype.warn = function (message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message: message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Warning }));
    };
    // main alert method    
    AlertService.prototype.alert = function (alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    };
    // clear alerts
    AlertService.prototype.clear = function (alertId) {
        this.subject.next(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ alertId: alertId }));
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
var ALERTS = [];
var MessageComponent = /** @class */ (function () {
    function MessageComponent(apiServices) {
        var _this = this;
        this.apiServices = apiServices;
        this.reset();
        this.subscription = this.apiServices.getMessage().subscribe(function (message) {
            if (message == 'reset') {
                _this.reset();
            }
            else if (message) {
                setTimeout(function () { return _this.reset(); }, 10000);
                _this.alerts.push(message);
            }
        });
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.reset(); }, 10000);
    };
    MessageComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    MessageComponent.prototype.reset = function () {
        this.alerts = Array.from(ALERTS);
    };
    MessageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/shared/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiServices"]])
    ], MessageComponent);
    return MessageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwapComponent = /** @class */ (function () {
    function SwapComponent() {
    }
    SwapComponent.prototype.ngOnInit = function () {
    };
    SwapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-swap',
            template: __webpack_require__(/*! raw-loader!./swap.component.html */ "./node_modules/raw-loader/index.js!./src/app/swap/swap.component.html"),
            styles: [__webpack_require__(/*! ./swap.component.css */ "./src/app/swap/swap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SwapComponent);
    return SwapComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var browserRefresh = false;
var WalletDashboardComponent = /** @class */ (function () {
    function WalletDashboardComponent(apiServices, router) {
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
        this.mySortingFunction = function (a, b) {
            return a.key > b.key ? -1 : 1;
        };
    }
    WalletDashboardComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        // Do more processing...
        browserRefresh = true;
        if (browserRefresh == true) {
            this.apiServices.onLogout();
        }
    };
    /* To copy Text from Textbox */
    WalletDashboardComponent.prototype.copyInputMessage = function (inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
        alert('text copied');
    };
    /* To copy any Text */
    WalletDashboardComponent.prototype.copyText = function (val) {
        var selBox = document.createElement('textarea');
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
    };
    WalletDashboardComponent.prototype.changeAddress = function () {
        this.readOnly = !this.readOnly;
    };
    WalletDashboardComponent.prototype.ngOnInit = function () {
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
    };
    WalletDashboardComponent.prototype.getAddress = function () {
        var add = JSON.parse(sessionStorage.getItem('login_data'));
        if (add['address']) {
            this.address = add['address'];
        }
    };
    WalletDashboardComponent.prototype.getWalletDetails = function () {
        this.wallet_details = this.apiServices.getSessionStorage('login_data');
        this.tot_bal = this.wallet_details['balance'];
        this.apiServices.clearAlerts();
        this.apiServices.success("wallet details");
    };
    WalletDashboardComponent.prototype.addField = function () {
        var new_field = {};
        this.addresses.push(new_field);
    };
    WalletDashboardComponent.prototype.removeField = function (field) {
        var index = this.addresses.indexOf(field);
        this.addresses.splice(index, 1);
    };
    WalletDashboardComponent.prototype.transferBTC = function (form) {
        var _this = this;
        this.network = sessionStorage.getItem('network');
        var wif = JSON.parse(sessionStorage.getItem('login_data'))['wif'];
        var sender_addr = JSON.parse(sessionStorage.getItem('login_data'))['address'];
        var receiver = [];
        var multi_add_arr = [];
        var multi_amt_arr = [];
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
            var multi_add_obj = {};
            multi_add_obj = {
                'address': multi_add_arr[i],
                'value': multi_amt_arr[i]
            };
            receiver.push(multi_add_obj);
        }
        var params = {};
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
        this.apiServices.transferFunds(params).subscribe(function (res) {
            if (res['status']) {
                // show success msg popup
                _this.apiServices.clearAlerts();
                _this.apiServices.success("Transfer initiated  " + res['data']['txnHash']);
            }
            else {
                // show faailure msg popup
                _this.apiServices.clearAlerts();
                _this.apiServices.error("Transfer Failed");
            }
        });
    };
    WalletDashboardComponent.prototype.onFeeChange = function (fee) {
        this.txn_fee = fee;
        (this.tot_bal - this.txn_fee > 0) ? this.tot_bal - this.txn_fee : 0;
    };
    WalletDashboardComponent.prototype.loadBal = function () {
        this.tot_bal = this.wallet_details['balance'] - this.txn_fee;
        /* this.tot_bal = 10 - this.fee_details['4'];
        this.rem_bal = this.wallet_details['balance'] - this.tot_bal; */
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
    return WalletDashboardComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map