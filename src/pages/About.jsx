import { useEffect } from "react";

export default function About({ setBgColor }) {
  useEffect(() => {
    return () => {
      setBgColor("#f4f6f8");
    };
  }, []);
  return (
    <>
      <main className="about-main">
        <section className="about-intro">
          <div className="about-text">
            <h1>About Me:</h1>
            <p>
              Hi, I'm Reza Nowrozi, a Fullstack .NET Developer. I love building
              clean, responsive, and user-friendly websites. In my free time, I
              enjoy training at the gym, exploring nature, and learning new
              technologies.
            </p>
            <p>
              I have experience with HTML, CSS, JavaScript, C# and the .NET
              platform, and i constantly strives to improve my skills. I enjoy
              problem-solving, optimizing code, and creating projects that truly
              make a difference.
            </p>
            <p>
              Outside of work, i enjoy training, exploring nature, reading and
              learning new technologies. I believe that balancing work and
              leisure makes me more creative and productive.
            </p>
            <p>
              I am always seeking new challenges where I can contribute my
              skills, grow as a developer, learn from others, and deliver
              long-term results.
            </p>
          </div>

          <div className="about-pic">
            <img
              src="/img/reza.webp"
              alt="Photo of Reza"
              onClick={() =>
                setBgColor((prev) =>
                  prev === "lightblue" ? "#f4f6f8" : "lightblue",
                )
              }
            />
          </div>
        </section>
      </main>
    </>
  );
}
