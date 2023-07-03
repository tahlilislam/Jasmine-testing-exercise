
it('should calculate the monthly rate correctly', function () {
  // ...
 if(true) {
  const values = {
    amount: "a$$",
    years: "",
    rate: 4
  }
  expect(calculateMonthlyPayment(values)).toEqual("NaN");
 }
 if(true) {
  const values = {
    amount: 0,
    years: 10,
    rate: 4
  }
  expect(calculateMonthlyPayment(values)).toEqual("0.00");
 }
 if(true) {
  const values = {
    amount: 10000,
    years: 0,
    rate: 0
  }
  expect(calculateMonthlyPayment(values)).toEqual("NaN");
 }
 if(true) {
  const values = {
    amount: -10000,
    years: 10,
    rate: 4
  }
  expect(calculateMonthlyPayment(values)).toBeLessThan (0);
 }
 expect(calculateMonthlyPayment("abcde")).toEqual("NaN");
 expect(calculateMonthlyPayment("")).toEqual("NaN");
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 5000,
    years: 3,
    rate: 3.0
  }
  expect(calculateMonthlyPayment(values)).toEqual("1250.41");
});

