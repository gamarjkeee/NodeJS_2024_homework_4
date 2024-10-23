async function deleteContact(id) {
  try {
    const response = await fetch('/contacts', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      console.log('Product deleted successfully');
      window.location.href = '/contacts';
    } else {
      console.error('Failed to delete product');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
