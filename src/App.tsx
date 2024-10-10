
import './scss/index.scss'

function App() {
  
  return (
    <>
    <h1>
    Spli<br />
    tter
    </h1>
    <main>
      <form action="">
       <section className="formSection">
        <label htmlFor="">Bill</label>
        <div>
          <span><img src="./images/icon-dollar.svg" alt="" /></span>
        </div>
       </section>


      <section className='resultsSection'>
        <div>
          <div>
            <h3>Tip Amount</h3>
            <h4>/ person</h4>
          </div>
          <h2>$4.27</h2>
        </div>
        <div>
          <div>
            <h3>Total</h3>
            <h4>/ person</h4>
          </div>
          <h2>$32.79</h2>
        </div>
        <button type='reset'>Reset</button>
      </section>
      </form>
        Bill
Select Tip %
5%
10%
15%
25%
50%
Custom

Number of People

Tip Amount
/ person

Total
/ person

Reset
    </main></>
  )
}

export default App
