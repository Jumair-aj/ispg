import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutUs from "@/components/ui/AboutUs";
import Banner from "@/components/ui/Banner";
import ClientSection from "@/components/ui/ClientSection";
import Faq from "@/components/ui/Faq";
import VideoSection from "@/components/ui/VideoSection";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <Banner />
        <AboutUs />
        <ClientSection
          img={"./images/bmw.jpg"}
          clientName={"BMW"}
          tagline={"Digital Showroom"}
          tags={["AGMC", "BMW", "Mini", "E-commerce", "oOrjit"]}
        />
        <ClientSection
          img={"./images/delmonte.png"}
          clientName={"Delmonte"}
          tagline={"Delivered Fresh"}
          tags={["Delmonte", "E-commerce", "oOrjit"]}
        />
        <ClientSection
          img={"./images/healthcare.png"}
          clientName={"NMC"}
          tagline={"Healthcare Digitized"}
          tags={["NMC", "Healthcare", "ollco"]}
        />
        <ClientSection
          img={"./images/driving.png"}
          clientName={"excellence driving"}
          tagline={"Learn Driving. The Digital Way."}
          tags={["Business Application", "ERP", "oOrjit", "Odoo"]}
        />
        <Faq />
        <VideoSection />
        <div className="row py-5 mb-5 contactDiv">
          <div className="col-8">
            <h2 className="">
              Realize Your Digital Vision. <span>Let's Talk</span>
            </h2>
          </div>
          <div className="col-4 px-5 d-flex justify-content-center align-items-center contactDiv2">
            <button className="contactBtn">Contact Us</button>
            <svg height="200" width="300" >
              <g fill="none" stroke="black" stroke-width="4">
                <circle stroke-dasharray="1,10"cx={'150'} cy={'100'}  r="74" />
              </g>
            </svg>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
