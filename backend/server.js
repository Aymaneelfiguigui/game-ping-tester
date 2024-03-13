const express = require('express');
const { exec } = require('child_process');
let cors = require("cors");

const app = express();
app.use(cors());



app.get('/ping', (req, res) => {
    exec('ping -n 4 riot.de', (err, stdout, stderr) => {
        if(err){
            console.log("something went wrong", err)
            res.status(500).send('Something went wrong')
        }
        if (stderr){
            console.log("stderr", stderr)
        }

        //const pingTime = parsePingResult(stdout)
        const pingTime = stdout.split('Moyenne = ')[1].split('ms')[0]
        const ping = parseFloat(pingTime)
        res.status(200).json({ping: ping})
    });
});

function parsePingResult(result) {
    // Parse ping output to extract ping time (example implementation)
    // You may need to adjust this depending on the format of the ping output
    const ping = str.substring(str.indexOf("Moyenne = "))
    const pingTime = parseFloat(summaryLine.split('=')[1].split(' ')[0]);
    return pingTime;
  }
  
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
    