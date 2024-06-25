const calculate = () => {
  const bill = parseFloat(document.getElementById("Bill").value);
  const tip = parseFloat(document.getElementById("Tip").value);
  const total = document.getElementById("Total");
  
  if(isNaN(bill) || isNaN(tip))
    alert("Plz Enter the Number");

  let cal;
  cal = bill + (tip * bill) / 100;
  console.log(cal);

  total.innerHTML = "Rs " + cal.toFixed(2);
};
