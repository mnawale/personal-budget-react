import React from 'react';
import PieChart from '../Chart/PieChart'
import Donut from '../Temp/Donut';


function HomePage() {
  return (
  <main className="container center">
    <section className="page-area">
      <article className="text-box">
        <header>
          <h1>Stay on track</h1>
        </header>
        <p>Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
        </p>
      </article>
      <article className="text-box">
        <header>
          <h1>Alerts</h1>
        </header>
        <p>What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
        </p>
      </article>

      <article className="text-box">
        <header>
          <h1>Results</h1>
        </header>
        <p>People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
        </p>
      </article>

      <article className="text-box">
        <header>
          <h1>Chart</h1>
        </header>
        <div className="chart">
        <PieChart/>
        </div>
      </article>
      <article className="text-box">
        <header>
          <h1>D3 Chart</h1>
        </header>
        <Donut></Donut>
      </article>
      
    </section>    
  </main>
             

  );
}

export default HomePage;