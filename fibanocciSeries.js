let a = 0, b = 1;
for (let i = 0; i < 100; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}