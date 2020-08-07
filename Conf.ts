import {Config} from 'protractor';

export let config: Config = {
  framework: 'custom',
  frameworkPath: "protractor-cucumber-framework",
  capabilities: {
    browserName: 'chrome'
  },

  specs: [ 'Features\Login.feature' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  noGlobals: true,

  cucumberOpts:{
    compiler: "ts:ts-node/register",
    strict:true,
    format: ["pretty"],
    require: ['Stepdefinitions\Stepdef.ts']
    },

   
        beforeLaunch()
        {
            require("ts-node").register({
                project: "tsconfig.json"
            })
        },
    
    
  

  
};