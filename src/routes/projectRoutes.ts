import {Router} from 'express';
import {ProjectController} from '../controllers/ProjectController';
import { body,param } from 'express-validator';
import { handleInputErrors } from '../middleware/validation';

const router = Router();



router.post('/',
    body('projectName')
        .notEmpty().withMessage('El Nombre del Proyecto es Obligatorio'),
    body('clientName')
        .notEmpty().withMessage('El Nombre del Cliente es Obligatorio'),
    body('description')
        .notEmpty().withMessage('La Descripción del Proyecto es Obligatoria'),
    handleInputErrors,
    ProjectController.createProject
)
router.get('/',ProjectController.getAllProjects) 
router.get('/:id',
    param('id').isMongoId().withMessage('ID no válido'),
    handleInputErrors,
    ProjectController.createProject
) 

export default router;