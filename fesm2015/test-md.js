import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule, InputsModule } from 'ng-uikit-pro-standard';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestMDService {
    constructor() { }
}
TestMDService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
TestMDService.ctorParameters = () => [];
/** @nocollapse */ TestMDService.ngInjectableDef = defineInjectable({ factory: function TestMDService_Factory() { return new TestMDService(); }, token: TestMDService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestMDComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestMDComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-testMD',
                template: `
    <p>
      test-md works!
    </p>
  `
            }] }
];
TestMDComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestInputComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-test-input',
                template: "<div class=\"md-form\">\n  <input mdbInputDirective type=\"text\" id=\"form1\" class=\"form-control\">\n  <label for=\"form1\" class=\"\">Example label</label>\n</div>",
                styles: [""]
            }] }
];
TestInputComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestMDModule {
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