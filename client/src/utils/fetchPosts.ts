export async function fetchPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const data = await res.json();
  // console.log(data);
  return data;
}
