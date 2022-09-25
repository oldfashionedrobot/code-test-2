import styles from "./dashboard-card.module.css";

export default function DashboardCard({ dataKey, dataObj }) {
  let cardContent;

  if (!dataObj || !dataKey) {
    return (
      <div className={styles.card}>
        <p>No Data</p>
      </div>
    );
  }

  switch (dataKey) {
    case "budget":
      cardContent = (
        <p>
          <strong>{dataObj.data.value}</strong> minimum recommended budget to
          reduce pay equity gap
        </p>
      );
      break;
    case "payEquityGap":
      const { minority, majority } = dataObj.data;
      cardContent = (
        <p>
          {minority.label} earn <strong>{minority.value}</strong> for every{" "}
          <strong>{majority.value}</strong> earned by comparable{" "}
          {majority.label}
        </p>
      );
      break;
    case "employeeComparison":
      const { label, value } = dataObj.data;
      cardContent = (
        <p>
          {label} make up <strong>{value}</strong> of employees
        </p>
      );
      break;
    default:
      cardContent = <p>No Data</p>;
  }

  return (
    <div className={styles.card}>
      <label>{dataObj.label}</label>
      {cardContent}
    </div>
  );
}
