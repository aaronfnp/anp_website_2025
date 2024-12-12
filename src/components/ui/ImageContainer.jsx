export default function ImageContainer({ imageSrc }) {
  console.log("Image source:", imageSrc); // Log the image source
  return (
    <div className="w-[720px] h-[720px] flex justify-center items-center overflow-hidden">
      <img
        src={imageSrc || "/path/to/default-image.jpg"}
        alt="Image"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}
