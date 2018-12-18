import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule, InputsModule } from 'ng-uikit-pro-standard';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestMDService = /** @class */ (function () {
    function TestMDService() {
    }
    TestMDService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    TestMDService.ctorParameters = function () { return []; };
    /** @nocollapse */ TestMDService.ngInjectableDef = defineInjectable({ factory: function TestMDService_Factory() { return new TestMDService(); }, token: TestMDService, providedIn: "root" });
    return TestMDService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestMDComponent = /** @class */ (function () {
    function TestMDComponent() {
    }
    /**
     * @return {?}
     */
    TestMDComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TestMDComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-testMD',
                    template: "\n    <p>\n      test-md works!\n    </p>\n  "
                }] }
    ];
    TestMDComponent.ctorParameters = function () { return []; };
    return TestMDComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestInputComponent = /** @class */ (function () {
    function TestInputComponent() {
    }
    /**
     * @return {?}
     */
    TestInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TestInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-test-input',
                    template: "<div class=\"md-form\">\n  <input mdbInputDirective type=\"text\" id=\"form1\" class=\"form-control\">\n  <label for=\"form1\" class=\"\">Example label</label>\n</div>",
                    styles: [""]
                }] }
    ];
    TestInputComponent.ctorParameters = function () { return []; };
    return TestInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestMDModule = /** @class */ (function () {
    function TestMDModule() {
    }
    TestMDModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        WavesModule,
                        InputsModule
                    ],
                    declarations: [TestMDComponent, TestInputComponent],
                    exports: [TestMDComponent, TestInputComponent]
                },] }
    ];
    return TestMDModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TestMDService, TestMDComponent, TestMDModule, TestInputComponent as ɵa };

//# sourceMappingURL=test-md.js.map