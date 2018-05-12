webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: "<demo></demo>"
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/components/children/dropout-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitDropoutContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
 * The Dropout Body can be anything from a Tooltip, Modal to a Dropdown.
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
            var triggerElementDimensions = __WEBPACK_IMPORTED_MODULE_2__dropout_model__["f" /* DropoutTriggerElementDimensions */].from(this.dropoutTriggerElement);
            var coordinates = __WEBPACK_IMPORTED_MODULE_3__logic_dropout_positioning_helper__["a" /* DropoutPositioningHelper */].calculate(this.dropoutPlacement, triggerElementDimensions, viewPortDimensions);
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
        this.repositionRelativeToTriggerElement(new __WEBPACK_IMPORTED_MODULE_2__dropout_model__["g" /* DropoutViewPortDimensions */](event.target.innerWidth, event.target.innerHeight));
    };
    return CloukitDropoutContainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], CloukitDropoutContainerComponent.prototype, "dropoutTriggerElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _a || Object)
], CloukitDropoutContainerComponent.prototype, "dropoutBodyTemplateRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dropout_model__["d" /* DropoutPlacement */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dropout_model__["d" /* DropoutPlacement */]) === "function" && _b || Object)
], CloukitDropoutContainerComponent.prototype, "dropoutPlacement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CloukitDropoutContainerComponent.prototype, "dropoutZIndex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CloukitDropoutContainerComponent.prototype, "onResize", null);
CloukitDropoutContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cloukit-dropout-body',
        template: "\n    <div [ngStyle]=\"style\">\n      <ng-container *ngTemplateOutlet=\"dropoutBodyTemplateRef\"></ng-container>\n    </div>",
    })
], CloukitDropoutContainerComponent);

var _a, _b;
//# sourceMappingURL=dropout-container.component.js.map

/***/ }),

/***/ "../../../../../src/components/children/dropout-outlet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitDropoutOutletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        var self = this;
        self.dropoutService.dropoutComponentCreationRequests
            .subscribe(function (id) {
            self.dropoutService.createDropout(id, self.vc);
        });
    }
    return CloukitDropoutOutletComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('vc', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */]) === "function" && _a || Object)
], CloukitDropoutOutletComponent.prototype, "vc", void 0);
CloukitDropoutOutletComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cloukit-dropout-outlet',
        template: "\n    <div style=\"position:relative;\">\n      <ng-container #vc></ng-container>\n    </div>",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_dropout_service__["a" /* DropoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dropout_service__["a" /* DropoutService */]) === "function" && _b || Object])
], CloukitDropoutOutletComponent);

var _a, _b;
//# sourceMappingURL=dropout-outlet.component.js.map

/***/ }),

/***/ "../../../../../src/components/dropout.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitDropoutDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dropout_service__ = __webpack_require__("../../../../../src/components/services/dropout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropout_model__ = __webpack_require__("../../../../../src/components/dropout.model.ts");
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
        this.cloukitDropoutTrigger = __WEBPACK_IMPORTED_MODULE_3__dropout_model__["e" /* DropoutTrigger */].ONMOUSEOVER;
        this.cloukitDropoutPlacement = __WEBPACK_IMPORTED_MODULE_3__dropout_model__["d" /* DropoutPlacement */].DOWN_LEFT;
        this.cloukitDropoutActive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    CloukitDropoutDirective.prototype._doActivate = function () {
        var request = new __WEBPACK_IMPORTED_MODULE_3__dropout_model__["a" /* DropoutComponentCreationRequest */]();
        request.triggerElement = this.viewContainerRef.element.nativeElement;
        request.template = this.cloukitDropout;
        request.placement = this.cloukitDropoutPlacement;
        request.zIndex = this.cloukitDropoutZIndex;
        // FIXME: Calculate OutsideClick: template.elementRef.nativeElement.offsetHeight
        this.dropoutRef = this.dropoutService.requestDropoutCreation(request);
        this.cloukitDropoutActive.emit(true);
    };
    CloukitDropoutDirective.prototype._doDeactivate = function () {
        this.dropoutService.destroyComponent(this.dropoutRef);
        this.dropoutRef = undefined;
        this.cloukitDropoutActive.emit(false);
    };
    CloukitDropoutDirective.prototype.ngOnInit = function () {
        var self = this;
        if (self.cloukitDropoutClose instanceof __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]) {
            self.cloukitDropoutClose.subscribe(function () {
                self._doDeactivate();
            });
        }
    };
    CloukitDropoutDirective.prototype.activateClick = function () {
        if (this.cloukitDropoutTrigger === __WEBPACK_IMPORTED_MODULE_3__dropout_model__["e" /* DropoutTrigger */].ONCLICK) {
            if (this.dropoutRef === undefined) {
                this._doActivate();
            }
            else {
                this._doDeactivate();
            }
        }
    };
    CloukitDropoutDirective.prototype.activate = function () {
        if (this.cloukitDropoutTrigger === __WEBPACK_IMPORTED_MODULE_3__dropout_model__["e" /* DropoutTrigger */].ONMOUSEOVER) {
            this._doActivate();
        }
    };
    CloukitDropoutDirective.prototype.deactivate = function () {
        if (this.cloukitDropoutTrigger === __WEBPACK_IMPORTED_MODULE_3__dropout_model__["e" /* DropoutTrigger */].ONMOUSEOVER) {
            this._doDeactivate();
        }
    };
    return CloukitDropoutDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cloukitDropout'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _a || Object)
], CloukitDropoutDirective.prototype, "cloukitDropout", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cloukitDropoutTrigger'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__dropout_model__["e" /* DropoutTrigger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dropout_model__["e" /* DropoutTrigger */]) === "function" && _b || Object)
], CloukitDropoutDirective.prototype, "cloukitDropoutTrigger", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cloukitDropoutClose'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]) === "function" && _c || Object)
], CloukitDropoutDirective.prototype, "cloukitDropoutClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cloukitDropoutPlacement'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__dropout_model__["d" /* DropoutPlacement */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dropout_model__["d" /* DropoutPlacement */]) === "function" && _d || Object)
], CloukitDropoutDirective.prototype, "cloukitDropoutPlacement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cloukitDropoutZIndex'),
    __metadata("design:type", Number)
], CloukitDropoutDirective.prototype, "cloukitDropoutZIndex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], CloukitDropoutDirective.prototype, "cloukitDropoutActive", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CloukitDropoutDirective.prototype, "activateClick", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('focusin'),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CloukitDropoutDirective.prototype, "activate", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('focusout'),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CloukitDropoutDirective.prototype, "deactivate", null);
CloukitDropoutDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[cloukitDropout]',
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_dropout_service__["a" /* DropoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dropout_service__["a" /* DropoutService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */]) === "function" && _f || Object])
], CloukitDropoutDirective);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dropout.directive.js.map

/***/ }),

/***/ "../../../../../src/components/dropout.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DropoutPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DropoutTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DropoutComponentRefId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropoutComponentCreationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DropoutContainerCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DropoutViewPortDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DropoutTriggerElementDimensions; });
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

/**
 * Dimensons of the trigger element in pixels
 */
var DropoutTriggerElementDimensions = (function () {
    function DropoutTriggerElementDimensions(_x, _y, _width, _height) {
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
    }
    DropoutTriggerElementDimensions.from = function (htmlElement) {
        return new DropoutTriggerElementDimensions(htmlElement.offsetLeft, htmlElement.offsetTop, htmlElement.offsetWidth, htmlElement.offsetHeight);
    };
    return DropoutTriggerElementDimensions;
}());

//# sourceMappingURL=dropout.model.js.map

/***/ }),

/***/ "../../../../../src/components/dropout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitDropoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
    return CloukitDropoutModule;
}());
CloukitDropoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__dropout_directive__["a" /* CloukitDropoutDirective */], __WEBPACK_IMPORTED_MODULE_4__children_dropout_outlet_component__["a" /* CloukitDropoutOutletComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dropout_directive__["a" /* CloukitDropoutDirective */], __WEBPACK_IMPORTED_MODULE_5__children_dropout_container_component__["a" /* CloukitDropoutContainerComponent */], __WEBPACK_IMPORTED_MODULE_4__children_dropout_outlet_component__["a" /* CloukitDropoutOutletComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_dropout_service__["a" /* DropoutService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__children_dropout_container_component__["a" /* CloukitDropoutContainerComponent */]],
    })
], CloukitDropoutModule);

//# sourceMappingURL=dropout.module.js.map

/***/ }),

/***/ "../../../../../src/components/services/dropout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
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




var DropoutService = (function () {
    function DropoutService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        /** Holds references to all ComponentRefs with a automatically generated id */
        this._dropoutComponents = new Map();
        /** list of creation requests that will get created async by the outlet */
        this._dropoutComponentCreationRequests = new Map();
        /** subscribe to this to be notified of componentCreationRequests */
        this.dropoutComponentCreationRequests = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    DropoutService.prototype.generateUuid = function () {
        var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
        return "" + s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
    };
    DropoutService.prototype.requestDropoutCreation = function (request) {
        var self = this;
        var id = new __WEBPACK_IMPORTED_MODULE_2__dropout_model__["b" /* DropoutComponentRefId */](this.generateUuid());
        self._dropoutComponentCreationRequests.set(id, request);
        self.dropoutComponentCreationRequests.next(id);
        return id;
    };
    /** CALLED FROM OUTLET! */
    DropoutService.prototype.createDropout = function (id, viewContainerRef) {
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
        dropoutRef.instance.repositionRelativeToTriggerElement(new __WEBPACK_IMPORTED_MODULE_2__dropout_model__["g" /* DropoutViewPortDimensions */](window.innerWidth, window.innerHeight));
        self._dropoutComponentCreationRequests.delete(id);
        self._dropoutComponents.set(id, dropoutRef);
        return id;
    };
    DropoutService.prototype.destroyComponent = function (id) {
        if (id !== undefined) {
            var component = this._dropoutComponents.get(id);
            component.destroy();
            this._dropoutComponents.delete(id);
        }
    };
    return DropoutService;
}());
DropoutService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]) === "function" && _a || Object])
], DropoutService);

var _a;
//# sourceMappingURL=dropout.service.js.map

/***/ }),

/***/ "../../../../../src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<cloukit-dropout-outlet></cloukit-dropout-outlet>\n<div style=\"padding:30px;display:flex;\">\n  <div style=\"flex:1;\">\n    column 1 dummy text\n  </div>\n  <div style=\"flex:2;\">\n    <ng-template #myModal1>\n      <div class=\"demoModal1\">\n        I am a nice dropdown thingy or whatever ...\n        <br><br>\n        <button\n          type=\"button\"\n          class=\"demoButton\"\n          (click)=\"closeModal1()\"\n        >You can close me from the inside</button>\n      </div>\n    </ng-template>\n    <div style=\"text-align: right\">\n      <button\n        class=\"demoButton\"\n        [cloukitDropout]=\"myModal1\"\n        [cloukitDropoutClose]=\"myModal1Close\"\n        [cloukitDropoutTrigger]=\"DropoutTrigger.ONCLICK\"\n        [cloukitDropoutPlacement]=\"DropoutPlacement.LEFT_TOP\"\n        [cloukitDropoutZIndex]=\"500\"\n        (cloukitDropoutActive)=\"dropout1Active=$event\"\n      >\n        <svg style=\"width:20px\" viewBox=\"0 0 512 512\">\n          <g stroke=\"none\" fill=\"#ffffff\" fill-rule=\"evenodd\">\n            <polygon\n              [attr.points]=\"dropout1Active ? icon.down : icon.right\"\n            ></polygon>\n          </g>\n        </svg>\n        Click me to show Dropdown\n      </button>\n    </div>\n\n    <br>\n    <br>\n    <br>\n\n    <ng-template #demoTooltip>\n      <div class=\"demoTooltipCenter\">A traditional german sausage</div>\n    </ng-template>\n    There is a thing called\n    <span\n      class=\"tooltipTrigger\"\n      [cloukitDropout]=\"demoTooltip\"\n      [cloukitDropoutPlacement]=\"DropoutPlacement.UP_CENTER\"\n    >\n      Bratwurst\n    </span>\n    which you should know. Hover the\n    <span\n      class=\"tooltipTrigger\"\n      [cloukitDropout]=\"demoTooltip\"\n      [cloukitDropoutPlacement]=\"DropoutPlacement.DOWN_CENTER\"\n    >\n      Bratwurst\n    </span>\n    to see onmouseover dropout.\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemoComponent = (function () {
    function DemoComponent() {
        // Make enums available in template
        this.DropoutPlacement = __WEBPACK_IMPORTED_MODULE_2__index__["b" /* DropoutPlacement */];
        this.DropoutTrigger = __WEBPACK_IMPORTED_MODULE_2__index__["c" /* DropoutTrigger */];
        this.icon = {
            down: '254.4375 476.3125 463.515625 239.902344 45.359375 239.902344',
            right: '158 38.2109375 423.109375 256.902344 158 475.59375',
        };
        this.dropout1Active = false;
        this.myModal1Close = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    DemoComponent.prototype.closeModal1 = function () {
        this.myModal1Close.next(true);
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'demo',
        template: __webpack_require__("../../../../../src/demo/demo.component.html"),
        styles: [
            ".demoModal1 {\n      font-family: sans-serif;\n      padding: 10px;\n      width: 400px;\n      height: 200px;\n      border: 3px solid #68c1ff;\n      background-color: #A4E3FE;\n      color: #333;\n    }",
            ".demoButton { \n      background-color:#710ECC;\n      color:#fff;\n      border:1px solid #9e0eff;\n      outline:0;\n      padding:6px;\n      font-size:1rem;\n      cursor: pointer;\n    }",
            ".demoTooltipCenter {\n      background-color:#A4E3FE;\n      color:#333;\n      border:0;\n      padding:4px;\n      font-size:0.8rem;\n      transform: translate(-50%, 0);\n    }",
            ".tooltipTrigger {\n      color:#710ECC;\n      cursor: help;\n    }",
        ],
    }),
    __metadata("design:paramtypes", [])
], DemoComponent);

//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DemoModule = (function () {
    function DemoModule() {
    }
    return DemoModule;
}());
DemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__demo_component__["a" /* DemoComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__demo_component__["a" /* DemoComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__index__["a" /* CloukitDropoutModule */]],
        providers: [],
        bootstrap: []
    })
], DemoModule);

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dropout_module__ = __webpack_require__("../../../../../src/components/dropout.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_dropout_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dropout_model__ = __webpack_require__("../../../../../src/components/dropout.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components_dropout_model__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__components_dropout_model__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_services_dropout_service__ = __webpack_require__("../../../../../src/components/services/dropout.service.ts");
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

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
     *
     * @param {DropoutPlacement} placement
     * @param {DropoutTriggerElementDimensions} triggerElementDimensions
     * @param {DropoutViewPortDimensions} viewPortDimensions
     * @returns {DropoutContainerCoordinates}
     */
    DropoutPositioningHelper.calculate = function (placement, triggerElementDimensions, viewPortDimensions) {
        var ret = new __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["c" /* DropoutContainerCoordinates */]();
        var vAutoLeftRight = function () {
            if (triggerElementDimensions.y < viewPortDimensions.height * 0.5) {
                ret.top = triggerElementDimensions.y + triggerElementDimensions.height;
            }
            else {
                ret.bottom = (-1) * triggerElementDimensions.y;
            }
        };
        var leftRightVAuto = function () {
            if (triggerElementDimensions.y < viewPortDimensions.height * 0.5) {
                ret.top = triggerElementDimensions.y;
            }
            else {
                ret.bottom = (-1) * (triggerElementDimensions.y + triggerElementDimensions.height);
            }
        };
        var hAuto = function () {
            if (triggerElementDimensions.x < viewPortDimensions.width * 0.5) {
                ret.left = triggerElementDimensions.x + triggerElementDimensions.width;
            }
            else {
                ret.right = viewPortDimensions.width - triggerElementDimensions.x;
            }
        };
        if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].DOWN_LEFT) {
            ret.left = triggerElementDimensions.x;
            ret.top = triggerElementDimensions.y + triggerElementDimensions.height;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].DOWN_RIGHT) {
            ret.right = viewPortDimensions.width - triggerElementDimensions.x - triggerElementDimensions.width;
            ret.top = triggerElementDimensions.y + triggerElementDimensions.height;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].UP_LEFT) {
            ret.left = triggerElementDimensions.x;
            ret.bottom = (-1) * triggerElementDimensions.y;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].UP_RIGHT) {
            ret.right = viewPortDimensions.width - triggerElementDimensions.x - triggerElementDimensions.width;
            ret.bottom = (-1) * triggerElementDimensions.y;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].VAUTO_LEFT) {
            ret.left = triggerElementDimensions.x;
            vAutoLeftRight();
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].VAUTO_RIGHT) {
            ret.right = viewPortDimensions.width - triggerElementDimensions.x - triggerElementDimensions.width;
            vAutoLeftRight();
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].DOWN_CENTER) {
            ret.left = triggerElementDimensions.x + triggerElementDimensions.width / 2;
            ret.top = triggerElementDimensions.y + triggerElementDimensions.height;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].UP_CENTER) {
            ret.left = triggerElementDimensions.x + triggerElementDimensions.width / 2;
            ret.bottom = (-1) * (triggerElementDimensions.y);
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].VAUTO_CENTER) {
            ret.left = triggerElementDimensions.x + triggerElementDimensions.width / 2;
            vAutoLeftRight();
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].LEFT_TOP) {
            ret.right = viewPortDimensions.width - triggerElementDimensions.x;
            ret.top = triggerElementDimensions.y;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].LEFT_BOTTOM) {
            ret.right = viewPortDimensions.width - triggerElementDimensions.x;
            ret.bottom = (-1) * (triggerElementDimensions.y + triggerElementDimensions.height);
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].LEFT_VAUTO) {
            ret.right = viewPortDimensions.width - triggerElementDimensions.x;
            leftRightVAuto();
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].RIGHT_TOP) {
            ret.left = triggerElementDimensions.x + triggerElementDimensions.width;
            ret.top = triggerElementDimensions.y;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].RIGHT_BOTTOM) {
            ret.left = triggerElementDimensions.x + triggerElementDimensions.width;
            ret.bottom = (-1) * (triggerElementDimensions.y + triggerElementDimensions.height);
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].RIGHT_VAUTO) {
            ret.left = triggerElementDimensions.x + triggerElementDimensions.width;
            leftRightVAuto();
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].LEFT_CENTER) {
            ret.right = viewPortDimensions.width - triggerElementDimensions.x;
            ret.top = triggerElementDimensions.y + triggerElementDimensions.height / 2;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].RIGHT_CENTER) {
            ret.left = triggerElementDimensions.x + triggerElementDimensions.width;
            ret.top = triggerElementDimensions.y + triggerElementDimensions.height / 2;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].HAUTO_CENTER) {
            hAuto();
            ret.top = triggerElementDimensions.y + triggerElementDimensions.height / 2;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].FIX_TOP_LEFT) {
            ret.top = 0;
            ret.left = 0;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].FIX_TOP_RIGHT) {
            ret.top = 0;
            ret.right = 0;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].FIX_BOTTOM_LEFT) {
            ret.bottom = (-1) * viewPortDimensions.height;
            ret.left = 0;
        }
        else if (placement === __WEBPACK_IMPORTED_MODULE_0__components_dropout_model__["d" /* DropoutPlacement */].FIX_BOTTOM_RIGHT) {
            ret.bottom = (-1) * viewPortDimensions.height;
            ret.right = 0;
        }
        return ret;
    };
    return DropoutPositioningHelper;
}());

//# sourceMappingURL=dropout-positioning-helper.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map