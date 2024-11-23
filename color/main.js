import codes from '../data.json' with {type: 'json'};

for (let i = 0; i < codes.length; i++) {
    const ar = codes[i];
    outDiv.insertAdjacentHTML('beforeend', `<div><span>${String.fromCodePoint(...ar, 65039)}</span><span>${String.fromCodePoint(...ar, 65038)}</span></div>`);
    await scheduler.yield();
}

