import React, { useCallback, useEffect, useRef, useState } from 'react';
import instagramIcon from '../assets/img/icon-instagram.png';
import whatsappIcon from '../assets/img/icon-whatsapp.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('inicio');
    const pendingSectionIdRef = useRef(null);
    const delayedScrollTimeoutRef = useRef(null);

    const unlockPotentialScrollLocks = () => {
        document.body.classList.remove('blockSiteScrolling', 'siteScrollingBlocked', 'siteScrollingBlockedIOSFix');
    };

    const findScrollableAncestor = (element) => {
        let current = element?.parentElement;

        while (current && current !== document.body) {
            const style = window.getComputedStyle(current);
            const canScrollY = /(auto|scroll)/.test(style.overflowY);
            if (canScrollY && current.scrollHeight > current.clientHeight + 4) {
                return current;
            }
            current = current.parentElement;
        }

        return document.scrollingElement || document.documentElement;
    };

    const compensateHeaderOffset = (sectionEl) => {
        const headerEl = document.getElementById('SITE_HEADER');
        const headerOffset = (headerEl ? headerEl.offsetHeight : 0) + 8;
        const scrollableAncestor = findScrollableAncestor(sectionEl);

        if (
            scrollableAncestor === document.documentElement ||
            scrollableAncestor === document.body ||
            scrollableAncestor === document.scrollingElement
        ) {
            window.scrollBy({ top: -headerOffset, behavior: 'auto' });
            return;
        }

        scrollableAncestor.scrollBy({ top: -headerOffset, behavior: 'auto' });
    };

    const scrollToSection = useCallback((sectionId) => {
        unlockPotentialScrollLocks();

        if (sectionId === 'SCROLL_TO_TOP') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const rootScroller = document.scrollingElement || document.documentElement;
            rootScroller.scrollTop = 0;
            return;
        }

        const sectionEl = document.getElementById(sectionId);
        if (!sectionEl) return;

        sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        window.setTimeout(() => compensateHeaderOffset(sectionEl), 0);
        window.setTimeout(() => compensateHeaderOffset(sectionEl), 220);
    }, []);

    const scrollWithRetry = useCallback((sectionId) => {
        scrollToSection(sectionId);

        if (delayedScrollTimeoutRef.current) {
            window.clearTimeout(delayedScrollTimeoutRef.current);
        }

        delayedScrollTimeoutRef.current = window.setTimeout(() => {
            scrollToSection(sectionId);
        }, 180);
    }, [scrollToSection]);

    useEffect(() => {
        if (isMenuOpen || !pendingSectionIdRef.current) return;

        const sectionId = pendingSectionIdRef.current;
        pendingSectionIdRef.current = null;

        let rafId = 0;
        rafId = window.requestAnimationFrame(() => {
            scrollWithRetry(sectionId);
        });

        return () => {
            if (rafId) {
                window.cancelAnimationFrame(rafId);
            }
        };
    }, [isMenuOpen, scrollWithRetry]);

    useEffect(() => {
        return () => {
            if (delayedScrollTimeoutRef.current) {
                window.clearTimeout(delayedScrollTimeoutRef.current);
            }
        };
    }, []);

    const handleMenuSelect = (event, item, sectionId) => {
        event.preventDefault();
        setActiveMenu(item);

        if (isMenuOpen) {
            pendingSectionIdRef.current = sectionId;
            setIsMenuOpen(false);
            return;
        }

        scrollWithRetry(sectionId);
    };

  return (
<header id="SITE_HEADER" className={`x4zVYf SITE_HEADER wixui-header header-reference-style ${isMenuOpen ? 'is-menu-open' : ''}`} tabIndex="-1">
                        <div className="TMFrcJ">
                            <div id="bgLayers_SITE_HEADER" data-hook="bgLayers" data-motion-part="BG_LAYER SITE_HEADER"
                                className="MW5IWV mTQGgy">
                                <div data-testid="colorUnderlay" className="LWbAav Kv1aVt"></div>
                                <div id="bgMedia_SITE_HEADER" data-motion-part="BG_MEDIA SITE_HEADER" className="VgO9Yg">
                                </div>
                            </div>
                            <div className="QijXjn"></div>
                        </div>
                        <div className="kn76TK">
                            <div data-mesh-id="SITE_HEADERinlineContent" data-testid="inline-content" className="">
                                <div data-mesh-id="SITE_HEADERinlineContent-gridContainer"
                                    data-testid="mesh-container-content">
                                    <div id="comp-mk60pq53"
                                        className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mk60pq53 wixui-rich-text"
                                        data-testid="richTextElement">
                                        <h2 className="font_2 wixui-rich-text__text"
                                            style={{fontSize: '23px', lineHeight: 'normal'}}><a
                                                href="https://www.beatrizpimentel.com" target="_self"
                                                className="wixui-rich-text__text"><span style={{fontSize: '23px'}}
                                                    className="wixui-rich-text__text"><span
                                                        className="color_15 wixui-rich-text__text"><span
                                                            style={{letterSpacing: '0.05em'}}
                                                            className="wixui-rich-text__text"><span style={{fontWeight: '300'}}
                                                                className="wixui-rich-text__text"><span
                                                                    style={{fontFamily: 'bitter-v2,serif'}}
                                                                    className="wixui-rich-text__text">Beatriz
                                                                    Pimentel</span></span></span></span></span></a></h2>
                                    </div>
                                    <div id="comp-mk6y1fqh"
                                        className="ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-mk6y1fqh wixui-rich-text"
                                        data-testid="richTextElement">
                                        <p className="font_9 wixui-rich-text__text" style={{fontSize: '14px'}}><a
                                                href="https://www.beatrizpimentel.com" target="_self"
                                                className="wixui-rich-text__text"><span style={{fontWeight: '200'}}
                                                    className="wixui-rich-text__text"><span
                                                        style={{fontFamily: 'bitter-v2,serif'}}
                                                        className="wixui-rich-text__text">Psic&oacute;loga CRP 05/85932</span></span></a></p>
                                    </div>
                                    <div id="comp-mk5yi7b9" className="comp-mk5yi7b9 NZHLsZ mfxFLH">
                                        <button
                                            type="button"
                                            className="header-dropdown-toggle"
                                            aria-expanded={isMenuOpen}
                                            aria-controls="header-main-nav"
                                            onClick={() => setIsMenuOpen((prev) => !prev)}
                                        >
                                            <span className="header-toggle-row" aria-hidden="true">
                                                <span className="header-toggle-line"></span>
                                            </span>
                                            <span className="header-toggle-row" aria-hidden="true">
                                                <span className="header-toggle-line"></span>
                                            </span>
                                            <span className="sr-only">{isMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
                                        </button>
                                        <nav className="StylableHorizontalMenu3372578893__root StylableHorizontalMenu3372578893---menuMode-4-wrap style-mkgx4h3r__root wixui-horizontal-menu"
                                            aria-label="Site" id="header-main-nav">
                                            <ul className={`StylableHorizontalMenu3372578893__menu header-dropdown-menu ${isMenuOpen ? 'is-open' : ''}`}>
                                                <li className="itemDepth02233374943__itemWrapper wixui-horizontal-menu__item"
                                                    data-testid="menuItemDepth0" data-item-depth="0"
                                                    data-is-current={activeMenu === 'inicio'} aria-current={activeMenu === 'inicio' ? 'true' : 'false'}>
                                                    <div className="itemShared2352141355__rootContainer"><a
                                                            data-item-label="true" data-testid="linkElement"
                                                            href="#SCROLL_TO_TOP" onClick={(event) => handleMenuSelect(event, 'inicio', 'SCROLL_TO_TOP')} target="_self"
                                                        className={`itemDepth02233374943__root ${activeMenu === 'inicio' ? 'itemDepth02233374943--isCurrentPage' : ''} StylableHorizontalMenu3372578893__menuItem itemShared2352141355__menuItem`}
                                                            tabIndex="0">
                                                            <div className="itemDepth02233374943__container"><span
                                                                    className="itemDepth02233374943__label wixui-horizontal-menu__item-label">início</span>
                                                            </div>
                                                        </a></div>
                                                </li>
                                                <li className="itemDepth02233374943__itemWrapper wixui-horizontal-menu__item"
                                                    data-testid="menuItemDepth0" data-item-depth="0"
                                                    data-is-current={activeMenu === 'sobre-mim'} aria-current={activeMenu === 'sobre-mim' ? 'true' : 'false'}>
                                                    <div className="itemShared2352141355__rootContainer"><a
                                                            data-item-label="true" data-testid="linkElement"
                                                            data-anchor="anchors-mko9ti3z3"
                                                        href="#comp-mko9ti321" target="_self" onClick={(event) => handleMenuSelect(event, 'sobre-mim', 'comp-mko9ti321')}
                                                            className={`itemDepth02233374943__root ${activeMenu === 'sobre-mim' ? 'itemDepth02233374943--isCurrentPage' : ''} StylableHorizontalMenu3372578893__menuItem itemShared2352141355__menuItem`}
                                                            tabIndex="0">
                                                            <div className="itemDepth02233374943__container"><span
                                                                    className="itemDepth02233374943__label wixui-horizontal-menu__item-label">sobre
                                                                    mim</span></div>
                                                        </a></div>
                                                </li>
                                                <li className="itemDepth02233374943__itemWrapper wixui-horizontal-menu__item"
                                                    data-testid="menuItemDepth0" data-item-depth="0"
                                                    data-is-current={activeMenu === 'servicos'} aria-current={activeMenu === 'servicos' ? 'true' : 'false'}>
                                                    <div className="itemShared2352141355__rootContainer"><a
                                                            data-item-label="true" data-testid="linkElement"
                                                            data-anchor="anchors-mko9ti423"
                                                                        href="#comp-mko9ti322" target="_self" onClick={(event) => handleMenuSelect(event, 'servicos', 'comp-mko9ti322')}
                                                        className={`itemDepth02233374943__root ${activeMenu === 'servicos' ? 'itemDepth02233374943--isCurrentPage' : ''} StylableHorizontalMenu3372578893__menuItem itemShared2352141355__menuItem`}
                                                            tabIndex="0">
                                                            <div className="itemDepth02233374943__container"><span
                                                                    className="itemDepth02233374943__label wixui-horizontal-menu__item-label">meus
                                                                    serviços</span></div>
                                                        </a></div>
                                                </li>
                                                <li className="itemDepth02233374943__itemWrapper wixui-horizontal-menu__item"
                                                    data-testid="menuItemDepth0" data-item-depth="0"
                                                    data-is-current={activeMenu === 'faq'} aria-current={activeMenu === 'faq' ? 'true' : 'false'}>
                                                    <div className="itemShared2352141355__rootContainer"><a
                                                        data-item-label="true" data-testid="linkElement"
                                                        href="#comp-mko9ti331" target="_self" onClick={(event) => handleMenuSelect(event, 'faq', 'comp-mko9ti331')}
                                                        className={`itemDepth02233374943__root ${activeMenu === 'faq' ? 'itemDepth02233374943--isCurrentPage' : ''} StylableHorizontalMenu3372578893__menuItem itemShared2352141355__menuItem`}
                                                        tabIndex="0">
                                                        <div className="itemDepth02233374943__container"><span
                                                            className="itemDepth02233374943__label wixui-horizontal-menu__item-label">perguntas
                                                            frequentes</span>
                                                        </div>
                                                    </a></div>
                                                </li>
                                                <li className="itemDepth02233374943__itemWrapper wixui-horizontal-menu__item"
                                                    data-testid="menuItemDepth0" data-item-depth="0"
                                                    data-is-current={activeMenu === 'contato'} aria-current={activeMenu === 'contato' ? 'true' : 'false'}>
                                                    <div className="itemShared2352141355__rootContainer"><a
                                                            data-item-label="true" data-testid="linkElement"
                                                            data-anchor="anchors-mkog555i2"
                                                        href="#comp-mkohii2m" target="_self" onClick={(event) => handleMenuSelect(event, 'contato', 'comp-mkohii2m')}
                                                            className={`itemDepth02233374943__root ${activeMenu === 'contato' ? 'itemDepth02233374943--isCurrentPage' : ''} StylableHorizontalMenu3372578893__menuItem itemShared2352141355__menuItem`}
                                                            tabIndex="0">
                                                            <div className="itemDepth02233374943__container"><span
                                                                    className="itemDepth02233374943__label wixui-horizontal-menu__item-label">contato</span>
                                                            </div>
                                                        </a></div>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div id="comp-mk70ydh3" className="comp-mk70ydh3 WzbAF8">
                                        <ul className="mpGTIt" aria-label="Redes sociais">
                                            <li id="dataItem-mk70ydhh1-comp-mk70ydh3" className="O6KwRn"><a
                                                    data-testid="linkElement"
                                                    href="https://www.instagram.com/psi.beatrizspimentel" target="_blank"
                                                    rel="noreferrer noopener" className="oRtuWN" aria-label="Instagram"><img
                                                        sizes="31px"
                                                        srcSet={`${instagramIcon} 1x, ${instagramIcon} 2x`}
                                                        id="img_0_comp-mk70ydh3"
                                                        src={instagramIcon}
                                                        alt="Instagram" style={{objectFit: 'cover'}} className="YaS0jR Tj01hh"
                                                        width="31" height="31" /></a></li>
                                            <li id="dataItem-mk714ijf-comp-mk70ydh3" className="O6KwRn"><a
                                                    data-testid="linkElement" href="https://wa.me/5522997466590"
                                                    target="_blank" rel="noreferrer noopener" className="oRtuWN"
                                                    aria-label="Whatsapp"><img sizes="31px"
                                                        srcSet={`${whatsappIcon} 1x, ${whatsappIcon} 2x`}
                                                        id="img_1_comp-mk70ydh3"
                                                        src={whatsappIcon}
                                                        alt="Whatsapp" style={{objectFit: 'cover'}} className="YaS0jR Tj01hh"
                                                        width="31" height="31" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
  );
}
