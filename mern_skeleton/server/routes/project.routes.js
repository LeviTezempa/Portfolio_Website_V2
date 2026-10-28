import express from 'express';
import projectCtrl from '../controllers/project.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/api/projects')
  .get(projectCtrl.list)
  .post(authMiddleware, projectCtrl.create)
  .delete(authMiddleware, projectCtrl.removeAll);

router.route('/api/projects/:id')
  .get(projectCtrl.read)
  .put(authMiddleware, projectCtrl.update)
  .delete(authMiddleware, projectCtrl.remove);

router.param('id', projectCtrl.projectByID);

export default router;