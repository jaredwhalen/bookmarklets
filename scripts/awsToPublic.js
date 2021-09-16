//AWS → Public S3
(function() {
    async function copySomething(text) {
        try {
            const toCopy = text;
            await navigator.clipboard.writeText(toCopy);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
    navigator.clipboard.readText().then(str => {
        let url = str.replace('.s3.us-east-1.amazonaws.com', '');
        copySomething(url);
    }).catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    })
})()
