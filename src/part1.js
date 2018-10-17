function homeawayCounter() {
    for (var x = 100; x <= 200; x++) {
        if (x % 3 == 0 && x % 4 == 0) {
            console.log("HomeAway")
        } else
        if (x % 3 == 0) {
            console.log("Home")
        } else
        if (x % 4 == 0) {
            console.log("Away")
        } else
            console.log(x);
    }
}
homeawayCounter()
