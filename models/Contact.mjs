import dataFileManager from '../utils/DataFileManager.mjs';

class Contact {
  static loadContactsList() {
    try {
      return dataFileManager.loadData();
    } catch (err) {
      throw new Error(`Не вдалося завантажити список контактів`);
    }
  }

  static addNewContacts(contactsObj) {
    try {
      dataFileManager.addItem({ id: new Date().getTime(), ...contactsObj });
    } catch (err) {
      throw new Error(`Не вдалося додати контакт`);
    }
  }

  static getContactById(id) {
    try {
      return dataFileManager.getItemById(id);
    } catch (err) {
      throw new Error(`Не вдалося знайти контакт`);
    }
  }

  static updateContact(id, contactData) {
    try {
      dataFileManager.updateItemById(id, contactData);
    } catch (err) {
      throw new Error(`Не вдалося оновити контакт`);
    }
  }

  static deleteContactById(id) {
    try {
      dataFileManager.deleteItemById(id);
    } catch (err) {
      throw new Error(`Не вдалося видалити контакт`);
    }
  }
}

export default Contact;
