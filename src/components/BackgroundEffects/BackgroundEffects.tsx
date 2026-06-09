import { DotGrids } from "./DotGrids";
import { MountainIllustration } from "./MountainIllustration";
import { TopographicPattern } from "./TopographicPattern";
import { TravelRoutePath } from "./TravelRoutePath";

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <TopographicPattern />
      <MountainIllustration />
      <DotGrids />
      <TravelRoutePath />
    </div>
  );
}
