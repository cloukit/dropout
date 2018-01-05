webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "<demo></demo>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("../../../../../src/demo/demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
            providers: [],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/assets/demoStoriesSource.json":
/***/ (function(module, exports) {

module.exports = {"story-00-dropout-directions.html":"<ng-template #demoModal>\n  <div class=\"modal\">\n    I am placed<br> {{DropoutPlacement[dropoutRollingPlacement]}}\n    <br><br>\n    <button\n      type=\"button\"\n      class=\"demoButton\"\n      (click)=\"closeModal1()\"\n    >close me</button>\n  </div>\n</ng-template>\n<div style=\"text-align: center;margin-top:100px;margin-bottom:100px;\">\n  <button\n    class=\"demoButton\"\n    [cloukitDropout]=\"demoModal\"\n    [cloukitDropoutClose]=\"myModal1Close\"\n    [cloukitDropoutTrigger]=\"DropoutTrigger.ONCLICK\"\n    [cloukitDropoutPlacement]=\"dropoutRollingPlacement\"\n    [cloukitDropoutZIndex]=\"500\"\n    (cloukitDropoutActive)=\"dropout1Active=$event\"\n    (click)=\"rollPlacement()\"\n  >\n    <svg style=\"width:20px\" viewBox=\"0 0 512 512\">\n      <g stroke=\"none\" fill=\"#ffffff\" fill-rule=\"evenodd\">\n        <polygon\n          [attr.points]=\"dropout1Active ? icon.down : icon.right\"\n        ></polygon>\n      </g>\n    </svg>\n    click me\n  </button>\n</div>\n","story-00-dropout-directions.ts":"import { Component } from '@angular/core';\nimport { DemoComponent } from '../demo.component';\nimport { DropoutPlacement, DropoutTrigger } from '../../index';\nimport { Subject } from 'rxjs/Subject';\n\n@Component({\n  selector: 'story-00-dropout-directions',\n  templateUrl: './story-00-dropout-directions.html',\n  styles: [].concat(DemoComponent.sharedStyles),\n})\nexport class Story00Component {\n  // Make enums available in template\n  DropoutPlacement = DropoutPlacement;\n  DropoutTrigger = DropoutTrigger;\n  dropoutRollingPlacement: DropoutPlacement = DropoutPlacement.DOWN_LEFT;\n\n  dropout1Active = false;\n  myModal1Close: Subject<boolean>;\n\n  icon = {\n    down: '254.4375 476.3125 463.515625 239.902344 45.359375 239.902344',\n    right: '158 38.2109375 423.109375 256.902344 158 475.59375',\n  };\n\n  closeModal1() {\n    this.myModal1Close.next(true);\n  }\n\n  rollPlacement() {\n    if (!this.dropout1Active) {\n      this.dropoutRollingPlacement = this.dropoutRollingPlacement + 1;\n      if (this.dropoutRollingPlacement > 22) {\n        this.dropoutRollingPlacement = 1;\n      }\n    }\n  }\n\n  constructor() {\n    this.myModal1Close = new Subject<boolean>();\n  }\n}\n","story-01-off-placed-trigger-element.html":"<ng-template #demoModal>\n  <div class=\"modal\">A traditional german sausage</div>\n</ng-template>\n\n<div style=\"display:flex;\">\n  <div style=\"flex:1;border:1px solid #ccc;padding:30px;\">\n    On Scroll Event of div do either:<br><br>\n    <span (click)=\"onScroll='close'\" style=\"cursor:pointer\">\n      <input\n        type=\"radio\"\n        value=\"close\"\n        [checked]=\"onScroll === 'close'\"\n      > close the modal\n    </span><br>\n    <span (click)=\"onScroll='reposition'\" style=\"cursor:pointer\">\n      <input\n        type=\"radio\"\n        value=\"reposition\"\n        [checked]=\"onScroll === 'reposition'\"\n      > reposition the modal\n    </span><br>\n    <span (click)=\"onScroll='nothing'\" style=\"cursor:pointer\">\n      <input\n        type=\"radio\"\n        value=\"nothing\"\n        [checked]=\"onScroll === 'nothing'\"\n      > do nothing\n    </span><br>\n  </div>\n  <div\n    style=\"flex:3;height:150px;overflow-y:scroll;border:1px solid #ccc;padding:30px;\"\n    (scroll)=\"onScrollDiv($event)\"\n  >\n    Please scroll down to the Bratwurst. The Dropout opens onClick.<br><br>\n    ...<br><br>\n    ...<br><br>\n    ...<br><br>\n    ...<br><br>\n    ...<br><br>\n    ...<br><br>\n    ...<br><br>\n    <div\n      style=\"border: 1px solid #ccc; width:200px;\"\n      [cloukitDropout]=\"demoModal\"\n      [cloukitDropoutPlacement]=\"DropoutPlacement.RIGHT_TOP\"\n      [cloukitDropoutTrigger]=\"DropoutTrigger.ONCLICK\"\n      [cloukitDropoutClose]=\"closeDropout\"\n      [cloukitDropoutReposition]=\"repositionDropout\"\n    >\n      <svg class=\"bratwurst\" viewBox=\"0 0 829 402\" xmlns=\"http://www.w3.org/2000/svg\">\n        <!-- Licensed under MIT License to Bernhard Grünewaldt codeclou.io -->\n        <title>\n          the-original-bratwurst\n        </title>\n        <g fill=\"none\" fill-rule=\"evenodd\">\n          <path d=\"M571.89 276.484c48.477-18.71 160.65-76.64 133.586-132.435-.96-1.98 25.835 20.666 20.28 2.43-5.553-18.238-27.39-41.04-33.108-44.554-5.718-3.515 1.514 25.884 0 24.202-35.044-38.93-62.18-.2-109.366 30.22-25.77 16.614-110.095 44.866-178.427 44.866-59.974 0-125.262-21.683-160.287-49.056-24.41-19.077-68.264-54.573-101.973-32.8-1.593 1.028 3.526-19.836-4.414-19.35-8.316.51-33.413 28.31-34.97 29.97-2.852 3.04 24.316 3.982 21.7 8.135-34.278 54.406 69.45 120.433 117.25 139.33 62.875 24.858 226.807 38.767 329.73-.96z\" fill=\"#BB5803\"/>\n          <path d=\"M571.89 276.484c48.477-18.71 160.65-76.64 133.586-132.435-.96-1.98-8.21 14.678-71.023 58.317-38.648 26.852-114.225 65.346-216.55 65.46-83.4.095-148.08-22.98-214.665-59.878-32.674-18.107-75.712-73.99-78.33-69.837-34.276 54.406 69.452 120.433 117.252 139.33 62.875 24.858 226.807 38.767 329.73-.96z\" fill=\"#A54C00\"/>\n        </g>\n      </svg>\n    </div>\n  </div>\n</div>\n","story-01-off-placed-trigger-element.ts":"import { Component } from '@angular/core';\nimport { DemoComponent } from '../demo.component';\nimport { DropoutPlacement, DropoutTrigger } from '../../index';\nimport { Subject } from 'rxjs/Subject';\n\n@Component({\n  selector: 'story-01-off-placed-trigger-element',\n  templateUrl: './story-01-off-placed-trigger-element.html',\n  styles: [].concat(DemoComponent.sharedStyles),\n})\nexport class Story01Component {\n  // Make enums available in template\n  DropoutPlacement = DropoutPlacement;\n  DropoutTrigger = DropoutTrigger;\n\n  closeDropout = new Subject<boolean>();\n  repositionDropout = new Subject<boolean>();\n  onScroll = 'reposition';\n\n  onScrollDiv() {\n    if (this.onScroll === 'reposition') {\n      this.repositionDropout.next(true);\n    }\n    if (this.onScroll === 'close') {\n      this.closeDropout.next(true);\n    }\n  }\n}\n"}

/***/ }),

/***/ "../../../../../src/components/children/dropout-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitDropoutContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropout_model__ = __webpack_require__("../../../../../src/components/dropout.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic_dropout_positioning_helper__ = __webpack_require__("../../../../../src/logic/dropout-positioning-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */




/**
 * The Dropout Container can be anything from a Tooltip, Modal to a Dropdown.
 * It is basically all the same thing. An absolute positioned element.
 * Just the size, appearance and open/close events are different.
 */
var CloukitDropoutContainerComponent = (function () {
    function CloukitDropoutContainerComponent() {
        this.style = {
            position: 'absolute',
            zIndex: 300,
        };
    }
    CloukitDropoutContainerComponent.prototype.ngOnInit = function () {
        if (this.dropoutZIndex !== undefined && this.dropoutZIndex !== null) {
            this.style['zIndex'] = this.dropoutZIndex;
        }
    };
    CloukitDropoutContainerComponent.prototype.repositionRelativeToTriggerElement = function (viewPortDimensions) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.dropoutTriggerElement)) {
            var triggerElementDimensions = __WEBPACK_IMPORTED_MODULE_2__dropout_model__["g" /* DropoutTriggerElementDimensions */].from(this.dropoutTriggerElement);
            var coordinates = __WEBPACK_IMPORTED_MODULE_3__logic_dropout_positioning_helper__["a" /* DropoutPositioningHelper */]
                .calculate(this.dropoutPlacement, triggerElementDimensions, viewPortDimensions, __WEBPACK_IMPORTED_MODULE_2__dropout_model__["d" /* DropoutOutletDimensions */].from(this.outlet));
            if (coordinates.right !== undefined) {
                this.style['right'] = coordinates.right + "px";
            }
            if (coordinates.left !== undefined) {
                this.style['left'] = coordinates.left + "px";
            }
            if (coordinates.top !== undefined) {
                this.style['top'] = coordinates.top + "px";
            }
            if (coordinates.bottom !== undefined) {
                this.style['bottom'] = coordinates.bottom + "px";
            }
        }
    };
    /**
     * Reposition the dropout on window resize changes
     * @param event
     */
    CloukitDropoutContainerComponent.prototype.onResize = function (event) {
        this.repositionRelativeToTriggerElement(new __WEBPACK_IMPORTED_MODULE_2__dropout_model__["h" /* DropoutViewPortDimensions */](event.target.innerWidth, event.target.innerHeight));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", HTMLElement)
    ], CloukitDropoutContainerComponent.prototype, "dropoutTriggerElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* TemplateRef */])
    ], CloukitDropoutContainerComponent.prototype, "dropoutBodyTemplateRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], CloukitDropoutContainerComponent.prototype, "dropoutPlacement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], CloukitDropoutContainerComponent.prototype, "dropoutZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", HTMLElement)
    ], CloukitDropoutContainerComponent.prototype, "outlet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CloukitDropoutContainerComponent.prototype, "onResize", null);
    CloukitDropoutContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cloukit-dropout-container',
            template: "\n    <div [ngStyle]=\"style\">\n      <ng-container *ngTemplateOutlet=\"dropoutBodyTemplateRef\"></ng-container>\n    </div>",
        })
    ], CloukitDropoutContainerComponent);
    return CloukitDropoutContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/components/children/dropout-outlet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitDropoutOutletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dropout_service__ = __webpack_require__("../../../../../src/components/services/dropout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


var CloukitDropoutOutletComponent = (function () {
    function CloukitDropoutOutletComponent(dropoutService) {
        this.dropoutService = dropoutService;
    }
    CloukitDropoutOutletComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.dropoutService.setViewContainerRef(self.vc);
        self.dropoutService.dropoutComponentCreationRequests
            .subscribe(function (id) {
            self.dropoutService
                .createDropout(id, self.vc, _this.outlet.nativeElement);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('vc', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewContainerRef */])
    ], CloukitDropoutOutletComponent.prototype, "vc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('outlet'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], CloukitDropoutOutletComponent.prototype, "outlet", void 0);
    CloukitDropoutOutletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cloukit-dropout-outlet',
            template: "\n    <div #outlet style=\"position:relative;\">\n      <ng-container #vc></ng-container>\n    </div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dropout_service__["a" /* CloukitDropoutService */]])
    ], CloukitDropoutOutletComponent);
    return CloukitDropoutOutletComponent;
}());



/***/ }),

/***/ "../../../../../src/components/dropout.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitDropoutDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dropout_service__ = __webpack_require__("../../../../../src/components/services/dropout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropout_model__ = __webpack_require__("../../../../../src/components/dropout.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */






var CloukitDropoutDirective = (function () {
    function CloukitDropoutDirective(dropoutService, viewContainerRef) {
        this.dropoutService = dropoutService;
        this.viewContainerRef = viewContainerRef;
        this.preDestroy = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.cloukitDropoutTrigger = __WEBPACK_IMPORTED_MODULE_2__dropout_model__["f" /* DropoutTrigger */].ONMOUSEOVER;
        this.cloukitDropoutPlacement = __WEBPACK_IMPORTED_MODULE_2__dropout_model__["e" /* DropoutPlacement */].DOWN_LEFT;
        this.cloukitDropoutActive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    CloukitDropoutDirective.prototype._doActivate = function () {
        if (this.dropoutRef === undefined) {
            var request = new __WEBPACK_IMPORTED_MODULE_2__dropout_model__["a" /* DropoutComponentCreationRequest */]();
            request.triggerElement = this.viewContainerRef.element.nativeElement;
            request.template = this.cloukitDropout;
            request.placement = this.cloukitDropoutPlacement;
            request.zIndex = this.cloukitDropoutZIndex;
            this.dropoutRef = this.dropoutService.requestDropoutCreation(request);
            this.cloukitDropoutActive.emit(true);
        }
    };
    CloukitDropoutDirective.prototype._doDeactivate = function () {
        if (this.dropoutRef !== undefined) {
            this.dropoutService.destroyComponent(this.dropoutRef);
            this.dropoutRef = undefined;
            this.cloukitDropoutActive.emit(false);
        }
    };
    CloukitDropoutDirective.prototype.ngOnInit = function () {
        var self = this;
        if (self.cloukitDropoutClose instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */]) {
            self.cloukitDropoutClose.takeUntil(self.preDestroy).subscribe(function () {
                self._doDeactivate();
            });
        }
        if (self.cloukitDropoutReposition instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */] && self.dropoutRef !== undefined) {
            self.cloukitDropoutReposition.takeUntil(self.preDestroy).subscribe(function () {
                self.dropoutService.forceReposition(self.dropoutRef);
            });
        }
        if (self.cloukitDropoutOpen instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */]) {
            self.cloukitDropoutOpen.takeUntil(self.preDestroy).subscribe(function () {
                if (self.dropoutRef === undefined) {
                    self._doActivate();
                }
            });
        }
    };
    CloukitDropoutDirective.prototype.ngOnDestroy = function () {
        this.preDestroy.next(true);
    };
    CloukitDropoutDirective.prototype.activateClick = function () {
        if (this.cloukitDropoutTrigger === __WEBPACK_IMPORTED_MODULE_2__dropout_model__["f" /* DropoutTrigger */].ONCLICK) {
            if (this.dropoutRef === undefined) {
                this._doActivate();
            }
            else {
                this._doDeactivate();
            }
        }
    };
    CloukitDropoutDirective.prototype.activate = function () {
        if (this.cloukitDropoutTrigger === __WEBPACK_IMPORTED_MODULE_2__dropout_model__["f" /* DropoutTrigger */].ONMOUSEOVER) {
            this._doActivate();
        }
    };
    CloukitDropoutDirective.prototype.deactivate = function () {
        if (this.cloukitDropoutTrigger === __WEBPACK_IMPORTED_MODULE_2__dropout_model__["f" /* DropoutTrigger */].ONMOUSEOVER) {
            this._doDeactivate();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('cloukitDropout'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* TemplateRef */])
    ], CloukitDropoutDirective.prototype, "cloukitDropout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('cloukitDropoutTrigger'),
        __metadata("design:type", Number)
    ], CloukitDropoutDirective.prototype, "cloukitDropoutTrigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('cloukitDropoutOpen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], CloukitDropoutDirective.prototype, "cloukitDropoutOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('cloukitDropoutClose'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], CloukitDropoutDirective.prototype, "cloukitDropoutClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('cloukitDropoutReposition'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], CloukitDropoutDirective.prototype, "cloukitDropoutReposition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('cloukitDropoutPlacement'),
        __metadata("design:type", Number)
    ], CloukitDropoutDirective.prototype, "cloukitDropoutPlacement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('cloukitDropoutZIndex'),
        __metadata("design:type", Number)
    ], CloukitDropoutDirective.prototype, "cloukitDropoutZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], CloukitDropoutDirective.prototype, "cloukitDropoutActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CloukitDropoutDirective.prototype, "activateClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('focusin'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CloukitDropoutDirective.prototype, "activate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('focusout'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CloukitDropoutDirective.prototype, "deactivate", null);
    CloukitDropoutDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[cloukitDropout]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dropout_service__["a" /* CloukitDropoutService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewContainerRef */]])
    ], CloukitDropoutDirective);
    return CloukitDropoutDirective;
}());



/***/ }),

/***/ "../../../../../src/components/dropout.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DropoutPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DropoutTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DropoutComponentRefId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropoutComponentCreationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DropoutContainerCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DropoutViewPortDimensions; });
/* unused harmony export GenericDimensions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DropoutTriggerElementDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DropoutOutletDimensions; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * See: https://cloukit.github.io/dropout/doc/cloukit-dropout-positioning.svg
 */
var DropoutPlacement;
(function (DropoutPlacement) {
    DropoutPlacement[DropoutPlacement["DOWN_LEFT"] = 1] = "DOWN_LEFT";
    DropoutPlacement[DropoutPlacement["UP_LEFT"] = 2] = "UP_LEFT";
    DropoutPlacement[DropoutPlacement["VAUTO_LEFT"] = 3] = "VAUTO_LEFT";
    DropoutPlacement[DropoutPlacement["DOWN_RIGHT"] = 4] = "DOWN_RIGHT";
    DropoutPlacement[DropoutPlacement["UP_RIGHT"] = 5] = "UP_RIGHT";
    DropoutPlacement[DropoutPlacement["VAUTO_RIGHT"] = 6] = "VAUTO_RIGHT";
    DropoutPlacement[DropoutPlacement["DOWN_CENTER"] = 7] = "DOWN_CENTER";
    DropoutPlacement[DropoutPlacement["UP_CENTER"] = 8] = "UP_CENTER";
    DropoutPlacement[DropoutPlacement["VAUTO_CENTER"] = 9] = "VAUTO_CENTER";
    DropoutPlacement[DropoutPlacement["LEFT_TOP"] = 10] = "LEFT_TOP";
    DropoutPlacement[DropoutPlacement["LEFT_BOTTOM"] = 11] = "LEFT_BOTTOM";
    DropoutPlacement[DropoutPlacement["LEFT_VAUTO"] = 12] = "LEFT_VAUTO";
    DropoutPlacement[DropoutPlacement["RIGHT_TOP"] = 13] = "RIGHT_TOP";
    DropoutPlacement[DropoutPlacement["RIGHT_BOTTOM"] = 14] = "RIGHT_BOTTOM";
    DropoutPlacement[DropoutPlacement["RIGHT_VAUTO"] = 15] = "RIGHT_VAUTO";
    DropoutPlacement[DropoutPlacement["LEFT_CENTER"] = 16] = "LEFT_CENTER";
    DropoutPlacement[DropoutPlacement["RIGHT_CENTER"] = 17] = "RIGHT_CENTER";
    DropoutPlacement[DropoutPlacement["HAUTO_CENTER"] = 18] = "HAUTO_CENTER";
    DropoutPlacement[DropoutPlacement["FIX_TOP_LEFT"] = 19] = "FIX_TOP_LEFT";
    DropoutPlacement[DropoutPlacement["FIX_TOP_RIGHT"] = 20] = "FIX_TOP_RIGHT";
    DropoutPlacement[DropoutPlacement["FIX_BOTTOM_LEFT"] = 21] = "FIX_BOTTOM_LEFT";
    DropoutPlacement[DropoutPlacement["FIX_BOTTOM_RIGHT"] = 22] = "FIX_BOTTOM_RIGHT";
})(DropoutPlacement || (DropoutPlacement = {}));
var DropoutTrigger;
(function (DropoutTrigger) {
    DropoutTrigger[DropoutTrigger["ONMOUSEOVER"] = 1] = "ONMOUSEOVER";
    DropoutTrigger[DropoutTrigger["ONCLICK"] = 2] = "ONCLICK";
    DropoutTrigger[DropoutTrigger["PROGRAMMATIC"] = 3] = "PROGRAMMATIC";
})(DropoutTrigger || (DropoutTrigger = {}));
var DropoutComponentRefId = (function () {
    function DropoutComponentRefId(_id) {
        this.id = _id;
    }
    return DropoutComponentRefId;
}());

var DropoutComponentCreationRequest = (function () {
    function DropoutComponentCreationRequest() {
    }
    return DropoutComponentCreationRequest;
}());

/**
 * Absolute coordinates in pixels where to place dropout container
 */
var DropoutContainerCoordinates = (function () {
    function DropoutContainerCoordinates() {
    }
    return DropoutContainerCoordinates;
}());

/**
 * How big the viewPort is in pixels
 */
var DropoutViewPortDimensions = (function () {
    function DropoutViewPortDimensions(_width, _height) {
        this.width = _width;
        this.height = _height;
    }
    return DropoutViewPortDimensions;
}());

var GenericDimensions = (function () {
    function GenericDimensions(_x, _y, _width, _height) {
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
    }
    GenericDimensions.from = function (htmlElement) {
        return new DropoutTriggerElementDimensions(htmlElement.getBoundingClientRect().left, htmlElement.getBoundingClientRect().top, htmlElement.getBoundingClientRect().width, htmlElement.getBoundingClientRect().height);
    };
    return GenericDimensions;
}());

var DropoutTriggerElementDimensions = (function (_super) {
    __extends(DropoutTriggerElementDimensions, _super);
    function DropoutTriggerElementDimensions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DropoutTriggerElementDimensions;
}(GenericDimensions));

var DropoutOutletDimensions = (function (_super) {
    __extends(DropoutOutletDimensions, _super);
    function DropoutOutletDimensions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DropoutOutletDimensions;
}(GenericDimensions));



/***/ }),

/***/ "../../../../../src/components/dropout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitDropoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropout_directive__ = __webpack_require__("../../../../../src/components/dropout.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dropout_service__ = __webpack_require__("../../../../../src/components/services/dropout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__children_dropout_outlet_component__ = __webpack_require__("../../../../../src/components/children/dropout-outlet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__children_dropout_container_component__ = __webpack_require__("../../../../../src/components/children/dropout-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */






var CloukitDropoutModule = (function () {
    function CloukitDropoutModule() {
    }
    CloukitDropoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__dropout_directive__["a" /* CloukitDropoutDirective */], __WEBPACK_IMPORTED_MODULE_4__children_dropout_outlet_component__["a" /* CloukitDropoutOutletComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dropout_directive__["a" /* CloukitDropoutDirective */], __WEBPACK_IMPORTED_MODULE_5__children_dropout_container_component__["a" /* CloukitDropoutContainerComponent */], __WEBPACK_IMPORTED_MODULE_4__children_dropout_outlet_component__["a" /* CloukitDropoutOutletComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_dropout_service__["a" /* CloukitDropoutService */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__children_dropout_container_component__["a" /* CloukitDropoutContainerComponent */]],
        })
    ], CloukitDropoutModule);
    return CloukitDropoutModule;
}());



/***/ }),

/***/ "../../../../../src/components/services/dropout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitDropoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropout_model__ = __webpack_require__("../../../../../src/components/dropout.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__children_dropout_container_component__ = __webpack_require__("../../../../../src/components/children/dropout-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */




var CloukitDropoutService = (function () {
    function CloukitDropoutService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        /** Holds references to all ComponentRefs with a automatically generated id */
        this._dropoutComponents = new Map();
        /** list of creation requests that will get created async by the outlet */
        this._dropoutComponentCreationRequests = new Map();
        /** subscribe to this to be notified of componentCreationRequests */
        this.dropoutComponentCreationRequests = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    CloukitDropoutService.prototype.generateUuid = function () {
        var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
        return "" + s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
    };
    CloukitDropoutService.prototype.requestDropoutCreation = function (request) {
        var self = this;
        var id = new __WEBPACK_IMPORTED_MODULE_2__dropout_model__["b" /* DropoutComponentRefId */](this.generateUuid());
        self._dropoutComponentCreationRequests.set(id, request);
        self.dropoutComponentCreationRequests.next(id);
        return id;
    };
    /**
     * ViewContainerRef is injected onInit by outlet.
     */
    CloukitDropoutService.prototype.setViewContainerRef = function (viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    };
    /**
     * ViewContainerRef is injected onInit by outlet.
     */
    CloukitDropoutService.prototype.getViewContainerRef = function () {
        return this.viewContainerRef;
    };
    /** CALLED FROM OUTLET! */
    CloukitDropoutService.prototype.createDropout = function (id, viewContainerRef, outlet) {
        var self = this;
        var componentFactory = self.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__children_dropout_container_component__["a" /* CloukitDropoutContainerComponent */]);
        var dropoutRef = viewContainerRef.createComponent(componentFactory);
        dropoutRef.onDestroy(function () {
            // FIXME dropoutRef = undefined;
        });
        var request = self._dropoutComponentCreationRequests.get(id);
        dropoutRef.instance.dropoutBodyTemplateRef = request.template;
        dropoutRef.instance.dropoutTriggerElement = request.triggerElement;
        dropoutRef.instance.dropoutPlacement = request.placement;
        dropoutRef.instance.dropoutZIndex = request.zIndex;
        dropoutRef.instance.outlet = outlet;
        dropoutRef.instance.repositionRelativeToTriggerElement(new __WEBPACK_IMPORTED_MODULE_2__dropout_model__["h" /* DropoutViewPortDimensions */](window.innerWidth, window.innerHeight));
        self._dropoutComponentCreationRequests.delete(id);
        self._dropoutComponents.set(id, dropoutRef);
        return id;
    };
    CloukitDropoutService.prototype.destroyComponent = function (id) {
        if (id !== undefined) {
            var component = this._dropoutComponents.get(id);
            component.destroy();
            this._dropoutComponents.delete(id);
        }
    };
    CloukitDropoutService.prototype.forceReposition = function (id) {
        var self = this;
        var dropout = self._dropoutComponents.get(id);
        if (dropout !== undefined && dropout !== null) {
            dropout.instance.repositionRelativeToTriggerElement(new __WEBPACK_IMPORTED_MODULE_2__dropout_model__["h" /* DropoutViewPortDimensions */](window.innerWidth, window.innerHeight));
        }
    };
    CloukitDropoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]])
    ], CloukitDropoutService);
    return CloukitDropoutService;
}());



/***/ }),

/***/ "../../../../../src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:10px\">\n  <!-- Even when the outlet cannot be placed at x=0 and y=0\n       it still works. Because the offset is subtracted. -->\n  <cloukit-dropout-outlet></cloukit-dropout-outlet>\n  <!-- But if you can place the outlet at x=0 and y=0 to avoid\n       possible misplacements of the dropout containers -->\n\n<!--\nFeature: Create DIV Overlays absolutely positioned on the page\n   The user should be able to place a 'trigger element' e.g. a button\n   somewhere on the page. When clicking on the trigger-element a\n   'dropout container' e.g. a div will be created and absolutely positioned\n   on the page either relative to the 'trigger element' or relative to the pages\n   viewport e.g. bottom right corner.\n-->\n\n  <!--\n   Scenario: Window Scroll\n     Given the viewport height is half the page height\n       And the trigger element is placed outside the viewport\n       And the dropout opens onclick\n       And the dropout placement is bottom left (relative)\n     When scrolling down until trigger element is inside viewport\n       And clicking on the trigger element\n     Then the dropout container should be created\n       And be correctly placed relative to the trigger element\n  -->\n  <cloukit-story title=\"Dropout Directions\" story=\"story-00-dropout-directions\">\n    <story-00-dropout-directions></story-00-dropout-directions>\n  </cloukit-story>\n\n  <br><br>\n\n  <!--\n   Scenario: Div Scroll\n     Given the viewport height is the page height\n       And the trigger element is placed inside a div with overflow-y:scroll\n       And the trigger element sits below the div height (scroll)\n       And the dropout opens onclick\n       And the dropout placement is bottom left (relative)\n     When scrolling down until trigger element is inside viewport\n       And clicking on the trigger element\n     Then the dropout container should be created\n       And be correctly placed relative to the trigger element\n  -->\n  <cloukit-story title=\"Off Placed Trigger Element\" story=\"story-01-off-placed-trigger-element\">\n    <story-01-off-placed-trigger-element></story-01-off-placed-trigger-element>\n  </cloukit-story>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DemoComponent = (function () {
    function DemoComponent() {
        // Make enums available in template
        this.DropoutPlacement = __WEBPACK_IMPORTED_MODULE_1__index__["b" /* DropoutPlacement */];
        this.DropoutTrigger = __WEBPACK_IMPORTED_MODULE_1__index__["c" /* DropoutTrigger */];
    }
    DemoComponent_1 = DemoComponent;
    DemoComponent.sharedStyles = [
        ".modal {\n      font-family: sans-serif;\n      padding: 10px;\n      width: 200px;\n      height: 100px;\n      border: 3px solid #68c1ff;\n      background-color: #A4E3FE;\n      color: #333;\n    }",
        ".demoButton { \n      background-color:#710ECC;\n      color:#fff;\n      border:1px solid #9e0eff;\n      outline:0;\n      padding:6px;\n      font-size:1rem;\n      cursor: pointer;\n    }\n    ",
        ".box {\n      border:1px solid #ccc;\n      padding:10px;\n    ",
        ".bratwurst {\n      width:200px;\n      cursor: pointer;\n      user-select: none;\n    }",
    ];
    DemoComponent = DemoComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo',
            template: __webpack_require__("../../../../../src/demo/demo.component.html"),
            styles: [].concat(DemoComponent_1.sharedStyles),
        })
    ], DemoComponent);
    return DemoComponent;
    var DemoComponent_1;
}());



/***/ }),

/***/ "../../../../../src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_demoStoriesSource_json__ = __webpack_require__("../../../../../src/assets/demoStoriesSource.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_demoStoriesSource_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_demoStoriesSource_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cloukit_story__ = __webpack_require__("../../../../@cloukit/story/story.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stories_story_00_dropout_directions__ = __webpack_require__("../../../../../src/demo/stories/story-00-dropout-directions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stories_story_01_off_placed_trigger_element__ = __webpack_require__("../../../../../src/demo/stories/story-01-off-placed-trigger-element.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DemoModule = (function () {
    function DemoModule(cloukitStoryService) {
        this.cloukitStoryService = cloukitStoryService;
        //
        // REGISTER STORY SOURCES
        //
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_5__assets_demoStoriesSource_json___default.a);
        for (var i = 0; i < keys.length; i++) {
            this.cloukitStoryService.addSource(keys[i], __WEBPACK_IMPORTED_MODULE_5__assets_demoStoriesSource_json___default.a[keys[i]]);
        }
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__stories_story_00_dropout_directions__["a" /* Story00Component */],
                __WEBPACK_IMPORTED_MODULE_8__stories_story_01_off_placed_trigger_element__["a" /* Story01Component */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__demo_component__["a" /* DemoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__cloukit_story__["a" /* CloukitStoryModule */],
                __WEBPACK_IMPORTED_MODULE_4__index__["a" /* CloukitDropoutModule */],
            ],
            providers: [],
            bootstrap: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__cloukit_story__["b" /* CloukitStoryService */]])
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "../../../../../src/demo/stories/story-00-dropout-directions.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #demoModal>\n  <div class=\"modal\">\n    I am placed<br> {{DropoutPlacement[dropoutRollingPlacement]}}\n    <br><br>\n    <button\n      type=\"button\"\n      class=\"demoButton\"\n      (click)=\"closeModal1()\"\n    >close me</button>\n  </div>\n</ng-template>\n<div style=\"text-align: center;margin-top:100px;margin-bottom:100px;\">\n  <button\n    class=\"demoButton\"\n    [cloukitDropout]=\"demoModal\"\n    [cloukitDropoutClose]=\"myModal1Close\"\n    [cloukitDropoutTrigger]=\"DropoutTrigger.ONCLICK\"\n    [cloukitDropoutPlacement]=\"dropoutRollingPlacement\"\n    [cloukitDropoutZIndex]=\"500\"\n    (cloukitDropoutActive)=\"dropout1Active=$event\"\n    (click)=\"rollPlacement()\"\n  >\n    <svg style=\"width:20px\" viewBox=\"0 0 512 512\">\n      <g stroke=\"none\" fill=\"#ffffff\" fill-rule=\"evenodd\">\n        <polygon\n          [attr.points]=\"dropout1Active ? icon.down : icon.right\"\n        ></polygon>\n      </g>\n    </svg>\n    click me\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/stories/story-00-dropout-directions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story00Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Story00Component = (function () {
    function Story00Component() {
        // Make enums available in template
        this.DropoutPlacement = __WEBPACK_IMPORTED_MODULE_2__index__["b" /* DropoutPlacement */];
        this.DropoutTrigger = __WEBPACK_IMPORTED_MODULE_2__index__["c" /* DropoutTrigger */];
        this.dropoutRollingPlacement = __WEBPACK_IMPORTED_MODULE_2__index__["b" /* DropoutPlacement */].DOWN_LEFT;
        this.dropout1Active = false;
        this.icon = {
            down: '254.4375 476.3125 463.515625 239.902344 45.359375 239.902344',
            right: '158 38.2109375 423.109375 256.902344 158 475.59375',
        };
        this.myModal1Close = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    Story00Component.prototype.closeModal1 = function () {
        this.myModal1Close.next(true);
    };
    Story00Component.prototype.rollPlacement = function () {
        if (!this.dropout1Active) {
            this.dropoutRollingPlacement = this.dropoutRollingPlacement + 1;
            if (this.dropoutRollingPlacement > 22) {
                this.dropoutRollingPlacement = 1;
            }
        }
    };
    Story00Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-00-dropout-directions',
            template: __webpack_require__("../../../../../src/demo/stories/story-00-dropout-directions.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        }),
        __metadata("design:paramtypes", [])
    ], Story00Component);
    return Story00Component;
}());



/***/ }),

/***/ "../../../../../src/demo/stories/story-01-off-placed-trigger-element.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #demoModal>\n  <div class=\"modal\">A traditional german sausage</div>\n</ng-template>\n\n<div style=\"display:flex;\">\n  <div style=\"flex:1;border:1px solid #ccc;padding:30px;\">\n    On Scroll Event of div do either:<br><br>\n    <span (click)=\"onScroll='close'\" style=\"cursor:pointer\">\n      <input\n        type=\"radio\"\n        value=\"close\"\n        [checked]=\"onScroll === 'close'\"\n      > close the modal\n    </span><br>\n    <span (click)=\"onScroll='reposition'\" style=\"cursor:pointer\">\n      <input\n        type=\"radio\"\n        value=\"reposition\"\n        [checked]=\"onScroll === 'reposition'\"\n      > reposition the modal\n    </span><br>\n    <span (click)=\"onScroll='nothing'\" style=\"cursor:pointer\">\n      <input\n        type=\"radio\"\n        value=\"nothing\"\n        [checked]=\"onScroll === 'nothing'\"\n      > do nothing\n    </span><br>\n  </div>\n  <div\n    style=\"flex:3;height:150px;overflow-y:scroll;border:1px solid #ccc;padding:30px;\"\n    (scroll)=\"onScrollDiv($event)\"\n  >\n    Please scroll down to the Bratwurst. The Dropout opens onClick.<br><br>\n    ...<br><br>\n    ...<br><br>\n    ...<br><br>\n    ...<br><br>\n    ...<br><br>\n    ...<br><br>\n    ...<br><br>\n    <div\n      style=\"border: 1px solid #ccc; width:200px;\"\n      [cloukitDropout]=\"demoModal\"\n      [cloukitDropoutPlacement]=\"DropoutPlacement.RIGHT_TOP\"\n      [cloukitDropoutTrigger]=\"DropoutTrigger.ONCLICK\"\n      [cloukitDropoutClose]=\"closeDropout\"\n      [cloukitDropoutReposition]=\"repositionDropout\"\n    >\n      <svg class=\"bratwurst\" viewBox=\"0 0 829 402\" xmlns=\"http://www.w3.org/2000/svg\">\n        <!-- Licensed under MIT License to Bernhard Grünewaldt codeclou.io -->\n        <title>\n          the-original-bratwurst\n        </title>\n        <g fill=\"none\" fill-rule=\"evenodd\">\n          <path d=\"M571.89 276.484c48.477-18.71 160.65-76.64 133.586-132.435-.96-1.98 25.835 20.666 20.28 2.43-5.553-18.238-27.39-41.04-33.108-44.554-5.718-3.515 1.514 25.884 0 24.202-35.044-38.93-62.18-.2-109.366 30.22-25.77 16.614-110.095 44.866-178.427 44.866-59.974 0-125.262-21.683-160.287-49.056-24.41-19.077-68.264-54.573-101.973-32.8-1.593 1.028 3.526-19.836-4.414-19.35-8.316.51-33.413 28.31-34.97 29.97-2.852 3.04 24.316 3.982 21.7 8.135-34.278 54.406 69.45 120.433 117.25 139.33 62.875 24.858 226.807 38.767 329.73-.96z\" fill=\"#BB5803\"/>\n          <path d=\"M571.89 276.484c48.477-18.71 160.65-76.64 133.586-132.435-.96-1.98-8.21 14.678-71.023 58.317-38.648 26.852-114.225 65.346-216.55 65.46-83.4.095-148.08-22.98-214.665-59.878-32.674-18.107-75.712-73.99-78.33-69.837-34.276 54.406 69.452 120.433 117.252 139.33 62.875 24.858 226.807 38.767 329.73-.96z\" fill=\"#A54C00\"/>\n        </g>\n      </svg>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/stories/story-01-off-placed-trigger-element.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story01Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Story01Component = (function () {
    function Story01Component() {
        // Make enums available in template
        this.DropoutPlacement = __WEBPACK_IMPORTED_MODULE_2__index__["b" /* DropoutPlacement */];
        this.DropoutTrigger = __WEBPACK_IMPORTED_MODULE_2__index__["c" /* DropoutTrigger */];
        this.closeDropout = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.repositionDropout = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.onScroll = 'reposition';
    }
    Story01Component.prototype.onScrollDiv = function () {
        if (this.onScroll === 'reposition') {
            this.repositionDropout.next(true);
        }
        if (this.onScroll === 'close') {
            this.closeDropout.next(true);
        }
    };
    Story01Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-01-off-placed-trigger-element',
            template: __webpack_require__("../../../../../src/demo/stories/story-01-off-placed-trigger-element.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story01Component);
    return Story01Component;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dropout_module__ = __webpack_require__("../../../../../src/components/dropout.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_dropout_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dropout_model__ = __webpack_require__("../../../../../src/components/dropout.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components_dropout_model__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__components_dropout_model__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_services_dropout_service__ = __webpack_require__("../../../../../src/components/services/dropout.service.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/logic/dropout-positioning-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropoutPositioningHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__ = __webpack_require__("../../../../../src/components/dropout.model.ts");
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

var DropoutPositioningHelper = (function () {
    function DropoutPositioningHelper() {
    }
    /**
     * The triggerElement and the dropout container are placed inside the viewPort.
     * We need to calculate the containerCoordinates based on several conditions.
     */
    DropoutPositioningHelper.calculate = function (placement, trigger, viewPort, outlet) {
        var ret = new __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["c" /* DropoutContainerCoordinates */]();
        var vAutoLeftRight = function () {
            if (trigger.y < viewPort.height * 0.5) {
                ret.top = trigger.y + trigger.height;
            }
            else {
                ret.bottom = (-1) * trigger.y;
            }
        };
        var leftRightVAuto = function () {
            if (trigger.y < viewPort.height * 0.5) {
                ret.top = trigger.y;
            }
            else {
                ret.bottom = (-1) * (trigger.y + trigger.height);
            }
        };
        var hAuto = function () {
            if (trigger.x < viewPort.width * 0.5) {
                ret.left = trigger.x + trigger.width;
            }
            else {
                ret.right = viewPort.width - trigger.x;
            }
        };
        if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].DOWN_LEFT) {
            ret.left = trigger.x;
            ret.top = trigger.y + trigger.height;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].DOWN_RIGHT) {
            ret.right = viewPort.width - trigger.x - trigger.width;
            ret.top = trigger.y + trigger.height;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].UP_LEFT) {
            ret.left = trigger.x;
            ret.bottom = (-1) * trigger.y;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].UP_RIGHT) {
            ret.right = viewPort.width - trigger.x - trigger.width;
            ret.bottom = (-1) * trigger.y;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].VAUTO_LEFT) {
            ret.left = trigger.x;
            vAutoLeftRight();
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].VAUTO_RIGHT) {
            ret.right = viewPort.width - trigger.x - trigger.width;
            vAutoLeftRight();
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].DOWN_CENTER) {
            ret.left = trigger.x + trigger.width / 2;
            ret.top = trigger.y + trigger.height;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].UP_CENTER) {
            ret.left = trigger.x + trigger.width / 2;
            ret.bottom = (-1) * (trigger.y);
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].VAUTO_CENTER) {
            ret.left = trigger.x + trigger.width / 2;
            vAutoLeftRight();
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].LEFT_TOP) {
            ret.right = viewPort.width - trigger.x;
            ret.top = trigger.y;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].LEFT_BOTTOM) {
            ret.right = viewPort.width - trigger.x;
            ret.bottom = (-1) * (trigger.y + trigger.height);
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].LEFT_VAUTO) {
            ret.right = viewPort.width - trigger.x;
            leftRightVAuto();
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].RIGHT_TOP) {
            ret.left = trigger.x + trigger.width;
            ret.top = trigger.y;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].RIGHT_BOTTOM) {
            ret.left = trigger.x + trigger.width;
            ret.bottom = (-1) * (trigger.y + trigger.height);
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].RIGHT_VAUTO) {
            ret.left = trigger.x + trigger.width;
            leftRightVAuto();
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].LEFT_CENTER) {
            ret.right = viewPort.width - trigger.x;
            ret.top = trigger.y + trigger.height / 2;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].RIGHT_CENTER) {
            ret.left = trigger.x + trigger.width;
            ret.top = trigger.y + trigger.height / 2;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].HAUTO_CENTER) {
            hAuto();
            ret.top = trigger.y + trigger.height / 2;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].FIX_TOP_LEFT) {
            ret.top = 0;
            ret.left = 0;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].FIX_TOP_RIGHT) {
            ret.top = 0;
            ret.right = 0;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].FIX_BOTTOM_LEFT) {
            ret.bottom = (-1) * viewPort.height;
            ret.left = 0;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["e" /* DropoutPlacement */].FIX_BOTTOM_RIGHT) {
            ret.bottom = (-1) * viewPort.height;
            ret.right = 0;
        }
        //
        // ADJUST TO OFFSET OUTLET
        //
        if (ret.left !== undefined) {
            ret.left = ret.left - outlet.x;
        }
        if (ret.top !== undefined) {
            ret.top = ret.top - outlet.y;
        }
        if (ret.right !== undefined) {
            var offsetRight = viewPort.width - outlet.x - outlet.width;
            ret.right = ret.right - offsetRight;
        }
        if (ret.bottom !== undefined) {
            var offsetBottom = outlet.y - outlet.height;
            ret.bottom = ret.bottom + offsetBottom;
        }
        return ret;
    };
    return DropoutPositioningHelper;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map