const http = require('http');

const API_URL = 'http://localhost:3000/bfhl';

const testCases = [
    {
        name: "Example A",
        data: ["a","1","334","4","R", "$"]
    },
    {
        name: "Example B", 
        data: ["2","a", "y", "4", "&", "-", "*", "5","92","b"]
    },
    {
        name: "Example C",
        data: ["A","ABcD","DOE"]
    }
];

function makeRequest(testData) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({ data: testData.data });
        
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/bfhl',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = http.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    resolve(response);
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(postData);
        req.end();
    });
}

async function runTests() {
    console.log('Starting API Tests...\n');
    
    for (const testCase of testCases) {
        try {
            console.log(`Testing ${testCase.name}`);
            console.log(`Input: ${JSON.stringify(testCase.data)}`);
            
            const response = await makeRequest(testCase);
            
            console.log('Response:');
            console.log(JSON.stringify(response, null, 2));
            console.log('\n' + '─'.repeat(50) + '\n');
            
        } catch (error) {
            console.error(`Test ${testCase.name} failed:`, error.message);
            console.log('\n' + '─'.repeat(50) + '\n');
        }
    }
}

const checkServer = http.request({
    hostname: 'localhost',
    port: 3000,
    path: '/health',
    method: 'GET'
}, (res) => {
    if (res.statusCode === 200) {
        console.log('Server is running!\n');
        runTests();
    } else {
        console.error('Server responded with status:', res.statusCode);
    }
});

checkServer.on('error', (error) => {
    console.error('Cannot connect to server. Make sure it\'s running on port 3000');
    console.error('Start the server with: npm start');
});

checkServer.end();