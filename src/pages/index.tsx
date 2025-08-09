import NavBar from "@/components/layout/NavBar";
import Card from "@/components/common/Card";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <header
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/img1.jpg')" }}
      >
        <NavBar />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#00000063]"></div>
        {/* Hero */}
        <section className="relative z-10 flex items-center justify-center h-full p-5 md:px-10 text-white text-center">
          <div>
            <Image
              src="/images/jib-logo.png"
              alt="Jib Farms Logo"
              width={120}
              height={50}
              className="h-auto w-auto mx-auto mt-10"
            />
            <h1 className="text-4xl md:text-6xl font-bold my-4">
              Welcome to Jib Farms & Agro-Allied
            </h1>
            <p className="text-lg md:text-xl mb-6">
              We produce and distribute premium livestock feeds to help farmers
              raise healthier animals and grow profitable farms.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium">
              Explore Now
            </button>
          </div>
        </section>
      </header>

      <main>
        {/* About us */}
        <section className="my-8 p-5 md:px-10">
          <div className="w-full max-w-7xl mx-auto">
            <div>
              <h2 className="text-[25px] md:text-[32px] mb-4 font-bold text-black">
                About Us
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-black md:w-1/2">
                  <p>
                    At Jib Farms & Agro-Allied, we specialize in the production
                    and distribution of high-quality livestock feeds that
                    support healthier animals and more productive farms. Built
                    on a foundation of innovation, integrity, and a deep
                    understanding of agricultural needs, we are committed to
                    delivering nutritionally balanced feed solutions for
                    poultry, cattle, goats, and other livestock.
                  </p>
                  <p className="mt-[25px]">
                    We serve farmers, distributors, and agribusinesses across
                    Nigeria with a focus on quality, consistency, and
                    affordability. Our goal is to empower livestock owners with
                    the right feed solutions to improve animal health, growth
                    rates, and profitability.
                  </p>
                  <p className="mt-[25px]">
                    Whether you&apos;re running a small farm or managing a
                    large-scale operation, Jib Farms & Agro-Allied is your
                    trusted partner in sustainable animal nutrition.
                  </p>
                </div>
                <Image
                  src="/images/about.jpeg"
                  alt="About Jib Farms"
                  width={440}
                  height={475}
                  className="md:w-1/2 h-[475px] w-[440px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/*  Our services */}
        <section className=" bg-white">
          <Image
            src="/images/grass-4.png"
            alt="garss"
            width={1920}
            height={30}
            className="h-[30px] object-cover w-full"
          />
          <div className="bg-[#f8c32c] ">
            <div className=" p-5 md:px-10 w-full max-w-7xl mx-auto">
              <p className="text-center mt-5 font-glitter text-4xl text-green-700">
                What Is Our Expertise?
              </p>
              <h3 className="text-[25px] md:text-[32px] mb-4 font-bold text-black text-center">
                Quality feed. Healthy animals. Profitable farms.
              </h3>

              {/* Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card
                  imageSrc="/images/card3.jpg"
                  title="Advanced Feed Formulation"
                  description="We use modern agricultural science and proven nutritional standards to create balanced feeds that support optimal animal health, growth, and productivity."
                />
                <Card
                  imageSrc="/images/card4.jpeg"
                  title="High-Quality Raw Materials"
                  description="Only the best ingredients go into our feeds — carefully selected, tested, and processed to meet the nutritional needs of different livestock species."
                />
                <Card
                  imageSrc="/images/card7.jpg"
                  title="Efficient Distribution Network"
                  description="Our robust supply chain ensures fast and consistent delivery across Nigeria, reducing feed shortages and improving farm operations."
                  // className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-fixed bg-center bg-cover text-white bg-[url(/images/card3.jpg)]">
          <div className="bg-black/50">
            <div className="p-5 md:px-10 py-[8rem] lg:py-[10rem] w-full max-w-7xl mx-auto">
              <h3 className="text-4xl md:text-8xl font-bold mb-6 text-center font-glitter">
                We produce and distribute quality livestock feeds for healthier
                animals and better farms.
              </h3>
            </div>
          </div>
        </section>

        {/* Contact us */}
        <section className="bg-white">
          <div className="h-screen w-full flex justify-center items-center p-6">
            <div className="grid h-full grid-cols-10 grid-rows-50 gap-4 w-full max-w-7xl">
              {/* image  */}
              <div className="col-span-full md:col-span-4 md:row-span-25 flex justify-center items-center">
                <Image
                  src="/images/card8.jpg"
                  alt="chicks"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              {/* Contact block */}
              <div className="col-span-full md:col-span-6 md:row-span-50 flex justify-center items-center bg-indigo-200 rounded-3xl">
                Contact
              </div>

              {/* Address block */}
              <div className="col-span-full md:col-span-4 md:row-span-25 flex justify-center items-center bg-[#f8c32c] rounded-3xl">
                <div className="p-6 border text-black">
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p>
                      4, Ahmad Taoffek Street, Off Umar Audi Road, Gra Ilorin
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Contact Us</h3>
                    <p>ibjimoh204@gmail.com +234 813 927 2948</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
