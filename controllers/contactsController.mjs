import Contact from '../models/Contact.mjs';

class ContactsController {
  static allContacts(req, res) {
    const contactsList = Contact.loadContactsList();
    res.render('contacts/contacts', {
      contacts: contactsList,
    });
  }
  static contactDetail(req, res) {
    const id = req.params.id;
    const contact = Contact.getContactById(id);
    res.render('contacts/contactDetail', { contact: contact });
  }

  static createForm(req, res) {
    res.render('contacts/contactForm', {
      contact: {},
    });
  }

  static editContactForm(req, res) {
    const id = req.params.id;
    const contact = Contact.getContactById(id);
    res.render('contacts/contactForm', { contact });
  }

  static addContact(req, res) {
    const contactData = req.body;
    Contact.addNewContacts(contactData);
    res.redirect('/contacts');
  }

  static updateContact(req, res) {
    const id = req.params.id;
    const contactData = req.body;
    console.log(contactData);
    Contact.updateContact(id, contactData);
    res.redirect('/contacts');
  }

  static deleteContact(req, res) {
    const id = req.body.id;
    Contact.deleteContactById(id);
    res.send(200, 'ok');
  }
}

export default ContactsController;
