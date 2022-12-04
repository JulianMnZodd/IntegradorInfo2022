import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <div className="container">
      <div className="copyright">
        @2022 Navarro Mauricio Julián. All rights reserved.
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/julianmn01/ " target="_blank">
          <InstagramIcon></InstagramIcon>
        </a>
        <a href="https://www.facebook.com/julian.navarro.3194/" target="_blank">
          <FacebookIcon></FacebookIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/mauricio-navarro0101/"
          target="_blank"
        >
          <LinkedInIcon></LinkedInIcon>
        </a>
      </div>
    </div>
  );
}
