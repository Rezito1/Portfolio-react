import cvData from "../data/CV.json"

export default function CV() {
  return (
    <main className="container-cv">

      <div className="left-side">

        <div className="div1">
          <img
            src="/img/reza-cv.webp"
            className="cv-photo"
            alt="Reza CV photo"
          />
        </div>

        <div className="div2">
          <h2 className="firstname">Reza</h2>
          <h2 className="lastname">Nowrozi</h2>
        </div>

        <div className="div3">
          <h3>ARBETSSÖKANDE:</h3>

          <h4 className="title-color">
            PERSONLIG PROFIL
          </h4>

          <p>{cvData.profile}</p>
        </div>

        <div className="div4">
          <h4 className="title-color">
            FÄRDIGHETER:
          </h4>

          <div>
            <ul>
              {cvData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="div5">
          <h4 className="title-color">
            KONTAKTA MIG PÅ:
          </h4>

          <p>E-post: {cvData.contact.email}</p>
          <p>Mobil: {cvData.contact.phone}</p>
          <p>Adress: {cvData.contact.address}</p>
          <p>{cvData.contact.city}</p>
        </div>

      </div>

      <div className="right-side">

        <div className="div6">
          <h3 className="cv-h3-border">
            ARBETSLIVSERFARENHET
          </h3>

          <ul className="ul-list">
            {cvData.experience.map((job, index) => (
              <li key={index}>
                {job.company} - {job.role}

                <p>{job.year}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="div7">
          <h3 className="cv-h3-border">
            Utbildning
          </h3>

          <ul className="ul-list">
            {cvData.education.map((school, index) => (
              <li key={index}>
                {school.school}

                <p>
                  {school.year} {school.program}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="div8">
          <h3 className="cv-h3-border">
            FRITIDSINTRESSEN
          </h3>

          <ul>
            {cvData.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>

        <div className="div9">
          <h3 className="cv-h3-border">
            SPRÅKKUNSKAPER
          </h3>

          <ul className="ul-list">
            {cvData.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>

      </div>

    </main>
  )
}