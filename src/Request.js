const fetch = require('node-fetch');
const FormData = require('form-data');

class Request{
    constructor(options){
        this.options = options;
    };
    
    async getJSON(){
        let json = await fetch(this.options.url,this.options.data)
        .then(res => res.json());
        
        return json;
       }
}
module.exports = Request;
