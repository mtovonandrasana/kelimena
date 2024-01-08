export default function ResumeBody() {
  return (
    <>
      <div className="resume-body p-4 p-lg-5">
        <div className="row">
          <div className="col-main col-12 col-lg-8 pe-lg-4">
            <section className="resume-summary-section resume-section">
              <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-2 py-lg-3">
                <i className="resume-section-heading-icon bi bi-person me-2"></i>
                About Me
              </h3>
              <div className="resume-summary-desc">
                Software Engineer who is always looking to learn and build new
                skills. Primary focus is on freelance development for early
                stage start-ups. Comfortable building projects from start to
                finish from planning to development, testing and maintenance.
                Extremely fast learner with a passion for system design,
                architecture, and refactoring. Understands the balance between
                customers' needs and engineering challenges. Team player that
                enjoys tackling problems together.
              </div>
            </section>
            {/** --//resume-section-- */}

            <hr />

            <section className="resume-experience-section resume-section">
              <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3">
                <i className="resume-section-heading-icon bi bi-briefcase me-2"></i>
                Work Experience
              </h3>
              <div className="resume-timeline position-relative">
                <article className="resume-timeline-item position-relative pb-5">
                  <div className="resume-timeline-item-header mb-2">
                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                      <div className="resume-position-time">
                        February 2021 - Present
                      </div>
                      <div className="resume-company-name">
                        <a
                          href="https://www.projetlineaire.com/"
                          target="blanked"
                        >
                          Projet Lineaire
                        </a>
                      </div>
                    </div>
                    <h3 className="resume-position-title mb-1">
                      Software Engineer
                    </h3>
                  </div>
                  {/**--//resume-timeline-item-header--*/}
                  <div className="resume-timeline-item-desc">
                    <ul className="resume-timeline-list">
                      <li>
                        Engage in the entire development lifecycle for new
                        applications or functionalities, and uphold the
                        maintenance of existing apps.
                      </li>
                      <li>
                        Built the app architecture and design system components.{" "}
                      </li>
                      <li>
                        Implemented workflows and guidelines for code
                        consistency, readability, maintainability, and
                        testability.{" "}
                      </li>

                      <li>
                        Conducted R&D (research and development) for libraries
                        and ways to improve our codebase.
                      </li>
                      <li>
                        Implemente CI/CD for optimized and automated continuous
                        deployment, ensuring maximum efficiency.
                      </li>
                      <li>
                        Implemente an advanced monitoring system to ensure
                        optimal stability of services.
                      </li>
                    </ul>
                  </div>
                  {/**--//resume-timeline-item-desc--*/}
                </article>
                {/**--//resume-timeline-item--*/}

                <article className="resume-timeline-item position-relative pb-5">
                  <div className="resume-timeline-item-header mb-2">
                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                      <div className="resume-position-time">
                        Mars 2022 - December 2023
                      </div>
                      <div className="resume-company-name">
                        <a href="https://digital.gov.mg/" target="blanked">
                          UGD
                        </a>
                      </div>
                    </div>
                    <h3 className="resume-position-title mb-1">
                      <a href="https://x-road.global/" target="blanked">
                        X-Road
                      </a>{" "}
                      Expert
                    </h3>
                  </div>
                  {/**--//resume-timeline-item-header--*/}
                  <div className="resume-timeline-item-desc">
                    <ul className="resume-timeline-list">
                      <li>First responsible for the X-Road operation.</li>
                      <li>
                        Ensuring high availability of X-Road and Trusted Service
                        (CA, Timestamping).
                      </li>
                      <li>Manage and support X-Road members.</li>
                      <li>
                        Ensure quality control for all projects related to
                        e-Governance and interoperability in Malagasy
                        gouvernment, working closely with technical and business
                        teams of institutions, both internally and externally at
                        UGD.
                      </li>
                      <li>
                        Support UGD in implementing the national services (APIs)
                        catalog.
                      </li>
                    </ul>
                  </div>
                  {/**--//resume-timeline-item-desc--*/}
                </article>
                {/**--//resume-timeline-item--*/}
                <article className="resume-timeline-item position-relative">
                  <div className="resume-timeline-item-header mb-2">
                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                      <div className="resume-position-time">2019 - 2021</div>
                      <div className="resume-company-name">
                        <a href="https://www.soprasteria.com/">
                          SNEDA - Soprasteria
                        </a>
                      </div>
                    </div>
                    <h3 className="resume-position-title mb-1">
                      FullStack Java Developer
                    </h3>
                  </div>
                  {/**--//resume-timeline-item-header--*/}
                  <div className="resume-timeline-item-desc">
                    <ul className="resume-timeline-list">
                      <li>
                        Contributes to the development and upkeep of use cases
                        for the Sneda Global Software project, currently known
                        as{" "}
                        <a
                          href="https://www.soprabanking.com/"
                          target="blanked"
                        >
                          Cassiopae Habitat Sopra Banking Software
                        </a>
                        .
                      </li>
                      <li>
                        Ensures team meets deadlines and maintains high-quality
                        development in adherence to applied methods and
                        standards.
                      </li>
                    </ul>
                  </div>
                  {/**--//resume-timeline-item-desc--*/}
                </article>
                {/**--//resume-timeline-item--*/}
              </div>
              {/**--//resume-timeline--*/}
            </section>
            {/**--//resume-experience-section--*/}
          </div>
          {/**--//col-8--*/}
          <div className="col-12 col-lg-4 ps-lg-4">
            <section className="resume-skills-section resume-section">
              <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3">
                <i className="resume-section-heading-icon bi bi-gear me-2"></i>
                Tech Stack
              </h3>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <div className="resume-skill-name">Java</div>
                  <div
                    className="progress resume-progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="98"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar resume-progress-bar"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="resume-skill-name">JavaScript</div>
                  <div
                    className="progress resume-progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="98"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar resume-progress-bar"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="resume-skill-name">Spring</div>
                  <div
                    className="progress resume-progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="92"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar resume-progress-bar"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="resume-skill-name">Quarkus</div>
                  <div
                    className="progress resume-progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="92"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar resume-progress-bar"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="resume-skill-name">Kotlin</div>
                  <div
                    className="progress resume-progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="86"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar resume-progress-bar"
                      style={{ width: "86%" }}
                    ></div>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="resume-skill-name">ReactJS</div>
                  <div
                    className="progress resume-progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar resume-progress-bar"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </section>
            {/**--//resume-section--*/}

            <hr />

            <section className="resume-skills-section resume-section">
              <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3">
                <i className="resume-section-heading-icon bi bi-person-gear me-2"></i>
                Soft Skills
              </h3>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <span className="badge resume-skill-badge">Leadership</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge resume-skill-badge">
                    Project Management
                  </span>
                </li>

                <li className="list-inline-item">
                  <span className="badge resume-skill-badge">DevOps</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge resume-skill-badge">
                    Public Speaking
                  </span>
                </li>
                <li className="list-inline-item">
                  <span className="badge resume-skill-badge">
                    Problem solving
                  </span>
                </li>
                <li className="list-inline-item">
                  <span className="badge resume-skill-badge">
                    Agile Software development
                  </span>
                </li>
              </ul>
            </section>
            {/**--//resume-section--*/}

            <hr />

            <section className="resume-projects-section resume-section">
              <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3">
                <i className="resume-section-heading-icon bi bi-code-slash me-2"></i>
                Projects
              </h3>
              <div className="item">
                <h4 className="item-heading">
                  <i className="item-icon bi bi-square-fill me-2"></i>
                  <a href="https://github.com/mtovonandrasana/kelimena">
                    Online resume
                  </a>
                </h4>
                <div className="item-desc">
                  My online resume serves as a dynamic representation of my
                  skills, experiences, and projects, providing a modern and
                  accessible way for potential employers or collaborators to
                  learn more about my professional background.
                </div>
              </div>
              {/**--//item--*/}
              {/* <div className="item">
                <h4 className="item-heading">
                  <i className="item-icon bi bi-square-fill me-2"></i>
                  <a href="#">Online resume</a>
                </h4>
                <div className="item-desc">
                  You can link to your project Github page.
                </div>
              </div> */}
              {/**--//item--*/}
            </section>

            <hr />

            <section className="resume-educate-section resume-section">
              <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3">
                <i className="resume-section-heading-icon bi bi-book me-2"></i>
                Education
              </h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <div className="resume-degree font-weight-bold">
                    MSc in Software engineering
                  </div>
                  <div className="resume-degree-org">ENI University</div>
                  <div className="resume-degree-time">2017 - 2019</div>
                </li>
                <li>
                  <div className="resume-degree font-weight-bold">
                    BSc in Computer Science
                  </div>
                  <div className="resume-degree-org">ENI University</div>
                  <div className="resume-degree-time">2014 - 2017</div>
                </li>
              </ul>
            </section>
            {/**--//resume-section--*/}

            <hr />

            <section className="resume-lang-section resume-section">
              <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3">
                <i className="resume-section-heading-icon bi bi-translate me-2"></i>
                Languages
              </h3>
              <ul className="list-unstyled resume-lang-list">
                <li className="mb-2">
                  <div className="resume-lang-name">French</div>
                  <div className="resume-level-indicator row gx-0 flex-nowrap">
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-half"></span>
                    </div>
                  </div>
                  {/** --//resume-level-indicator--*/}
                </li>
                <li className="mb-2">
                  <div className="resume-lang-name">English</div>
                  <div className="resume-level-indicator row gx-0 flex-nowrap">
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-full"></span>
                    </div>
                    <div className="col">
                      <span className="item item-half"></span>
                    </div>
                    <div className="col">
                      <span className="item"></span>
                    </div>
                  </div>
                  {/**--//resume-level-indicator--*/}
                </li>
              </ul>
            </section>
          </div>
          {/*//col-side */}
        </div>
        {/** row */}
      </div>
      {/** //resume-body */}
    </>
  );
}
