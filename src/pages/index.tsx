import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const Home = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    gsap.to("#nft-1", {
      x: "-150%",
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.to("#nft-2", {
      x: "150%",
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.to("#nft-3", {
      x: "-150%",
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <main>
      <header className="relative z-50 gl-container px-4 lg:px-6 mx-auto bg-white">
        <div className="relative z-20 flex items-center justify-between py-6 bg-white">
          <div className="flex items-center justify-center space-x-11">
            <Link href="/">
              <Image
                src="/images/logo-main.png"
                width="200"
                height="200"
                alt="Logo"
                className="w-24 lg:w-[150px] h-auto"
              />
            </Link>
            <nav className="hidden lg:flex items-center justify-center space-x-4">
              <Menu as="div" className="relative">
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
              </Menu>
              <Menu as="div" className="relative">
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
              </Menu>
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-white hover:bg-gl-5 border border-transparent rounded-lg transition-all">
                <span className="text-xl">FAQ</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-white hover:bg-gl-5 border border-transparent rounded-lg transition-all">
                <span className="text-xl">Pricing</span>
              </button>
            </nav>
          </div>
          <div className="hidden lg:flex items-center justify-center space-x-4">
            <button
              type="button"
              className="flex items-center justify-center px-8 py-3 bg-white hover:bg-gl-2 border border-gl-1 hover:border-gl-2 rounded-2xl text-gl-1 hover:text-white transition-all"
            >
              <span className="text-xl">Log in</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center px-8 py-3 bg-gl-1 hover:bg-gl-1 border border-gl-1 hover:border-gl-1 rounded-2xl text-white hover:text-white transition-all"
            >
              <span className="text-xl">Sign up</span>
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
          >
            {isShowMobileMenu ? (
              <Icon icon="heroicons-outline:x" className="text-2xl" />
            ) : (
              <Icon icon="heroicons-outline:menu" className="text-2xl" />
            )}
          </button>
        </div>

        <div
          className={`relative z-10 flex lg:hidden w-full h-screen ${
            isShowMobileMenu ? "-mt-[83px]" : "-mt-[1200px]"
          }  pt-[83px] transition-all`}
        >
          <div className="flex flex-col justify-between w-full pt-4 pb-9">
            <div className="divide-y">
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
                <Link href="/">
                  <button className="flex items-center justify-between w-full py-4">
                    <p className="text-xl font-medium">FAQ</p>
                  </button>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <button className="flex items-center justify-between w-full py-4">
                    <p className="text-xl font-medium">Pricing</p>
                  </button>
                </Link>
              </div>
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

      <section className="pt-[66px] lg:pt-0 mt-4">
        <div className="gl-container lg:px-6 mx-auto">
          <div className="relative flex flex-col lg:flex-row bg-black lg:rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-bg.png"
              width="1600"
              height="1600"
              alt="Logo"
              className="absolute left-0 top-0 hidden lg:block w-auto h-56 -ml-28"
            />
            <div className="relative z-[2] px-4 lg:pl-28 lg:pr-20 pt-18 lg:pt-38 pb-13 lg:pb-0">
              <Image
                src="/images/hero-title.png"
                width="1600"
                height="1600"
                alt="Logo"
                className="w-full max-w-[414px] h-auto"
              />
              <div className="lg:hidden relative z-[2] flex-shrink-0">
                <Image
                  src="/images/hero.png"
                  width="1600"
                  height="1600"
                  alt="Logo"
                  className="w-full max-w-[780px] h-auto"
                />
              </div>
              <p className="mb-16 lg:mb-20 text-base lg:text-2xl text-white font-light">
                <span className="font-bold">A No-Code Tool</span> for Businesses, Artists, Designers
                and Creators to build, create and generate NFT Collections.
              </p>
              <button
                type="button"
                className="flex items-center justify-center px-8 py-6 mx-auto lg:mx-0 bg-white hover:bg-gl-5 border border-transparent hover:border-transparent rounded-lg text-gl-1 hover:text-gl-1 transition-all"
              >
                <span className="text-2xl font-medium">Create for free</span>
              </button>
            </div>
            <div className="hidden lg:block relative z-[2] flex-shrink-0 pl-4 pt-24 pb-7">
              <Image
                src="/images/hero.png"
                width="1600"
                height="1600"
                alt="Logo"
                className="w-full max-w-[780px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-22">
        <div className="gl-container px-4 lg:px-6 mx-auto">
          <div className="max-w-3xl mx-auto space-y-6 lg:space-y-10 text-center">
            <h2 className="text-[32px] lg:text-[64px] font-bold leading-tight">
              A perfect fit for creators.
            </h2>
            <h3 className="text-sm lg:text-2xl">
              Whether you&apos;re an artist, a business owner, or an enthusiast, GenerateLabs.App is
              your gateway for Digital collectibles.
            </h3>
          </div>
          <Image
            src="/images/perfect.png"
            width="1600"
            height="1600"
            alt="Logo"
            className="w-full h-auto mt-4 rounded-2xl"
          />
        </div>
      </section>

      <section className="mt-32">
        <div className="gl-container px-4 lg:px-6 mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="relative">
                <Image
                  src="/images/perfect-1.png"
                  width="700"
                  height="700"
                  alt="Logo"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute left-0 top-0 flex w-full h-full px-5 lg:px-10 py-7 lg:py-16">
                  <div className="w-full max-w-[460px]">
                    <h2 className="mb-5 lg:mb-10 text-[28px] lg:text-5xl text-white font-bold leading-normal">
                      Empower Your Creativity
                    </h2>
                    <p className="text-xs lg:text-xl text-white/50">
                      No coding skills? No problem! Our intuitive platform enables artists,
                      designers, and businesses to easily create, build, and generate NFT
                      Collections without the need for technical expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="relative">
                <Image
                  src="/images/perfect-2.png"
                  width="700"
                  height="700"
                  alt="Logo"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute left-0 top-0 flex items-end w-full h-full px-5 lg:px-10 py-7 lg:py-16">
                  <div className="w-full max-w-[560px]">
                    <h2 className="mb-5 lg:mb-10 text-[28px] lg:text-5xl text-white font-bold leading-tight">
                      Discover the Art engine
                    </h2>
                    <p className="text-xs lg:text-xl text-white/90">
                      Unleash your imagination and craft awe-inspiring digital masterpieces with our
                      state-of-the-art Art Engine. From mesmerizing visuals to immersive
                      experiences, let your creativity take flight like never before
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="relative">
                <Image
                  src="/images/perfect-3.png"
                  width="700"
                  height="700"
                  alt="Logo"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute left-0 top-0 flex items-end w-full h-full px-5 lg:px-10 py-7 lg:py-16">
                  <div className="w-full max-w-[550px]">
                    <h2 className="mb-5 lg:mb-10 text-[28px] lg:text-5xl text-white font-bold leading-tight">
                      Seamless User Experience
                    </h2>
                    <p className="text-xs lg:text-xl text-white/90">
                      We&apos;ve designed our platform with a focus on user experience, ensuring
                      that you can navigate and utilize our tools effortlessly. We&apos;re here to
                      support you every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="relative">
                <Image
                  src="/images/perfect-4.png"
                  width="700"
                  height="700"
                  alt="Logo"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute left-0 top-0 flex w-full h-full px-5 lg:px-10 py-7 lg:py-16">
                  <div className="w-full max-w-[550px]">
                    <h2 className="mb-5 lg:mb-10 text-[28px] lg:text-5xl text-white font-bold leading-tight">
                      Customize Everything
                    </h2>
                    <p className="text-xs lg:text-xl text-white/50">
                      Whether you&apos;re organizing an exhibition, launching a creative campaign,
                      or seeking collaboration opportunities, our intuitive forms and custom
                      marketplace empower you to gather essential information and bring your
                      projects to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 lg:mt-40">
        <div className="gl-container px-4 lg:px-6 mx-auto">
          <div className="relative z-[2] max-w-[800px] mx-auto space-y-10 text-center">
            <h2 className="text-2xl lg:text-5xl leading-tight">
              <span className="font-bold">An easily navigable tool</span> that doesn&apos;t require
              any coding expertise to operate effectively.
            </h2>
          </div>
          <div className="relative mt-26 lg:mt-21 z-[1]">
            <div className="-mt-34 -mb-20">
              <video
                src="/videos/navigable.mp4"
                autoPlay
                muted
                loop
                className="w-full max-w-4xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-22 overflow-hidden">
        <div id="nft-1" className="flex whitespace-nowrap space-x-4 mb-4">
          {new Array(30).fill(undefined).map((nft, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 lg:w-64 bg-white p-2 border border-gl-3 rounded-2xl"
            >
              <div className="square">
                <div className="square-content">
                  <div className="w-full h-full rounded-2xl">
                    <Image
                      src="/images/nft.png"
                      width="700"
                      height="700"
                      alt="Logo"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 pb-1">
                <p className="text-[6px] lg:text-sm font-medium">Green Dinosaur</p>
                <p className="text-gl-3 text-[4px] lg:text-sm">@creator</p>
              </div>
            </div>
          ))}
        </div>
        <div id="nft-2" className="flex flex-row-reverse whitespace-nowrap space-x-4 mb-4">
          {new Array(30).fill(undefined).map((nft, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 lg:w-64 bg-white p-2 border border-gl-3 rounded-2xl"
            >
              <div className="square">
                <div className="square-content">
                  <div className="w-full h-full rounded-2xl">
                    <Image
                      src="/images/nft.png"
                      width="700"
                      height="700"
                      alt="Logo"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 pb-1">
                <p className="text-[6px] lg:text-sm font-medium">Green Dinosaur</p>
                <p className="text-gl-3 text-[4px] lg:text-sm">@creator</p>
              </div>
            </div>
          ))}
        </div>
        <div id="nft-3" className="flex whitespace-nowrap space-x-4 mb-4">
          {new Array(30).fill(undefined).map((nft, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 lg:w-64 bg-white p-2 border border-gl-3 rounded-2xl"
            >
              <div className="square">
                <div className="square-content">
                  <div className="w-full h-full rounded-2xl">
                    <Image
                      src="/images/nft.png"
                      width="700"
                      height="700"
                      alt="Logo"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 pb-1">
                <p className="text-[6px] lg:text-sm font-medium">Green Dinosaur</p>
                <p className="text-gl-3 text-[4px] lg:text-sm">@creator</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-22">
        <div className="max-w-[1436px] lg:px-6 mx-auto">
          <Image
            src="/images/community.png"
            width="1500"
            height="1500"
            alt="Logo"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mt-22">
        <div className="gl-container px-4 lg:px-6 mx-auto">
          <Image
            src="/images/join.png"
            width="900"
            height="900"
            alt="Logo"
            className="w-full max-w-4xl h-auto mx-auto"
          />
          <div className="max-w-5xl mx-auto mt-4 space-y-10 text-center">
            <h2 className="text-2xl lg:text-[64px] font-bold leading-tight">
              Join a Community of 2,500+ project founders
            </h2>
            <h3 className="text-sm lg:text-2xl">
              Share your projects, seek valuable marketing and launch advice from fellow digital
              creators!
            </h3>
          </div>
          <div className="flex items-center justify-center mt-16 space-x-4">
            <button className="flex items-center justify-center px-6 py-3 bg-gl-2 border border-gl-2 rounded-full text-white">
              Join Discord
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-white border border-gl-3 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </section>

      <section className="mt-22">
        <div className="gl-container px-4 lg:px-6 mx-auto">
          <div className="max-w-3xl mb-15 mx-auto space-y-10 text-center">
            <h2 className="text-[64px] font-bold">FAQ</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="relative z-[2] flex items-center justify-between w-full px-10 py-6 bg-gl-4 rounded-2xl text-xl text-left">
                      <p className="font-bold">Do I need an NFT to use GenerateLabs.App?</p>
                      {open ? (
                        <Icon icon="heroicons-outline:minus" className="text-2xl" />
                      ) : (
                        <Icon icon="heroicons-outline:plus" className="text-2xl" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="relative z-[2] w-full -mt-10 bg-gl-4 rounded-2xl text-xl text-left">
                        <div className="w-full px-10 pt-10">
                          <div className="w-full px-0 lg:px-16 py-8 border-t border-gl-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                            iste provident ducimus ab eum numquam, magni sint aperiam voluptas
                            accusantium facilis dolorem cupiditate dignissimos beatae impedit
                            minima? Veniam, aliquid quos.
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>

            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="relative z-[2] flex items-center justify-between w-full px-10 py-6 bg-black rounded-2xl text-xl text-left text-white">
                      <p className="font-bold">Is team pricing available?</p>
                      {open ? (
                        <Icon icon="heroicons-outline:minus" className="text-2xl" />
                      ) : (
                        <Icon icon="heroicons-outline:plus" className="text-2xl" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="relative z-[2] w-full -mt-10 bg-black rounded-2xl text-xl text-left text-white">
                        <div className="w-full px-10 pt-10">
                          <div className="w-full px-0 lg:px-16 py-8 border-t border-gl-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                            iste provident ducimus ab eum numquam, magni sint aperiam voluptas
                            accusantium facilis dolorem cupiditate dignissimos beatae impedit
                            minima? Veniam, aliquid quos.
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>

            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="relative z-[2] flex items-center justify-between w-full px-10 py-6 bg-gl-4 rounded-2xl text-xl text-left">
                      <p className="font-bold">Do I need an NFT to use GenerateLabs.App?</p>
                      {open ? (
                        <Icon icon="heroicons-outline:minus" className="text-2xl" />
                      ) : (
                        <Icon icon="heroicons-outline:plus" className="text-2xl" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="relative z-[2] w-full -mt-10 bg-gl-4 rounded-2xl text-xl text-left">
                        <div className="w-full px-10 pt-10">
                          <div className="w-full px-0 lg:px-16 py-8 border-t border-gl-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                            iste provident ducimus ab eum numquam, magni sint aperiam voluptas
                            accusantium facilis dolorem cupiditate dignissimos beatae impedit
                            minima? Veniam, aliquid quos.
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>

            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="relative z-[2] flex items-center justify-between w-full px-10 py-6 bg-black rounded-2xl text-xl text-left text-white">
                      <p className="font-bold">Is team pricing available?</p>
                      {open ? (
                        <Icon icon="heroicons-outline:minus" className="text-2xl" />
                      ) : (
                        <Icon icon="heroicons-outline:plus" className="text-2xl" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="relative z-[2] w-full -mt-10 bg-black rounded-2xl text-xl text-left text-white">
                        <div className="w-full px-10 pt-10">
                          <div className="w-full px-0 lg:px-16 py-8 border-t border-gl-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                            iste provident ducimus ab eum numquam, magni sint aperiam voluptas
                            accusantium facilis dolorem cupiditate dignissimos beatae impedit
                            minima? Veniam, aliquid quos.
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>

            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="relative z-[2] flex items-center justify-between w-full px-10 py-6 bg-gl-4 rounded-2xl text-xl text-left">
                      <p className="font-bold">Do I need an NFT to use GenerateLabs.App?</p>
                      {open ? (
                        <Icon icon="heroicons-outline:minus" className="text-2xl" />
                      ) : (
                        <Icon icon="heroicons-outline:plus" className="text-2xl" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="relative z-[2] w-full -mt-10 bg-gl-4 rounded-2xl text-xl text-left">
                        <div className="w-full px-10 pt-10">
                          <div className="w-full px-0 lg:px-16 py-8 border-t border-gl-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                            iste provident ducimus ab eum numquam, magni sint aperiam voluptas
                            accusantium facilis dolorem cupiditate dignissimos beatae impedit
                            minima? Veniam, aliquid quos.
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>

            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="relative z-[2] flex items-center justify-between w-full px-10 py-6 bg-black rounded-2xl text-xl text-left text-white">
                      <p className="font-bold">Is team pricing available?</p>
                      {open ? (
                        <Icon icon="heroicons-outline:minus" className="text-2xl" />
                      ) : (
                        <Icon icon="heroicons-outline:plus" className="text-2xl" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="relative z-[2] w-full -mt-10 bg-black rounded-2xl text-xl text-left text-white">
                        <div className="w-full px-10 pt-10">
                          <div className="w-full px-0 lg:px-16 py-8 border-t border-gl-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                            iste provident ducimus ab eum numquam, magni sint aperiam voluptas
                            accusantium facilis dolorem cupiditate dignissimos beatae impedit
                            minima? Veniam, aliquid quos.
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden lg:block mt-36 bg-black text-white">
        <div className="pt-19 pb-32">
          <div className="max-w-3xl mb-32 mx-auto space-y-10 text-center">
            <h2 className="text-[44px] font-space-grotesk">Brands we’ve worked with </h2>
          </div>
          <div className="px-31 mb-6">
            <div className="grid grid-cols-5">
              {new Array(5).fill(undefined).map((brand, index: number) => {
                return (
                  <div key={index} className="col-span-1 group">
                    <div className="flex items-center justify-center w-full h-32 group-even:bg-gl-6">
                      <Image
                        src={`/images/brand-${index + 1}.png`}
                        width="200"
                        height="200"
                        alt="Logo"
                        className="w-auto max-w-full h-auto"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-6">
            {new Array(6).fill(undefined).map((brand, index: number) => {
              return (
                <div key={index} className="col-span-1 group">
                  <div className="flex items-center justify-center w-full h-32 group-odd:bg-gl-6">
                    <Image
                      src={`/images/brand-${index + 6}.png`}
                      width="200"
                      height="200"
                      alt="Logo"
                      className="w-auto max-w-full h-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="mt-20 lg:mt-0">
        <div className="w-full bg-[url('/images/footer-bg.png')] bg-no-repeat bg-cover">
          <div className="gl-container px-4 lg:px-6 mx-auto">
            <div className="pt-16 pb-14">
              <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="space-y-4">
                  <h2 className="text-2xl text-white font-bold">Sign up to our newsletter</h2>
                  <p className="text-white">
                    Stay up to date with the latest announcement, news, and new features.
                  </p>
                </div>
                <div className="flex items-center space-x-3.5 mt-6 lg:mt-0">
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="w-full lg:w-[400px] max-w-full p-4 rounded-lg border border-gl-3"
                  />
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-4 bg-gl-1 hover:bg-gl-1 border border-gl-1 hover:border-gl-1 rounded-lg text-white hover:text-white transition-all"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="gl-container px-4 lg:px-6 mx-auto">
            <div className="pt-18 pb-9">
              <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-14 mb-12">
                    <Image
                      src="/images/logo-white.png"
                      width="150"
                      height="150"
                      alt="Logo"
                      className="w-30 h-auto"
                    />
                    <div className="flex items-center space-x-4">
                      <Link href="/">
                        <button
                          type="button"
                          className="flex items-center justify-center w-12 h-12 bg-gl-1 rounded-lg"
                        >
                          <Image
                            src="/images/logo-twitter.png"
                            width="32"
                            height="32"
                            alt="Logo"
                            className="w-6 h-6 object-contain"
                          />
                        </button>
                      </Link>
                      <Link href="/">
                        <button
                          type="button"
                          className="flex items-center justify-center w-12 h-12 bg-gl-1 rounded-lg"
                        >
                          <Image
                            src="/images/logo-medium.png"
                            width="32"
                            height="32"
                            alt="Logo"
                            className="w-6 h-6 object-contain"
                          />
                        </button>
                      </Link>
                      <Link href="/">
                        <button
                          type="button"
                          className="flex items-center justify-center w-12 h-12 bg-gl-1 rounded-lg"
                        >
                          <Image
                            src="/images/logo-discord.png"
                            width="32"
                            height="32"
                            alt="Logo"
                            className="w-6 h-6 object-contain"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full max-w-sm">
                    <p className="text-white">
                      Decription Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                      vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-18">
                  <div className="space-y-4">
                    <h2 className="text-xl text-white font-bold">Generate Labs</h2>
                    <div>
                      <Link href="/" className="text-white">
                        Home
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="text-white">
                        Careers
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl text-white font-bold">Product</h2>
                    <div>
                      <Link href="/" className="text-white">
                        NFT Generator
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="text-white">
                        Forms
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="text-white">
                        Drops
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="text-white">
                        Marketplace
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="text-white">
                        Careers
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="text-white">
                        Courses
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl text-white font-bold">Generate Labs</h2>
                    <div>
                      <Link href="/" className="text-white">
                        Blog
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="text-white">
                        Join Our Community
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="text-white">
                        Help Docs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 bg-black text-white">
          <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gl-container px-6 mx-auto">
            <p>© Official GenerateLabs.App 2023</p>
            <div className="flex items-center space-x-12 mb-4 lg:mb-0">
              <Link href="/">Privacy and Policy</Link>
              <Link href="/">Term of Sevices</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;