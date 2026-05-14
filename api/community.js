export default async function handler(req, res) {
  const { communityId } = req.query;
  const communityUrl = communityId ? `https://votappa.com/CommunityPollsFeed?communityId=${communityId}` : 'https://votappa.com';
  let title = '🗳️ Votappa — Vote on what matters';
  let description = 'Join the debate. Vote anonymously and see live results instantly!';
  let image = 'https://media.base44.com/images/public/69d265d749cdbcd58fecdf4c/4d9886cc8_generated_image.png';
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.send(`<!DOCTYPE html><html><head><meta property="og:type" content="website"/><meta property="og:title" content="${title}"/><meta property="og:description" content="${description}"/><meta property="og:image" content="${image}"/><meta property="og:url" content="${communityUrl}"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${title}"/><meta name="twitter:description" content="${description}"/><meta name="twitter:image" content="${image}"/><meta http-equiv="refresh" content="0;url=${communityUrl}"/></head><body>Redirecting...</body></html>`);
}
