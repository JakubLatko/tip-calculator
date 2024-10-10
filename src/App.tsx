import "./scss/index.scss";

function App() {
	return (
		<>
			<h1>
				<img src="./images/logo.svg" alt="" />
			</h1>
			<main>
				<form action="">
					<section className="formSection">
						<label className="mainLabel" htmlFor="bill">
							Bill
						</label>
						<div className="mainInputWrapper">
							<span>
								<img src="./images/icon-dollar.svg" alt="" />
							</span>
							<input type="number" name="bill" id="bill" />
						</div>
						<h2 className="selectTip">Select Tip %</h2>
						<div className="percentagesWrapper">
							<div className="percentageComponent">
								<input type="radio" name="percentage" id="5%" />
								<label htmlFor="5%">5%</label>
							</div>
							<div className="percentageComponent">
								<input
									type="radio"
									name="percentage"
									id="10%"
								/>
								<label htmlFor="10%">10%</label>
							</div>
							<div className="percentageComponent">
								<input
									type="radio"
									name="percentage"
									id="15%"
								/>
								<label htmlFor="15%">15%</label>
							</div>
							<div className="percentageComponent">
								<input
									type="radio"
									name="percentage"
									id="25%"
								/>
								<label htmlFor="25%">25%</label>
							</div>
							<div className="percentageComponent">
								<input
									type="radio"
									name="percentage"
									id="50%"
								/>
								<label htmlFor="50%">50%</label>
							</div>
							<div className="customPercentageComponent">
								<input
									type="number"
									name="percentage"
									id="custom"
									placeholder="custom"
								/>
							</div>
						</div>
						<label htmlFor="people" className="mainLabel">
							Number of people
						</label>
						<div className="mainInputWrapper numberOfPeople">
							<span>
								<img src="./images/icon-person.svg" alt="" />
							</span>
							<input type="number" name="people" id="people" />
						</div>
					</section>
					<section className="resultsSection">
						<div className="resultsComponent">
							<div>
								<h3>Tip Amount</h3>
								<h4>/ person</h4>
							</div>
							<h2>$4.27</h2>
						</div>
						<div className="resultsComponent">
							<div>
								<h3>Total</h3>
								<h4>/ person</h4>
							</div>
							<h2>$32.79</h2>
						</div>
						<button type="reset">Reset</button>
					</section>
				</form>
			</main>
		</>
	);
}

export default App;
