import { useEffect, useRef } from "react";

const useReveal = () => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
};

export default useReveal;
