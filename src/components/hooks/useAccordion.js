import { useEffect } from 'react';

export default function useAccordion() {
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
}