import { getAllGroups, getGroupById } from "./api-helpers";

const MOCK_DATA = [
  {
    id: "a9f6a4b7-d03c-4a45-b64b-791e054f36b8",
    label: "Group by Function"
  },
  {
    id: "f1b01b57-3147-476a-a632-0c10ad2a3c1a",
    label: "Group by Role"
  }
];

describe("getAllGroups", () => {
  let data;

  beforeEach(async () => {
    jest.spyOn(global, "fetch");

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => MOCK_DATA
    });

    data = await getAllGroups();
  });

  it("loads all groups from the proper endpoint", () => {
    expect(global.fetch).toHaveBeenCalledWith(
      "https://run.mocky.io/v3/9e343425-c47c-4c7f-a1ac-972c099be0ed"
    );
  });

  it("returns the json result from the API call", () => {
    expect(data).toBe(MOCK_DATA);
  });
});

describe("getGroupById", () => {
  let data;
  const idParam = "a9f6a4b7-d03c-4a45-b64b-791e054f36b8";

  beforeEach(async () => {
    jest.spyOn(global, "fetch");

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => MOCK_DATA
    });

    data = await getGroupById(idParam);
  });

  it("queries for the group specified by the id argument", () => {
    expect(global.fetch).toHaveBeenCalledWith(
      `https://run.mocky.io/v3/${idParam}`
    );
  });

  it("returns the json result from the API call", () => {
    expect(data).toBe(MOCK_DATA);
  });
});
