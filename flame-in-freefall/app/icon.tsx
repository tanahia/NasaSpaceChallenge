import { ImageResponse } from "next/og";
import { IoPlanetSharp } from "react-icons/io5";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a192d",
          borderRadius: 12,
        }}
      >
        <IoPlanetSharp size={44} color="#e8794a" />
      </div>
    ),
    size
  );
}