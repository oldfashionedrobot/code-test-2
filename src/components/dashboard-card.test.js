import { render, screen } from "@testing-library/react";
import DashboardCard from "./dashboard-card";

const MOCK_DATA = {
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
};

it("renders an empty state when no props are passed", () => {
  render(<DashboardCard />);
  expect(screen.getByText(/No Data/i)).toBeInTheDocument();
});

it("renders content for budget data", () => {
  const { container } = render(
      <DashboardCard dataKey="budget" dataObj={MOCK_DATA.budget} />
    ),
    { label, data } = MOCK_DATA.budget;

  expect(screen.getByText(label)).toBeInTheDocument();
  expect(container).toHaveTextContent(
    `${data.value} minimum recommended budget to reduce pay equity gap`
  );
});

it("renders content for employee comparison data", () => {
  const { container } = render(
      <DashboardCard
        dataKey="employeeComparison"
        dataObj={MOCK_DATA.employeeComparison}
      />
    ),
    { label, data } = MOCK_DATA.employeeComparison;

  expect(screen.getByText(label)).toBeInTheDocument();
  expect(container).toHaveTextContent(
    `${data.label} make up ${data.value} of employees`
  );
});

it("renders content for pay equity gap data", () => {
  const { container } = render(
      <DashboardCard dataKey="payEquityGap" dataObj={MOCK_DATA.payEquityGap} />
    ),
    { label, data } = MOCK_DATA.payEquityGap;

  expect(screen.getByText(label)).toBeInTheDocument();
  expect(container).toHaveTextContent(
    `${data.minority.label} earn ${data.minority.value} for every ${data.majority.value} earned by comparable ${data.majority.label}`
  );
});
