import React, { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import { IconButton, Icon } from '@edx/paragon';
import { Facebook, Abc, Close } from '@edx/paragon/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import mogcLogo from '../logo-white-stacked.svg';

function SocialLink({ href, label, children }) {
  return (
    <a className="btn-icon btn-icon-inverse-primary border border-white m-1"
      href={href}
      aria-label={label}
      target="_blank"
    >
      <span className="btn-icon__icon-container">{ children }</span>
    </a>
  );
}

export default function Footer({ logo }) {
  const { config } = useContext(AppContext);

  return (
    <footer className="footer d-flex border-top py-3 px-4 bg-primary text-white">
      <div className="container-fluid d-flex">
        <a
          className="d-block"
          href={config.LMS_BASE_URL}
          aria-label="logo"
        >
          <img

            src={mogcLogo || logo || config.LOGO_TRADEMARK_URL}
            width="120"
            alt=""
          />
        </a>
        <div className="px-4 small">
          <p>
            Powered by Academic Innovation<br/>
            Copyright &copy;2022 The Regents of the University of Michigan
          </p>
          <p>
            <a
              className="text-white"
              style={{textDecorationColor: "white"}}
              href={`${config.LMS_BASE_URL}/tos`}
            >
              Terms of Service
            </a> |{' '}
            <a
              className="text-white"
              style={{textDecorationColor: "white"}}
              href={`${config.LMS_BASE_URL}/privacy`}
            >
              Privacy Policy
            </a> |{' '}
            <a
              className="text-white"
              style={{textDecorationColor: "white"}}
              href="https://engage-iterate.zendesk.com/hc/en-us/articles/360037533714-What-is-your-Accessibility-Policy-"
            >
              Accessibility Policy
            </a>
          </p>
        </div>
        <div className="ml-auto">
          <SocialLink
            href="https://www.facebook.com/MichiganOnline"
            label="Michigan Online on Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/michigan.online/"
            label="Michigan Online on Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/UMichOnline"
            label="Michigan Online on Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}
