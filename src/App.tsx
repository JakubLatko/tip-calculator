import "./scss/index.scss";
import { useState } from "react";

function App() {
	const [bill, setBill] = useState(0);
	const [tip, setTip] = useState("0");
	const [numberOfPeople, setNumberOfPeople] = useState(0);
	const [billError, setBillError] = useState(false);
	const [numberOfPeopleError, setNumberOfPeopleError] = useState(false);
	let tipPerPerson: number = 0;
	let totalPerPerson: number = 0;

	let tipNumber: number = 0;
	if (tip.includes("%")) {
		tipNumber = Number(tip.slice(0, -1)) / 100;
	} else {
		tipNumber = Number(tip) / 100;
	}

	if (
		bill !== 0 &&
		bill >= 1 &&
		tip !== "0" &&
		tip !== "" &&
		numberOfPeople !== 0 &&
		numberOfPeople >= 1
	) {
		const total = bill + bill * tipNumber;
		tipPerPerson = (total - bill) / numberOfPeople;
		totalPerPerson = total / numberOfPeople;
	}

	const customTip = document.getElementById("custom") as HTMLInputElement;
	return (
		<>
			<h1>
				<img src="./images/logo.svg" alt="Splitter" />
			</h1>
			<main>
				<form action="">
					<section className="formSection">
						<label className="mainLabel" htmlFor="bill">
							Bill{" "}
							<span
								className={`errorBill error ${
									billError ? "show" : null
								}`}>
								Can't be zero or less
							</span>
						</label>
						<div className="mainInputWrapper">
							<span>
								<img src="./images/icon-dollar.svg" alt="" />
							</span>
							<input
								type="number"
								name="bill"
								id="bill"
								min={0}
								max={10000}
								onChange={(e) => {
									setBill(Number(e.target.value));
									setBillError(false);
									if (
										Number(e.target.value) === 0 ||
										Number(e.target.value) < 0
									) {
										setBillError(true);
									}
								}}
							/>
						</div>
						<h2 className="selectTip">Select Tip %</h2>
						<div className="percentagesWrapper">
							<div className="percentageComponent">
								<input
									type="radio"
									name="percentage"
									id="5%"
									className="removeActive"
									onChange={(e) => {
										setTip(e.target.id);
										customTip.value = "";
									}}
								/>
								<label htmlFor="5%">5%</label>
							</div>
							<div className="percentageComponent">
								<input
									type="radio"
									name="percentage"
									id="10%"
									className="removeActive"
									onChange={(e) => {
										setTip(e.target.id);
										customTip.value = "";
									}}
								/>
								<label htmlFor="10%">10%</label>
							</div>
							<div className="percentageComponent">
								<input
									type="radio"
									name="percentage"
									id="15%"
									className="removeActive"
									onChange={(e) => {
										setTip(e.target.id);
										customTip.value = "";
									}}
								/>
								<label htmlFor="15%">15%</label>
							</div>
							<div className="percentageComponent">
								<input
									type="radio"
									name="percentage"
									id="25%"
									className="removeActive"
									onChange={(e) => {
										setTip(e.target.id);

										customTip.value = "";
									}}
								/>
								<label htmlFor="25%">25%</label>
							</div>
							<div className="percentageComponent">
								<input
									type="radio"
									name="percentage"
									id="50%"
									className="removeActive"
									onChange={(e) => {
										setTip(e.target.id);
										customTip.value = "";
									}}
								/>
								<label htmlFor="50%">50%</label>
							</div>
							<div className="customPercentageComponent">
								<input
									type="number"
									name="percentage"
									id="custom"
									placeholder="custom"
									onChange={(e) => {
										setTip(e.target.value);
										const removeActives =
											document.querySelectorAll(
												".removeActive"
											);
										removeActives.forEach((element) => {
											element.removeAttribute("checked");
										});
									}}
								/>
							</div>
						</div>
						<label htmlFor="people" className="mainLabel">
							Number of people{" "}
							<span
								className={`errorNumberOfPeople error ${
									numberOfPeopleError ? "show" : null
								}`}>
								Can't be zero or less
							</span>
						</label>
						<div className="mainInputWrapper numberOfPeople">
							<span>
								<img src="./images/icon-person.svg" alt="" />
							</span>
							<input
								type="number"
								name="people"
								id="people"
								min={1}
								max={10000}
								onChange={(e) => {
									setNumberOfPeople(Number(e.target.value));
									setNumberOfPeopleError(false);
									if (
										Number(e.target.value) === 0 ||
										Number(e.target.value) < 0
									) {
										setNumberOfPeopleError(true);
									}
								}}
							/>
						</div>
					</section>
					<section className="resultsSection">
						<div className="resultsComponent">
							<div>
								<h3>Tip Amount</h3>
								<h4>/ person</h4>
							</div>
							<h2>
								${!tipPerPerson ? 0 : tipPerPerson.toFixed(2)}
							</h2>
						</div>
						<div className="resultsComponent">
							<div>
								<h3>Total</h3>
								<h4>/ person</h4>
							</div>
							<h2>
								$
								{!totalPerPerson
									? 0
									: totalPerPerson.toFixed(2)}
							</h2>
						</div>
						<button
							onClick={() => {
								setBill(0);
								setNumberOfPeople(0);
								setTip("");
							}}
							type="reset">
							Reset
						</button>
					</section>
				</form>
			</main>
		</>
	);
}

export default App;
