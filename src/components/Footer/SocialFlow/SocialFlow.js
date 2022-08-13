import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './styles.css';

export default function SocialFlow() {
  return (
    <div>
      <p className="social-container">
        <a
          href="https://www.youtube.com/"
          className="youtube social"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/"
          className="facebook social"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com/"
          className="instagram social"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wwww.twitter.com" className="twitter social" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>
    </div>
  );
}
