import Router from 'koa-router';

import health from 'api/health';

const router = new Router();

router.get('/health', health);

export default router;
