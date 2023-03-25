import React from "react";
import Fade from "react-reveal/Fade";

import Section from "element/Section";
import Header from "parts/Header";
import Clients from "parts/Clients";
import Feature from "parts/Feature";

import HeroImage from "assets/images/hero-image.png";
import FeatureTile01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile03 from "assets/images/feature-tile-icon-03.svg";
export default function Homepage() {
  const features = [
    {
      imgSrc: FeatureTile01,
      imgAlt: "Feature tile icon 01",
      title: "Join Rhama 01",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of thigns to emphasise design.",
    },
    {
      imgSrc: FeatureTile02,
      imgAlt: "Feature tile icon 02",
      title: "Join Rhama 02",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of thigns to emphasise design.",
    },
    {
      imgSrc: FeatureTile03,
      imgAlt: "Feature tile icon 03",
      title: "Join Rhama 03",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of thigns to emphasise design.",
    },
  ];
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={500}>
                  <h1 className="mt-0 mb-16">Landing template for startup</h1>
                </Fade>
              </div>
              <div className="container-xs">
                <Fade bottom delay={1000}>
                  <p className="mt-0 mb-32">
                    Our landing page template works on all devices, so you only
                    have to set it up once, and get beautiful result forever.
                  </p>
                </Fade>
              </div>
            </div>
            <div className="hero-figure illustration-element-01">
              <Fade bottom delay={1500}>
                <img
                  className="has-shadow"
                  src={HeroImage}
                  alt="Hero"
                  width="896"
                  height="504"
                />
              </Fade>
            </div>
          </div>
        </Section>
        <Clients></Clients>
        <Section className="features-tiles">
          <div className="container">
            <div className="features tiles inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    delayInMS={index * 500}
                    data={feature}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section className="pricing">
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Simple, transparent pricing</h2>
                  <p className="m-0">
                    Lorem ipsum common placeholder text text used to demonstrate
                    the grapic elements of a documents or visual presentation.
                  </p>
                </div>
              </div>
              <div className="tiles-wrap"></div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
