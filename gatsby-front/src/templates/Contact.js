import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import SanityImageBox from '../components/SanityImageBox';
import { Page, Grid, Row, Col, Bio, Image } from '../styles';
import SEO from '../components/SEO';

const Contact = ({ pageContext }) => {
  const {
    name,
    biography,
    email,
    image,
    mug,
    social,
    links,
  } = pageContext.contact;
  return (
    <Page>
      <Grid>
        <Row>
          <SEO title={name} imageSrc={image.asset.url} />
          <SanityImageBox
            image={image}
            alt={name}
            title="Charles Penny"
            name=""
          />
        </Row>

        <Row>
          <SEO title="Charles Penny" imageSrc={mug.asset.url} />
          <Image width="200px">
            <SanityImageBox
              name=""
              alt="Charles Penny"
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
          <Col>{biography && biography.map(bio => <Bio>{bio}</Bio>)}</Col>
        </Row>

        <Row>
          <Col>
            {links && (
              <>
                <p id="comment">
                  Charles' paintings & prints can be found on the following
                  websites
                </p>
                <ul>
                  {links.map(link => (
                    <li>
                      <a href={`${link.url}`}>{link.name}</a>
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
                  <li>
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
