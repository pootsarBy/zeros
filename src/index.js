module.exports = function zeros(expression) {
    let num = 0, five = 0, two = 0;
    let fact = expression.split("*");
    let n = fact.length;
    console.log (fact);
    for (let i = 0; i < n; i++) {
         if (fact[i].indexOf('!!') == -1) { 
            num = +fact[i].replace('!', '') //
            for (let j = num; j > 0; j--) {
                num = j;
                while (num % 5 == 0) {
                    num /= 5;
                    five++;
                }
                while (num % 2 == 0) {
                    num /= 2;
                    two++;
                }
            }
        }
        else{
            num = +fact[i].replace('!!', '') //
        for (let j = num; j > 0; j-=2) {
            num = j;
            while (num % 5 == 0) {
                num /= 5;
                five++;
            }
            while (num % 2 == 0) {
                num /= 2;
                two++;
            }
        }
        }
    }
    const zeroKol = two > five ? five : two;
    return zeroKol;
}
