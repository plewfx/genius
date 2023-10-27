import { fetchSongLyrics } from "@utils";

export default async function Home() {
  const search = await fetchSongLyrics();
  console.log(search);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
