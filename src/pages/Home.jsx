import { useEffect } from "react";

export default function Home({ bgColor, setBgColor}) {
  useEffect(() => {
    return () => {
      setBgColor("#f4f6f8");
    };
  }, []);

  return (
    <main className="main-index" style={{ backgroundColor: bgColor }}>
      <section className="intro">
        <div className="intro-text">
          <p className="hello">Hello, Its Me!</p>
          <h1>Reza Nowrozi</h1>
          <h2>Fullstack .NET Developer</h2>
          <p className="intro-text-p">
            I build modern websites that are clean, responsive och
            user-friendly.
          </p>
          <p className="intro-text-p">
            I am passionate about creating web applications that combine clean
            design with seamless functionality. I enjoy solving complex
            problems, learning new technologies, and delivering solutions that
            make a real impact for users.
          </p>
          <p className="intro-text-p">
            In my free time i train at the gym, explore nature, and experiment
            with small projects to sharpen my coding skills.
          </p>
        </div>

        <div className="myPic">
          <img
            src="/img/reza.webp"
            alt="Photo af Reza Nowrozi"
            onClick={() => setBgColor(bgColor === "lightblue" ? "#f4f6f8" : "lightblue")
            }
          />
        </div>
      </section>
    </main>
  );
}
