import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

export default function useTypewriterEffect(elementRef, cursorRef, words) {
    useGSAP(() => {
        if (!elementRef.current || !cursorRef.current) return;

        const tl = gsap.timeline({ repeat: -1 });
        const cursorTl = gsap.timeline({ repeat: -1 });

        cursorTl.to(cursorRef.current, { opacity: 0, duration: 0.5, yoyo: true, repeat: -1 });

        words.forEach((word) => {
            tl.call(() => cursorTl.pause());
            tl.to(elementRef.current, {
                duration: word.length * 0.09,
                text: word,
                ease: "none",
            })
                .call(() => cursorTl.resume())
                .to({}, { duration: 10 })
                .call(() => cursorTl.pause())
                .to({}, {
                    duration: word.length * 0.09,
                    ease: "none",
                    onRepeat: () => {
                        elementRef.current.textContent = elementRef.current.textContent.slice(0, -1);
                    },
                })
                .call(() => cursorTl.resume());
        });
    }, [elementRef, cursorRef, words]);

    return elementRef;
}
