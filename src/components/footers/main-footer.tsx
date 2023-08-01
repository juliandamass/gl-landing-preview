import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ComingSoonModal from "../modals/coming-soon-modal";

const MainFooter = () => {
  const [isOpenComingSoonModal, setIsOpenComingSoonModal] = useState<boolean>(false);

  return (
    <>
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
                      Join our exclusive Beta program and unleash your creativity by building,
                      creating, and generating digital collectibles with No-Code Tools.
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
                    <Link
                      href="https://linkedin.com/company/generatelabs-app"
                      target="_blank"
                      className="block"
                    >
                      <button type="button" className="text-white">
                        Careers
                      </button>
                    </Link>
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

      <ComingSoonModal
        isOpen={isOpenComingSoonModal}
        onClose={(close: any) => setIsOpenComingSoonModal(close)}
      />
    </>
  );
};

export default MainFooter;
