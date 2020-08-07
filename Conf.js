"use strict";
exports.__esModule = true;
exports.config = void 0;
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['D:\\Swapnil Workspace\\TypescriptPractice\\CucumberFramework\\Features\\NumberOperations.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true,
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
       // format: ["pretty"],
        require: ['D:\\Swapnil Workspace\\TypescriptPractice\\CucumberFramework\\Stepdefinitions\\Stepdef.ts',
                    'D:\\Swapnil Workspace\\TypescriptPractice\\CucumberFramework\\Hooks\\hook.ts'
                    ]
    },
    beforeLaunch: function () {
        require("ts-node").register({
            project: "tsconfig.json"
        });
    }
};
