//Hermes fallback
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
        let slug = str.replace('https://graphics.axios.com/hermes/', '').replace('/index.html', '');
        let fallback = `https://graphics.axios.com/hermes/${slug}/fallbacks/${slug}-social.png`;
        copySomething(fallback);
    }).catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    })
})()
