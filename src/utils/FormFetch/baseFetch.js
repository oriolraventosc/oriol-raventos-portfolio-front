import axios from "axios";

const useContact = () => {
  const url = process.env.REACT_APP_URL;
  const addContact = async (contactData) => {
    const apiUrl = `${url}/contacts/add`;
    await axios.post(apiUrl, contactData, {
      body: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  return { addContact, alert };
};

export default useContact;
