import { siCloudinary } from "simple-icons";
import { IconShell } from "./IconShell";

export function CloudinaryIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siCloudinary.path} color={siCloudinary.hex} label="Cloudinary" className={className} />
  );
}
