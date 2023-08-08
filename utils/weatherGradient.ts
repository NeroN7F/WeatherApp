const weatherGradient = (weatherCode: number) => {

    const weatherConditionMappings = new Map([
        [1000, 'sunny'],
        [1003, 'partly-cloudy'],
        [1006, 'mostly-cloudy'],
        [1009, 'overcast'],
        [1030, 'mist-fog'],
    ]);

    return weatherConditionMappings.get(weatherCode) || ''
}

export {weatherGradient}