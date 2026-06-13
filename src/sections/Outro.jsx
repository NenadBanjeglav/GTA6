import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Outro = () => {
  const outroRef = useRef(null);

  useGSAP(() => {
    const outro = outroRef.current;

    if (!outro) return;

    gsap.set(outro, { marginTop: "-100vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outro,
        start: "top 30%",
        end: "top 10%",
        scrub: true,
      },
    });

    tl.to(".final-content", { opacity: 0, duration: 1, ease: "power1.inOut" });
    tl.to(outro, { opacity: 1, duration: 1, ease: "power1.inOut" });
  });

  return (
    <section ref={outroRef} className="final-message">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="GTA VI logo" className="md:w-72 w-52" />

        <div>
          <h3 className="gradient-title text-[3.875rem] leading-[3.55rem] sm:text-[5rem] sm:leading-[4.5rem] md:text-[8rem] md:leading-[7rem]">
            Coming <br /> sometime <br /> 2027
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" alt="PlayStation" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" alt="Xbox" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  );
};

export default Outro;
