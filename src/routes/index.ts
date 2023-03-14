import { Response, Router } from 'express';
import i18n from 'i18n';
import { HTTP_STATUS_CODES } from '../utils/consts';
import calendarRoutes from './api/calendar';

const router = Router();

/**
 * Health check
 * @returns {object}
 */
router.get('/health-check', async (_, res: Response) => {
  return res
    .status(HTTP_STATUS_CODES.OK)
    .json({ success: true, message: i18n.__('response.ok') });
});

/**
 * Extended routes
 */
router.use('/api', calendarRoutes);

export default router;
