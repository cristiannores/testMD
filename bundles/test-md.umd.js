(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-uikit-pro-standard')) :
    typeof define === 'function' && define.amd ? define('test-md', ['exports', '@angular/core', '@angular/common', 'ng-uikit-pro-standard'], factory) :
    (factory((global['test-md'] = {}),global.ng.core,global.ng.common,global.ngUikitProStandard));
}(this, (function (exports,i0,common,ngUikitProStandard) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestMDService = /** @class */ (function () {
        function TestMDService() {
        }
        TestMDService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        TestMDService.ctorParameters = function () { return []; };
        /** @nocollapse */ TestMDService.ngInjectableDef = i0.defineInjectable({ factory: function TestMDService_Factory() { return new TestMDService(); }, token: TestMDService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            ngUikitProStandard.WavesModule,
                            ngUikitProStandard.InputsModule
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

    exports.TestMDService = TestMDService;
    exports.TestMDComponent = TestMDComponent;
    exports.TestMDModule = TestMDModule;
    exports.ɵa = TestInputComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=test-md.umd.js.map