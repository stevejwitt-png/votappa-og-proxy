export default async function handler(req, res) {
  const { id } = req.query;
  const pollUrl = id ? `https://votappa.com/poll/${id}`.trim() : 'https://votappa.com';
  const fallbackImage = 'https://media.base44.com/images/public/69d265d749cdbcd58fecdf4c/4d9886cc8_generated_image.png';

  let title = '🗳️ Votappa — Vote on what matters';
  let description = 'Vote and see live results instantly. Join the debate!';
  let image = fallbackImage;

  if (id) {
    try {
      const response = await fetch(
        `https://api.base44.com/api/apps/68f7dc21523785df0c10795b/entities/Poll/${id}`,
        {
          headers: {
            'api-key': process.env.BASE44_API_KEY
          }
        }
      );
      if (response.ok) {
        const poll = await response.json();
        if (poll.question) {
          title = `🗳️ ${poll.question}`;
          description = 'Vote now and see live results on Votappa!';
        }
        if (poll.og_image) {
          image = poll.og_image;
        }
      }
    } catch (e) {}
  }

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'no-cache, no-store');
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
<script>window.location.href="${pollUrl}"</script>
</head><body>Redirecting...</body></html>`);
}
