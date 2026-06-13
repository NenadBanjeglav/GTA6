import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Jason = () => {
  const jasonRef = useRef(null);
  const imgBoxRef = useRef(null);

  useGSAP(() => {
    const section = jasonRef.current;
    const imgBox = imgBoxRef.current;
    const firstVideo = document.querySelector(".first-vd");

    if (!section || !imgBox) {
      return;
    }

    gsap.set(section, { marginTop: "-80vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        end: "10% center",
        scrub: 2,
      },
    });

    if (firstVideo) {
      tl.to(firstVideo, { opacity: 0, duration: 1, ease: "power1.inOut" });
    }

    gsap.to(
      imgBox,
      {
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<",
    );
  }, { scope: jasonRef });

  return (
    <section ref={jasonRef} className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>
        <h2>Jason wants an easy life, but things just keep getting harder.</h2>
        <p>
          Jason grew up around grifters and crooks. After a stint in the Army
          trying to shake off his troubled teens, he found himself in the Keys
          doing what he knows best, working for local drug runners. It might be
          time to try something new.
        </p>

        <div className="jason-2">
          <img src="/images/jason-2.webp" alt="" aria-hidden="true" />
        </div>
      </div>

      <div ref={imgBoxRef} className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/jason-1.webp" alt="" aria-hidden="true" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
