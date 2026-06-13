import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMaskSettings } from "../../constants";
import CommingSoon from "./CommingSoon";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef(null);
  const { initialMaskPos, initialMaskSize } = useMaskSettings();

  useGSAP(
    () => {
      const getMaskElements = () => {
        const maskWrapper = heroRef.current?.querySelector(".mask-wrapper");
        const overlayLogo = heroRef.current?.querySelector(".overlay-logo");

        return { maskWrapper, overlayLogo };
      };

      const getLogoMask = () => {
        const { maskWrapper, overlayLogo } = getMaskElements();

        if (!maskWrapper || !overlayLogo) {
          return {
            maskPosition: "50% 22%",
            maskSize: "20% 20%",
          };
        }

        const wrapperRect = maskWrapper.getBoundingClientRect();
        const logoRect = overlayLogo.getBoundingClientRect();

        return {
          maskPosition: `${logoRect.left - wrapperRect.left}px ${
            logoRect.top - wrapperRect.top
          }px`,
          maskSize: `${logoRect.width}px ${logoRect.height}px`,
        };
      };

      const resolveMaskLength = (value, basis) => {
        if (value.endsWith("%")) {
          return basis * (parseFloat(value) / 100);
        }

        if (value.endsWith("vh")) {
          return window.innerHeight * (parseFloat(value) / 100);
        }

        if (value.endsWith("vw")) {
          return window.innerWidth * (parseFloat(value) / 100);
        }

        return parseFloat(value);
      };

      const resolveMaskPosition = (value, basis, maskBasis) => {
        if (value.endsWith("%")) {
          return (basis - maskBasis) * (parseFloat(value) / 100);
        }

        return resolveMaskLength(value, basis);
      };

      const getInitialMask = () => {
        const { maskWrapper } = getMaskElements();

        if (!maskWrapper) {
          return {
            maskPosition: initialMaskPos,
            maskSize: initialMaskSize,
          };
        }

        const wrapperRect = maskWrapper.getBoundingClientRect();
        const [maskWidthValue, maskHeightValue = maskWidthValue] =
          initialMaskSize.split(" ");
        const [maskXValue, maskYValue = "50%"] = initialMaskPos.split(" ");
        const maskWidth = resolveMaskLength(maskWidthValue, wrapperRect.width);
        const maskHeight = resolveMaskLength(
          maskHeightValue,
          wrapperRect.height,
        );
        const maskX = resolveMaskPosition(
          maskXValue,
          wrapperRect.width,
          maskWidth,
        );
        const maskY = resolveMaskPosition(
          maskYValue,
          wrapperRect.height,
          maskHeight,
        );

        return {
          maskPosition: `${maskX}px ${maskY}px`,
          maskSize: `${maskWidth}px ${maskHeight}px`,
        };
      };

      const getLargeLogoMask = () => {
        const { maskWrapper } = getMaskElements();

        if (!maskWrapper) {
          return {
            maskPosition: "-50% -35%",
            maskSize: "190% auto",
          };
        }

        const wrapperRect = maskWrapper.getBoundingClientRect();
        const maskWidth =
          wrapperRect.width < 768
            ? Math.max(wrapperRect.width * 4.1, 1280)
            : Math.max(wrapperRect.width * 1.9, 2200);
        const maskHeight = maskWidth * (150 / 224);

        return {
          maskPosition: `${wrapperRect.width / 2 - maskWidth * 0.527}px ${
            wrapperRect.height / 2 - maskHeight * 0.446
          }px`,
          maskSize: `${maskWidth}px ${maskHeight}px`,
        };
      };

      gsap.set(".mask-wrapper", getInitialMask());

      gsap.set(".mask-logo", { marginTop: "-100vh", opacity: 0 });

      gsap.set(".entrance-message", { marginTop: "0vh" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          scrub: 2.5,
          end: "+=360%",
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(".fade-out", { opacity: 0, duration: 0.7, ease: "power1.inOut" })
        .to(
          ".scale-out",
          { scale: 1, duration: 1.1, ease: "power2.inOut" },
          "<",
        )
        .to(
          ".mask-wrapper",
          {
            maskPosition: () => getLargeLogoMask().maskPosition,
            maskSize: () => getLargeLogoMask().maskSize,
            duration: 1.35,
            ease: "power2.inOut",
          },
          "-=0.15",
        )
        .to(".mask-wrapper", {
          maskPosition: () => getLogoMask().maskPosition,
          maskSize: () => getLogoMask().maskSize,
          duration: 1.45,
          ease: "power2.inOut",
        })
        .to(
          ".overlay-logo",
          {
            opacity: 1,
            duration: 0.35,
            ease: "power1.inOut",
          },
          "-=0.35",
        )
        .to(
          ".mask-wrapper",
          { opacity: 0, duration: 0.35, ease: "power1.inOut" },
          "<",
        )
        .to(
          ".entrance-message",
          {
            duration: 1,
            ease: "power1.inOut",
            maskImage:
              "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
          },
          "+=0.15",
        )
        .to(
          ".overlay-logo",
          {
            opacity: 0,
            duration: 0.25,
            ease: "power1.inOut",
          },
          "-=0.15",
        );
    },
    {
      scope: heroRef,
      dependencies: [initialMaskPos, initialMaskSize],
      revertOnUpdate: true,
    },
  );

  return (
    <section ref={heroRef} className="hero-section">
      <img
        src="/images/hero-bg.webp"
        alt=""
        aria-hidden="true"
        className="hero-bg-base fade-out"
      />

      <div className="relative z-10 size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="w-7 ml-1" />
        </div>
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      <div className="fake-logo-wrapper">
        <img src="/images/logo.webp" className="overlay-logo" />
      </div>

      <CommingSoon />
    </section>
  );
};

export default Hero;
