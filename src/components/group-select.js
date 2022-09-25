import { useState } from "react";
import styles from "./group-select.module.css";

export default function GroupSelect({ groups, currentGroup, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(onOff) {
    setIsOpen(onOff);
  }

  function handleSelect(group) {
    if (onSelect !== undefined) {
      onSelect(group.id);
    }
  }

  let items = [];
  if (groups !== undefined) {
    items = groups.map((group) => {
      return (
        <li
          key={group.id}
          className={`${styles.selectItem} ${
            currentGroup && currentGroup.label === group.label
              ? styles.active
              : ""
          }`}
          onClick={(e) => handleSelect(group)}
        >
          {group.label}
        </li>
      );
    });
  }

  return (
    <div>
      <button
        className={`${styles.groupSelect} ${isOpen ? styles.active : ""}`}
        onFocus={(e) => handleToggle(true)}
        onBlur={(e) => handleToggle(false)}
      >
        <span>{currentGroup ? currentGroup.label : "Select Group"}</span>
        <ul className={styles.selectMenu}>
          <li className={styles.selectLabel}>Change Group</li>
          {items}
        </ul>
      </button>
    </div>
  );
}
