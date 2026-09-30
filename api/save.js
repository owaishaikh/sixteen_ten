// Vercel serverless function. Each call is logged; view under
// Vercel dashboard > your project > Logs (filter: "16_10").
module.exports = (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = { raw: body }; } }
  console.log('16_10 ' + JSON.stringify({ ...body, at: new Date().toISOString() }));
  res.status(200).json({ ok: true });
};
