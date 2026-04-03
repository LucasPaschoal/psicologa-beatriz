import React from 'react';
import heroBgImg from '../../assets/img/hero-bg.png';
import atendimentoBannerImg from '../../assets/img/girassol.jpeg';

export default function HeroSection() {
    return (
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
                                                className="wixui-rich-text__text">"A palavra só ganha seu valor quando encontra um outro que a escute." <span style={{fontSize: '20px'}}>— Jacques Lacan.</span></span></span></span></span></span>
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
    );
}