// Recover the self-contained editable HTML locally. Keep decrypted.html private.
import fs from 'node:fs';
import {pbkdf2Sync,createDecipheriv} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
const password=process.env.STUDY_PASSWORD;
if(!password)throw Error('Set STUDY_PASSWORD in this process environment first.');
const vault=JSON.parse(fs.readFileSync(new URL('./vault.json',import.meta.url),'utf8'));
const salt=Buffer.from(vault.salt,'base64'),iv=Buffer.from(vault.iv,'base64'),data=Buffer.from(vault.ciphertext,'base64');
const key=pbkdf2Sync(password,salt,vault.iterations,32,'sha256');
const decipher=createDecipheriv('aes-256-gcm',key,iv);decipher.setAuthTag(data.subarray(-16));
const html=gunzipSync(Buffer.concat([decipher.update(data.subarray(0,-16)),decipher.final()]));
fs.writeFileSync(new URL('./decrypted.html',import.meta.url),html);
console.log('Recovered decrypted.html locally. Do not commit or publish this plaintext file.');
