import { MapPin } from "lucide-react";

export function Title() {
  return (
    <div className="w-full max-w-4xl space-y-2">
      <h1 className="text-4xl font-bold">Luke Henning-Smith</h1>
      <h2 className="text-xl text-muted-foreground">Software Engineer</h2>
      <p className="text-sm italic flex items-center gap-2 text-muted-foreground">
        <MapPin size={18} />
        Sydney, Australia
      </p>
    </div>
  );
}
