import ResumeBody from "./ResumeBody";
import ResumeHeader from "./ResumeHeader";

export default function ResumeWrapper() {
  return (
    <div className="resume-wrapper mx-auto rounded-2">
      <ResumeHeader />
      <ResumeBody />
    </div>
  );
}
