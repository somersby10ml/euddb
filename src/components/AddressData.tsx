import { useEffect, useState } from 'react';
import Modal from './Modal';
import { type Address } from '../types';
import Menu from './Menu';
async function getData() {
  const response = await fetch('./api.json');
  return response.json();
}

export function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState<Address>();

  const [offset, setOffset] = useState<Address[]>([]);
  useEffect(() => {
    getData().then((data) => {
      setOffset(data);
    });
  }, []);

  const handleAddressClick = (address: Address) => {
    setSelectItem(address);
    setIsOpen(true);
  };
  return (
    <div className=" bg-gray-700 text-gray-300">
      <Menu />
      {selectItem && (
        <Modal address={selectItem} isOpen={modalIsOpen} closeModal={() => setIsOpen(false)} />
      )}

      <table className="w-full">
        <tbody>
          <tr>
            <td className="text-center">ID</td>
            <th>Address</th>
            <th>Version</th>
            <th>PID</th>
            <th>Byte</th>
            <th>Size</th>
            <th>Length</th>
            <th>Scr</th>
            <th>Name</th>
          </tr>
        </tbody>
        <tbody>
          {offset.map((item) => (
            <tr key={item.id} className="border-b border-gray-600 hover:cursor-pointer hover:bg-gray-600" onClick={() => handleAddressClick(item)}>
              <td className="p-2 text-center">{item.id}</td>
              <td className="text-center">{'0x' + parseInt(item.address).toString(16).toUpperCase()}</td>
              <td className="text-center">{item.version}</td>
              <td className="w-1 text-center">{item.pid}</td>
              <td className=" text-center">{item.byte}</td>
              <td className=" text-center">{item.size}</td>
              <td className="w-1 text-center">{item.length}</td>
              <td>{item.scr}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
