import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { BRUTUS } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card06: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const labelOpacity = interpolate(frame, [TITLE_IN - 6, TITLE_IN + 6], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [24, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut, backgroundColor: BRUTUS.colors.primary }}>
      <Img
        src={staticFile("card-06.png")}
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
        {/* Triple number badge */}
        <div
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: BRUTUS.typography.headline.fontWeight,
            fontSize: 72,
            letterSpacing: "-0.03em",
            color: BRUTUS.colors.accent,
            lineHeight: 0.85,
            opacity: labelOpacity,
            marginBottom: 12,
          }}
        >
          05 · 06 · 07
        </div>

        <h2
          style={{
            fontFamily: BRUTUS.typography.headline.fontFamily,
            fontWeight: BRUTUS.typography.headline.fontWeight,
            fontSize: 56,
            letterSpacing: BRUTUS.typography.headline.letterSpacing,
            textTransform: "uppercase",
            color: "#FFFFFF",
            lineHeight: 1.1,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 28,
          }}
        >
          이노카시라 · 요요기<br />리쿠기엔
        </h2>

        {/* Three location rows */}
        <div style={{ opacity: bodyOpacity }}>
          <div
            style={{
              fontFamily: BRUTUS.typography.body.fontFamily,
              fontWeight: 400,
              fontSize: 34,
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.5,
              marginBottom: 10,
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: BRUTUS.typography.headline.fontFamily,
                fontWeight: 900,
                fontSize: 30,
                color: BRUTUS.colors.accent,
                flexShrink: 0,
                paddingTop: 3,
              }}
            >
              ◆
            </span>
            이노카시라 — 호수 보트 위 꽃잎 감상
          </div>
          <div
            style={{
              fontFamily: BRUTUS.typography.body.fontFamily,
              fontWeight: 400,
              fontSize: 34,
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.5,
              marginBottom: 10,
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: BRUTUS.typography.headline.fontFamily,
                fontWeight: 900,
                fontSize: 30,
                color: BRUTUS.colors.accent,
                flexShrink: 0,
                paddingTop: 3,
              }}
            >
              ◆
            </span>
            요요기 — 넓은 잔디밭 하나미 피크닉
          </div>
          <div
            style={{
              fontFamily: BRUTUS.typography.body.fontFamily,
              fontWeight: 400,
              fontSize: 34,
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.5,
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: BRUTUS.typography.headline.fontFamily,
                fontWeight: 900,
                fontSize: 30,
                color: BRUTUS.colors.accent,
                flexShrink: 0,
                paddingTop: 3,
              }}
            >
              ◆
            </span>
            리쿠기엔 — 1695년 에도 수양벚꽃
          </div>
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
        6 / 7
      </div>
    </AbsoluteFill>
  );
};
