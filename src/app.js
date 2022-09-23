import { useEffect, useState } from "react";
import { getAllGroups, getGroupById } from "./utils/api-helpers";
import { getSearchParam, setSearchParam } from "./utils/url-helpers";
import logo from "./img/syndio-logo.svg";

import Dashboard from "./components/dashboard";
import GroupSelect from "./components/group-select";

export default function App() {
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);

  useEffect(() => {
    const groupId = getSearchParam("group");
    if (groupId) {
      loadGroupById(groupId);
    }

    getAllGroups().then((data) => {
      setGroups(data);
    });
  }, []);

  function loadGroupById(groupId) {
    setSearchParam("group", groupId);
    getGroupById(groupId)
      .then(setCurrentGroup)
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <header>
        <img src={logo} alt="Syndio Logo"></img>
        <GroupSelect
          groups={groups}
          currentGroup={currentGroup}
          onSelect={(groupId) => loadGroupById(groupId)}
        ></GroupSelect>
      </header>
      <Dashboard group={currentGroup}></Dashboard>
    </div>
  );
}
