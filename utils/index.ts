export async function fetchSearch() {
  const headers: HeadersInit = {
    'X-RapidAPI-Key': 'c1de0ee316mshfb75bbf680777f0p14017ejsn88772ef5255b',
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
  };

  // Set the required headers for the API request
  const response = await fetch(
    "https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1",
    {
      headers: headers,
    },
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

export async function fetchSongLyrics() {
  const headers: HeadersInit = {
    'X-RapidAPI-Key': 'c1de0ee316mshfb75bbf680777f0p14017ejsn88772ef5255b',
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
  };

  // Set the required headers for the API request
  const response = await fetch(
    "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=239681",
    {
      headers: headers,
    },
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}