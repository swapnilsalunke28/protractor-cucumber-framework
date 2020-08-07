
import { Before, After } from 'cucumber';

Before( (scenario) =>{
    console.log("Inside Before");
});

After( (scenario) =>{
    console.log("Inside After");
});