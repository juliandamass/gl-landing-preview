import { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Typewriter from "typewriter-effect";

import TwitterIcon from "@/components/icons/twitter-icon";
import MediumIcon from "@/components/icons/medium-icon";
import DiscordIcon from "@/components/icons/discord-icon";

import MainLayout from "@/layouts/main-layout";
import ComingSoonModal from "@/components/modals/coming-soon-modal";

gsap.registerPlugin(ScrollTrigger);

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
    answer: `To get early access to our Beta version, simply enter your email address in the <span id="click-open-coming-soon-modal" class="underline cursor-pointer">subscribe</span> field provided on our website. By subscribing, you&apos;ll get a chance to be among the first to try out our exciting new features and provide valuable feedback to shape the final product. We&apos;ll keep you updated on the Beta launch date, so stay tuned for exclusive perks and an immersive experience. Join our community of early creators and be a part of the community!`,
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

  const [isOpenComingSoonModal, setIsOpenComingSoonModal] = useState<boolean>(false);

  const [helper, setHelper] = useState<number>(0);

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

  useEffect(() => {
    const container = document.getElementById("click-open-coming-soon-modal");

    if (container) {
      container.addEventListener("click", handleClick);
    }

    return () => {
      if (container) {
        container.removeEventListener("click", handleClick);
      }
    };
  }, [helper]);

  const handleClick = () => {
    setIsOpenComingSoonModal(true);
  };

  return (
    <>
      <Head>
        <title>Generate Labs</title>
        <meta
          property="og:image"
          content="https://cdn-juliandamass.vercel.app/images/image-meta.png"
        />
      </Head>

      <MainLayout>
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
              <div className="relative z-[2] px-4 lg:pl-28 lg:pr-20 pt-18 lg:pt-28 pb-13 lg:pb-0">
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
                <p className="mb-16 lg:mb-12 text-base lg:text-2xl text-white font-light">
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
              <div className="hidden lg:block relative z-[2] flex-shrink-0 pl-4 pb-7">
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
            <div className="max-w-2xl mx-auto space-y-6 lg:space-y-10 text-center">
              <div className="text-[32px] lg:text-5xl font-bold lg:space-y-2">
                <p>A perfect fit for</p>
                <Typewriter
                  options={{
                    strings: [
                      "Designers",
                      "Developers",
                      "Business Owners",
                      "Content Creators",
                      "Artists",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <h3 className="text-sm lg:text-xl">
                Whether you&apos;re an artist, a business owner, or an enthusiast, GenerateLabs.App
                is your gateway for Digital collectibles.
              </h3>
            </div>
            <Image
              src="/images/perfect.png"
              width="1600"
              height="1600"
              alt="Logo"
              className="w-full max-w-6xl h-auto mt-4 mx-auto rounded-2xl"
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
                    <div className="w-full max-w-[490px]">
                      <h2 className="mb-5 lg:mb-6 text-[28px] lg:text-5xl text-white font-bold leading-normal lg:leading-normal">
                        Empower Your Creativity
                      </h2>
                      <p className="text-xs lg:text-xl text-white">
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
                  <div className="absolute left-0 top-0 flex flex-col items-start justify-end w-full h-full px-5 lg:px-10 py-7 lg:py-16">
                    <div className="w-full mb-11 lg:mb-14">
                      <Image
                        src="/images/perfect-3-image.svg"
                        width="700"
                        height="700"
                        alt="Logo"
                        className="w-full max-w-[164px] lg:max-w-[290px] h-auto ml-auto mr-10 lg:mr-12"
                      />
                    </div>
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
                      <p className="text-xs lg:text-xl text-white">
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
            <div className="relative z-[2] max-w-[1016px] mx-auto space-y-10 text-center">
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
                    <TwitterIcon className="w-16 lg:w-18 h-16 lg:h-18 fill-white hover:fill-gl-3 transition-all" />
                  </Link>
                  <Link href={process.env.NEXT_PUBLIC_MEDIUM_URL || ""} target="_blank">
                    <MediumIcon className="w-16 lg:w-18 h-16 lg:h-18 fill-white hover:fill-gl-3 transition-all" />
                  </Link>
                  <Link href={process.env.NEXT_PUBLIC_DISCORD_URL || ""} target="_blank">
                    <DiscordIcon className="w-16 lg:w-18 h-16 lg:h-18 fill-white hover:fill-gl-3 transition-all" />
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
            <div className="max-w-3xl mx-auto mt-4 mb-10 text-center">
              <h2 className="text-2xl lg:text-5xl font-bold leading-tight">
                Join a Community of project founders
              </h2>
            </div>
            <div className="text-center">
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
            <div className="space-y-2">
              {faqList.map((faq, index: number) => (
                <div key={index} className="group">
                  <Disclosure as="div" onClick={() => setHelper(helper + 1)}>
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
      </MainLayout>

      <ComingSoonModal
        isOpen={isOpenComingSoonModal}
        onClose={(close: any) => setIsOpenComingSoonModal(close)}
      />
    </>
  );
};

export default Home;
