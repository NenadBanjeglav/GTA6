import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SecondVideo = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef();

  useGSAP(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) {
      return;
    }

    gsap.set(section, { marginTop: "-60vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(section, { opacity: 1, duration: 1, ease: "power1.inOut" });

    video.onloadedmetadata = () => {
      tl.to(
        video,
        {
          currentTime: video.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<",
      );
    };
  });

  return (
    <section ref={sectionRef} className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover second-vd"
          style={{
            objectPosition: "15% 0%",
          }}
        />
      </div>
    </section>
  );
};

export default SecondVideo;
