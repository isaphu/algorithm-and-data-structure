function isPrime(n) {
    let divisor = 2;

    while (n > 2) {
        if (n % divisor == 0) {
            return false;
        } else {
            divisor++
        }
    }
    return true;
}

console.log(isPrime(3));
