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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean porta est diam, et blandit ipsum suscipit
                        facilisis. Praesent nec semper eros. Aliquam quis turpis
                        sed metus mollis luctus vitae rhoncus mi.{" "}
                      </li>
                      <li>
                        Vivamus accumsan purus at urna tincidunt convallis. Sed
                        nisi dolor, elementum eget tempus ac, blandit ac mi.
                        Aliquam id tellus ut arcu luctus accumsan in at odio.{" "}
                      </li>

                      <li>
                        Morbi condimentum, lorem in pharetra mollis, purus justo
                        sollicitudin dolor, tristique vulputate mi odio sit amet
                        ante.
                      </li>
                      <li>
                        Blanditiis praesentium voluptatum deleniti atque
                        corrupti.
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
                          DGU
                        </a>
                      </div>
                    </div>
                    <h3 className="resume-position-title mb-1">
                      X-Road Expert
                    </h3>
                  </div>
                  {/**--//resume-timeline-item-header--*/}
                  <div className="resume-timeline-item-desc">
                    <ul className="resume-timeline-list">
                      <li>
                        Praesent nec semper eros. Aliquam quis turpis sed metus
                        mollis luctus vitae rhoncus mi. At vero eos et accusamus
                        et iusto odio dignissimos.
                      </li>
                      <li>
                        Proin tempus eu arcu in semper. Quisque gravida, sem ut
                        vehicula ultrices, diam est viverra odio, eget tristique
                        tortor tortor sed neque.
                      </li>
                      <li>
                        Suspendisse quis pharetra elit. Curabitur vitae cursus
                        lacus, et bibendum magna. Donec in orci eu augue posuere
                        mattis ut in turpis.
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
                        Part of the development team of{" "}
                        <a
                          href="https://www.soprabanking.com/"
                          target="blanked"
                        >
                          Cassiopea Sopra Baking Software
                        </a>
                        .
                      </li>
                      <li>
                        Nulla velit dui, ultrices sit amet arcu eget, sodales
                        lacinia lorem.
                      </li>
                      <li>
                        Quisque semper nisi mauris, non ullamcorper nunc
                        consectetur eget.{" "}
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
        </div>
        {/** row */}
      </div>
      {/** //resume-body */}
    </>
  );
}
