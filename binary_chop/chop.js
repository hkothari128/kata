class chop{
    constructor(array) {
        this.arr = array.sort();
    }
    find_iterative(a){
        var l = 0;
        var r = this.arr.length;
        
        while(l<r){
            var m = Math.floor((l+r)/2);
            
            if(a==this.arr[m]) return m+1;
            if(a < this.arr[m]){
                r = m;
            }
            else if(a > this.arr[m]){
                l = m+1;
            }
        }
        return -1;
    }

    find_recursive(arr,a,l,r){
        
        if(l>=r) return -1;
        
        var m = Math.floor((l+r)/2);
        // sconsole.log(a,l,r,m,arr[m])
        if(a == arr[m]) {
            while(m>0 && arr[m-1]==arr[m]) m--;
            return m+1;
        }
        if(a < arr[m])  return this.find_recursive(arr,a,l,m);
        if(a > arr[m])  return this.find_recursive(arr,a,m+1,r);
    }
}
module.exports = chop;