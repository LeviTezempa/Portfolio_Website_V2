import express from 'express';
import educationCtrl from '../controllers/qualification.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/api/qualifications')
  .get(educationCtrl.list)
  .post(authMiddleware, educationCtrl.create)
  .delete(authMiddleware, educationCtrl.removeAll);

router.route('/api/qualifications/:id')
  .get(educationCtrl.read)
  .put(authMiddleware, educationCtrl.update)
  .delete(authMiddleware, educationCtrl.remove);

router.param('id', educationCtrl.educationByID);

export default router;