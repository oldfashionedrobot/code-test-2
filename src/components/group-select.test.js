/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { fireEvent, render } from "@testing-library/react";
import GroupSelect from "./group-select";

const MOCK_GROUPS = [
  {
    id: "a9f6a4b7-d03c-4a45-b64b-791e054f36b8",
    label: "Group by Function"
  },
  {
    id: "f1b01b57-3147-476a-a632-0c10ad2a3c1a",
    label: "Group by Role"
  }
];
const [GROUP1, GROUP2] = MOCK_GROUPS;

it("renders a list of options for each passed in group", () => {
  const { container } = render(
      <GroupSelect groups={MOCK_GROUPS}></GroupSelect>
    ),
    [label, opt1, opt2] = container.querySelectorAll("button li");

  expect(label).toHaveTextContent("Change Group");
  expect(opt1).toHaveTextContent(GROUP1.label);
  expect(opt2).toHaveTextContent(GROUP2.label);
});

it("renders an empty state before a group is selected", () => {
  const { container } = render(
      <GroupSelect groups={MOCK_GROUPS}></GroupSelect>
    ),
    btnText = container.querySelector("button > span");

  expect(btnText).toHaveTextContent("Select Group");
});

it("renders the name of the currently selected group", () => {
  const { container } = render(
      <GroupSelect groups={MOCK_GROUPS} currentGroup={GROUP2}></GroupSelect>
    ),
    btnText = container.querySelector("button > span");

  expect(btnText).toHaveTextContent(GROUP2.label);
});

it("calls onSelect with a group id when clicking a group option", () => {
  const mockCb = jest.fn(),
    { container } = render(
      <GroupSelect
        groups={MOCK_GROUPS}
        currentGroup={GROUP2}
        onSelect={(id) => mockCb(id)}
      ></GroupSelect>
    ),
    [_, opt1, opt2] = container.querySelectorAll("button li");

  fireEvent.click(opt1);
  expect(mockCb).toHaveBeenCalledWith(GROUP1.id);

  fireEvent.click(opt2);
  expect(mockCb).toHaveBeenCalledWith(GROUP2.id);
});
