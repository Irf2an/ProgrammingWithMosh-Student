//import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";


function App() {
  /*
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

const handleSelectItem = (item: string) => {
  console.log(item);
}

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
  */
 
  //Use a state component to only show the alert when the button is clicked
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello <span>World</span></Alert>}
      <Button color='secondary' onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
