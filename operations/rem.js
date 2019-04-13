module.exports=(first,...args)=>{
    
        
        return args.reduce(function (agg,val){
            if (val==0){
                throw new RangeError("Attempted division by zero!");
            }
            else if (isNaN(val)){
                throw new RangeError("Attempted division by NAN!");
            }
            return agg%=val;
        },first);
    }
