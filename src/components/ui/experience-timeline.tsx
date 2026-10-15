import React from "react";
import TimeLine_01 from "@/components/ui/release-time-line";
import { experienceEntries } from "@/data/experience-entries";

export function ExperienceTimeline() {
  return (
    <TimeLine_01
      title="Pengalaman Kerja & Rekayasa"
      description="Rekam jejak kontribusi teknis rekayasa sistem, arsitektur basis data relasional, dan pipeline machine learning."
      entries={experienceEntries}
    />
  );
}

export default ExperienceTimeline;
