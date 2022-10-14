import { Tab } from "@headlessui/react";
import Content from "./Content";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Tab.Group>
      <Navbar />
      <Content />
    </Tab.Group>
  );
}

export default App;
