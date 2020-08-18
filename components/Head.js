import NextHead from 'next/head';
import GoogleFonts from 'next-google-fonts';

const Head = () => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta property="author" content="Denny Dharmawan" />
      <meta
        property="keywords"
        content="spotify, playlist, merge, shuffle, utils"
      />
      <meta
        property="description"
        content="An app for merging and shuffling spotify playlist"
      />
      <title>Spotify Utils</title>
    </NextHead>
  </>
);

export default Head;
