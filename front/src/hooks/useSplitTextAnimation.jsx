import gsap from 'gsap'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);


export function useSplitTextAnimation() {
    const container = useRef(null);
    useGSAP(() => {
        if (!container.current) return;
        const ctx = gsap.context(() => {
            const charsElements = container.current.querySelectorAll('.split-text-chars');
            const wordsElements = container.current.querySelectorAll('.split-text-words');

            if (!charsElements.length && !wordsElements.length) return;
            let splitTextChars;
            let splitTextWords;

            if (charsElements.length) {
                splitTextChars = new SplitText(charsElements, { type: 'chars' });
                gsap.set(splitTextChars.chars, {
                    opacity: 0,
                    x: 10,
                    backgroundImage: 'linear-gradient(to right, #fbbf24, #d97706)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                });
                gsap.to(splitTextChars.chars, {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.04,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
            }

            if (wordsElements.length) {
                splitTextWords = new SplitText(wordsElements, { type: 'words' });
                gsap.set(splitTextWords.words, {
                    opacity: 0,
                    x: 10,
                });
                gsap.to(splitTextWords.words, {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    ease: "back.out(1.7)",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
            }

        }, container);
        return () => ctx.revert()
    }, []);
    return container;
}
