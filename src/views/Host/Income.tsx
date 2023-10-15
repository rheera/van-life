import IncomeGraph from "../../components/IncomeGraph";
import transactionsData from "../../assets/data/transactionsData";
import "../../scss/income.scss";

const Income = () => {
  const transactions = transactionsData.map((transaction) => (
    <div key={`transaction-${transaction.id}`} className="transaction">
      <h5>${transaction.amt}</h5>
      <p>{transaction.date}</p>
    </div>
  ));
  return (
    <section className="income">
      <h2>Income</h2>
      <div className="last-30-days">
        <p>
          last <span>30 days</span>
        </p>
      </div>
      <h4>$2,260</h4>

      <IncomeGraph />

      <div className="income__transactions">
        <div className="income__transaction__title">
          <h3>Your transactions (3)</h3>
          <div className="last-30-days">
            <p>
              last <span>30 days</span>
            </p>
          </div>
        </div>
        {transactions}
      </div>
    </section>
  );
};

export default Income;
