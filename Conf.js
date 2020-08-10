"use strict";
exports.__esModule = true;
exports.config = void 0;
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions:{
            args:[
                "--headless"
            ]
        },
    },
    specs: ['./Features/*.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true,
    
        
    
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
       // format: ["pretty"],
        require: ['./Stepdefinitions/Stepdef.ts',
                    './Hooks/hook.ts'
                    ],
        tag: ["@smoke"]
    },
    beforeLaunch: function () {
        require("ts-node").register({
            project: "tsconfig.json"
        });
    }
};
