import { safeYoutubeId } from "./schema";

export function YoutubeEmbed({
  videoId,
  title,
  autoplay = false,
}: {
  videoId: string;
  title: string;
  autoplay?: boolean;
}) {
  const id = safeYoutubeId(videoId);
  if (!id) return null;
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
