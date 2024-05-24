import {Fragment, useState} from "react";

interface Props {
    items: string[]
    heading: string
    onSelectedItem: (item: string) => void
}

function ListGroup({items, heading, onSelectedItem}: Props) {


    let [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <Fragment>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={item} className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        onClick={() => {
                            setSelectedIndex(index)
                            onSelectedItem(item)
                        }}>
                        {item}
                    </li>
                ))}
            </ul>
        </Fragment>)
}

export default ListGroup