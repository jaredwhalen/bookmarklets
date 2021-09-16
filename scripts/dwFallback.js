//DW fallback
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
        let fallback = str.replace(/[0-9]+\/$/g, 'social.png');
        copySomething(fallback);
    }).catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    })
})()
