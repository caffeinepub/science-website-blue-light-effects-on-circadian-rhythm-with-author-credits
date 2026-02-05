export const blueLightContent = {
  hero: {
    title: 'Blue Light & Circadian Rhythm',
    subtitle: 'Understanding the science behind how light exposure affects your sleep-wake cycle and overall health.',
  },
  
  whatIsBlueLight: {
    title: 'What is Blue Light?',
    intro: 'Blue light is a specific portion of the visible light spectrum with unique biological effects on human physiology.',
    definition: 'Blue light refers to light with wavelengths approximately between 380-500 nanometers. This high-energy visible (HEV) light is naturally abundant in sunlight and is also emitted by digital screens and LED lighting.',
    sources: [
      'Natural sunlight (the primary and most intense source)',
      'Digital screens (smartphones, tablets, computers, televisions)',
      'LED and fluorescent lighting',
      'Energy-efficient light bulbs',
      'Electronic devices with backlit displays',
    ],
  },
  
  circadianRhythm: {
    title: 'Circadian Rhythm & Melatonin',
    intro: 'Your body operates on an internal biological clock that regulates sleep, alertness, hormone production, and many other physiological processes.',
    circadianExplained: 'The circadian rhythm is your body\'s approximately 24-hour internal clock, primarily influenced by light and darkness. It regulates sleep-wake cycles, body temperature, hormone release, and metabolism.',
    melatoninExplained: 'Melatonin is a hormone produced by the pineal gland in the brain. Its production increases in darkness and decreases with light exposure, signaling to your body when it\'s time to sleep.',
    connection: 'Light exposure, particularly blue light, is the most powerful environmental cue for synchronizing your circadian rhythm with the external day-night cycle.',
  },
  
  mechanisms: {
    title: 'How Blue Light Affects Your Body',
    intro: 'The connection between blue light and circadian rhythm involves specialized cells in your eyes and a direct pathway to your brain\'s master clock.',
    pathway: {
      step1: 'Specialized photoreceptor cells called intrinsically photosensitive retinal ganglion cells (ipRGCs) in your eyes contain a photopigment called melanopsin that is particularly sensitive to blue light wavelengths.',
      step2: 'When blue light hits these cells, they send signals through the retinohypothalamic tract directly to the suprachiasmatic nucleus (SCN) in the hypothalamus—your brain\'s master circadian clock.',
      step3: 'The SCN processes these light signals and communicates with the pineal gland, which regulates melatonin production. Blue light exposure suppresses melatonin secretion.',
      step4: 'Reduced melatonin levels signal to your body that it\'s daytime, promoting alertness and delaying sleep onset. This is beneficial during the day but problematic in the evening.',
    },
    additionalEffects: [
      'Increased alertness and cognitive performance during daytime exposure',
      'Enhanced mood and reduced symptoms of seasonal affective disorder when received at appropriate times',
      'Potential disruption of sleep quality and duration with evening exposure',
      'Possible shifts in circadian phase (timing of your internal clock) with mistimed exposure',
    ],
  },
  
  evidence: {
    title: 'What Does the Research Show?',
    intro: 'Scientific research has consistently demonstrated the impact of blue light on circadian physiology, though individual responses vary.',
    findings: [
      'Evening exposure to blue light can suppress melatonin production and delay sleep onset, with effects varying based on intensity, duration, and individual sensitivity.',
      'Studies suggest that blue light exposure in the evening may shift circadian phase later, potentially contributing to delayed sleep patterns.',
      'Daytime blue light exposure, particularly in the morning, can help reinforce healthy circadian rhythms and improve alertness.',
      'Research indicates that reducing blue light exposure in the hours before bedtime may support better sleep quality in some individuals.',
      'The magnitude of effects depends on multiple factors including light intensity, wavelength composition, exposure duration, timing, and individual differences in sensitivity.',
    ],
    context: 'It\'s important to note that research in this area is ongoing, and findings should be interpreted in context. Not all studies show identical results, and individual responses vary considerably.',
  },
  
  practicalStrategies: {
    title: 'Practical Mitigation Strategies',
    intro: 'If you\'re concerned about blue light exposure affecting your sleep, consider these evidence-informed approaches:',
    strategies: [
      {
        category: 'Evening Lighting',
        tips: [
          'Dim overall lighting levels 2-3 hours before bedtime',
          'Use warmer-toned (amber/red) lighting in the evening',
          'Consider using lamps instead of bright overhead lights',
          'Avoid bright white or blue-tinted LED bulbs in bedrooms',
        ],
      },
      {
        category: 'Screen Management',
        tips: [
          'Enable "night mode" or "blue light filter" features on devices in the evening',
          'Reduce screen brightness, especially after sunset',
          'Consider limiting screen time 1-2 hours before bed',
          'Maintain greater distance from screens when possible',
        ],
      },
      {
        category: 'Timing & Environment',
        tips: [
          'Get bright light exposure (ideally natural sunlight) in the morning to reinforce your circadian rhythm',
          'Maintain consistent sleep and wake times',
          'Create a dark sleeping environment with blackout curtains or eye masks',
          'Consider the cumulative effect of all light sources in your environment',
        ],
      },
      {
        category: 'Additional Considerations',
        tips: [
          'Blue light blocking glasses may help some individuals, though evidence is mixed',
          'Focus on overall sleep hygiene, not just blue light reduction',
          'Remember that daytime blue light exposure is generally beneficial',
          'Individual responses vary—experiment to find what works for you',
        ],
      },
    ],
  },
  
  cautions: {
    title: 'Cautions & Limitations',
    intro: 'While the science of blue light and circadian rhythm is well-established, it\'s important to maintain perspective and recognize the limitations of current knowledge.',
    considerations: [
      'Individual sensitivity to blue light varies significantly based on age, genetics, and other factors',
      'The effects depend heavily on light intensity, duration, timing, and wavelength composition—not all blue light exposure is problematic',
      'Blue light is not inherently harmful; it plays important roles in daytime alertness, mood regulation, and circadian synchronization',
      'Many factors beyond blue light affect sleep quality, including stress, caffeine, alcohol, exercise timing, and sleep disorders',
      'The research on blue light blocking interventions shows mixed results, and more high-quality studies are needed',
      'Completely eliminating blue light exposure is neither necessary nor desirable—the goal is appropriate timing and intensity',
    ],
  },
};
