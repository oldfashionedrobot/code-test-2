/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Dashboard from "./dashboard";
import DashboardCard from "./dashboard-card";

jest.mock("./dashboard-card", () => {
  return jest.fn(() => null);
});

const MOCK_GROUP = {
    id: "groupByFunction",
    label: "Group by Function",
    data: {
      gender: {
        payEquityGap: {
          label: "Pay Equity Gap",
          data: {
            minority: {
              label: "Women",
              value: "96¢"
            },
            majority: {
              label: "Men",
              value: "$1"
            }
          }
        },
        employeeComparison: {
          label: "Employees in Comparison",
          data: {
            label: "Women",
            value: "41%"
          }
        },
        budget: {
          label: "Budget",
          data: {
            value: "$235,000"
          }
        }
      },
      race: {
        payEquityGap: {
          label: "Pay Equity Gap",
          data: {
            minority: {
              label: "Hispanics",
              value: "86¢"
            },
            majority: {
              label: "Whites",
              value: "$1"
            }
          }
        },
        employeeComparison: {
          label: "Employees in Comparison",
          data: {
            label: "Hispanics",
            value: "21%"
          }
        },
        budget: {
          label: "Budget",
          data: {
            value: "$535,000"
          }
        }
      }
    }
  },
  { race: RACE_DATA, gender: GENDER_DATA } = MOCK_GROUP.data;

it("renders tabs for gender and race", () => {
  const { container } = render(<Dashboard group={MOCK_GROUP}></Dashboard>),
    [tab1, tab2] = container.querySelectorAll("button");

  expect(tab1).toHaveTextContent("gender");
  expect(tab2).toHaveTextContent("race");
});

it("renders dashboard cards for the selected tab", async () => {
  const { container } = render(<Dashboard group={MOCK_GROUP}></Dashboard>),
    [tab1, tab2] = container.querySelectorAll("button");

  // First render show Gender data
  await waitFor(() => expect(DashboardCard).toHaveBeenCalledTimes(3));

  expect(DashboardCard).toHaveBeenCalledWith(
    {
      dataKey: "payEquityGap",
      dataObj: GENDER_DATA.payEquityGap
    },
    {}
  );
  expect(DashboardCard).toHaveBeenCalledWith(
    {
      dataKey: "employeeComparison",
      dataObj: GENDER_DATA.employeeComparison
    },
    {}
  );
  expect(DashboardCard).toHaveBeenCalledWith(
    {
      dataKey: "budget",
      dataObj: GENDER_DATA.budget
    },
    {}
  );

  // change tab to "race"
  fireEvent.click(tab2);
  await waitFor(() => expect(DashboardCard).toHaveBeenCalledTimes(6));

  expect(DashboardCard).toHaveBeenCalledWith(
    {
      dataKey: "payEquityGap",
      dataObj: RACE_DATA.payEquityGap
    },
    {}
  );
  expect(DashboardCard).toHaveBeenCalledWith(
    {
      dataKey: "employeeComparison",
      dataObj: RACE_DATA.employeeComparison
    },
    {}
  );
  expect(DashboardCard).toHaveBeenCalledWith(
    {
      dataKey: "budget",
      dataObj: RACE_DATA.budget
    },
    {}
  );
});
