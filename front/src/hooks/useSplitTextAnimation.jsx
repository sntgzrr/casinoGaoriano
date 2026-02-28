import gsap from 'gsap'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText'

export function useSplitTextAnimation() {
    gsap.registerPlugin(useGSAP, SplitText);
    const container = useRef(null);
    useGSAP(() => {
        if (!container.current) return;
        const splitTextChars = new SplitText('.split-text-chars', { type: 'chars' })
        const sliptTextWords = new SplitText('.split-text-words', { type: 'words' })
        gsap.set(splitTextChars.chars, {
            opacity: 0,
            x: 10,
            backgroundImage: 'linear-gradient(to right, #fbbf24, #d97706)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block'
        });
        gsap.set(sliptTextWords.words, {
            opacity: 0, 
            x: 10,
        })
        gsap.to(splitTextChars.chars, {
            opacity: 1,
            duration: 10,
            stagger: 0.04,
            x: 0,
            ease: "power4"
        })
        gsap.to(sliptTextWords.words, {
            opacity: 1,
            duration: 0.7,
            x: 0,
            ease: "back",
            stagger: 0.15
        });
    }, [])

    return container
}
