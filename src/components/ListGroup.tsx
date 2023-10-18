import { MouseEvent, useState } from "react";
// { items: [], heading: string }
// Props are like functional argument 
// and treat it as immutable
interface Props {
  //typescript feature
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Each component will have their own state
  // Hook (data or state that can change over time) -> mutable -> react will re-render the component and update the dom
  // Similar to local variables
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //     index          function

  // JSX: JavaScript XML
  // Allows us to easily create dynamic content
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
