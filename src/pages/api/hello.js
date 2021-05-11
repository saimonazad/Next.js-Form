// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSentry } from '@sentry/nextjs';

const handler = async (req, res) => {
  throw new Error('API throw error test');
  res.status(200).json({ name: 'John Doe' });
};

export default withSentry(handler);
