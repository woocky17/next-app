"use client";

import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

import _ from "lodash";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => (
//     <>
//       <br />
//       <p className="loading loading-dots loading-sm"></p>
//     </>
//   ),
// });

export default function Home() {
  // const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="vaque"
        // width={400}
        // height={100}
        fill
        className="object-cover"
        sizes="(max-width: 480px) 80vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <h1>Hello World</h1>
      <button
        onClick={() => {
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}
