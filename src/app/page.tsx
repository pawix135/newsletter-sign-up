"use client";

import Image from "next/image";
import listIcon from "../../public/icon-list.svg";
import desktopSvg from "../../public/illustration-sign-up-desktop.svg";
import mobileSvg from "../../public/illustration-sign-up-mobile.svg";
import successIcon from "../../public/icon-success.svg";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const subscribe = () => {
    if (
      email.length < 3 ||
      !new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)
    ) {
      console.log("error");

      setError(true);
      setSubscribed(false);
      return;
    }

    setError(false);
    setSubscribed(true);
    console.log("try subscribe");
  };

  const dismissSuccessView = () => {
    setEmail("");
    setError(false);
    setSubscribed(false);
  };

  return (
    <main className="w-full h-full md:h-screen flex items-center justify-center text-dark-slate md:px-5">
      {subscribed ? (
        <div className="md:rounded-3xl flex flex-col gap-7 px-10 pb-10 pt-[50%] md:pt-10 bg-white w-full h-screen md:h-auto md:max-w-[460px]">
          <Image src={successIcon} alt="" width={75} height={75} />
          <h1 className="font-bold text-6xl">Thanks for subscribing!</h1>
          <p className="font-light">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
          <button
            onClick={dismissSuccessView}
            className="mt-auto md:mt-0 font-bold rounded-xl py-4 w-full bg-dark-slate text-white hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:via-primary hover:to-orange-400"
          >
            Dismiss message
          </button>
        </div>
      ) : (
        <div className="md:rounded-3xl flex flex-col-reverse md:flex-row max-w-[1000px] md:gap-10 bg-white md:p-6 w-full h-screen md:h-auto">
          <div className="flex-1 flex flex-col gap-10 md:gap-7 md:justify-center md:pl-10 p-10">
            <h1 className="font-bold text-6xl ">Stay updated!</h1>
            <p className="font-bold">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="flex flex-col gap-3 font-bold text">
              <ListItme text="Product discovery and biulding what matters" />
              <ListItme text="Measuring to ensure updates are a success" />
              <ListItme text="And much more!" />
            </ul>
            <div className="flex flex-col gap-5 ">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <label htmlFor="email" className="font-bold text-xs">
                    Email address
                  </label>
                  {error && (
                    <span className="text-primary font-bold text-xs">
                      Valid email required
                    </span>
                  )}
                </div>
                <input
                  value={email}
                  onChange={(v) => {
                    setEmail(v.target.value);
                  }}
                  id="email"
                  type="email"
                  className={`py-5 pl-5 border rounded-lg active:border-black hover:cursor-pointer ${
                    error
                      ? "bg-primary/10 border-primary text-primary outline-primary"
                      : ""
                  }`}
                  placeholder="email@company.com"
                />
              </div>
              <button
                onClick={subscribe}
                className="font-bold rounded-xl py-4 w-full bg-dark-slate text-white hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:via-primary hover:to-orange-400"
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
          <div className="flex md:flex-1 rounded-3xl md:pl-5 md:mr-0 md:pr-0 md:justify-end p-0">
            <Image src={desktopSvg} alt="xd" className="hidden md:block" />
            <Image
              src={mobileSvg}
              alt="dd"
              className="block md:hidden w-full"
            />
          </div>
        </div>
      )}
    </main>
  );
}

interface ListItemProps {
  text: string;
}
const ListItme: React.FC<ListItemProps> = ({ text }) => {
  return (
    <div className="flex flex-row gap-5">
      <Image src={listIcon} alt="" width={25} height={25} />
      <span>{text}</span>
    </div>
  );
};
