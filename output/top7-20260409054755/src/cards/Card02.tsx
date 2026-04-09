import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { BRUTUS } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card02: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const numberOpacity = interpolate(frame, [TITLE_IN - 6, TITLE_IN + 6], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [24, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut, backgroundColor: BRUTUS.colors.primary }}>
      <Img
        src={staticFile("card-02.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRUTUS.overlay.content,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: 72,
          right: 72,
        }}
      >
        <div
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: BRUTUS.typography.headline.fontWeight,
            fontSize: 96,
            letterSpacing: "-0.04em",
            color: BRUTUS.colors.accent,
            lineHeight: 0.85,
            opacity: numberOpacity,
            marginBottom: 8,
          }}
        >
          01
        </div>

        <h2
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: BRUTUS.typography.headline.fontWeight,
            fontSize: 64,
            letterSpacing: BRUTUS.typography.headline.letterSpacing,
            textTransform: "uppercase",
            color: "#FFFFFF",
            lineHeight: 1.0,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 8,
          }}
        >
          신주쿠 교엔
        </h2>
        <div
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: 400,
            fontSize: 34,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            opacity: titleOpacity,
            marginBottom: 28,
          }}
        >
          Shinjuku Gyoen
        </div>

        <p
          style={{
            fontFamily: BRUTUS.typography.body.fontFamily,
            fontWeight: BRUTUS.typography.body.fontWeight,
            fontSize: 36,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.6,
            opacity: bodyOpacity,
            marginBottom: 20,
          }}
        >
          약 68개 품종, 1,000그루 이상.
          도쿄에서 가장 긴 벚꽃 시즌 —
          2월부터 5월까지 즐길 수 있다.
        </p>

        <div
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: 600,
            fontSize: 30,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: BRUTUS.colors.accent,
            opacity: bodyOpacity,
            borderLeft: `3px solid ${BRUTUS.colors.accent}`,
            paddingLeft: 16,
          }}
        >
          신주쿠 역 인근 · 입장료 500엔
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: BRUTUS.typography.headline.fontFamily,
          fontSize: 28,
          fontWeight: 300,
          letterSpacing: 3,
          color: "rgba(255,255,255,0.4)",
        }}
      >
        2 / 7
      </div>
    </AbsoluteFill>
  );
};
