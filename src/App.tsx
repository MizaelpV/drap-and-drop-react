import { useState } from "react";
import { Reorder, useDragControls } from "framer-motion";

import { DragIcon } from "./components/DragIcon";
import "./App.css";

function App() {
  interface Item {
    id: number;
    name: string;
  }

  const initialItems: Item[] = [
    {
      id: 1,
      name: "🍔 Burger",
    },
    {
      id: 2,
      name: "🍕 Pizza",
    },
    {
      id: 3,
      name: "🍣 Sushi",
    },
    {
      id: 4,
      name: "🍜 Noodles",
    },
    {
      id: 5,
      name: "🌭 Hot dog",
    },
    {
      id: 6,
      name: "🍗 Chicken",
    },
    {
      id: 7,
      name: "🍟 Fries",
    },
  ];

  const [items, setItems] = useState(initialItems);

  const dragControls = useDragControls();

  const onReorder = (values: Item[]) => {
    console.log(values);
    setItems(values);
  };

  return (
    <Reorder.Group axis="y" values={items} onReorder={onReorder}>
      {items.map((item) => (
        <Reorder.Item key={item.id} value={item}>
          <div
            key={item.id}
            className="bg-white font-semibold rounded-lg text-black hover:cursor-pointer my-3 px-4 h-[100px] w-[450px] flex justify-between items-center "
          >
            <div className="">{item.name}</div>
            <DragIcon dragControls={dragControls} />
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default App;
