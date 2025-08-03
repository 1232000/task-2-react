import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Modal({ isOpen, setIsOpen, imageSrc }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center">

      <div className="fixed inset-0 bg-blue-400/40" aria-hidden="true"  />

      <Dialog.Panel className= "size-[600px] text-center z-50 translate-y-24">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Selected"
            className="w-full h-auto mb-4"
          />
        )}
      </Dialog.Panel>
    </Dialog>
  );
}
