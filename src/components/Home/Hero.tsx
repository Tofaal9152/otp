
import Link from "next/link";
import { Button } from "../ui/button";
// import Image from "next/image";

const Hero = () => {
  if (typeof window !== "undefined") {
    localStorage.getItem("user")
  }
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 transition-colors">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20 dark:bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-800),white)]"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center dark:bg-gray-800 dark:ring-gray-700"></div>
      <section className="pt-12 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <h1 className="px-6 text-lg text-gray-600 dark:text-gray-300">
            Affordable & Reliable OTP Service in Bangladesh
          </h1>
          <p className="mt-5 text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
            Get OTP services at unbeatable prices{" "}
            <span className="relative inline-flex">
              <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#7c5eff] blur-lg opacity-30"></span>
              <span className="relative">
                {" "}
                starting from just{" "}
                <span className="bg-gradient-to-r from-[#FF44EC] via-violet-600 to-[#FF675E] text-transparent bg-clip-text">
                  1 Taka!
                </span>{" "}
              </span>
            </span>
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Secure, fast, and cost-effective OTP solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-5">
            <Link href="/auth/register">
              <Button variant={"default"}>Sign Up for Free</Button>
            </Link>
            <Link href="/documentation">
              <Button variant={"outline"}>See Documentation</Button>
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-500 dark:text-gray-400">
            Limited time offer: Free trial with limited messages
          </p>
        </div>
        <div className="relative py-4">
          <div className="absolute inset-0 h-2/3"></div>
          <div className="relative mx-auto lg:max-w-6xl">
            <div className="relative p-[4px] rounded-lg">
              {/* Gradient Border */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] blur-lg opacity-30 to-[#7c5eff] rounded-lg p-[2px]"></span>

              {/* Image with border inside gradient */}
              <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                {/* <Image
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-lg"
                  src="/heroimage.png"
                  alt="heroimage"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
