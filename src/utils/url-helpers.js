export function getSearchParam(param) {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(param);
}

export function setSearchParam(param, value) {
  const url = new URL(window.location);
  url.searchParams.set(param, value);
  window.history.pushState({}, "", url);
}
