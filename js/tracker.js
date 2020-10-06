
let totalBudget, currentBalance;
function addmoney() {
	totalBudget = parseInt(document.getElementById('budgets').innerHTML)
	currentBalance = parseInt(document.getElementById("balance").innerHTML)
	let moneytobudget = parseInt(document.getElementById("amount").value)
	// alert(moneytobudget)
	if (moneytobudget == "" || isNaN(moneytobudget)) {
		alert("Wrong Entry!!!")
	}else {
		totalBudget += moneytobudget
		currentBalance += moneytobudget
		document.getElementById("budgets").innerHTML = totalBudget;
		document.getElementById("balance").innerHTML = currentBalance;
	}
}
function addexpense() {
	totalBudget = parseInt(document.getElementById('budgets').innerHTML)
	currentBalance = parseInt(document.getElementById("balance").innerHTML)
	var expenseName = document.getElementById("expenseName").value
	var expenseAmt = parseInt(document.getElementById("xpenseAmt").value)
	if (expenseName == "") {
		alert("Wrong Entry!!")
	}else if (expenseAmt == "" || isNaN(expenseAmt)) {
		alert("Wrong Entry!!")
	}else {
		if (expenseAmt > currentBalance) {
			alert("Account In Red!!!")
		}else {
			currentBalance -= expenseAmt
			document.getElementById("balance").innerHTML = currentBalance
			var para = document.createElement("P");
			para.innerHTML = `Expense Name: ${expenseName} <br> Expense amount: ${expenseAmt}`;
			document.getElementById("Addxpense").appendChild(para)
		}
	}
}