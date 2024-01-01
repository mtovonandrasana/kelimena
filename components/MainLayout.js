import Footer from "./Footer";
import ResumeWrapper from "./ResumeWrapper";
import SocialLink from "./SocialLink";

export default function MainLayout() {

    return (
    <>
        <div className="container-fluid">
            <div className="main-content-wrapper">
                <div className="container-fluid">
                    <SocialLink />
                    <ResumeWrapper />
                </div>{/**--//container-fluid-- */}
            </div>{/**--//main-content-wrapper */}
        </div>
        <Footer />
    </>
    )
}