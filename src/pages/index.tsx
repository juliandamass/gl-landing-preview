import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import TwitterIcon from "@/components/icons/twitter-icon";
import MediumIcon from "@/components/icons/medium-icon";
import DiscordIcon from "@/components/icons/discord-icon";

import { scrollToId } from "@/utils/CommonUtils";

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

const gallery1List = [
  {
    imageUrl: "/images/gallery-image-1.png",
    username: "Alena Franci",
    creatorName: "@generatelabs",
  },
  {
    imageUrl: "/images/gallery-image-2.png",
    username: "Lincoln Korsgaard",
    creatorName: "@gigixdreams",
  },
  {
    imageUrl: "/images/gallery-image-3.png",
    username: "Leo Korsgaard",
    creatorName: "@varsbloom31x",
  },
  {
    imageUrl: "/images/gallery-image-4.png",
    username: "Allison Torff",
    creatorName: "@nothingxspace",
  },
  {
    imageUrl: "/images/gallery-image-5.png",
    username: "Carter Botosh",
    creatorName: "@minniebees",
  },
];

const gallery2List = [
  {
    imageUrl: "/images/gallery-image-6.png",
    username: "Talan Korsgaard",
    creatorName: "@noodlescrate",
  },
  {
    imageUrl: "/images/gallery-image-7.png",
    username: "Maren Philips",
    creatorName: "@raniana1997",
  },
  {
    imageUrl: "/images/gallery-image-8.png",
    username: "Jakob Rhiel Madsen",
    creatorName: "@generatelabs",
  },
  {
    imageUrl: "/images/gallery-image-9.png",
    username: "Brandon Calzoni",
    creatorName: "@hensbiz4shop",
  },
  {
    imageUrl: "/images/gallery-image-10.png",
    username: "Corey Workman",
    creatorName: "@zfworks1",
  },
];

const gallery3List = [
  {
    imageUrl: "/images/gallery-image-11.png",
    username: "Green Dinosaur",
    creatorName: "@blackdooms",
  },
  {
    imageUrl: "/images/gallery-image-12.png",
    username: "Tatiana Passaquindici Arcand",
    creatorName: "@seed012",
  },
  {
    imageUrl: "/images/gallery-image-13.png",
    username: "Charlie Mango",
    creatorName: "@thehungrydesigner",
  },
  {
    imageUrl: "/images/gallery-image-14.png",
    username: "Jaylon Calzoni",
    creatorName: "@misscreations",
  },
  {
    imageUrl: "/images/gallery-image-15.png",
    username: "Cheyenne Korsgaard",
    creatorName: "@blocks4u",
  },
];

const gallery4List = [
  {
    imageUrl: "/images/gallery-image-16.png",
    username: "Livia Rosser",
    creatorName: "@bencrypts",
  },
  {
    imageUrl: "/images/gallery-image-17.png",
    username: "Randy Aminoff",
    creatorName: "@thesailingman",
  },
  {
    imageUrl: "/images/gallery-image-18.png",
    username: "Rayna Philips",
    creatorName: "@philipians",
  },
  {
    imageUrl: "/images/gallery-image-19.png",
    username: "Carla Lubin",
    creatorName: "@cnibular",
  },
  {
    imageUrl: "/images/gallery-image-20.png",
    username: "Tiana Herwitz",
    creatorName: "@afjherwitz",
  },
];

const faqList = [
  {
    question: `Do I need an NFT to use <a href="/" target="_blank" class="underline">GenerateLabs.App</a>?`,
    answer: `Not at all! You don&apos;t need to have an NFT to dive into the world of GenerateLabs.App. And guess what? It won&apos;t cost you a dime to get started – even if you&apos;ve got 0 credits. You&apos;ve got options for signing up too. You can either roll with your Ethereum wallet address or go the classic way and sign up using your email- we&apos;ll set you up with your very own customized wallet through Magic Link. So, get ready to explore GenerateLabs.App hassle-free, whether you own an NFT or not!`,
  },
  {
    question: `What are the fees to use the App?`,
    answer: `We&apos;ll be announcing our standard rates for Tokens very soon. Stay tuned to our platform or website for the latest updates on pricing, and hey, we might even surprise you with some awesome promotions along the way!`,
  },
  {
    question: `Is team pricing available?`,
    answer: `We&apos;re thrilled to share that we&apos;re actively working on introducing team pricing as a new design feature. We understand the importance of accommodating teams and collaborative efforts, and we aim to offer competitive and flexible pricing options for collective usage. So, stay tuned for updates, and soon you&apos;ll have access to team-friendly pricing plans to enhance your collaborative experience!`,
  },
  {
    question: `How to sign-up for Beta Access?`,
    answer: `To get early access to our Beta version, simply enter your email address in the subscribe field provided on our website. By subscribing, you&apos;ll get a chance to be among the first to try out our exciting new features and provide valuable feedback to shape the final product. We&apos;ll keep you updated on the Beta launch date, so stay tuned for exclusive perks and an immersive experience. Join our community of early creators and be a part of the community!`,
  },
  {
    question: `Is the Software Compatible on all Desktop and Mobile Devices?`,
    answer: `Currently, our software is exclusively available for desktop use. However, we have some exciting news! We&apos;re actively working on new features and a mobile friendly interface, which will be announced very soon. So, stay tuned for the upcoming release.  We can&apos;t wait to bring our innovative tools to your fingertips!`,
  },
  {
    question: `What are the Smart Contracts and the Programs that we can be able to create on the App?`,
    answer: `Step into our App and explore limitless possibilities! Create Smart Contracts and Programs tailored to your unique needs. Craft single drop NFT collections or go all out with full-scale NFT collections. Plus, you have the power to design customizable forms and even set up your own NFT marketplace. Our intuitive interface and robust tool set will seamlessly transform your ideas into reality. So, let your imagination soar, dive into the creative abyss, and turn your vision into an extraordinary masterpiece with us!`,
  },
];

const Home = () => {
  const gallery1Ref = useRef<HTMLDivElement>(null);
  const gallery2Ref = useRef<HTMLDivElement>(null);
  const gallery3Ref = useRef<HTMLDivElement>(null);
  const gallery4Ref = useRef<HTMLDivElement>(null);
  const containerGalleryRef = useRef<HTMLDivElement>(null);

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const [isOpenComingSoonModal, setIsOpenComingSoonModal] = useState<boolean>(false);

  useEffect(() => {
    const gallery1 = gallery1Ref.current;
    const gallery2 = gallery2Ref.current;
    const gallery3 = gallery3Ref.current;
    const gallery4 = gallery4Ref.current;
    const containerGallery = containerGalleryRef.current;

    gsap.to(gallery1, {
      x: "-10%",
      ease: "none",
      scrollTrigger: {
        trigger: containerGallery,
        start: "top bottom",
        scrub: true,
      },
    });
    gsap.to(gallery2, {
      x: "10%",
      ease: "none",
      scrollTrigger: {
        trigger: "#container-gallery",
        start: "top bottom",
        scrub: true,
      },
    });
    gsap.to(gallery3, {
      x: "-10%",
      ease: "none",
      scrollTrigger: {
        trigger: "#container-gallery",
        start: "top bottom",
        scrub: true,
      },
    });
    gsap.to(gallery4, {
      x: "10%",
      ease: "none",
      scrollTrigger: {
        trigger: "#container-gallery",
        start: "top bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <main className="pt-18 lg:pt-26">
        <header className="fixed top-0 left-0 z-10 w-full bg-white">
          <div className="relative z-20 flex items-center justify-between w-full gl-container px-4 lg:px-6 mx-auto py-6 bg-white">
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
                className="flex items-center justify-center px-8 py-3 bg-white hover:bg-gl-2 border border-gl-1 hover:border-gl-2 rounded-2xl text-gl-1 hover:text-white transition-all"
                onClick={() => setIsOpenComingSoonModal(true)}
              >
                <span className="text-xl">Log in</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-8 py-3 bg-gl-1 hover:bg-gl-7 border border-gl-1 hover:border-gl-7 rounded-2xl text-white hover:text-white transition-all"
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
              isOpenMobileMenu ? "-mt-[83px]" : "-mt-[1200px]"
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
        <section className="mt-4">
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
                  <video
                    src="/videos/hero-video.mp4"
                    loop
                    autoPlay
                    playsInline
                    muted
                    className="w-full max-w-[780px] h-auto"
                  />
                </div>
                <p className="mb-16 lg:mb-20 text-base lg:text-2xl text-white font-light">
                  <span className="font-bold">A No-Code Tool</span> for Businesses, Artists,
                  Designers and Creators to build, create and generate NFT Collections.
                </p>
                <button
                  type="button"
                  className="flex items-center justify-center px-8 py-6 mx-auto lg:mx-0 bg-white hover:bg-gl-5 border border-transparent hover:border-transparent rounded-lg text-gl-1 hover:text-gl-1 transition-all"
                  onClick={() => setIsOpenComingSoonModal(true)}
                >
                  <span className="text-2xl font-medium">Create for free</span>
                </button>
              </div>
              <div className="hidden lg:block relative z-[2] flex-shrink-0 pl-4 pt-24 pb-7">
                <video
                  src="/videos/hero-video.mp4"
                  loop
                  autoPlay
                  playsInline
                  muted
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
                Whether you&apos;re an artist, a business owner, or an enthusiast, GenerateLabs.App
                is your gateway for Digital collectibles.
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
                  <div className="absolute left-0 top-0 flex flex-col items-start justify-end w-full h-full px-5 lg:px-10 py-7 lg:py-16">
                    <div className="w-full mb-4 lg:mb-12">
                      <Image
                        src="/images/perfect-2-image.png"
                        width="700"
                        height="700"
                        alt="Logo"
                        className="w-full max-w-[276px] lg:max-w-[480px] h-auto mx-auto"
                      />
                    </div>
                    <div className="w-full max-w-[560px]">
                      <h2 className="mb-5 lg:mb-10 text-[28px] lg:text-5xl text-white font-bold leading-tight">
                        Discover the Art engine
                      </h2>
                      <p className="text-xs lg:text-xl text-white/90">
                        Unleash your imagination and craft awe-inspiring digital masterpieces with
                        our state-of-the-art Art Engine. From mesmerizing visuals to immersive
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
                <span className="font-bold">An easily navigable tool</span> that doesn&apos;t
                require any coding expertise to operate effectively.
              </h2>
            </div>
            <div className="relative mt-26 lg:mt-21 z-[1]">
              <div className="-mt-34 -mb-20">
                <video
                  src="/videos/navigable.mp4"
                  loop
                  autoPlay
                  playsInline
                  muted
                  className="w-full max-w-4xl mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-22">
          <div className="max-w-[1436px] lg:px-6 mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full bg-black rounded-2xl">
              <Image
                src="/images/build.png"
                width="1000"
                height="1000"
                alt="Logo"
                className="hidden lg:flex flex-shrink-0 w-full max-w-[890px] h-auto rounded-2xl object-cover"
              />
              <Image
                src="/images/build-1-m.png"
                width="1000"
                height="1000"
                alt="Logo"
                className="lg:hidden flex-shrink-0 self-end w-56 h-auto -mt-8 rounded-2xl object-cover"
              />
              <div className="flex flex-col items-center justify-center lg:-ml-24 space-y-10 px-4 lg:px-0 py-6 lg:pt-16 lg:pb-0">
                <Image
                  src="/images/build-community.png"
                  width="500"
                  height="500"
                  alt="Logo"
                  className="w-[460px] h-auto rounded-2xl object-cover"
                />
                <div className="flex items-center space-x-10">
                  <Link href={process.env.NEXT_PUBLIC_TWITTER_URL || ""} target="_blank">
                    <TwitterIcon className="w-16 lg:w-18 h-16 lg:h-18 fill-white hover:fill-green-600 transition-all" />
                  </Link>
                  <Link href={process.env.NEXT_PUBLIC_MEDIUM_URL || ""} target="_blank">
                    <MediumIcon className="w-16 lg:w-18 h-16 lg:h-18 fill-white hover:fill-green-600 transition-all" />
                  </Link>
                  <Link href={process.env.NEXT_PUBLIC_DISCORD_URL || ""} target="_blank">
                    <DiscordIcon className="w-16 lg:w-18 h-16 lg:h-18 fill-white hover:fill-green-600 transition-all" />
                  </Link>
                </div>
              </div>
              <Image
                src="/images/build-2-m.png"
                width="1000"
                height="1000"
                alt="Logo"
                className="lg:hidden flex-shrink-0 w-56 h-auto -ml-6 rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>
        <section ref={containerGalleryRef} id="container-gallery" className="mt-22 overflow-hidden">
          <div className="max-w-[1436px] lg:px-6 mx-auto">
            <div ref={gallery1Ref} id="gallery-1" className="flex whitespace-nowrap space-x-4 mb-4">
              {gallery1List.map((gallery1, index: number) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 lg:lg:w-[308px] bg-white p-2 border border-gl-3 rounded-2xl"
                >
                  <div className="square">
                    <div className="square-content">
                      <div className="w-full h-full rounded-2xl">
                        <Image
                          src={gallery1.imageUrl}
                          width="700"
                          height="700"
                          alt="Logo"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 pb-1">
                    <p className="text-[6px] lg:text-sm font-medium">{gallery1.username}</p>
                    <p className="text-gl-3 text-[4px] lg:text-sm">{gallery1.creatorName}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              ref={gallery2Ref}
              id="gallery-2"
              className="flex flex-row-reverse whitespace-nowrap space-x-4 space-x-reverse mb-4"
            >
              {gallery2List.map((gallery2, index: number) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 lg:lg:w-[308px] bg-white p-2 border border-gl-3 rounded-2xl"
                >
                  <div className="square">
                    <div className="square-content">
                      <div className="w-full h-full rounded-2xl">
                        <Image
                          src={gallery2.imageUrl}
                          width="700"
                          height="700"
                          alt="Logo"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 pb-1">
                    <p className="text-[6px] lg:text-sm font-medium">{gallery2.username}</p>
                    <p className="text-gl-3 text-[4px] lg:text-sm">{gallery2.creatorName}</p>
                  </div>
                </div>
              ))}
            </div>
            <div ref={gallery3Ref} id="gallery-3" className="flex whitespace-nowrap space-x-4 mb-4">
              {gallery3List.map((gallery3, index: number) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 lg:lg:w-[308px] bg-white p-2 border border-gl-3 rounded-2xl"
                >
                  <div className="square">
                    <div className="square-content">
                      <div className="w-full h-full rounded-2xl">
                        <Image
                          src={gallery3.imageUrl}
                          width="700"
                          height="700"
                          alt="Logo"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 pb-1">
                    <p className="text-[6px] lg:text-sm font-medium">{gallery3.username}</p>
                    <p className="text-gl-3 text-[4px] lg:text-sm">{gallery3.creatorName}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              ref={gallery4Ref}
              id="gallery-4"
              className="flex flex-row-reverse whitespace-nowrap space-x-4 space-x-reverse mb-4"
            >
              {gallery4List.map((gallery4, index: number) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 lg:lg:w-[308px] bg-white p-2 border border-gl-3 rounded-2xl"
                >
                  <div className="square">
                    <div className="square-content">
                      <div className="w-full h-full rounded-2xl">
                        <Image
                          src={gallery4.imageUrl}
                          width="700"
                          height="700"
                          alt="Logo"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 pb-1">
                    <p className="text-[6px] lg:text-sm font-medium">{gallery4.username}</p>
                    <p className="text-gl-3 text-[4px] lg:text-sm">{gallery4.creatorName}</p>
                  </div>
                </div>
              ))}
            </div>
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
              <Link href={process.env.NEXT_PUBLIC_DISCORD_URL || ""} target="_blank">
                <button
                  type="button"
                  className="flex items-center justify-center px-6 py-3 bg-gl-1 hover:bg-gl-7 border border-gl-1 hover:border-gl-7 rounded-full text-white hover:text-white transition-all"
                >
                  Join Discord
                </button>
              </Link>
              <button
                type="button"
                className="flex items-center justify-center px-6 py-3 bg-white hover:bg-gl-2 border border-gl-3 hover:border-gl-2 rounded-full text-gl-1 hover:text-white transition-all"
                onClick={() => setIsOpenComingSoonModal(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </section>
        <section id="section-faq" className="mt-22">
          <div className="gl-container px-4 lg:px-6 mx-auto">
            <div className="max-w-3xl mb-15 mx-auto space-y-10 text-center">
              <h2 className="text-[64px] font-bold">FAQ</h2>
            </div>
            <div className="space-y-4">
              {faqList.map((faq, index: number) => (
                <div key={index} className="group">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="relative z-[2] flex items-center justify-between w-full px-4 lg:px-10 py-4 lg:py-6 space-x-4 bg-gl-4 group-even:bg-black rounded-2xl text-sm lg:text-xl text-left text-gl-1 group-even:text-white">
                          <div
                            className="font-bold"
                            dangerouslySetInnerHTML={{ __html: faq.question }}
                          ></div>
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
                          <Disclosure.Panel className="relative z-[2] w-full -mt-8 lg:-mt-10 bg-gl-4 group-even:bg-black rounded-2xl text-sm lg:text-xl text-left text-gl-1 group-even:text-white">
                            <div className="w-full px-6 lg:px-10 pt-8 lg:pt-10">
                              <div
                                className="w-full px-0 lg:px-16 py-6 lg:py-8 border-t border-gl-3"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                              ></div>
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
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
                  <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto lg:space-x-3.5 space-y-5 lg:space-y-0 mt-6 lg:mt-0">
                    <input
                      type="text"
                      placeholder="Enter email"
                      className="w-full lg:w-[400px] max-w-full p-4 rounded-lg border border-gl-3"
                    />
                    <button
                      type="button"
                      className="flex items-center justify-center px-4 py-4 bg-gl-1 hover:bg-gl-7 border border-gl-1 hover:border-gl-7 rounded-lg text-white hover:text-white transition-all"
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
                <div className="flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-5 lg:space-x-14 mb-12">
                      <Image
                        src="/images/gl-logo-white.svg"
                        width="150"
                        height="150"
                        alt="Logo"
                        className="w-26 lg:w-30 h-auto"
                      />
                      <div className="flex items-center space-x-3 lg:space-x-4">
                        <Link href={process.env.NEXT_PUBLIC_TWITTER_URL || ""} target="_blank">
                          <button
                            type="button"
                            className="flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 bg-gl-1 hover:bg-gl-7 rounded-lg transition-all"
                          >
                            <Image
                              src="/images/social-twitter-logo.svg"
                              width="32"
                              height="32"
                              alt="Logo"
                              className="w-4 lg:w-6 h-4 lg:h-6 object-contain"
                            />
                          </button>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_MEDIUM_URL || ""} target="_blank">
                          <button
                            type="button"
                            className="flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 bg-gl-1 hover:bg-gl-7 rounded-lg transition-all"
                          >
                            <Image
                              src="/images/social-medium-logo.svg"
                              width="32"
                              height="32"
                              alt="Logo"
                              className="w-4 lg:w-6 h-4 lg:h-6 object-contain"
                            />
                          </button>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_DISCORD_URL || ""} target="_blank">
                          <button
                            type="button"
                            className="flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 bg-gl-1 hover:bg-gl-7 rounded-lg transition-all"
                          >
                            <Image
                              src="/images/social-discord-logo.svg"
                              width="32"
                              height="32"
                              alt="Logo"
                              className="w-4 lg:w-6 h-4 lg:h-6 object-contain"
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
                  <div className="flex flex-row flex-wrap space-x-0 lg:space-x-18">
                    <div className="w-1/2 lg:w-auto space-y-4 mb-10">
                      <h2 className="text-xl text-white font-bold">Generate Labs</h2>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          Home
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          Careers
                        </button>
                      </div>
                    </div>
                    <div className="w-1/2 lg:w-auto space-y-4 mb-10">
                      <h2 className="text-xl text-white font-bold">Product</h2>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          NFT Generator
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          Forms
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          Drops
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          Marketplace
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          Careers
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          Courses
                        </button>
                      </div>
                    </div>
                    <div className="w-1/2 lg:w-auto space-y-4 mb-10">
                      <h2 className="text-xl text-white font-bold">Generate Labs</h2>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          Blog
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          Join Our Community
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpenComingSoonModal(true)}
                          className="text-white"
                        >
                          Help Docs
                        </button>
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
                <button type="button" onClick={() => setIsOpenComingSoonModal(true)}>
                  Privacy and Policy
                </button>
                <button type="button" onClick={() => setIsOpenComingSoonModal(true)}>
                  Term of Services
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>

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
    </>
  );
};

export default Home;
