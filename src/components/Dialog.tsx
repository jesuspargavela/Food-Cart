import "./dialog.css";

type DialogType = {
  children: React.ReactNode;
  isDialogOpen: boolean;
};

function Dialog({ children, isDialogOpen }: DialogType) {
  return (
    <>
      <dialog
        className="top-[35%] left-[35%] max-h-[80vh] w-140 overflow-y-auto rounded-md p-10"
        open={isDialogOpen}
      >
        {children}
      </dialog>
    </>
  );
}

export default Dialog;
