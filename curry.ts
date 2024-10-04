function sum(a: number, b: number) {
    console.log(a + b);
}

sum(1,2); /// sum(1)(2)

function curry(func: () => void) {

    return function curried(...args:any) {
        if(args.length >= func.length) {
            return func.apply(this, args)
        } else {
            return function(...args2:any) {
                return curried.apply(this, [...args,...args2])
            }
        }
    }
}

function sum(a) {
    let total = a;

    function innerSum(b) {
        total += b;
        return innerSum;
    }

    innerSum.toString = function() {
        return total;
    };

    return innerSum;
}


/*
Usage:

	•	You call sum with the initial value, and then continue chaining calls with the next values.
	•	The final call to console.log(sum(1)(2)(3)(4)(5)) prints the total sum of all the numbers.
*/ 