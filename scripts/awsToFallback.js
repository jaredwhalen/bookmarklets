//AWS → Fallback
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
    let rx = /https:\/\/graphics\.axios\.com\/(.*)\//g;
    let slug = rx.exec(url)[1];
    let fallback = `https://graphics.axios.com/${slug}/fallbacks/${slug}-social.png`;
    copySomething(fallback);
}).catch(err => {
    console.error('Failed to read clipboard contents: ', err);
})
