import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers.'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    // const [selected, setSelected] = useState(options[0]); // Color dropdown.
    // const [showDropdown, setShowDropdown] = useState(true); // Color dropdown.

    return (
        <div>
            <Translate />
        </div>
    );
    // <Search />

    // <Accordion items={items} />

    // <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
    // {showDropdown ?
    //     <div>
    //         <Dropdown
    //             label="Select a Color"
    //             selected={selected}
    //             onSelectedChange={setSelected}
    //             options={options}
    //         />
    //         <div style={{color: selected.value}}>This text is {selected.value}</div>
    //     </div>
    //     : null
    // }
};