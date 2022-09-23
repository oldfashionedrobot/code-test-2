const baseApiUrl = "https://run.mocky.io/v3/";

export function getAllGroups() {
  return fetch(`${baseApiUrl}9e343425-c47c-4c7f-a1ac-972c099be0ed`)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => error);
}

export function getGroupById(groupId) {
  return fetch(`${baseApiUrl}${groupId}`)
    .then((resp) => resp.json())
    .then((data) => data);
}
