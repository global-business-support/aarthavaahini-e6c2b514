import { useEffect, useState } from "react";

export type MediaMeta = {
  width: number | null;
  height: number | null;
  bytes: number | null;
  type: string | null;
  status: "loading" | "ready" | "error";
};

export function formatBytes(bytes: number | null): string {
  if (!bytes || bytes <= 0) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function formatRatio(w: number | null, h: number | null): string {
  if (!w || !h) return "—";
  const d = gcd(w, h) || 1;
  let rw = Math.round(w / d);
  let rh = Math.round(h / d);
  if (rw > 40 || rh > 40) {
    const r = w / h;
    rw = Math.round(r * 10) / 10;
    rh = 1;
    return `${rw}:1`;
  }
  return `${rw}:${rh}`;
}

const isVideoUrl = (url: string) => /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url);

/** Reads real pixel dimensions + file size/type of a remote image or video. */
export function useMediaMeta(url: string | null | undefined): MediaMeta {
  const [meta, setMeta] = useState<MediaMeta>({
    width: null,
    height: null,
    bytes: null,
    type: null,
    status: "loading",
  });

  useEffect(() => {
    if (!url) {
      setMeta({ width: null, height: null, bytes: null, type: null, status: "error" });
      return;
    }
    let cancelled = false;
    setMeta({ width: null, height: null, bytes: null, type: null, status: "loading" });

    const readSize = async () => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const len = res.headers.get("content-length");
        const ctype = res.headers.get("content-type");
        if (cancelled) return;
        setMeta((m) => ({
          ...m,
          bytes: len ? Number(len) : m.bytes,
          type: ctype ?? m.type,
        }));
      } catch {
        /* CORS / opaque host — dimensions still work */
      }
    };

    if (isVideoUrl(url)) {
      const v = document.createElement("video");
      v.preload = "metadata";
      v.onloadedmetadata = () => {
        if (cancelled) return;
        setMeta((m) => ({
          ...m,
          width: v.videoWidth,
          height: v.videoHeight,
          status: "ready",
        }));
      };
      v.onerror = () => !cancelled && setMeta((m) => ({ ...m, status: "error" }));
      v.src = url;
    } else {
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        setMeta((m) => ({
          ...m,
          width: img.naturalWidth,
          height: img.naturalHeight,
          status: "ready",
        }));
      };
      img.onerror = () => !cancelled && setMeta((m) => ({ ...m, status: "error" }));
      img.src = url;
    }

    readSize();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return meta;
}

/**
 * Compact media detail chips: resolution, aspect ratio, file size, type.
 * `recommended` shows a warning when the media is smaller than ideal.
 */
export function MediaInfo({
  url,
  recommendedWidth,
  recommendedHeight,
  className = "",
}: {
  url: string | null | undefined;
  recommendedWidth?: number;
  recommendedHeight?: number;
  className?: string;
}) {
  const meta = useMediaMeta(url);

  if (!url) return null;

  if (meta.status === "loading") {
    return (
      <p className={`text-xs text-muted-foreground ${className}`}>
        Reading media details…
      </p>
    );
  }

  if (meta.status === "error" && !meta.width) {
    return (
      <p className={`text-xs text-destructive ${className}`}>
        Media details unavailable (URL load nahi hui)
      </p>
    );
  }

  const tooSmall =
    !!recommendedWidth && !!meta.width && meta.width < recommendedWidth * 0.75;

  const chip =
    "inline-flex items-center rounded-md border bg-muted/60 px-1.5 py-0.5 text-[11px] font-medium text-foreground";

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      <span className={chip}>
        {meta.width && meta.height ? `${meta.width} × ${meta.height} px` : "size —"}
      </span>
      <span className={chip}>{formatRatio(meta.width, meta.height)}</span>
      <span className={chip}>{formatBytes(meta.bytes)}</span>
      {meta.type && <span className={chip}>{meta.type.replace("image/", "").replace("video/", "")}</span>}
      {recommendedWidth && recommendedHeight && (
        <span
          className={`${chip} ${
            tooSmall
              ? "border-amber-300 bg-amber-50 text-amber-700"
              : "border-emerald-300 bg-emerald-50 text-emerald-700"
          }`}
        >
          {tooSmall
            ? `Low res — use ${recommendedWidth}×${recommendedHeight}`
            : `Recommended ${recommendedWidth}×${recommendedHeight} ✓`}
        </span>
      )}
    </div>
  );
}
