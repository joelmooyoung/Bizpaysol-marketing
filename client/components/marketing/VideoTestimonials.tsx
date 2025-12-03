import { VideoEmbed } from "@/components/marketing/VideoEmbed";

const urls = (import.meta.env.VITE_TESTIMONIAL_VIDEO_URLS as string | undefined)?.split(",").map((s) => s.trim()).filter(Boolean) ?? [];

export function VideoTestimonials() {
  if (urls.length === 0) return null;
  return (
    <section className="bg-white py-12">
      <div className="container">
        <h2 className="text-2xl font-bold tracking-tight">Customer stories (video)</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {urls.map((u, i) => (
            <VideoEmbed key={i} url={u} title={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
