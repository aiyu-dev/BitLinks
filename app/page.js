import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] gap-8 px-6 py-10 md:px-16">
        <div className="flex flex-col gap-4 items-center justify-center text-center md:items-start md:text-left">
          <p className="text-3xl md:text-4xl font-bold font-sans">
            The best URL shortener in the market
          </p>
          <p className="max-w-xl px-0 md:px-0 text-sm md:text-base leading-7">
            We are the most straightforward URL Shortener in the world. Most URL shorteners will track you or ask for your details to login. We understand your needs and hence we have created this URL shortener.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 text-white'>
            <Link href="/shorten"><button className='bg-purple-500 shadow-lg px-6 py-3 rounded-lg font-bold'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 shadow-lg px-6 py-3 rounded-lg font-bold'>Github</button></Link>
          </div> 
        </div>
        
        <div className="relative w-full h-72 sm:h-80 md:h-full flex items-center justify-center">
          <Image className="mix-blend-darken object-contain" src={"/vector.jpg"} alt="vector image" fill={true} />
        </div>
      </section>
    </main>
  );
}
