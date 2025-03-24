import Header from "./layout/header/page";
import Footer from "./layout/footer/page";
import HomePage from "./components/home/page";
import ProjectsPage from "./components/project/page";
import AboutPage from "./components/about/page";

export default function Home() {
  return (
    <>
      <Header />
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="projects">
        <ProjectsPage />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}














// import Header from "./layout/header/page";
// import Footer from "./layout/footer/page";
// import HomePage from "./components/home/page";
// import ProjectsPage from "./components/project/page";
// import AboutPage from "./components/about/page";

// export default function Home() {
//   return (
//     <>
//     <Header/>
//     <HomePage/>
//     <AboutPage/>
//     <ProjectsPage/>   
//     <Footer/>
//     </>
//   );
// }
