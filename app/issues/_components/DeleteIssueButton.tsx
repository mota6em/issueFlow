"use client";
import Link from "next/link";
import React from "react";
import { MdDelete } from "react-icons/md";
const DeleteIssueButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button className="btn btn-error w-full" onClick={() => setIsOpen(true)}>
        Delete Issue <MdDelete />
      </button>
      <dialog
        id="delete-modal"
        className={`modal w-full ${isOpen && "modal-open"}`}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Deletion</h3>
          <p className="py-4">
            Are you sure you want to delete this issue? This action cannot be
            undone.
          </p>
          <div className="modal-action ">
            {/* Close the modal */}
            <div method="dialog ">
              <button
                className="btn btn-info me-2"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <Link className="btn btn-error" href="/issues">
                Delete
              </Link>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteIssueButton;
