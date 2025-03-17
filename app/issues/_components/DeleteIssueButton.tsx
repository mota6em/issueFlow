"use client";
import { Spinner } from "@/app/components";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";
const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const [deleting, setDeleting] = React.useState(false);
  const handleDelete = async () => {
    try {
      setIsOpen(false);
      setDeleting(true);
      await axios.delete(`/api/issues/${issueId}`);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setDeleting(false);
      console.log(error);
      setIsOpen(false);
    }
  };
  return (
    <>
      <button
        className="btn btn-error w-full"
        disabled={deleting}
        onClick={() => setIsOpen(true)}
      >
        {deleting ? "Deleting..." : " Delete Issue"} {!deleting && <MdDelete />}{" "}
        {deleting && <Spinner />}
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
            <div>
              <button
                className="btn btn-info me-2"
                onClick={() => setIsOpen(false)}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                disabled={deleting}
                className="btn btn-error"
                onClick={() => handleDelete()}
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteIssueButton;
