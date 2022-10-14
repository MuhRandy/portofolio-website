import { Tab } from "@headlessui/react";

export default function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab className="ui-selected:font-medium ui-not-selected:bg-white ui-not-selected:text-black">
          Tab 1
        </Tab>
        <Tab className="ui-selected:font-medium ui-not-selected:bg-white ui-not-selected:text-black">
          Tab 2
        </Tab>
        <Tab className="ui-selected:font-medium ui-not-selected:bg-white ui-not-selected:text-black">
          Tab 3
        </Tab>
        {/* ...  */}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  );
}
