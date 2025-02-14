const saveEventState = async (eventName, updates) => {
  try {
    const response = await fetch('/api/events/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        ...updates
      })
    });
    return await response.json();
  } catch (error) {
    console.error('Error saving event state:', error);
    return null;
  }
};

export { saveEventState };
