import Filter from "./Filter";

const Modal = ({ show, handleClose, data }) => {
  if (!show) return null;
  console.log(data);
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <h2>Cerca film per nome</h2>
        </div>
      </div>
      <Filter data={data} />
    </>
  );
};

export default Modal;
