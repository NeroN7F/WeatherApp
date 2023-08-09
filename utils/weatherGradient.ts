const weatherGradient = (weatherCode: number) => {

    const weatherConditionMappings = new Map([
        [1000, 'linear-gradient(45deg, #afa354 0%, #cec87a 46%, #FFCC70 100%)'], // Sunny
        [1003, 'linear-gradient(180deg, #2c8bcb 0%, #a4cae1 99%)'], //pt cloudy
        [1006, 'linear-gradient(135deg, #6E7E88 0%, #9CA5AB 100%)'], // Mostly Cloudy
        [1009, 'linear-gradient(120deg, #7e8182 0%, #928989 100%)'], // Overcast
        [1030, 'linear-gradient(135deg, #AAB7B8 0%, #D3D7D8 100%)'], // Mist or Fog
    ]);

    return weatherConditionMappings.get(weatherCode) || ''
}

export {weatherGradient}