import express from 'express';

const apiRouter = express.Router();

// Health check
apiRouter.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'CivicEye API' });
});

// Issues endpoints
apiRouter.get('/issues', (_req, res) => {
  res.json({ issues: [] });
});

apiRouter.post('/issues', (req, res) => {
  try {
    const issue = req.body;
    res.status(201).json({ success: true, issue });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create issue' });
  }
});

export { apiRouter };
