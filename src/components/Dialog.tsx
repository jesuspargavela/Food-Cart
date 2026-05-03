import "./dialog.css";

type DialogType = {
  ref: React.Ref<HTMLDialogElement>;
  children: React.ReactNode;
};

function Dialog({ ref, children }: DialogType) {
  return (
    <dialog
      ref={ref}
      className="top-[2%] left-[35%] rounded-md p-10 w-140 h-fit"
      closedby="any"
    >
      {children}
    </dialog>
  );
}

export default Dialog;
