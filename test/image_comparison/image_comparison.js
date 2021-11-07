const imageToBase64 = require('image-to-base64');
const assert = require('assert');

describe('Local and fetched image comparison', () => {
    const downloadURL = 'http://apimeme.com/meme?meme=Alarm-Clock&top=Top+text&bottom=Bottom+text';
    const localFileName = '/example.jpeg';
    before(async () => {
        const downloadedPicture = await imageToBase64(downloadURL);
        assert.strictEqual(downloadedPicture !== null, true);
    });

    it('Success if downloaded image matches with local file', async () => {
        const downloadedPicture = await imageToBase64(downloadURL);
        const referencePicture = await imageToBase64(__dirname + localFileName);
        assert.strictEqual(referencePicture, downloadedPicture);
    });
});
