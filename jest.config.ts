module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest', 
            {
                isolatedModules: true,
                esModuleInterop: true
            }
        ]
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testMatch: ['**/*.(test|spec).(ts|tsx)'],
    moduleNameMapper:{
      '@/(.*)' : '<rootDir>/src/$1'      
    }
};

