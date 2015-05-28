describe("toRoman", function() {
  it("converts single-digit number requiring no subtraction numeral logic", function() {
    expect(toRoman(3)).to.equal("III");
  });


  it("converts a larger number taking into account more than three repeats", function() {
    expect(toRoman(9)).to.equal("IX");
  });
});
