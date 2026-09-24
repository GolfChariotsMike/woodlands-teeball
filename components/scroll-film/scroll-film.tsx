"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./scroll.module.css";

const LOGO = "/brand/mark.png";
const FILM = "/scroll/scene.mp4";
const POSTER = "/scroll/poster.png";
const EMAIL = "hello@woodlandsteeball.com.au";

/** Scroll progress at which the film is holding its last frame. */
const VIDEO_END = 0.7;

const BEATS = [
  { id: "brand", enter: 0, exit: 0.18 },
  { id: "tee", enter: 0.16, exit: 0.36 },
  { id: "swing", enter: 0.34, exit: 0.56 },
  { id: "ages", enter: 0.54, exit: 0.76 },
  { id: "join", enter: 0.72, exit: 1.02 },
] as const;

function beatOpacity(progress: number, enter: number, exit: number) {
  const edge = 0.045;
  if (progress < enter || progress >= exit) return 0;
  const fadeIn = enter <= 0 ? 1 : Math.min(1, (progress - enter) / edge);
  const fadeOut = exit >= 1 ? 1 : Math.min(1, (exit - progress) / edge);
  return Math.max(0, Math.min(fadeIn, fadeOut));
}

function Story() {
  return (
    <article className={`static-story ${styles.static}`}>
      <header className={styles.staticHeader}>
        <Image
          src={LOGO}
          alt="Woodlands Teeball Club"
          width={300}
          height={300}
          className={styles.staticLogo}
        />
        <Link href="/register" className={styles.staticCta}>
          Register
        </Link>
      </header>
      <div className={styles.staticMedia}>
        <Image
          src={POSTER}
          alt="A young player in a green Woodlands uniform stands ready at the tee, bat raised, with the ball waiting."
          fill
          sizes="100vw"
        />
      </div>
      <div className={styles.staticBody}>
        <p className={styles.staticKicker}>Woodlands Teeball Club</p>
        <h1 className={styles.staticTitle}>Woodlands Teeball</h1>
        <p className={styles.staticCopy}>Play starts here.</p>

        <section className={styles.staticSection}>
          <h2 className={styles.staticHeading}>From the tee…</h2>
          <p className={styles.staticCopy}>
            No pitcher. The ball waits, and the swing is theirs.
          </p>
        </section>

        <section className={styles.staticSection}>
          <h2 className={styles.staticHeading}>Then the swing.</h2>
          <p className={styles.staticCopy}>Through the ball, into the grass.</p>
        </section>

        <section className={styles.staticSection}>
          <h2 className={styles.staticHeading}>Ages 5–10</h2>
          <ul className={styles.staticPills}>
            <li>U7</li>
            <li>U9</li>
            <li>U11</li>
          </ul>
          <p className={styles.staticCopy}>
            U7, U9 and U11 on the one reserve.
          </p>
        </section>

        <section className={styles.staticSection}>
          <p className={styles.staticKicker}>Woodlands Reserve</p>
          <h2 className={styles.staticHeading}>Come and play.</h2>
          <p className={styles.staticCopy}>
            Teakwood Ave, Woodlands WA 6018
          </p>
          <div className={styles.staticActions}>
            <Link href="/register" className={styles.staticPrimary}>
              Register
            </Link>
            <a className={styles.staticSecondary} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}

export function ScrollFilm({ embedded = false }: { embedded?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const beatRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;
    let metadataBound = false;

    const watchFrame = () => {
      if (frameId || typeof video.requestVideoFrameCallback !== "function") return;
      frameId = video.requestVideoFrameCallback(() => {
        frameId = 0;
        paint();
      });
    };

    const paint = () => {
      const total = track.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-track.getBoundingClientRect().top, 0),
        Math.max(total, 0),
      );
      const progress = total > 0 ? scrolled / total : 0;

      BEATS.forEach((beat, index) => {
        const el = beatRefs.current[index];
        if (!el) return;
        const opacity = beatOpacity(progress, beat.enter, beat.exit);
        const visible = opacity > 0.04;
        el.style.opacity = opacity.toFixed(3);
        el.style.visibility = visible ? "visible" : "hidden";
        if (visible) el.removeAttribute("aria-hidden");
        else el.setAttribute("aria-hidden", "true");
      });

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }

      if (!video.duration || !Number.isFinite(video.duration) || video.seeking) return;
      const videoProgress = Math.min(1, progress / VIDEO_END);
      const target = videoProgress * Math.max(0, video.duration - 0.04);
      if (Math.abs(video.currentTime - target) > 0.05) {
        video.currentTime = target;
        watchFrame();
      }
    };

    const onScroll = () => {
      paint();
    };

    const armVideo = () => {
      if (motion.matches) return;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.preload = "auto";
      if (!video.getAttribute("src")) {
        video.src = FILM;
        video.load();
      }
    };

    const onReady = () => {
      video.classList.add(styles.videoReady);
      video.pause();
      paint();
      watchFrame();
    };

    const bindReady = () => {
      if (metadataBound) return;
      metadataBound = true;
      video.addEventListener("loadeddata", onReady);
    };

    const syncMotion = () => {
      if (motion.matches) {
        video.pause();
        video.removeAttribute("src");
        video.load();
        video.classList.remove(styles.videoReady);
        return;
      }
      bindReady();
      armVideo();
      paint();
    };

    const onSeeked = () => {
      paint();
    };

    syncMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.visualViewport?.addEventListener("resize", onScroll);
    video.addEventListener("seeked", onSeeked);
    motion.addEventListener("change", syncMotion);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.visualViewport?.removeEventListener("resize", onScroll);
      video.removeEventListener("seeked", onSeeked);
      motion.removeEventListener("change", syncMotion);
      video.removeEventListener("loadeddata", onReady);
      if (typeof video.cancelVideoFrameCallback === "function" && frameId) {
        video.cancelVideoFrameCallback(frameId);
      }
    };
  }, []);

    const Root = embedded ? "div" : "main";

    return (
    <Root className={`scroll-page ${styles.page} ${embedded ? styles.embedded : ""}`}>
      <noscript>
        <style>{`.scroll-track{display:none !important}.static-story{display:block !important}`}</style>
      </noscript>

      <Story />

      <div className={`scroll-track ${styles.track}`} ref={trackRef}>
        <div className={styles.stage}>
          <div className={styles.media} aria-hidden="true">
            <Image
              src={POSTER}
              alt=""
              fill
              priority
              sizes="100vw"
              className={styles.poster}
            />
            <video
              ref={videoRef}
              className={styles.video}
              muted
              playsInline
              preload="none"
              poster={POSTER}
              disablePictureInPicture
            />
            <div className={styles.scrim} />
          </div>

          <header className={styles.top}>
            <Link className={styles.logoLink} href="/">
              <Image
                src={LOGO}
                alt="Woodlands Teeball Club"
                width={300}
                height={300}
                priority
                className={styles.logo}
              />
            </Link>
            <Link href="/register" className={styles.headerCta}>
              Register
            </Link>
          </header>

          <p className={styles.srOnly}>
            Woodlands Teeball Club. From the tee, through the swing. Ages 5 to
            10, teams U7, U9 and U11. Woodlands Reserve, Teakwood Ave, Woodlands
            WA 6018. Email {EMAIL}.
          </p>

          <div
            className={styles.beat}
            ref={(node) => {
              beatRefs.current[0] = node;
            }}
            style={{ opacity: 1, visibility: "visible" }}
          >
            <p className={styles.kicker}>Woodlands Teeball Club</p>
            <h1 className={styles.title}>Woodlands Teeball</h1>
            <p className={styles.copy}>Play starts here.</p>
            <p className={styles.hint}>Scroll</p>
          </div>

          <div
            className={styles.beat}
            ref={(node) => {
              beatRefs.current[1] = node;
            }}
            aria-hidden="true"
          >
            <p className={styles.kicker}>At the plate</p>
            <h2 className={styles.title}>From the tee…</h2>
            <p className={styles.copy}>
              No pitcher. The ball waits, and the swing is theirs.
            </p>
          </div>

          <div
            className={styles.beat}
            ref={(node) => {
              beatRefs.current[2] = node;
            }}
            aria-hidden="true"
          >
            <p className={styles.kicker}>Contact</p>
            <h2 className={styles.title}>Then the swing.</h2>
            <p className={styles.copy}>Through the ball, into the grass.</p>
          </div>

          <div
            className={styles.beat}
            ref={(node) => {
              beatRefs.current[3] = node;
            }}
            aria-hidden="true"
          >
            <p className={styles.kicker}>Teams</p>
            <h2 className={styles.title}>Ages 5–10</h2>
            <ul className={styles.pills}>
              <li>U7</li>
              <li>U9</li>
              <li>U11</li>
            </ul>
            <p className={styles.copy}>U7, U9 and U11 on the one reserve.</p>
          </div>

          <div
            className={styles.beat}
            ref={(node) => {
              beatRefs.current[4] = node;
            }}
            aria-hidden="true"
          >
            <p className={styles.kicker}>Woodlands Reserve</p>
            <h2 className={styles.title}>Come and play.</h2>
            <p className={styles.copy}>Teakwood Ave, Woodlands WA 6018</p>
            <div className={styles.actions}>
              <Link href="/register" className={`${styles.button} ${styles.primary}`}>
                Register
              </Link>
              <a
                className={`${styles.button} ${styles.secondary}`}
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div className={styles.progress} aria-hidden="true">
            <span ref={barRef} />
          </div>
        </div>
      </div>
    </Root>
  );
}
