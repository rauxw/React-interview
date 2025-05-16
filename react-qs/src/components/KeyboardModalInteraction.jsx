import { useEffect, useRef, useState } from "react";

function KeyboardModalInteraction() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  function handleModalOpen() {
    setOpen((prev) => !prev);
  }

  function handleConfirmModal() {
    setConfirm((prev) => !prev);
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      } else if (event.key === "Enter" && open) {
        handleConfirmModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl"> Keyboard Modal</h1>
      <button
        className="m-5 p-3 bg-slate-200 border rounded hover:bg-slate-500 hover:text-white hover:cursor-pointer"
        onClick={handleModalOpen}
      >
        Open Modal
      </button>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40"></div>
          <div
            ref={modalRef}
            className="fixed top-1/2 left-1/2 z-50 w-full max-w-md bg-white rounded shadow-lg  text-center transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex bg-sky-200 justify-between p-3">
              <header className=" text-3xl font-semibold rounded-1xl">
                Modal Title
              </header>
              <button
                onClick={handleModalOpen}
                className=" pt-1 pb-1 pl-2 pr-2 bg-slate-200 border rounded hover:bg-slate-500 hover:text-white hover:cursor-pointer"
              >
                X
              </button>
            </div>
            <p className="mt-2 mb-2 text-xl">Modal Content</p>
            <footer className="bg-sky-200 text-2xl font-semibold rounded-1xl">
              Modal Footer
            </footer>
            <div className="mt-2 flex justify-evenly">
              <button
                onClick={handleModalOpen}
                className="mb-1 mt-1 pt-1 pb-1 pl-2 pr-2 bg-slate-200 border rounded hover:bg-slate-500 hover:text-white hover:cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={handleConfirmModal}
                className=" mb-1 mt-1pt-1 pb-1 pl-2 pr-2 bg-slate-200 border rounded hover:bg-slate-500 hover:text-white hover:cursor-pointer"
              >
                Confirm
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default KeyboardModalInteraction;
