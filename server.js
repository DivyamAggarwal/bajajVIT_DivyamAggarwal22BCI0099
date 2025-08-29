const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const USER_INFO = {
    full_name: "Divyam",
    birth_date: "26072004",
    email: "divyam@gmail.com",
    roll_number: "22BCI0099"
};

function processArray(data) {
    try {
        const result = {
            is_success: true,
            user_id: `${USER_INFO.full_name}_${USER_INFO.birth_date}`,
            email: USER_INFO.email,
            roll_number: USER_INFO.roll_number,
            odd_numbers: [],
            even_numbers: [],
            alphabets: [],
            special_characters: [],
            sum: "0",
            concat_string: ""
        };

        let numSum = 0;
        let alphabetChars = [];

        data.forEach(item => {
            const str = String(item);
            
            if (/^\d+$/.test(str)) {
                const num = parseInt(str);
                numSum += num;
                
                if (num % 2 === 0) {
                    result.even_numbers.push(str);
                } else {
                    result.odd_numbers.push(str);
                }
            }
            else if (/^[a-zA-Z]+$/.test(str)) {
                result.alphabets.push(str.toUpperCase());
                alphabetChars.push(...str.toLowerCase().split(''));
            }
            else {
                result.special_characters.push(str);
            }
        });

        result.sum = String(numSum);

        alphabetChars.reverse();
        result.concat_string = alphabetChars.map((char, index) => {
            return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
        }).join('');

        return result;
    } catch (error) {
        return {
            is_success: false,
            user_id: `${USER_INFO.full_name}_${USER_INFO.birth_date}`,
            email: USER_INFO.email,
            roll_number: USER_INFO.roll_number,
            error: "Error processing data"
        };
    }
}

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                user_id: `${USER_INFO.full_name}_${USER_INFO.birth_date}`,
                email: USER_INFO.email,
                roll_number: USER_INFO.roll_number,
                error: "Invalid input: 'data' must be an array"
            });
        }

        const result = processArray(data);
        res.status(200).json(result);
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            is_success: false,
            user_id: `${USER_INFO.full_name}_${USER_INFO.birth_date}`,
            email: USER_INFO.email,
            roll_number: USER_INFO.roll_number,
            error: "Internal server error"
        });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: "Server is running",
        timestamp: new Date().toISOString()
    });
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: "BFHL API is running",
        endpoints: {
            POST: "/bfhl - Main processing endpoint",
            GET: "/bfhl - Operation code endpoint",
            GET: "/health - Health check"
        }
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        error: "Something went wrong!"
    });
});

app.use((req, res) => {
    res.status(404).json({
        is_success: false,
        error: "Endpoint not found"
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📍 Local URL: http://localhost:${PORT}`);
    console.log(`🔗 API Endpoint: http://localhost:${PORT}/bfhl`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/health`);
});

module.exports = app;
