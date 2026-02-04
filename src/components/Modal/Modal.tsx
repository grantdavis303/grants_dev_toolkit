import './Modal.css'

interface Props {
  setIsModalOpen: (value: boolean) => void;
}

function Modal({ setIsModalOpen }: Props) {
  return (
    <>
      <div className='modal' id='modal'>
        <h1> Modal </h1>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </div>
      <div className='modal-overlay'>
      </div>
    </>
  )
}

export default Modal;