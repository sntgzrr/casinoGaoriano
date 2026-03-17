import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

export default function useTypewriterEffect(elementRef, cursorRef, words) {
    useGSAP(() => {
        if (!elementRef.current || !cursorRef.current || !words?.length) return;
        gsap.set(cursorRef.current, { opacity: 1 });
        const tl = gsap.timeline({ repeat: -1 });
        const cursorTl = gsap.timeline({ repeat: -1, paused: true });
        cursorTl.to(cursorRef.current, {
            opacity: 0,
            duration: 0.5,
            yoyo: true,
            repeat: -1,
            ease: "none"
        });
        words.forEach((word) => {
            tl.call(() => cursorTl.pause());
            tl.to(elementRef.current, {
                duration: word.length * 0.09,
                text: word,
                ease: "none",
            });
            tl.call(() => cursorTl.play());
            tl.to({}, { duration: 5 });
            tl.call(() => cursorTl.pause());
            tl.to({}, {
                duration: word.length * 0.09,
                ease: "none",
                onUpdate: function () {
                    const progress = this.progress();
                    const charsToKeep = Math.floor(word.length * (1 - progress));
                    elementRef.current.textContent = word.slice(0, charsToKeep);
                }
            });
            tl.call(() => cursorTl.play());
            tl.to({}, { duration: 0.5 });
        });
    }, [elementRef, cursorRef, words]);

    return elementRef;
}
