import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

interface IComingSoonModal {
  isOpen: boolean;
  onClose?: any;
}

const ComingSoonModal = ({ isOpen, onClose }: IComingSoonModal) => {
  const [isOpenComingSoonModal, setIsOpenComingSoonModal] = useState<boolean>(false);

  useEffect(() => {
    setIsOpenComingSoonModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    onClose(isOpenComingSoonModal);
  }, [isOpenComingSoonModal]);

  return (
    <Transition appear show={isOpenComingSoonModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpenComingSoonModal(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-5xl transform overflow-hidden bg-white rounded-2xl shadow-xl transition-all">
                <button
                  type="button"
                  className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 bg-white rounded-full"
                  onClick={() => setIsOpenComingSoonModal(false)}
                >
                  <Icon icon="heroicons-outline:x" className="text-2xl" />
                </button>
                <div className="w-full bg-black py-20 px-4">
                  <Image
                    src="/images/gl-logo-white.svg"
                    width="200"
                    height="200"
                    alt="Logo"
                    className="w-full max-w-[386px] h-auto mx-auto"
                  />
                </div>
                <div className="w-full max-w-[530px] pt-6 lg:pt-8 pb-10 lg:pb-16 px-4 mx-auto">
                  <h2 className="mb-6 text-3xl lg:text-5xl font-bold">We’re launching soon!</h2>
                  <p className="mb-8 text-base lg:text-xl text-gl-8">
                    We’re currently working hard on this page. Subscribe to our Newsletter to get
                    update when it will be live.
                  </p>
                  <div className="flex items-center justify-center w-full space-x-3.5 mt-6">
                    <input
                      type="text"
                      placeholder="Enter email"
                      className="w-full lg:w-[338px] max-w-full px-4 py-3 rounded-lg border border-gl-3"
                    />
                    <button
                      type="button"
                      className="flex items-center justify-center px-4 py-3 bg-gl-1 hover:bg-gl-7 border border-gl-1 hover:border-gl-7 rounded-lg text-white hover:text-white transition-all"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ComingSoonModal;
