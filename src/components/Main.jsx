import React, { useEffect } from 'react';
import heroBgImg from '../assets/img/hero-bg.png';
import atendimentoBannerImg from '../assets/img/girassol.jpeg';
import perfil1Img from '../assets/img/perfil-prof.png';
import perfil2Img from '../assets/img/notebook.jpeg';

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

    useEffect(() => {
        const faqRoot = document.querySelector('[data-hook="faq-root"]');
        if (!faqRoot) return;

        const buttons = Array.from(
            faqRoot.querySelectorAll('[data-hook="accordion-item-header"]')
        );

        const items = buttons
            .map((button) => {
                const contentId = button.getAttribute('aria-controls');
                if (!contentId) return null;

                const contentEl = document.getElementById(contentId);
                if (!contentEl || !faqRoot.contains(contentEl)) return null;

                const opacityWrapper = contentEl.parentElement;
                const heightWrapper = opacityWrapper?.parentElement;
                if (!opacityWrapper || !heightWrapper) return null;

                return { button, contentEl, opacityWrapper, heightWrapper };
            })
            .filter(Boolean);

        if (!items.length) return;

        const closeItem = (item) => {
            item.button.setAttribute('aria-expanded', 'false');
            item.contentEl.setAttribute('aria-hidden', 'true');
            item.heightWrapper.classList.add('rah-static--height-zero');
            item.heightWrapper.style.height = '0';
            item.heightWrapper.style.overflow = 'hidden';
            item.opacityWrapper.style.opacity = '0';
        };

        const openItem = (item) => {
            item.button.setAttribute('aria-expanded', 'true');
            item.contentEl.setAttribute('aria-hidden', 'false');
            item.heightWrapper.classList.remove('rah-static--height-zero');
            item.heightWrapper.style.height = `${item.contentEl.scrollHeight}px`;
            item.heightWrapper.style.overflow = 'hidden';
            item.opacityWrapper.style.opacity = '1';
        };

        items.forEach(closeItem);

        const listeners = items.map((item) => {
            const onClick = () => {
                const isExpanded = item.button.getAttribute('aria-expanded') === 'true';
                items.forEach(closeItem);
                if (!isExpanded) {
                    openItem(item);
                }
            };

            item.button.addEventListener('click', onClick);
            return { button: item.button, onClick };
        });

        return () => {
            listeners.forEach(({ button, onClick }) => {
                button.removeEventListener('click', onClick);
            });
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
                                                    <section id="comp-mko9ti32" tabIndex="-1"
                                                        className="Oqnisf comp-mko9ti32 wixui-section"
                                                        data-block-level-container="ClassicSection">
                                                        <div id="bgLayers_comp-mko9ti32" data-hook="bgLayers"
                                                            data-motion-part="BG_LAYER comp-mko9ti32" className="MW5IWV">
                                                            <div data-testid="colorUnderlay" className="LWbAav Kv1aVt">
                                                            </div>
                                                            <div id="bgMedia_comp-mko9ti32"
                                                                data-motion-part="BG_MEDIA comp-mko9ti32"
                                                                className="VgO9Yg"><wow-image id="img_comp-mko9ti32"
                                                                    className="jhxvbR Kv1aVt dLPlxY mNGsUM bgImage"
                                                                    data-image-info="{&quot;containerId&quot;:&quot;comp-mko9ti32&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:980,&quot;targetHeight&quot;:366,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:1552,&quot;height&quot;:739,&quot;uri&quot;:&quot;4ad778_d3466846ee924baab377e048378dad6f~mv2.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}"
                                                                    data-motion-part="BG_IMG comp-mko9ti32"
                                                                    data-bg-effect-name="" data-has-ssr-src="true"><img
                                                                        src={heroBgImg}
                                                                        alt=""
                                                                        style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%'}}
                                                                        width="980" height="366" /></wow-image></div>
                                                        </div>
                                                        <div data-mesh-id="comp-mko9ti32inlineContent"
                                                            data-testid="inline-content" className="">
                                                            <div data-mesh-id="comp-mko9ti32inlineContent-gridContainer"
                                                                data-testid="mesh-container-content">
                                                                <div id="comp-mkfvsesi"
                                                                    className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mkfvsesi wixui-rich-text"
                                                                    data-testid="richTextElement">
                                                                    <h3 className="font_3 wixui-rich-text__text"
                                                                        style={{fontSize: '29px'}}><span
                                                                            className="color_40 wixui-rich-text__text"><span
                                                                                style={{fontWeight: 'normal'}}
                                                                                className="wixui-rich-text__text"><span
                                                                                    style={{fontFamily: 'bitter-v2,serif'}}
                                                                                    className="wixui-rich-text__text"><span
                                                                                        style={{fontStyle: 'italic'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontSize: '29px'}}
                                                                                            className="wixui-rich-text__text">&quot;A palavra s&oacute; ganha seu valor quando encontra um outro que a escute.&quot; <span style={{fontSize: '20px'}}>&mdash; Jacques Lacan.</span></span></span></span></span></span>
                                                                    </h3>
                                                                </div>
                                                                <div id="comp-mkgwul3e"
                                                                    className="LKjYWx comp-mkgwul3e wixui-image">
                                                                    <div data-testid="linkElement" className="BzTPNT"><img
                                                                            fetchpriority="high" sizes="858px"
                                                                            srcSet={`${atendimentoBannerImg} 1x, ${atendimentoBannerImg} 2x`}
                                                                            id="img_comp-mkgwul3e"
                                                                            src={atendimentoBannerImg}
                                                                            alt="" style={{objectFit: 'cover'}}
                                                                            className="OcGXIS Tj01hh" width="858"
                                                                            height="175" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <section id="comp-mko9ti321" tabIndex="-1"
                                                        className="Oqnisf comp-mko9ti321 wixui-section"
                                                        data-block-level-container="ClassicSection">
                                                        <div id="bgLayers_comp-mko9ti321" data-hook="bgLayers"
                                                            data-motion-part="BG_LAYER comp-mko9ti321" className="MW5IWV">
                                                            <div data-testid="colorUnderlay" className="LWbAav Kv1aVt">
                                                            </div>
                                                            <div id="bgMedia_comp-mko9ti321"
                                                                data-motion-part="BG_MEDIA comp-mko9ti321"
                                                                className="VgO9Yg"><wow-image id="img_comp-mko9ti321"
                                                                    className="jhxvbR Kv1aVt dLPlxY mNGsUM bgImage"
                                                                    data-image-info="{&quot;containerId&quot;:&quot;comp-mko9ti321&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:980,&quot;targetHeight&quot;:575,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:1552,&quot;height&quot;:739,&quot;uri&quot;:&quot;4ad778_d3466846ee924baab377e048378dad6f~mv2.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;hasAnimation&quot;:false}}"
                                                                    data-motion-part="BG_IMG comp-mko9ti321"
                                                                    data-bg-effect-name="" data-has-ssr-src="true"><img
                                                                        src={heroBgImg}
                                                                        alt="image_edited_edited.png"
                                                                        style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%'}}
                                                                        width="980" height="575" /></wow-image></div>
                                                        </div>
                                                        <div data-mesh-id="comp-mko9ti321inlineContent"
                                                            data-testid="inline-content" className="">
                                                            <div data-mesh-id="comp-mko9ti321inlineContent-gridContainer"
                                                                data-testid="mesh-container-content">
                                                                <div id="comp-mkebj2ko" className="KaEeLN comp-mkebj2ko">
                                                                    <div className="uYj0Sg wixui-box"
                                                                        data-testid="container-bg"></div>
                                                                    <div data-mesh-id="comp-mkebj2koinlineContent"
                                                                        data-testid="inline-content" className="">
                                                                        <div data-mesh-id="comp-mkebj2koinlineContent-gridContainer"
                                                                            data-testid="mesh-container-content">
                                                                            <div id="comp-mkd2xqhe"
                                                                                className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mkd2xqhe wixui-rich-text"
                                                                                data-testid="richTextElement">
                                                                                <h5 className="font_5 wixui-rich-text__text"
                                                                                    style={{fontSize: '23px'}}><span
                                                                                        className="color_40 wixui-rich-text__text"><span
                                                                                            style={{fontWeight: 'normal'}}
                                                                                            className="wixui-rich-text__text"><span
                                                                                                style={{fontFamily: 'bitter-v2,serif'}}
                                                                                                className="wixui-rich-text__text"><span
                                                                                                    style={{fontSize: '23px'}}
                                                                                                    className="wixui-rich-text__text">sobre
                                                                                                    mim</span></span></span></span>
                                                                                </h5>
                                                                            </div>
                                                                            <div id="comp-mkd2hq4g"
                                                                                className="LKjYWx comp-mkd2hq4g wixui-image">
                                                                                <div data-testid="linkElement"
                                                                                    className="BzTPNT"><img
                                                                                        fetchpriority="high"
                                                                                        sizes="290px"
                                                                                        srcSet={`${perfil1Img} 1x, ${perfil1Img} 2x`}
                                                                                        id="img_comp-mkd2hq4g"
                                                                                        src={perfil1Img}
                                                                                        alt="IMG_5475_jpg_edited.jpg"
                                                                                        style={{objectFit: 'cover'}}
                                                                                        className="OcGXIS Tj01hh"
                                                                                        width="290" height="284" />
                                                                                </div>
                                                                            </div>
                                                                            <div id="comp-mkd2pqu1"
                                                                                className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mkd2pqu1 wixui-rich-text"
                                                                                data-testid="richTextElement">
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{fontSize: '19px', lineHeight: '1.4em'}}>
                                                                                    <span style={{fontSize: '19px'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontWeight: 'normal'}}
                                                                                            className="wixui-rich-text__text"><span
                                                                                                style={{fontFamily: 'bitter-v2,serif'}}
                                                                                                className="wixui-rich-text__text">Oi!
                                                                                                Que bom te ver por aqui!
                                                                                            </span><span
                                                                                                style={{fontFamily: 'alliance-no-2,sans-serif'}}
                                                                                                className="wixui-rich-text__text">:)</span></span></span>
                                                                                </p>
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{lineHeight: '1.4em', fontSize: '16px'}}>
                                                                                    <span style={{fontWeight: 'normal'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                            className="wixui-rich-text__text">​</span></span>
                                                                                </p>
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{lineHeight: '1.4em', fontSize: '16px'}}>
                                                                                    <span style={{fontWeight: 'normal'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                            className="wixui-rich-text__text">Meu
                                                                                            nome &eacute; Beatriz
                                                                                            Pimentel.</span></span>
                                                                                </p>
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{lineHeight: '1.4em', fontSize: '16px'}}>
                                                                                    <span style={{fontWeight: 'normal'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                            className="wixui-rich-text__text">Sou
                                                                                            psic&oacute;loga
                                                                                            cl&iacute;nica (CRP
                                                                                            05/05/85932) com
                                                                                            forma&ccedil;&atilde;o pela
                                                                                            Afya Centro
                                                                                            Universit&aacute;rio e
                                                                                            P&oacute;s Graduanda em
                                                                                            psican&aacute;lise com
                                                                                            crian&ccedil;as e
                                                                                            adolescentes.</span></span>
                                                                                </p>
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{lineHeight: '1.4em', fontSize: '16px'}}>
                                                                                    &nbsp;</p>
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{lineHeight: '1.4em', fontSize: '16px'}}>
                                                                                    <span style={{fontWeight: 'normal'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                            className="wixui-rich-text__text">Meu
                                                                                            trabalho se orienta em uma
                                                                                            escuta atenta, escuta
                                                                                            ativa, em acolher a dor e o
                                                                                            sofrimento ps&iacute;quico
                                                                                            com &eacute;tica, respeito e
                                                                                            singularidade.
                                                                                            ​</span></span><span
                                                                                        style={{fontWeight: 'normal'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                            className="wixui-rich-text__text">​</span></span>
                                                                                </p>
                                                                            </div>
                                                                            <div id="comp-mkd39k8m"
                                                                                className="comp-mkd39k8m"
                                                                                data-semantic-classname="button"><a
                                                                                    data-testid="linkElement"
                                                                                    href="https://wa.me/5522997466590" target="_blank" rel="noreferrer noopener" className="StylableButton2545352419__root style-mkoeuwa7__root wixui-button StylableButton2545352419__link" aria-label="Entre em contato"><span
                                                                                        className="StylableButton2545352419__container"><span
                                                                                            className="StylableButton2545352419__label wixui-button__label"
                                                                                            data-testid="stylablebutton-label">Entre
                                                                                            em contato</span><span
                                                                                            className="StylableButton2545352419__icon wixui-button__icon"
                                                                                            aria-hidden="true"
                                                                                            data-testid="stylablebutton-icon"><span><svg
                                                                                                    data-bbox="9 70.9 181 59"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 200 200">
                                                                                                    <g>
                                                                                                        <path
                                                                                                            d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                            </span></span></span></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <section id="comp-mko9ti322" tabIndex="-1"
                                                        className="Oqnisf comp-mko9ti322 wixui-section"
                                                        data-block-level-container="ClassicSection">
                                                        <div id="bgLayers_comp-mko9ti322" data-hook="bgLayers"
                                                            data-motion-part="BG_LAYER comp-mko9ti322" className="MW5IWV">
                                                            <div data-testid="colorUnderlay" className="LWbAav Kv1aVt">
                                                            </div>
                                                            <div id="bgMedia_comp-mko9ti322"
                                                                data-motion-part="BG_MEDIA comp-mko9ti322"
                                                                className="VgO9Yg"><wow-image id="img_comp-mko9ti322"
                                                                    className="jhxvbR Kv1aVt dLPlxY mNGsUM bgImage"
                                                                    data-image-info="{&quot;containerId&quot;:&quot;comp-mko9ti322&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:980,&quot;targetHeight&quot;:303,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:1552,&quot;height&quot;:739,&quot;uri&quot;:&quot;4ad778_d3466846ee924baab377e048378dad6f~mv2.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;hasAnimation&quot;:false}}"
                                                                    data-motion-part="BG_IMG comp-mko9ti322"
                                                                    data-bg-effect-name="" data-has-ssr-src="true"><img
                                                                        src={heroBgImg}
                                                                        alt="image_edited_edited.png"
                                                                        style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%'}}
                                                                        width="980" height="303" /></wow-image></div>
                                                        </div>
                                                        <div data-mesh-id="comp-mko9ti322inlineContent"
                                                            data-testid="inline-content" className="">
                                                            <div data-mesh-id="comp-mko9ti322inlineContent-gridContainer"
                                                                data-testid="mesh-container-content">
                                                                <div id="comp-mkmmlcyt" className="comp-mkmmlcyt"
                                                                    data-semantic-classname="button"><button
                                                                        type="button"
                                                                        className="StylableButton2545352419__root style-mkmmlcz2__root wixui-button"
                                                                        data-testid="buttonContent" aria-label=""><span
                                                                            className="StylableButton2545352419__container"><span
                                                                                className="StylableButton2545352419__icon wixui-button__icon"
                                                                                aria-hidden="true"
                                                                                data-testid="stylablebutton-icon"><span><svg
                                                                                        data-bbox="9 70.9 181 59"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 200 200">
                                                                                        <g>
                                                                                            <path
                                                                                                d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span></span></span></button></div>
                                                                <div id="comp-mkmmm2v8"
                                                                    className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mkmmm2v8 wixui-rich-text"
                                                                    data-testid="richTextElement">
                                                                    <h5 className="font_5 wixui-rich-text__text"
                                                                        style={{fontSize: '23px', textAlign: 'center'}}><span
                                                                            className="color_40 wixui-rich-text__text"><span
                                                                                style={{fontWeight: 'normal'}}
                                                                                className="wixui-rich-text__text"><span
                                                                                    style={{fontFamily: 'bitter-v2,serif'}}
                                                                                    className="wixui-rich-text__text"><span
                                                                                        style={{fontSize: '23px'}}
                                                                                        className="wixui-rich-text__text">meus
                                                                                        servi&ccedil;os</span></span></span></span>
                                                                    </h5>
                                                                </div>
                                                                <div id="comp-mkmmoyjk"
                                                                    className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mkmmoyjk wixui-rich-text"
                                                                    data-testid="richTextElement">
                                                                    <h5 className="font_5 wixui-rich-text__text"
                                                                        style={{fontSize: '14px', textAlign: 'center'}}><span
                                                                            style={{fontSize: '14px'}}
                                                                            className="wixui-rich-text__text"><span
                                                                                className="color_40 wixui-rich-text__text"><span
                                                                                    style={{fontWeight: 'normal'}}
                                                                                    className="wixui-rich-text__text"><span
                                                                                        style={{fontFamily: 'bitter-v2,serif'}}
                                                                                        className="wixui-rich-text__text">Saiba
                                                                                        mais
                                                                                        sobre:</span></span></span></span>
                                                                    </h5>
                                                                </div>
                                                                <div id="comp-mkmmhpne"
                                                                    className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mkmmhpne wixui-rich-text"
                                                                    data-testid="richTextElement">
                                                                    <p className="font_8 wixui-rich-text__text"
                                                                        style={{fontSize: '16px', lineHeight: '1.4em'}}><span
                                                                            style={{fontSize: '16px'}}
                                                                            className="wixui-rich-text__text"><span
                                                                                style={{fontWeight: 'normal'}}
                                                                                className="wixui-rich-text__text"><span
                                                                                    style={{fontFamily: 'bitter-v2,serif'}}
                                                                                    className="wixui-rich-text__text">Realizo
                                                                                    atendimentos cl&iacute;nicos
                                                                                    online para adultos,
                                                                                    em qualquer lugar do mundo.</span></span></span>
                                                                    </p>
                                                                </div>
                                                                <div id="comp-mkmmnk2v" className="comp-mkmmnk2v"
                                                                    data-semantic-classname="button"><a
                                                                        data-testid="linkElement"
                                                                        data-anchor="anchors-mko9ti4b3"
                                                                        href="https://wa.me/5522997466590" target="_blank" rel="noreferrer noopener" className="StylableButton2545352419__root style-mkoevvba__root wixui-button StylableButton2545352419__link" aria-label="Atendimento online"><span
                                                                            className="StylableButton2545352419__container"><span
                                                                                className="StylableButton2545352419__label wixui-button__label"
                                                                                data-testid="stylablebutton-label">Atendimento
                                                                                online</span><span
                                                                                className="StylableButton2545352419__icon wixui-button__icon"
                                                                                aria-hidden="true"
                                                                                data-testid="stylablebutton-icon"><span><svg
                                                                                        data-bbox="9 70.9 181 59"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 200 200">
                                                                                        <g>
                                                                                            <path
                                                                                                d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span></span></span></a></div>
                                                                <div id="comp-mkmmptar" className="comp-mkmmptar"
                                                                    data-semantic-classname="button"><a
                                                                        data-testid="linkElement"
                                                                        href="https://wa.me/5522997466590" target="_blank"
                                                                        rel="noreferrer noopener"
                                                                        className="StylableButton2545352419__root style-mkoeva7y__root wixui-button StylableButton2545352419__link"
                                                                        aria-label="Fale comigo"><span
                                                                            className="StylableButton2545352419__container"><span
                                                                                className="StylableButton2545352419__label wixui-button__label"
                                                                                data-testid="stylablebutton-label">Fale
                                                                                comigo</span><span
                                                                                className="StylableButton2545352419__icon wixui-button__icon"
                                                                                aria-hidden="true"
                                                                                data-testid="stylablebutton-icon"><span><svg
                                                                                        data-bbox="9 70.9 181 59"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 200 200">
                                                                                        <g>
                                                                                            <path
                                                                                                d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span></span></span></a></div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <section id="comp-mko9ti33" tabIndex="-1"
                                                        className="Oqnisf comp-mko9ti33 wixui-section"
                                                        data-block-level-container="ClassicSection">
                                                        <div id="bgLayers_comp-mko9ti33" data-hook="bgLayers"
                                                            data-motion-part="BG_LAYER comp-mko9ti33" className="MW5IWV">
                                                            <div data-testid="colorUnderlay" className="LWbAav Kv1aVt">
                                                            </div>
                                                            <div id="bgMedia_comp-mko9ti33"
                                                                data-motion-part="BG_MEDIA comp-mko9ti33"
                                                                className="VgO9Yg"><wow-image id="img_comp-mko9ti33"
                                                                    className="jhxvbR Kv1aVt dLPlxY mNGsUM bgImage"
                                                                    data-image-info="{&quot;containerId&quot;:&quot;comp-mko9ti33&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:980,&quot;targetHeight&quot;:473,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:1552,&quot;height&quot;:739,&quot;uri&quot;:&quot;4ad778_d3466846ee924baab377e048378dad6f~mv2.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;hasAnimation&quot;:false}}"
                                                                    data-motion-part="BG_IMG comp-mko9ti33"
                                                                    data-bg-effect-name="" data-has-ssr-src="true"><img
                                                                        src={heroBgImg}
                                                                        alt="image_edited_edited.png"
                                                                        style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%'}}
                                                                        width="980" height="473" /></wow-image></div>
                                                        </div>
                                                        <div data-mesh-id="comp-mko9ti33inlineContent"
                                                            data-testid="inline-content" className="">
                                                            <div data-mesh-id="comp-mko9ti33inlineContent-gridContainer"
                                                                data-testid="mesh-container-content">
                                                                <div id="comp-mkh21fds" className="KaEeLN comp-mkh21fds">
                                                                    <div className="uYj0Sg wixui-box"
                                                                        data-testid="container-bg"></div>
                                                                    <div data-mesh-id="comp-mkh21fdsinlineContent"
                                                                        data-testid="inline-content" className="">
                                                                        <div data-mesh-id="comp-mkh21fdsinlineContent-gridContainer"
                                                                            data-testid="mesh-container-content">
                                                                            <div id="comp-mkh21fe0"
                                                                                className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mkh21fe0 wixui-rich-text"
                                                                                data-testid="richTextElement">
                                                                                <h5 className="font_5 wixui-rich-text__text"
                                                                                    style={{fontSize: '23px'}}><span
                                                                                        className="color_40 wixui-rich-text__text"><span
                                                                                            style={{fontWeight: 'normal'}}
                                                                                            className="wixui-rich-text__text"><span
                                                                                                style={{fontFamily: 'bitter-v2,serif'}}
                                                                                                className="wixui-rich-text__text"><span
                                                                                                    style={{fontSize: '23px'}}
                                                                                                    className="wixui-rich-text__text">atendimento
                                                                                                    online</span></span></span></span>
                                                                                </h5>
                                                                            </div>
                                                                            <div id="comp-mkh23844"
                                                                                className="LKjYWx comp-mkh23844 wixui-image">
                                                                                <div data-testid="linkElement"
                                                                                    className="BzTPNT"><img loading="lazy"
                                                                                        sizes="284px"
                                                                                        srcSet={`${perfil2Img} 1x, ${perfil2Img} 2x`}
                                                                                        id="img_comp-mkh23844"
                                                                                        src={perfil2Img}
                                                                                        alt="" style={{objectFit: 'cover'}}
                                                                                        className="OcGXIS Tj01hh"
                                                                                        width="284" height="296" />
                                                                                </div>
                                                                            </div>
                                                                            <div id="comp-mkh26iyx"
                                                                                className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mkh26iyx wixui-rich-text"
                                                                                data-testid="richTextElement">
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{lineHeight: 'normal', fontSize: '16px'}}>
                                                                                    <span style={{fontWeight: 'normal'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                            className="wixui-rich-text__text"><span
                                                                                                style={{letterSpacing: 'normal'}}
                                                                                                className="wixui-rich-text__text">As
                                                                                                sess&otilde;es online
                                                                                                ocorrem atrav&eacute;s
                                                                                                da plataforma <span
                                                                                                    style={{fontWeight: 'bold'}}
                                                                                                    className="wixui-rich-text__text">Google
                                                                                                    Meet</span>, e podem
                                                                                                ser feitas
                                                                                                atrav&eacute;s de um
                                                                                                notebook, tablet ou
                                                                                                celular. Cada
                                                                                                sess&atilde;o possui em
                                                                                                m&eacute;dia 50 minutos
                                                                                                e a frequ&ecirc;ncia
                                                                                                &eacute;
                                                                                                semanal.</span></span></span>
                                                                                </p>
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{lineHeight: 'normal', fontSize: '16px'}}>
                                                                                    <span style={{fontWeight: 'normal'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                            className="wixui-rich-text__text"><span
                                                                                                style={{letterSpacing: 'normal'}}
                                                                                                className="wixui-rich-text__text">​</span></span></span>
                                                                                </p>
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{lineHeight: 'normal', fontSize: '16px'}}>
                                                                                    <span style={{fontWeight: 'normal'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                            className="wixui-rich-text__text"><span
                                                                                                style={{letterSpacing: 'normal'}}
                                                                                                className="wixui-rich-text__text">Voc&ecirc;
                                                                                                receber&aacute;, minutos
                                                                                                antes do primeiro
                                                                                                hor&aacute;rio agendado,
                                                                                                um link para a sua
                                                                                                sess&atilde;o.</span></span></span>
                                                                                </p>
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{lineHeight: 'normal', fontSize: '16px'}}>
                                                                                    &nbsp;</p>
                                                                                <p className="font_8 wixui-rich-text__text"
                                                                                    style={{lineHeight: 'normal', fontSize: '16px'}}>
                                                                                    <span style={{fontWeight: 'normal'}}
                                                                                        className="wixui-rich-text__text"><span
                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                            className="wixui-rich-text__text"><span
                                                                                                style={{letterSpacing: 'normal'}}
                                                                                                className="wixui-rich-text__text">&Eacute;
                                                                                                preciso que a
                                                                                                sess&atilde;o seja
                                                                                                realizada em um ambiente
                                                                                                privado, silencioso e
                                                                                                que n&atilde;o haja o
                                                                                                risco de
                                                                                                interrup&ccedil;&otilde;es
                                                                                                de terceiros, para que o
                                                                                                sigilo possa ser
                                                                                                preservado. Sugere-se o
                                                                                                uso de fones de
                                                                                                ouvido.</span></span></span>
                                                                                </p>
                                                                            </div>
                                                                            <div id="comp-mkh21feb4"
                                                                                className="comp-mkh21feb4"
                                                                                data-semantic-classname="button"><a
                                                                                    data-testid="linkElement"
                                                                                    href="https://wa.me/5522997466590" target="_blank" rel="noreferrer noopener" className="StylableButton2545352419__root style-mkoeyo38__root wixui-button StylableButton2545352419__link" aria-label="Agende o seu horário"><span
                                                                                        className="StylableButton2545352419__container"><span
                                                                                            className="StylableButton2545352419__label wixui-button__label"
                                                                                            data-testid="stylablebutton-label">Agende
                                                                                            o seu horário</span><span
                                                                                            className="StylableButton2545352419__icon wixui-button__icon"
                                                                                            aria-hidden="true"
                                                                                            data-testid="stylablebutton-icon"><span><svg
                                                                                                    data-bbox="9 70.9 181 59"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 200 200">
                                                                                                    <g>
                                                                                                        <path
                                                                                                            d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                            </span></span></span></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <section id="comp-mko9ti331" tabIndex="-1"
                                                        className="Oqnisf comp-mko9ti331 wixui-section"
                                                        data-block-level-container="ClassicSection">
                                                        <div id="bgLayers_comp-mko9ti331" data-hook="bgLayers"
                                                            data-motion-part="BG_LAYER comp-mko9ti331" className="MW5IWV">
                                                            <div data-testid="colorUnderlay" className="LWbAav Kv1aVt">
                                                            </div>
                                                            <div id="bgMedia_comp-mko9ti331"
                                                                data-motion-part="BG_MEDIA comp-mko9ti331"
                                                                className="VgO9Yg"><wow-image id="img_comp-mko9ti331"
                                                                    className="jhxvbR Kv1aVt dLPlxY mNGsUM bgImage"
                                                                    data-image-info="{&quot;containerId&quot;:&quot;comp-mko9ti331&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:980,&quot;targetHeight&quot;:462,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:1552,&quot;height&quot;:739,&quot;uri&quot;:&quot;4ad778_d3466846ee924baab377e048378dad6f~mv2.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;hasAnimation&quot;:false}}"
                                                                    data-motion-part="BG_IMG comp-mko9ti331"
                                                                    data-bg-effect-name="" data-has-ssr-src="true"><img
                                                                        src={heroBgImg}
                                                                        alt="image_edited_edited.png"
                                                                        style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%'}}
                                                                        width="980" height="462" /></wow-image></div>
                                                        </div>
                                                        <div data-mesh-id="comp-mko9ti331inlineContent"
                                                            data-testid="inline-content" className="">
                                                            <div data-mesh-id="comp-mko9ti331inlineContent-gridContainer"
                                                                data-testid="mesh-container-content">
                                                                <div id="comp-mkmo4vph" className="QrIus  comp-mkmo4vph">
                                                                    <div className="comp-mkmo4vph">
                                                                        <div style={{WixColor29: 'var(--wix-color-3)', WixColor37: 'var(--wix-color-5)', WixColor38: 'var(--wix-color-8)', WixColor39: 'var(--wix-color-8)', WixColor40: 'var(--wix-color-1)', WixColor41: 'var(--wix-color-8)', WixColor42: 'var(--wix-color-8)', WixColor43: 'var(--wix-color-1)', WixColor44: 'var(--wix-color-3)', WixColor45: 'var(--wix-color-3)', WixColor46: 'var(--wix-color-1)', WixColor47: 'var(--wix-color-1)', WixColor48: 'var(--wix-color-8)', WixColor49: 'var(--wix-color-8)', WixColor50: 'var(--wix-color-1)', WixColor51: 'var(--wix-color-8)', WixColor52: 'var(--wix-color-8)', WixColor53: 'var(--wix-color-1)', WixColor54: 'var(--wix-color-3)', WixColor55: 'var(--wix-color-3)'}}
                                                                            data-hook="tpa-components-provider">
                                                                            <div style={{WixColor29: 'var(--wix-color-3)', WixColor37: 'var(--wix-color-5)', WixColor38: 'var(--wix-color-8)', WixColor39: 'var(--wix-color-8)', WixColor40: 'var(--wix-color-1)', WixColor41: 'var(--wix-color-8)', WixColor42: 'var(--wix-color-8)', WixColor43: 'var(--wix-color-1)', WixColor44: 'var(--wix-color-3)', WixColor45: 'var(--wix-color-3)', WixColor46: 'var(--wix-color-1)', WixColor47: 'var(--wix-color-1)', WixColor48: 'var(--wix-color-8)', WixColor49: 'var(--wix-color-8)', WixColor50: 'var(--wix-color-1)', WixColor51: 'var(--wix-color-8)', WixColor52: 'var(--wix-color-8)', WixColor53: 'var(--wix-color-1)', WixColor54: 'var(--wix-color-3)', WixColor55: 'var(--wix-color-3)'}}
                                                                                data-hook="tpa-components-provider">
                                                                                <div data-hook="faq-root" dir="ltr"
                                                                                    style={{ItemTopBottomPadding: '10px', ItemLeftRightPadding: '15px'}}
                                                                                    className="sGbfIQF oY1h81f--isTopCategoriesPosition oY1h81f--hideSearch oY1h81f--hideCategories oY1h81f---theme-4-line">
                                                                                    <div
                                                                                        className="snHKBk3 oY1h81f--isTopCategoriesPosition oY1h81f---alignment-6-center">
                                                                                        <h2 className="sjxJZq7 oXbCIK0---typography-10-largeTitle oXbCIK0---priority-7-primary sJehM1S"
                                                                                            aria-hidden="false"
                                                                                            data-hook="title">Perguntas
                                                                                            frequentes</h2>
                                                                                    </div>
                                                                                    <div className="styp7eL"
                                                                                        data-hook="questions-results-found">
                                                                                    </div>
                                                                                    <div style={{ItemGap: '5px', ColumnGap: '12px'}}
                                                                                        className="sSChNLR"
                                                                                        data-hook="widget-accordion-wrapper">
                                                                                        <div className="si3fyWy sajl2Ja szXe2ld o__7W64m2---itemAppearance-4-line"
                                                                                            data-hook="accordion-one-column-a2f1c2a8-9cf3-4f11-9a52-264e02d02f8d"
                                                                                            role="region">
                                                                                            <div
                                                                                                className="s__7arzZi orqXLWt---size-5-small orqXLWt---theme-4-line sM45uD8">
                                                                                                <button
                                                                                                    id="a2f1c2a8-9cf3-4f11-9a52-264e02d02f8d"
                                                                                                    className="sEvLmiB has-custom-focus"
                                                                                                    data-hook="accordion-item-header"
                                                                                                    aria-controls="a2f1c2a8-9cf3-4f11-9a52-264e02d02f8d-item-content-84"
                                                                                                    aria-expanded="false">
                                                                                                    <div
                                                                                                        className="sdFo7rg">
                                                                                                        <div
                                                                                                            className="ss_xluw">
                                                                                                            <div className="s__5H_FIV"
                                                                                                                data-hook="accordion-item-header-content">
                                                                                                                <div
                                                                                                                    className="s__8U_XjB">
                                                                                                                    <h3 className="sum_lkg"
                                                                                                                        data-hook="title">
                                                                                                                        Qual
                                                                                                                        o
                                                                                                                        valor
                                                                                                                        das
                                                                                                                        sessões
                                                                                                                        e
                                                                                                                        as
                                                                                                                        formas
                                                                                                                        de
                                                                                                                        pagamento?
                                                                                                                    </h3>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="sAM_BuZ">
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="slHDEik"
                                                                                                                aria-hidden="true">
                                                                                                                <svg viewBox="0 0 24 24"
                                                                                                                    fill="currentColor"
                                                                                                                    width="24"
                                                                                                                    height="24"
                                                                                                                    className="spmcv9_"
                                                                                                                    data-hook="expandIcon"
                                                                                                                    data-label="Expand-ChevronDown">
                                                                                                                    <path
                                                                                                                        fillRule="evenodd"
                                                                                                                        d="M18.2546728,8.18171329 L18.9617796,8.88882007 L12.5952867,15.2537133 L12.5978964,15.2558012 L11.8907896,15.962908 L11.8882867,15.9607133 L11.8874628,15.9617796 L11.180356,15.2546728 L11.1812867,15.2527133 L4.81828671,8.88882007 L5.52539349,8.18171329 L11.8882867,14.5457133 L18.2546728,8.18171329 Z">
                                                                                                                    </path>
                                                                                                                </svg>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </button>
                                                                                                <div style={{height: '0', overflow: 'hidden'}}
                                                                                                    className="rah-static rah-static--height-zero">
                                                                                                    <div
                                                                                                        style={{transition: 'opacity 300ms cubic-bezier(.39,.11,.37,.99) 0ms', WebkitTransition: 'opacity 300ms cubic-bezier(.39,.11,.37,.99) 0ms', opacity: '0'}}>
                                                                                                        <div id="a2f1c2a8-9cf3-4f11-9a52-264e02d02f8d-item-content-84"
                                                                                                            data-hook="accordion-item-content"
                                                                                                            role="region"
                                                                                                            aria-labelledby="a2f1c2a8-9cf3-4f11-9a52-264e02d02f8d"
                                                                                                            aria-hidden="true">
                                                                                                            <div
                                                                                                                className="s__0ipcHD">
                                                                                                                <div style={{direction: 'ltr'}}
                                                                                                                    className="sBuQfDg oytk1I5---layout-8-collapse">
                                                                                                                    <div className="P5Fqi"
                                                                                                                        dir="ltr"
                                                                                                                        style={{RicosTextColor: '#404040', RicosTextColorTuple: '64, 64, 64', RicosActionColor: '#808080', RicosActionColorTuple: '128, 128, 128', RicosBackgroundColor: '#ffffff', RicosBackgroundColorTuple: '255, 255, 255', RicosFallbackColor: '#000000', RicosFallbackColorTuple: '0, 0, 0', RicosActionColorFallback: '#808080', RicosActionColorFallbackTuple: '128, 128, 128', RicosCustomPFontWeight: 'normal', RicosCustomPFontStyle: 'normal', RicosCustomPLineHeight: '1.5', RicosCustomPFontSize: '15px', RicosCustomPFontFamily: 'bitter-v2', RicosCustomH1FontWeight: 'normal', RicosCustomH1FontStyle: 'normal', RicosCustomH1LineHeight: '1.5', RicosCustomH1FontSize: '15px', RicosCustomH1FontFamily: 'bitter-v2', RicosCustomH2FontWeight: 'normal', RicosCustomH2FontStyle: 'normal', RicosCustomH2LineHeight: '1.5', RicosCustomH2FontSize: '15px', RicosCustomH2FontFamily: 'bitter-v2', RicosCustomH3FontWeight: 'normal', RicosCustomH3FontStyle: 'normal', RicosCustomH3LineHeight: '1.5', RicosCustomH3FontSize: '15px', RicosCustomH3FontFamily: 'bitter-v2', RicosCustomH4FontWeight: 'normal', RicosCustomH4FontStyle: 'normal', RicosCustomH4LineHeight: '1.5', RicosCustomH4FontSize: '15px', RicosCustomH4FontFamily: 'bitter-v2', RicosCustomH5FontWeight: 'normal', RicosCustomH5FontStyle: 'normal', RicosCustomH5LineHeight: '1.5', RicosCustomH5FontSize: '15px', RicosCustomH5FontFamily: 'bitter-v2', RicosCustomH6FontWeight: 'normal', RicosCustomH6FontStyle: 'normal', RicosCustomH6LineHeight: '1.5', RicosCustomH6FontSize: '15px', RicosCustomH6FontFamily: 'bitter-v2', RicosCustomQuoteLineHeight: '1.5', RicosCustomQuoteFontSize: '15px', RicosCustomQuoteFontFamily: 'bitter-v2', RicosCustomCodeBlockLineHeight: '1.5', RicosCustomSpanFontFamily: 'bitter-v2', RicosCustomSpanFontSize: '15px', RicosCustomSpanLineHeight: '1.5', RicosCustomLinkFontFamily: 'bitter-v2', RicosCustomLinkFontSize: '15px', RicosCustomLinkLineHeight: '1.5', RicosCustomHashtagFontFamily: 'bitter-v2', RicosCustomHashtagFontSize: '15px', RicosCustomHashtagLineHeight: '1.5', RicosCustomAudioFontFamily: 'bitter-v2', RicosCustomAudioFontSize: '15px', RicosCustomAudioLineHeight: '1.5', RicosBreakoutNormalPaddingStart: '0', RicosBreakoutNormalPaddingEnd: '0', RicosBreakoutFullWidthPaddingStart: '0', RicosBreakoutFullWidthPaddingEnd: '0'}}
                                                                                                                        data-id="content-viewer">
                                                                                                                        <div
                                                                                                                            className="tzp3c">
                                                                                                                            <div
                                                                                                                                className="NBiag">
                                                                                                                                <p className="Ljsmg AWnQW yG99M"
                                                                                                                                    dir="auto"
                                                                                                                                    id="viewer-atf0a">
                                                                                                                                    <span
                                                                                                                                        className="L6v8G"><span>Os
                                                                                                                                            valores
                                                                                                                                            das
                                                                                                                                            sessões
                                                                                                                                            são
                                                                                                                                            informados
                                                                                                                                            mediante
                                                                                                                                            contato.
                                                                                                                                            O
                                                                                                                                            pagamento
                                                                                                                                            poderá
                                                                                                                                            ser
                                                                                                                                            feito
                                                                                                                                            via
                                                                                                                                            PIX.</span></span>
                                                                                                                                </p>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="sit_GlP">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="s__7arzZi orqXLWt---size-5-small orqXLWt---theme-4-line sM45uD8">
                                                                                                <button
                                                                                                    id="ca3a9b17-2850-4fcd-9b1c-8beddd89154f"
                                                                                                    className="sEvLmiB has-custom-focus"
                                                                                                    data-hook="accordion-item-header"
                                                                                                    aria-controls="ca3a9b17-2850-4fcd-9b1c-8beddd89154f-item-content-85"
                                                                                                    aria-expanded="false">
                                                                                                    <div
                                                                                                        className="sdFo7rg">
                                                                                                        <div
                                                                                                            className="ss_xluw">
                                                                                                            <div className="s__5H_FIV"
                                                                                                                data-hook="accordion-item-header-content">
                                                                                                                <div
                                                                                                                    className="s__8U_XjB">
                                                                                                                    <h3 className="sum_lkg"
                                                                                                                        data-hook="title">
                                                                                                                        Como
                                                                                                                        é
                                                                                                                        a
                                                                                                                        primeira
                                                                                                                        sessão?
                                                                                                                        E
                                                                                                                        as
                                                                                                                        seguintes?
                                                                                                                    </h3>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="sAM_BuZ">
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="slHDEik"
                                                                                                                aria-hidden="true">
                                                                                                                <svg viewBox="0 0 24 24"
                                                                                                                    fill="currentColor"
                                                                                                                    width="24"
                                                                                                                    height="24"
                                                                                                                    className="spmcv9_"
                                                                                                                    data-hook="expandIcon"
                                                                                                                    data-label="Expand-ChevronDown">
                                                                                                                    <path
                                                                                                                        fillRule="evenodd"
                                                                                                                        d="M18.2546728,8.18171329 L18.9617796,8.88882007 L12.5952867,15.2537133 L12.5978964,15.2558012 L11.8907896,15.962908 L11.8882867,15.9607133 L11.8874628,15.9617796 L11.180356,15.2546728 L11.1812867,15.2527133 L4.81828671,8.88882007 L5.52539349,8.18171329 L11.8882867,14.5457133 L18.2546728,8.18171329 Z">
                                                                                                                    </path>
                                                                                                                </svg>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </button>
                                                                                                <div style={{height: '0', overflow: 'hidden'}}
                                                                                                    className="rah-static rah-static--height-zero">
                                                                                                    <div
                                                                                                        style={{transition: 'opacity 300ms cubic-bezier(.39,.11,.37,.99) 0ms', WebkitTransition: 'opacity 300ms cubic-bezier(.39,.11,.37,.99) 0ms', opacity: '0'}}>
                                                                                                        <div id="ca3a9b17-2850-4fcd-9b1c-8beddd89154f-item-content-85"
                                                                                                            data-hook="accordion-item-content"
                                                                                                            role="region"
                                                                                                            aria-labelledby="ca3a9b17-2850-4fcd-9b1c-8beddd89154f"
                                                                                                            aria-hidden="true">
                                                                                                            <div
                                                                                                                className="s__0ipcHD">
                                                                                                                <div style={{direction: 'ltr'}}
                                                                                                                    className="sBuQfDg oytk1I5---layout-8-collapse">
                                                                                                                    <div className="P5Fqi"
                                                                                                                        dir="ltr"
                                                                                                                        style={{RicosTextColor: '#404040', RicosTextColorTuple: '64, 64, 64', RicosActionColor: '#808080', RicosActionColorTuple: '128, 128, 128', RicosBackgroundColor: '#ffffff', RicosBackgroundColorTuple: '255, 255, 255', RicosFallbackColor: '#000000', RicosFallbackColorTuple: '0, 0, 0', RicosActionColorFallback: '#808080', RicosActionColorFallbackTuple: '128, 128, 128', RicosCustomPFontWeight: 'normal', RicosCustomPFontStyle: 'normal', RicosCustomPLineHeight: '1.5', RicosCustomPFontSize: '15px', RicosCustomPFontFamily: 'bitter-v2', RicosCustomH1FontWeight: 'normal', RicosCustomH1FontStyle: 'normal', RicosCustomH1LineHeight: '1.5', RicosCustomH1FontSize: '15px', RicosCustomH1FontFamily: 'bitter-v2', RicosCustomH2FontWeight: 'normal', RicosCustomH2FontStyle: 'normal', RicosCustomH2LineHeight: '1.5', RicosCustomH2FontSize: '15px', RicosCustomH2FontFamily: 'bitter-v2', RicosCustomH3FontWeight: 'normal', RicosCustomH3FontStyle: 'normal', RicosCustomH3LineHeight: '1.5', RicosCustomH3FontSize: '15px', RicosCustomH3FontFamily: 'bitter-v2', RicosCustomH4FontWeight: 'normal', RicosCustomH4FontStyle: 'normal', RicosCustomH4LineHeight: '1.5', RicosCustomH4FontSize: '15px', RicosCustomH4FontFamily: 'bitter-v2', RicosCustomH5FontWeight: 'normal', RicosCustomH5FontStyle: 'normal', RicosCustomH5LineHeight: '1.5', RicosCustomH5FontSize: '15px', RicosCustomH5FontFamily: 'bitter-v2', RicosCustomH6FontWeight: 'normal', RicosCustomH6FontStyle: 'normal', RicosCustomH6LineHeight: '1.5', RicosCustomH6FontSize: '15px', RicosCustomH6FontFamily: 'bitter-v2', RicosCustomQuoteLineHeight: '1.5', RicosCustomQuoteFontSize: '15px', RicosCustomQuoteFontFamily: 'bitter-v2', RicosCustomCodeBlockLineHeight: '1.5', RicosCustomSpanFontFamily: 'bitter-v2', RicosCustomSpanFontSize: '15px', RicosCustomSpanLineHeight: '1.5', RicosCustomLinkFontFamily: 'bitter-v2', RicosCustomLinkFontSize: '15px', RicosCustomLinkLineHeight: '1.5', RicosCustomHashtagFontFamily: 'bitter-v2', RicosCustomHashtagFontSize: '15px', RicosCustomHashtagLineHeight: '1.5', RicosCustomAudioFontFamily: 'bitter-v2', RicosCustomAudioFontSize: '15px', RicosCustomAudioLineHeight: '1.5', RicosBreakoutNormalPaddingStart: '0', RicosBreakoutNormalPaddingEnd: '0', RicosBreakoutFullWidthPaddingStart: '0', RicosBreakoutFullWidthPaddingEnd: '0'}}
                                                                                                                        data-id="content-viewer">
                                                                                                                        <div
                                                                                                                            className="tzp3c">
                                                                                                                            <div
                                                                                                                                className="NBiag">
                                                                                                                                <p className="Ljsmg AWnQW yG99M"
                                                                                                                                    style={{paddingTop: '0px', paddingBottom: '0px', lineHeight: 'max(0.8em, 1.656em)'}}
                                                                                                                                    dir="auto"
                                                                                                                                    id="viewer-atf0a">
                                                                                                                                    <span
                                                                                                                                        className="L6v8G"><span>O
                                                                                                                                            objetivo
                                                                                                                                            da
                                                                                                                                            primeira
                                                                                                                                            sessão
                                                                                                                                            é
                                                                                                                                            que
                                                                                                                                            você
                                                                                                                                            me
                                                                                                                                            conte
                                                                                                                                            sobre
                                                                                                                                            o
                                                                                                                                            que
                                                                                                                                            o
                                                                                                                                            levou
                                                                                                                                            a
                                                                                                                                            buscar
                                                                                                                                            o
                                                                                                                                            tratamento
                                                                                                                                            neste
                                                                                                                                            momento.
                                                                                                                                            A
                                                                                                                                            ideia
                                                                                                                                            é
                                                                                                                                            que
                                                                                                                                            você
                                                                                                                                            possa
                                                                                                                                            falar
                                                                                                                                            -
                                                                                                                                            da
                                                                                                                                            maneira
                                                                                                                                            mais
                                                                                                                                            sincera
                                                                                                                                            e
                                                                                                                                            livre
                                                                                                                                            possível
                                                                                                                                            -
                                                                                                                                            sobre
                                                                                                                                            o
                                                                                                                                            que
                                                                                                                                            está
                                                                                                                                            o
                                                                                                                                            fazendo
                                                                                                                                            sofrer,
                                                                                                                                            sobre
                                                                                                                                            as
                                                                                                                                            suas
                                                                                                                                            questões,
                                                                                                                                            sentimentos,
                                                                                                                                            queixas
                                                                                                                                            e
                                                                                                                                            sintomas,
                                                                                                                                            e
                                                                                                                                            o
                                                                                                                                            que
                                                                                                                                            mais
                                                                                                                                            te
                                                                                                                                            ocorrer
                                                                                                                                            durante
                                                                                                                                            o
                                                                                                                                            atendimento.</span></span>
                                                                                                                                </p>
                                                                                                                                <div className="Ljsmg AWnQW yG99M"
                                                                                                                                    style={{paddingTop: '0px', paddingBottom: '0px', lineHeight: 'max(0.8em, 1.656em)'}}
                                                                                                                                    dir="auto"
                                                                                                                                    id="viewer-bgn2m">
                                                                                                                                    <span
                                                                                                                                        className="L6v8G"><br
                                                                                                                                            role="presentation" /></span>
                                                                                                                                </div>
                                                                                                                                <p className="Ljsmg AWnQW yG99M"
                                                                                                                                    style={{paddingTop: '0px', paddingBottom: '0px', lineHeight: 'max(0.8em, 1.656em)'}}
                                                                                                                                    dir="auto"
                                                                                                                                    id="viewer-c8v56">
                                                                                                                                    <span
                                                                                                                                        className="L6v8G"><span>Nesse
                                                                                                                                            primeiro
                                                                                                                                            encontro
                                                                                                                                            haverá
                                                                                                                                            um
                                                                                                                                            momento
                                                                                                                                            para
                                                                                                                                            que
                                                                                                                                            eu
                                                                                                                                            possa
                                                                                                                                            te
                                                                                                                                            explicar
                                                                                                                                            com
                                                                                                                                            mais
                                                                                                                                            detalhes
                                                                                                                                            sobre
                                                                                                                                            o
                                                                                                                                            processo
                                                                                                                                            da
                                                                                                                                            análise
                                                                                                                                            e
                                                                                                                                            também
                                                                                                                                            para
                                                                                                                                            retirar
                                                                                                                                            dúvidas
                                                                                                                                            e
                                                                                                                                            fazermos
                                                                                                                                            alguns
                                                                                                                                            combinados
                                                                                                                                            (quanto
                                                                                                                                            a
                                                                                                                                            valor,
                                                                                                                                            frequência,
                                                                                                                                            faltas,
                                                                                                                                            etc.).</span></span>
                                                                                                                                </p>
                                                                                                                                <div className="Ljsmg AWnQW yG99M"
                                                                                                                                    style={{paddingTop: '0px', paddingBottom: '0px', lineHeight: 'max(0.8em, 1.656em)'}}
                                                                                                                                    dir="auto"
                                                                                                                                    id="viewer-85tan">
                                                                                                                                    <span
                                                                                                                                        className="L6v8G"><br
                                                                                                                                            role="presentation" /></span>
                                                                                                                                </div>
                                                                                                                                <p className="Ljsmg AWnQW yG99M"
                                                                                                                                    style={{paddingTop: '0px', paddingBottom: '0px', lineHeight: 'max(0.8em, 1.656em)'}}
                                                                                                                                    dir="auto"
                                                                                                                                    id="viewer-1q721">
                                                                                                                                    <span
                                                                                                                                        className="L6v8G"><span>Nas
                                                                                                                                            demais
                                                                                                                                            sessões,
                                                                                                                                            o
                                                                                                                                            funcionamento
                                                                                                                                            da
                                                                                                                                            sessão
                                                                                                                                            acontecerá
                                                                                                                                            de
                                                                                                                                            maneira
                                                                                                                                            semelhante.
                                                                                                                                            O
                                                                                                                                            método
                                                                                                                                            consiste
                                                                                                                                            em
                                                                                                                                            você
                                                                                                                                            falar
                                                                                                                                            tudo
                                                                                                                                            o
                                                                                                                                            que
                                                                                                                                            lhe
                                                                                                                                            vier
                                                                                                                                            à
                                                                                                                                            cabeça
                                                                                                                                            -
                                                                                                                                            incluindo
                                                                                                                                            o
                                                                                                                                            que
                                                                                                                                            possa
                                                                                                                                            parecer
                                                                                                                                            difícil,
                                                                                                                                            vergonhoso,
                                                                                                                                            desnecessário,
                                                                                                                                            sem
                                                                                                                                            sentido,
                                                                                                                                            etc..
                                                                                                                                        </span></span>
                                                                                                                                </p>
                                                                                                                                <p className="Ljsmg AWnQW yG99M"
                                                                                                                                    style={{paddingTop: '0px', paddingBottom: '0px', lineHeight: 'max(0.8em, 1.656em)'}}
                                                                                                                                    dir="auto"
                                                                                                                                    id="viewer-0s3o813588">
                                                                                                                                    <span
                                                                                                                                        className="L6v8G"><span>É
                                                                                                                                            um
                                                                                                                                            espaço
                                                                                                                                            para
                                                                                                                                            você
                                                                                                                                            falar
                                                                                                                                            de
                                                                                                                                            si,
                                                                                                                                            no
                                                                                                                                            seu
                                                                                                                                            tempo.
                                                                                                                                            É
                                                                                                                                            um
                                                                                                                                            momento
                                                                                                                                            de
                                                                                                                                            explorar
                                                                                                                                            (e
                                                                                                                                            criar)
                                                                                                                                            outras
                                                                                                                                            formas
                                                                                                                                            de
                                                                                                                                            você
                                                                                                                                            dizer,
                                                                                                                                            se
                                                                                                                                            enxergar,
                                                                                                                                            viver
                                                                                                                                            e
                                                                                                                                            se
                                                                                                                                            relacionar
                                                                                                                                            :)</span></span>
                                                                                                                                </p>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="sit_GlP">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="s__7arzZi orqXLWt---size-5-small orqXLWt---theme-4-line sM45uD8">
                                                                                                <button
                                                                                                    id="0211fa9e-576e-4a75-b4b1-c173aedf4fc4"
                                                                                                    className="sEvLmiB has-custom-focus"
                                                                                                    data-hook="accordion-item-header"
                                                                                                    aria-controls="0211fa9e-576e-4a75-b4b1-c173aedf4fc4-item-content-87"
                                                                                                    aria-expanded="false">
                                                                                                    <div
                                                                                                        className="sdFo7rg">
                                                                                                        <div
                                                                                                            className="ss_xluw">
                                                                                                            <div className="s__5H_FIV"
                                                                                                                data-hook="accordion-item-header-content">
                                                                                                                <div
                                                                                                                    className="s__8U_XjB">
                                                                                                                    <h3 className="sum_lkg"
                                                                                                                        data-hook="title">
                                                                                                                        Como
                                                                                                                        saber
                                                                                                                        se
                                                                                                                        eu
                                                                                                                        preciso
                                                                                                                        de
                                                                                                                        atendimento
                                                                                                                        psicol&oacute;gico?
                                                                                                                    </h3>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="sAM_BuZ">
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="slHDEik"
                                                                                                                aria-hidden="true">
                                                                                                                <svg viewBox="0 0 24 24"
                                                                                                                    fill="currentColor"
                                                                                                                    width="24"
                                                                                                                    height="24"
                                                                                                                    className="spmcv9_"
                                                                                                                    data-hook="expandIcon"
                                                                                                                    data-label="Expand-ChevronDown">
                                                                                                                    <path
                                                                                                                        fillRule="evenodd"
                                                                                                                        d="M18.2546728,8.18171329 L18.9617796,8.88882007 L12.5952867,15.2537133 L12.5978964,15.2558012 L11.8907896,15.962908 L11.8882867,15.9607133 L11.8874628,15.9617796 L11.180356,15.2546728 L11.1812867,15.2527133 L4.81828671,8.88882007 L5.52539349,8.18171329 L11.8882867,14.5457133 L18.2546728,8.18171329 Z">
                                                                                                                    </path>
                                                                                                                </svg>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </button>
                                                                                                <div style={{height: '0', overflow: 'hidden'}}
                                                                                                    className="rah-static rah-static--height-zero">
                                                                                                    <div
                                                                                                        style={{transition: 'opacity 300ms cubic-bezier(.39,.11,.37,.99) 0ms', WebkitTransition: 'opacity 300ms cubic-bezier(.39,.11,.37,.99) 0ms', opacity: '0'}}>
                                                                                                        <div id="0211fa9e-576e-4a75-b4b1-c173aedf4fc4-item-content-87"
                                                                                                            data-hook="accordion-item-content"
                                                                                                            role="region"
                                                                                                            aria-labelledby="0211fa9e-576e-4a75-b4b1-c173aedf4fc4"
                                                                                                            aria-hidden="true">
                                                                                                            <div
                                                                                                                className="s__0ipcHD">
                                                                                                                <div style={{direction: 'ltr'}}
                                                                                                                    className="sBuQfDg oytk1I5---layout-8-collapse">
                                                                                                                    <div className="P5Fqi"
                                                                                                                        dir="ltr"
                                                                                                                        style={{RicosTextColor: '#404040', RicosTextColorTuple: '64, 64, 64', RicosActionColor: '#808080', RicosActionColorTuple: '128, 128, 128', RicosBackgroundColor: '#ffffff', RicosBackgroundColorTuple: '255, 255, 255', RicosFallbackColor: '#000000', RicosFallbackColorTuple: '0, 0, 0', RicosActionColorFallback: '#808080', RicosActionColorFallbackTuple: '128, 128, 128', RicosCustomPFontWeight: 'normal', RicosCustomPFontStyle: 'normal', RicosCustomPLineHeight: '1.5', RicosCustomPFontSize: '15px', RicosCustomPFontFamily: 'bitter-v2', RicosCustomH1FontWeight: 'normal', RicosCustomH1FontStyle: 'normal', RicosCustomH1LineHeight: '1.5', RicosCustomH1FontSize: '15px', RicosCustomH1FontFamily: 'bitter-v2', RicosCustomH2FontWeight: 'normal', RicosCustomH2FontStyle: 'normal', RicosCustomH2LineHeight: '1.5', RicosCustomH2FontSize: '15px', RicosCustomH2FontFamily: 'bitter-v2', RicosCustomH3FontWeight: 'normal', RicosCustomH3FontStyle: 'normal', RicosCustomH3LineHeight: '1.5', RicosCustomH3FontSize: '15px', RicosCustomH3FontFamily: 'bitter-v2', RicosCustomH4FontWeight: 'normal', RicosCustomH4FontStyle: 'normal', RicosCustomH4LineHeight: '1.5', RicosCustomH4FontSize: '15px', RicosCustomH4FontFamily: 'bitter-v2', RicosCustomH5FontWeight: 'normal', RicosCustomH5FontStyle: 'normal', RicosCustomH5LineHeight: '1.5', RicosCustomH5FontSize: '15px', RicosCustomH5FontFamily: 'bitter-v2', RicosCustomH6FontWeight: 'normal', RicosCustomH6FontStyle: 'normal', RicosCustomH6LineHeight: '1.5', RicosCustomH6FontSize: '15px', RicosCustomH6FontFamily: 'bitter-v2', RicosCustomQuoteLineHeight: '1.5', RicosCustomQuoteFontSize: '15px', RicosCustomQuoteFontFamily: 'bitter-v2', RicosCustomCodeBlockLineHeight: '1.5', RicosCustomSpanFontFamily: 'bitter-v2', RicosCustomSpanFontSize: '15px', RicosCustomSpanLineHeight: '1.5', RicosCustomLinkFontFamily: 'bitter-v2', RicosCustomLinkFontSize: '15px', RicosCustomLinkLineHeight: '1.5', RicosCustomHashtagFontFamily: 'bitter-v2', RicosCustomHashtagFontSize: '15px', RicosCustomHashtagLineHeight: '1.5', RicosCustomAudioFontFamily: 'bitter-v2', RicosCustomAudioFontSize: '15px', RicosCustomAudioLineHeight: '1.5', RicosBreakoutNormalPaddingStart: '0', RicosBreakoutNormalPaddingEnd: '0', RicosBreakoutFullWidthPaddingStart: '0', RicosBreakoutFullWidthPaddingEnd: '0'}}
                                                                                                                        data-id="content-viewer">
                                                                                                                        <div
                                                                                                                            className="tzp3c">
                                                                                                                            <div
                                                                                                                                className="NBiag">
                                                                                                                                <p className="Ljsmg AWnQW yG99M"
                                                                                                                                    style={{paddingTop: '0px', paddingBottom: '0px', lineHeight: 'max(0.8em, 1.656em)'}}
                                                                                                                                    dir="auto"
                                                                                                                                    id="viewer-atf0a">
                                                                                                                                    <span
                                                                                                                                        className="L6v8G"><span>Nós
                                                                                                                                            buscamos
                                                                                                                                            ajuda
                                                                                                                                            quando
                                                                                                                                            algo
                                                                                                                                            não
                                                                                                                                            vai
                                                                                                                                            bem,
                                                                                                                                            quando
                                                                                                                                            percebemos
                                                                                                                                            que
                                                                                                                                            precisamos
                                                                                                                                            falar
                                                                                                                                            sobre
                                                                                                                                            algo
                                                                                                                                            que
                                                                                                                                            nos
                                                                                                                                            incomoda
                                                                                                                                            ou
                                                                                                                                            machuca,
                                                                                                                                            quando
                                                                                                                                            precisamos
                                                                                                                                            de
                                                                                                                                            alguém
                                                                                                                                            que
                                                                                                                                            nos
                                                                                                                                            escute
                                                                                                                                            (de
                                                                                                                                            verdade).
                                                                                                                                        </span></span>
                                                                                                                                </p>
                                                                                                                                <p className="Ljsmg AWnQW yG99M"
                                                                                                                                    style={{paddingTop: '0px', paddingBottom: '0px', lineHeight: 'max(0.8em, 1.656em)'}}
                                                                                                                                    dir="auto"
                                                                                                                                    id="viewer-3ga0n">
                                                                                                                                    <span
                                                                                                                                        className="L6v8G"><span>Mas
                                                                                                                                            não
                                                                                                                                            há
                                                                                                                                            exatamente
                                                                                                                                            uma
                                                                                                                                            regra.
                                                                                                                                            Busque
                                                                                                                                            um
                                                                                                                                            psicólogo
                                                                                                                                            quando
                                                                                                                                            você
                                                                                                                                            estiver
                                                                                                                                            em
                                                                                                                                            sofrimento;
                                                                                                                                            quando
                                                                                                                                            perceber
                                                                                                                                            repetições
                                                                                                                                            ou
                                                                                                                                            situações
                                                                                                                                            em
                                                                                                                                            sua
                                                                                                                                            vida
                                                                                                                                            que
                                                                                                                                            estão
                                                                                                                                            lhe
                                                                                                                                            fazendo
                                                                                                                                            sofrer;
                                                                                                                                            quando
                                                                                                                                            você
                                                                                                                                            precisar
                                                                                                                                            ser
                                                                                                                                            escutado;
                                                                                                                                            quando
                                                                                                                                            estiver
                                                                                                                                            passando
                                                                                                                                            por
                                                                                                                                            um
                                                                                                                                            momento
                                                                                                                                            difícil
                                                                                                                                            ou
                                                                                                                                            de
                                                                                                                                            mudança;
                                                                                                                                            quando
                                                                                                                                            sentir
                                                                                                                                            necessidade;
                                                                                                                                            ou
                                                                                                                                            quando
                                                                                                                                            simplesmente
                                                                                                                                            quiser.</span></span>
                                                                                                                                </p>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="sit_GlP">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="s__7arzZi orqXLWt---size-5-small orqXLWt---theme-4-line sM45uD8">
                                                                                                <button
                                                                                                    id="4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9t"
                                                                                                    className="sEvLmiB has-custom-focus"
                                                                                                    data-hook="accordion-item-header"
                                                                                                    aria-controls="4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9t-item-content-88"
                                                                                                    aria-expanded="false">
                                                                                                    <div
                                                                                                        className="sdFo7rg">
                                                                                                        <div
                                                                                                            className="ss_xluw">
                                                                                                            <div className="s__5H_FIV"
                                                                                                                data-hook="accordion-item-header-content">
                                                                                                                <div
                                                                                                                    className="s__8U_XjB">
                                                                                                                    <h3 className="sum_lkg"
                                                                                                                        data-hook="title">
                                                                                                                        Para
                                                                                                                        qual
                                                                                                                        p&uacute;blico
                                                                                                                        s&atilde;o
                                                                                                                        destinados
                                                                                                                        os
                                                                                                                        atendimentos?
                                                                                                                    </h3>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="sAM_BuZ">
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="slHDEik"
                                                                                                                aria-hidden="true">
                                                                                                                <svg viewBox="0 0 24 24"
                                                                                                                    fill="currentColor"
                                                                                                                    width="24"
                                                                                                                    height="24"
                                                                                                                    className="spmcv9_"
                                                                                                                    data-hook="expandIcon"
                                                                                                                    data-label="Expand-ChevronDown">
                                                                                                                    <path
                                                                                                                        fillRule="evenodd"
                                                                                                                        d="M18.2546728,8.18171329 L18.9617796,8.88882007 L12.5952867,15.2537133 L12.5978964,15.2558012 L11.8907896,15.962908 L11.8882867,15.9607133 L11.8874628,15.9617796 L11.180356,15.2546728 L11.1812867,15.2527133 L4.81828671,8.88882007 L5.52539349,8.18171329 L11.8882867,14.5457133 L18.2546728,8.18171329 Z">
                                                                                                                    </path>
                                                                                                                </svg>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </button>
                                                                                                <div style={{height: '0', overflow: 'hidden'}}
                                                                                                    className="rah-static rah-static--height-zero">
                                                                                                    <div
                                                                                                        style={{transition: 'opacity 300ms cubic-bezier(.39,.11,.37,.99) 0ms', WebkitTransition: 'opacity 300ms cubic-bezier(.39,.11,.37,.99) 0ms', opacity: '0'}}>
                                                                                                        <div id="4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9t-item-content-88"
                                                                                                            data-hook="accordion-item-content"
                                                                                                            role="region"
                                                                                                            aria-labelledby="4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9t"
                                                                                                            aria-hidden="true">
                                                                                                            <div
                                                                                                                className="s__0ipcHD">
                                                                                                                <div style={{direction: 'ltr'}}
                                                                                                                    className="sBuQfDg oytk1I5---layout-8-collapse">
                                                                                                                    <div className="P5Fqi"
                                                                                                                        dir="ltr"
                                                                                                                        style={{RicosTextColor: '#404040', RicosTextColorTuple: '64, 64, 64', RicosActionColor: '#808080', RicosActionColorTuple: '128, 128, 128', RicosBackgroundColor: '#ffffff', RicosBackgroundColorTuple: '255, 255, 255', RicosFallbackColor: '#000000', RicosFallbackColorTuple: '0, 0, 0', RicosActionColorFallback: '#808080', RicosActionColorFallbackTuple: '128, 128, 128', RicosCustomPFontWeight: 'normal', RicosCustomPFontStyle: 'normal', RicosCustomPLineHeight: '1.5', RicosCustomPFontSize: '15px', RicosCustomPFontFamily: 'bitter-v2', RicosCustomH1FontWeight: 'normal', RicosCustomH1FontStyle: 'normal', RicosCustomH1LineHeight: '1.5', RicosCustomH1FontSize: '15px', RicosCustomH1FontFamily: 'bitter-v2', RicosCustomH2FontWeight: 'normal', RicosCustomH2FontStyle: 'normal', RicosCustomH2LineHeight: '1.5', RicosCustomH2FontSize: '15px', RicosCustomH2FontFamily: 'bitter-v2', RicosCustomH3FontWeight: 'normal', RicosCustomH3FontStyle: 'normal', RicosCustomH3LineHeight: '1.5', RicosCustomH3FontSize: '15px', RicosCustomH3FontFamily: 'bitter-v2', RicosCustomH4FontWeight: 'normal', RicosCustomH4FontStyle: 'normal', RicosCustomH4LineHeight: '1.5', RicosCustomH4FontSize: '15px', RicosCustomH4FontFamily: 'bitter-v2', RicosCustomH5FontWeight: 'normal', RicosCustomH5FontStyle: 'normal', RicosCustomH5LineHeight: '1.5', RicosCustomH5FontSize: '15px', RicosCustomH5FontFamily: 'bitter-v2', RicosCustomH6FontWeight: 'normal', RicosCustomH6FontStyle: 'normal', RicosCustomH6LineHeight: '1.5', RicosCustomH6FontSize: '15px', RicosCustomH6FontFamily: 'bitter-v2', RicosCustomQuoteLineHeight: '1.5', RicosCustomQuoteFontSize: '15px', RicosCustomQuoteFontFamily: 'bitter-v2', RicosCustomCodeBlockLineHeight: '1.5', RicosCustomSpanFontFamily: 'bitter-v2', RicosCustomSpanFontSize: '15px', RicosCustomSpanLineHeight: '1.5', RicosCustomLinkFontFamily: 'bitter-v2', RicosCustomLinkFontSize: '15px', RicosCustomLinkLineHeight: '1.5', RicosCustomHashtagFontFamily: 'bitter-v2', RicosCustomHashtagFontSize: '15px', RicosCustomHashtagLineHeight: '1.5', RicosCustomAudioFontFamily: 'bitter-v2', RicosCustomAudioFontSize: '15px', RicosCustomAudioLineHeight: '1.5', RicosBreakoutNormalPaddingStart: '0', RicosBreakoutNormalPaddingEnd: '0', RicosBreakoutFullWidthPaddingStart: '0', RicosBreakoutFullWidthPaddingEnd: '0'}}
                                                                                                                        data-id="content-viewer">
                                                                                                                        <div
                                                                                                                            className="tzp3c">
                                                                                                                            <div
                                                                                                                                className="NBiag">
                                                                                                                                <p className="Ljsmg AWnQW yG99M"
                                                                                                                                    style={{paddingTop: '0px', paddingBottom: '0px', lineHeight: 'max(0.8em, 1.656em)'}}
                                                                                                                                    dir="auto"
                                                                                                                                    id="viewer-atf0a">
                                                                                                                                    <span
                                                                                                                                        className="L6v8G"><span>Os
                                                                                                                                            atendimentos
                                                                                                                                            s&atilde;o
                                                                                                                                            voltados
                                                                                                                                            para
                                                                                                                                            adolescentes
                                                                                                                                            e
                                                                                                                                            adultos,
                                                                                                                                            respeitando
                                                                                                                                            as
                                                                                                                                            necessidades
                                                                                                                                            espec&iacute;ficas
                                                                                                                                            de
                                                                                                                                            cada
                                                                                                                                            fase
                                                                                                                                            da
                                                                                                                                            vida.
                                                                                                                                            O
                                                                                                                                            acompanhamento
                                                                                                                                            &eacute;
                                                                                                                                            realizado
                                                                                                                                            de
                                                                                                                                            forma
                                                                                                                                            individualizada,
                                                                                                                                            considerando
                                                                                                                                            a
                                                                                                                                            hist&oacute;ria,
                                                                                                                                            os
                                                                                                                                            objetivos
                                                                                                                                            e
                                                                                                                                            o
                                                                                                                                            momento
                                                                                                                                            de
                                                                                                                                            cada
                                                                                                                                            pessoa.</span></span>
                                                                                                                                </p>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="sit_GlP">
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div data-hook="questions-wrapper"
                                                                                        className="sMi6Jk_"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <section id="comp-mkog554z" tabIndex="-1"
                                                        className="Oqnisf comp-mkog554z wixui-section"
                                                        data-block-level-container="ClassicSection">
                                                        <div id="bgLayers_comp-mkog554z" data-hook="bgLayers"
                                                            data-motion-part="BG_LAYER comp-mkog554z" className="MW5IWV">
                                                            <div data-testid="colorUnderlay" className="LWbAav Kv1aVt">
                                                            </div>
                                                            <div id="bgMedia_comp-mkog554z"
                                                                data-motion-part="BG_MEDIA comp-mkog554z"
                                                                className="VgO9Yg"></div>
                                                        </div>
                                                        <div data-mesh-id="comp-mkog554zinlineContent"
                                                            data-testid="inline-content" className="">
                                                            <div data-mesh-id="comp-mkog554zinlineContent-gridContainer"
                                                                data-testid="mesh-container-content">
                                                                <div id="comp-mkogpc27" className="KaEeLN comp-mkogpc27">
                                                                    <div className="uYj0Sg wixui-box"
                                                                        data-testid="container-bg"></div>
                                                                    <div data-mesh-id="comp-mkogpc27inlineContent"
                                                                        data-testid="inline-content" className="">
                                                                        <div data-mesh-id="comp-mkogpc27inlineContent-gridContainer"
                                                                            data-testid="mesh-container-content">
                                                                            <div id="comp-mkogpmpy"
                                                                                className="KaEeLN comp-mkogpmpy">
                                                                                <div className="uYj0Sg wixui-box"
                                                                                    data-testid="container-bg"></div>
                                                                                <div data-mesh-id="comp-mkogpmpyinlineContent"
                                                                                    data-testid="inline-content"
                                                                                    className="">
                                                                                    <div data-mesh-id="comp-mkogpmpyinlineContent-gridContainer"
                                                                                        data-testid="mesh-container-content">
                                                                                        <div id="comp-mkohii2m"
                                                                                            className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mkohii2m wixui-rich-text"
                                                                                            data-testid="richTextElement">
                                                                                            <h5 className="font_5 wixui-rich-text__text"
                                                                                                style={{fontSize: '23px', textAlign: 'center'}}>
                                                                                                <span
                                                                                                    className="color_40 wixui-rich-text__text"><span
                                                                                                        style={{fontWeight: 'normal'}}
                                                                                                        className="wixui-rich-text__text"><span
                                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                                            className="wixui-rich-text__text"><span
                                                                                                                style={{fontSize: '23px'}}
                                                                                                                className="wixui-rich-text__text">Entre
                                                                                                                em
                                                                                                                contato!</span></span></span></span>
                                                                                            </h5>
                                                                                        </div>
                                                                                        <div id="comp-mkohjdkr"
                                                                                            className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mkohjdkr wixui-rich-text"
                                                                                            data-testid="richTextElement">
                                                                                            <p className="font_8 wixui-rich-text__text"
                                                                                                style={{fontSize: '16px', lineHeight: '1.4em'}}>
                                                                                                <span
                                                                                                    style={{fontSize: '16px'}}
                                                                                                    className="wixui-rich-text__text"><span
                                                                                                        style={{fontWeight: '300'}}
                                                                                                        className="wixui-rich-text__text"><span
                                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                                            className="wixui-rich-text__text">Fale
                                                                                                            comigo para
                                                                                                            mais
                                                                                                            informa&ccedil;&otilde;es
                                                                                                            e para
                                                                                                            agendar o
                                                                                                            seu
                                                                                                            hor&aacute;rio.</span></span></span><span
                                                                                                    style={{fontSize: '16px'}}
                                                                                                    className="wixui-rich-text__text"><span
                                                                                                        style={{fontWeight: '300'}}
                                                                                                        className="wixui-rich-text__text"><span
                                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                                            className="wixui-rich-text__text">​</span></span></span>
                                                                                            </p>
                                                                                            <p className="font_8 wixui-rich-text__text"
                                                                                                style={{fontSize: '16px', lineHeight: '1.4em'}}>
                                                                                                <span
                                                                                                    style={{fontSize: '16px'}}
                                                                                                    className="wixui-rich-text__text"><span
                                                                                                        style={{fontWeight: '300'}}
                                                                                                        className="wixui-rich-text__text"><span
                                                                                                            style={{fontFamily: 'bitter-v2,serif'}}
                                                                                                            className="wixui-rich-text__text">Estarei
                                                                                                            te esperando
                                                                                                        </span></span></span><span
                                                                                                    style={{fontWeight: 'normal'}}
                                                                                                    className="wixui-rich-text__text"><span
                                                                                                        style={{fontFamily: 'alliance-no-2,sans-serif'}}
                                                                                                        className="wixui-rich-text__text"><span
                                                                                                            style={{fontSize: '14px'}}
                                                                                                            className="wixui-rich-text__text">:)</span></span></span>
                                                                                            </p>
                                                                                        </div>
                                                                                        <div id="comp-mkoho6gt"
                                                                                            className="comp-mkoho6gt"
                                                                                            data-semantic-classname="button">
                                                                                            <a data-testid="linkElement"
                                                                                                href="https://wa.me/5522997466590"
                                                                                                target="_blank"
                                                                                                rel="noreferrer noopener"
                                                                                                className="StylableButton2545352419__root style-mkoho6h1__root wixui-button StylableButton2545352419__link"
                                                                                                aria-label="Agende uma consulta"><span
                                                                                                    className="StylableButton2545352419__container"><span
                                                                                                        className="StylableButton2545352419__label wixui-button__label"
                                                                                                        data-testid="stylablebutton-label">Agende
                                                                                                        uma
                                                                                                        consulta</span><span
                                                                                                        className="StylableButton2545352419__icon wixui-button__icon"
                                                                                                        aria-hidden="true"
                                                                                                        data-testid="stylablebutton-icon"><span><svg
                                                                                                                data-bbox="9 70.9 181 59"
                                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                                viewBox="0 0 200 200">
                                                                                                                <g>
                                                                                                                    <path
                                                                                                                        d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z" />
                                                                                                                </g>
                                                                                                            </svg>
                                                                                                        </span></span></span></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
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
