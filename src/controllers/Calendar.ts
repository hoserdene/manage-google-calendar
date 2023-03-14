import { calendar_get_events } from '../functions/calendar';

export default class CalendarController {
  static async getEvents(): Promise<void> {
    return await calendar_get_events();
  }
}
