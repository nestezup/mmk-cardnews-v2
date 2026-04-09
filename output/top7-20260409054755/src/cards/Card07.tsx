import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { BRUTUS } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card07: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [30, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const tagOpacity = interpolate(frame, [BODY_IN + 12, BODY_IN + 24], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut, backgroundColor: BRUTUS.colors.primary }}>
      <Img
        src={staticFile("card-07.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />
      {/* Closing overlay — lighter at top to show sky, darker at center for text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Center text block */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 72,
          right: 72,
          transform: "translateY(-50%)",
          textAlign: "center",
        }}
      >
        {/* Small label */}
        <div
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: BRUTUS.typography.headline.fontWeight,
            fontSize: 32,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: BRUTUS.colors.accent,
            opacity: bodyOpacity,
            marginBottom: 24,
          }}
        >
          2026 SPRING · TOKYO
        </div>

        <h2
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: BRUTUS.typography.headline.fontWeight,
            fontSize: 80,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            lineHeight: 1.05,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 28,
          }}
        >
          올봄,<br />도쿄에서<br />벚꽃을<br />만나세요
        </h2>

        <p
          style={{
            fontFamily: BRUTUS.typography.body.fontFamily,
            fontWeight: BRUTUS.typography.body.fontWeight,
            fontSize: 34,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.65,
            opacity: bodyOpacity,
            marginBottom: 32,
          }}
        >
          3월 말 ~ 4월 초, 절정의 사쿠라를<br />
          이 7곳에서 직접 눈에 담으세요.
        </p>

        <div
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: BRUTUS.typography.headline.fontWeight,
            fontSize: 30,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: BRUTUS.colors.accent,
            opacity: tagOpacity,
          }}
        >
          #도쿄벚꽃 #사쿠라 #하나미
        </div>
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
        7 / 7
      </div>
    </AbsoluteFill>
  );
};
