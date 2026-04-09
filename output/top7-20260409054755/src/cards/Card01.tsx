import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { BRUTUS } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card01: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const labelOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [30, 0], { extrapolateRight: "clamp" });
  const subOpacity = interpolate(frame, [BODY_IN + 6, BODY_IN + 18], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut, backgroundColor: BRUTUS.colors.primary }}>
      <Img
        src={staticFile("card-01.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRUTUS.overlay.cover,
        }}
      />

      {/* Top label */}
      <div
        style={{
          position: "absolute",
          top: 72,
          left: 72,
          opacity: labelOpacity,
        }}
      >
        <div
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: BRUTUS.typography.headline.fontWeight,
            fontSize: 32,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: BRUTUS.colors.accent,
          }}
        >
          TOKYO SAKURA
        </div>
      </div>

      {/* Bottom text block */}
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
            fontSize: 120,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            color: BRUTUS.colors.accent,
            lineHeight: 0.9,
            opacity: labelOpacity,
            marginBottom: 16,
          }}
        >
          TOP 7
        </div>
        <h1
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: BRUTUS.typography.headline.fontWeight,
            fontSize: 72,
            letterSpacing: BRUTUS.typography.headline.letterSpacing,
            textTransform: "uppercase",
            color: "#FFFFFF",
            lineHeight: 1.0,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 24,
          }}
        >
          도쿄 벚꽃<br />명소
        </h1>
        <p
          style={{
            fontFamily: BRUTUS.typography.body.fontFamily,
            fontWeight: BRUTUS.typography.body.fontWeight,
            fontSize: 36,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.5,
            opacity: subOpacity,
          }}
        >
          반드시 가야 할 사쿠라 스팟 7곳
        </p>
      </div>

      {/* Page number */}
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
        1 / 7
      </div>
    </AbsoluteFill>
  );
};
