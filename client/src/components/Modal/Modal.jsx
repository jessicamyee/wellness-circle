import "./Modal.css";

export default function Modal(props) {
  const { modalShowing, setModalShowing, handleDelete } = props;
  return (
    <div className="manual-modal">
      <p>Are you sure you want to delete this entry?</p>
      <button
        id="delete-entry-confirm-btn"
        onClick={() => {
          handleDelete(modalShowing);
          setModalShowing(false);
        }}
      >
        Yes, please delete
      </button>
      <div>
        <button
          id="delete-entry-cancel-btn"
          onClick={() => setModalShowing(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
