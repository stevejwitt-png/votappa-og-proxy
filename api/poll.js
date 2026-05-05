export default async function handler(req, res) {
  const { id } = req.query;
  const pollUrl = id ? `https://votappa.com/poll/${id}` : 'https://votappa.com';
  const title = id ? '🗳️ Vote on this poll — Votappa' : '🗳️ Votappa — Vote on what matters';
  const description = 'Vote anonymously — no sign up needed. See live results instantly!';
  const image = 'https://media.base44.com/images/public/69d265d749cdbcd58fecdf4c/4d9886cc8_generated_image.png';
  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html><html><head>
<meta property="og:type" content="website"/>
<meta property="og:title" content="${title}"/>
<meta property="og:description" content="${description}"/>
<meta property="og:image" content="${image}"/>
<meta property="og:url" content="${pollUrl}"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${title}"/>
<meta name="twitter:description" content="${description}"/>
<meta name="twitter:image" content="${image}"/>
<meta http-equiv="refresh" content="0;url=${pollUrl}"/>
</head><body>Redirecting...</body></html>`);
}
