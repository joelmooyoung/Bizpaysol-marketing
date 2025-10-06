export function VideoEmbed({ url, title }: { url: string; title: string }) {
  if (!/^https?:\/\//.test(url)) return null;
  return (
    <div className="aspect-video w-full overflow-hidden rounded-md border bg-black">
      <iframe
        src={url}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
