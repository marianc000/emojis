import codes from '../data.json' with {type: 'json'};

for (let i = 0; i < codes.length; i++) {
    const ar = codes[i];
    outDiv.insertAdjacentText('beforeend', String.fromCodePoint(...ar ) );
 
    await scheduler.yield();
}

