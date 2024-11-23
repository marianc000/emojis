import codes from '../data.json' with {type: 'json'};

for (let i = 0; i < codes.length; i++) {
    const ar = codes[i];
    outDiv.insertAdjacentText('beforeend', String.fromCodePoint(...ar,65039)+String.fromCodePoint(...ar,65038)+' ');
 
    await scheduler.yield();
}

