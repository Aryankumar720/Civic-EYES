import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'CivicEye Backend',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

apiRouter.get('/issues', (_req, res) => {
  res.json({ issues: [], total: 0 });
});

apiRouter.post('/issues', (req, res) => {
  try {
    const issue = req.body ?? {};
    if (!issue.title && !issue.description) {
      return res.status(400).json({ error: 'Issue title or description is required.' });
    }

    return res.status(201).json({
      success: true,
      issue: {
        ...issue,
        status: 'pending',
        priority: 'medium',
      },
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create issue' });
  }
});

export { apiRouter };
