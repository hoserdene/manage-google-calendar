import { Request, Response, Router } from 'express';
import i18n from 'i18n';
import CalendarController from '../../controllers/Calendar';
import { HTTP_STATUS_CODES } from '../../utils/consts';

const router = Router();

/**
 * Get event list
 * @returns {{ success: boolean; message: string, events: {}[] }}
 */
router.get('/calendar/event/list', async (_: Request, res: Response) => {
  try {
    return res.status(HTTP_STATUS_CODES.OK).json({
      success: true,
      message: i18n.__('response.ok'),
      events: await CalendarController.getEvents()
    });
  } catch (err: any) {
    return res.json({ success: false, message: err.message });
  }
});

export default router;
