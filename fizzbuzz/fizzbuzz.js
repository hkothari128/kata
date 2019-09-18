class fizzbuzz{
    constructor(){
    this.rules = {
        3:'fizz',
        5:'buzz',
        7:'tazz'
    }
}

    setNumber(str){
        if (!isNaN(str) && Number.isInteger(parseFloat(str))) {
            this.number = parseInt(str);
            return true;
        }
        return false;
        
    }

    getFizz(str)
    {
        if(!this.setNumber(str)) return false;
        return this.number % 3==0? "fizz": "";

    }
    getBuzz(str)
    {
        if(!this.setNumber(str)) return false;
        return this.number % 5==0? "buzz": "";

    }

    patternPrinter(str)
    {
        if(!this.setNumber(str)) return false;
        var res = "";
        for (var n in this.rules){
            if (this.number % n == 0) res += this.rules[n];
        }
        return res;
    }

    
}
module.exports = fizzbuzz;