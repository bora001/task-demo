import * as Dialog from "@radix-ui/react-dialog";
import "./modal.css";
import { ReactNode } from "react";

const ModalBasis = ({
  trigger,
  title,
  content,
  onClose,
  open,
}: {
  trigger: ReactNode;
  title: ReactNode;
  content: ReactNode;
  onClose?: () => void;
  open: boolean;
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle flex items-center gap-2">
            {title}
          </Dialog.Title>
          {content}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalBasis;
