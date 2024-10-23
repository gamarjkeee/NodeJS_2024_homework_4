import { Router } from 'express';
import ContactsController from '../controllers/contactsController.mjs';
const router = Router();

router.get('/', ContactsController.allContacts);
router.get('/create', ContactsController.createForm);
router.get('/:id', ContactsController.contactDetail);
router.post('/create', ContactsController.addContact);
router.get('/edit/:id', ContactsController.editContactForm);
router.post('/edit/:id', ContactsController.updateContact);
router.delete('/', ContactsController.deleteContact);
export default router;
