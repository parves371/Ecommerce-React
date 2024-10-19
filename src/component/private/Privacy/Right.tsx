interface Item {
  id: number;
  title: string;
  description: string;
  date: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "First Item",
    description: "Description for the first item",
    date: "2024-01-01",
  },
  {
    id: 2,
    title: "Second Item",
    description: "Description for the second item",
    date: "2024-01-02",
  },
  // Add more items as needed
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item: Item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <small>{item.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
