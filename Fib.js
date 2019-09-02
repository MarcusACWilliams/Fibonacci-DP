
//5:42 9/2/2019 --> 6:03 9/2/2019 --> 21 min 42 sec
class Fibonacci {

    //  f(0) = 0
    //  f(1) = 1
    //  f(2) = f(0) + f(1) = 1

    constructor (n) {
        this.n = n;
        this.nth = 0;
        this.nth_1 = 1;
        this.nth_2 = 1; 

        this.calculateFib(this.n);
    }

    calculateFib(n) {
        
        //Base Cases
        if(n < 3){
            if(n < 2){
                if(n < 1){
                    return 0
                }
                return 1
            }
            return 1
        }

        this.nth_1 = 1;
        this.nth_2 = 1;

        var currentNth = 3;

        while(currentNth <= n) {
            //Calculate Fib
            this.nth = this.nth_1 + this.nth_2;

            this.nth_2 = this.nth_1;
            this.nth_1 = this.nth;

            currentNth++;

        }

        console.log('The ' + n + 'th Fibonacci number is: ' + this.nth);
        //return this.nth;

    }
}

var fib = new Fibonacci(6); // The 6th Fibonacci number is: 8

fib.calculateFib(10); // The 10th Fibonacci number is: 55
fib.calculateFib(14); // The 14th Fibonacci number is: 377
fib.calculateFib(15); // The 15th Fibonacci number is: 610