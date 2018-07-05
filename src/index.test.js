import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
// fs = file system
// it says interact with the file system using node

describe('our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    //when we call jsdom there is an asynchronous call that occurs here
    //we have to set up our test to be async
    //to do that, we pass the parameter 'done'
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        // below we define the jsdom environment
        // the callback fct is run after jsdom hhas pulled index in the memory
        // nota: the test may be async because of the callback here
        jsdom.env(index, function(err, window) {
            //here we have a virtual dom in memory
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!");
            done(); // here we tell mocha that our test is done and then it will run the expect and report the results after it sees done()
            window.close(); //free up memory when we created in memory dom
        });
    });
});