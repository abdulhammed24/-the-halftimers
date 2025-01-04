export const handleShare = (
  platform: "facebook" | "twitter" | "linkedin" | "link",
  setCopied: (value: boolean) => void,
) => {
  const url = window.location.href;
  const title = document.title;
  const text = `Check out this post: ${title}`;

  let shareUrl = "";

  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
    case "link":
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    default:
      return;
  }

  window.open(shareUrl, "_blank");
};
