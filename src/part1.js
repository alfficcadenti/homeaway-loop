for (i = 100; i <= 200; i++) {
    var rem3 = i % 3;
    var rem4 = i % 4;

    if (rem3==0 && rem4==0) {
      console.log("HomeAway");
    }
    else if (rem4==0) {
      console.log("Away");
    }
    else if (rem3==0) {
      console.log("Home");
    }
    else {
      console.log(i);
    }
  }
