//Public S3 → Fallback
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
    let rx = /https:\/\/graphics\.axios\.com\/(.*)\//g;
    let slug = rx.exec(str)[1];
    let fallback = `https://graphics.axios.com/${slug}/fallbacks/${slug}-social.png`;
    copySomething(fallback);
}).catch(err => {
    console.error('Failed to read clipboard contents: ', err);
})
})()
