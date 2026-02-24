"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ProjectCardProps = {
  title: string;
  outcome: string;
  stack: string;
  projectUrl?: string;
  imageUrl?: string;
  images?: string[];
};

type ProjectGalleryModalProps = {
  title: string;
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

function ProjectGalleryModal({
  title,
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  onSelect
}: ProjectGalleryModalProps) {
  const activeImage = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[80] bg-charcoal/85 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshot gallery`}
      onClick={onClose}
    >
      <div
        className="mx-auto flex h-full w-full max-w-5xl flex-col rounded-3xl border border-white/10 bg-charcoal/95 p-3 shadow-soft sm:p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate font-serif text-lg text-white sm:text-xl">
              {title}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/65">
              Shot {activeIndex + 1} of {images.length}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-sm text-white/90 hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="flex h-full min-h-[260px] items-center justify-center p-2 sm:min-h-[420px] sm:p-4">
            <Image
              src={activeImage}
              alt={`${title} screenshot ${activeIndex + 1}`}
              width={1600}
              height={1000}
              className="max-h-[65vh] w-full rounded-xl object-contain"
            />
          </div>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-charcoal/80 px-3 py-2 text-sm text-white hover:bg-charcoal"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-charcoal/80 px-3 py-2 text-sm text-white hover:bg-charcoal"
              >
                Next
              </button>
            </>
          ) : null}
        </div>

        {images.length > 1 ? (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {images.map((src, index) => (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`View screenshot ${index + 1}`}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border ${
                  index === activeIndex
                    ? "border-white"
                    : "border-white/20 hover:border-white/50"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function ProjectCard({
  title,
  outcome,
  stack,
  projectUrl,
  imageUrl,
  images
}: ProjectCardProps) {
  const galleryImages = useMemo(
    () => (images?.length ? images : imageUrl ? [imageUrl] : []),
    [imageUrl, images]
  );
  const previewImage = galleryImages[0];
  const imageCount = galleryImages.length;

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!isGalleryOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      }
      if (event.key === "ArrowRight" && imageCount > 1) {
        setActiveImageIndex((current) => (current + 1) % imageCount);
      }
      if (event.key === "ArrowLeft" && imageCount > 1) {
        setActiveImageIndex((current) =>
          (current - 1 + imageCount) % imageCount
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [imageCount, isGalleryOpen]);

  const openGallery = (index = 0) => {
    if (!imageCount) {
      return;
    }
    setActiveImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <div className="min-w-0 overflow-hidden rounded-3xl border border-bone bg-white/60 p-5 shadow-soft sm:p-6">
        {previewImage ? (
          <button
            type="button"
            onClick={() => openGallery(0)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-bone bg-gradient-to-br from-bone via-white to-mist text-left"
            aria-label={`Open ${title} screenshots`}
          >
            <Image
              src={previewImage}
              alt={`${title} project screenshot`}
              width={1200}
              height={800}
              className="h-44 w-full object-cover transition duration-200 group-hover:scale-[1.02] sm:h-40 md:h-44"
            />
            {imageCount > 1 ? (
              <span className="absolute right-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white">
                {imageCount} shots
              </span>
            ) : null}
          </button>
        ) : (
          <div className="h-44 w-full rounded-2xl border border-bone bg-gradient-to-br from-bone via-white to-mist sm:h-40 md:h-44" />
        )}

        <h3 className="mt-5 break-words font-serif text-xl text-charcoal">
          {title}
        </h3>
        <p className="mt-2 break-words text-sm text-slate">{outcome}</p>
        <p className="mt-4 break-words text-xs uppercase tracking-[0.16em] text-deepblue">
          {stack}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {imageCount > 0 ? (
            <button
              type="button"
              onClick={() => openGallery(0)}
              className="inline-flex items-center rounded-full border border-deepblue/20 px-4 py-2 text-sm font-medium text-deepblue hover:bg-deepblue/5"
            >
              {imageCount > 1 ? "View all shots" : "View shot"}
            </button>
          ) : null}

          {projectUrl ? (
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-medium text-deepblue underline underline-offset-4"
            >
              Open project
            </a>
          ) : null}
        </div>
      </div>

      {isGalleryOpen && imageCount > 0 ? (
        <ProjectGalleryModal
          title={title}
          images={galleryImages}
          activeIndex={activeImageIndex}
          onClose={() => setIsGalleryOpen(false)}
          onPrev={() =>
            setActiveImageIndex(
              (current) => (current - 1 + imageCount) % imageCount
            )
          }
          onNext={() =>
            setActiveImageIndex((current) => (current + 1) % imageCount)
          }
          onSelect={setActiveImageIndex}
        />
      ) : null}
    </>
  );
}
