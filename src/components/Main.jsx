import React, { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import OnlineTherapySection from './sections/OnlineTherapySection';
import FAQSection from './sections/FAQSection';
import ContactSection from './sections/ContactSection';

export default function Main() {
    useEffect(() => {
        const targets = Array.from(
            document.querySelectorAll(
                '#PAGES_CONTAINER section[data-block-level-container="ClassicSection"], #PAGES_CONTAINER .KaEeLN, #PAGES_CONTAINER .wixui-rich-text, #PAGES_CONTAINER .wixui-image'
            )
        );

        if (!targets.length) return;

        targets.forEach((el, index) => {
            el.classList.add('fade-in-on-scroll');
            el.style.transitionDelay = `${Math.min((index % 6) * 60, 240)}ms`;
        });

        if (!('IntersectionObserver' in window)) {
            targets.forEach((el) => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -8% 0px',
            }
        );

        targets.forEach((el) => observer.observe(el));

        return () => {
            targets.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

  return (
<main id="PAGES_CONTAINER" className="PAGES_CONTAINER" tabIndex="-1" data-main-content="true">
                        <div id="SITE_PAGES" className="JsJXaX SITE_PAGES">
                            <div id="SITE_PAGES_TRANSITION_GROUP" className="AnQkDU">
                                <div id="tuckg" className="dBAkHi theme-vars tuckg">
                                    <div className="PFkO7r wixui-page" data-testid="page-bg"></div>
                                    <div className="HT5ybB">
                                        <div id="Containertuckg" className="Containertuckg SPY_vo">
                                            <div data-mesh-id="ContainertuckginlineContent" data-testid="inline-content"
                                                className="">
                                                <div data-mesh-id="ContainertuckginlineContent-gridContainer"
                                                    data-testid="mesh-container-content">
                                                    <HeroSection />
                                                    <AboutSection />
                                                    <ServicesSection />
                                                    <OnlineTherapySection />
                                                    <FAQSection />
                                                    <ContactSection />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
  );
}