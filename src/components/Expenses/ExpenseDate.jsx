import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" }),
    day = props.date.toLocaleString("en-US", { day: "numeric" }),
    year = props.date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{year}</div>
      <div className="expense-date__year">{day}</div>
    </div>
  );
};

export default ExpenseDate;
