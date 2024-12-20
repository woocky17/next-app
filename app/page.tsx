import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/49LJwnM"
        alt="vaque"
        // width={400}
        // height={100}
        fill
        className="object-cover"
        sizes="(max-width: 480px) 80vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
