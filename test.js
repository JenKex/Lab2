var a, b;

a = 0;
for (var count = 0; count < 10; count++) {
  a = a + 1;
  if (a == 1) {
    b = 'Rött';
    console.log(b)
  } else {
    if (a == 2) {
      b = 'Gult';
      console.log(b)
    } else {
      if (a == 3) {
        b = 'Grönt';
        console.log(b)
        a = 0;
      }
    }
  }
}
