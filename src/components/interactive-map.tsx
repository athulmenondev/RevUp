import { generateInteractiveMap } from "@/ai/flows/interactive-map-from-description";
import { Skeleton } from "./ui/skeleton";
import { Suspense } from "react";

interface InteractiveMapProps {
  locationDescription: string;
}

async function MapGenerator({ locationDescription }: InteractiveMapProps) {
  const { mapUrl } = await generateInteractiveMap({ locationDescription });

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg"
      title="Event Location Map"
    ></iframe>
  );
}

export default function InteractiveMap({ locationDescription }: InteractiveMapProps) {
  return (
    <Suspense fallback={<Skeleton className="h-[300px] w-full rounded-lg" />}>
      <MapGenerator locationDescription={locationDescription} />
    </Suspense>
  );
}
