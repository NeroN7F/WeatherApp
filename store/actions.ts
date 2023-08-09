export const setUserLocation = (location: { latitude: number; longitude: number }) => ({
    type: 'SET_USER_LOCATION',
    payload: location,
});
