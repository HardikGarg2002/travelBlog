import Image from "next/image";

export default function SpecialLabel() {
  return (
    <div
      className="absolute -top-6 left-[50%] translate-x-[-50%] z-50 pb-2"
      style={{
        backgroundImage:
          "url('https://www.theblondeabroad.com/wp-content/themes/tba/images/Label.png')",
        backgroundSize: "cover", // Ensures the background image covers the entire div
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px", // Set a specific height for the div
        width: "160px",
      }}
    >
      <p className="text-lg ">Tech</p>
    </div>
  );
}
