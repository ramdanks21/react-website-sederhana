import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { homeSection } from "../data/HomeSection";
import parse from "html-react-parser";
import { courseSection } from "../data/CourseSection";
import { tutorList, tutorsSection } from "../data/TutorsSection";
import Tutors from "../components/Tutors";
import { parnersList, parnersSection } from "../data/PartnersSection";
import Parners from "../components/Parners";
import Contact from "../components/Contact";
import { contactSection } from "../data/ContactSection";
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">
            {parse(homeSection.content)}
            {/* ini akan dipanggil text saja bukan
            menjadi HTMl before (homesection.content) after parse(homeSection.content)*/}
          </div>
        </section>
        {/* online course */}
        <section id="courses">
          <div className="kolom">{parse(courseSection.content)}</div>
          <img src={parse(courseSection.image)} />
        </section>
        {/* Tutors*/}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>
            <Tutors tutorList={tutorList} />
          </div>
        </section>
        {/* section parnerts */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(parnersSection.content)}</div>
            <Parners parnertList={parnersList} />
          </div>
        </section>
      </div>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  );
}

export default Home;
