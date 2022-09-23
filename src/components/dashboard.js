import { useState } from "react";
import DashboardCard from "./dashboard-card";
import styles from "./dashboard.module.css";

export default function Dashboard({ group }) {
  const [activeTab, setActiveTab] = useState("gender");

  let tabs, dashContent;

  if (group != null) {
    tabs = ["gender", "race"].map((label) => (
      <button
        key={label}
        className={`${styles.tab} ${activeTab === label ? styles.active : ""}`}
        onClick={() => setActiveTab(label)}
      >
        {label}
      </button>
    ));

    dashContent = Object.entries(group.data[activeTab]).map(([key, data]) => {
      return (
        <DashboardCard key={key} dataKey={key} dataObj={data}></DashboardCard>
      );
    });
  }

  return (
    <>
      <div className={styles.tabWrapper}>{tabs}</div>
      <div className={styles.dashboard}>{dashContent}</div>
    </>
  );
}
