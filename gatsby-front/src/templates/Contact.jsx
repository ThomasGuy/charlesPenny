import React, { useEffect } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import SanityImageBox from '../components/SanityImageBox';
import { Page, Grid, Row, Col, Bio, Image } from '../styles';
import SEO from '../components/SEO';
import { useTitleContext } from '../hooks/TitleContext';

const Contact = ({ pageContext }) => {
  const { setPageTitle } = useTitleContext();
  const { name, biography, email, image, mug, social, links } = pageContext.contact;

  useEffect(() => {
    setPageTitle(name);
  }, [setPageTitle]);

  function makeId(slug, idx) {
    return `${slug}-${idx}`;
  }

  return (
    <Page>
      <Grid>
        <Row>
          <SanityImageBox
            image={image}
            alt={name}
            idx={0}
            title="Charles Penny"
            name=""
          />
        </Row>

        <Row>
          <Image width="200px">
            <SanityImageBox
              name=""
              alt="Charles Penny"
              idx={0}
              title="Charles Penny"
              image={mug}
            />
          </Image>
          <Col>
            <div className="bottom">
              <a href={`mailto:${email}`}>
                Email&nbsp;&nbsp;&nbsp;
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            {biography &&
              biography.length > 0 &&
              biography.map((bio, idx) => <Bio key={makeId('bio', idx)}>{bio}</Bio>)}
          </Col>
        </Row>

        <Row>
          <Col>
            {links && links.length > 0 && (
              <>
                <p id="comment">
                  Charles/&apos paintings & prints can be found on the following
                  websites
                </p>
                <ul>
                  {links.map((link, idx) => (
                    <li key={makeId('link', idx)}>
                      <a href={`${link.href}`}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            {social && (
              <>
                <p id="comment">Please follow Charles on social media</p>
                <ul>
                  <li key="social-media">
                    {social.facebook && (
                      <a
                        id="social"
                        title="follow me on facebook"
                        href={`${social.facebook}`}>
                        <img
                          style={{ marginBottom: '0' }}
                          alt="follow me on facebook"
                          src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png"
                          border={0}
                        />
                      </a>
                    )}
                    {social.instagram && (
                      <a
                        id="social"
                        title="follow me on Instagram"
                        href={social.instagram}>
                        <img
                          style={{ marginBottom: '0' }}
                          alt="follow me on instagram"
                          src="https://img.icons8.com/office/30/000000/instagram-new.png"
                          border={0}
                        />
                      </a>
                    )}
                  </li>
                </ul>
              </>
            )}
          </Col>
        </Row>
      </Grid>
    </Page>
  );
};

export default Contact;

export const Head = () => <SEO />;
