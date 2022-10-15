export default function getUsernameById(contacts, userId) {
    const user = contacts.find((item) => item.id === userId);
    return user?.username;
};