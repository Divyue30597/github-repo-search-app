import "./modal.css";
import closeIcon from "../assets/icon-close.svg";
import { useEffect } from "react";
import { useRef } from "react";

export function Modal({
  isActive,
  selectedData,
  setIsActive,
}: {
  isActive: boolean;
  selectedData: { name: string; description: string };
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isActive) {
        dialog.showModal();
      }
    }
    return () => {
      if (dialog) dialog.close();
    };
  }, [isActive]);

  return (
    <dialog ref={dialogRef}>
      <div className="modal-body">
        <div className="modal-head">
          <h2>{selectedData?.name}</h2>
          <picture>
            <img
              src={closeIcon}
              alt="Close"
              onClick={() => setIsActive(!isActive)}
              style={{ cursor: "pointer", textAlign: "right" }}
            />
          </picture>
        </div>
        <hr />
        <h3>Full Description:</h3>
        <p>{selectedData.description}</p>
      </div>
    </dialog>
  );
}
