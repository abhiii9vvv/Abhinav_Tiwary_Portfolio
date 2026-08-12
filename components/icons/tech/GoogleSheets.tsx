import { siGooglesheets } from "simple-icons";
import { IconShell } from "./IconShell";

export function GoogleSheetsIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siGooglesheets.path} color={siGooglesheets.hex} label="Google Sheets API" className={className} />
  );
}
