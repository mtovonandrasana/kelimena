import Image from "next/image";

import profilePic from "@assets/images/mto.jpeg";

export default function ResumeHeader() {
  return (
    <>
      <div className="resume-header px-4 px-lg-5">
        <div className="resume-profile-holder text-center">
          <picture className="resume-profile-pic rounded-circle">
            <Image
              className="rounded-circle"
              src={profilePic}
              alt="profilePic"
            />
          </picture>

          <h2 className="resume-name text-uppercase">Michael T. </h2>
          <div className="resume-role-title text-uppercase">
            Senior Software Developer
          </div>
          <div className="resume-contact mt-4">
            <ul className="resume-contact-list list-unstyled list-inline mb-0 justify-content-between">
              <li className="list-inline-item me-md-3 me-lg-5">
                <i className="resume-contact-icon bi bi-telephone-inbound me-2"></i>{" "}
                +261346185144
              </li>
              <li className="list-inline-item me-md-3 me-lg-5">
                <i className="resume-contact-icon bi bi-envelope me-2"></i>{" "}
                ndrasanamike@gmail.com
              </li>
              <li className="list-inline-item me-lg-5">
                <i className="resume-contact-icon bi bi-globe me-2"></i>{" "}
                https://mtovonandrasana.netlify.app
              </li>
            </ul>
          </div>
          {/**--//resume-contact--*/}
        </div>
        {/**--//profile-holder-- */}
      </div>
      {/**--//resume-header-- */}
    </>
  );
}
