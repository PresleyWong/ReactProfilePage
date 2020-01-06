import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebookF,
  faTwitch,
  faTwitter,
  faInstagram,
  faGooglePlus,
  faYoutube,
  faPinterest,
  faReact
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = props => {
  const checkMedia = url => {
    const media = [
      ["linkedin", faLinkedinIn],
      ["github", faGithub],
      ["facebook", faFacebookF],
      ["twitch", faTwitch],
      ["twitter", faTwitter],
      ["instagram", faInstagram],
      ["google", faGooglePlus],
      ["youtube", faYoutube],
      ["pinterest", faPinterest]
    ];

    for (let i = 0; i < media.length; i++) {
      if (url.includes(media[i][0])) {
        return media[i][1];
      }
    }

    return faReact;
  };

  const collection = props.data.map((d, i) => {
    return (
      <a href={d} target="_blank" rel="noopener noreferrer" key={i}>
        <FontAwesomeIcon icon={checkMedia(d)} />
      </a>
    );
  });

  return collection;
};

export default SocialMedia;
