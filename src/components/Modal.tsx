import ReactModal from 'react-modal';
import { type Address } from '../types';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    opacity: '1',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    // height: '300px',
  },
};

interface ModalProps {
  address: Address;
  isOpen: boolean;
  closeModal: () => void;
}
export default function Modal({ address, isOpen, closeModal }: ModalProps) {
  ReactModal.setAppElement('#root');

  return (
    <div className="">
      <ReactModal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName="fixed inset-0 bg-[#fff] bg-opacity-30 "
        // portalClassName="opacity-100"
        contentLabel="Example Modal"
      >
        <table>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{address.id}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{'0x' + parseInt(address.address).toString(16).toUpperCase()}</td>
            </tr>
            <tr>
              <td>Platform</td>
              <td>{address.platform}</td>
            </tr>
            <tr>
              <td>Pid</td>
              <td>{address.pid}</td>
            </tr>
            <tr>
              <td>byte</td>
              <td>{address.byte}</td>
            </tr>
            <tr>
              <td>size</td>
              <td>{address.size}</td>
            </tr>
            <tr>
              <td>length</td>
              <td>{address.length}</td>
            </tr>
            <tr>
              <td>scr</td>
              <td>{address.scr}</td>
            </tr>

            <tr>
              <td>name</td>
              <td>{address.name}</td>
            </tr>
            <tr>
              <td>description</td>
              <td>{address.description}</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="mt-2">
          <button type="button" className="float-right rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" onClick={closeModal}>Close</button>
        </div>
      </ReactModal>
    </div>
  );
}
