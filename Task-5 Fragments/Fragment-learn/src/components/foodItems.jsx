import Items from "./Items";

const FootdItemss = ({ items }) => {
  //   let footItems = ["daal", "rooti", "rice", "milk", "dahi"];
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Items key={items} footItems={items}></Items>
      ))}
    </ul>
  );
};

export default FootdItemss;
