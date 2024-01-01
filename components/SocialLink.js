import { FaGithub, FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";

export default function SocialLink() {

    return (
        <>
            <div className="top-bar text-center position-relative">
				<div className="top-bar-inner">			
					<a className="btn btn-primary top-bar-cta" href="matilto:ndrasanamike@gmail.com">Hire Me</a>
					
					<ul className="social-list list-inline mx-auto">
						<li className="list-inline-item me-0 me-md-1 me-lg-2">
                            <a href="https://twitter.com/MTovonandrasana">
                                <FaTwitter />
                            </a>
                        </li>
						<li className="list-inline-item me-0 me-md-1 me-lg-2">
                            <a href="https://github.com/mtovonandrasana">
                                <FaGithub />
                            </a>
                        </li>		
						<li className="list-inline-item me-0 me-md-1 me-lg-2">
                            <a href="https://www.linkedin.com/in/mtovonandrasana/">
                                <FaLinkedinIn />
                            </a>
                        </li>
								
						<li className="list-inline-item me-0 me-md-1 me-lg-2">
                            <a href="#">
                                <FaStackOverflow />
                            </a>
                        </li>
					</ul>{/**--//social-list-- */}
							
				</div>{/**--//top-bar-inner--*/}
						
			</div>{/**--//top-bar-- */}
        </>
    )
}