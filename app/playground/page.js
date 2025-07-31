import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import PageHeader from "@/components/PageHeader";
import Select from "@/components/Select";
import TransactionItem from "@/components/TransactionItem";
import TransactionItemSummary from "@/components/TransactionItemSummary";
import Trend from "@/components/Trend";

function PlaygroundPage() {
  return (
    <main className="space-y-8 mb-44">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">Page header</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div>
          <PageHeader />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="flex space-x-8">
          <Trend type="Income" amount={1000} prevAmount={900} />
          <Trend type="Expenses" amount={12000} prevAmount={10000} />
          <Trend type="Investments" amount={7000} prevAmount={11000} />
          <Trend type="Savings" amount={500} prevAmount={1000} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Transaction Summary</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <TransactionItem
            type="Income"
            category="Salary"
            description="Monthly Salary"
            amount={2000}
          />
          <TransactionItem
            type="Expenses"
            category="Food"
            description="Groceries and going out to eat"
            amount={80}
          />
          <TransactionItem
            type="Investments"
            description="Investments in Microsoft stocks"
            amount={9000}
          />
          <TransactionItem
            type="Savings"
            description="Monthly Savings for children"
            amount={500}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">
          Transaction Summary + Transaction Item
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <TransactionItemSummary date="27-05-2024" amount={3500} />
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />

          <TransactionItem
            type="Income"
            category="Salary"
            description="Monthly Salary"
            amount={2000}
          />
          <TransactionItem
            type="Expenses"
            category="Food"
            description="Groceries and going out to eat"
            amount={80}
          />
          <TransactionItem
            type="Investments"
            description="Investments in Microsoft stocks"
            amount={9000}
          />
          <TransactionItem
            type="Savings"
            description="Monthly Savings for children"
            amount={500}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Buttons</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-x-4">
          <Button>Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>

          <Button size="xs">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="lg">Hello</Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-1">Your name</Label>
            <Input type="text" placeholder="Type something in here" />
          </div>

          <div>
            <Label className="mb-1">City</Label>
            <Select>
              <option value="">London</option>
              <option value="">Kampala</option>
              <option value="">Belfast</option>
            </Select>
          </div>

          <div className="flex items-center">
            <Input type="checkbox" id="terms" />

            <Label htmlFor="terms" className="ml-2">
              Accept terms
            </Label>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PlaygroundPage;

/*
import PageHeader from "@/components/PageHeader";
import TransactionItem from "@/components/TransactionItem";
import TransactionItemSummary from "@/components/TransactionItemSummary";
import Trend from "@/components/Trend";

const Section = ({ title, children }) => (
  <div>
    <h2 className="mb-4 text-lg font-mono">{title}</h2>
    <hr className="mb-4 border-gray-200 dark:border-gray-800" />
    {children}
  </div>
);

const transactionItems = [
  {
    type: "Income",
    category: "Salary",
    description: "Monthly Salary",
    amount: 2000,
  },
  {
    type: "Expenses",
    category: "Food",
    description: "Groceries and going out to eat",
    amount: 80,
  },
  {
    type: "Investments",
    description: "Investments in Microsoft stocks",
    amount: 9000,
  },
  {
    type: "Savings",
    description: "Monthly Savings for children",
    amount: 500,
  },
];

const trendItems = [
  { type: "Income", amount: 1000, prevAmount: 900 },
  { type: "Expenses", amount: 12000, prevAmount: 10000 },
  { type: "Investments", amount: 7000, prevAmount: 11000 },
  { type: "Savings", amount: 500, prevAmount: 1000 },
];

function PlaygroundPage() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl mt-8">Playground</h1>

      <Section title="Page header">
        <PageHeader />
      </Section>

      <Section title="Trend">
        <div className="flex space-x-8">
          {trendItems.map((item) => (
            <Trend key={item.type} {...item} />
          ))}
        </div>
      </Section>

      <Section title="Transaction Summary">
        <div className="space-y-4">
          {transactionItems.map((item, index) => (
            <TransactionItem key={index} {...item} />
          ))}
        </div>
      </Section>

      <Section title="Transaction Summary + Transaction Item">
        <div className="space-y-4">
          <TransactionItemSummary date="27-05-2024" amount={3500} />
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />
          {transactionItems.map((item, index) => (
            <TransactionItem key={index} {...item} />
          ))}
        </div>
      </Section>
    </main>
  );
}

export default PlaygroundPage;
*/

/*
import PageHeader from "@/components/PageHeader";
import TransactionItem from "@/components/TransactionItem";
import TransactionItemSummary from "@/components/TransactionItemSummary";
import Trend from "@/components/Trend";

// Reusable Section Component
function Section({ title, children }) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-mono">{title}</h2>
      <hr className="mb-4 border-gray-200 dark:border-gray-800" />
      {children}
    </div>
  );
}

export default function PlaygroundPage() {
  const trends = [
    { type: "Income", amount: 1000, prevAmount: 900 },
    { type: "Expenses", amount: 12000, prevAmount: 10000 },
    { type: "Investments", amount: 7000, prevAmount: 11000 },
    { type: "Savings", amount: 500, prevAmount: 1000 },
  ];

  const transactions = [
    {
      type: "Income",
      category: "Salary",
      description: "Monthly Salary",
      amount: 2000,
    },
    {
      type: "Expenses",
      category: "Food",
      description: "Groceries and going out to eat",
      amount: 80,
    },
    {
      type: "Investments",
      description: "Investments in Microsoft stocks",
      amount: 9000,
    },
    {
      type: "Savings",
      description: "Monthly Savings for children",
      amount: 500,
    },
  ];

  return (
    <main className="space-y-8">
      <h1 className="text-4xl mt-8">Playground</h1>

      <Section title="Page header">
        <PageHeader />
      </Section>

      <Section title="Trend">
        <div className="flex space-x-8">
          {trends.map((trend, index) => (
            <Trend
              key={index}
              type={trend.type}
              amount={trend.amount}
              prevAmount={trend.prevAmount}
            />
          ))}
        </div>
      </Section>

      <Section title="Transaction Summary">
        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <TransactionItem
              key={index}
              type={tx.type}
              category={tx.category}
              description={tx.description}
              amount={tx.amount}
            />
          ))}
        </div>
      </Section>

      <Section title="Transaction Summary + Transaction Item">
        <div className="space-y-4">
          <TransactionItemSummary date="27-05-2024" amount={3500} />
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />
          {transactions.map((tx, index) => (
            <TransactionItem
              key={`combo-${index}`}
              type={tx.type}
              category={tx.category}
              description={tx.description}
              amount={tx.amount}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
*/
