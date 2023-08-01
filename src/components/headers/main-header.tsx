import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify/react";

import ComingSoonModal from "../modals/coming-soon-modal";

import { scrollToId } from "@/utils/CommonUtils";

const headerProductsMenu = [
  {
    url: "/",
    label: "Nft Generator",
  },
  {
    url: "/",
    label: "Forms",
  },
  {
    url: "/",
    label: "Drops",
  },
  {
    url: "/",
    label: "Marketplace",
  },
  {
    url: "/",
    label: "Courses",
  },
];

const headerResourcesMenu = [
  {
    url: "/",
    label: "Blog",
  },
  {
    url: "/",
    label: "Join Our Community",
  },
  {
    url: "/",
    label: "Help Docs",
  },
];

const MainHeader = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const [isOpenComingSoonModal, setIsOpenComingSoonModal] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;

      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-10 w-full bg-white ${scrolling ? "scrolling" : ""} group`}
      >
        <div className="relative z-20 flex items-center justify-between w-full gl-container px-4 lg:px-6 mx-auto py-6 group-[.scrolling]:py-4 bg-white transition-all">
          <div className="flex items-center justify-center space-x-11">
            <Link href="/">
              <Image
                src="/images/logo-main.png"
                width="200"
                height="200"
                alt="Logo"
                className="w-24 lg:w-[150px] group-[.scrolling]:lg:w-34 h-auto transition-all"
              />
            </Link>
            <nav className="hidden lg:flex items-center justify-center space-x-4">
              {/* <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center justify-center space-x-2 px-4 py-2 bg-white hover:bg-gl-5 border border-transparent rounded-lg transition-all">
                    <span className="text-xl">Products</span>
                    <Icon icon="heroicons-outline:chevron-down" className="text-2xl" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-2xl bg-white border border-gl-3">
                      <div className="px-2 py-4">
                        {headerProductsMenu.map((productMenu, index: number) => {
                          return (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <Link href={productMenu.url}>
                                  <button
                                    type="button"
                                    className={`${
                                      active && "bg-gl-5"
                                    } flex w-full items-center rounded-md px-2 py-2 text-xl text-left whitespace-nowrap`}
                                  >
                                    {productMenu.label}
                                  </button>
                                </Link>
                              )}
                            </Menu.Item>
                          );
                        })}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              {/* <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center justify-center space-x-2 px-4 py-2 bg-white hover:bg-gl-5 border border-transparent rounded-lg transition-all">
                    <span className="text-xl">Resources</span>
                    <Icon icon="heroicons-outline:chevron-down" className="text-2xl" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-2xl bg-white border border-gl-3">
                      <div className="px-2 py-4">
                        {headerResourcesMenu.map((productMenu, index: number) => {
                          return (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <Link href={productMenu.url}>
                                  <button
                                    type="button"
                                    className={`${
                                      active && "bg-gl-5"
                                    } flex w-full items-center rounded-md px-2 py-2 text-xl text-left whitespace-nowrap`}
                                  >
                                    {productMenu.label}
                                  </button>
                                </Link>
                              )}
                            </Menu.Item>
                          );
                        })}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              <button
                type="button"
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-white hover:bg-gl-5 border border-transparent rounded-lg transition-all"
                onClick={() => scrollToId("section-faq")}
              >
                <span className="text-xl">FAQ</span>
              </button>
              {/* <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-white hover:bg-gl-5 border border-transparent rounded-lg transition-all">
                  <span className="text-xl">Pricing</span>
                </button> */}
            </nav>
          </div>
          <div className="hidden lg:flex items-center justify-center space-x-4">
            <button
              type="button"
              className="flex items-center justify-center px-8 group-[.scrolling]:px-6 py-3 group-[.scrolling]:py-2 bg-white hover:bg-gl-2 border border-gl-1 hover:border-gl-2 rounded-2xl text-gl-1 hover:text-white transition-all"
              onClick={() => setIsOpenComingSoonModal(true)}
            >
              <span className="text-xl">Log in</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center px-8 group-[.scrolling]:px-6 py-3 group-[.scrolling]:py-2 bg-gl-1 hover:bg-gl-7 border border-gl-1 hover:border-gl-7 rounded-2xl text-white hover:text-white transition-all"
              onClick={() => setIsOpenComingSoonModal(true)}
            >
              <span className="text-xl">Sign up</span>
            </button>
          </div>
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          >
            {isOpenMobileMenu ? (
              <Icon icon="heroicons-outline:x" className="text-2xl" />
            ) : (
              <Icon icon="heroicons-outline:menu" className="text-2xl" />
            )}
          </button>
        </div>
        <div
          className={`relative z-10 flex lg:hidden w-full h-screen ${
            isOpenMobileMenu ? "-mt-[83px] group-[.scrolling]:-mt-[67px]" : "-mt-[1200px]"
          } pt-[83px] px-4 transition-all`}
        >
          <div className="flex flex-col justify-between w-full pt-4 pb-9">
            <div className="divide-y">
              {/* <div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center justify-between w-full py-4">
                          <p className="text-xl font-medium">Products</p>
                          <Icon icon="heroicons-outline:chevron-down" className="text-2xl" />
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="pb-4">
                            <div className="flex flex-col space-y-2">
                              {headerProductsMenu.map((productMenu, index: number) => {
                                return (
                                  <Link
                                    key={index}
                                    href={productMenu.url}
                                    className="text-xl font-medium"
                                  >
                                    {productMenu.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div> */}
              {/* <div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center justify-between w-full py-4">
                          <p className="text-xl font-medium">Resources</p>
                          <Icon icon="heroicons-outline:chevron-down" className="text-2xl" />
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="pb-4">
                            <div className="flex flex-col space-y-2">
                              {headerResourcesMenu.map((productMenu, index: number) => {
                                return (
                                  <Link
                                    key={index}
                                    href={productMenu.url}
                                    className="text-xl font-medium"
                                  >
                                    {productMenu.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div> */}
              <div>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-4"
                  onClick={() => {
                    setIsOpenMobileMenu(false);
                    scrollToId("section-faq");
                  }}
                >
                  <p className="text-xl font-medium">FAQ</p>
                </button>
              </div>
              {/* <div>
                  <Link href="/">
                    <button className="flex items-center justify-between w-full py-4">
                      <p className="text-xl font-medium">Pricing</p>
                    </button>
                  </Link>
                </div> */}
            </div>
            <div className="w-full flex items-center justify-center space-x-4">
              <button
                type="button"
                className="flex-1 flex items-center justify-center px-8 py-3 bg-white hover:bg-gl-2 border border-gl-1 hover:border-gl-2 rounded-2xl text-gl-1 hover:text-white transition-all"
              >
                <span className="text-xl">Log in</span>
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center px-8 py-3 bg-gl-1 hover:bg-gl-1 border border-gl-1 hover:border-gl-1 rounded-2xl text-white hover:text-white transition-all"
              >
                <span className="text-xl">Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <ComingSoonModal
        isOpen={isOpenComingSoonModal}
        onClose={(close: any) => setIsOpenComingSoonModal(close)}
      />
    </>
  );
};

export default MainHeader;
