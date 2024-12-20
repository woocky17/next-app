"use client";

import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => (
    <>
      <br />
      <p className="loading loading-dots loading-sm"></p>
    </>
  ),
});

export default function Home() {
  const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}
