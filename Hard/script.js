'use strict';

function security(name, ssn){
    const pii = {
        name: name,
        ssn: ssn,
        publicInfo: function() {
          console.log(name);
        }
     
    };
    console.log(pii.publicInfo());
};

security("Roberto", 2345)
