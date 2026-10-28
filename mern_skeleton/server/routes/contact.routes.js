import express from 'express';
import contactCtrl from '../controllers/contact.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/api/contacts')
  .get(contactCtrl.list)
  .post(authMiddleware, contactCtrl.create)
  .delete(authMiddleware, contactCtrl.removeAll);

router.route('/api/contacts/:id')
  .get(contactCtrl.read)
  .put(authMiddleware, contactCtrl.update)
  .delete(authMiddleware, contactCtrl.remove);

router.param('id', contactCtrl.contactByID);

export default router;